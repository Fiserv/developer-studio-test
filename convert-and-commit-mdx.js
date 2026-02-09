const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const docsFolder = path.join(__dirname, "docs");
const productName = process.argv[2];
console.log("productName--->", productName);

/******start script*******/

/**
 * Minimal HTML entity decoder — replacement strings MUST be quoted.
 * Example: "Hello &amp;lt;strong&amp;gt;World&amp;lt;/strong&amp;gt; &amp;amp; enjoy &amp;quot;coding&amp;quot; &amp;#39;everyday&amp;#39;!"
 */
function decodeEntitiesFast(s) {
  return s
    .replace(/&lt;/g, "<") // ✅ quoted
    .replace(/&gt;/g, ">") // ✅ quoted
    .replace(/&amp;/g, "&") // ✅ quoted
    .replace(/&quot;/g, '"') // ✅ quoted
    .replace(/&#39;|&apos;/g, "'"); // ✅ quoted
}

/**
 * Normalize common problematic constructs.
 * Examples: "Some text <!-- This is a hidden note --> more text", "Here is a </br> line break", 'He said “Hello”', etc.
 */
function normalizeBasics(s) {
  return (
    s
      // Replace all comments to avoid issues during compilation
      .replace(/<!--.*?-->/gs, "")
      // Remove raw and escaped HTML comments
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/&lt;!--[\s\S]*?--&gt;/g, "")
      // Fix invalid </br>
      .replace(/<\/br>/gi, "<br />")
      // Normalize smart quotes
      .replace(/[“”]/g, '"')
      // Normalize smart single quotes/apostrophes
      .replace(
        /<\s*Insert\s+Email\s+address\s+here\s*>/i,
        "[ Email address here ]",
      )
      .replace(/<p>/gi, "\n\n")
      .replace(/<\/p>/gi, "\n\n")
  );
}

/**
 * Convert invalid `[<img...>` into valid `!alt`.
 * Wrap href in angle brackets to survive parentheses in query strings.
 * Example: `[ <img src="image.png" alt="An image" /> ](https://example.com/page?param=(value))`,
 * becomes `![An image](https://example.com/page?param=(value))`, or `!image` if no alt is found.
 */
function fixImgInMarkdownLink(mdx) {
  return mdx.replace(
    // [ <img ...> ] ( href )
    /\[\s*<img\b([^>]*)>\s*\]\(\s*([^)\s]+(?:\([^)]*\)[^)\s]*)*[^)]*)\s*\)/gi,
    (_match, imgAttrs) => {
      // Extract src and alt — allow "double", 'single', or unquoted
      const srcMatch =
        /src\s*=\s*"(.*?)"|src\s*=\s*'(.*?)'|src\s*=\s*([^\s"'>]+)/i.exec(
          imgAttrs,
        );
      const altMatch =
        /alt\s*=\s*"(.*?)"|alt\s*=\s*'(.*?)'|alt\s*=\s*([^\s"'>]+)/i.exec(
          imgAttrs,
        );

      const src =
        (srcMatch && (srcMatch[1] || srcMatch[2] || srcMatch[3])) || "";
      const alt =
        (altMatch && (altMatch[1] || altMatch[2] || altMatch[3])) || "image";

      // If no src, avoid breaking: point the image to "#"
      const imgMd = src ? `!${alt}` : `!${alt}`;
      return `${imgMd}`;
    },
  );
}

/**
 * Protects the specific token `<signature>` by wrapping it in backticks.
 * Handles both escaped (`&lt;signature&gt;`) and raw (`<signature>`) variants.
 * This prevents MDX/Markdown parsers from misinterpreting it.
 * Examples: "Please sign with &lt;signature&gt;" becomes "Please sign with `<signature>`".
 */
function protectSignatureToken(text) {
  // Escaped variant
  let out = text.replace(/&lt;signature&gt;/gi, "`<signature>`");
  // Optional raw variant (if your source sometimes has actual <signature>)
  out = out.replace(/<signature>/gi, "`<signature>`");
  return out;
}
/**
 * Protects the specific token `<field>` by wrapping it in backticks.
 * Handles both escaped (`&lt;field&gt;`) and raw (`<field>`) variants.
 * This prevents MDX/Markdown parsers from misinterpreting it.
 * Examples: "Please sign with &lt;field&gt;" becomes "Please sign with `<field>`".
 */
function protectFieldToken(text) {
  // Escaped variant
  let out = text.replace(/&lt;field&gt;/gi, "`<field>`");
  // Optional raw variant (if your source sometimes has actual <field>)
  out = out.replace(/<field>/gi, "`<field>`");
  return out;
}

/**
 * Removes inline style blocks from MDX content:
 * - Escaped HTML: &lt;style&gt; ... &lt;/style&gt;
 * - Raw HTML (optional): <style> ... </style>
 * Uses a non-greedy match across lines and is case-insensitive.
 * Also removes style attributes from remaining HTML tags (optional).
 * Example: "Here is &lt;style&gt; body { color: red; } &lt;/style&gt; some text" becomes "Here is  some text".
 */
function stripStyleBlocks(text) {
  let s = text;

  // 1) Remove escaped style blocks: &lt;style&gt; ... &lt;/style&gt;
  s = s.replace(/&lt;style\b[^&]*?&gt;[\s\S]*?&lt;\/style&gt;/gi, "");

  // 2) (Optional) Remove raw style blocks: <style> ... </style>
  // Enable this if your pipeline sometimes produces real <style> tags
  s = s.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");

  // 3) (Optional) Remove style attributes from remaining HTML tags
  s = s.replace(/\s*style="[^"]*"/gi, "");

  return s;
}

/**
 * Protects bare identifiers like `{ipgTransactionId}` by replacing them with HTML entities.
 * This prevents MDX/Markdown parsers from misinterpreting them as expressions.
 * Example: "Your transaction ID is {ipgTransactionId}" becomes "Your transaction ID is &#123;ipgTransactionId&#125;".
 */
function protectBareIdentifiers(text) {
  // Protect literal `{ipgTransactionId}` so MDX doesn't evaluate it
  return (
    text
      // encoded braces that will get decoded later
      .replace(
        /&#123;\s*ipgTransactionId\s*&#125;/gi,
        "&#123;ipgTransactionId&#125;",
      ) // keep as entities
      // raw braces → replace with literal text
      .replace(
        /\{(\s*)ipgTransactionId(\s*)\}/gi,
        "&#123;$1ipgTransactionId$2&#125;",
      )
  );
}

/**
 * Protects path parameters like `{order-id}` by replacing them with HTML entities.
 * This prevents MDX/Markdown parsers from misinterpreting them as expressions.
 * Example: "The endpoint is /orders/{order-id}" becomes "The endpoint is
 */
function protectPathParams(text) {
  // Convert raw {param} into literal entity braces, e.g., {order-id} → &#123;order-id&#125;
  return text.replace(
    /\{([A-Za-z][A-Za-z0-9_-]*)\}/g,
    (_m, name) => `&#123;${name}&#125;`,
  );
}

/**
 * Insert the escaped Tags component immediately after a top-of-file frontmatter block
 * IFF the escaped component is NOT already present. Uses no regex for the presence check.
 *
 * - Detects frontmatter by scanning lines for a leading '---' and matching closing '---'.
 * - Checks for presence of the exact escaped string: "&lt;Tags tags={frontmatter.tags} /&gt;"
 * - Idempotent: if the escaped component already exists anywhere after frontmatter, no injection.
 * - If there is no top-of-file frontmatter, returns input unchanged.
 * Example:
 * Input:
 * ---
 * title: Sample Document
 * tags: [tag1, tag2]
 * ---
 * # Hello World
 * Output:
 * ---
 * title: Sample Document
 * tags: [tag1, tag2]
 * &lt;Tags tags={frontmatter.tags} /&gt;
 * # Hello World
 */
function injectEscapedTagsAfterFrontmatter(input) {
  if (!input) {
    return input;
  }

  // Normalize newline to '\n'
  const s = input.replace(/\r\n/g, "\n");

  // Fast path: if the escaped component is already present anywhere, do nothing.
  // (No regex—simple substring search)
  const escapedTagLine = "<Tags tags={frontmatter.tags} />";
  if (s.includes(escapedTagLine)) {
    return s;
  }

  // Detect frontmatter at the very top without regex:
  // - First non-empty line must be '---'
  // - Find the matching closing '---'
  const lines = s.split("\n");

  // Skip any leading empty lines (rare, but safe)
  let i = 0;
  while (i < lines.length && lines[i].trim() === "") {
    i++;
  }

  // Must start with a frontmatter opener
  if (i >= lines.length || lines[i].trim() !== "---") {
    return s; // No frontmatter at top → do nothing
  }

  const startIdx = i;
  let endIdx = -1;
  for (let j = startIdx + 1; j < lines.length; j++) {
    if (lines[j].trim() === "---") {
      endIdx = j;
      break;
    }
  }

  if (endIdx === -1) {
    // Unterminated frontmatter → do nothing
    return s;
  }

  // Reconstruct with injection right after the closing '---'
  const before = lines.slice(0, endIdx + 1).join("\n"); // includes closing '---'
  const after = lines.slice(endIdx + 1).join("\n");

  // Ensure a blank line before and after the escaped component for readability
  const needsLeadingNewline = after.length > 0 && !after.startsWith("\n");
  const insertion = `\n${escapedTagLine}\n` + (needsLeadingNewline ? "\n" : "");

  return before + insertion + after;
}

// 1) Escape angle-bracketed emails: <user@domain.tld> -> &lt;user@domain.tld&gt;
function escapeAngleBracketEmails(s) {
  return s.replace(
    /<([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})>/g,
    "&lt;$1&gt;",
  );
}

// 2) Convert angle-bracketed URLs with scheme: <https://example.com> -> https://example.com
function convertAngleBracketUrlsWithSchemeToLinks(s) {
  return s.replace(/<(https?:\/\/[^\s>]+)>/gi, (_m, url) => `${url}`);
}

// 3) Convert angle-bracketed bare domains: <www.opensource.org> -> www.opensource.org
//    - Matches domains like www.example.com, example.org, sub.example.co.uk
//    - Avoids matching real tags by requiring a dot and forbidding spaces/angle brackets inside.
function convertAngleBracketBareDomainsToLinks(s) {
  return s.replace(
    /<((?:www\.)?[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+(?:\/[^\s>]*)?)>/g,
    (_m, domain) => {
      // If it already looks like a path-only "/something", skip (that’s not a domain)
      if (domain.startsWith("/")) {
        return `<${domain}>`;
      }
      return `${domain}`;
    },
  );
}

// 4) Self-close void HTML elements: <br>, <hr>, <img ...>, etc. -> <br />, <hr />, <img ... />
function selfCloseVoidElements(s) {
  // Matches <br>, <hr>, <img ...>, etc., that are NOT already self-closed
  const voidTags = ["br", "hr", "img", "input", "meta", "link"];
  const pattern = new RegExp(
    // <tagName [attrs] >
    `<\\s*(${voidTags.join("|")})\\b([^>]*)>`,
    "gi",
  );

  return s.replace(pattern, (_m, tagName, attrs) => {
    // If already self-closed (/>), keep as-is
    if (attrs && /\/\s*$/.test(attrs)) {
      return `<${tagName}${attrs}>`; // already like <img .../> or <br/>
    }
    // Otherwise make it self-closed; normalize spacing
    const normalizedAttrs = attrs ? attrs.replace(/\s+$/, "") : "";
    return `<${tagName}${normalizedAttrs} />`;
  });
}

/**
 * Convert custom tab comment blocks into MDX <Tabs> components.
 *
 * Input format:
 * <!--
 * type: tab
 * titles: Title A, Title B, Title C
 * -->
 * ...content for tab A...
 * <!--
 * type: tab
 * -->
 * ...content for tab B...
 * <!--
 * type: tab
 * -->
 * ...content for tab C...
 * <!-- type: tab-end -->
 *
 * - Supports multiple such groups in one document.
 * - If the number of content sections differs from the number of titles:
 *   - Extra content sections get names "Tab N".
 *   - Extra titles are ignored.
 * Returns:
 *<Tabs defaultValue="Title A">
    <TabsList>
      <TabsTrigger value="Title A">Title A</TabsTrigger>
      <TabsTrigger value="Title B">Title B</TabsTrigger>
    </TabsList>
    <TabsContent value="Title A">...content for tab A... <br/></TabsContent>
    <TabsContent value="Title B">...content for tab B... <br/></TabsContent>
  </Tabs>
 */
function convertCustomTabMdToMdx(md) {
  const commentRe = /<!--\s*([\s\S]*?)\s*-->/g;

  const splitTitles = (line) => {
    // Split by commas; trim whitespace; strip surrounding quotes if present.
    return line
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => s.replace(/^["']|["']$/g, ""));
  };

  const escapeAttr = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const escapeText = (s) => s; // Keep visible text as-is.

  let result = "";
  let cursor = 0;

  while (true) {
    commentRe.lastIndex = cursor;
    const startMatch = commentRe.exec(md);
    if (!startMatch) {
      // No more comments—append remainder and finish
      result += md.slice(cursor);
      break;
    }

    const startInner = startMatch[1];

    // Must be a "type: tab" block that also includes "titles:"
    const isStartTab =
      /\btype\s*:\s*tab\b/i.test(startInner) &&
      /\btitles\s*:/i.test(startInner);

    if (!isStartTab) {
      // Not the start of a tabs group; keep this comment untouched and continue.
      result += md.slice(cursor, startMatch.index + startMatch[0].length);
      cursor = startMatch.index + startMatch[0].length;
      continue;
    }

    // Append content before the tabs group
    result += md.slice(cursor, startMatch.index);

    // Extract titles line
    const titlesLineMatch = startInner.match(/titles\s*:\s*([^\n\r]+)/i);
    const titlesStr = titlesLineMatch ? titlesLineMatch[1].trim() : "";
    const parsedTitles = splitTitles(titlesStr);

    // Collect boundaries: start content, middle tab markers, and end marker
    const startContentStart = startMatch.index + startMatch[0].length;
    const separators = [startContentStart];

    let endStart = -1;
    let endEnd = -1;

    // Walk forward through comments to find "type: tab" (middle) and "type: tab-end" (end)
    while (true) {
      const m = commentRe.exec(md);
      if (!m) {
        break; // unmatched; we'll just leave original content for safety
      }

      const inner = m[1];
      if (/\btype\s*:\s*tab-end\b/i.test(inner)) {
        endStart = m.index;
        endEnd = m.index + m[0].length;
        separators.push(endStart);
        break;
      }

      const isMiddleTab =
        /\btype\s*:\s*tab\b/i.test(inner) && !/\btitles\s*:/i.test(inner);
      if (isMiddleTab) {
        separators.push(m.index);
      }
    }

    // If we never found an end marker, preserve the original start block and continue
    if (endStart === -1) {
      result += md.slice(
        startMatch.index,
        startMatch.index + startMatch[0].length,
      );
      cursor = startMatch.index + startMatch[0].length;
      continue;
    }

    // Build segments between separators
    const segments = [];
    for (let i = 0; i < separators.length - 1; i++) {
      const segStart = separators[i];
      const segEnd = separators[i + 1];
      segments.push(md.slice(segStart, segEnd).trim());
    }

    // Normalize titles count vs segments
    const titles = [];
    for (let i = 0; i < segments.length; i++) {
      titles[i] = parsedTitles[i] ? parsedTitles[i] : `Tab ${i + 1}`;
    }

    const defaultValue = titles[0] || "Tab 1";

    // Compose MDX block
    const lines = [];
    lines.push(`<Tabs defaultValue="${escapeAttr(defaultValue)}">`);
    lines.push(`  <TabsList>`);
    for (const t of titles) {
      lines.push(
        `    <TabsTrigger value="${escapeAttr(t)}">${escapeText(t)}</TabsTrigger>`,
      );
    }
    lines.push(`  </TabsList>`);
    titles.forEach((t, idx) => {
      lines.push(`  <TabsContent value="${escapeAttr(t)}">`);
      lines.push("");
      lines.push(segments[idx]);
      lines.push(" <br/>");
      lines.push(`  </TabsContent>`);
    });
    lines.push(`</Tabs>`);

    result += lines.join("\n");
    cursor = endEnd; // Move past the end marker
  }

  return result;
}

/**
 * Rewrite ../api/?type=<verb>&path=/foo/bar to /product/<slug>/api/<verb>/foo/bar
 * Handles & and &amp; in query.
 * Call this with the current page route to inject the product slug dynamically.
 */
function normalizeApiQueryLinks(input, productName) {
  if (!productName) {
    return input; // Can't determine product, leave as-is
  }
  const AMP = "(?:&|&amp;)";
  // Matches markdown URLs and HTML href attributes containing ../api/?type=...&path=...
  const re = new RegExp(
    String.raw`((?:href\s*=\s*["']|)\s*)(\.{0,2}\/api)(\/\??)type=([a-zA-Z]+)${AMP}path=\/?([^"')\s]+)`,
    "g",
  );

  return input.replace(re, (_m, pre, _apiPrefix, _sep, type, rawPath) => {
    const cleanPath = rawPath.replace(/^\/+/, "");
    // Build root-relative to avoid being trapped under /docs
    const normalized = `/product/${productName}/api/${type.toLowerCase()}/${cleanPath}`;
    if (/href\s*=\s*["']$/i.test(pre)) {
      return `${pre}${normalized}`;
    }
    return `${normalized}`;
  });
}

/**
 * Safely quote unquoted HTML attribute values inside *lowercase* HTML tags.
 *
 * Why it's safe:
 * - Only runs on tags like <a>, <button>, <h4>, <ul>, etc. (lowercase first char).
 * - Skips MDX/JSX components like <Tags>, <Row>, <LaunchPoint.Table> entirely.
 * - Does not touch values that are already quoted or are JSX expressions (={...}).
 * - Leaves boolean attributes (disabled, checked) intact when used without `=`.
 *
 * Examples:
 *   <button type=button class=btn>      -> <button type="button" class="btn">
 *   <a href=https://... target=_blank>  -> <a href="https://..." target="_blank">
 *   <Tags tags={['a','b']} />           -> unchanged
 *   <div data-count={n}>                -> unchanged
 */
function quoteUnquotedHtmlAttrsSafe(input) {
  // Regex to find start tags for lowercase HTML elements:
  //   <div ...>, <a ...>, <button ...>, <h4 ...>, etc.
  // This intentionally *excludes* capitalized MDX/JSX components.
  const tagStartRe = /<([a-z][a-z0-9:-]*)\b([^>]*?)>/g;

  return input.replace(tagStartRe, (_m, tagName, rawAttrs) => {
    if (!rawAttrs || !rawAttrs.trim()) {
      return `<${tagName}>`;
    }

    // Within the attribute string, quote any bare values that:
    // - follow "="
    // - are not starting with { (JSX expression)
    // - are not already quoted with " or '
    // - do not contain forbidden characters like < or >
    //
    // Attribute name pattern: supports data-*, aria-*, class, id, etc.
    // Value pattern: stops at whitespace or tag boundary, avoids quotes/braces.
    const fixedAttrs = rawAttrs.replace(
      /(\s+[a-zA-Z_:.-]+)\s*=\s*([^\s"'=<>`{][^\s"'<>=`]*)/g,
      (_m2, attrNameWithSpace, value) => {
        // Preserve common boolean-like patterns that sometimes appear as bare values such as Y/N
        // Still quote them because JSX requires quoting. If you prefer not to quote certain attrs,
        // list them here and return unchanged.
        // const attrKey = attrNameWithSpace.trim().toLowerCase();
        // if (['disabled', 'checked', 'readonly', 'multiple'].includes(attrKey)) {
        //   return attrNameWithSpace; // without =value (boolean short form)
        // }

        // Avoid accidental quoting of patterns that look like URLs but are fine:
        // we still quote them to satisfy MDX JSX.
        return `${attrNameWithSpace}="${value}"`;
      },
    );

    return `<${tagName}${fixedAttrs}>`;
  });
}

/**
 * Preprocess MDX to be CommonMark/remark-friendly.
 */
function preprocessMdxToMarkdown(raw, productName) {
  let s = normalizeBasics(raw);

  // Insert escaped Tags component if frontmatter has tags
  s = injectEscapedTagsAfterFrontmatter(s);

  // ✅ Remove escaped and raw <style> blocks BEFORE decoding entities
  s = stripStyleBlocks(s);

  // 🔒 Protect the specific token BEFORE decoding entities
  s = protectSignatureToken(s);
  // 🔒 Protect bare identifiers BEFORE decoding entities
  s = protectBareIdentifiers(s);
  // 🔒 Protect path parameters BEFORE decoding entities
  s = protectPathParams(s);
  // 🔒 Protect the specific token <field> BEFORE decoding entities
  s = protectFieldToken(s);

  // 🔗 ✅ Rewrite /api/?type=...&path=... to /api/<type>/<path>
  s = normalizeApiQueryLinks(s, productName);

  // Now decode entities and perform other fixes
  s = decodeEntitiesFast(s);

  // ✅ Quote only in lowercase HTML tags; skip MDX components
  s = quoteUnquotedHtmlAttrsSafe(s);

  // 🔒 Emails like <John.Doe@example.com>
  s = escapeAngleBracketEmails(s);

  // 🔗 URLs with scheme: <https://developer.fiserv.com>
  s = convertAngleBracketUrlsWithSchemeToLinks(s);

  // 🌐 Bare domains: <www.opensource.org>, <example.org/docs>
  s = convertAngleBracketBareDomainsToLinks(s);

  // 🔧 Self-close void HTML elements
  s = selfCloseVoidElements(s);

  // 🛠 Fix images inside markdown links
  s = fixImgInMarkdownLink(s);
  return s;
}

/******end script*********/

function convertMdToMdx(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      convertMdToMdx(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const mdxFile = path.join(dir, entry.name.replace(/\.md$/, ".mdx"));

      // Read .md content
      let content = fs.readFileSync(fullPath, "utf-8");
      content = convertCustomTabMdToMdx(content);
      content = preprocessMdxToMarkdown(content, productName);

      // ✅ Always overwrite .mdx file
      fs.writeFileSync(mdxFile, content, "utf-8");

      console.log(
        `Converted (overwritten if existed): ${fullPath} → ${mdxFile}`,
      );
    }
  });
}

// Start conversion
convertMdToMdx(docsFolder);

// Add and commit new .mdx files

try {
  execSync("git add docs convert-and-commit-mdx.js", { stdio: "inherit" });

  // Only commit if there are staged changes
  const status = execSync("git status --porcelain").toString().trim();
  if (status) {
    execSync(
      'git commit -m "Add/Update converted .mdx files from .md and fix content."',
      { stdio: "inherit" },
    );
    console.log("✅ New .mdx files committed to Git.");
  } else {
    console.log("ℹ️ No changes to commit.");
  }
} catch (error) {
  console.error("❌ Error during Git commit:", error.message);
}

// node convert-and-commit-mdx.js

# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

---

**Bold text**

*Italic text*

~~Strikethrough~~

This is a [link to example.com](https://example.com).

---

## Unordered List

- Item 1
- Item 2
    - Nested Item 2a
    - Nested Item 2b

## Ordered List

1. First item
2. Second item
    1. Sub-item a
    2. Sub-item b

## Inline Code

Here is some `inline code`.

## Code Block

```js
// JavaScript code block
console.log('Hello, Markdown!');
```

## Table
| Column 1 | Column 2 |
|----------|----------|
| Row 1    | Data 1   |
| Row 2    | Data 2   |

## Task list
- [x] Task 1 completed
- [ ] Task 2 not completed
- [ ] Task 3 not completed

## Special Characters

Emoji: 😃
Accents: café, naïve, résumé

## Blockquotes

> This is a regular blockquote.

<Alert theme="info">This is a informational blockquote.</Alert>

<Alert theme="success">This is a success blockquote.</Alert>

<Alert theme="warning">This is a warning blockquote.</Alert>

<Alert theme="danger">This is a danger blockquote.</Alert>

## Links

Different ways to create links.

1. To link Inline-style
[I'm an inline-style link](https://www.google.com)

2. To link Reference-style
[I'm an inline-style link](https://www.google.com "Google's Homepage")

3. To link to API explorer from documentation pages
[API page](../api?type=post&path=/v1/apis)

4. To link/reference to another document/markdown
[Charge](?path=docs/Transactions/Charges.md)

5. To create anchor link within the page. You can place anchor by declaring <a name = "portal"></a>. Now you can reference this link anywhere within the page by declaring link such as [Dev Portal](#portal)

6. Email link
[Email Link](mailto:contact@example.com)

# Images

Different ways to display images

1. Here's our logo ( hover to see the title text ):
![Fiserv Logo](../assets/images/cat-dog.png "Cat Dog")

2. External image with title
![External Image 1](https://cloverstatic.com/web/apps/cloverdotcom/release::v2.133.0-ecc0ac9663826/assets/media/clover-mark-green.d9cb217736455be82b63498c3c4286a2.svg "Clover")

3. Gif image
![Internal Image 1](../assets/images/test_small_gif.gif)

# Downloadable File Links

Different ways to provide downloadable file links

1. External download link:  
[External Download Link](https://github.com/Fiserv/remote-actions/blob/main/assets/files/nyan-cat.txt)

2. Internal download link:  
[Internal Download Link](../assets/images/test_tiff_lowercase.tiff)

## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

```no-highlight
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
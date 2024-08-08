# Setup a tenant

## Quickstart Guide

Fiserv Products within the Fiserv portfolio that are showcased through the studio are known as `tenants`. Tenants standup a `tenant server` that will serve all the content through the studio for developers visiting the Fiserv Developer Studio.

## Cloning the Github tenant repoistory

An example Github repository has already been prepared for you to clone.

Head to [Sample tenant repo] and create a new repository based along this by using the 'New' button.

Tenant can build their own tenant server code by following our guidelines. Please refer to this document before moving on to the next process [Code Tenant]

Your repository name should match with your product name.

You've not got a tenant repoistory.

## Configure your tenant

Now that you've got your repository we need edit the configuration files.

There are few main files need to be edited for the Fiserv Developer Studio to load the tenant data properly.

Your edits will be made in the `develop` branch.

### Edit the tenant.json

The `tenant.json` contains metadata information about your product.

The file is located, from the repoistiory root, `/config/tenant.json`.

### Edit the product-layout.yaml

The `product-layout.yaml` determines what you want to display on your `product overview page`. The file is located, from the repoistiory root, `/config/product-layout.yaml`.

The file has several sections for each card that shows on the product overview page.

### Edit the document-explorer-definition.yaml

The `document-explorer-definition.yaml` controls what you want to display on left-side navigation bar for document explorer on tenant page. 

The file is located, from the repoistiory root, `/config/document-explorer-definition.yaml`.


## Connect Stoplight

To make creating or editing your content easier we're going to connet your Github repository to Stoplight.io.

Head to the [Fiserv Stoplight] and signup.

Once you're there create a project with the same name as your product.

Then head into the settings to connect your github.

## Create your content

You can go into `Stoplight Studio` to create your API specification or markdown files.

### Markdown documentation

All the documentation files follow the Markdown guides, which you can find here [Markdown Support]

Details on the folder structure are [here]

For now you can edit the existing sample `getting-started.md` file.

## Recap

You've now got
* Your Github repository cloned
* Your tenant config files have been edited
* Stoplight is connected to the repository
* You have an API specification file and markdown files edited


___

## Next steps 

[Deploy Tenant]

Need Help ?
[FAQ]

[//]: # (These are reference links used in markdown file)

[Sample tenant repo]: <https://github.com/fiserv/sample-tenant>

[Code Tenant]: <?path=docs/getting-started/code-a-tenant/code-tenant.md>

[Fiserv Stoplight]: <https://fiserv-portal.stoplight.io>

[Markdown Support]: <?path=docs/resources/markdown-support.md>

[here]: <?path=README.md>

[FAQ]: <?path=docs/faq/faq.md>

[Deploy Tenant]:<?path=docs/getting-started/setup-tenant/deploy-tenant.md>





# Deploy the tenant

## Quickstart Guide

Need to deploy your tenant application ? 

Quick start guide will provide you the necessary steps to get your Application setup, configure and deploy on Cloud Server really quick.

> Recommended : To complete following steps before proceeding to deployment process. 

    * Tenant Setup
    * Tenant Repository Setup

Developer is now ready to deploy your tenant application. Developer can delpoy application in any open cloud server. Here we are providing example for new application deployment within IBM cloud with OpenShift Cluster. 

## Deployment checklist

   * Installed and Running OpenShift cluster on cloud Server
   * SSH Setup completed to access application code from repository
   * SSH Private Key generated
    
## Recommended guidelines for deployment with Fiserv Dev Studio

Here are the following steps to integrate your new tenant application within OpenShift cluster. 

## Step 1: Login to IBM OpenShift cluster 

Tenant Developer can access [IBM Cloud] to navigate to Home page of OpenShift. 

Select your active cluster. Example: `<new-running-cluster>`

## Step 2: Click 'OpenShift web console' link as shown below

This link will navigate to Openshift Cluster Main page

![OpenShift webconsole]

## Step 3: Setting Role

Set the role to **Developer** and select **Topology**.

![OpenShift Developer Role]

## Step 4: Create New Project

Select **Create Project** from 'Project' dropdown menu.

![OpenShift Create Project]

## Step 5: Enter Project details

Enter Project Name as **`<sample-name>-workshop`** and click **Create**. developer can also set 'Display Name' and 'Description' same as your 'Project Name'. 

Now, developer is ready to create new project in this workspace. 

![OpenShift Enter Project]

## Step 6: Setting up Project

Select your project from the 'Project dropdown' and add your private SSH key under **Secrets** by following below steps:

* Click **Secrets** menu from left menu bar:

* Select **Create** dropdown present in Top Right Corner and select **Source Secret**. Developer have to set following details such as

    * **Secret Name** :  `<your-name>-SSH-Private-Key`
    * **Authentication type** : SSH
    * **SSH Private Key** : Develpor can browse the SSH private key from local machine or developer can paste it directly into Text Box.

## Step 7: Select +Add option

Select **+Add** option from menu to create new application. Developer have '4' different options to configure application from 

*   From GIT
*   Container Image
*   From Dockerfile
*   YAML

Here, we are creating an application using option **'From Docker'**


## Step 8: Repository Setup

Developer needs to provide repository URL to add into application. For example we are adding repository from BitBucket(`Ex:git@bitbucket.org:fiserv-digital-tech/dev-portal-ui.git`)

![Bitbucket Repo setup]

Now add the Git URL in **Git Repo URL** option on Import from Dockerfile page. Click **Show Advance Git Options**. 

> Note: Developer can configure with custom settings, as these configuration are setup for sample project. 

![Bitbucket Repo import] 

## Step 9: Developer needs to fill following information for the setup:

*   **Git Reference** : 'develop'

*   **Context Directory** : If 'Dockerfile' is at root level you can leave this option blank, Otherwise developer needs provide path of the Docker Files.

Example: `/<sub-directory>`

*   **Source Secret** : Select your SSH-Private-Key added from Step 6.

![docker setup]

## Step 10: Update General section

*   **Application**: Select Create Application and enter `<application-name>`. This is used for grouping your application created under your project. If developer want to create any Tenant Application state as 'Tenants'

*   **Name** : Name of the application, developer want to configure.Ex: dev-studio-ui

*   **Resources** : Please Select **Deployment Config** option.

![Update info]


## Step 11: Select Create

Click **Create** button to generate the application resource.

![Create app]

## Step 12: Generating Application

Now tenant developer should able to see application icon in your Topology view.

![Generate App]

Please wait until Build and Deployment is completed. Once completed icon should display like below.

![Deploy App]

## Step 13: Launching your application

Final step is to launch your application by clicking on Open URL. 

![Launch App]
 
___

## Next steps 
[Register Tenant]


Need Help ?
[FAQ]

[//]: # (These are reference links used in markdown file)

[OpenShift webconsole]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/OpenShit_web_console.png>

[OpenShift Developer Role]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/OpenShift_topology.png>

[OpenShift Create Project]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/OpenShift_project_drop_down.png>

[OpenShift Enter Project]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/OpenShift_create_project.png>

[Bitbucket Repo setup]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/Bitbucket_git_repo.png>

[Bitbucket Repo import]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/Openshift_git_project.png>

[docker setup]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/Openshift_git_project_setup.png>

[Update info]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/Openshift_create_application_start.png>

[Create app]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/Openshift_create_application_completed.png>

[Generate App]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/Openshift_app_icon.png>

[Deploy App]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/Openshift_app_ready.png>

[Launch App]: <https://gist.githubusercontent.com/f2zdirk/0d6e1e22180086f6169a2686a3ae1ec9/raw/22c36a3fbd595844296c2d25dc0e14b27d51e1ab/Openshift_app_launch.png>

[IBM Cloud]: <https://cloud.ibm.com/login>

[FAQ]: <?path=docs/faq/faq.md>

[Register Tenant]:<?path=docs/getting-started/setup-tenant/register-tenant.md>

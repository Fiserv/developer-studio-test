---
tags: [Getting Started, Postman, Tutorial]
---


# Postman Test Tutorial

This section aims to demostrate the initial settings that must be applied to Postman's Collection, before making requests to available Fiservs APIs.

If you have not used the Postman tool as an HTTP client to test requests, access the tool's official link for more information: [Postman Official](https://www.postman.com/)

Postman Collection will be share temporarily with each customer in accordance with their needs.

## Import Collection

### 1. Open Postman and click the import button to open the provided collection

![image](https://user-images.githubusercontent.com/111396588/223823808-2d79de52-0b42-4500-b6ee-31bf49c818ad.png)

### 2. After importing the collection, you will see the next one contains the requests divided by folders according to each entity and also initial requests, for example, "Get Access Token"

![image](https://user-images.githubusercontent.com/111396588/223823863-c76ef596-2ab8-473a-b801-9cd0980edea7.png)

## Create Environment

### 3. In this step we will configure the environment necessary to execute requests in Postman dynamically, as the requests are already configured with environment variables which we will configure next. Click the environments button and follow the next steps

![image](https://user-images.githubusercontent.com/111396588/223825081-8f5e489e-04b0-4450-9e2e-a2a0adffa375.png)

### 4. Click on the button again in the Environment section to create an environment to execute requests

![image](https://user-images.githubusercontent.com/111396588/223825110-985fce44-fbfd-4713-83f9-ddd85954b08a.png)

### 5. Click on the environment and after define the name of this environment

![image](https://user-images.githubusercontent.com/111396588/223825130-b65824be-7525-4df5-80e5-bc9934e4dcd6.png)

## Configure environment

### 6. Now create the variables like the next example with the credentials sent, in this step you can define which variables will be used throughout the use of the Collection, such as endpoint, port and others

![image](https://user-images.githubusercontent.com/111396588/223825150-eae49a0b-c45c-46d5-a365-982e08e69922.png)

### 7. In the upper right corner, select the environment created to apply the settings of the environment variables created in the previous step

![image](https://user-images.githubusercontent.com/111396588/223825174-82bca4fb-bcd5-4b6e-b2ba-f93651088a00.png)

### 8. If you have followed the steps so far correctly, the environment is ready to send requests to the APIs. Click on Get Access Token API to start the API test

![image](https://user-images.githubusercontent.com/111396588/223825212-38ced20b-4446-4b54-b3d5-2b1b1f291ec4.png)                 

## Execute first request

### 9. Click on send button

![image](https://user-images.githubusercontent.com/111396588/223825243-f72d7a6c-89bf-4281-b055-6ff96b718ba6.png)

### 10. You will notice that you have got an "access_token" which is automatically set in the "token" environment variable and has an expiration date. When the token expires, you'll need to repeat the step above

![image](https://user-images.githubusercontent.com/111396588/223825263-3f1a2342-9731-417d-9de5-a7ba28628b1d.png)

You are now ready to start trying out our API!

---

## See Also

- [Services List](?path=docs/english/getting-started/messages-list.md)
- [Structure](?path=docs/english/getting-started/structure.md)
- [Terminology](?path=docs/english/getting-started/terminology.md)

---

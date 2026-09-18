---
tags: [Card-Not-Present, Card-Present, Authentication, Environments, API Reference]
---

# Getting started with RESTful APIs

Commerce Hub's APIs allow merchants to build their own UI or use one of our SDKs *(Software Development Kits)* to manage customer transactions within their own website, software, application, or device. Our [APIs use REST](?path=docs/Resources/API-Documents/OpenAPI-Specs.md), authenticate with an API key, and return [HTTP response codes](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md).

<!-- theme: warning -->
> Merchants are required to have the relevant [Payment Card Industry *(PCI)*](?path=docs/Resources/FAQs-Glossary/Glossary.md#payment-card-industry-data-security-standard) Compliance capabilities to process and store card data.

---

## Client identifiers

Commerce Hub requires the following [`merchantDetails`](?path=docs/Resources/Master-Data/Merchant-Details.md) in any API request that requires client identification.

| Variable | Description |
| ----- | ----- |
| `merchantId` | A unique ID used to identify the merchant. The merchant may use the value assigned by the acquirer, gateway, or their [own unique identifier](?path=docs/Resources/Guides/BYOID.md) when submitting a transaction |
| `terminalId` | Identifies the specific device or point of entry where the transaction originated, can be assigned by the the gateway or [merchant specified](?path=docs/Resources/Guides/BYOID.md) |

---

## Environments

Commerce Hub has different environments, that allow the consumption of our RESTful APIs for client development, customer acceptance testing, and production.

<!-- theme: warning -->
> Commerce Hub requires testing against our end-to-end *(certification)* environment before using our production environment.

---

### Sandbox

<!--theme: info -->
> `https://connect-cert.fiservapis.com/ch/{resource}`

- Uses [sandbox credentials](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md)
- Preview Commerce Hub's APIs
- View the request and response format of a specific API
- Send and cancel [simulated](?path=docs/Resources/Guides/Testing/Simulator-Testing.md) transactions

---

### End-to-end

<!--theme: info -->
> `https://connect-cert.fiservapis.com/ch/{resource}`

- Uses [certification credentials](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md)
- Certify before deploying to production
- Run test scripts based on the API's requirements
- Conduct a complete beta test of your application
- Test Value-Added Services

---

### Production

<!--theme: info -->
> `https://connect.fiservapis.com/ch/{resource}`

- Uses [production credentials](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md)
- Send and cancel live transactions
- Access Value-Added Services
- Run reports

---

## Authentication parameters

The Commerce Hub RESTful API has a consistent header structure based on a set of parameters. The below information is used to create an authentication header.

| Variable | Type | Description |
| ----- | :-----: | ----- |
| `Content-Type` | *string* | Defines the content type as *application/json* |
| `Client-Request-Id` | *string* | A client-generated ID for request tracking and signature creation, unique per request. This is also used for [idempotency control](?path=docs/Resources/Guides/Idempotency.md). Recommended 128-bit UUIDv4 format. |
| `Api-Key` | *string* | [API Key](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md) associating the requests with the appropriate account in the Developer Portal and signed with an API secret key. |
| `Timestamp` | *integer* | Epoch timestamp in milliseconds in the request from a client system. Used for HMAC authentication and time limit *(5 mins)*. |
| `Accept-Language` | *string* | Contains information about the language preference of a user. This HTTP header is useful to multilingual sites for deciding the best language to serve to the client, example: *en-US* or *fr-CA*. |
| `Authorization` | *string* | Used to authenticate the request. Valid encryption; *HMAC* or *AccessToken* |
| `Auth-Token-Type`| *string* | Indicates `authorization` type *HMAC* or *AccessToken*|

---

### Header examples

<!--
type: tab
titles: HMAC, AccessToken
-->

Below is an example of an authentication header using [HMAC](?path=docs/Resources/FAQs-Glossary/Glossary.md#hmac). For more details, see [Generate an HMAC authentication](?path=docs/Resources/API-Documents/Authentication-Header.md).

```text
Content-Type: application/json
Client-Request-Id: {REQUEST_UUID}
Api-Key: {API_KEY}
Timestamp: {TIMESTAMP}
Auth-Token-Type: HMAC
Authorization: {HMAC_MESSAGE_SIGNATURE}
```

<!--
type: tab
-->

Below is an example of an authentication header using an [access token](?path=docs/Resources/FAQs-Glossary/Glossary.md#access-token). For more details, see [Generate an authentication header](?path=docs/Resources/API-Documents/Authentication-Header.md).

```text
Content-Type: application/json
Client-Request-Id: {REQUEST_UUID}
Api-Key: {API_KEY}
Auth-Token-Type: AccessToken
Authorization: Bearer {ACCESS_TOKEN}
```

<!-- type: tab-end -->

---

## Request body

The body of the request is in JSON format and differs based on the transaction being initiated. Ensure the `Content-Type` header is set to `application/json`. Below is the example body for a [payment request](?path=docs/Resources/API-Documents/Payments/Payments.md). You can find the full request schemas in the [API Explorer](../api/?type=post&path=/payments/v1/charges).

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

---

## Node.js request example

The example below is a RESTful API call to execute a [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) using Node.js.

```javascript
const axios = require('axios');

const requestOptions = {
    method: "POST",
    url: "https://connect-cert.fiservapis.com/ch/payments/v1/charges",
    headers: {
        "Content-Type": "application/json",
        "Client-Request-Id": "1000000012",
        "Api-Key": "1951fe5b30e34cdaad758b8874140872",
        "Timestamp": new Date().getTime().toString(),
        "Auth-Token-Type": "HMAC",
        "Authorization": "OWRiMWNlZjRmMTEyY2M5NmMzNDFkMjhjZDU0NWIyZmYzM2Q2YWMyNDE5Nzg5YmVkYzEyZTJjNmUwNDA5OWMyMQ=="
    },
    data: {
        amount: {
            total: 12.04,
            currency: "USD"
        },
        paymentSource: {
            sourceType: "PaymentCard",
            card: {
                cardData: "4005550000000019",
                expirationMonth: "02",
                expirationYear: "2035",
                securityCode: "123"
            }
        },
        transactionDetails: {
            captureFlag: true
        },
        merchantDetails: {
            merchantId: "100008000003683",
            terminalId: "10000001"
        }
    }
};

axios(requestOptions)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
```

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [API Explorer2](../api?type=post&path=/payments/v1/charges)
- [API Explorer3](/api?type=post&path=/payments/v1/charges)
- [API Explorer4](/product/DeveloperStudioTest/api/post/cards/secured)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Payment Request](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Postman Testing](?path=docs/Resources/Guides/Testing/Postman-Testing.md)
- [API Specification and Versioning](?path=docs/Resources/API-Documents/OpenAPI-Specs.md)
- [Idempotency](?path=docs/Resources/Guides/Idempotency.md)

---

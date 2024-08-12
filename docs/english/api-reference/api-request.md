---
tags: [API Reference, Request Header, Request Body, Header]
---

# API Request 

## Request Header

RESTful API has a consistent header structure based on a set of parameters.

<!--
type: tab
titles: Header, Request Header Example
-->

To create the header, provide the following values:

| Variable            |    Type   | Length | Description/Values                                                                                                                                                                                                        |
|---------------------|:---------:|:------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Content-Type`      |  *string* |   N/A  | The content type. Valid Value (application/json)                                                                                                                                                                          |
| `Client-Request-Id` |  *string* |   N/A  | A client-generated ID for request tracking and signature creation, unique per request. This is also used for idempotency control. Recommended 128-bit UUID format.                                                        |
| `apikey`           |  *string* |   N/A  | API Key provided to the merchant associating the requests with the appropriate app in the Developer Portal.                                                                                                               |
| `Timestamp`         | *integer* |   N/A  | Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins).                                                                                       |
| `Accept-Language`   |  *string* |   N/A  | The Accept-Language header contains information about the language preference of a user. This HTTP header is useful to multilingual sites for deciding the best language to serve to the client. example: en-US or fr-CA. |
| `Auth-Token-Type`   |  *string* |   N/A  | Indicates Authorization type HMAC or AccessToken.                                                                                                                                                                         |
| `Authorization`     |  *string* |   N/A  | Used to ensure the request has not been tampered with during transmission.                                                                                                                                                |
| `Message-Digest`    |  *string* |   N/A  | Needed only from customer browser or app to the API in Hosted Payment Page requests.                                                                                                                                      |

<!--
type: tab
-->

```json
"header": {
  "Content-Type": "application/json",
  "Client-Request-Id": "CLIENT_REQUEST_ID",
  "apikey": "API_KEY",
  "Timestamp": "TIMESTAMP",
  "Auth-Token-Type": "AUTH_TOKEN_TYPE" ,
  "Authorization": "ACCESS_TOKEN"
}
```

<!-- type: tab-end -->

---

## Request Body

The body of the transaction request differs based on the transaction being initiated.

<!--
type: tab
titles: Request Body Example
-->

```json
{
  "amount": {
    "total": "12.04",
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
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [Access Token](?path=docs/english/api-reference/accessToken.md)
- [API Glossary](?path=docs/english/api-reference/api-glossary.md)
- [Error Handling](?path=docs/english/api-reference/response-handling.md)
- [Message Level Encryption](?path=docs/english/api-reference/encryption.md)
- [Webhook](?path=docs/english/api-reference/5-notifications.md)

---

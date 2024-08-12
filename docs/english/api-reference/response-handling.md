---
tags: [API Reference, Response Handling, Response Code, HTTP Status Code]
---

# Response Code and Message Handling

Response codes identify the final status of the transaction from the Gateway, Host and/or Server (HTTP). The codes and messages are unique per transaction status which includes; approvals, declines and errors. 

---

## HTTP Status Codes

The state of the transaction can be determined by the three-digit HTTP status code from the response. These status codes are grouped in to three different classes, and the first digit can be used to quickly identify the class of a status code.

- **2xx: Success** – Indicates that the request was processed successfully and will return the `processorResponseDetails` object along with the `responseCode` and `responseMessage`. This can be the issuer response or a processor error response.
- **4xx: Client Error** – Indicates that incorrect data in request and will return the `errorResponse` object along with the code, message, and field.
- **5xx: Server Error** – Indicates that the server was unable to process the request and will return the `errorResponse` object along with the code, message, and field.

<!--
type: tab
titles: 2xx, 4xx, 5xx
-->

### Success Status code and description

| Code | Message    | Description                                                                                                    |
|------|------------|----------------------------------------------------------------------------------------------------------------|
| 200  | Success    | Indicates that a request has succeeded                                                                         |
| 201  | Created    | Indicates that a request has succeeded and a new resource has been created as a result                         |
| 204  | No Content | Indicates that a request has succeeded and that the client doesn't need to navigate away from its current page |


<!--
type: tab
-->

### Client Error Status code, description and resolution

| Code | Message                | Description                                                                                   | Resolution                                                                      |
|------|------------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| 400  | Bad Request            | The request could not be understood due to incorrect syntax.                                  | The merchant should do the modifications and repeat the request.                |
| 401  | Unauthorized           | Indicates that the request requires user authentication information.                          | The merchant may repeat the request with a suitable Authorization header field. |
| 403  | Forbidden              | Unauthorized request. The merchant does not have access rights to the content.                | Please contact Account Representative for an access.                            |
| 404  | Not Found              | Can not find the requested resource.                                                          | Please check API list.                                                          |
| 408  | Request Time Out       | The response to the request did not received till set period time.                            | Please try after some time.                                                     |
| 415  | Unsupported Media Type | Not able to process the supplied media type, as indicated by the Content-Type request header. | Merchant to correct the data and resend.                                        |
| 422  | Unprocessable Content      | Unable to process the contained instructions.                                             | Merchant should do the modifications and repeat the request.                                 |
| 425  | Too Early              | The request was sent too early.                                                               | Merchant to wait for sometime and send request.                                 |
| 429  | Too Many Requests      | Merchant had sent too many requests in a given amount of time.                                | Merchant to wait for sometime and send request.                                 |

<!--
type: tab
-->

### Server Error Status code, description and resolution

| Code | Message               | Description                                                                         | Resolution                 |
|------|-----------------------|-------------------------------------------------------------------------------------|----------------------------|
| 500  | Internal Server Error | Encountered an unexpected condition which prevented it from fulfilling the request. | Report the error.          |
| 502  | Bad Gateway           | The server received an invalid response from the upstream server.                   | Please try after sometime. |
| 503  | Service Unavailable   | The application server is not ready to handle the request.                          | Please try after sometime. |
| 504  | Gateway Timeout       | Not received response from upstream application.                                    | Please try after sometime. |

<!-- type: tab-end -->

---

## See Also

- [Access Token](?path=docs/english/api-reference/accessToken.md)
- [API Glossary](?path=docs/english/api-reference/api-glossary.md)
- [API Request](?path=docs/english/api-reference/api-request.md)
- [Message Level Encryption](?path=docs/english/api-reference/encryption.md)
- [Webhook](?path=docs/english/api-reference/5-notifications.md)

---

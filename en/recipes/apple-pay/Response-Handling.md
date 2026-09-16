---
tags: [Response Code, Error Code, HTTP Status Code]
---

# Response code and message handling

Response codes identify the final status of the transaction from the Gateway, Host and/or Server *(HTTP)*. The codes and messages are unique per transaction status which includes; approvals, declines and errors.

---

## HTTP status codes

The state of the transaction can be determined by the three-digit HTTP status code from the response. These status codes are grouped in to three different classes, and the first digit can be used to quickly identify the class of a status code.

- **2xx Success:** Indicates that the request was processed successfully by Commerce Hub. The response includes the `processorResponseDetails` object along with the `responseCode` and `responseMessage`. This can represent either an issuer response or a processor error response.
- **4xx Client Error:** Indicates that the request contains incorrect data. The response includes the `errorResponse` object with details such as the code, message, and field.
- **5xx Server Error:** Indicates that the server was unable to process the request. The response includes the `errorResponse` object with details such as the code, message, and field.

<!--
type: tab
titles: 2xx, 4xx, 5xx
-->

Success status code and description.

| Code | Message | Description |
| ----- | :-----: | ----- |
| **200** | *Success* | Indicates that a request has succeeded. |
| **201** | *Created* | Indicates that a request has succeeded and a new resource has been created as a result. |
| **204** | *No Content* | Indicates that a request has succeeded and that the client doesn't need to navigate away from its current page. |

<!--
type: tab
-->

Client error status code, description and resolution.

| Code | Message  | Description | Resolution |
| ----- | :------: | ------ | ----- |
| **400** | *Bad Request* | The request could not be understood due to incorrect syntax. | The merchant should do the modifications and repeat the request. |
| **401** | *Unauthorized* | Indicates that the request requires user authentication information. | The merchant may repeat the request with a suitable Authorization header field. |
| **403** | *Forbidden* | Unauthorized request. The merchant does not have access rights to the content. | Please contact Account Representative for an access. |
| **404** | *Not Found* | Commerce Hub can not find the requested resource. | Please check API Explorer for more information. |
| **408** | *Request Time Out* | The response to the request did not received till set period time. | Please try after some time. |
| **415** | Unsupported Media Type | Commerce Hub not able to process the supplied media type, as indicated by the Content-Type request header. | Merchant to correct the data and resend. |
| **425** | *Too Early* | The request was sent too early. | Merchant to wait for sometime and send request. |
| **429** | *Too Many Requests* | Merchant had sent too many requests in a given amount of time. | Merchant to wait for sometime and send request. |

<!--
type: tab
-->

Server error status code, description and resolution.

| Code | Message | Description | Resolution |
| ----- | :-----: | ----- | ----- |
| **500** | *Internal Server Error* | Commerce Hub encountered an unexpected condition which prevented it from fulfilling the request. | Report the error to Commerce Hub support team. |
| **503** | *Service Unavailable* | The application server is not ready to handle the request. | Please try after sometime. |
| **504** | *Gateway Timeout* | Commerce Hub did not received response from upstream application. | Please try after sometime. |

<!-- type: tab-end -->

---

## Response codes

Use the following articles to determine a response code and it's resolution.

<!-- type: row -->

<!-- type: card
title: Transaction Response Codes
description: Commerce Hub's response code that indicates the final status of a transaction after processing.
link: ?path=docs/Resources/Guides/Response-Codes/Response-Code.md
-->

<!-- type: card
title: Error Response Codes
description: Indicates the reason why a transaction is rejected.
link: ?path=docs/Resources/Guides/Response-Codes/Error-Code.md
-->

<!-- type: card
title: Association Response Codes
description: Actual response code returned by the bank for credit card transactions.
link: ?path=docs/Resources/Guides/Response-Codes/Association-Response-Code.md
-->

<!-- type: card
title: Merchant Advice Code
description: Retry advice provided to the merchant on a declined transaction.
link: ?path=docs/Resources/Master-Data/Network-Details.md#merchant-advice-code
-->

<!-- type: row-end -->

---

## Resources

Use the following resources to support response handling.

<!-- type: row -->

<!-- type: card
title: Health Check Status
description: Allows merchants to retrieve the status of the Commerce Hub APIs as well as recent errors by products.
link: ?path=docs/Resources/API-Documents/Health_Check/HC-Status.md
-->

<!-- type: card
title: Error Response
description: Object and field definitions for error.
link: ?path=docs/Resources/Guides/Response-Codes/Error-Response.md
-->

<!-- type: card
title: Network Details
description: Object and field definitions for networkDetails.
link: ?path=docs/Resources/Master-Data/Network-Details.md
-->

<!-- type: card
title: Processor Response Details
description: Object and field definitions for processorResponseDetails.
link: ?path=docs/Resources/Master-Data/Processor-Response-Details.md
-->

<!-- type: row-end -->

---

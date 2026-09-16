---
tags: [Authorization, Charges, Payments, API Reference, Sale]
---

# Process a payment authorization

Charges can be initiated as a sale, pre-authorization, or [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) which is defined in the request by sending the `captureFlag` in `transactionDetails`.

- *false:* A pre-authorization transaction, where the customer's funds will be reserved and a [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) will be required to withdraw the funds.
- *true:* A sale or subsequent capture transaction where the customer will be charged the total amount, and funds withdrawn.

**Charges types:**

- [**Authorization only:**](?path=docs/Resources/FAQs-Glossary/Glossary.md#authorization) A transaction where the merchant [verifies](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) a customer's account, also known as a $0 authorization.
- [**Pre-authorization:**](?path=docs/Resources/FAQs-Glossary/Glossary.md#preauth) A transaction where the customer is authorized to have funds withdrawn from their account on a future date.
- [**Estimated:**](?path=docs/Resources/Guides/Authorizations/Estimated-Auth.md) A pre-authorization transaction where the final amount is not known, normally followed by an incremental authorization.
- [**Sale:**](?path=docs/Resources/FAQs-Glossary/Glossary.md#sale) A transaction where the customer is authorized to have funds withdrawn from their account at the end of the day.
- [**Capture:**](?path=docs/Resources/API-Documents/Payments/Capture.md) A transaction where the merchant requests to have the pending funds from a pre-authorization withdrawn from the customer account at the end of the day.
- [**Incremental:**](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md) A transaction where the merchant requests to increase the original pre-authorization.

---

## Payload example

<!-- theme: info -->
> Before making API calls, review the requirements for client identifiers and authentication in [Getting started with RESTful APIs guide](?path=docs/Resources/API-Documents/Use-Our-APIs.md).

The example below contains the minimum [parameters](#parameters) for a successful Charges API request. The full request schemas are available in the [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!--
type: tab
-->

Example of an *AUTHORIZED* Charges API *(201: Created)* response.

<!-- theme: info -->
> For more information, see the [response handling documentation](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md).

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "captureFlag": true
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request variables

<!-- theme: warning -->
> If the merchant account is enabled for a [tokenization service](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), `paymentTokens` will be returned in the response. If a multi-use token is required, the [stored credentials details](?path=docs/Resources/Guides/Stored-Credentials.md) must be submitted in the request. To override this behavior, set `createToken` to *false* in `transactionDetails`.

<!--
type: tab
titles: amount, source, transactionDetails
-->

The table below identifies the required parameters in the `amount` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `total` | *number* | 12 | Total amount of the transaction. [Sub-component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md). |

<!--
type: tab
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md). |

<!--
type: tab
-->

The table below identifies the required parameters in the `transactionDetails` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `captureFlag` | *string* | 5 | Designates if the transaction should be captured *(`true` for sale and `false` for pre-authorization)*. |

<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---

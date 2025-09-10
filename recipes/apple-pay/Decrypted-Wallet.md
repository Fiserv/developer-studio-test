---
tags: [Decrypted Wallet, Apple Pay, Google Pay, Samsung Pay, Payment Sources, Online, Mobile, Card-Not-Present]
---

# Using DecryptedWallet as a payment source

*DecryptedWallet* is utilized by merchants to securely transmit transaction data to Commerce Hub. By decrypting the digital wallet, a merchant has the ability to view the card data before submitting the transaction, giving them full control over the customer’s payment journey.

 When merchants receive encrypted payment data from [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md), [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md) and [Samsung Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Samsung-Pay/Samsung-Pay.md), they use their own certificates to decrypt this data before sending it to Commerce Hub. It is recommended that a merchant uses their own certificate to encrypt the data before sending it to Commerce Hub.

<!-- theme: danger -->
> We are enhancing Commerce Hub to support [MUPK encrypted *DecryptedWallet*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md). Documentation related to this feature will be released soon.

**Digital wallet account types:**

- **Funding Primary Account Number *(FPAN)*:** [FPAN](?path=docs/Resources/FAQs-Glossary/Glossary.md#funding-primary-account-number) is the physical account number on the front of a credit or debit card.
- **Device Primary Account Number *(DPAN)*:** [DPAN](?path=docs/Resources/FAQs-Glossary/Glossary.md#device-specific-primary-account-number) is a device-specific token from the wallet provider that is associated with the FPAN.

<!--
type: tab
titles: source
-->

The below table identifies the parameters in the `source` object.

| Variable | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | Value *DecryptedWallet* is used for Decrypted Wallet requests. |
| `walletType` | *string* | 256 | Identifies the wallet as *APPLE_PAY*, *GOOGLE_PAY*, or *SAMSUNG_PAY*. |
| `cavv` | *string* | 256 | Cardholder Authentication Verification Value *(CAVV)* is a cryptogram generated during the authentication process for digital wallet transactions. It is used to verify the authenticity of the transaction and ensure secure payment processing. |
| `xid` | *string* | 64 | Transaction Identifier *(XID)* is a cryptogram generated during the authentication process for digital wallet transactions. It serves as a unique identifier for the transaction and aids in fraud prevention and secure payment processing. |
| `card` | *object* | N/A | Contains the payment [card details](?path=docs/Resources/Master-Data/Card.md) |

<!-- type: tab-end -->

---

## Payload example

<!--
type: tab
titles: Request, Response
-->

The example below contains the parameters for a successful [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) using a *DecryptedWallet*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "DecryptedWallet",
    "walletType": "APPLE_PAY",
    "cavv": "01ade6ae340005c681c3a1890418b53000020000",
    "xid": "13456789",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    }
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

Example of an *AUTHORIZED*  Charges API *(201: Created)* response.

<!-- theme: info -->
> See [response handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
    "sourceType": "DecryptedWallet",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "02",
      "expirationYear": "2035"
    },
    "cavv": "01ade6ae340005c681c3a1890418b53000020000",
    "xid": "13456789",
    "wallet": "APPLE_PAY"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
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
  }
}
```
<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Digital Wallets](?path=docs/Getting-Started/Getting-Started-Wallets.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---

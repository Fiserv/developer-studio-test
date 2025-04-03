---
tags: [tag1, tag2, tag3]
---
# HTML Enrichment Test

## Image
<img class="image-center" src="/assets/images/cat-dog.png" >

## Download

## Tabs
[download spec](download/assets/files/spec.zip)

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum parameters for a successful Data Capture API request using a *PaymentCard*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/card-capture).

<!-- theme: success -->
> **POST** `/payments-vas/v1/card-capture`

```json
{
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
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!--
type: tab
-->

Example of a Data Capture API *(200: Success)* response.

<!-- theme: info -->
> For more information, see the [response handling documentation](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md)

```json
{
  "gatewayResponse": {
    "transactionType": "TOKENIZE",
    "transactionState": "AUTHORIZED",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2024-03-12T18:15:39.710423262Z",
      "apiTraceId": "755f19915f284309bd28250124620ef5",
      "clientRequestId": "681a5623eceb7b521e6a3bd520b70915",
      "transactionId": "755f19915f284309bd28250124620ef5"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  }
}
```

<!-- type: tab-end -->

## Code Snippets
### json snippet
```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentSession",
    "sessionId": "df8c33d2-af27-4a3a-b7a0-61d4edf09cad"
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

### another json snippet
```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card
      "keyId": "88000000022"
    }   
  },  
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

### Javascript
```javascript
const paymentFields = await window.fiserv.components.paymentFields({...});
const paze = await window.fiserv.components.paze({...});
const captcha = await window.fiserv.components.captcha({...});
await window.fiserv.init({
  cspNonce: "NONCE",
  additionalFrameAncestors: ["merchant.com"],
  environment: "CERT",
  accessToken: "ACCESS_TOKEN",
  apiKey: "API_KEY",
  merchantId: "MERCHANT_ID",
  terminalId: "TERMINAL_ID",
  publicKey: "PUBLIC_KEY",
  keyId: "KEY_ID",
});
```

### Text
```text
Content-Type: application/json
Client-Request-Id: {REQUEST_UUID}
Api-Key: {API_KEY}
Timestamp: {TIMESTAMP}
Auth-Token-Type: HMAC
Authorization: {HMAC_MESSAGE_SIGNATURE}
```

### html
```html
<div id="payment-saq-a-ep-form-div"></div>
```

### Java
```java
private static Mac sha256HMAC = null;
 
private String generateHmac(final String apiKey, final String clientSecret, final String time, final String clientRequestId, final String payload) throws NoSuchAlgorithmException, InvalidKeyException, JsonProcessingException {
  
    final StringBuilder rawSignature = new StringBuilder();
    rawSignature.append(apiKey);
    rawSignature.append(clientRequestId);
    rawSignature.append(time);
    rawSignature.append(payload);
    
    Mac mac = getSha256HMAC();
    SecretKeySpec secretKeySpec = new SecretKeySpec(clientSecret.getBytes(), "HmacSHA256");
    mac.init(secretKeySpec);
  
    byte[] finalHmac = mac.doFinal(rawSignature.toString().getBytes());
  
    return Base64.encodeBase64String(finalHmac);
}
  
private static Mac getSha256HMAC() throws NoSuchAlgorithmException {
    if (sha256HMAC == null) {
        sha256HMAC = Mac.getInstance("HmacSHA256");
    }
  
    return sha256HMAC;
}
```
 

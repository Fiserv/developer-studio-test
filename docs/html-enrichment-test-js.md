---
tags: [tag1, tag2, tag3]
---
# HTML Enrichment Test

## JSON
first json snippet
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

second json snippet
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

## Javascript
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

## Text
```text
Content-Type: application/json
Client-Request-Id: {REQUEST_UUID}
Api-Key: {API_KEY}
Timestamp: {TIMESTAMP}
Auth-Token-Type: HMAC
Authorization: {HMAC_MESSAGE_SIGNATURE}
```

## html
```html
<div id="payment-saq-a-ep-form-div"></div>
```

## Java
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
 

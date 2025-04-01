# Snippets Test

## JSON
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

## Javascript
```javascript
const paymentFields = await window.fiserv.components.paymentFields({...});
const paze = await window.fiserv.components.paze({...});
const captcha = await window.fiserv.components.captcha({...});
</code></pre>
<p>after first code block</p>
<p>before second code block</p>
<pre><code class="language-javascript">
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

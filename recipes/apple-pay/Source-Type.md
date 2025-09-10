---
tags: [Payment Source]
---

# Payment source types

The variable `sourceType` is used to determine the payment instrument of the transaction in the `source` object. Depending on the payment source the `sourceType` and request variables change.

---

## Payment cards

A payment card is used to submit a credit card, [debit card](?path=docs/Resources/Guides/Debit/Debit.md), [private label card](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md), [gift card](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) *(prepaid or stored value)*, or [Fleet Card](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Card.md) transaction to our application. Commerce Hub requires all payment cards to be encrypted using [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).

<!--
type: tab
titles: PaymentCard, PaymentEMV, PaymentTrack, API models
-->

[*PaymentCard*](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) is used when submitting manual entry online or in-person transactions to Commerce Hub using a [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key-Request.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).

***PaymentCard* using Multi-Use Public Key:**

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000023"
    }
  }
}
```

***PaymentCard* using terminal encryption:**

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "deviceType": "INGENICO",
      "keyId": "88000000023"
    }
  }
}
```

**Unencrypted *PaymentCard*:**

<!-- theme: warning -->
> Unencrypted *PaymentCard* is only supported in our sandbox environment for [simulation purposes](?path=docs/Resources/Guides/Testing/Simulator-Testing.md).

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    }
  }
}
```

<!--
type: tab
-->

[*PaymentEMV*](?path=docs/In-Person/Encrypted-Payments/EMV.md) is used to submit an EMV chip *(PIN and PINless)* and contactless transaction to Commerce Hub using [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md) or a [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md).

***PaymentEMV* using terminal encryption:**

```json
{
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS.....",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    },
    "pinBlock": {
      "encryptedPin": "53511F325B7C89E3",
      "keySerialNumber": "FFFF3D3D3D00232002C9",
      "pinEncryptionWorkingKey": "7586325254178549....."
    }
  }
}
```

***PaymentEMV* using Multi-Use Public Key:**

```json
{
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0369F3704834A12329F1002AB25",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "fjzH9it7ukbeP6Fa4jdqAO/gCRvCMC2qVG5q9PbFTKmj.....",
      "encryptionBlockFields": "track1Data:34",
      "keyId": "78001000062",
      "deviceType": "INGENICO"
    }
  }
}
```

<!--
type: tab
-->

[*PaymentTrack*](?path=docs/In-Person/Encrypted-Payments/Track.md) is used to submit a Track 1 or Track 2 and PIN transactions to Commerce Hub using [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md) or a [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md).

***PaymentTrack* using terminal encryption:**

```json
{
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    },
    "pinBlock": {
      "encryptedPin": "0FF7A610CC84CE40",
      "keySerialNumber": "FFFF3D3D3D00232002C9"
    }
  }
}
```

***PaymentTrack* using Multi-Use Public Key:**

```json
{
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=q4TmiL1SSZC8QyBpj/....",
      "encryptionBlockFields": "track2Data:36",
      "keyId": "78001000062",
      "deviceType": "INGENICO"
    }
  }
}
```

**Unencrypted *PaymentTrack*:**

<!-- theme: warning -->
> Unencrypted [*PaymentTrack*](?path=docs/In-Person/Encrypted-Payments/Track.md) is only supported in our sandbox environment for [testing purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Simulator-Scripts.md).

```json
{
  "source": {
    "sourceType": "PaymentTrack",
    "track2Data": "4445222299990007=14125025432198712345"    
  }
}
```

<!--
type: tab
-->

**PaymentCard:**

The below table identifies the required parameters in the `source` object for *PaymentCard*.

| Variable | Type | Length | Description |
| ----- | :------: | :-----: | ----- |
| `sourceType` | *string* | 15 | Use *PaymentCard* for card transactions. |
| `card` | *object* | N/A | Contains the payment [card details](?path=docs/Resources/Master-Data/Card.md). |
| `encryptionData` | *object* | N/A | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md). |

**PaymentEMV:**

The table below identifies the parameters in the `source` object for *PaymentEMV*.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `sourceType` | *string* | 256 |  &#10004; | Use Value *PaymentEMV* for EMV transactions. |
| `emvData` | *string* | N/A |  &#10004; | Contains a series of [Tag/Length/Value](?path=docs/In-Person/Encrypted-Payments/EMV-Tags.md) combination for chip card processing. |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md). |
| `pinBlock` | *object* | N/A | | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md). |

**PaymentTrack:**

The table below identifies the parameters in the `source` object for *PaymentTrack*.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentTrack* for magnetic stripe transactions. |
| `track1Data` | *string* | N/A | | This field contains the information encoded from a valid Track 1 magnetic stripe read, excluding the start sentinel, end sentinel, and [Longitudinal Redundancy Check *(LRC)*](?path=docs/Resources/FAQs-Glossary/Glossary.md#longitudinal-redundancy-check). It includes information such as the cardholder's name, primary account number *(PAN)*, expiration date and discretionary data. The entire track data must be forwarded intact. |
| `track2Data` | *string* | N/A | |  This field contains the information encoded from a valid Track 2 magnetic stripe read. It includes information such as the primary account number *(PAN)*, expiration date and discretionary data. Entire Track Data must be forwarded intact *(excludes Start Sentinel, End Sentinel and Longitudinal Redundancy Check)*. |
| `pinBlock` | *object* | N/A | | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md). |

<!-- type: tab-end -->

---

## Digital wallets

Wallet transactions originate from a [digital wallet](?path=docs/Getting-Started/Getting-Started-Wallets.md) either from a website or on a device. Merchants can submit this data as either an encrypted or a decrypted request.

<!-- theme: info -->
> For [contactless in-person payments](?path=docs/In-Person/Encrypted-Payments/EMV.md) with a digital wallet use *PaymentEMV*.

<!--
type: tab
titles: ApplePay, GooglePay, SamsungPay, DecryptedWallet, API models
-->

[*ApplePay*](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md) is used to submit Apple Pay iOS application, and website transactions to Commerce Hub.

```json
{
  "source": {
    "sourceType": "ApplePay",
    "data": "hbreWcQg980mUoUCfuCoripnHO210lvtizOFLV6PTw1DjooSwik778bH....",
    "header": {
      "applicationDataHash": "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2",
      "ephemeralPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEvR....",
      "publicKeyHash": "KRsyW0NauLpN8OwKr+yeu4jl6APbgW05/TYo5eGW0bQ=",
      "transactionId": "31323334353637"
    },
    "signature": "MIAGCSqGSIb3DQEHAqCAMIACAQExDzANBglghkgBZQMEAgEFADCABgkqhki.....",
    "version": "EC_v1",
    "applicationData": "VEVTVA==",
    "applePayMerchantId": "merchant.com.organizationname.unitname.commonname"
  }
}
```

<!--
type: tab
-->

[*GooglePay*](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md) is used to submit Google Pay app and website transactions to Commerce Hub.

```json
{
  "source": {
    "sourceType": "GooglePay",
    "data": "{\"encryptedMessage\":\"NZF5Vs2YaI/t25L/1+dp6tuUOvra9.....\",\"ephemeralPublicKey\":\"BAhnPIWrCXWv/45GFK0mNAtQj.....\\u003d\",\"tag\":\"liBzKfGcO+FclHg7XuqRJxR.....\"}",
    "signature": "MIAGCSqGSIb3DQEHAqCAMIACAQExDzAN...",
    "version": "ECv2",
    "intermediateSigningKey": {
      "signedKey": "{\"keyExpiration\":\"1542323393147\",\"keyValue\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/1+3HBVSbdv+j7NaArdgMyoSAM43yRy.....\\u003d\\u003d\"}",
      "signatures": [
        {
          "items": "MEYCIQCO2EIi48s8VTH+ilMEpoXLFfkxAwHjfPSCVED/QDSHmQIhALLJmrUlNAY8hDQRV/y1iKZGsWpeNmIP+z+tCQHQxP0v"
        }
      ]
    }
  }
}
```

<!--
type: tab
-->

[*SamsungPay*](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Samsung-Pay/Samsung-Pay.md) is used to submit Samsung Pay online and in-app transactions to Commerce Hub.

```json
{
  "source": {
    "data": "eyJhbGciOiJSU0ExXzUiLCJraWQiOiIzb2FhSEltdm9kSHlDeTVmanVFeFU0N05JMnZSaUdyT1F.....",
    "samsungPayMerchantId": "merchant.com.organizationname.unitname.commonname",
    "sourceType": "SamsungPay",
    "version": "100"
  }
}
```

<!--
type: tab
-->

[*DecryptedWallet*](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) is used to submit decrypted wallet transactions to Commerce Hub. Merchants use their own certificate to encrypt the data received from Apple Pay, Google Pay, or Samsung Pay before sending the transaction.

```json
{
  "source": {
    "sourceType": "DecryptedWallet",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    },
    "cavv": "01ade6ae340005c681c3a1890418b53000020000",
    "xid": "13456789",
    "walletType": "APPLE_PAY"
  }
}
```

<!--
type: tab
-->

**ApplePay:**

The table below identifies the required parameters in the `source` object for *ApplePay*.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | Value *ApplePay* is used for Apple Pay request. |
| `data` | *string* | 4000 | Encrypted Data. Payment data dictionary, Base64 encoded as a string. |
| `header` | *object* | N/A| Additional version-dependent information used to decrypt and verify the payment. |
| `signature` | *string* | 4000 | Signature of the payment and header data. The signature includes the signing certificate, its intermediate CA certificate, and information about the signing algorithm. Detached PKCS #7 signature, Base64 encoded as string. |
| `version` | *string* | 64 | Specific Protocol version supported by Apple. Version information about the payment token. The token uses EC_v1 for ECC-encrypted data. |
| `applicationData` | *string* | 4000 | Hash of the applicationData property of the original PKPaymentRequest object. If the value of that property is nil, this key is omitted. SHA–256 hash, hex encoded as a string. |
| `applePayMerchantId` | *string* | 256 | Unique AppID registered in the [Commerce Hub Developer portal](?path=docs/Resources/Guides/Dev-Studio/Certificate-Management.md) |
| `header.applicationDataHash` | *string* | 256 | Encrypted app data |
| `ephemeralPublicKey` | *string* | 256 | Used to derive the actual Public Key. Ephemeral public key bytes. EC_v1 only. X.509 encoded key bytes, Base64 encoded as a string. |
| `header.publicKeyHash` | *string* | 256 | Hash of the X.509 encoded public key bytes of the merchant’s certificate. SHA–256 hash, Base64 encoded as a string. |
| `header.transactionId` | *string* | 256 | Transaction ID generated by the Apple device. A hexadecimal identifier, as a string. |

**GooglePay:**

The table below identifies the required parameters in the `source` object for *GooglePay*.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | Value *GooglePay* is used for Google Pay request. |
| `data` | *string* | 4000 | Encrypted Data. Payment data dictionary, Base64 encoded as a string |
| `signature` | *string* | 2000 | Verifies that the message came from Google, base64-encoded, and created with ECDSA by the intermediate signing key |
| `version` | *string* | 32 | Specific Protocol version supported by Google. Identifies the encryption or signing scheme under which the message is created. It allows the protocol to evolve over time, if needed |
| `intermediateSigningKey` | *object* | N/A | An object that contains the intermediate signing key from Google. It is a serialized object to simplify the intermediate signing key signature verification process. Required for version ECv2. |
| `intermediateSigningKey.signedKey` | *string* | 4000 | A UTF-8 encoded, serialized object that contains `keyExpiration` and `keyValue`, `keyExpiration` is date and time when the intermediate key expires as UTC milliseconds and `keyValue` is base64 version of key encoded in ASN.1 type. |
| `intermediateSigningKey.signatures` | *array* | N/A | Verifies that the intermediate signing key came from Google. It is base64-encoded, and created with ECDSA. |

**SamsungPay:**

The below table identifies the required parameters in the `source` object for *SamsungPay*.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | Value *SamsungPay* is used for Samsung Pay request. |
| `data` | *string* | 4000 | Encrypted Data. Payment data dictionary, Base64 encoded as a string. |
| `samsungPayMerchantId` | *string* | 256 | Unique AppID registered in the Samsung portal |
| `version` | *string* | 64 | Specific Protocol version supported by Samsung. Version information about the payment token. The token uses EC_v1 for ECC-encrypted data, and RSA_v1 for RSA-encrypted data. |

**DecryptedWallet:**

The below table identifies the required parameters in the `source` object for *DecryptedWallet*.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | Value *DecryptedWallet* is used for Samsung Pay request. |
| `walletType` | *string* | 256 | Identifies the wallet as *APPLE_PAY*, *GOOGLE_PAY*, or *SAMSUNG_PAY*. |
| `cavv` | *string* | 256 | Cardholder Authentication Verification Value *(CAVV)* is a cryptogram generated during the authentication process for digital wallet transactions. It is used to verify the authenticity of the transaction and ensure secure payment processing. |
| `xid` | *string* | 64 | Transaction Identifier *(XID)* is a cryptogram generated during the authentication process for digital wallet transactions. It serves as a unique identifier for the transaction and aids in fraud prevention and secure payment processing. |
| `card` | *object* | N/A | [Card](?path=docs/Resources/Master-Data/Card.md) subcomponent objects. |

<!-- type: tab-end -->

---

## Secure payments

Secure payment sources like *PaymentToken* and *PaymentSession* help reduce the risk of PCI data compromise by encrypting the payment source.

<!--
type: tab
titles: PaymentToken, PaymentSession, API models
-->

A [*PaymentToken*](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is a created by submitting a token request using a payment source to Commerce Hub or is a created by submitting a request to the processing networks *(Visa, Mastercard, AMEX or Discover)* using a payment card. Both can be used to submit a transaction to Commerce Hub.

```json
{
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "1234567890120019",
    "tokenSource": "TRANSARMOR",
    "card": {
      "expirationMonth": "03",
      "expirationYear": "2035"
    }
  }
}
```

<!--
type: tab
-->

*PaymentSession* is a nonce token obtained from a [Security Credentials API request](?path=docs/Resources/API-Documents/Security/Credentials.md). *PaymentSession* is used in [Hosted Checkout](?path=docs/Online-Mobile-Digital/Hosted-Checkout/Hosted-Checkout.md) and [Data Capture API](?path=docs/Online-Mobile-Digital/API/API-Only.md) integrations to submit a transaction to Commerce Hub.

```json
{
  "source": {
    "sourceType": "PaymentSession",
    "sessionId": "df8c33d2-af27-4a3a-b7a0-61d4edf09cad"
  }
}
```

<!--
type: tab
-->

**PaymentToken:**

The below table identifies the parameters in the `source` object for *PaymentToken*.

| Variable | Type| Max Length | Required | Description |
| ----- | :-----: | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | &#10004; | Use Value *PaymentToken* for credential on file transactions. |
| `tokenData` | *string* | 2048 | &#10004; | Token created from the payment source. |
| `tokenSource` | *string* | | &#10004; | The token source is *TRANSARMOR*, *NETWORK_TOKEN*, *FISERV_NETWORK_TOKEN* or *FISERV_PAY_BY_BANK*. |
| `declineDuplicates` | *boolean* | N/A | | Identifies if a duplicate create token should be rejected when one has already been created for the payment source. |
| `sessionId` | *string* | 64 | | Nonce token obtained from a [Security Credentials API request](?path=docs/Resources/API-Documents/Security/Credentials.md) to securely capture PCI data in a [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) integration. |
| `card` | *object* | N/A | &#10004; | [Card](?path=docs/Resources/Master-Data/Card.md) subcomponent objects. |
| `encryptionData` | *object* | N/A | | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md). |

**PaymentSession:**

The below table identifies the parameters in the `source` object for *PaymentSession*.

| Variable | Type| Max Length | Required | Description |
| ----- | :-----: | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | &#10004; | Use Value *PaymentSession* for credential on file transactions. |
| `sessionId` | *string* | 64 | &#10004; | Nonce token obtained from a [Security Credentials API request](?path=docs/Resources/API-Documents/Security/Credentials.md) to securely capture PCI data in a [Hosted Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) integration. |

<!-- type: tab-end -->

---

## Pay by Bank

Commerce Hub allows merchants to securely process payments directly from a customer's bank account. Commerce Hub supports multiple integration methods allowing merchants can accept one-time and recurring payments while providing additional flexibility and convenience for customers.

<!--
type: tab
titles: PaymentCheck, API models
-->

*PaymentCheck* is used to submit a [Pay by Bank *(ACH)*](?path=docs/Resources/Guides/Payment-Sources/Pay-By-Bank.md) and [Fleet Check](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Check.md) transactions to Commerce Hub.

***PaymentCheck* using Multi-Use Public Key:**

```json
{
  "source": {
    "sourceType": "PaymentCheck",
    "encryptionData": {
      "keyId": "79cd0553-9db5-4676-989b-f29edfbb6a51",
      "encryptionType": "RSA",
      "encryptionBlock": "YbqiQ183rQ1Uq/8IrbECfSNxgTMSDfCO….",
      "encryptionBlockFields": "check.accountNumber:45,check.routingNumber:9",
      "encryptionTarget": "MANUAL"
    }  
  }
}
```

**Unencrypted *PaymentCheck*:**

<!-- theme: warning -->
> Unencrypted *PaymentCheck* is only supported in our sandbox environment for [simulation purposes](?path=docs/Resources/Guides/Testing/Simulator-Testing.md).

```json
{
  "source": {
    "sourceType": "PaymentCheck",
    "check": {
      "routingNumber": "123456789",
      "accountNumber": "8456234852689"
    }
  }
}
```

<!--
type: tab
-->

The below table identifies the required parameters in the `source` object for *PaymentCheck*.

| Variable | Type | Length | Description |
| ----- | :------: | :-----: | ----- |
| `sourceType` | *string* | 15 | Use *PaymentCheck* for Pay by Bank transactions. |
| `check` | *object* | N/A | Contains the payment [check *(ACH)* details](?path=docs/Resources/Master-Data/Check.md). |
| `encryptionData` | *object* | N/A | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md). |

<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Multi-Use Public Key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Supported Card Types](?path=docs/Resources/Master-Data/Card-Type.md)

---

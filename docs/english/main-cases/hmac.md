---
tags: [Main Cases, HMAC Signature]
---

# What is HMAC Signature?

HMAC, a hash-based message authentication code, is a security check that generates a hash signature for every message sent from one point to another.

When you send a message to a server, with HMAC enabled, a new signature is generated for your message, according to your secret key.

Client and server must have the same secret key so they can verify the authenticity of the message and its integrity, as modified messages result in different signatures.

The same message generated with the same secret key will always result in the same signature.

![image](https://user-images.githubusercontent.com/111396588/223831325-86b618a5-1ee4-4134-a82f-f5ce04766e01.png)


## Why use?

With HMAC verification enabled, you can guarantee the authenticity of the message sender and certify that the message has not been intercepted and modified by hackers.

## How to use?

You'll need a tool to generate your HMAC messages, based on your secret key. Most programming languages have a many librabries that can help you to send or verify sender authenticity and message integrity.

You just need to enter the common hashing algorithm, the message and your secret key to generate your signed HMAC message.

---

## See Also

- [Account Management](?path=docs/english/main-cases/account.md)
- [API Environment](?path=docs/english/main-cases/api-environment.md)
- [Audit and Monitoring](?path=docs/english/main-cases/audit.md)
- [Card Controls](?path=docs/english/main-cases/card-controls.md)
- [Card Management](?path=docs/english/main-cases/card.md)
- [Customer Management](?path=docs/english/main-cases/customer.md)
- [Digital Card Issuing](?path=docs/english/main-cases/digital.md)
- [Falcon System Integration](?path=docs/english/main-cases/falcon.md)
- [Relation Client-Account-Card](?path=docs/english/main-cases/relation.md)
- [Upload Founds](?path=docs/english/main-cases/uploads.md)

---

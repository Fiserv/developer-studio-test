---
tags: [Main Cases, Falcon, fraud, detection, prevention, management]
---

# Falcon System Integration

Falcon is a fraud detection, prevention and management application. Falcon examines all incoming transactions and determines the probability of the transaction being fraudulent. Falcon has it’s own neural network which asses the transaction coming to falcon. Based on several factors, scores the transaction and provides a Falcon score, which tells the likelihood of a fraudulent transaction.

Falcon works with real time transactions that are scored in Falcon and a score from zero to 999 will be generated for each of one. These transaction furthers traverse through the different set of rules as per business need to identify fraud. At end, Falcon will send the scoring response message to the Authorization Host system, e.g. decline the Authorization and block the card. Activating parameter on First Vision, is possible integrate with Falcon, so authorization transactions processed by FirstVision will be routed to Falcon to stablish a fraud control.

![image](https://user-images.githubusercontent.com/111396588/208846621-4b1bd3c3-0355-48ff-a23a-0d6f313ec3d0.png)

---

## See Also

- [Account Management](?path=docs/english/main-cases/account.md)
- [API Environment](?path=docs/english/main-cases/api-environment.md)
- [Audit and Monitoring](?path=docs/english/main-cases/audit.md)
- [Card Controls](?path=docs/english/main-cases/card-controls.md)
- [Card Management](?path=docs/english/main-cases/card.md)
- [Customer Management](?path=docs/english/main-cases/customer.md)
- [Digital Card Issuing](?path=docs/english/main-cases/digital.md)
- [HMAC Signature](?path=docs/english/main-cases/hmac.md)
- [Relation Client-Account-Card](?path=docs/english/main-cases/relation.md)
- [Upload Founds](?path=docs/english/main-cases/uploads.md)

---

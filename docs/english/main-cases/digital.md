---
tags: [Main Cases, Digital Card Issuing, customer, account, cards, embosser]
---

# Digital Card Issuing

## Definition

The following section aims to define the issuance of a digital card on the FirstVision platform.

A digital card will behave like a wallet funded by the account's credit limit and customers can make e-commerce purchases (with the co-branded retailer only) using the digital wallet instead of using a physical card. A single FirstVision account can have a physical credit card and a digital card as separate embossers. Accounts can be boarded to have physical card only or a digital card only or have both.

## Purpose

The purpose of this user case is to issue a new digital card to a customer on the FirstVision platform.

## Use Case

The user case below determines the actions required to issue a new digital card.

![image](https://user-images.githubusercontent.com/111396588/208847157-3b0caa4b-f73d-469a-8cb6-7461af6317a3.png)

## Sequence Diagram

![image](https://user-images.githubusercontent.com/111396588/208847202-038f4634-9a8b-4de2-8446-028b386e1211.png)

To issue a new digital card to a customer, we must follow these steps:

### 1. Customer Add

This request includes the customer's personal data, demographic information and other information pertaining to the entity. The response to this request will bring the customer number created.

**POST** `/customer/l8v2`
      
### 2. Account Add

With the customer number created in the previous requisition, this requisition will propagate the account's credit limit information, payment cycle date, short name and more information inherent to the entity.

**POST** `/account/add-L8V3`
          
### 3. Embosser Add

This request is responsible for adding the information to the issuing digital card. This request requires both the customer code and the account code.

**POST** `/cards/embosser/l8vf`
          
### 4. Card Activation

After customer, account and embosser requests, the new card settings for the customer are applied, but not active for use. This request will activate the card and make it ready for use.

**PUT** `/cards/activation`
          
---

## See Also

- [Account Management](?path=docs/english/main-cases/account.md)
- [API Environment](?path=docs/english/main-cases/api-environment.md)
- [Audit and Monitoring](?path=docs/english/main-cases/audit.md)
- [Card Controls](?path=docs/english/main-cases/card-controls.md)
- [Card Management](?path=docs/english/main-cases/card.md)
- [Customer Management](?path=docs/english/main-cases/customer.md)
- [Falcon System Integration](?path=docs/english/main-cases/falcon.md)
- [HMAC Signature](?path=docs/english/main-cases/hmac.md)
- [Relation Client-Account-Card](?path=docs/english/main-cases/relation.md)
- [Upload Founds](?path=docs/english/main-cases/uploads.md)

---

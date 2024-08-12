---
tags: [Main Cases, Card Controls, cards, embosser, Block, Unlock, Limits, Travel, Transfer, Active, PIN]
---

# Card Controls

This section describes the different APIs in the Portal used to take actions on the different activities related to the use of the credit, debit, prepaid or wallet card, for any of the Visa, Master Card or American Express products. Next, a description of the functionalities and characteristics of API.

As a main requirement, is important that Credit, Debit, Prepay or Wallet cards have been created in the test environment as it was detailed in this document, using the API's for customer creation **(Customer Add)**, creation of Account **(Account Add)** and Creation of Card **(Card Add)**.

## Card Activation

This API activates a card already embossed. This API allow to the cardholder activate a new card number when it is received by mail or deliver in a bank branch. Card Activation date will be saved on test environment for audit reasons.

If cardholder try use the card for purchase or cash advance, before it is activate, the authorization request will be rejected with reject reason “Card is not Activate”, so cardholder will be able to active his card just triggering this API.

This API should be trigger each time that a new card is embossed (principal or additional), to activate each card embossed.

Require values for this API are: Card Number, bank product identification (organization) and service type (A= Activation).

**PUT** `/cards/activation`

The description of each API field can be found within the specifications.

## Card Transfer Update

This API allow the cardholder blocks their current card number and request a new card with different card number in only one trigger. Same that API Block or Unlock Card, card number can be blocked just in case cardholder believes that card information is compromise and at same time he can request a new card number, so new card will be embossed during batch process and will be ready to be deliver on next day.

As part of values requested by the API is required the card number, account number, organization and effective date.

**PUT** `/cards/transfer`

The description of each API field can be found within the specifications.

## Embosser Block Code Update

Through this API, the cardholder will be able to make preventive and definitive blocks on the credit card information, debit, prepaid and wallet. In order to prevent any possible fraud when the cardholder suspects that card information may be compromised.

On same way, the cardholder may carry out a preventive unlocking of his card when he is sure that the information on his card is not compromised.

Information required by the API as the card number, block code, and function must be included before API trigger.

**PUT** `/cards/embosser/block`

The description of each API field can be found within the specifications.

## PIN Block/Unblock

The API is being used by a cardholder to block his current PIN number; it can be used when he believes that PIN information can be compromise. This API only block the PIN number and not the card number, so customer after trigger this API to block the PIN, he can still using the card for purchases but not for cash advances.

Using same API, cardholder is able the un-block a PIN number already blocked, just triggering the API with a different value on field Function Code.

Another function of this API, allow the cardholder unblock a card PIN when it was already blocked by exceed of PIN tries from ATM.

Values require by this API are Card number, channel, bank organization and service function.

**PUT** `/cards/pin/status`

The description of each API field can be found within the specifications.

## PIN Change

PIN change is a currently functionality to allow the cardholder change you current card PIN, the reason for change the card PIN can be because it is compromise, wants the change or it is required by the issuer each X number of days.

With this API, cardholder will be able to change his current PIN number, for another PIN number. At different of the API Update PIN of Card, this API will request the current PIN number assigned to the cardholder, so both values need to be added before trigger the API: Current PIN and New PIN.

This API can be used when cardholder need to change the current PIN number for another PIN number just in case that this information is compromise. This API can be trigger from ATRM, VCR, APP, Web Service etc and is 100% on line.

Require values of this API are: Card Number, Channel, Current PIN Block, New PIN Block, Key Association (to encrypt PIN Blocks), new PIN offset, and bank organization.

**PUT** `/cards/pin/pin-change`

The description of each API field can be found within the specifications.

## PIN Reassign

This API allows to the cardholder reassign a new personal identification number (PIN). Normally used when new card is delivered to the cardholder and new PIN needs to be setup and linked to the new card already activated using the API Cards Activation.

The API reassign and update the new PIN 100% online so cardholder can use the new PIN after it was assigned. This API can be trigger from different channels as ATM, web pages, VCR, APP, etc. Cardholder will choose the new four digits PIN and along with credit card number and Key Association (used to encrypt the new API) the bank application should be able to calculate the new PIN Block to trigger the API.

The values required for this API are Card Number, bank organization, channel, PIN Block and Key association.

**PUT** `/cards/pin/`

The description of each API field can be found within the specifications.

## Spending Limits Update

This API allows the customer to update online, the different spending limits associated with credit, debit, prepaid and Wallet cards. These spending limits are assigned for purchases, cash advances, internet purchases and international purchases. Spending limits assign the number of transactions and maximum amounts allowed for use on a daily, weekly, biweekly, and monthly basis. These spending limits can be assigned to the main card as well as to additional cards.

The values are modified 100% online and can be adjusted as many times as required.

This API requests as required information, the card number, transaction number and amounts for each spending limit.

**PUT** `/cards/spend-limits-L8V3`

The description of each API field can be found within the specifications.

## Travel Indicator Update

Through this API the cardholder will be able to define the destinations, outside their country, where the credit card will be used. This API activates online the dates and countries to which the cardholder is traveling in the coming months.

In the event that the card is used in a country or date range that has not been defined by this API, the authorization request will be rejected with the response: “Transaction not allowed”.

This API allows the cardholder to define the range of dates and countries where the card will be used, it also allows him to modify and delete countries and dates already defined.

The values required by the API are the card number, ISO code of the country, start and end date range, allowing up to a maximum of five countries to visit with their respective date ranges.

**PUT** `/cards/travel`

The description of each API field can be found within the specifications.

---

## See Also

- [Account Management](?path=docs/english/main-cases/account.md)
- [API Environment](?path=docs/english/main-cases/api-environment.md)
- [Audit and Monitoring](?path=docs/english/main-cases/audit.md)
- [Card Management](?path=docs/english/main-cases/card.md)
- [Customer Management](?path=docs/english/main-cases/customer.md)
- [Digital Card Issuing](?path=docs/english/main-cases/digital.md)
- [Falcon System Integration](?path=docs/english/main-cases/falcon.md)
- [HMAC Signature](?path=docs/english/main-cases/hmac.md)
- [Relation Client-Account-Card](?path=docs/english/main-cases/relation.md)
- [Upload Founds](?path=docs/english/main-cases/uploads.md)

---

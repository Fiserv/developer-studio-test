---
tags: [Main Cases, Card Management, cards, embosser, PAN token, security-codes, PIN]
---

# Card Management

## Card Action Update

Use this API to update the action flag used to re-emboss (re-issue) a specific card number.

This API allow to the user request a card reissue for some reason, lost/stolen, damage, card expiration, emergency replace, etc.

**PUT** `/cards/embosser/cardAction-L8V2`

The description of each API field can be found within the specifications defined in the portal.

## Card Or PAN Token Inquiry

Currently when a customer is not certified by the Payment Card Industry (PCI), the card number cannot be showed on any web service, ATM, POS, etc. PAN-TOKEN can be showed on a web service, ATM, POS, or any other device or service without compromise the real card number.

To keep this security value safe, is require to use a PAN-TOKEN instead of card number, so when a card number is created, the current functionality generate the PAN-TOKEN as substitute of the card number. 

When new card is created through API **Card Embosser**, the PAN-TOKEN is calculated automatically using a security KEY and it can have numeric and alphanumeric values.

Use this API to get the PAN-token calculated for a card number.

**POST** `/cards/embosser/card-pan-l8v2`

The description of this API fields can be found within the specifications defined in the portal.

## Dynamic Values Inquiry

Use this API to calculate and inquire a new CVV2 for not present card purchases.

Currently when card is embossed through the API **Card Embosser**, the static CVV2 code is calculate and printed on sign panel on card back. The new functionality of Dynamic CVV2 allow to the cardholder call this API to generate and calculate a new CVV2 before make a not present purchase. So when API is trigger the static CVV2 is inactivated and each time the cardholder wants to make a new not card present purchase the new CVV2 have to be calculated through this API.

**POST** `/cards/pin/dynamic-values`

The description of each API field can be found within the specifications defined in the portal.

## Embosser Add

Use the API to create a card information used to emboss a new card or plastic. This card information must have relate that an account number created through API **Account Add** and this account number must be related a customer number created through API **Customer Add**.

This API allow add card information as card expiration date, service code, cardholder name, address to where the card will be deliver, spending limits, etc.

The card number is calculated on randomly way by the application, and this number will not be generated again (duplicated).

**POST** `/cards/embosser/l8vf`

The description of each API field can be found within the specifications defined in the portal.

## Instant Card Add

This API allow to the user request the creation of account and card on instantly way. Card information will be ready to be use for purchases.

Customer information must be created through API **Customer Add** before call API instant card.

**POST** `/account/v2/instantCard`

The description of each API field can be found within the specifications defined in the portal.

## Invalid Attempts Inquiry

This API allow to the cardholder get the number of invalid PIN attempts.

As part of security parameters, the number of invalid PIN attempts are set up to avoid that PIN number can be calculated for frauds proposals. When this parameter is reached the PIN number is block and a new PIN number must be calculated.

Invalid PIN attempts can be reached by many reasons the most popular reason is when cardholder fails the PIN number on ATM.

**POST** `/cards/pin/invalid-attempts`

The description of each API field can be found within the specifications defined in the portal.

## Mass Card Issue Update

This API allow the user add or update a request to emboss new cards on massive way. These cards can be credit, debit or prepay card. Quantity of card to emboss is a parameter request by the API.

Cards embossed will not have an embosser name, but card number, expiration and card security values will be part of these.

**POST** `/cards/mass-card-issue-L8V3`

The description of each API field can be found within the specifications defined in the portal.

## PIN Validation

Use this API to confirm that current PIN generated is correct.

This API require the PIN block and the card number and not the clear PIN number.

**POST** `/cards/pin/validation`

The description of each API field can be found within the specifications defined in the portal.

## Security Values Inquiry

This API allow to the user get the card security values (CVV, CVV2, ICVV, PIN number) already emboss for a specific card number.

Security values provided by the API will be encrypted using a security key of 32 bytes, so user should use the same security key and 3Des algorithm to decrypt the security values.

**POST** `/cards/v1/pin/codes`

The description of each API field can be found within the specifications defined in the portal.

---

## See Also

- [Account Management](?path=docs/english/main-cases/account.md)
- [API Environment](?path=docs/english/main-cases/api-environment.md)
- [Audit and Monitoring](?path=docs/english/main-cases/audit.md)
- [Card Controls](?path=docs/english/main-cases/card-controls.md)
- [Customer Management](?path=docs/english/main-cases/customer.md)
- [Digital Card Issuing](?path=docs/english/main-cases/digital.md)
- [Falcon System Integration](?path=docs/english/main-cases/falcon.md)
- [HMAC Signature](?path=docs/english/main-cases/hmac.md)
- [Relation Client-Account-Card](?path=docs/english/main-cases/relation.md)
- [Upload Founds](?path=docs/english/main-cases/uploads.md)

---

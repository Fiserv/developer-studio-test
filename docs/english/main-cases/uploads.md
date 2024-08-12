---
tags: [Main Cases, Upload Founds From a Source Account, Account, Balance, Peer-to-Peer]
---

# Upload Founds From a Source Account

## Definition

Through API'S currently created and located in the portal, it is possible to load money from a Debit account to a Credit or Prepaid account, moving money from a Credit account to a Debit or Prepaid account or carry out charges of money from a prepaid account to another prepaid account.

These APIs are designed to allow potential customers, customers and developers to test online and directly in a real testing environment, if you haven't already set up your testing environment.

Each API will allow load money from different source products to different destination products. With the use of the different options or parameters, these APIs control, credit and debit the money from the source and the money receiver for each account, allowing online updates or not of the available credit use by the card, according to the parameter defined in the API before it is trigger.

## Purpose

The creation of Credit, Debit, and Prepaid accounts are a requirement that must be completed before execute any of the APIs used to load money. Which must be created using the APIs for Customer Creation **(Customer Add)**, Account Creation **(Account Add)** and Card Creation **(Card Add)**.

However, depending on the values used in the APIS, it is also possible to load money using direct financial amounts, received in cash from a bank branch.

## Use Case

![image](https://user-images.githubusercontent.com/111396588/224208640-605f6900-ab7a-40e3-9062-d40563b0ed8f.png)

The use of this API allows you to load money to a Debit, Credit, Prepaid and Wallet product, using the parameters defined in the Portal. This API takes as a source the cash received from an agency or bank branch, and will apply these funds. These funds can be in local or foreign currency. As part of its functions, this API allows to indicate through its parameters, if the money deposited to the account can be used immediately or not.

Through the indicated parameters, it is possible to identify the account, product card from which the withdrawal of money (debit) is being made and define the account and card to which the credit will be made, it is also required as part of the API parameters, add the geographic location (latitude and longitude) of the source (sender) that is loading money. The card number from which you receive the money (receiver) is required as part of the parameters required by the API.

**PUT** `/account/v2/balance`
      
The description of each API field can be found within the specifications defined in the portal.

## Sequence Diagram

![image](https://user-images.githubusercontent.com/111396588/224208900-25a90498-2011-4a85-96b0-9b5a8accab98.png)

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
- [HMAC Signature](?path=docs/english/main-cases/hmac.md)
- [Relation Client-Account-Card](?path=docs/english/main-cases/relation.md)

---

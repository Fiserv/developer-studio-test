
---
tags: [Main Cases, Account Management, account, balance, debit, credit limit, block, unblock, credit bureau, transfer P2P, demographic data, generation, lookup, address]
---

# Account Management

## Account Add 

This API allows add all the Account information for any product of credit, debit, prepay and Wallet. Information as credit limit, billing cycle, Customer Short Name, account block codes, customer number, card tech etc can be added as part of this API fields.

Account number is a unique number that is different than card number, account number is a number created by the system on randomly way.

This API needs the customer number as a require value before the API can be trigger. This customer number is provide when API **Customer Add** is trigger to add demographic information.

**POST** `/account/add-L8V3`

The description of each API field can be found within the specifications defined in the portal.

## Account Authorization Criteria Update

This API allows the user create and update a relation between card authorization transactions and an authorization criteria table.

The Authorization Criteria table is a current functionality to define an authorization approval criteria table on base of merchant activity or MCC, hours, day of the week, country code, postal code, so the amount of the authorization is validated to approve or decline the authorization. This table information has to be added before use this API.

**PUT** `/account/auth-criteria`

The description of each API field can be found within the specifications defined in the portal.

## Account Balance Inquiry

This API, can be used by the cardholder to get the information about account current balance. Using the account number as search parameter, API will show the account current balance, available credit, cash balance, credit limit, etc. in the API output message.

This API will show the account balances information on real time, on inquiry mode, so no account balance values can be update.

This API use the account number already assigned when API **Account Add** was trigger.

**POST** `/account/balance/details`

The description of each API field can be found within the specifications defined in the portal.

## Account Block Code Update

This API can be used by the cardholder to block/unblock the account, not the card. Currently as part of First Vision functionality, a cardholder, need to have the customer information, account information and card information already created through API’s **Customer Add**, **Account Add** and **Card Add**.

The use of this API, blocks the account for any reason, with more than 25 types of block codes already defined at product level, so depending of block code trigger in the API, all the card under this account number can be blocked automatically to avoid authorizations approve.

Account number is a require value to trigger this API.

**PUT** `/account/block-code`

The description of each API field can be found within the specifications defined in the portal.

## Account Information Inquiry

The API allows a user the get all the account information previously added through the API **Account Add** in a test environment, this account information is received in API response message after the API is called.

Information as account status, customer number, account block codes, credit limit, waive flags, etc, will be display with this API.

This API require the account number as search parameter along with bank id (organization).

**GET** `/account/v2/accounts`

The description of each API field can be found within the specifications defined in the portal.

## Account Overview Inquiry

Use this API to get most important account information, as account number, name, address, phone, user fields, account financial information, delinquency, etc. This API use account number a search parameter.

**GET** `/account/{accountNumber}/overview`

The description of each API field can be found within the specifications defined in the portal.

## Account Relationship Inquiry

This API allows the user to bring all account number already created under a relationship number.

A relationship number is defined as a Corporate Account, it means that all accounts and cards that are part of this corporate, should be created under this Corporate Account.

Use API **Account Add** to created Corporates Account and sub-accounts that will be part of this account.

This API use Corporate Account Number as search parameter.

**GET** `/account/{accountNumber}/relationship`

The description of each API field can be found within the specifications defined in the portal.

## Account Relationship Number Update

Use this API to link a new sub-account created through API **Account Add** with a relationship account previously created.

Relationship number is a unique number assigned to a Corporate Card, for example Walmart with a customer number 123, is identify with a unique relationship number 567 and under this relationship number many accounts and cards are created for Walmart employs. So using the relationship number 567 is possible link additional new sub-account.

**PUT** `/account/relationship/account`

The description of each API field can be found within the specifications defined in the portal.

## Account To Account Funds Transfer

This API allows a user to transfer a specific amount of money PEER TO PEER, between two different accounts: from credit to debit, from debit to debit, from credit to prepay or from debit to prepay, wallets etc.

This transfer can be immediately, so account receiver can use the money after API is called or can be on next day, this depend of the API parameters.

After call this API, a debit and credit transactions are created for source and destination accounts.

This API use the account number for source account and account number for destination.

**PUT** `/account/transferP2P`

The description of each API field can be found within the specifications defined in the portal.

## Account To Card Inquiry

The API allows a user to find out all the cards already created under an account number. With only the Account number provided as input for a dual currency Account, the API call will return the Card number for the local Account. If the Organization number is provided in the input, the response provides the card numbers associated with that Organization, whether it is local or foreign Organization.

To trigger this API, the account number information and card information have to be created previously using the API’s **Customer Add**, **Account Add** and **Card Add**..

This API will show all the cards created under the account number, principal card and additional cards.

**POST** `/cards/embosser/card-details-L8V3`

The description of each API field can be found within the specifications defined in the portal.

## Account User Update

Use this API to update the values of more than 50 user fields defined at account level information, this user fields are discretionary use fields that can be use by the user to add additional information at the account.

Values as dates, amounts, codes, etc. can be set up in the API before trigger it.

**PUT** `/account/user`

The description of each API field can be found within the specifications defined in the portal.

## Account Wallet Status Update

The API allows the user to change the current wallet status to active, inactive or suspend.

Wallet is a current functionality to allow a prepay account has more than one currency code bucket called wallet to upload money. A prepay account can has a wallet to upload $US Dollar, Local currency and other currency codes.

This API can be used to change the status of each of one wallets.

**PUT** `/account/walletStatus`

The description of each API field can be found within the specifications defined in the portal.

## Associated Parties Update

This API allows the user update selected parameters at account level information, related with Associated Parties fields.

The Associated parties fields located at account level are been used to identify if the account has any relation with a third party. A third party associated can be: guarantor, consigner, authorized signer, sales representative, etc.

**PUT** `/account/associatedParties`

The description of each API field can be found within the specifications defined in the portal.

## Cash-in / Cash-out Request

Use this API to apply a money amount from a Bank Branch, ATM, Web service etc, this money transfer does not make a debit from an existing account of credit, debit, or prepay, just this API post an specific money amount to a destination account. Also can be used to money transfer amount from a Bank Branch, ATM, Web service etc, this money transfer does not make a debit from an existing account of credit, debit, or prepay, just this API post an specific money amount to a destination account. However, parameters previously defined, allow Card Fraud Control)audit this type of transactions.

Use API parameters to allow that money transfer can be ready to use after API was call or wait until next day.

**PUT** `/account/v2/balance`

The description of each API field can be found within the specifications defined in the portal.

## Credit Bureau Update

This API allows a user to update the credit bureau fields at account level, so the account will be add into Credit Bureau report generated on daily basis. This report is been use to inform to a Credit Bureau institution about the cardholder credit situation and classification.

This API uses the account number and a flag to indicate if the account is added into the Credit Bureau report.

**PUT** `/account/creditBureau`

The description of each API field can be found within the specifications defined in the portal.

## Customer Number Update

The API allow as user to change the customer number already link to a specific account information.

Currently when an account information is created on the test environment through API **Account Add**, is require add the customer number created through API **Customer Add**. This link is require to link a customer with an account created.

With this API is possible remove this link and make a different link between the account number and a different customer number already created on test environment.

This API use the account number as search parameter and an existing customer number that will be use to establish a new link.

**PUT** `/account/v2/customer`

The description of each API field can be found within the specifications defined in the portal.

## Direct Debit-Credit Inquiry

The API allows the user the bring all the information about values previously set up at the account level o generate a Direct Debit o Direct Credit.

Direct Debit and Direct Credit is a functionality to allow internal process make a debit or credit of a Banking account (Current or saving) and this amount can be used to pay statement minimum or full balance.

The saving account, current account and Routing account are values previously set up at the account level so after call this API these information have to be set up as part of account information though API **Account Add**.

**GET** `/account/{accountNumber}/credit-debit`

The description of each API field can be found within the specifications defined in the portal.

## Installment Terms Update

Use API to allows user change or update the installment term of a transactions already posted into account.

In some Latam countries, when a purchase transaction is posted into the account, it can be financed in an specific number of installments, so a fixed payment amount should be calculated for this transactions.

This API allow the user the change the installments number already set up at the transactions level.

This API use the account number, transactions reference number, and new number of installment as part of search parameters.

**PUT** `/account/installment-term`

The description of each API field can be found within the specifications defined in the portal.

## Pending Bank, Branch and Store Update

This API **ACCOUNT/BANK-BRANCH-STORE**, allow the user to update the Branch of store in where the credit was approved to create the account and card. This number is part of account information and is added for first time when account is created through API **Account Add**.

**PUT** `/account/bank-branch-store`

The description of each API field can be found within the specifications defined in the portal.

## Prepaid Load Limits Update

The API allows a user to update the current maximum and minimum limits of amount allow for prepay accounts.

When a prepay account is created using API **Account Add**. The maximum and minimum amounts that a prepay card can has, are set up. However this limits can change with the time, so the API will help customer to set up the new parameters.

**PUT** `/account/ppd-load-limits`

The description of each API field can be found within the specifications defined in the portal.

## Prepaid Over Limits Update

Use this API to update the over limit amount allowed for a specific prepay account number. This over limit amount is a fixed amount used by authorization system to validated is the authorization amount if under this amount when the account does not have more available credit.

**PUT** `/account/ppd-over-limit`

The description of each API field can be found within the specifications defined in the portal.

## Pricing Control Table Update

Use this API to assign a new Processing Control Table (PCT) to an existing account for a range of dates.

Currently when a new account is created using API **Account Add**, the PCT number as to be added. This PCT table contains the processing parameter use by the account to process interests, fees, taxes, etc.

Using this API is possible me make an override of the current PCT by another PCT with different parameters.

**PUT** `/account/pctId`

The description of each API field can be found within the specifications defined in the portal.

## Restructure and Refinance Inquiry

This API allows a user select an specific balance amount from an account credit plan and refinance or restructure this balance into a new number of installment or fixed amount.

For example an account balance of $10,000 for credit plan 10002 at 5 installments has a fixed payment of $2,000 per month, using this API, to refinance or restructure this balance, the new number of installment can be 10 with a minimum payment of $1,000 per month.

This API request the account number, type of refinance, credit plan, new number of installment and new amount.

**GET** `/account/{accountNumber}/balance`

The description of each API field can be found within the specifications defined in the portal.

## Transfer Promotional Product Upgrade

Use this API to upgrade a current product type of card into another one, for example upgrade from Visa Classic to Visa Gold, or from MasterCard Classic to MasterCard Black.

When API is trigger, account information, card information and balances are transfer into new account and card. Customer information will be the same. Account Statements will be kipped on old account, but transactions cycle to date will be transfer into new account.

Same API can be used to make a product downgrade, it means transfer from Visa Gold to Visa Classic or from MasterCard Black to MasterCard Classic.

**PUT** `/account/transfer-promotional-product`

The description of each API field can be found within the specifications defined in the portal.

## Temporary Credit Limit Update

Use this API to increase the account credit limit for a specific number of days. This API is very useful when cardholder does not have more available credit limit and he request a credit limit increase for a specific number of day, so when time limit is complete, the original credit limit is set back as current credit limit.

This API use the account number as search parameter and values as account credit limit, new credit limit and increase expiration date needs to be set up before the API be trigger.

**PUT** `/cards/temporary-credit-limit`

The description of each API field can be found within the specifications defined in the portal.

---

## See Also

- [API Environment](?path=docs/english/main-cases/api-environment.md)
- [Audit and Monitoring](?path=docs/english/main-cases/audit.md)
- [Card Controls](?path=docs/english/main-cases/card-controls.md)
- [Card Management](?path=docs/english/main-cases/card.md)
- [Customer Management](?path=docs/english/main-cases/customer.md)
- [Digital Card Issuing](?path=docs/english/main-cases/digital.md)
- [Falcon System Integration](?path=docs/english/main-cases/falcon.md)
- [HMAC Signature](?path=docs/english/main-cases/hmac.md)
- [Relation Client-Account-Card](?path=docs/english/main-cases/relation.md)
- [Upload Founds](?path=docs/english/main-cases/uploads.md)

---

# CardPointe Integrated Terminal Developer Guide for Canadian Merchants

<!-- theme: caution -->
> This integration is currently in development and private beta test.  

# Overview

The CardPointe Integrated Terminal solution supports merchants processing in Canada with minimal differences from an existing US merchant integration.

This guide provides important details and key integration differences for using Clover CardPointe Integrated Terminal devices and the Terminal API for taking payments in Canada.

## Developer Resources

This guide provides specific supplemental information for developing a CardPointe Integrated Terminal integration for Canadian merchants. See the following additional resources for general information on integrating the Terminal API and Clover CardPointe Integrated Terminal devices:
- [CardPointe Integrated Terminal API](?path=docs/APIs/CardPointeIntegratedTerminalAPI.md) - Provides detailed Terminal API documentation for developing your integration.
- [CardPointe Integrated Terminal Developer Guide](?path=docs/documentation/CardPointeIntegratedTerminalDeveloperGuides.md) - Provides general integration guidance for common use cases and features.

## Requirements

Before you begin, review the following requirements:

### Merchant Requirements
To process in Canada, merchant accounts must be configured as follows:
- Merchants must be boarded to the First Data South/Nashville processor.
- Merchants must be configured to process in Canadian Dollar (CAD) only. Processing in United States Dollar (USD) is not supported in Canada.
- Merchants must be entitled to accept Interac Debit.

### Hardware Requirements
The following Clover devices are supported:
- Flex 4
- Flex Pocket
- Mini 3

Additionally, devices must be running application version `2.0.00-7` or later.

### Language Requirements
Quebec's language laws establish French as the official language of the province and outline how it should be used in business, government, and other areas. The laws dictate that: 
- Businesses must have French names
- Businesses must be able to serve customers in French
- Commercial documents, websites, and social media must be in French
- Products and packaging must be in French
- Public signs and advertising must be in French

The CardPointe Integrated Terminal application supports a dual-language configuration to help merchants meet these language requirements for customer-facing displays and user interfaces. 

See [Handling Dual Languages](#language) for more information on device configuration and API requirements.

## Limitations
Additionally, review the following limitations specific to CardPointe Integrated Terminal integrations for Canadian merchants:
- Credit Card Surcharging is not supported at this time.
- Interac debit card refunds require the same card to be present in order to process refund. 

# Integration Details

## Key API Differences

Generally-speaking the Terminal API for Canadian merchant integrations functions the same as it does for US merchant integrations; however, note the following key differences:
- New `reverse` endpoint - The new `reverse` endpoint is required for refunding Interac debit payments, and can be used to void or refund any other card payment for both US and Canadian merchant integrations.
- v4 authCard and authManual - You must use the v4 `authCard` and `authManual` endpoints. if you have an existing integration using the v3 or earlier versions of these endpoints, the API will return the following error for requests sent from a Canadian MID: `"errorMessage":  "API version not supported in Canada, please update to v4/"`.
- readCard and readManual - The readCard and readManual endpoints are **not supported** for Canadian merchant integrations.
- Receipt Data - The `receipt` object in the authorization response includes `TID`, `txnType`, and `accttype` (Interac only) fields, which must be included on the receipt. See [Receipts](#receipts), below, for more information. 
- Language considerations - For merchants processing in Quebec, you may need to make adjustments to certain API requests used to display a message or prompt on the terminal. See [Handling Dual Languages](#language), below, for more information.

## Reverse Endpoint
The Terminal API now includes a `reverse` endpoint, used to void or refund transactions for both US and Canadian merchant integrations.

A call to the `reverse` endpoint looks up the original transaction using its retrieval reference number (`retref`) and, in the case of a full refund, determines whether the transaction can be voided before attempting a refund. See the [Gateway API void description](../api/?type=post&path=/cardconnect/rest/void) for more information on voids.



<!-- theme: warning --> 
> Voids are not supported for Interac debit cards. Instead, the terminal prompts the cardholder to present the card used in the original sale, and issues a refund.
> Interac debit reversals can only be processed using the physical card or digital wallet used in the original sale. See [Handling Interac Debit Cards](#interac) for more information.
> If your application currently uses the CardPointe Gateway API to void or refund transactions, you must update your integration to use the Terminal API's `reverse` endpoint to support the card-present requirement for Interac cards. 

### Reverse Request
The following table describes the reverse request. 

> Fields in **bold** are required.

| Field	| Type | Description |
| --- | --- | --- | --- |
| **`merchantId`**	| String | The merchant ID, required for all requests. |
| **`hsn`**	| String | The hardware serial number of the terminal. |
| **`retref`**	| String | The retrieval reference number for the original transaction. |
| `amount` | String | The amount to refund. Defaults to the original transaction amount, if not provided, to perform a void or full refund. |
| `authMerchantId` | String | Required and must match if used in the original authorization. <br/><br/>This value is only used if you have multiple merchant IDs, and want to process the transaction using a different merchant ID that is not associated with this terminal.<br/><br/> The `authMerchantId` and `merchantId` must belong to the same customer account. <br/><br/>This setting must be enabled for your merchant account. Contact [integrationdelivery@fiserv.com](mailto:integrationdelivery@fiserv.com) for additional information.|
| `beep` | Boolean | Determines if the terminal beeps to prompt user interactions.<br/><br/>If `true`, beep is enabled.<br/><br/>Defaults to `false` if not provided.|
| `clearDisplayDelay` | String | Determines the number of milliseconds to wait, after the request completes, before clearing the authorization status from the terminal display and returning to the idle display.<br/><br/> Set to `0` to disable clearing the display after a request.|
| `printDelay` | String | Specifies the amount of time (in milliseconds) to wait before printing generating and printing a second receipt, when `"printExtraReceipt":"true"`. On average, this process takes approximately 5 seconds (5000 ms); therefore, the total amount of time to print a second receipt is equal to the `printDelay` value + 5000ms.<br/><br/> Valid values range from 0 to 60000(ms).|
| `printExtraReceipt` | Boolean | If `true`, the terminal prints a second copy of the receipt after the initial receipt is printed.<br/><br/> If true, `printDelay` is *required*.<br/><br/>Defaults to `false` if not provided. |
| `printReceipt` | Boolean | If `true`, the terminal prints a receipt.<br/><br/>Defaults to `false` if not provided. |

The following example illustrates a sample `reverse` request:

```
{
  "merchantId": "123456789012",
  "hsn": ": "C081UG43252228",
  "amount" : "2500",
  "retref" : "173006146691",
}
```

### Reverse Response

The following table describes the reverse response.

> The response includes a new field, `reverse`, which indicates whether the transaction was voided or refunded.
 
| Field	| Max Length | Type | Description |
| --- | --- | --- | --- |
| `merchid`	| 16 | String | The merchant ID, copied from the authorization. |
| `amount` | 14 | String | The amount that was voided or refunded. |
| `currency` | 3 | String | The currency of the transaction. |
| `authcode`| 6 | String | The authcode returned for a refund, or `REVERS` in the case of a void. |
| `respcode` | 3 | String | Alpha-numeric response code that represents the description of the response. See [Response Codes](?path=docs/documentation/GatewayResponseCodes.md#) for detailed information. |
| `respproc` | 4 | String | An abbreviation that represents the platform and the processor for the transaction. |
| `respstat` | 1 | String | Indicates the status of the online refund request. Can be one of the following values: <br/> <br/> **A** - Approved <br/> **B** - Retry <br/> **C** - Declined |
| `resptext` | 40 | String | A text description of the authorization response. |
| `retref` | 16 | String | The retrieval reference number, copied from the original transaction. |
| `reverse` | 6 | String | Indicates whether the reversal was processed as a `Void` or `Refund`. |
| `receiptData` | - | Object | A JSON object that contains the receipt data for the transaction.  |

The following example illustrates a successful void response from the `reverse` endpoint:

```
{
  "merchid": "123456789012",
  "respproc": "FNOR",
  "amount": "25.00",
  "resptext": "Approval",
  "orderId": "Vorder-e42XXXXXXXXXXXXXX1-527",
  "currency": "USD",
  "retref": "173006146691",
  "respstat": "A",
  "respcode": "00",
  "reverse": "Void",
  "receiptData": {
    "dba": "Business Name",
    "address1": "1000 Continental Drive",
    "address2": "Ste 300",
    "phone": "": "123-456-7890",
    "header": "",
    "orderNote": "",
    "dateTime": "20250106225407",
    "items": "",
    "nameOnCard": "Joe Cardholder",
    "footer": ""
},
```

## Handling Dual Languages
<a name="language"></a>
Merchants doing business in Quebec must adhere to the province's language laws, namely displaying user interfaces and messaging in French. 

The CardPointe Integrated Terminal supports a dual-language configuration, which enables most user-facing displays to automatically display in the appropriate language. 

### Terminal Language Settings
*Merchant-facing* user interface and messages are determined by the language setting selected when unboxing and setting up the terminal.

In addition to the primary terminal language set during the initial setup, merchants **must** also perform the following steps to set the terminal's Secondary Language to English:

> This is **required** to comply with Quebec language laws.
> <!-- theme: danger -->

1. Navigate to the **Set-Up** app on the device.
2. Select **Payments**.
3. Select **Secondary Language**.
4. Enable > **English**.

*Customer-facing* user interface and messages are initially displayed in both French and English, until the customer presents their payment card, at which point the terminal derives the customer's preferred language from the EMV chip and adjusts the display and receipt language accordingly.

> The language specified by the card overrides the terminal's language setting.

The following table illustrates how the terminal and card language settings affect the language presented on the device:

| Merchant Language Selection | Terminal Language | Card Language | Post-Card-Read Display | Receipt |
| --- | --- | --- | --- | --- |
| English | Dual Language (French/English)| French | French | French |
| English | Dual Language (French/English)| English | English | English |
| French | Dual Language (French/English)| French | French | French |
| French | Dual Language (French/English)| English | English | English |

### API Considerations
When using the following Terminal API requests to display a message or prompt on the terminal, you must send the message in French or French and English, as needed:
- <code>display</code>
- <code>readConfirmation</code> 
- <code>readInput</code> 
- <code>readSignature</code> 
- <code>tip</code>

## Handling Interac Debit Cards
<a name="interac"></a>
> Co-branded (Interac + Visa/Mastercard) cards are treated as Interac cards, as described below.

The following table describes the payment types that are and are not supported for Interac debit cards:

| Payment Method | Card Type | Rules and Regulations |
| --- | --- | --- |
| Void            | Interac | **Not Supported** <br/><br/>Voids are not supported for Interac or Interac Flash cards. Instead, use the `reverse` endpoint to perform a refund.|
| Refund | Interac | **Supported** <br/><br/>Note the following:<ul><li>Interac refunds **must** be card-present. Use the `reverse` endpoint to perform a card-present refund.</li><li>The same card used in the original transaction must be presented at the time of a refund. Attempting to process a refund on another card will result in a decline |
| Pre-Auth | Interac | **Not Supported** <br/><br/>Transactions are always captured. If the authCard request includes `"capture":"false"` this setting will be ignored and the transaction will be captured by the CardPointe Gateway. |
| EMV Contact (insert) | Interac | **Supported** <br/><br/>Note the following:<ul><li>The cardholder is prompted to select their savings or checking account for payment.</li><li>Offline Pin is required.</li></ul> |
| EMV Contactless (Card) | Interac/Interac Flash | **Supported** <br/><br/>Note the following:<ul><li><li>The cardholder is prompted to select their savings or checking account for payment.</li>Offline PIN is not required if the cardholder is below the contactless per-transaction limit (currently CDN $250).</li><li>If the cardholder has exceeded this limit, the terminal will prompt the cardholder to insert their card and provide a PIN.</li></ul> |
| EMV Contactless (Digital Wallet) | Interac/Interac Flash | **Supported** <br/><br/>Note the following:<ul><li>The cardholder is **not** prompted to select their savings or checking account for payment; An Interac digital wallet card is only associated with the cardholder's savings *or* checking account.</li><li>PIN is **not** required for Interac contactless wallets. |
| Magnetic Strip (MSR) | Interac | **Not Supported** <br><br/>Interac cards **must** use EMV Contact or EMV Contactless entry methods. |
| Manual Entry (Keyed) | Interac | **Not Supported** <br/><br/>Interac cards **must** use EMV Contact or EMV Contactless entry methods. |

> Approved and Declined payment screens are not displayed on the terminal for Interac cards.
> <!-- theme: warning -->

## Receipts
<a name="receipts"></a>
Receipts in Canada must include the following additional details:

> These fields are automatically included on the receipt printed by the Clover terminal; however if your application generates its own receipts, you must retrieve and include these values from the authorization response, as follows.

- **Account Type** - For Interac cards, the `acttype` value is returned in the `receipt` objection, and must be used to specify the account type used, either `Checking` or `Savings`. `acttype` is not returned for other card brands.
- **CVM** - THE Cardholder Verification Method (CVM) must be displayed. You must use the `PIN` and `Signature` values from the emvTagData array in the authorization response to determine the CVM for the transaction. See [Determining the CVM](#cvm) below for detailed information.
- **TID** - The `TID` value is returned in the `receipt` object in the authorization response.
- **Transaction Type** - The `txnType` value is returned in the `receipt` object in the authorization response.
 
### Determining the CVM
<a name="cvm"></a>
To determine the CVM Method, you must use the `PIN` and `Signature` fields in the `emvTagData` object returned in the authorization response, as follows:

- If `"PIN" : "None"` and `"Signature" : "False"`, display `NO CVM REQUIRED`.
- If `"PIN" : "Verified by PIN"` and `"Signature" : "False"`, display `PIN VERIFIED`.
- If `"PIN" : "None"` and `"Signature" : "True"`, display `SIGNATURE`.
- If `"PIN" : "Verified by PIN"` and `"Signature" : "True"`, display `PIN & SIGNATURE VERIFIED`.

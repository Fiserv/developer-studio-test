# Merchant Attributes

* **Description**: List of fields grouped under logical **Domains** and stored as key-value(s) pair as attributes.
  * Example of a **Domain**: chargebackConfig is a **domain** that groups all fields called as **Attributes** those configures chargeback related processing for a merchant. Example of some attributes are:
    * Chargeback Address code indicating where chargeback related information sent
    * Chargeback Pre-note Days
  * See [list of Domains](#list-of-domains)
* **API section**: merchantAttributes
* **Table Name**: UMM.MERCHANT_ATTRIBUTES
* **How to Retrieve attributes from Snowflake Data tables?**:
  * Master Tables: Attributes are defined using two Master tables in UMM
    * UMM.DOMAIN_MASTER : Contains the definition of the Domain
    * UMM.ATTRIBUTE_MASTER: Contains the definition of the attributes and tied to Domain
  * UMM.MERCHANT_ATTRIBUTES stores the ID of the UMM.ATTRIBUTE_MASTER for each attributes
  * Sample Query to pull the attributes:

  ```text

  SELECT
    DM.DOMAIN,
    DM.DESCRIPTION as DOMAIN_DESCRIPTION,
    ATTRMASTER.NAME,
    ATTRMASTER.DESCRIPTION as ATTR_DESCRIPTION,
    MA.VALUE
  FROM UMMPRODDB.UMM.MERCHANT_ATTRIBUTES MA
  INNER JOIN UMM.ATTRIBUTE_MASTER ATTRMASTER ON MA.ATTRIBUTE_ID = ATTRMASTER.ID
  INNER JOIN UMM.DOMAIN_MASTER DM ON DM.ID = ATTRMASTER.DOMAIN_ID
  WHERE MA.MERCHANT_ID = '208201019881'
    AND MA.PLATFORM_CODE = 'NORTH'
    AND DM.DOMAIN = 'chargebackConfig'
    AND EFFECTIVE_END_DATE is NULL;

  ```

## List of Fields

### MERCHANT_ID

* Description: Backend unique identifier for a merchant.
* API field: merchantId
* Field Specification:

<!-- type: tab 
titles: UMM, North, South, GMA 
-->

| Type   | Minimum Length | Max Length | Inquiry |  Create  |  Update  |
|--------|:--------------:|:----------:|:-------:|:--------:|:--------:|
| String |  BE specific   |     50     |   N/A   | Optional | Optional |

<!-- type: tab -->

| Type   | Minimum Length | Max Length | Inquiry |  Create  |  Update  |
|--------|:--------------:|:----------:|:-------:|:--------:|:--------:|
| String |       12       |     12     |   N/A   | Optional | Optional |

<!-- type: tab -->

| Type   | Minimum Length | Max Length | Inquiry |  Create  |  Update  |
|--------|:--------------:|:----------:|:-------:|:--------:|:--------:|
| String |       11       |     11     |   N/A   | Optional | Optional |

<!-- type: tab -->

| Type   | Minimum Length | Max Length | Inquiry |  Create  |  Update  |
|--------|:--------------:|:----------:|:-------:|:--------:|:--------:|
| String |       11       |     11     |   N/A   | Optional | Optional |

<!-- type: tab-end -->

---

### PLATFORM_CODE

* Description: Backend platform identifier e.g. North, South etc.
* API field: platformCode
* Field Specification: See supported platform and values of the enum [here](?path=docs/specification/supportedPlatforms.md)

---

### ATTRIBUTE_ID

* Description: UMM defined attribute ID. See the query above for further details.
* API field: Not applicable - domain and attribute name along with respective descriptions are returned. Sample payload shows the domain  and the list of attributes under that domain.
  * Please see [List of Domains](#list-of-domains) for available domains and attributes.

```text

"merchantAttributes": {
                "chargebackConfig": {
                    "domainDescription": "chargeback Configuration",
                    "holdChargebackIndicator": {
                        "attributeDescription": "Hold Chargebacks Indicator ",
                        "values": [
                             "0"
                        ]
                    },
                    "chargebackPrenoteIndicator": {
                        "attributeDescription": "Indicates if the merchants recieves pre-notification before receiving a charge back",
                        "values": [
                            "NO"
                        ]
                    },
                    "excessiveChargebackIndicator": {
                        "attributeDescription": "Excessive Chargeback Indicator",
                        "values": [
                            "NO"
                        ]
                    },
                    "disputeDispositionCode": {
                        "attributeDescription": "Indicates the disposition option for chargeback disputes",
                        "values": [
                            "CORE_BUSSINESS_RULES"
                        ]
                    },
                    "chargebackPrenoteDays": {
                        "attributeDescription": "Chargeback Prenote Days",
                        "values": [
                            "0"
                        ]
                    },
                    "chargebackAddressCode": {
                        "attributeDescription": "Indicates where the chargeback advice is directed",
                        "values": [
                            "DBA_ADDR_ONLY"
                        ]
                    },
                    "mediaRetrievalCode": {
                        "attributeDescription": "Code determining how the bank retrieval and chargeback retrieval advice or requests are processed",
                        "values": [
                            "EIDS"
                        ]
                    },
                    "mediaFaxNumber": {
                        "attributeDescription": "Media Fax Number",
                        "values": [
                            ""
                        ]
                    },
                    "chargebackReportDestinationCode": {
                        "attributeDescription": "Chargeback Report Destination Code",
                        "values": [
                            "CURRENT_LEVEL"
                        ]
                    }
                }
            }                 

```

* Field Specification:

<!-- type: tab 
titles: UMM
-->

| Type    | Minimum Length | Max Length | Inquiry | Create | Update |
|---------|:--------------:|:----------:|:-------:|:------:|:------:|
| Numeric |      N/A       |     6      |   N/A   |  N/A   |  N/A   |

<!-- type: tab-end -->

---

### VALUE

* Description: Value of the Attribute
* API field: values[0]
* Field Specification:

<!-- type: tab 
titles: UMM
-->

| Type   | Minimum Length | Max Length | Inquiry | Create | Update |
|--------|:--------------:|:----------:|:-------:|:------:|:------:|
| String |      N/A       |    200     |   N/A   |  N/A   |  N/A   |

<!-- type: tab-end -->

---

## List of Domains

### acknowledgementFilePreference

---

tags: [acknowledgementFilePreference]

---

* Description: Acknowledgement File Preference

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| ackFilePreference            | Acknowledgement File Preference                   | NORMAL        | Normal                                                    |Available | Optional | Allowed  |    NA    |
|                              |                                                   | MASK          | Mask                                                      |Available | Optional | Allowed  |    NA    |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| ackFilePreference            | Acknowledgement File Preference                   | NORMAL        | Normal                                                    |Available | Optional | Allowed  |    NA    |
|                              |                                                   | MASK          | Mask                                                      |Available | Optional | Allowed  |    NA    |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### additionalBusinessInfo

---

tags: [additionalBusinessInfo]

---

* Description: Acknowledgement File Preference

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Valid Values  | Value Description                                         | Inquiry  | Create | Update | Delete |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:------:|:------:|:------:|
| rccCode| Merchant Retailer Category        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Valid Values  | Value Description                                         | Inquiry  | Create | Update | Delete |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:------:|:------:|:------:|
| rccCode| Merchant Retailer Category        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab-end -->

### additionalTaxInfo

---

tags: [additionalTaxInfo]

---

* Description: Additional Tax Information

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| incomeTaxCode                | Income Tax Code                                   |               |                                                           | Available| Optional | Allowed  |    NA    |
| secondaryTaxId               | Secondary Tax ID                                  |               |                                                           | Available| Optional | Allowed  |    NA    |
| vatTaxCode                   | VAT Tax Code                                      |               |                                                           | Available| Optional | Allowed  |    NA    |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| incomeTaxCode                | Income Tax Code                                   |               |                                                           | Available| Optional | Allowed  |    NA    |
| secondaryTaxId               | Secondary Tax ID                                  |               |                                                           | Available| Optional | Allowed  |    NA    |
| vatTaxCode                   | VAT Tax Code                                      |               |                                                           | Available| Optional | Allowed  |    NA    |

<!-- type: tab-end -->

### adrp

---

tags: [adrp]

---

* Description: Auto Decision Refund Process

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| adrpCumulativeLimitAmount| Cumulative refund amount on the same card in the past 30 or 60 days         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| adrpCumulativeLimitCount | ADRP cumulative limit count         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| adrpLimitAmount| A dollar limit defined for credits with no offsets         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| adrpCumulativeLimitAmount| Cumulative refund amount on the same card in the past 30 or 60 days         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| adrpCumulativeLimitCount | ADRP cumulative limit count         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| adrpLimitAmount| A dollar limit defined for credits with no offsets         |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### authMatchExclusion

---

tags: [authMatchExclusion]

---

* Description: Auth Match Exclusion

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| southAuthMatchExclusion| South Auth Match Exclusion        |    ROOT_LEVEL_MATCHING   |   Root Level Matching        |    Available     | Optional     | Allowed |    NA |
|                        |                                   |    FULL_MID_MATCHING   |   Full Mid Matching        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| southAuthMatchExclusion| South Auth Match Exclusion        |    ROOT_LEVEL_MATCHING   |   Root Level Matching        |    Available     | Optional     | Allowed |    NA |
|                        |                                   |    FULL_MID_MATCHING   |   Full Mid Matching        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### authSettings

---

tags: [authSettings]

---

* Description: Auth Settings

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| authTypeCode| Auth Type Code        |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|             |                       |    PRE_AUTHORIZATION   |   Pre Authorization        |    Available     | Optional     | Allowed |    NA |
|             |                       |    FINAL_AUTHORIZATION   |   Final Authorization        |    Available     | Optional     | Allowed |    NA |
| transactionCurrency| Transaction Currency         |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| authTypeCode| Auth Type Code        |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|             |                       |    PRE_AUTHORIZATION   |   Pre Authorization        |    Available     | Optional     | Allowed |    NA |
|             |                       |    FINAL_AUTHORIZATION   |   Final Authorization        |    Available     | Optional     | Allowed |    NA |
| transactionCurrency| Transaction Currency         |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### avsControl

---

tags: [avsControl]

---

* Description: AVS Control

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| avsAddressIndicator| Address verification service address indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                    |                                                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsExactIndicator| Address verification service exact indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                    |                                                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsNoIndicator| Address verification service no indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                    |                                              |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsRetryIndicator| Address verification service retry indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                    |                                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsServiceIndicator| Address verification service indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsUnavailableIndicator| Address verification service unavailable indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsWholeZipIndicator| Address verification service whole zip indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsYesIndicator| Address verification service Yes indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsZipIndicator| Address verification service zip indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  
|                |                                                   |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |  
<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| avsAddressIndicator| Address verification service address indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                    |                                                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsExactIndicator| Address verification service exact indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                    |                                                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsNoIndicator| Address verification service no indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                    |                                              |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsRetryIndicator| Address verification service retry indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                    |                                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsServiceIndicator| Address verification service indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsUnavailableIndicator| Address verification service unavailable indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsWholeZipIndicator| Address verification service whole zip indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| avsYesIndicator| Address verification service Yes indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                              |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| avsZipIndicator| Address verification service zip indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  
|                |                                                   |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |  

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### bamsDissolutionHoldingsStatus

---

tags: [bamsDissolutionHoldingsStatus]

---

* Description: Bams Dissolution Holdings Status

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    FISERV   |   Fiserv        |    Available     | Optional     | Allowed |    NA |
|             |                      |    OTHER_ASSIGNED   |   Other Assigned        |    Available     | Optional     | Allowed |    NA |
|             |                      |    BANK_OF_AMERICA   |   Bank Of America        |    Available     | Optional     | Allowed |    NA |
| status       | Program Status        |    ALLOCATED   |   Allocated        |    Available     | Optional     | Allowed |    NA |
|             |                      |    DORMANT_CANCELLED   |   Dormant Cancelled        |    Available     | Optional     | Allowed |    NA |
|             |                      |    RESERVED_ATTACHED   |   Reserved Attached        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    FISERV   |   Fiserv        |    Available     | Optional     | Allowed |    NA |
|             |                      |    OTHER_ASSIGNED   |   Other Assigned        |    Available     | Optional     | Allowed |    NA |
|             |                      |    BANK_OF_AMERICA   |   Bank Of America        |    Available     | Optional     | Allowed |    NA |
| status       | Program Status        |    ALLOCATED   |   Allocated        |    Available     | Optional     | Allowed |    NA |
|             |                      |    DORMANT_CANCELLED   |   Dormant Cancelled        |    Available     | Optional     | Allowed |    NA |
|             |                      |    RESERVED_ATTACHED   |   Reserved Attached        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### billingConfig

---

tags: [billingConfig]

---

* Description: Billing cofiguration

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| billSuppliesIndicator| Bill Supplies Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| billSuppliesShippingIndicator| Bill supplies shipping and handling indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| delayedBillingEffectiveDate| Delayed billing effective date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| managementFeeDate| Date that management fee will be charged        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| membershipFeeDate| Date that membership fees will be charged  |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| retailerRateCode| Retailer rate code specific client usage        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| zeroInterchangeIndicator| Zero interchange indicator reserved for international banks only        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          |             |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          |             |    MASTERCARD_ONLY   |   Mastercard Only   |    Available     | Optional     | Allowed |    NA |
|          |             |    VISA_ONLY   |   Visa Only   |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| billSuppliesIndicator| Bill Supplies Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| billSuppliesShippingIndicator| Bill supplies shipping and handling indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| delayedBillingEffectiveDate| Delayed billing effective date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| managementFeeDate| Date that management fee will be charged        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| membershipFeeDate| Date that membership fees will be charged  |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| retailerRateCode| Retailer rate code specific client usage        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| zeroInterchangeIndicator| Zero interchange indicator reserved for international banks only        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|             |                      |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### billmatrix

---

tags: [billmatrix]

---

* Description: Billmatrix

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    NOT_ACCEPTED   |   Not Accepted        |    Available     | Optional     | Allowed |    NA |
|        | Program Status        |    ACCEPTED   |   Accepted        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    NOT_ACCEPTED   |   Not Accepted        |    Available     | Optional     | Allowed |    NA |
|        | Program Status        |    ACCEPTED   |   Accepted        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### boardingAdditionalInfo

---

tags: [boardingAdditionalInfo]

---

* Description: Merchant Boarding Additional Information

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| descriptionOfGoods| Description of goods and services sold by the merchant        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| homeBasedBusiness| Defines if the merchants business location is the same as his home location        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| wisoSalesRepId| Sales rep id of the wholesale iso employee        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| salesLead| Name or description of the sales lead | STRING | String | Available  | Optional | Allowed | NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| descriptionOfGoods| Description of goods and services sold by the merchant        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| homeBasedBusiness| Defines if the merchants business location is the same as his home location        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| wisoSalesRepId| Sales rep id of the wholesale iso employee        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| salesLead| Name or description of the sales lead | STRING | String | Available  | Optional | Allowed | NA |

<!-- type: tab-end -->

### cardbrandPassThruFees

---

tags: [cardbrandPassThruFees]

---

* Description: Cardbrand Pass Thru Fees

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### cardconnect

---

tags: [cardconnect]

---

* Description: Cardconnect File Identifier

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|       |                       |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|       |                       |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### cashAdvance

---

tags: [cashAdvance]

---

* Description: Cash Advance

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| cashAdvanceLimitAmount| Cash advance Limit Amount        |    REJECT_IF_GTE_100000 - Reject if greater than or equal to 100000  |   Reject If Gte 100000 - Reject If Greater Than Or Equal To 100000        |    Available     | Optional     | Allowed |    NA |
| splitFundingAdvanceAmount| Split Funding Advance Amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| splitFundingParticipationCode| Split Funding Participation Code        |    ADV_REPAID   |   Adv Repaid        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    NOT_USED   |   Not Used        |    Available     | Optional     | Allowed |    NA |
|             |                 |                                           ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|        |       |  SPLIT_FUNDING   |   Split Funding        |    Available     | Optional     | Allowed |    NA   |
|        |       |  RAPID_ADVANCE   |   Rapid Advance        |    Available     | Optional     | Allowed |    NA   |
|        |       |  MERCHANT_CAPITAL_SRC   |   Merchant Capital Source  |  Available  | Optional     | Allowed |    NA   |
| splitFundingPayToMerchantId| Split funding pay to merchant number        |    STRING - Digits only - MERCHANT ID   |   String - Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| splitFundingPercent| Split Funding Percentage        |    STRING - Digits only - no decimal (max length - 3, min - 1)   |   String - Digits Only - No Decimal (Max Length: 3, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| splitFundingVendorCode| Split funding cash advance vendor code        |    MER_ADV_FUNDING   |   Mer Adv Funding        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    FDMCA   |   Fdmca        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    RAPID_ADV   |   Rapid Adv        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    FUND_TREE   |   Fund Tree        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    ADV_ME   |   Adv Me        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    ADV_ME_INC   |   Adv Me Inc        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    BIZ2_CREDIT   |   Biz2 Credit        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| cashAdvanceLimitAmount| Cash advance Limit Amount        |    REJECT_IF_GTE_100000 - Reject if greater than or equal to 100000  |   Reject If Gte 100000 - Reject If Greater Than Or Equal To 100000        |    Available     | Optional     | Allowed |    NA |
| splitFundingAdvanceAmount| Split Funding Advance Amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| splitFundingParticipationCode| Split Funding Participation Code        |    ADV_REPAID   |   Adv Repaid        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    NOT_USED   |   Not Used        |    Available     | Optional     | Allowed |    NA |
|             |                 |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|        |       |  SPLIT_FUNDING   |   Split Funding        |    Available     | Optional     | Allowed |    NA   |
|        |       |  RAPID_ADVANCE   |   Rapid Advance        |    Available     | Optional     | Allowed |    NA   |
|        |       |  MERCHANT_CAPITAL_SRC   |   Merchant Capital Source  |  Available  | Optional     | Allowed |    NA   |
| splitFundingPayToMerchantId| Split funding pay to merchant number        |    STRING - Digits only - MERCHANT ID   |   String - Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| splitFundingPercent| Split Funding Percentage        |    STRING - Digits only - no decimal (max length - 3, min - 1)   |   String - Digits Only - No Decimal (Max Length: 3, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| splitFundingVendorCode| Split funding cash advance vendor code        |    MER_ADV_FUNDING   |   Mer Adv Funding        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    FDMCA   |   Fdmca        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    RAPID_ADV   |   Rapid Adv        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    FUND_TREE   |   Fund Tree        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    ADV_ME   |   Adv Me        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    ADV_ME_INC   |   Adv Me Inc        |    Available     | Optional     | Allowed |    NA |
|                              |                                         |    BIZ2_CREDIT   |   Biz2 Credit        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### cashAdvanceProgram

---

tags: [cashAdvanceProgram]

---

* Description: Cash Advance Gl Funding Program

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|       |                      |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|       |                      |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### channelLevelDiscoverPromotionalPvi

---

tags: [channelLevelDiscoverPromotionalPvi]

---

* Description: Discover Promotional Program Verification Identifier - Channel Level

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    FD_DISCOVER_PROMO   |   Fd Discover Promo        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CLIENT_DISCOVER_PRO   |   Client Discover Pro        |    Available     | Optional     | Allowed |    NA |
| status      | Program Status       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    FD_DISCOVER_PROMO   |   Fd Discover Promo        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CLIENT_DISCOVER_PRO   |   Client Discover Pro        |    Available     | Optional     | Allowed |    NA |
| status      | Program Status       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->


### chargebackConfig

---

tags: [chargebackConfig]

---

* Description: chargeback Configuration

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| chargebackAddressCode| Indicates where the chargeback advice is directed        |    DBA_ADDR_BILLTO_ADDR   |   Dba Addr Billto Addr        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BILLTO_ADDR_ONLY   |   Billto Addr Only        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DBA_ADDR_ONLY   |   Dba Addr Only        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BILLTO_ADDR_DBA_ADDR   |   Billto Addr Dba Addr        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| chargebackPrenoteDays| Chargeback Prenote Days        |    STRING having digits only   |   String Having Digits Only        |    Available     | Optional     | Allowed |    NA |
| chargebackPrenoteIndicator| Indicates if the merchants recieves pre-notification before receiving a charge back        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| chargebackReportDestinationCode| Chargeback Report Destination Code        |    CHAIN   |   Chain        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    OUTLET   |   Outlet        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CORP   |   Corp        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BUSINESS   |   Business        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    AGENT   |   Agent        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BANK   |   Bank        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CURRENT_LEVEL   |   Current Level        |    Available     | Optional     | Allowed |    NA |
| disputeDispositionCode| Indicates the disposition option for chargeback disputes        |    DOC_FOLLOW_DEBIT   |   Doc Follow Debit        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_WITH_DEBIT   |   Doc With Debit        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CORE_BUSSINESS_RULES   |   Core Bussiness Rules        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_DEBIT_REP   |   Doc Debit Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_FOLLOWS_DEBIT_WITH_REP   |   Doc Follows Debit With Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DEBIT_NO_DOC_WITH_REP   |   Debit No Doc With Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DEBIT_NO_DOC   |   Debit No Doc        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DROP_TO_QUEUE   |   Drop To Queue        |    Available     | Optional     | Allowed |    NA |
| email| email        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| excessiveChargebackIndicator| Excessive Chargeback Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| holdChargebackIndicator| Hold Chargebacks Indicator         |    PROCESS_MONTHLY   |   Process Monthly        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    PROCESS_DAILY   |   Process Daily        |    Available     | Optional     | Allowed |    NA |
| mediaFaxNumber| Media Fax Number        |    STRING having digits only   |   String Having Digits Only        |    Available     | Optional     | Allowed |    NA |
| mediaRetrievalCode| Code determining how the bank retrieval and chargeback retrieval advice or requests are processed        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| chargebackAddressCode| Indicates where the chargeback advice is directed        |    DBA_ADDR_BILLTO_ADDR   |   Dba Addr Billto Addr        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BILLTO_ADDR_ONLY   |   Billto Addr Only        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DBA_ADDR_ONLY   |   Dba Addr Only        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BILLTO_ADDR_DBA_ADDR   |   Billto Addr Dba Addr        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| chargebackPrenoteDays| Chargeback Prenote Days        |    STRING having digits only   |   String Having Digits Only        |    Available     | Optional     | Allowed |    NA |
| chargebackPrenoteIndicator| Indicates if the merchants recieves pre-notification before receiving a charge back        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| chargebackReportDestinationCode| Chargeback Report Destination Code        |    CHAIN   |   Chain        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    OUTLET   |   Outlet        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CORP   |   Corp        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BUSINESS   |   Business        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    AGENT   |   Agent        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    BANK   |   Bank        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CURRENT_LEVEL   |   Current Level        |    Available     | Optional     | Allowed |    NA |
| disputeDispositionCode| Indicates the disposition option for chargeback disputes        |    DOC_FOLLOW_DEBIT   |   Doc Follow Debit        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_WITH_DEBIT   |   Doc With Debit        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    CORE_BUSSINESS_RULES   |   Core Bussiness Rules        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_DEBIT_REP   |   Doc Debit Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DOC_FOLLOWS_DEBIT_WITH_REP   |   Doc Follows Debit With Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DEBIT_NO_DOC_WITH_REP   |   Debit No Doc With Rep        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DEBIT_NO_DOC   |   Debit No Doc        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    DROP_TO_QUEUE   |   Drop To Queue        |    Available     | Optional     | Allowed |    NA |
| email| email        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| excessiveChargebackIndicator| Excessive Chargeback Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| holdChargebackIndicator| Hold Chargebacks Indicator         |    PROCESS_MONTHLY   |   Process Monthly        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                      |                                                          |    PROCESS_DAILY   |   Process Daily        |    Available     | Optional     | Allowed |    NA |
| mediaFaxNumber| Media Fax Number        |    STRING having digits only   |   String Having Digits Only        |    Available     | Optional     | Allowed |    NA |
| mediaRetrievalCode| Code determining how the bank retrieval and chargeback retrieval advice or requests are processed        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### commercialCardInterchangeService

---

tags: [commercialCardInterchangeService]

---

* Description: Commercial Card Interchange Service

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| ccisMerchantIncome| Commercial Card Interchange Service Merchant Income        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| ccisMerchantIncome| Commercial Card Interchange Service Merchant Income        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### compassOnNorth

---

tags: [compassOnNorth]

---

* Description: Compass Podb Functionality On North

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| forcedDeposit| Eligible For Force Deposits        |    FORCE_DEPOSITS   |   Force Deposits        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    NO_FORCE_DEPOSITS   |   No Force Deposits        |    Available     | Optional     | Allowed |    NA |
| partialReversals| Eligible For Partial Reversals        |    NO_PARTIAL_REVERSALS   |   No Partial Reversals        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    PARTIAL_REVERSALS   |   Partial Reversals        |    Available     | Optional     | Allowed |    NA |
| reauthorizations     |  Eligible For Re-Authorizations  |    NO_REAUTHORIZATIONS   |   No Reauthorizations        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    EXTENDED_AUTH_NO_REAUT   |   Extended Auth No Reaut        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    REAUTHORIZATIONS   |   Reauthorizations        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    ACTIVE_COMPASS_ON_NORTH   |   Active Compass On North        |    Available     | Optional     | Allowed |    NA |
|       |                       |    CANCEL_COMPASS_ON_NORTH   |   Cancel Compass On North        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| forcedDeposit| Eligible For Force Deposits        |    FORCE_DEPOSITS   |   Force Deposits        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    NO_FORCE_DEPOSITS   |   No Force Deposits        |    Available     | Optional     | Allowed |    NA |
| partialReversals| Eligible For Partial Reversals        |    NO_PARTIAL_REVERSALS   |   No Partial Reversals        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    PARTIAL_REVERSALS   |   Partial Reversals        |    Available     | Optional     | Allowed |    NA |
| reauthorizations     |  Eligible For Re-Authorizations  |    NO_REAUTHORIZATIONS   |   No Reauthorizations        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    EXTENDED_AUTH_NO_REAUT   |   Extended Auth No Reaut        |    Available     | Optional     | Allowed |    NA |
|              |                                    |    REAUTHORIZATIONS   |   Reauthorizations        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    ACTIVE_COMPASS_ON_NORTH   |   Active Compass On North        |    Available     | Optional     | Allowed |    NA |
|       |                       |    CANCEL_COMPASS_ON_NORTH   |   Cancel Compass On North        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### compassSpecialFeatures

---

tags: [compassSpecialFeatures]

---

* Description: Compass Front End Generated Refund Auths

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| amexOnlineRefund| Amex Online Refund        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| compassFrontendGenreFauth| Compass frontend Gen Ref Auth        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| visaToleranceCheckInd| Visa Tolerance Check Ind        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| amexOnlineRefund| Amex Online Refund        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| compassFrontendGenreFauth| Compass frontend Gen Ref Auth        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| visaToleranceCheckInd| Visa Tolerance Check Ind        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                 |                           |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### conditionalApprovalProgram

---

tags: [conditionalApprovalProgram]

---

* Description: Conditional Approval Program

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    MISSING_CREDIT_DATA   |   Missing Credit Data        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CREDIT_RISK_REVIEW   |   Credit Risk Review        |    Available     | Optional     | Allowed |    NA |
|             |                      |    APP_INCONSISTENCIES   |   App Inconsistencies        |    Available     | Optional     | Allowed |    NA |
|             |                      |    REMOVED_FRM_COND_APP   |   Removed Frm Cond App        |    Available     | Optional     | Allowed |    NA |
|             |                      |    MISS_CRED_DATA_MPA   |   Miss Cred Data Mpa        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CRED_DATA_RISK_REV   |   Cred Data Risk Rev        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CRED_RISK_REV_MPA   |   Cred Risk Rev Mpa        |    Available     | Optional     | Allowed |    NA |
|             |                      |    INACTIVE   |   Inactive        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    MISSING_CREDIT_DATA   |   Missing Credit Data        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CREDIT_RISK_REVIEW   |   Credit Risk Review        |    Available     | Optional     | Allowed |    NA |
|             |                      |    APP_INCONSISTENCIES   |   App Inconsistencies        |    Available     | Optional     | Allowed |    NA |
|             |                      |    REMOVED_FRM_COND_APP   |   Removed Frm Cond App        |    Available     | Optional     | Allowed |    NA |
|             |                      |    MISS_CRED_DATA_MPA   |   Miss Cred Data Mpa        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CRED_DATA_RISK_REV   |   Cred Data Risk Rev        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CRED_RISK_REV_MPA   |   Cred Risk Rev Mpa        |    Available     | Optional     | Allowed |    NA |
|             |                      |    INACTIVE   |   Inactive        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### contract

---

tags: [contract]

---

* Description: Contract

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| clientRegion | Client Region Index for Omnipay |    BIN_OVERRIDE_123018   |   Bin Override 123018        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    CANADA   |   Canada        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    UNITEDKINGDOM   |   Unitedkingdom        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123008   |   Bin Override 123008        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    SINGAPORE   |   Singapore        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    AUSTRALIA   |   Australia        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123013   |   Bin Override 123013        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123019   |   Bin Override 123019        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123009   |   Bin Override 123009        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123007   |   Bin Override 123007        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123014   |   Bin Override 123014        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    HONG_KONG   |   Hong Kong        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123016   |   Bin Override 123016        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123005   |   Bin Override 123005        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123015   |   Bin Override 123015        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BY_TRANSACTION   |   By Transaction        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123006   |   Bin Override 123006        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123012   |   Bin Override 123012        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BY_TRAN_REJECTS   |   By Tran Rejects        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BY_COUNTRY   |   By Country        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123011   |   Bin Override 123011        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123010   |   Bin Override 123010        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123017   |   Bin Override 123017        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123004   |   Bin Override 123004        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123002   |   Bin Override 123002        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123020   |   Bin Override 123020        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123001   |   Bin Override 123001        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    EUROPEAN_UNION   |   European Union        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    BIN_OVERRIDE_123003   |   Bin Override 123003        |    Available     | Optional     | Allowed |    NA |
|                  |                                        |    JAPAN   |   Japan        |    Available     | Optional     | Allowed |    NA |
| clientTariff | This the merchant tariff assigned to the merchant  |    PF_TARIFF_1   |   When PF wants to bill the submerchant a Authorization, Chargeback and Retrevial Fees  |    Available     | Optional     | Allowed |    NA  |
| - | - |   PF_TARIFF_2    |     When PF wants to bill the submerchant Authorization and Wire Fees      |    Available     | Optional     | Allowed |    NA   |
| - | - |  STANDARD_4    |    Non PFAC Account Fees Tariff       |    Available     | Optional     | Allowed |    NA    |
| - | - |    PF_TARIFF_3   |    When PF wants to bill the submerchant for all Account Fees       |    Available     | Optional     | Allowed |    NA    |
| - | - |    PF_TARIFF_4   |    When no override at merchant level is possible       |    Available     | Optional     | Allowed |    NA    |
| postingMethod| The posting method assigned to the merchant        |    GRS_999_USD   |   Grs 999 Usd        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_ZAR_999   |   Gma Zar 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    NA_HK_999   |   Na Hk 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_HUF   |   All To Huf        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_GBP   |   Grs 999 Gbp        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REG5_EU_999   |   Reg5 Eu 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_NOK_999   |   Gma Nok 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_USD_MSC   |   Pf Usd Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REG1_SG_999   |   Reg1 Sg 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_CHF_MSC   |   Pf Chf Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_NZD_MSC   |   Pf Nzd Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_EUR   |   Grs 999 Eur        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_AUD   |   Grs 999 Aud        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_SEK_999   |   Gma Sek 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_SEK   |   Grs 999 Sek        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_SGD_MSC   |   Pf Sgd Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_GBP_MSC   |   Pf Gbp Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_SEK_MSC   |   Pf Sek Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_JPY   |   Grs 999 Jpy        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_CAD   |   Grs 999 Cad        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_2   |   Regular 2        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_EUR_MSC   |   Pf Eur Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_NOK   |   Grs 999 Nok        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    NA_EU_999   |   Na Eu 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_6   |   Regular 6        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_DKK   |   Grs 999 Dkk        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_HKD_MSC   |   Pf Hkd Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_CHF   |   Grs 999 Chf        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_CHF_999   |   Gma Chf 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_4   |   Regular 4        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_CAD_MSC   |   Pf Cad Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_NOK_MSC   |   Pf Nok Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    NA   |   Na        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_DKK_999   |   Gma Dkk 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_1EUR   |   All To 1Eur        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_JPY_MSC   |   Pf Jpy Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_NZD   |   Grs 999 Nzd        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_CZK   |   All To Czk        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_1   |   Regular 1        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    TARIFF_15   |   Tariff 15        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_SGD   |   All To Sgd        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REG6_SG_999   |   Reg6 Sg 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REG3_EU_999   |   Reg3 Eu 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_ZAR_MSC   |   Pf Zar Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_DKK_MSC   |   Pf Dkk Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_HKD   |   Grs 999 Hkd        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_ZAR   |   Grs 999 Zar        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    TR15_JP_999   |   Tr15 Jp 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GMA_NZD_999   |   Gma Nzd 999        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    GRS_999_SGD   |   Grs 999 Sgd        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_3   |   Regular 3        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    PF_AUD_MSC   |   Pf Aud Msc        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_GBP   |   All To Gbp        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    REGULAR_8   |   Regular 8        |    Available     | Optional     | Allowed |    NA |
|              |                                                    |    ALL_TO_PLN   |   All To Pln        |    Available     | Optional     | Allowed |    NA |
| protectAgainstFXChange| Indicate if the Merchant is protected against currency fluctuations on the event the transaction is disputed        |    FALSE   |   False        |    Available     | Optional     | Allowed |    NA |
| salesLead| Secondary Tax ID        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| serviceContractIndex| Service contract defines the processing rules for a merchant        |    SERVICE_CONTRACT_1   |   Service Contract 1        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| clientRegion | The selected client region will determine how the transactions are settled to the scheme. | BY_TRANSACTION | Client region by transaction | Available | Optional | Allowed | NA |
|    |    | BY_TRANSACTION | Client region by transaction | Available | Optional | Allowed | NA |
|    |    |    CANADA   |   Canada        |    Available     | Optional     | Allowed |    NA |
|    |    |    UNITEDKINGDOM   |   Unitedkingdom        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123008   |   Bin Override 123008        |    Available     | Optional     | Allowed |    NA |
|    |    |    SINGAPORE   |   Singapore        |    Available     | Optional     | Allowed |    NA |
|    |    |    AUSTRALIA   |   Australia        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123013   |   Bin Override 123013        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123019   |   Bin Override 123019        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123009   |   Bin Override 123009        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123007   |   Bin Override 123007        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123014   |   Bin Override 123014        |    Available     | Optional     | Allowed |    NA |
|    |    |    HONG_KONG   |   Hong Kong  |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123016   |   Bin Override 123016        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123005   |   Bin Override 123005        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123015   |   Bin Override 123015        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123006   |   Bin Override 123006        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123012   |   Bin Override 123012        |    Available     | Optional     | Allowed |    NA |
|    |    |    BY_TRAN_REJECTS   |   By Tran Rejects        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123011   |   Bin Override 123011        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123010   |   Bin Override 123010        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123017   |   Bin Override 123017        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123004   |   Bin Override 123004        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123002   |   Bin Override 123002        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123020   |   Bin Override 123020        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123001   |   Bin Override 123001        |    Available     | Optional     | Allowed |    NA |
|    |    |    EUROPEAN_UNION   |   European Union        |    Available     | Optional     | Allowed |    NA |
|    |    |    BIN_OVERRIDE_123003   |   Bin Override 123003        |    Available     | Optional     | Allowed |    NA |
|    |    |    JAPAN   |   Japan        |    Available     | Optional     | Allowed |    NA |
| clientTariff | This the merchant tariff assigned to the merchant  |    PF_TARIFF_1   |   When PF wants to bill the submerchant a Authorization, Chargeback and Retrevial Fees  |    Available     | Optional     | Allowed |    NA  |
| - | - |   PF_TARIFF_2    |     When PF wants to bill the submerchant Authorization and Wire Fees      |    Available     | Optional     | Allowed |    NA   |
| - | - |  STANDARD_4    |    Non PFAC Account Fees Tariff       |    Available     | Optional     | Allowed |    NA    |
| - | - |    PF_TARIFF_3   |    When PF wants to bill the submerchant for all Account Fees       |    Available     | Optional     | Allowed |    NA    |
| - | - |    PF_TARIFF_4   |    When no override at merchant level is possible       |    Available     | Optional     | Allowed |    NA    |
| postingMethod | The posting method assigned to the merchant        |    GRS_999_USD   |   Grs 999 Usd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_ZAR_999   |   Gma Zar 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NA_HK_999   |   Na Hk 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_HUF   |   All To Huf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_GBP   |   Grs 999 Gbp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REG5_EU_999   |   Reg5 Eu 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_NOK_999   |   Gma Nok 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_USD_MSC   |   Pf Usd Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REG1_SG_999   |   Reg1 Sg 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_CHF_MSC   |   Pf Chf Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_NZD_MSC   |   Pf Nzd Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_EUR   |   Grs 999 Eur        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_AUD   |   Grs 999 Aud        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_SEK_999   |   Gma Sek 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_SEK   |   Grs 999 Sek        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_SGD_MSC   |   Pf Sgd Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_GBP_MSC   |   Pf Gbp Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_SEK_MSC   |   Pf Sek Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_JPY   |   Grs 999 Jpy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_CAD   |   Grs 999 Cad        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_2   |   Regular 2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_EUR_MSC   |   Pf Eur Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_NOK   |   Grs 999 Nok        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NA_EU_999   |   Na Eu 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_6   |   Regular 6        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_DKK   |   Grs 999 Dkk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_HKD_MSC   |   Pf Hkd Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_CHF   |   Grs 999 Chf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_CHF_999   |   Gma Chf 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_4   |   Regular 4        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_CAD_MSC   |   Pf Cad Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_NOK_MSC   |   Pf Nok Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NA   |   Na        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_DKK_999   |   Gma Dkk 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_1EUR   |   All To 1Eur        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_JPY_MSC   |   Pf Jpy Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_NZD   |   Grs 999 Nzd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_CZK   |   All To Czk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_1   |   Regular 1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TARIFF_15   |   Tariff 15        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_SGD   |   All To Sgd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REG6_SG_999   |   Reg6 Sg 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REG3_EU_999   |   Reg3 Eu 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_ZAR_MSC   |   Pf Zar Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_DKK_MSC   |   Pf Dkk Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_HKD   |   Grs 999 Hkd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_ZAR   |   Grs 999 Zar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TR15_JP_999   |   Tr15 Jp 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMA_NZD_999   |   Gma Nzd 999        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRS_999_SGD   |   Grs 999 Sgd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_3   |   Regular 3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PF_AUD_MSC   |   Pf Aud Msc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_GBP   |   All To Gbp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REGULAR_8   |   Regular 8        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TO_PLN   |   All To Pln        |    Available     | Optional     | Allowed |    NA |
| protectAgainstFXChange | Indicate if the Merchant is protected against currency fluctuations on the event the transaction is disputed  |  FALSE   |   False  |  Available  | Optional | Allowed |  NA |
| protectAgainstFXChange | Indicate if the Merchant is protected against currency fluctuations on the event the transaction is disputed  |  TRUE   |   True  |  Available  | Optional  | Allowed |  NA |
| salesLead | Secondary Tax ID  |  STRING   |   String  |  Available   | Optional | Allowed |  NA |
| serviceContractIndex | Service contract defines the processing rules for a merchant |  SERVICE_CONTRACT_1 |  Service Contract 1  |  Available  | Optional | Allowed |  NA |

<!-- type: tab-end -->

### contractExpirationDate

---

tags: [contractExpirationDate]

---

* Description: Contract Expiration Date Notifications/Flag

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractExpirationDate| Contract Expiration Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| gcid| Global Client Id        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractExpirationDate| Contract Expiration Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| gcid| Global Client Id        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### conversionInformation

---

tags: [conversionInformation]

---

* Description: Conversion  Account Source System Data

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractDate| Contract Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| salesmanCode| Salesman Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|       |                       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractDate| Contract Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| salesmanCode| Salesman Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|       |                       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### creditSettings

---

tags: [creditSettings]

---

* Description: Credit Settings

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| creditBinInclusionIndicator| Credit BIN Inclusion Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| creditLimitAmount| Credit Limit Amount        |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
| cumulativeCreditLimitAmount| Cumulative Credit Limit Amount        |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
| cumulativeSalesLimitAmount| Cumulative Sales Limit Amount        |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_90000   |   Reject If Gte 90000        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| creditBinInclusionIndicator| Credit BIN Inclusion Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| creditLimitAmount| Credit Limit Amount        |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                  |                            |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
| cumulativeCreditLimitAmount| Cumulative Credit Limit Amount        |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                            |                                       |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
| cumulativeSalesLimitAmount| Cumulative Sales Limit Amount        |    REJECT_IF_GTE_1000   |   Reject If Gte 1000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_120000   |   Reject If Gte 120000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_400000   |   Reject If Gte 400000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_200000   |   Reject If Gte 200000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_300000   |   Reject If Gte 300000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_100000   |   Reject If Gte 100000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_800000   |   Reject If Gte 800000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_50000   |   Reject If Gte 50000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    UNLIMITED   |   Unlimited        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_20000   |   Reject If Gte 20000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_70000   |   Reject If Gte 70000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_110000   |   Reject If Gte 110000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_30000   |   Reject If Gte 30000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_500   |   Reject If Gte 500        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_80000   |   Reject If Gte 80000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_60000   |   Reject If Gte 60000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_40000   |   Reject If Gte 40000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_1   |   Reject If Gte 1        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_25000   |   Reject If Gte 25000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_100   |   Reject If Gte 100        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_3000   |   Reject If Gte 3000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_2000   |   Reject If Gte 2000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_7500   |   Reject If Gte 7500        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_5000   |   Reject If Gte 5000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_2   |   Reject If Gte 2        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_500000   |   Reject If Gte 500000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_50   |   Reject If Gte 50        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_600000   |   Reject If Gte 600000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_250   |   Reject If Gte 250        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_10000   |   Reject If Gte 10000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_700000   |   Reject If Gte 700000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_130000   |   Reject If Gte 130000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_15000   |   Reject If Gte 15000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_140000   |   Reject If Gte 140000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_150000   |   Reject If Gte 150000        |    Available     | Optional     | Allowed |    NA |
|                            |                                     |    REJECT_IF_GTE_90000   |   Reject If Gte 90000        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### crossBorderAcquiring

---

tags: [crossBorderAcquiring]

---

* Description: Cross Border Acquiring

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| viSingleMerchantId| Visa Single Merchant Id        |    Digits only - MERCHANT ID   |   Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| viSmiActivationInd| Visa Smi Activation Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                   |                                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| viSingleMerchantId| Visa Single Merchant Id        |    Digits only - MERCHANT ID   |   Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| viSmiActivationInd| Visa Smi Activation Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                   |                                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### dccForIab

---

tags: [dccForIab]

---

* Description: Dynamic Currency Conversion For International Agent Bank

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    DCC   |   Dcc        |    Available     | Optional     | Allowed |    NA |
|             |                      |    DYNAMIC_PRICING   |   Dynamic Pricing        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    DCC   |   Dcc        |    Available     | Optional     | Allowed |    NA |
|             |                      |    DYNAMIC_PRICING   |   Dynamic Pricing        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### depositRequirement

---

tags: [depositRequirement]

---

* Description: Deposit Requirement

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| programGuideVersion| Program Guide Version        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| programGuideVersion| Program Guide Version        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### disregardedEntity

---

tags: [disregardedEntity]

---

* Description: Disregarded Entity

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|       |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|       |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### earlyTerminationFee

---

tags: [earlyTerminationFee]

---

* Description: Early Termination Fee

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| earlyTermDate| Early termination date applicable to charging an associated fee        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| earlyTermFeeAmount| Early termination fee amount        |    STRING - Digits only - no decimal (max length - 4, min - 1)   |   String - Digits Only - No Decimal (Max Length: 4, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| earlyTermFeeIndicator| Early termination fee indicator        |    NO_TERMINATION_FEE   |   No Termination Fee        |    Available     | Optional     | Allowed |    NA |
|                      |                                        |    CARS_DFAULT_FEE   |   Cars Dfault Fee        |    Available     | Optional     | Allowed |    NA |
|                      |                                        |    USER_DEFINED_FEE   |   User Defined Fee        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| earlyTermDate| Early termination date applicable to charging an associated fee        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| earlyTermFeeAmount| Early termination fee amount        |    STRING - Digits only - no decimal (max length - 4, min - 1)   |   String - Digits Only - No Decimal (Max Length: 4, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| earlyTermFeeIndicator| Early termination fee indicator        |    NO_TERMINATION_FEE   |   No Termination Fee        |    Available     | Optional     | Allowed |    NA |
|                      |                                        |    CARS_DFAULT_FEE   |   Cars Dfault Fee        |    Available     | Optional     | Allowed |    NA |
|                      |                                        |    USER_DEFINED_FEE   |   User Defined Fee        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### electronicTicketCapture

---

tags: [electronicTicketCapture]

---

* Description: Electronic Ticket Capture

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| etcBypassEditsIndicator| TellS the edit programs if the Merchant wishes to let all his ETC transactions process        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                        |                                                                                               |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| etcCutoffTimeCode| Code indicating what time electronic ticket capture processing is terminated for the day        |    6PM_CST   |   6Pm Cst        |    Available     | Optional     | Allowed |    NA |
|                  |       |    10PM_EST   |   10Pm Est        |    Available     | Optional     | Allowed |    NA |
|                  |       |    12AM_CST   |   12Am Cst        |    Available     | Optional     | Allowed |    NA |
|                  |           |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                  |       |    FDMS_DEFAULT   |   FDMS Default  |    Available     |    Optional  | Allowed |    NA   |
| etcOptionCode| Code identifying the type of electronic ticket capture processing used        |    None   |   None        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_VOICE_BKP   |   Etc Voice Bkp        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    NON_ETC   |   Non Etc        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_VOICE_BK_W_CLS_BAT   |   Etc Voice Bk W Cls Bat        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_ELECTRONIC_ONLY   |   Etc Electronic Only        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    HOST_OUT_OF_BALANCE   |   Host Out Of Balance        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_PLUS   |   Etc Plus        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_PLUS_DEBIT   |   Etc Plus Debit        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    HOST_MUST_BALANCE   |   Host Must Balance        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_ELC_W_CLS_BAT   |   Etc Elc W Cls Bat        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| etcBypassEditsIndicator| TellS the edit programs if the Merchant wishes to let all his ETC transactions process        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                        |                                                                                               |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| etcCutoffTimeCode| Code indicating what time electronic ticket capture processing is terminated for the day        |    6PM_CST   |   6Pm Cst        |    Available     | Optional     | Allowed |    NA |
|                  |                                                                                                 |    10PM_EST   |   10Pm Est        |    Available     | Optional     | Allowed |    NA |
|                  |                                                                                                 |    12AM_CST   |   12Am Cst        |    Available     | Optional     | Allowed |    NA |
|                  |                                                                                                 |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                  |       |    FDMS_DEFAULT   |   FDMS Default  |    Available     |    Optional  | Allowed |    NA   |
| etcOptionCode| Code identifying the type of electronic ticket capture processing used        |    None   |   None        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_VOICE_BKP   |   Etc Voice Bkp        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    NON_ETC   |   Non Etc        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_VOICE_BK_W_CLS_BAT   |   Etc Voice Bk W Cls Bat        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_ELECTRONIC_ONLY   |   Etc Electronic Only        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    HOST_OUT_OF_BALANCE   |   Host Out Of Balance        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_PLUS   |   Etc Plus        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_PLUS_DEBIT   |   Etc Plus Debit        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    HOST_MUST_BALANCE   |   Host Must Balance        |    Available     | Optional     | Allowed |    NA |
|              |                                                                               |    ETC_ELC_W_CLS_BAT   |   Etc Elc W Cls Bat        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### enhanceDebitCompletionFlow

---

tags: [enhanceDebitCompletionFlow]

---

* Description: Enhance Debit Completion Flow For Pts Direct Send Merchants

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    ENHANCED_DB_FLOW_OFF   |   Enhanced Db Flow Off        |    Available     | Optional     | Allowed |    NA |
|       |                       |    ENHANCED_DB_FLOW_ON   |   Enhanced Db Flow On        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    ENHANCED_DB_FLOW_OFF   |   Enhanced Db Flow Off        |    Available     | Optional     | Allowed |    NA |
|       |                       |    ENHANCED_DB_FLOW_ON   |   Enhanced Db Flow On        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### fdggMigration

---

tags: [fdggMigration]

---

* Description: First Data Global Gateway Migration

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    NOT_MIGRATED   |   Not Migrated        |    Available     | Optional     | Allowed |    NA |
|       |                       |    MIGRATED   |   Migrated        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    NOT_MIGRATED   |   Not Migrated        |    Available     | Optional     | Allowed |    NA |
|       |                       |    MIGRATED   |   Migrated        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### financialBuAssignmentValues

---

tags: [financialBuAssignmentValues]

---

* Description: Financial Bu Assignment Values

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| companyCode| Company Code        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| financeAlliance| Finance Alliance        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| financeEntity| Finance Entity        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| financeParent| Finance Parent        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| financePortfolio| Finance Portfolio        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| fmgGroupCode | Fmg Group Code        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| fmgMarkerBank | Fmg Marker Bank        |    STRING - Alphanumeric   |   String - Alphanumeric        |    Available     | Optional     | Allowed |    NA |
| futureUse1    | Future Use 1           |                            |                                |    Available     | Optional     | Allowed |    NA |
| futureUse2 | Future Use 2        |       |           |    Available     | Optional     | Allowed |    NA |
| globalClientDescription | Global Client Description        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| globalClientId| Global Client Id        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| profitCenterDescription| Profit Center Description        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| profitCenterId| Profit Center Id        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|       |                       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| companyCode| Company Code        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| financeAlliance| Finance Alliance        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| financeEntity| Finance Entity        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| financeParent| Finance Parent        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| financePortfolio| Finance Portfolio        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| fmgGroupCode| Fmg Group Code        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| fmgMarkerBank| Fmg Marker Bank        |    STRING - Alphanumeric   |   String - Alphanumeric        |    Available     | Optional     | Allowed |    NA |
| futureUse1| Future Use 1        |       |           |    Available     | Optional     | Allowed |    NA |
| futureUse2| Future Use 2        |       |           |    Available     | Optional     | Allowed |    NA |
| globalClientDescription| Global Client Description        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| globalClientId| Global Client Id        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| profitCenterDescription| Profit Center Description        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| profitCenterId| Profit Center Id        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|       |                       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### firstHawaiianBank

---

tags: [firstHawaiianBank]

---

* Description: First Hawaiian Bank

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| fhbNaicsNumber| Fhb Naics Number N        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| fhbNaicsNumber| Fhb Naics Number N        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### foreignLanguageSupport

---

tags: [foreignLanguageSupport]

---

* Description: Foreign Language Support

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| foreignLanguageSupport| Foreign Language Support        |    JAPANESE   |   Japanese        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    SOMALI   |   Somali        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    HINDI   |   Hindi        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    FRENCH   |   French        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    FARSI   |   Farsi        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    BURMESE   |   Burmese        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    CAMBODIAN   |   Cambodian        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    CANTONESE   |   Cantonese        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    HAITIANCREOLE   |   Haitiancreole        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    ARABIC   |   Arabic        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    KAREN   |   Karen        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    KOREAN   |   Korean        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| foreignLanguageSupport| Foreign Language Support        |    JAPANESE   |   Japanese        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    SOMALI   |   Somali        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    HINDI   |   Hindi        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    FRENCH   |   French        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    FARSI   |   Farsi        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    BURMESE   |   Burmese        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    CAMBODIAN   |   Cambodian        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    CANTONESE   |   Cantonese        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    HAITIANCREOLE   |   Haitiancreole        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    ARABIC   |   Arabic        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    KAREN   |   Karen        |    Available     | Optional     | Allowed |    NA |
|                       |                                 |    KOREAN   |   Korean        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### franchise

---

tags: [franchise]

---

* Description: Franchise

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type  |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|             |                |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type  |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|             |                |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### fraudAndAccountTakeoverRisk

---

tags: [fraudAndAccountTakeoverRisk]

---

* Description: Fraud And Account Takeover Risk

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    CAUTION_PREVIOUS_FRAUD   |   Caution Previous Fraud        |    Available     | Optional     | Allowed |    NA |
|             |                |    URGENT_MERCH_AT_RISK   |   Urgent Merch At Risk        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    CAUTION_PREVIOUS_FRAUD   |   Caution Previous Fraud        |    Available     | Optional     | Allowed |    NA |
|             |                |    URGENT_MERCH_AT_RISK   |   Urgent Merch At Risk        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### freeProcessing

---

tags: [freeProcessing]

---

* Description: Free Processing

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    COMPLETED   |   Completed        |    Available     | Optional     | Allowed |    NA |
|       |                       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|       |                       |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    COMPLETED   |   Completed        |    Available     | Optional     | Allowed |    NA |
|       |                       |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|       |                       |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### fundingConfig

---

tags: [fundingConfig]

---

* Description: Free Processing

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| achSuspenseHoldIndicator| ACH suspense hold indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|       |                       |    HOLD   |   Hold        |    Available     | Optional     | Allowed |    NA |
| achSuspenseReleaseIndicator| ACH suspense release indicator        |    DIVERT_TO_CARS   |   Divert To Cars        |    Available     | Optional     | Allowed |    NA |
|       |                       |    HOLD_30_DAYS   |   Hold 30 Days        |    Available     | Optional     | Allowed |    NA |
|       |                       |    RELEASE_FUNDING   |   Release Funding        |    Available     | Optional     | Allowed |    NA |
| agentBankSplitIndicator| Indicates if Bank Client is considered an agent relationship to FDCS        |    AGENT   |   Agent        |    Available     | Optional     | Allowed |    NA |
|       |                       |    BANK   |   Bank        |    Available     | Optional     | Allowed |    NA |
| bankwireBbkText| Bankwire beneficiary BBK Text        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| bankwireBnfText| Bankwire beneficiary BNF Text        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| bankwireObiText| Bankwire beneficiary OBI Text        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| chargebacksBankSequenceNumber| Funding Bank Sequence |    REMIT   |   Remit        |    Available     | Optional     | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| chargebacksFundingCategoryCode| Funding Category Code        |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
| chargebacksFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| chargebacksFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
| convenienceFeeCode| Convenience fee code to indicate the ABA or DDA to be charged        |    ABA_DDA_3   |   Aba Dda 3        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    ABA_DDA_5   |   Aba Dda 5        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    None   |   None        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    ABA_DDA_2   |   Aba Dda 2        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    ABA_DDA_1   |   Aba Dda 1        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    ABA_DDA_4   |   Aba Dda 4        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsBankSequenceNumber| Funding Bank Sequence |    REMIT   |   Remit  |    Available     | Optional     | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingDivertCode| Funding Divert Code        |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
| depositsBankSequenceNumber| Funding Bank Sequence |  REMIT | Remit |  Available  | Optional | Allowed |  NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| depositsFundingCategoryCode| Funding Category Code        |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
| depositsFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
|       |       |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|       |       |    ICE   |   Ice        |    Available     | Optional     | Allowed |    NA |
| depositsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                          |                                                                         |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                          |                                                                         |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                          |                                                                         |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                          |                                                                         |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                          |                                                                         |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
| discountsBankSequenceNumber| Funding Bank Sequence  |  REMIT   |   Remit  | Available | Optional | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| discountsFundingCategoryCode| Funding Category Code        |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
| discountsFundingDivertCode| Funding Divert Code        |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                           |                            |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
| discountsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                           |                                                                         |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                           |                                                                         |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                           |                                                                         |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                           |                                                                         |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                           |                                                                         |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
| feesBankSequenceNumber| Funding Bank Sequence |    REMIT   |   Remit  |    Available   |  Optional | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| feesFundingCategoryCode| Funding Category Code        |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
| feesFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
|                      |                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| feesFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                      |                                                                         |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                      |                                                                         |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                      |                                                                         |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                      |                                                                         |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                      |                                                                         |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
| financialAdjustmentsBankSequenceNumber| Funding Bank Sequence  |    REMIT   |   Remit  |  Available |  Optional  | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| financialAdjustmentsFundingCategoryCode| Funding Category Code        |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
| financialAdjustmentsFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
| financialAdjustmentsFundingCategoryCode| Funding Category Code        |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| financialAdjustmentsFundingRollupCode   |Indicates how the transactions will be combined on DDA statement |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
| funding30DayOverrideDate| Funding 30 day daily override date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| funding30DayOverrideIndicator| Funding 30 day override indicator        |    NOT_OVERRIDE   |   Not Override        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    OVERRIDE   |   Override        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    NOT_USED   |   Not Used        |    Available     | Optional     | Allowed |    NA |
| fundingAchDelayDays| Retention period for deposits and daily discount before releasing them for ACH processing        |    STRING - Digits only - no decimal (max length - 2, min - 1)   |   String - Digits Only - No Decimal (Max Length: 2, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingBankCode| Funding Bank Code        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| fundingCurrencyCode| Funding Currency Code        |    QATARI_RIAL   |   Qatari Rial        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ISRAELI_NEW_SHEKEL   |   Israeli New Shekel        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CFA_FRANC_BEAC   |   Cfa Franc Beac        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    UNITED_STATES_DOLLAR   |   United States Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CONGOLESE_FRANC   |   Congolese Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MALAYSIAN_RINGGIT   |   Malaysian Ringgit        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MAURITIAN_RUPEE   |   Mauritian Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MOROCCAN_DIRHAM   |   Moroccan Dirham        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ARUBAN_FLORIN   |   Aruban Florin        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PERUVIAN_SOL   |   Peruvian Sol        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ST_HELENA_POUND   |   St Helena Pound        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BURUNDI_FRANC   |   Burundi Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BRUNEI_DOLLAR   |   Brunei Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    COMOROS_FRANC   |   Comoros Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    LAO_KIP   |   Lao Kip        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    JAMAICAN_DOLLAR   |   Jamaican Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    JAPANESE_YEN   |   Japanese Yen        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SOUTH_KOREAN_WON   |   South Korean Won        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    KUWAITI_DINAR   |   Kuwaiti Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NICARAGUAN_CORDOBA   |   Nicaraguan Cordoba        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PARAGUAYAN_GUARANI   |   Paraguayan Guarani        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    KYRGYZSTAN_SOM   |   Kyrgyzstan Som        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GUINEAN_FRANC   |   Guinean Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    POUND_STERLING   |   Pound Sterling        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SINGAPORE_DOLLAR   |   Singapore Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DJIBOUTIAN_FRANC   |   Djiboutian Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CROTIAN_KUNA   |   Crotian Kuna        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    YEMENI_RIAL   |   Yemeni Rial        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MALAWIAN_KWACHA   |   Malawian Kwacha        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ZIMBABWE_DOLLAR   |   Zimbabwe Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NORWEGIAN_KRONE   |   Norwegian Krone        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ALBANIAN_LEK   |   Albanian Lek        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BARBADOS_DOLLAR   |   Barbados Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    UGANDAN_SHILLING   |   Ugandan Shilling        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CHINESE_YUAN   |   Chinese Yuan        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DOMINCAN_PESO   |   Domincan Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ETHIOPIAN_BIRR   |   Ethiopian Birr        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    AZERBAIJANI_MANAT   |   Azerbaijani Manat        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TANZANIAN_SHILLING   |   Tanzanian Shilling        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SOUTH_SUDANESE_POUNT   |   South Sudanese Pount        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SOMALI_SHILLING   |   Somali Shilling        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GUANESE_DOLLAR   |   Guanese Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    HONG_KONG_DOLLAR   |   Hong Kong Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SIERRA_LEONEAN_LEONE   |   Sierra Leonean Leone        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    INDOSEIAN_RUPIAH   |   Indoseian Rupiah        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MOLDOVAN_LEU   |   Moldovan Leu        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BANGLADESHI_TAKA   |   Bangladeshi Taka        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BOLIVIANO   |   Boliviano        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ARMENIAN_DRAM   |   Armenian Dram        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CFP_FRANC   |   Cfp Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FIJI_DOLLAR   |   Fiji Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    HUNGARIAN_FORINT   |   Hungarian Forint        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    INDIAN_RUPEE   |   Indian Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    LEBANEESE_POUNT   |   Lebaneese Pount        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    LESHTHO_LOTI   |   Leshtho Loti        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PAPUA_NEW_GUINEAN_KINA   |   Papua New Guinean Kina        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MEXICAN_PESO   |   Mexican Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GUINEA_BISSAU_PESO   |   Guinea Bissau Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NEW_TAIWAN_DOLLAR   |   New Taiwan Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TURKISH_LIRA   |   Turkish Lira        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ANGOLAN_KWANZA   |   Angolan Kwanza        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EURO   |   Euro        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CAMBODIAN_FRANC   |   Cambodian Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    LIBERIAN_DOLLAR   |   Liberian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    UKRANIAN_HRYVNIA   |   Ukranian Hryvnia        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CAYMAN_ISLANDS_DOLLAR   |   Cayman Islands Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MAURITANIAN_OUGUIYA   |   Mauritanian Ouguiya        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    KENYAN_SHILLING   |   Kenyan Shilling        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SWEDISH_KRONA   |   Swedish Krona        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BULGARIAN_LEV   |   Bulgarian Lev        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GEORGIAN_LARI   |   Georgian Lari        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    THAI_BAHT   |   Thai Baht        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    VANUATU_VATU   |   Vanuatu Vatu        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SERBIAN_DINAR   |   Serbian Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BERMUDIAN_DOLLAR   |   Bermudian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    URUGUAYAN_PESO   |   Uruguayan Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DANISH_KRONE   |   Danish Krone        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    LIBYAN_DINAR   |   Libyan Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    VIETNAMESE_DONG   |   Vietnamese Dong        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ERITREAN_NAFKA   |   Eritrean Nafka        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NIGERIAN_NAIRA   |   Nigerian Naira        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MACEDONIAN_DENAR   |   Macedonian Denar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CHILEAN_PESO   |   Chilean Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    KAZAKHSTANI_TENGE   |   Kazakhstani Tenge        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BAHRANI_DINAR   |   Bahrani Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EL_SALVADORE_COLON   |   El Salvadore Colon        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    POLISH_ZLOTY   |   Polish Zloty        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ZAMBIAN_KWACHA   |   Zambian Kwacha        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MACANESE_PATACA   |   Macanese Pataca        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BOTSWANA_PULA   |   Botswana Pula        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TONGAN_PAANGA   |   Tongan Paanga        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SOUTH_AFRICAN_RAND   |   South African Rand        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MYANMAR_KYAT   |   Myanmar Kyat        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    COSTA_RICAN_COLON   |   Costa Rican Colon        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GHANAIAN_CEDI   |   Ghanaian Cedi        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SOLOMON_ISLANDS_DOLLAR   |   Solomon Islands Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MOZQAMBICAN_METICAL   |   Mozqambican Metical        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MALAGASY_ARIARY   |   Malagasy Ariary        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    JORDANIAN_DINAR   |   Jordanian Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SWAZI_LILANGENI   |   Swazi Lilangeni        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CZECH_KORUNA   |   Czech Koruna        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SWISS_FRANC   |   Swiss Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    RWANDA_FRANC   |   Rwanda Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NEW_RUBLE   |   New Ruble        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PAKASTANI_RUPEE   |   Pakastani Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SRI_LANKA_RUPEE   |   Sri Lanka Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    HAITIAN_GOURDE   |   Haitian Gourde        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ICELANDIC_KRONA   |   Icelandic Krona        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GAMBIAN_DALASI   |   Gambian Dalasi        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CAPE_VERDE_ESCUDO   |   Cape Verde Escudo        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BELIZE_DOLLAR   |   Belize Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    IRAQI_DINAR   |   Iraqi Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TAJIKISTANI_SOMONI   |   Tajikistani Somoni        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ROMANIAN_LEU   |   Romanian Leu        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BELARUSSIAN_RUBLE   |   Belarussian Ruble        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BRAZILIAN_REAL   |   Brazilian Real        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    VENEZLA_BOLIVAR_SOBERANO   |   Venezla Bolivar Soberano        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PHILIPPINE_PESO   |   Philippine Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    OMANI_RIAL   |   Omani Rial        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GUATEMALAN_QUETZAL   |   Guatemalan Quetzal        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MALDIVIAN_RUFIYAA   |   Maldivian Rufiyaa        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EAST_CARIBBEAN_DOLLAR   |   East Caribbean Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SURINAMESE_DOLLAR   |   Surinamese Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CFA_FRANC_BCEAO   |   Cfa Franc Bceao        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CONVERTIBLE_MARK   |   Convertible Mark        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NTHLNDS_ANTILIES_GUILDER   |   Nthlnds Antilies Guilder        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NAMIBIAN_DOLLAR   |   Namibian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ALGERIAN_DINAR   |   Algerian Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    UZBEKISTAN_SUM   |   Uzbekistan Sum        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SAO_TOME_PRINCIPE_DOBRA   |   Sao Tome Principe Dobra        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GIBRALTAR_POUND   |   Gibraltar Pound        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    OFFSHORE_REMNIBI   |   Offshore Remnibi        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BHUTANESE_NGULTRUM   |   Bhutanese Ngultrum        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BAHAMIAN_DOLLAR   |   Bahamian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    AUSTRALIAN_DOLLAR   |   Australian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ESTONIAN_KROON   |   Estonian Kroon        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    AFGHAN_AFGHANI   |   Afghan Afghani        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FALKLAND_ISLAND_POUND   |   Falkland Island Pound        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MONGOLIAN_TOGROG   |   Mongolian Togrog        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TUNISIAN_DINAR   |   Tunisian Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SEYCHELLES_RUPEE   |   Seychelles Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TRINADAD_+_TOBAGO_DOLLAR   |   Trinadad + Tobago Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ARGENTINIAN_PESO   |   Argentinian Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CANADIAN_DOLLAR   |   Canadian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PANAMANIAN_BALBOA   |   Panamanian Balboa        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NEW_ZEALAND_DOLLAR   |   New Zealand Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    COLOMBIAN_PESO   |   Colombian Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SAMOAN_TALA   |   Samoan Tala        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EGYPTIAN_POUND   |   Egyptian Pound        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    HONDURAN_LEMPIRA   |   Honduran Lempira        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NEPALESE_RUPEE   |   Nepalese Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    UNT_ARAB_EMERATES_DIRHAM   |   Unt Arab Emerates Dirham        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SAUDI_RIYAL   |   Saudi Riyal        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TURKMENISTANI_MANAT   |   Turkmenistani Manat        |    Available     | Optional     | Allowed |    NA |
| fundingDailyOverrideDate| Funding Daily Override Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| fundingDailyOverrideIndicator| Funding Override Indicator        |    OVERRIDE   |   Override        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NOT_OVERRIDE   |   Not Override        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NOT_USED   |   Not Used        |    Available     | Optional     | Allowed |    NA |
| fundingExclude30DayLimitAmount| Merchant funding exclusion monthly sales limit amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingExcludeCode| Merchant funding exclusion code        |    DIVERT   |   Divert        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| fundingExcludeDailyLimitAmount| Merchant funding exclusion daily sales limit amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingMethodCode| Funding method code Code determining how funds will be settled        |    CHK_TO_MAIN_BLK_LVL   |   Chk To Main Blk Lvl        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BNKWIRE_CHAIN_AUTO_NEG   |   Bnkwire Chain Auto Neg        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SPLIT_OUTLET_BNKWIRE_ACH   |   Split Outlet Bnkwire Ach        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ACH_BANK   |   Ach Bank        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    AGENT_BANK_SPLIT_FUNDING   |   Agent Bank Split Funding        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ACH_MER_BLK_CHAIN   |   Ach Mer Blk Chain        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SPLIT_CHAIN_BNKWIRE_ACH   |   Split Chain Bnkwire Ach        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BNKWIRE_AGENT_AUTO_NEG   |   Bnkwire Agent Auto Neg        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BNKWIRE_OUTLET   |   Bnkwire Outlet        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BNKWIRE_BANK   |   Bnkwire Bank        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ACH_OUTLET   |   Ach Outlet        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BY_CHK_TO_OUTLET   |   By Chk To Outlet        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BNKWIRE_MER_BLK_CHAIN   |   Bnkwire Mer Blk Chain        |    Available     | Optional     | Allowed |    NA |
|            |         |    BANKWIRE_OUTLET_ACH   |   Bankwire Outlet ACH    |    Available     | Optional     | Allowed |    NA   |
| fundingNotifyContactName| Funding notification contact name        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| fundingNotifyFaxNumber| Funding notification contact name        |    STRING containing digits only (max - 15, min - 10)   |   String Containing Digits Only (Max - 15, Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| fundingNotifyIndicator| Funding notification indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|       |      |    HIERARCHY   |   Hierarchy        |    Available     | Optional     | Allowed |    NA    |
| fundingNotifyMethodCode| Funding notification method code        |    NOT_USED   |   Not Used        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TELEPHONE   |   Telephone        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MAIL   |   Mail        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EMAIL   |   Email        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FAX   |   Fax        |    Available     | Optional     | Allowed |    NA |
| fundingNotifyPhoneNumber| Funding notification phone number        |    STRING containing digits only (max - 15, min - 10)   |   String Containing Digits Only (Max - 15, Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| fundingRollupCode| Indicates how the funding transactions will be combined on DDA statement        |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    VIA_CATGRY   |   Via Catgry        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| fundingRppChangeDate| Merchant funding revolving payment plan change date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| fundingRppDelayDays| Revolving payment plan delay days        |    STRING - Digits only - no decimal (max length - 2, min - 1)   |   String - Digits Only - No Decimal (Max Length: 2, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingRppMinimumAmount| Revolving payment plan minimum dollar amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingRppMinimumReserveAmount| Revolving payment plan minimum reserve amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingRppPercent| Revolving payment plan percent        |    STRING - Digits only - no decimal (max length - 3, min - 1)   |   String - Digits Only - No Decimal (Max Length: 3, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingRunCode| Merchant Funding Run        |    FUNDING_RUN6     |   Funding Run6        |    Available     | Optional     | Allowed |    NA |
|                     |                       |                     |   Funding Runs        |    Available     | Optional     | Allowed |    NA |
|                     |                       |                     |   Funding Run4        |    Available     | Optional     | Allowed |    NA |
|                     |                       |                     |   Funding Run1        |    Available     | Optional     | Allowed |    NA |
|                     |                       |                     |   Funding Run2        |    Available     | Optional     | Allowed |    NA |
|                     |                       |                     |   Funding Run3        |    Available     | Optional     | Allowed |    NA |
| interchangeAssessmentsBankSequenceNumber| Funding Bank Sequence  |    REMIT   |   Remit  |    Available     | Optional     | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| interchangeAssessmentsFundingCategoryCode | Funding Category Code |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
| interchangeAssessmentsFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
|                                        |                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| interchangeAssessmentsFundingRollupCode | Indicates how the transactions will be combined on DDA statement |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
| nonBankcardAdjustmentsBankSequenceNumber| Funding Bank Sequence |    REMIT   |   Remit |    Available | Optional | Allowed |  NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| nonBankcardAdjustmentsFundingCategoryCode | Funding Category Code |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
| nonBankcardAdjustmentsFundingDivertCode   | Funding Divert Code  |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
| nonBankcardAdjustmentsFundingRollupCode   | Indicates how the transactions will be combined on DDA statement |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
| ptsLimitsIndicator                        | PTS Limits Indicator  |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| reversalsBankSequenceNumber| Funding Bank Sequence |    REMIT   |   Remit  |    Available     | Optional     | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| reversalsFundingCategoryCode| Funding Category Code        |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
| reversalsFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| reversalsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
| settleTimeframeCode| Settlement Timeframe Code        |    BACS_SUPER   |   Bacs Super        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BACS_OR_NA   |   Bacs Or Na        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FASTER_PYMNT_METHOD   |   Faster Pymnt Method        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TWO_DAY_HOLD   |   Two Day Hold        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ZERO_DAY_HOLD   |   Zero Day Hold        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ONE_DAY_HOLD   |   One Day Hold        |    Available     | Optional     | Allowed |    NA |
|             |          |    DEFERRED   |   Deferred        |    Available     | Optional     | Allowed |    NA |
| temporary30DayLimitAmount| Temporary monthly limit amount        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| temporaryDailyLimitAmount| Temporary Daily Limit Amount        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| temporaryFromDate| Temporary From Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| temporaryToDate| Temporary To Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| achSuspenseHoldIndicator| ACH suspense hold indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|       |                       |    HOLD   |   Hold        |    Available     | Optional     | Allowed |    NA    |
| achSuspenseReleaseIndicator| ACH suspense release indicator        |    DIVERT_TO_CARS   |   Divert To Cars        |    Available     | Optional     | Allowed |    NA |
|       |                       |    HOLD_30_DAYS   |   Hold 30 Days        |    Available     | Optional     | Allowed |    NA |
|       |                       |    RELEASE_FUNDING   |   Release Funding        |    Available     | Optional     | Allowed |    NA |
| agentBankSplitIndicator| Indicates if Bank Client is considered an agent relationship to FDCS        |    AGENT   |   Agent        |    Available     | Optional     | Allowed |    NA |
|       |                       |    BANK   |   Bank        |    Available     | Optional     | Allowed |    NA |
| bankwireBbkText| Bankwire beneficiary BBK Text        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| bankwireBnfText| Bankwire beneficiary BNF Text        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| bankwireObiText| Bankwire beneficiary OBI Text        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| chargebacksBankSequenceNumber| Funding Bank Sequence |    REMIT   |   Remit        |    Available     | Optional     | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| chargebacksFundingCategoryCode| Funding Category Code        |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
| chargebacksFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
|                               |                              |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| chargebacksFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
| convenienceFeeCode| Convenience fee code to indicate the ABA or DDA to be charged        |    ABA_DDA_3   |   Aba Dda 3        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    ABA_DDA_5   |   Aba Dda 5        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    None   |   None        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    ABA_DDA_2   |   Aba Dda 2        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    ABA_DDA_1   |   Aba Dda 1        |    Available     | Optional     | Allowed |    NA |
|                             |                                                                         |    ABA_DDA_4   |   Aba Dda 4        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsBankSequenceNumber| Funding Bank Sequence |    REMIT   |   Remit  |    Available     | Optional     | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingCategoryCode| Funding Category Code        |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingDivertCode| Funding Divert Code        |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
| depositAdjustmentsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
| depositsBankSequenceNumber| Funding Bank Sequence |  REMIT | Remit |  Available  | Optional | Allowed |  NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| depositsFundingCategoryCode| Funding Category Code        |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                            |                              |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
| depositsFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
|               |          |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|       |       |    ICE   |   Ice        |    Available     | Optional     | Allowed |    NA |
| depositsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                          |                                                                         |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                          |                                                                         |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                          |                                                                         |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                          |                                                                         |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                          |                                                                         |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
| discountsBankSequenceNumber| Funding Bank Sequence  |  REMIT   |   Remit  |    Available     | Optional     | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| discountsFundingCategoryCode| Funding Category Code        |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                             |                              |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
| discountsFundingDivertCode| Funding Divert Code        |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                           |                            |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
| discountsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                           |                                                                         |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                           |                                                                         |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                           |                                                                         |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                           |                                                                         |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                           |                                                                         |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
| feesBankSequenceNumber| Funding Bank Sequence |    REMIT   |   Remit  |    Available   |  Optional | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| feesFundingCategoryCode| Funding Category Code        |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
| feesFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
|                      |                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| feesFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                      |                                                                         |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                      |                                                                         |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                      |                                                                         |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                      |                                                                         |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                      |                                                                         |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
| financialAdjustmentsBankSequenceNumber| Funding Bank Sequence  |    REMIT   |   Remit  |  Available |  Optional  | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| financialAdjustmentsFundingCategoryCode| Funding Category Code        |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
| financialAdjustmentsFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
| financialAdjustmentsFundingCategoryCode| Funding Category Code        |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| financialAdjustmentsFundingRollupCode   |Indicates how the transactions will be combined on DDA statement |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
| funding30DayOverrideDate| Funding 30 day daily override date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| funding30DayOverrideIndicator| Funding 30 day override indicator        |    NOT_OVERRIDE   |   Not Override        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    OVERRIDE   |   Override        |    Available     | Optional     | Allowed |    NA |
|                                            |                                  |    NOT_USED   |   Not Used        |    Available     | Optional     | Allowed |    NA |
| fundingAchDelayDays| Retention period for deposits and daily discount before releasing them for ACH processing        |    STRING - Digits only - no decimal (max length - 2, min - 1)   |   String - Digits Only - No Decimal (Max Length: 2, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingBankCode| Funding Bank Code        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| fundingCurrencyCode| Funding Currency Code        |    QATARI_RIAL   |   Qatari Rial        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ISRAELI_NEW_SHEKEL   |   Israeli New Shekel        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CFA_FRANC_BEAC   |   Cfa Franc Beac        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    UNITED_STATES_DOLLAR   |   United States Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CONGOLESE_FRANC   |   Congolese Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MALAYSIAN_RINGGIT   |   Malaysian Ringgit        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MAURITIAN_RUPEE   |   Mauritian Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MOROCCAN_DIRHAM   |   Moroccan Dirham        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ARUBAN_FLORIN   |   Aruban Florin        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PERUVIAN_SOL   |   Peruvian Sol        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ST_HELENA_POUND   |   St Helena Pound        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BURUNDI_FRANC   |   Burundi Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BRUNEI_DOLLAR   |   Brunei Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    COMOROS_FRANC   |   Comoros Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    LAO_KIP   |   Lao Kip        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    JAMAICAN_DOLLAR   |   Jamaican Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    JAPANESE_YEN   |   Japanese Yen        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SOUTH_KOREAN_WON   |   South Korean Won        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    KUWAITI_DINAR   |   Kuwaiti Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NICARAGUAN_CORDOBA   |   Nicaraguan Cordoba        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PARAGUAYAN_GUARANI   |   Paraguayan Guarani        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    KYRGYZSTAN_SOM   |   Kyrgyzstan Som        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GUINEAN_FRANC   |   Guinean Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    POUND_STERLING   |   Pound Sterling        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SINGAPORE_DOLLAR   |   Singapore Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DJIBOUTIAN_FRANC   |   Djiboutian Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CROTIAN_KUNA   |   Crotian Kuna        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    YEMENI_RIAL   |   Yemeni Rial        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MALAWIAN_KWACHA   |   Malawian Kwacha        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ZIMBABWE_DOLLAR   |   Zimbabwe Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NORWEGIAN_KRONE   |   Norwegian Krone        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ALBANIAN_LEK   |   Albanian Lek        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BARBADOS_DOLLAR   |   Barbados Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    UGANDAN_SHILLING   |   Ugandan Shilling        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CHINESE_YUAN   |   Chinese Yuan        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DOMINCAN_PESO   |   Domincan Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ETHIOPIAN_BIRR   |   Ethiopian Birr        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    AZERBAIJANI_MANAT   |   Azerbaijani Manat        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TANZANIAN_SHILLING   |   Tanzanian Shilling        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SOUTH_SUDANESE_POUNT   |   South Sudanese Pount        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SOMALI_SHILLING   |   Somali Shilling        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GUANESE_DOLLAR   |   Guanese Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    HONG_KONG_DOLLAR   |   Hong Kong Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SIERRA_LEONEAN_LEONE   |   Sierra Leonean Leone        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    INDOSEIAN_RUPIAH   |   Indoseian Rupiah        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MOLDOVAN_LEU   |   Moldovan Leu        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BANGLADESHI_TAKA   |   Bangladeshi Taka        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BOLIVIANO   |   Boliviano        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ARMENIAN_DRAM   |   Armenian Dram        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CFP_FRANC   |   Cfp Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FIJI_DOLLAR   |   Fiji Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    HUNGARIAN_FORINT   |   Hungarian Forint        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    INDIAN_RUPEE   |   Indian Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    LEBANEESE_POUNT   |   Lebaneese Pount        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    LESHTHO_LOTI   |   Leshtho Loti        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PAPUA_NEW_GUINEAN_KINA   |   Papua New Guinean Kina        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MEXICAN_PESO   |   Mexican Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GUINEA_BISSAU_PESO   |   Guinea Bissau Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NEW_TAIWAN_DOLLAR   |   New Taiwan Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TURKISH_LIRA   |   Turkish Lira        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ANGOLAN_KWANZA   |   Angolan Kwanza        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EURO   |   Euro        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CAMBODIAN_FRANC   |   Cambodian Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    LIBERIAN_DOLLAR   |   Liberian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    UKRANIAN_HRYVNIA   |   Ukranian Hryvnia        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CAYMAN_ISLANDS_DOLLAR   |   Cayman Islands Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MAURITANIAN_OUGUIYA   |   Mauritanian Ouguiya        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    KENYAN_SHILLING   |   Kenyan Shilling        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SWEDISH_KRONA   |   Swedish Krona        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BULGARIAN_LEV   |   Bulgarian Lev        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GEORGIAN_LARI   |   Georgian Lari        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    THAI_BAHT   |   Thai Baht        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    VANUATU_VATU   |   Vanuatu Vatu        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SERBIAN_DINAR   |   Serbian Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BERMUDIAN_DOLLAR   |   Bermudian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    URUGUAYAN_PESO   |   Uruguayan Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DANISH_KRONE   |   Danish Krone        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    LIBYAN_DINAR   |   Libyan Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    VIETNAMESE_DONG   |   Vietnamese Dong        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ERITREAN_NAFKA   |   Eritrean Nafka        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NIGERIAN_NAIRA   |   Nigerian Naira        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MACEDONIAN_DENAR   |   Macedonian Denar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CHILEAN_PESO   |   Chilean Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    KAZAKHSTANI_TENGE   |   Kazakhstani Tenge        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BAHRANI_DINAR   |   Bahrani Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EL_SALVADORE_COLON   |   El Salvadore Colon        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    POLISH_ZLOTY   |   Polish Zloty        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ZAMBIAN_KWACHA   |   Zambian Kwacha        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MACANESE_PATACA   |   Macanese Pataca        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BOTSWANA_PULA   |   Botswana Pula        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TONGAN_PAANGA   |   Tongan Paanga        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SOUTH_AFRICAN_RAND   |   South African Rand        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MYANMAR_KYAT   |   Myanmar Kyat        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    COSTA_RICAN_COLON   |   Costa Rican Colon        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GHANAIAN_CEDI   |   Ghanaian Cedi        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SOLOMON_ISLANDS_DOLLAR   |   Solomon Islands Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MOZQAMBICAN_METICAL   |   Mozqambican Metical        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MALAGASY_ARIARY   |   Malagasy Ariary        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    JORDANIAN_DINAR   |   Jordanian Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SWAZI_LILANGENI   |   Swazi Lilangeni        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CZECH_KORUNA   |   Czech Koruna        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SWISS_FRANC   |   Swiss Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    RWANDA_FRANC   |   Rwanda Franc        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NEW_RUBLE   |   New Ruble        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PAKASTANI_RUPEE   |   Pakastani Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SRI_LANKA_RUPEE   |   Sri Lanka Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    HAITIAN_GOURDE   |   Haitian Gourde        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ICELANDIC_KRONA   |   Icelandic Krona        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GAMBIAN_DALASI   |   Gambian Dalasi        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CAPE_VERDE_ESCUDO   |   Cape Verde Escudo        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BELIZE_DOLLAR   |   Belize Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    IRAQI_DINAR   |   Iraqi Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TAJIKISTANI_SOMONI   |   Tajikistani Somoni        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ROMANIAN_LEU   |   Romanian Leu        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BELARUSSIAN_RUBLE   |   Belarussian Ruble        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BRAZILIAN_REAL   |   Brazilian Real        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    VENEZLA_BOLIVAR_SOBERANO   |   Venezla Bolivar Soberano        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PHILIPPINE_PESO   |   Philippine Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    OMANI_RIAL   |   Omani Rial        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GUATEMALAN_QUETZAL   |   Guatemalan Quetzal        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MALDIVIAN_RUFIYAA   |   Maldivian Rufiyaa        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EAST_CARIBBEAN_DOLLAR   |   East Caribbean Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SURINAMESE_DOLLAR   |   Surinamese Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CFA_FRANC_BCEAO   |   Cfa Franc Bceao        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CONVERTIBLE_MARK   |   Convertible Mark        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NTHLNDS_ANTILIES_GUILDER   |   Nthlnds Antilies Guilder        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NAMIBIAN_DOLLAR   |   Namibian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ALGERIAN_DINAR   |   Algerian Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    UZBEKISTAN_SUM   |   Uzbekistan Sum        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SAO_TOME_PRINCIPE_DOBRA   |   Sao Tome Principe Dobra        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    GIBRALTAR_POUND   |   Gibraltar Pound        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    OFFSHORE_REMNIBI   |   Offshore Remnibi        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BHUTANESE_NGULTRUM   |   Bhutanese Ngultrum        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BAHAMIAN_DOLLAR   |   Bahamian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    AUSTRALIAN_DOLLAR   |   Australian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ESTONIAN_KROON   |   Estonian Kroon        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    AFGHAN_AFGHANI   |   Afghan Afghani        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FALKLAND_ISLAND_POUND   |   Falkland Island Pound        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MONGOLIAN_TOGROG   |   Mongolian Togrog        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TUNISIAN_DINAR   |   Tunisian Dinar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SEYCHELLES_RUPEE   |   Seychelles Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TRINADAD_+_TOBAGO_DOLLAR   |   Trinadad + Tobago Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ARGENTINIAN_PESO   |   Argentinian Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CANADIAN_DOLLAR   |   Canadian Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    PANAMANIAN_BALBOA   |   Panamanian Balboa        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NEW_ZEALAND_DOLLAR   |   New Zealand Dollar        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    COLOMBIAN_PESO   |   Colombian Peso        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SAMOAN_TALA   |   Samoan Tala        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EGYPTIAN_POUND   |   Egyptian Pound        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    HONDURAN_LEMPIRA   |   Honduran Lempira        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NEPALESE_RUPEE   |   Nepalese Rupee        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    UNT_ARAB_EMERATES_DIRHAM   |   Unt Arab Emerates Dirham        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SAUDI_RIYAL   |   Saudi Riyal        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TURKMENISTANI_MANAT   |   Turkmenistani Manat        |    Available     | Optional     | Allowed |    NA |
| fundingDailyOverrideDate| Funding Daily Override Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| fundingDailyOverrideIndicator| Funding Override Indicator        |    OVERRIDE   |   Override        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NOT_OVERRIDE   |   Not Override        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NOT_USED   |   Not Used        |    Available     | Optional     | Allowed |    NA |
| fundingExclude30DayLimitAmount| Merchant funding exclusion monthly sales limit amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingExcludeCode| Merchant funding exclusion code        |    DIVERT   |   Divert        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| fundingExcludeDailyLimitAmount| Merchant funding exclusion daily sales limit amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingMethodCode| Funding method code Code determining how funds will be settled        |    CHK_TO_MAIN_BLK_LVL   |   Chk To Main Blk Lvl        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BNKWIRE_CHAIN_AUTO_NEG   |   Bnkwire Chain Auto Neg        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SPLIT_OUTLET_BNKWIRE_ACH   |   Split Outlet Bnkwire Ach        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ACH_BANK   |   Ach Bank        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    AGENT_BANK_SPLIT_FUNDING   |   Agent Bank Split Funding        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ACH_MER_BLK_CHAIN   |   Ach Mer Blk Chain        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    SPLIT_CHAIN_BNKWIRE_ACH   |   Split Chain Bnkwire Ach        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BNKWIRE_AGENT_AUTO_NEG   |   Bnkwire Agent Auto Neg        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BNKWIRE_OUTLET   |   Bnkwire Outlet        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BNKWIRE_BANK   |   Bnkwire Bank        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ACH_OUTLET   |   Ach Outlet        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BY_CHK_TO_OUTLET   |   By Chk To Outlet        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BNKWIRE_MER_BLK_CHAIN   |   Bnkwire Mer Blk Chain        |    Available     | Optional     | Allowed |    NA |
|            |         |    BANKWIRE_OUTLET_ACH   |   Bankwire Outlet ACH    |    Available     | Optional     | Allowed |    NA   |
| fundingNotifyContactName| Funding notification contact name        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| fundingNotifyFaxNumber| Funding notification contact name        |    STRING containing digits only (max - 15, min - 10)   |   String Containing Digits Only (Max - 15, Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| fundingNotifyIndicator| Funding notification indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|       |      |    HIERARCHY   |   Hierarchy        |    Available     | Optional     | Allowed |    NA    |
| fundingNotifyMethodCode| Funding notification method code        |    NOT_USED   |   Not Used        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TELEPHONE   |   Telephone        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    MAIL   |   Mail        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EMAIL   |   Email        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FAX   |   Fax        |    Available     | Optional     | Allowed |    NA |
| fundingNotifyPhoneNumber| Funding notification phone number        |    STRING containing digits only (max - 15, min - 10)   |   String Containing Digits Only (Max - 15, Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| fundingRollupCode| Indicates how the funding transactions will be combined on DDA statement        |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    VIA_CATGRY   |   Via Catgry        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| fundingRppChangeDate| Merchant funding revolving payment plan change date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| fundingRppDelayDays| Revolving payment plan delay days        |    STRING - Digits only - no decimal (max length - 2, min - 1)   |   String - Digits Only - No Decimal (Max Length: 2, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingRppMinimumAmount| Revolving payment plan minimum dollar amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingRppMinimumReserveAmount| Revolving payment plan minimum reserve amount        |    STRING - Digits only - no decimal (max length - 9, min - 1)   |   String - Digits Only - No Decimal (Max Length: 9, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingRppPercent| Revolving payment plan percent        |    STRING - Digits only - no decimal (max length - 3, min - 1)   |   String - Digits Only - No Decimal (Max Length: 3, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| fundingRunCode| Merchant Funding Run        |    FUNDING_RUN6   |   Funding Run6        |    Available     | Optional     | Allowed |    NA |
|                     |                       |                     |   Funding Runs        |    Available     | Optional     | Allowed |    NA |
|                     |                       |                    |   Funding Run4        |    Available     | Optional     | Allowed |    NA |
|                     |                      |                      |   Funding Run1        |    Available     | Optional     | Allowed |    NA |
|                     |                      |                      |   Funding Run2        |    Available     | Optional     | Allowed |    NA |
|                     |                      |                      |   Funding Run3        |    Available     | Optional     | Allowed |    NA |
| interchangeAssessmentsBankSequenceNumber| Funding Bank Sequence  |    REMIT   |   Remit  |    Available     | Optional     | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |  
| interchangeAssessmentsFundingCategoryCode | Funding Category Code |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
| interchangeAssessmentsFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
|                                        |                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| interchangeAssessmentsFundingRollupCode | Indicates how the transactions will be combined on DDA statement |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
| nonBankcardAdjustmentsBankSequenceNumber| Funding Bank Sequence |    REMIT   |   Remit |    Available | Optional | Allowed |  NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| nonBankcardAdjustmentsFundingCategoryCode | Funding Category Code |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
| nonBankcardAdjustmentsFundingDivertCode   | Funding Divert Code  |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
| nonBankcardAdjustmentsFundingRollupCode   | Indicates how the transactions will be combined on DDA statement |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
| ptsLimitsIndicator                        | PTS Limits Indicator  |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| reversalsBankSequenceNumber| Funding Bank Sequence |    REMIT   |   Remit  |    Available     | Optional     | Allowed |    NA |
|       |      |    DDA1   |   DDA#1   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA2   |   DDA#2   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA3   |   DDA#3   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA4   |   DDA#4   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA5   |   DDA#5   |    Available     | Optional     | Allowed |  NA |
|       |      |    DDA9   |   DDA#9   |    Available     | Optional     | Allowed |  NA |
| reversalsFundingCategoryCode| Funding Category Code        |    REVERSALS   |   Reversals        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    INTERCHANGE_ASSESSMENTS   |   Interchange Assessments        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FEES   |   Fees        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NON_BANKCARD_ADJUSTMENTS   |   Non Bankcard Adjustments        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FINANCIAL_ADJUSTMENTS   |   Financial Adjustments        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEPOSITS   |   Deposits        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEPOSIT_ADJUSTMENTS   |   Deposit Adjustments        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DISCOUNTS   |   Discounts        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    CHARGEBACKS   |   Chargebacks        |    Available     | Optional     | Allowed |    NA |
| reversalsFundingDivertCode| Funding Divert Code        |    CARS   |   Cars        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| reversalsFundingRollupCode| Indicates how the transactions will be combined on DDA statement        |    VIA_CATEGORY   |   Via Category        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    EACH_TRANSFER   |   Each Transfer        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEBIT_CREDIT   |   Debit Credit        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NET_FEE_TRANS   |   Net Fee Trans        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    NET_ROLLUP   |   Net Rollup        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    DEPOSIT_BATCH   |   Deposit Batch        |    Available     | Optional     | Allowed |    NA |
| settleTimeframeCode| Settlement Timeframe Code        |    BACS_SUPER   |   Bacs Super        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    BACS_OR_NA   |   Bacs Or Na        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    FASTER_PYMNT_METHOD   |   Faster Pymnt Method        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    TWO_DAY_HOLD   |   Two Day Hold        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ZERO_DAY_HOLD   |   Zero Day Hold        |    Available     | Optional     | Allowed |    NA |
|                     |                                            |    ONE_DAY_HOLD   |   One Day Hold        |    Available     | Optional     | Allowed |    NA |
|             |          |    DEFERRED   |   Deferred        |    Available     | Optional     | Allowed |    NA |
| temporary30DayLimitAmount| Temporary monthly limit amount        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| temporaryDailyLimitAmount| Temporary Daily Limit Amount        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| temporaryFromDate| Temporary From Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| temporaryToDate| Temporary To Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### globalCurrencySolutions

---

tags: [globalCurrencySolutions]

---

* Description: Global Currency Solutions

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringSubType1| Offering Sub Type        |    NORTH_RATES_PLUS_DCCLUS_DCC   |   North Rates Plus Dcclus Dcc        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    EXCEPTION_RATE_MCPE_MCP   |   Exception Rate Mcpe Mcp        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    VI/MC_RATE_MCPP   |   Vi/Mc Rate Mcpp        |    Available     | Optional     | Allowed |    NA |
| offeringSubType2| Globally Used For All North Backend Sales Channels        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| offeringType| Offering Type        |    PRISMATIC   |   Prismatic        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringSubType1| Offering Sub Type        |    NORTH_RATES_PLUS_DCCLUS_DCC   |   North Rates Plus Dcclus Dcc        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    EXCEPTION_RATE_MCPE_MCP   |   Exception Rate Mcpe Mcp        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    VI/MC_RATE_MCPP   |   Vi/Mc Rate Mcpp        |    Available     | Optional     | Allowed |    NA |
| offeringSubType2| Globally Used For All North Backend Sales Channels        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| offeringType| Offering Type        |    PRISMATIC   |   Prismatic        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### highRiskMonitoring

---

tags: [highRiskMonitoring]

---

* Description: High Risk Monitoring

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractDate| Contract Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| offeringType| Offering Type        |    MSB   |   Msb        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CNP_PHARMACY   |   Cnp Pharmacy        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CNP_TOBACCO_VAPE   |   Cnp Tobacco Vape        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    SOCIAL_GAMING   |   Social Gaming        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    ONLINE_FIREARMS   |   Online Firearms        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    SKILLED_GAMES   |   Skilled Games        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    BINGO   |   Bingo        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NFT   |   Nft        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CRYPTOCURRENCY   |   Cryptocurrency        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    HIGH_RISK   |   High Risk        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NUTRACEUTICALS   |   Nutraceuticals        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    LOTTERY   |   Lottery        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    GAMBLING   |   Gambling        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CBD_CANNABIS   |   Cbd Cannabis        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    NOT_Optional   |   Not Optional        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEREGISTERED   |   Deregistered        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    COMPLETE_REGISTER   |   Complete Register        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    PENDING_REGISTER   |   Pending Register        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    OTHER   |   Other        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractDate| Contract Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| offeringType| Offering Type        |    MSB   |   Msb        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CNP_PHARMACY   |   Cnp Pharmacy        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CNP_TOBACCO_VAPE   |   Cnp Tobacco Vape        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    SOCIAL_GAMING   |   Social Gaming        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    ONLINE_FIREARMS   |   Online Firearms        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    SKILLED_GAMES   |   Skilled Games        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    BINGO   |   Bingo        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NFT   |   Nft        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CRYPTOCURRENCY   |   Cryptocurrency        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    HIGH_RISK   |   High Risk        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NUTRACEUTICALS   |   Nutraceuticals        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    LOTTERY   |   Lottery        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    GAMBLING   |   Gambling        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    CBD_CANNABIS   |   Cbd Cannabis        |    Available     | Optional     | Allowed |    NA |
| status| Program Status        |    NOT_Optional   |   Not Optional        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    DEREGISTERED   |   Deregistered        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    COMPLETE_REGISTER   |   Complete Register        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    PENDING_REGISTER   |   Pending Register        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    OTHER   |   Other        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### inHouseAuthConfig

---

tags: [inHouseAuthConfig]

---

* Description: InHouse Auth Configuration

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| inHouseAuthCaptureCode| InHouse Authorization Capture Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| inHouseBankCode| InHouse Bank Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| inHouseNonMerchantCode| InHouse NonMerchant Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| inHouseAuthCaptureCode| InHouse Authorization Capture Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| inHouseBankCode| InHouse Bank Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| inHouseNonMerchantCode| InHouse NonMerchant Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### indemnification

---

tags: [indemnification]

---

* Description: Indemnification

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| indemnificationDate| Indemnification Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| indemnificationIndicator| Indemnification Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| indemnificationPercent| Indemnification Risk Ratio Percentage        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| riskOwnerCode| Risk Owner Code        |    FISERV   |   Fiserv        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    BANK   |   Bank        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    AGENT   |   Agent        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    ALLIANCE   |   Alliance        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| indemnificationDate| Indemnification Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| indemnificationIndicator| Indemnification Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| indemnificationPercent| Indemnification Risk Ratio Percentage        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| riskOwnerCode| Risk Owner Code        |    FISERV   |   Fiserv        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    BANK   |   Bank        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    AGENT   |   Agent        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    ALLIANCE   |   Alliance        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### independentSoftwareVendor

---

tags: [independentSoftwareVendor]

---

* Description: Independent Software Vendor (Isv) Global Indicator

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    BYPASS_CLOVER_ISV   |   Bypass Clover Isv        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    BYPASS_CLOVER_ISV   |   Bypass Clover Isv        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### internalItUse

---

tags: [internalItUse]

---

* Description: Internal It Use - Trigger Feeds And Save Data

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| discoverTrigger| Registration Merchant Feed To Discover        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| spomiTrigger| Sponsored Merchant Feed To Amex        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    REPROCESS   |   Reprocess        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| discoverTrigger| Registration Merchant Feed To Discover        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| spomiTrigger| Sponsored Merchant Feed To Amex        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    REPROCESS   |   Reprocess        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### iolCanadianVatRegNumber

---

tags: [iolCanadianVatRegNumber]

---

* Description: Iol Canadian Vat Reg Number

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| canadianVatRegNumber| Canadian Vat Registration Number        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| canadianVatRegNumber| Canadian Vat Registration Number        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### irsSupplementalInformation

---

tags: [irsSupplementalInformation]

---

* Description: Irs Supplemental Information

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| econsentDate| Econsent Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| econsentIndicator| Econsent Indicator        |    OWNERSHIP_CHANGE   |   Ownership Change        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    ECONSENT_GIVEN   |   Econsent Given        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    ECONSENT_REVOKED   |   Econsent Revoked        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    PENDING_STATUS   |   Pending Status        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    EMAIL_DELIVERY_FAILED   |   Email Delivery Failed        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    STATUS_CHANGE   |   Status Change        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    ONLY_EMAIL_ACTIVATED   |   Only Email Activated        |    Available     | Optional     | Allowed |    NA |
| primaryEmailIndicator| Primary Email Indicator        |    USE_ALTERNATE_EMAIL   |   Use Alternate Email        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    USE_PRIMARY_EMAIL   |   Use Primary Email        |    Available     | Optional     | Allowed |    NA |
| requestGuid| Request Guid        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| userProvidedEconsentEmail| User Provided Econsent Email        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| econsentDate| Econsent Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| econsentIndicator| Econsent Indicator        |    OWNERSHIP_CHANGE   |   Ownership Change        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    ECONSENT_GIVEN   |   Econsent Given        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    ECONSENT_REVOKED   |   Econsent Revoked        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    PENDING_STATUS   |   Pending Status        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    EMAIL_DELIVERY_FAILED   |   Email Delivery Failed        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    STATUS_CHANGE   |   Status Change        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    ONLY_EMAIL_ACTIVATED   |   Only Email Activated        |    Available     | Optional     | Allowed |    NA |
| primaryEmailIndicator| Primary Email Indicator        |    USE_ALTERNATE_EMAIL   |   Use Alternate Email        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    USE_PRIMARY_EMAIL   |   Use Primary Email        |    Available     | Optional     | Allowed |    NA |
| requestGuid| Request Guid        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| userProvidedEconsentEmail| User Provided Econsent Email        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### isoServices

---

tags: [isoServices]

---

* Description: Iso Services

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| isoIdAmex| Iso Id Amex        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| isoIdDscv| Iso Id Discover        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| isoIdMc| Iso Id Mc        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| isoIdVi| Iso Id Vi        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| serviceProvider| Service Provider        |    APERIA   |   Aperia        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    WELLS   |   Wells        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    MARKETPLACE   |   Marketplace        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    FD_DIRECT   |   Fd Direct        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| isoIdAmex| Iso Id Amex        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| isoIdDscv| Iso Id Discover        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| isoIdMc| Iso Id Mc        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| isoIdVi| Iso Id Vi        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| serviceProvider| Service Provider        |    APERIA   |   Aperia        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    WELLS   |   Wells        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    MARKETPLACE   |   Marketplace        |    Available     | Optional     | Allowed |    NA |
|                                           |                       |    FD_DIRECT   |   Fd Direct        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### keyReferenceNumber

---

tags: [keyReferenceNumber]

---

* Description: Key Reference Number

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| keyReferenceNumber| Credit Only Key Reference Number        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| tbd| Tbd        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| keyReferenceNumber| Credit Only Key Reference Number        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| tbd| Tbd        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### merchantCountryOfOrigin

---

tags: [merchantCountryOfOrigin]

---

* Description: Merchant Country Of Origin

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| countryOfOrigin| Country Of Origin        |    GMB   |   Gmb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UZB   |   Uzb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WLF   |   Wlf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WSM   |   Wsm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRV   |   Hrv        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GLP   |   Glp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HKG   |   Hkg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HTI   |   Hti        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GAB   |   Gab        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SLV   |   Slv        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MYT   |   Myt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HMD   |   Hmd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GHA   |   Gha        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KIR   |   Kir        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DEU   |   Deu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PSE   |   Pse        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GGY   |   Ggy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SRB   |   Srb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SGS   |   Sgs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CIV   |   Civ        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CXR   |   Cxr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHL   |   Chl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TCD   |   Tcd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LKA   |   Lka        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CAN   |   Can        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COM   |   Com        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BLR   |   Blr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DMA   |   Dma        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ATA   |   Ata        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZAR   |   Zar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TWN   |   Twn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FLK   |   Flk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ECU   |   Ecu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IMN   |   Imn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TZA   |   Tza        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LBR   |   Lbr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IOT   |   Iot        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRA   |   Bra        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BTN   |   Btn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BEL   |   Bel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AZE   |   Aze        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AGO   |   Ago        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ASM   |   Asm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DZA   |   Dza        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRO   |   Fro        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NLD   |   Nld        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AFG   |   Afg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHN   |   Chn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FIN   |   Fin        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRA   |   Fra        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LTU   |   Ltu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CMR   |   Cmr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LBN   |   Lbn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JOR   |   Jor        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUT   |   Aut        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KAZ   |   Kaz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KGZ   |   Kgz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TKL   |   Tkl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUN   |   Tun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TKM   |   Tkm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TCA   |   Tca        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MKD   |   Mkd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALA   |   Ala        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PRI   |   Pri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NAM   |   Nam        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NRU   |   Nru        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TJK   |   Tjk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GNB   |   Gnb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOM   |   Som        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RWA   |   Rwa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SHN   |   Shn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KNA   |   Kna        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SPM   |   Spm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    POL   |   Pol        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAN   |   Pan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SMR   |   Smr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SEN   |   Sen        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LBY   |   Lby        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MCO   |   Mco        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNE   |   Mne        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VAT   |   Vat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SLE   |   Sle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAR   |   Mar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IDN   |   Idn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRL   |   Irl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ISR   |   Isr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ITA   |   Ita        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KEN   |   Ken        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KOR   |   Kor        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KWT   |   Kwt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LSO   |   Lso        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SVN   |   Svn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VNM   |   Vnm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TGO   |   Tgo        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TTO   |   Tto        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RUS   |   Rus        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CAF   |   Caf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UKR   |   Ukr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZWE   |   Zwe        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SUR   |   Sur        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUR   |   Tur        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BLM   |   Blm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAF   |   Maf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VCT   |   Vct        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAU   |   Sau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SGP   |   Sgp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SVK   |   Svk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZAF   |   Zaf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRB   |   Brb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TON   |   Ton        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SYC   |   Syc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GBR   |   Gbr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUV   |   Tuv        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SJM   |   Sjm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EGY   |   Egy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JEY   |   Jey        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VIR   |   Vir        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BFA   |   Bfa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NIC   |   Nic        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PNG   |   Png        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARE   |   Are        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VUT   |   Vut        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAC   |   Mac        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MLT   |   Mlt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GIN   |   Gin        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JAM   |   Jam        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JPN   |   Jpn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ABW   |   Abw        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UMI   |   Umi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NER   |   Ner        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NIU   |   Niu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NFK   |   Nfk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNP   |   Mnp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FSM   |   Fsm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAK   |   Pak        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PHL   |   Phl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    QAT   |   Qat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ROU   |   Rou        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MUS   |   Mus        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IND   |   Ind        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRQ   |   Irq        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SXM   |   Sxm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PCN   |   Pcn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LAO   |   Lao        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LVA   |   Lva        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LIE   |   Lie        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MDG   |   Mdg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MYS   |   Mys        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MDV   |   Mdv        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUM   |   Gum        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MDA   |   Mda        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MSR   |   Msr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OMN   |   Omn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NPL   |   Npl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANT   |   Ant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CUW   |   Cuw        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOR   |   Nor        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MHL   |   Mhl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COG   |   Cog        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRD   |   Grd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUY   |   Guy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HND   |   Hnd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GNQ   |   Gnq        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ETH   |   Eth        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ERI   |   Eri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FJI   |   Fji        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PYF   |   Pyf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COL   |   Col        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PLW   |   Plw        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CRI   |   Cri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EST   |   Est        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DJI   |   Dji        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NCL   |   Ncl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GEO   |   Geo        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GIB   |   Gib        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRC   |   Grc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GTM   |   Gtm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HUN   |   Hun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LUX   |   Lux        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    URY   |   Ury        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VEN   |   Ven        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YEM   |   Yem        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZMB   |   Zmb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    QZZ   |   Qzz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TMP   |   Tmp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUF   |   Guf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ESH   |   Esh        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PRY   |   Pry        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PER   |   Per        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BEN   |   Ben        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BGR   |   Bgr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AIA   |   Aia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USA   |   Usa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MWI   |   Mwi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MLI   |   Mli        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MTQ   |   Mtq        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MRT   |   Mrt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MEX   |   Mex        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MOZ   |   Moz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BES   |   Bes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NZL   |   Nzl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NGA   |   Nga        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOM   |   Dom        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNG   |   Mng        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DNK   |   Dnk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PRT   |   Prt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REU   |   Reu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ISL   |   Isl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LCA   |   Lca        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    STP   |   Stp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ESP   |   Esp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SSD   |   Ssd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRL   |   Grl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SWZ   |   Swz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SWE   |   Swe        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHE   |   Che        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    THA   |   Tha        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CYM   |   Cym        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CCK   |   Cck        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CUB   |   Cub        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALB   |   Alb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AND   |   And        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ATG   |   Atg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUS   |   Aus        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BHR   |   Bhr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARM   |   Arm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BMU   |   Bmu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BWA   |   Bwa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BLZ   |   Blz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SLB   |   Slb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KHM   |   Khm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CPV   |   Cpv        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ATF   |   Atf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UGA   |   Uga        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COK   |   Cok        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BHS   |   Bhs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CYP   |   Cyp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MMR   |   Mmr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BDI   |   Bdi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CZE   |   Cze        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARG   |   Arg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BGD   |   Bgd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOL   |   Bol        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BIH   |   Bih        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BVT   |   Bvt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VGB   |   Vgb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRN   |   Brn        |    Available     | Optional     | Allowed |    NA |
<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| countryOfOrigin| Country Of Origin        |    GMB   |   Gmb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UZB   |   Uzb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WLF   |   Wlf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WSM   |   Wsm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRV   |   Hrv        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GLP   |   Glp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HKG   |   Hkg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HTI   |   Hti        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GAB   |   Gab        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SLV   |   Slv        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MYT   |   Myt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HMD   |   Hmd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GHA   |   Gha        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KIR   |   Kir        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DEU   |   Deu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PSE   |   Pse        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GGY   |   Ggy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SRB   |   Srb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SGS   |   Sgs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CIV   |   Civ        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CXR   |   Cxr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHL   |   Chl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TCD   |   Tcd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LKA   |   Lka        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CAN   |   Can        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COM   |   Com        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BLR   |   Blr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DMA   |   Dma        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ATA   |   Ata        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZAR   |   Zar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TWN   |   Twn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FLK   |   Flk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ECU   |   Ecu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IMN   |   Imn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TZA   |   Tza        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LBR   |   Lbr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IOT   |   Iot        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRA   |   Bra        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BTN   |   Btn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BEL   |   Bel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AZE   |   Aze        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AGO   |   Ago        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ASM   |   Asm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DZA   |   Dza        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRO   |   Fro        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NLD   |   Nld        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AFG   |   Afg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHN   |   Chn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FIN   |   Fin        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRA   |   Fra        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LTU   |   Ltu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CMR   |   Cmr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LBN   |   Lbn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JOR   |   Jor        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUT   |   Aut        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KAZ   |   Kaz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KGZ   |   Kgz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TKL   |   Tkl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUN   |   Tun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TKM   |   Tkm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TCA   |   Tca        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MKD   |   Mkd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALA   |   Ala        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PRI   |   Pri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NAM   |   Nam        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NRU   |   Nru        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TJK   |   Tjk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GNB   |   Gnb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOM   |   Som        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RWA   |   Rwa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SHN   |   Shn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KNA   |   Kna        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SPM   |   Spm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    POL   |   Pol        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAN   |   Pan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SMR   |   Smr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SEN   |   Sen        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LBY   |   Lby        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MCO   |   Mco        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNE   |   Mne        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VAT   |   Vat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SLE   |   Sle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAR   |   Mar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IDN   |   Idn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRL   |   Irl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ISR   |   Isr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ITA   |   Ita        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KEN   |   Ken        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KOR   |   Kor        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KWT   |   Kwt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LSO   |   Lso        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SVN   |   Svn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VNM   |   Vnm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TGO   |   Tgo        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TTO   |   Tto        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RUS   |   Rus        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CAF   |   Caf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UKR   |   Ukr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZWE   |   Zwe        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SUR   |   Sur        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUR   |   Tur        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BLM   |   Blm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAF   |   Maf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VCT   |   Vct        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAU   |   Sau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SGP   |   Sgp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SVK   |   Svk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZAF   |   Zaf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRB   |   Brb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TON   |   Ton        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SYC   |   Syc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GBR   |   Gbr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUV   |   Tuv        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SJM   |   Sjm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EGY   |   Egy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JEY   |   Jey        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VIR   |   Vir        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BFA   |   Bfa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NIC   |   Nic        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PNG   |   Png        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARE   |   Are        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VUT   |   Vut        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAC   |   Mac        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MLT   |   Mlt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GIN   |   Gin        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JAM   |   Jam        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JPN   |   Jpn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ABW   |   Abw        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UMI   |   Umi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NER   |   Ner        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NIU   |   Niu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NFK   |   Nfk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNP   |   Mnp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FSM   |   Fsm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAK   |   Pak        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PHL   |   Phl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    QAT   |   Qat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ROU   |   Rou        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MUS   |   Mus        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IND   |   Ind        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRQ   |   Irq        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SXM   |   Sxm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PCN   |   Pcn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LAO   |   Lao        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LVA   |   Lva        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LIE   |   Lie        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MDG   |   Mdg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MYS   |   Mys        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MDV   |   Mdv        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUM   |   Gum        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MDA   |   Mda        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MSR   |   Msr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OMN   |   Omn        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NPL   |   Npl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANT   |   Ant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CUW   |   Cuw        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOR   |   Nor        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MHL   |   Mhl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COG   |   Cog        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRD   |   Grd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUY   |   Guy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HND   |   Hnd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GNQ   |   Gnq        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ETH   |   Eth        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ERI   |   Eri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FJI   |   Fji        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PYF   |   Pyf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COL   |   Col        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PLW   |   Plw        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CRI   |   Cri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EST   |   Est        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DJI   |   Dji        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NCL   |   Ncl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GEO   |   Geo        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GIB   |   Gib        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRC   |   Grc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GTM   |   Gtm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HUN   |   Hun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LUX   |   Lux        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    URY   |   Ury        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VEN   |   Ven        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YEM   |   Yem        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZMB   |   Zmb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    QZZ   |   Qzz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TMP   |   Tmp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUF   |   Guf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ESH   |   Esh        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PRY   |   Pry        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PER   |   Per        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BEN   |   Ben        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BGR   |   Bgr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AIA   |   Aia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USA   |   Usa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MWI   |   Mwi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MLI   |   Mli        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MTQ   |   Mtq        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MRT   |   Mrt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MEX   |   Mex        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MOZ   |   Moz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BES   |   Bes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NZL   |   Nzl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NGA   |   Nga        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOM   |   Dom        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNG   |   Mng        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DNK   |   Dnk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PRT   |   Prt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REU   |   Reu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ISL   |   Isl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LCA   |   Lca        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    STP   |   Stp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ESP   |   Esp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SSD   |   Ssd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRL   |   Grl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SWZ   |   Swz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SWE   |   Swe        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHE   |   Che        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    THA   |   Tha        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CYM   |   Cym        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CCK   |   Cck        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CUB   |   Cub        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALB   |   Alb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AND   |   And        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ATG   |   Atg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUS   |   Aus        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BHR   |   Bhr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARM   |   Arm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BMU   |   Bmu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BWA   |   Bwa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BLZ   |   Blz        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SLB   |   Slb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KHM   |   Khm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CPV   |   Cpv        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ATF   |   Atf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UGA   |   Uga        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COK   |   Cok        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BHS   |   Bhs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CYP   |   Cyp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MMR   |   Mmr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BDI   |   Bdi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CZE   |   Cze        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARG   |   Arg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BGD   |   Bgd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOL   |   Bol        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BIH   |   Bih        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BVT   |   Bvt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VGB   |   Vgb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRN   |   Brn        |    Available     | Optional     | Allowed |    NA |
<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### merchantFraudAndSecurity

---

tags: [merchantFraudAndSecurity]

---

* Description: Merchant Fraud And Security

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| afdsMerchantAuthBlockStatus| Afds Merchant Auth Block Status        |    AFDS_AUTH_BLOCK   |   Afds Auth Block        |    Available     | Optional     | Allowed |    NA |
|          -                 |                 -                      |    AFDS_AUTH_UNBLOCK   |   Afds Auth Unblock        |    Available     | Optional     | Allowed |    NA |
<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| afdsMerchantAuthBlockStatus| Afds Merchant Auth Block Status        |    AFDS_AUTH_BLOCK   |   Afds Auth Block        |    Available     | Optional     | Allowed |    NA |
|          -                 |                 -                      |    AFDS_AUTH_UNBLOCK   |   Afds Auth Unblock        |    Available     | Optional     | Allowed |    NA |
<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### merchantFrontEnds

---

tags: [merchantFrontEnds]

---

* Description: Merchant Front Ends

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| authNetworkCode1| Name Of The Network        |    WALMART_BEST_PRICE   |   Walmart Best Price        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VITAL   |   Vital        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOUTH   |   South        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OTHER   |   Other        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CARDNET   |   Cardnet        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COMPASS   |   Compass        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NASHVILLE   |   Nashville        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MDI   |   Mdi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAPER   |   Paper        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TELECHECK   |   Telecheck        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FDR   |   Fdr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TELEMONEY   |   Telemoney        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAPP   |   Mapp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NDC   |   Ndc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BUYPASS   |   Buypass        |    Available     | Optional     | Allowed |    NA |
| authNetworkCode2      | Name Of The Secondary Network        |    NDC   |   Ndc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAPER   |   Paper        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COMPASS   |   Compass        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TELECHECK   |   Telecheck        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAPP   |   Mapp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OTHER   |   Other        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FDR   |   Fdr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BUYPASS   |   Buypass        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TELEMONEY   |   Telemoney        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOUTH   |   South        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WALMART_BEST_PRICE   |   Walmart Best Price        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NASHVILLE   |   Nashville        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VITAL   |   Vital        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CARDNET   |   Cardnet        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MDI   |   Mdi        |    Available     | Optional     | Allowed |    NA |
| authNetworkSecurityCode1| Code Which Can Be Used To Determine The Front End Network        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| authNetworkSecurityCode2| Code which is being used to determine the front end network         |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| authNetworkCode1| Name Of The Network        |    WALMART_BEST_PRICE   |   Walmart Best Price        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VITAL   |   Vital        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOUTH   |   South        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OTHER   |   Other        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CARDNET   |   Cardnet        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COMPASS   |   Compass        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NASHVILLE   |   Nashville        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MDI   |   Mdi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAPER   |   Paper        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TELECHECK   |   Telecheck        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FDR   |   Fdr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TELEMONEY   |   Telemoney        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAPP   |   Mapp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NDC   |   Ndc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BUYPASS   |   Buypass        |    Available     | Optional     | Allowed |    NA |
| authNetworkCode2      | Name Of The Secondary Network        |    NDC   |   Ndc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAPER   |   Paper        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COMPASS   |   Compass        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TELECHECK   |   Telecheck        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAPP   |   Mapp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OTHER   |   Other        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FDR   |   Fdr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BUYPASS   |   Buypass        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TELEMONEY   |   Telemoney        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOUTH   |   South        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WALMART_BEST_PRICE   |   Walmart Best Price        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NASHVILLE   |   Nashville        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VITAL   |   Vital        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CARDNET   |   Cardnet        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MDI   |   Mdi        |    Available     | Optional     | Allowed |    NA |
| authNetworkSecurityCode1| Code Which Can Be Used To Determine The Front End Network        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| authNetworkSecurityCode2| Code which is being used to determine the front end network         |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### merchantLiteConfig

---

tags: [merchantLiteConfig]

---

* Description: Merchant Lite Configuration

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| merchantLiteAuthLimitAmount  | Merchant Lite Auth Limit Amount                   |    STRING - Digits only - no decimal (max length - 5, min - 1)   |   String - Digits Only - No Decimal (Max Length: 5, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| merchantLiteCreditLimitAmount| Merchant Lite Credit Limit Amount                 |    STRING - Digits only - no decimal (max length - 5, min - 1)   |   String - Digits Only - No Decimal (Max Length: 5, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| merchantLiteSalesLimitAmount | Merchant Lite Sales Limit Amount                  |    STRING - Digits only - no decimal (max length - 5, min - 1)   |   String - Digits Only - No Decimal (Max Length: 5, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| merchantLiteAuthLimitAmount  | Merchant Lite Auth Limit Amount                   |    STRING - Digits only - no decimal (max length - 5, min - 1)   |   String - Digits Only - No Decimal (Max Length: 5, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| merchantLiteCreditLimitAmount| Merchant Lite Credit Limit Amount                 |    STRING - Digits only - no decimal (max length - 5, min - 1)   |   String - Digits Only - No Decimal (Max Length: 5, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |
| merchantLiteSalesLimitAmount | Merchant Lite Sales Limit Amount                  |    STRING - Digits only - no decimal (max length - 5, min - 1)   |   String - Digits Only - No Decimal (Max Length: 5, Min Length: 1)        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### merchantMunicipality

---

tags: [merchantMunicipality]

---

* Description: Merchant Municipality

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| municipalityTaxInd| Municipality Tax Indicator        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| municipilatityCode| Municipality Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| municipalityTaxInd| Municipality Tax Indicator        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| municipilatityCode| Municipality Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab-end -->

### merchantPortfolioType

---

tags: [merchantPortfolioType]

---

* Description: Merchant Portfolio Type

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| byTransactionCount| Transaction Count Portfolio Size        |    MIDMARKET   |   Midmarket        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SMB   |   Smb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NATIONAL   |   National        |    Available     | Optional     | Allowed |    NA |
| offeringType| Offering Type        |    NATIONAL   |   National        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SMB   |   Smb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MIDMARKET   |   Midmarket        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| byTransactionCount| Transaction Count Portfolio Size        |    MIDMARKET   |   Midmarket        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SMB   |   Smb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NATIONAL   |   National        |    Available     | Optional     | Allowed |    NA |
| offeringType| Offering Type        |    NATIONAL   |   National        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SMB   |   Smb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MIDMARKET   |   Midmarket        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### merchantPricingStructure

---

tags: [merchantPricingStructure]

---

* Description: Merchant Pricing Structure

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|          -            |                 -                    |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|          -            |                 -                    |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### miniPromoForStationOutage

---

tags: [miniPromoForStationOutage]

---

* Description: Mini Promo For Station Outage

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractDate| Contract Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |
<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| contractDate| Contract Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |
<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### miscReporting

---

tags: [miscReporting]

---

* Description: MISC

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| enhancedReportingIndicator| Enhanced Reporting Indicator        |    ALL_TRANS_FUNDED_CHG_FEE   |   All Trans Funded Chg Fee        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAI2_PINNACLE   |   Bai2 Pinnacle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PINNACLE   |   Pinnacle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MERCHANT_LOCATION_SUMM_J   |   Merchant Location Summ J        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TRANS_SETTLED_REP   |   All Trans Settled Rep        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TRANS_SETTLED_CHG_FEE   |   All Trans Settled Chg Fee        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TRANS_SETTLED_I   |   All Trans Settled I        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLY_TRANS_FUNDED_E   |   Only Trans Funded E        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAI2   |   Bai2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLY_TRANS_FUNDED_REP   |   Only Trans Funded Rep        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EDI CONF   |   Edi Conf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_AUTOBILLBK_SYS   |   Not Autobillbk Sys        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TRANS_SETTLED_F   |   All Trans Settled F        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MERCHANT_LOCATION_SUMM_G   |   Merchant Location Summ G        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLY_TRANS_FUNDED_H   |   Only Trans Funded H        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EDI_CONF_PINNACLE   |   Edi Conf Pinnacle        |    Available     | Optional     | Allowed |    NA |
| farsFiscalDate        | Financial Account Reporting System Fiscal Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| farsMediaTypeCode     | Financial Activity Reporting System Media Type Code        |    TAPE_REEL_16100_BPI   |   Tape Reel 16100 Bpi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CATRIDGE_COMP   |   Catridge Comp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CARTRIDGE_NON_COMP   |   Cartridge Non Comp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TAPE_REEL_3250_BPI   |   Tape Reel 3250 Bpi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|farsReportFrequencyCode| Financial Activity Reporting System Report Frequency Code        |    MNTH_LAST_SAT   |   Mnth Last Sat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_MON   |   Wkly 1St 3Rd Mon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_TUE_THU   |   Wkly Tue Thu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_SAT   |   Wkly Sat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_WED_FRI   |   Wkly Wed Fri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_TUE   |   Wkly Tue        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SEMIMNTH_LAST_BUSS_DAY   |   Semimnth Last Buss Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SUN_2ND_LAST_WEEK   |   Sun 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_TUE_FRI   |   Wkly Tue Fri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_TUE_SAT   |   Wkly Tue Sat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUE_2ND_LAST_WEEK   |   Tue 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_TUE   |   Mnth Last Tue        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_WED   |   Mnth Last Wed        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_WED   |   Wkly 1St 3Rd Wed        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    QTRLY_LAST_BUSS_DAY   |   Qtrly Last Buss Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MON_2ND_LAST_WEEK   |   Mon 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DLY   |   Dly        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_TUE   |   Wkly 1St 3Rd Tue        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_SUN   |   Wkly 1St 3Rd Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_FARS_ENTITLED   |   Not Fars Entitled        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_THURS   |   Wkly Thurs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_WED_SUN   |   Wkly Wed Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MTHLY_LAST_BUSS_DAY   |   Mthly Last Buss Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    28_DAYS_CYCLE   |   28 Days Cycle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAT_2ND_LAST_WEEK   |   Sat 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_THURS   |   Mnth Last Thurs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MTHLY_LAST_CAL_DAY   |   Mthly Last Cal Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_MON_TUE   |   Wkly Mon Tue        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    QTRLY_LAST_CAL_DAY   |   Qtrly Last Cal Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_FRI_SUN   |   Wkly Fri Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_MON   |   Wkly Mon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    28_35_28_DAYS_CYCLE   |   28 35 28 Days Cycle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRI_2ND_LAST_WEEK   |   Fri 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WED_2ND_LAST_WEEK   |   Wed 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_SUN   |   Mnth Last Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FLEX_DAYS   |   Flex Days        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_FRI   |   Wkly 1St 3Rd Fri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_WED   |   Wkly Wed        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_MON   |   Mnth Last Mon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_MON_WED   |   Wkly Mon Wed        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_SUN   |   Wkly Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SEMIMNTH_LAST_CAL_DAY   |   Semimnth Last Cal Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_WED_SAT   |   Wkly Wed Sat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_TUE_SUN   |   Wkly Tue Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_THU_SUN   |   Wkly Thu Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_SAT   |   Wkly 1St 3Rd Sat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    THU_2ND_LAST_WEEK   |   Thu 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_FRI   |   Mnth Last Fri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_FRI   |   Wkly Fri        |    Available     | Optional     | Allowed |    NA |  

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| enhancedReportingIndicator| Enhanced Reporting Indicator        |    ALL_TRANS_FUNDED_CHG_FEE   |   All Trans Funded Chg Fee        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAI2_PINNACLE   |   Bai2 Pinnacle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PINNACLE   |   Pinnacle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MERCHANT_LOCATION_SUMM_J   |   Merchant Location Summ J        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TRANS_SETTLED_REP   |   All Trans Settled Rep        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TRANS_SETTLED_CHG_FEE   |   All Trans Settled Chg Fee        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TRANS_SETTLED_I   |   All Trans Settled I        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLY_TRANS_FUNDED_E   |   Only Trans Funded E        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAI2   |   Bai2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLY_TRANS_FUNDED_REP   |   Only Trans Funded Rep        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EDI CONF   |   Edi Conf        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_AUTOBILLBK_SYS   |   Not Autobillbk Sys        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_TRANS_SETTLED_F   |   All Trans Settled F        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MERCHANT_LOCATION_SUMM_G   |   Merchant Location Summ G        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLY_TRANS_FUNDED_H   |   Only Trans Funded H        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EDI_CONF_PINNACLE   |   Edi Conf Pinnacle        |    Available     | Optional     | Allowed |    NA |
| farsFiscalDate        | Financial Account Reporting System Fiscal Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| farsMediaTypeCode     | Financial Activity Reporting System Media Type Code        |    TAPE_REEL_16100_BPI   |   Tape Reel 16100 Bpi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CATRIDGE_COMP   |   Catridge Comp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CARTRIDGE_NON_COMP   |   Cartridge Non Comp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TAPE_REEL_3250_BPI   |   Tape Reel 3250 Bpi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|farsReportFrequencyCode| Financial Activity Reporting System Report Frequency Code        |    MNTH_LAST_SAT   |   Mnth Last Sat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_MON   |   Wkly 1St 3Rd Mon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_TUE_THU   |   Wkly Tue Thu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_SAT   |   Wkly Sat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_WED_FRI   |   Wkly Wed Fri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_TUE   |   Wkly Tue        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SEMIMNTH_LAST_BUSS_DAY   |   Semimnth Last Buss Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SUN_2ND_LAST_WEEK   |   Sun 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_TUE_FRI   |   Wkly Tue Fri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_TUE_SAT   |   Wkly Tue Sat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUE_2ND_LAST_WEEK   |   Tue 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_TUE   |   Mnth Last Tue        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_WED   |   Mnth Last Wed        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_WED   |   Wkly 1St 3Rd Wed        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    QTRLY_LAST_BUSS_DAY   |   Qtrly Last Buss Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MON_2ND_LAST_WEEK   |   Mon 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DLY   |   Dly        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_TUE   |   Wkly 1St 3Rd Tue        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_SUN   |   Wkly 1St 3Rd Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_FARS_ENTITLED   |   Not Fars Entitled        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_THURS   |   Wkly Thurs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_WED_SUN   |   Wkly Wed Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MTHLY_LAST_BUSS_DAY   |   Mthly Last Buss Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    28_DAYS_CYCLE   |   28 Days Cycle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAT_2ND_LAST_WEEK   |   Sat 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_THURS   |   Mnth Last Thurs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MTHLY_LAST_CAL_DAY   |   Mthly Last Cal Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_MON_TUE   |   Wkly Mon Tue        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    QTRLY_LAST_CAL_DAY   |   Qtrly Last Cal Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_FRI_SUN   |   Wkly Fri Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_MON   |   Wkly Mon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    28_35_28_DAYS_CYCLE   |   28 35 28 Days Cycle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRI_2ND_LAST_WEEK   |   Fri 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WED_2ND_LAST_WEEK   |   Wed 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_SUN   |   Mnth Last Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FLEX_DAYS   |   Flex Days        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_FRI   |   Wkly 1St 3Rd Fri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_WED   |   Wkly Wed        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_MON   |   Mnth Last Mon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_MON_WED   |   Wkly Mon Wed        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_SUN   |   Wkly Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SEMIMNTH_LAST_CAL_DAY   |   Semimnth Last Cal Day        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_WED_SAT   |   Wkly Wed Sat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_TUE_SUN   |   Wkly Tue Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_THU_SUN   |   Wkly Thu Sun        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_1ST_3RD_SAT   |   Wkly 1St 3Rd Sat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    THU_2ND_LAST_WEEK   |   Thu 2Nd Last Week        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MNTH_LAST_FRI   |   Mnth Last Fri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WKLY_FRI   |   Wkly Fri        |    Available     | Optional     | Allowed |    NA |  

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### miscellaneous

---

tags: [miscellaneous]

---

* Description: miscellaneous

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| SECURITY_EMAIL| Security contact email        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| accountingUnitCode| Accounting Unit Code        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| aggregatorMerchantIndicator| Aggregator Merchant Indicator        |    NOT_AN_AGGREGATOR   |   Not An Aggregator        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PSP_CHARITABLE_MERCHANT   |   Psp Charitable Merchant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PSP_SELECTIVE_ACCEPTANCE   |   Psp Selective Acceptance        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHARITABLE_MERCHANT   |   Charitable Merchant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SELECTIVE_ACCEPTANCE   |   Selective Acceptance        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PSP_MERCHANT   |   Psp Merchant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GOVT_AND_EDU_PAYMENT_PROGRAM   |   Govt And Edu Payment Program        |    Available     | Optional     | Allowed |    NA |
| arpCode| ARP Code        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| bankingCategoryCode| Banking Category Code        |    OTHER_SILVER   |   Other Silver        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OTHER   |   Other        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BBG_SILVER   |   Bbg Silver        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WHOLESALE_BRONZE   |   Wholesale Bronze        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RETAIL_SILVER   |   Retail Silver        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OTHER_BRONZE   |   Other Bronze        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BBG   |   Bbg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OTHER_GOLD   |   Other Gold        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WHOLESALE_GOLD   |   Wholesale Gold        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RETAIL_GOLD   |   Retail Gold        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RETAIL   |   Retail        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WHOLESALE   |   Wholesale        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WHOLESALE_SILVER   |   Wholesale Silver        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BBG_BRONZE   |   Bbg Bronze        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BBG_GOLD   |   Bbg Gold        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RETAIL_BRONZE   |   Retail Bronze        |    Available     | Optional     | Allowed |    NA |
|  -  |    -    |    NONE   |   Blank Value        |    Available     | Optional     | Allowed |    NA |
| branchDepositorIndicator| Branch Depositor Indicator  |    YES   |   Yes  |  Available | Optional | Allowed | NA |
|   -  |   -   |    NO   |   No        |    Available     | Optional     | Allowed |  NA |
|   -  |   -   |    NONE   |   None    |    Available     | Optional     | Allowed |  NA |
| branchLongNumber| Branch Long Number        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| branchShortNumber| Branch Short Number        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| caseManagementIndicator| Case Management Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| cashManagementIndicator| Cash Management Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| cmsServiceCodes| CMS Service Codes        |       |           |    Available     | Optional     | Allowed |    NA |
| descriptorEntitledIndicator| Descriptor Entitled Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| domesticForeignIndicator| DomesticForeignIndicator        |    DOM_MASTER_DESCRIPTION   |   Dom Master Description        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOM_FGN_INTERCHANGE_DESC   |   Dom Fgn Interchange Desc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FGN_MASTER_DESCRIPTION   |   Fgn Master Description        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AAFES_NAVY_MASTER_DESC   |   Aafes Navy Master Desc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AAFES_NAVY_USENEW_DESC   |   Aafes Navy Usenew Desc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOM_FGN_USENEW_DESC   |   Dom Fgn Usenew Desc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FGN_USENEW_DESCRIPTION   |   Fgn Usenew Description        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOM_USENEW_DESCRIPTION   |   Dom Usenew Description        |    Available     | Optional     | Allowed |    NA |
|   -    |    -    |    DOM_USENEW_DESCRIPTION   |   Dom Usenew Description   |    Available  | Optional  | Allowed |  NA |
|   -    |    -    |    DOM_FGN_ALT_DESC   |   Dom FGN ALT Description   |    Available  | Optional  | Allowed |  NA |
|   -    |    -    |    DOM_FGN_DBA_DESC   |   Dom FGN DBA Description   |    Available  | Optional  | Allowed |  NA |
| emailtypecode| Type of Email Address        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| emvIndicator| EMV Chip Enabled Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                                   |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| faxIndicator| Fax Indicator        |    EIDS_EMAIL   |   Eids Email        |    Available     | Optional     | Allowed |    NA |
|             |                      |    INFO_FAX   |   Info Fax        |    Available     | Optional     | Allowed |    NA |
|             |                      |    FAX   |   Fax        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CM_ALERT   |   Cm Alert        |    Available     | Optional     | Allowed |    NA |
|             |                      |    EIDS   |   Eids        |    Available     | Optional     | Allowed |    NA |
|             |                      |    PC_TO_PC   |   Pc To Pc        |    Available     | Optional     | Allowed |    NA |
|             |                      |    MAIL   |   Mail        |    Available     | Optional     | Allowed |    NA |
|             |                      |    EIDS_AUTOFAX   |   Eids Autofax        |    Available     | Optional     | Allowed |    NA |
| fireSafetyActIndicator| Fire Safety Act Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|             |              |    NONE   |   Blank Value        |    Available     | Optional     | Allowed |    NA    |  
| imprintersCount| Imprinter Quantity Bill Number        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |  
| internetCode| Internet Code        |    INTERNET_MERCHANT   |   Internet Merchant        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    FISERV_GATEWAY   |   Fiserv Gateway        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    DIAL_SOLUTION   |   Dial Solution        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    LEASED_LINE   |   Leased Line        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    CERT_GATEWAY   |   Cert Gateway        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    NON_PARTICIPANT   |   Non Participant        |    Available     | Optional     | Allowed |    NA |
|       |         |    NONE   |   None        |    Available     | Optional     | Allowed |    NA    | 
| leaseCompanyCode| Lease Company Code   |    CIT   |   CIT    |    Available     | Optional     | Allowed |    NA   |
|    |   |    FDLS   |   FDLS    |    Available     | Optional     | Allowed |   NA  |
|    |   |    3RD_PARTY   |   3RD_PARTY    |    Available     | Optional     | Allowed |   NA  |
|    |   |    NORTHERN   |   NORTHERN    |    Available     | Optional     | Allowed |   NA  |
|    |   |    LADCO   |   LADCO    |    Available     | Optional     | Allowed |   NA  |
|    |   |    NONE   |   Blank Value    |    Available     | Optional     | Allowed |   NA  |
|    |   |    NOT_SPECIFIED   |   Not Specified    |    Available     | Optional     | Allowed |   NA  |
| loyaltyProcessingCode| Loyalty Processing Code |    NO   |   No   |    Available     | Optional     | Allowed |  NA |  
|                    |            |    YES   |   Yes       |    Available     | Optional     | Allowed |    NA |  
|                    |            |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |  
| ncptAmount| Anticipated Mc/Visa® net contribution per transaction        |       |           |    Available     | Optional     | Allowed |    NA |  
| nrptAmount| Anticipated Mc/Visa® net revenue percentage        |       |           |    Available     | Optional     | Allowed |    NA |  
| oilTradeClassCode| Class of Trade code for specific client usage        |    YES, NO   |   Yes, No        |    Available     | Optional     | Allowed |    NA |  
| paymentEssentialsCode| Payment essentials bundle code        |    BUNDLE8   |   Bundle8        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_1   |   Wells Bundle 1        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE9   |   Bundle9        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE6   |   Bundle6        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE1   |   Bundle1        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE14   |   Bundle14        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE3   |   Bundle3        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_4   |   Wells Bundle 4        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE18   |   Bundle18        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_5   |   Wells Bundle 5        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE11   |   Bundle11        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE16   |   Bundle16        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE12   |   Bundle12        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_2   |   Wells Bundle 2        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE7   |   Bundle7        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE19   |   Bundle19        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE13   |   Bundle13        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE10   |   Bundle10        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE2   |   Bundle2        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_6   |   Wells Bundle 6        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE20   |   Bundle20        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_3   |   Wells Bundle 3        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE5   |   Bundle5        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE17   |   Bundle17        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE15   |   Bundle15        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE4   |   Bundle4        |    Available     | Optional     | Allowed |    NA |  
| rawDataAddendumIndicator| Raw Data Addendum Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |  
| rejectNotifyCode| Reject Notification Code        |    OUTLET_DBA_ADDR   |   Outlet Dba Addr        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    OUTLET_BILLTO_ADDR   |   Outlet Billto Addr        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    CHAIN_BILLTO_ADDR   |   Chain Billto Addr        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    CHAIN_DBA_ADDR   |   Chain Dba Addr        |    Available     | Optional     | Allowed |    NA |  
| restaurantGroupCode| Restaurant Group Code        |    NOT_MEMBER   |   Not Member        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    SIG_Optional   |   Sig Optional        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    GOLDEN_RETRIEVER   |   Golden Retriever        |    Available     | Optional     | Allowed |    NA |  
| revenueBookedDate| Revenue Booked Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |  
| specialNationalAccountIndicator| Special National Account Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |  
| techEmail| Tech Email        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |  
| volumeTierIndicator| Volume Tier Indicator        |    STRING - Alphanumeric   |   String - Alphanumeric        |    Available     | Optional     | Allowed |    NA |  
| volumeTierInterchangeFeeIndicator| Volume Tier Interchange Fee Indicator        |    TIER_10   |   Tier 10        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_17   |   Tier 17        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_04   |   Tier 04        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_41   |   Tier 41        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    MP   |   Mp        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_09   |   Tier 09        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    NOT_PARTICIPATING   |   Not Participating        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_18   |   Tier 18        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_22   |   Tier 22        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_33   |   Tier 33        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_20   |   Tier 20        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_11   |   Tier 11        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_30   |   Tier 30        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_19   |   Tier 19        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_08   |   Tier 08        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_01   |   Tier 01        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_39   |   Tier 39        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_21   |   Tier 21        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_13   |   Tier 13        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_23   |   Tier 23        |    Available     | Optional     | Allowed |    NA |  
| xrefIndicator| Xref Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| doNotChargeVee | Do Not Charge Vee for Omnipay  |    STRING   |   String   |    Available     | Optional | Allowed |    NA |
| online | Online Indicator for Omnipay Merchant |    NO   |   No  |    Available     | Optional     | Allowed |    NA |
|  -  |  -  |  YES   |   Yes  |  Available | Optional | Allowed |    NA  |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| SECURITY_EMAIL| Security contact email        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| accountingUnitCode| Accounting Unit Code        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| aggregatorMerchantIndicator| Aggregator Merchant Indicator        |    NOT_AN_AGGREGATOR   |   Not An Aggregator        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PSP_CHARITABLE_MERCHANT   |   Psp Charitable Merchant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PSP_SELECTIVE_ACCEPTANCE   |   Psp Selective Acceptance        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHARITABLE_MERCHANT   |   Charitable Merchant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SELECTIVE_ACCEPTANCE   |   Selective Acceptance        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PSP_MERCHANT   |   Psp Merchant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GOVT_AND_EDU_PAYMENT_PROGRAM   |   Govt And Edu Payment Program        |    Available     | Optional     | Allowed |    NA |
| arpCode| ARP Code        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| bankingCategoryCode| Banking Category Code        |    OTHER_SILVER   |   Other Silver        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OTHER   |   Other        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BBG_SILVER   |   Bbg Silver        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WHOLESALE_BRONZE   |   Wholesale Bronze        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RETAIL_SILVER   |   Retail Silver        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OTHER_BRONZE   |   Other Bronze        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BBG   |   Bbg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OTHER_GOLD   |   Other Gold        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WHOLESALE_GOLD   |   Wholesale Gold        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RETAIL_GOLD   |   Retail Gold        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RETAIL   |   Retail        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WHOLESALE   |   Wholesale        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WHOLESALE_SILVER   |   Wholesale Silver        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BBG_BRONZE   |   Bbg Bronze        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BBG_GOLD   |   Bbg Gold        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RETAIL_BRONZE   |   Retail Bronze        |    Available     | Optional     | Allowed |    NA |
|  -  |    -    |    NONE   |   Blank Value        |    Available     | Optional     | Allowed |    NA |
| branchDepositorIndicator| Branch Depositor Indicator  |    YES   |   Yes  |  Available | Optional | Allowed | NA |
|   -  |   -   |    NO   |   No        |    Available     | Optional     | Allowed |  NA |
|   -  |   -   |    NONE   |   None    |    Available     | Optional     | Allowed |  NA |
| branchLongNumber| Branch Long Number        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| branchShortNumber| Branch Short Number        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| caseManagementIndicator| Case Management Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| cashManagementIndicator| Cash Management Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| cmsServiceCodes| CMS Service Codes        |       |           |    Available     | Optional     | Allowed |    NA |
| descriptorEntitledIndicator| Descriptor Entitled Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| domesticForeignIndicator| DomesticForeignIndicator        |    DOM_MASTER_DESCRIPTION   |   Dom Master Description        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOM_FGN_INTERCHANGE_DESC   |   Dom Fgn Interchange Desc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FGN_MASTER_DESCRIPTION   |   Fgn Master Description        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AAFES_NAVY_MASTER_DESC   |   Aafes Navy Master Desc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AAFES_NAVY_USENEW_DESC   |   Aafes Navy Usenew Desc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOM_FGN_USENEW_DESC   |   Dom Fgn Usenew Desc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FGN_USENEW_DESCRIPTION   |   Fgn Usenew Description        |    Available     | Optional     | Allowed |    NA |
|   -    |    -    |    DOM_USENEW_DESCRIPTION   |   Dom Usenew Description   |    Available  | Optional  | Allowed |  NA |
|   -    |    -    |    DOM_FGN_ALT_DESC   |   Dom FGN ALT Description   |    Available  | Optional  | Allowed |  NA |
|   -    |    -    |    DOM_FGN_DBA_DESC   |   Dom FGN DBA Description   |    Available  | Optional  | Allowed |  NA |
| emailtypecode| Type of Email Address        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| emvIndicator| EMV Chip Enabled Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|             |                                   |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| faxIndicator| Fax Indicator        |    EIDS_EMAIL   |   Eids Email        |    Available     | Optional     | Allowed |    NA |
|             |                      |    INFO_FAX   |   Info Fax        |    Available     | Optional     | Allowed |    NA |
|             |                      |    FAX   |   Fax        |    Available     | Optional     | Allowed |    NA |
|             |                      |    CM_ALERT   |   Cm Alert        |    Available     | Optional     | Allowed |    NA |
|             |                      |    EIDS   |   Eids        |    Available     | Optional     | Allowed |    NA |
|             |                      |    PC_TO_PC   |   Pc To Pc        |    Available     | Optional     | Allowed |    NA |
|             |                      |    MAIL   |   Mail        |    Available     | Optional     | Allowed |    NA |
|             |                      |    EIDS_AUTOFAX   |   Eids Autofax        |    Available     | Optional     | Allowed |    NA |
| fireSafetyActIndicator| Fire Safety Act Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  
|             |                      |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|             |              |    NONE   |   Blank Value        |    Available     | Optional     | Allowed |    NA    |  
| imprintersCount| Imprinter Quantity Bill Number        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |  
| internetCode| Internet Code        |    INTERNET_MERCHANT   |   Internet Merchant        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    FISERV_GATEWAY   |   Fiserv Gateway        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    DIAL_SOLUTION   |   Dial Solution        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    LEASED_LINE   |   Leased Line        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    CERT_GATEWAY   |   Cert Gateway        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    NON_PARTICIPANT   |   Non Participant        |    Available     | Optional     | Allowed |    NA |
|       |         |    NONE   |   None        |    Available     | Optional     | Allowed |    NA    |  
| leaseCompanyCode| Lease Company Code   |    CIT   |   CIT    |    Available     | Optional     | Allowed |    NA   |
|    |   |    FDLS   |   FDLS    |    Available     | Optional     | Allowed |   NA  |
|    |   |    3RD_PARTY   |   3RD_PARTY    |    Available     | Optional     | Allowed |   NA  |
|    |   |    NORTHERN   |   NORTHERN    |    Available     | Optional     | Allowed |   NA  |
|    |   |    LADCO   |   LADCO    |    Available     | Optional     | Allowed |   NA  |
|    |   |    NONE   |   Blank Value    |    Available     | Optional     | Allowed |   NA  |
|    |   |    NOT_SPECIFIED   |   Not Specified    |    Available     | Optional     | Allowed |   NA  | 
| loyaltyProcessingCode| Loyalty Processing Code |    NO   |   No   |    Available     | Optional     | Allowed |  NA |  
|                    |            |    YES   |   Yes       |    Available     | Optional     | Allowed |    NA |  
|                    |            |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |  
| ncptAmount| Anticipated Mc/Visa® net contribution per transaction        |       |           |    Available     | Optional     | Allowed |    NA |  
| nrptAmount| Anticipated Mc/Visa® net revenue percentage        |       |           |    Available     | Optional     | Allowed |    NA |  
| oilTradeClassCode| Class of Trade code for specific client usage        |    YES, NO   |   Yes, No        |    Available     | Optional     | Allowed |    NA |  
| paymentEssentialsCode| Payment essentials bundle code        |    BUNDLE8   |   Bundle8        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_1   |   Wells Bundle 1        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE9   |   Bundle9        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE6   |   Bundle6        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE1   |   Bundle1        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE14   |   Bundle14        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE3   |   Bundle3        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_4   |   Wells Bundle 4        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE18   |   Bundle18        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_5   |   Wells Bundle 5        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE11   |   Bundle11        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE16   |   Bundle16        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE12   |   Bundle12        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_2   |   Wells Bundle 2        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE7   |   Bundle7        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE19   |   Bundle19        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE13   |   Bundle13        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE10   |   Bundle10        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE2   |   Bundle2        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_6   |   Wells Bundle 6        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE20   |   Bundle20        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    WELLS_BUNDLE_3   |   Wells Bundle 3        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE5   |   Bundle5        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE17   |   Bundle17        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE15   |   Bundle15        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    BUNDLE4   |   Bundle4        |    Available     | Optional     | Allowed |    NA |  
| rawDataAddendumIndicator| Raw Data Addendum Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |  
| rejectNotifyCode| Reject Notification Code        |    OUTLET_DBA_ADDR   |   Outlet Dba Addr        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    OUTLET_BILLTO_ADDR   |   Outlet Billto Addr        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    CHAIN_BILLTO_ADDR   |   Chain Billto Addr        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    CHAIN_DBA_ADDR   |   Chain Dba Addr        |    Available     | Optional     | Allowed |    NA |  
| restaurantGroupCode| Restaurant Group Code        |    NOT_MEMBER   |   Not Member        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    SIG_Optional   |   Sig Optional        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    GOLDEN_RETRIEVER   |   Golden Retriever        |    Available     | Optional     | Allowed |    NA |  
| revenueBookedDate| Revenue Booked Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |  
| specialNationalAccountIndicator| Special National Account Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |  
| techEmail| Tech Email        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |  
| volumeTierIndicator| Volume Tier Indicator        |    STRING - Alphanumeric   |   String - Alphanumeric        |    Available     | Optional     | Allowed |    NA |  
| volumeTierInterchangeFeeIndicator| Volume Tier Interchange Fee Indicator        |    TIER_10   |   Tier 10        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_17   |   Tier 17        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_04   |   Tier 04        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_41   |   Tier 41        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    MP   |   Mp        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_09   |   Tier 09        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    NOT_PARTICIPATING   |   Not Participating        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_18   |   Tier 18        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_22   |   Tier 22        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_33   |   Tier 33        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_20   |   Tier 20        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_11   |   Tier 11        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_30   |   Tier 30        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_19   |   Tier 19        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_08   |   Tier 08        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_01   |   Tier 01        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_39   |   Tier 39        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_21   |   Tier 21        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_13   |   Tier 13        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    TIER_23   |   Tier 23        |    Available     | Optional     | Allowed |    NA |  
| xrefIndicator| Xref Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |  
|                    |                                       |    NO   |   No        |    Available     | Optional     | Allowed |    NA |  

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| doNotChargeVee| Do Not Charge Vee for Omnipay        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| online| Online Indicator for Omnipay Merchant        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|                    |                                       |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab-end -->

### modelAfterMerchant

---

tags: [modelAfterMerchant]

---

* Description: Model After Merchant For Boarding Usage

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    STANDARD_OFFERING   |   Standard Offering        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### msipDetails

---

tags: [msipDetails]

---

* Description: MSIP Details

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| msipAlternateCityName| MSIP Alternate City Name        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipAlternateMerchantName| MSIP Alternate Merchant Name        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipBacsIndicator| MSIP Bacs Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    0   |   0        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| msipBacsMerchantName| MSIP Bacs Merchant Name        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipCategoryLevelCode| MSIP Category Level Code        |    VAU_MERCHANT   |   Vau Merchant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LIMITED_AMOUNT_TERMINAL   |   Limited Amount Terminal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MRCH_PERFPGM_NOT_ME2ME   |   Mrch Perfpgm Not Me2Me        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_A_CAT_MERCHANT   |   Not A Cat Merchant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ORIGINAL_CREDIT_TRANS   |   Original Credit Trans        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MRCH_PERFPGM_AND_ME2ME   |   Mrch Perfpgm And Me2Me        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNATTEND_WITH_AUTH_CAPA   |   Unattend With Auth Capa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ME_TO_ME   |   Me To Me        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    0   |   0        |    Available     | Optional     | Allowed |    NA |
| msipChainRollupDate| MSIP Chain Rollup Date        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipChainRollupIndicator| MSIP Chain Rollup Indicator        |    3   |   3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    C   |   C        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| msipContactName| MSIP Contact Name        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipFax1Number| MSIP Fax1 Number        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipFax2Number| MSIP Fax2 Number        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipHotCardIndicator| MSIP Hot Card Indicator        |    2   |   2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    3   |   3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    4   |   4        |    Available     | Optional     | Allowed |    NA |
| msipInternationalDialNumber| MSIP International Dial Number        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipMaestroCashbackIndicator | MSIP Maestro Cashback Indicator   |    2   |   2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    3   |   3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    N   |   N        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    C   |   C        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    5   |   5        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| msipMaestroCeilingAmount| MSIP Maestro Ceiling Amount        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipMaestroFloorAmount| MSIP Maestro Floor Amount        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipMaestroFraudProneIndicator| MSIP Maestro Fraud Prone Indicator        |    NORMAL_RISK   |   Normal Risk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HIGHLY_FRAUD_PRONE   |   Highly Fraud Prone        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRAUD_PRONE   |   Fraud Prone        |    Available     | Optional     | Allowed |    NA |
| msipMaestroId| MSIP Maestro Id        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipMaestroMccCode| MSIP Maestro Mcc Code        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipMailToAgentIndicator| MSIP Mail To Agent Indicator        |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    0   |   0        |    Available     | Optional     | Allowed |    NA |
| msipMailToBankIndicator| MSIP Mail To Bank Indicator        |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    1   |   1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
| msipMailToBusinessIndicator| MSIP Mail To Business Indicator        |    0   |   0        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
| msipMailToChainIndicator| MSIP Mail To Chain Indicator        |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    0   |   0        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
| msipMailToCorporationIndicator| MSIP Mail To Corporation Indicator        |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    1   |   1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
| msipMailToOutletIndicator| MSIP Mail To Outlet Indicator        |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    O   |   O        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    1   |   1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
| msipMastercardCurrencyCode| MSIP Mastercard Currency Code        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipNewAccountIndicator| MSIP New Account Indicator        |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    3   |   3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| msipPlasticFormatCode| MSIP Plastic Format Code        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipPlasticRegenerateIndicator| MSIP Plastic Regenerate Indicator        |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    0   |   0        |    Available     | Optional     | Allowed |    NA |
| msipRecourseCode| MSIP Recourse Code        |    MAIL_ORDER_FULL_RECOURSE   |   Mail Order Full Recourse        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MISSING_IMPRINT_FULL_REC   |   Missing Imprint Full Rec        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOTH_MAIL_MISSING   |   Both Mail Missing        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    1   |   1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| msipTerminalCount| MSIP Terminal Count        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipVisaCashbackIndicator| MSIP Visa Cashback Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    5   |   5        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    2   |   2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    N   |   N        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    3   |   3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    C   |   C        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
| msipVisaCeilingAmount| MSIP Visa Ceiling Amount        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipVisaCurrencyCode| MSIP Visa Currency Code        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipVisaFloorAmount| MSIP Visa Floor Amount        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| msipAlternateCityName| MSIP Alternate City Name        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipAlternateMerchantName| MSIP Alternate Merchant Name        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipBacsIndicator| MSIP Bacs Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    0   |   0        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| msipBacsMerchantName| MSIP Bacs Merchant Name        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipCategoryLevelCode| MSIP Category Level Code        |    VAU_MERCHANT   |   Vau Merchant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LIMITED_AMOUNT_TERMINAL   |   Limited Amount Terminal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MRCH_PERFPGM_NOT_ME2ME   |   Mrch Perfpgm Not Me2Me        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_A_CAT_MERCHANT   |   Not A Cat Merchant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ORIGINAL_CREDIT_TRANS   |   Original Credit Trans        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MRCH_PERFPGM_AND_ME2ME   |   Mrch Perfpgm And Me2Me        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNATTEND_WITH_AUTH_CAPA   |   Unattend With Auth Capa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ME_TO_ME   |   Me To Me        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    0   |   0        |    Available     | Optional     | Allowed |    NA |
| msipChainRollupDate| MSIP Chain Rollup Date        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipChainRollupIndicator| MSIP Chain Rollup Indicator        |    3   |   3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    C   |   C        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| msipContactName| MSIP Contact Name        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipFax1Number| MSIP Fax1 Number        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipFax2Number| MSIP Fax2 Number        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipHotCardIndicator| MSIP Hot Card Indicator        |    2   |   2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    3   |   3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    4   |   4        |    Available     | Optional     | Allowed |    NA |
| msipInternationalDialNumber| MSIP International Dial Number        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipMaestroCashbackIndicator | MSIP Maestro Cashback Indicator   |    2   |   2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    3   |   3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    N   |   N        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    C   |   C        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    5   |   5        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| msipMaestroCeilingAmount| MSIP Maestro Ceiling Amount        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipMaestroFloorAmount| MSIP Maestro Floor Amount        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipMaestroFraudProneIndicator| MSIP Maestro Fraud Prone Indicator        |    NORMAL_RISK   |   Normal Risk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HIGHLY_FRAUD_PRONE   |   Highly Fraud Prone        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRAUD_PRONE   |   Fraud Prone        |    Available     | Optional     | Allowed |    NA |
| msipMaestroId| MSIP Maestro Id        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipMaestroMccCode| MSIP Maestro Mcc Code        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipMailToAgentIndicator| MSIP Mail To Agent Indicator        |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    0   |   0        |    Available     | Optional     | Allowed |    NA |
| msipMailToBankIndicator| MSIP Mail To Bank Indicator        |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    1   |   1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
| msipMailToBusinessIndicator| MSIP Mail To Business Indicator        |    0   |   0        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
| msipMailToChainIndicator| MSIP Mail To Chain Indicator        |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    0   |   0        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
| msipMailToCorporationIndicator| MSIP Mail To Corporation Indicator        |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    1   |   1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
| msipMailToOutletIndicator| MSIP Mail To Outlet Indicator        |    USE_DBA_ADDRESS   |   Use Dba Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    O   |   O        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    1   |   1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_SENT   |   No Statement Sent        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_BILL_TO_ADDRESS   |   Use Bill To Address        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_STATEMENT_GENERATED   |   No Statement Generated        |    Available     | Optional     | Allowed |    NA |
| msipMastercardCurrencyCode| MSIP Mastercard Currency Code        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipNewAccountIndicator| MSIP New Account Indicator        |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    3   |   3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| msipPlasticFormatCode| MSIP Plastic Format Code        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipPlasticRegenerateIndicator| MSIP Plastic Regenerate Indicator        |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    0   |   0        |    Available     | Optional     | Allowed |    NA |
| msipRecourseCode| MSIP Recourse Code        |    MAIL_ORDER_FULL_RECOURSE   |   Mail Order Full Recourse        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MISSING_IMPRINT_FULL_REC   |   Missing Imprint Full Rec        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOTH_MAIL_MISSING   |   Both Mail Missing        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    1   |   1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| msipTerminalCount| MSIP Terminal Count        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipVisaCashbackIndicator| MSIP Visa Cashback Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    5   |   5        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    2   |   2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    N   |   N        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    3   |   3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    C   |   C        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
| msipVisaCeilingAmount| MSIP Visa Ceiling Amount        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipVisaCurrencyCode| MSIP Visa Currency Code        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |
| msipVisaFloorAmount| MSIP Visa Floor Amount        |    Not available in API mappings   |   Not Available In Api Mappings        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### mvbEmergingMarkets

---

tags: [mvbEmergingMarkets]

---

* Description: Mvb Emerging Markets

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    VISA_MC_HBR   |   Visa Mc Hbr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CBD_CANNABIS   |   Cbd Cannabis        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LEGAL_GAMBLING   |   Legal Gambling        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DFS   |   Dfs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MSB   |   Msb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SINGLE_MID_PFAC   |   Single Mid Pfac        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    VISA_MC_HBR   |   Visa Mc Hbr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CBD_CANNABIS   |   Cbd Cannabis        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LEGAL_GAMBLING   |   Legal Gambling        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DFS   |   Dfs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MSB   |   Msb        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SINGLE_MID_PFAC   |   Single Mid Pfac        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### nationalAccountId

---

tags: [nationalAccountId]

---

* Description: National Account Underwriting Account Id

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| nationalAccountId| National account id        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| nationalAccountId| National account id        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### omahaDebitSuspenseItemsRelease

---

tags: [omahaDebitSuspenseItemsRelease]

---

* Description: Omaha Dd-623 Debit  Suspense Items Release - Channel Level

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### onBoardingDetails

---

tags: [onBoardingDetails]

---

* Description: OnBoarding Details

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| boardingOriginCode| Legacy field boarding origin code        |    MERCURY   |   Mercury        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    BAM   |   Bam        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    EMERALD   |   Emerald        |    Available     | Required     | Allowed |    NA |
|   -   |    -   |    NONE   |   Blank Value  |    Available     | Required     | Allowed |    NA    |
| boardingSourceCode| Code which indicates what boarding tool or process was used        |    UAL   |   Ual        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    CONVERTED_ACCT   |   Converted Acct        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    AMA_CLICK_TO_AGREE   |   Ama Click To Agree        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    MERCURY   |   Mercury        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    AMA   |   Ama        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    HIERARCHY_ADD   |   Hierarchy Add        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    ACCESS_ONE   |   Access One        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    AMA _WEB   |   Ama  Web        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    FD_SNAP   |   Fd Snap        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    COPILOT_N   |   Copilot N        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    BAM   |   Bam        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    COPILOT_O   |   Copilot O        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    FD_MARKETPLACE   |   Fd Marketplace        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    PARTNER_REFERAL   |   Partner Referal        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    SNAP_MER_LITE   |   Snap Mer Lite        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    GSB_BOARDING   |   Gsb Boarding        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    AMA DE   |   Ama De        |    Available     | Required     | Allowed |    NA |
|   -   |   -  |    VAPP_BRICK_AND_MORTAR   |   VAPP Brick and Mortar   |    Available     | Required     | Allowed |  NA |
|   -   |   -  |    TRACES   |   Traces   |    Available     | Required     | Allowed |  NA |
|   -   |   -  |    NONE   |   Blank Value   |    Available     | Required     | Allowed |  NA |
| boardingTypeCode| Boarding Type Code |    NEW_ACCOUNT   |  New Account |  Available | Required  | Allowed | NA |
|   -   |    -   |    ADDITIONAL_OUTLET   |   Additional Outlet  |    Available     | Required  | Allowed |  NA |
|   -   |    -   |    BATCH_FEED   |   Batch Feed  |    Available     | Required  | Allowed |  NA |
| convertedAccountDate| Converted Account Date        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| convertedAccountIndicator| Converted Account Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| linkBackwardMerchantId| Link Backward Merchant Id        |    STRING containing digits only - MERCHANT ID   |   String Containing Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| linkForwardMerchantId| Link Forward Merchant Id        |    STRING containing digits only - MERCHANT ID   |   String Containing Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| boardingOriginCode| Legacy field boarding origin code        |    MERCURY   |   Mercury        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    BAM   |   Bam        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    EMERALD   |   Emerald        |    Available     | Required     | Allowed |    NA |
|   -   |    -   |    NONE   |   Blank Value  |    Available     | Required     | Allowed |    NA    |
| boardingSourceCode| Code which indicates what boarding tool or process was used        |    UAL   |   Ual        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    CONVERTED_ACCT   |   Converted Acct        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    AMA_CLICK_TO_AGREE   |   Ama Click To Agree        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    MERCURY   |   Mercury        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    AMA   |   Ama        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    HIERARCHY_ADD   |   Hierarchy Add        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    ACCESS_ONE   |   Access One        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    AMA _WEB   |   Ama  Web        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    FD_SNAP   |   Fd Snap        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    COPILOT_N   |   Copilot N        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    BAM   |   Bam        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    COPILOT_O   |   Copilot O        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    FD_MARKETPLACE   |   Fd Marketplace        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    PARTNER_REFERAL   |   Partner Referal        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    SNAP_MER_LITE   |   Snap Mer Lite        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    GSB_BOARDING   |   Gsb Boarding        |    Available     | Required     | Allowed |    NA |
|          -            |                 -                    |    AMA DE   |   Ama De        |    Available     | Required     | Allowed |    NA |
|   -   |   -  |    VAPP_BRICK_AND_MORTAR   |   VAPP Brick and Mortar   |    Available     | Required     | Allowed |  NA |
|   -   |   -  |    TRACES   |   Traces   |    Available     | Required     | Allowed |  NA |
|   -   |   -  |    NONE   |   Blank Value   |    Available     | Required     | Allowed |  NA |
| boardingTypeCode| Boarding Type Code |    NEW_ACCOUNT   |  New Account |  Available | Required  | Allowed | NA |
|   -   |    -   |    ADDITIONAL_OUTLET   |   Additional Outlet  |    Available     | Required  | Allowed |  NA |
|   -   |    -   |    BATCH_FEED   |   Batch Feed  |    Available     | Required  | Allowed |  NA |
| convertedAccountDate| Converted Account Date        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| convertedAccountIndicator| Converted Account Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| linkBackwardMerchantId| Link Backward Merchant Id        |    STRING containing digits only - MERCHANT ID   |   String Containing Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| linkForwardMerchantId| Link Forward Merchant Id        |    STRING containing digits only - MERCHANT ID   |   String Containing Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### panMasking

---

tags: [panMasking]

---

* Description: Pan Masking

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|       offeringType       |              Offering Type          |    APPLY_PAN_MASKING   |   Apply Pan Masking        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|       offeringType       |              Offering Type          |    APPLY_PAN_MASKING   |   Apply Pan Masking        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### pathwardBankwire

---

tags: [pathwardBankwire]

---

* Description: Pathward Bankwire

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| beneficiaryCity| Beneficiary City        |       |           |    Available     | Optional     | Allowed |    NA |
| beneficiaryStateCode| Beneficiary State Code        |       |           |    Available     | Optional     | Allowed |    NA |
| beneficiaryStreetAddress| Beneficiary Street Address(No Po Box)        |       |           |    Available     | Optional     | Allowed |    NA |
| beneficiaryZipCode| Beneficiary Zip Code        |       |           |    Available     | Optional     | Allowed |    NA |
| futureUse1| Future Use 1        |       |           |    Available     | Optional     | Allowed |    NA |
| futureUse2| Future Use 2        |       |           |    Available     | Optional     | Allowed |    NA |
| seeBnfOnFndTab| See Bnf On Fnd Tab        |    SEE_BNF_ON_FND_TAB   |   See Bnf On Fnd Tab        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### pathwardEmergingMarkets

---

tags: [pathwardEmergingMarkets]

---

* Description: Pathward Emerging Markets

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|     offeringType      |         Offering Type                |    NON_FI_LENDER   |   Non Fi Lender        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SINGLE_MID_MRKTPLACE   |   Single Mid Mrktplace        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MSB_CRYPTO_NFT   |   Msb Crypto Nft        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DFS   |   Dfs        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DCC   |   Dcc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLINE_FIREARMS   |   Online Firearms        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    STAGED_DIGITAL_WALLET   |   Staged Digital Wallet        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MULTIPLE   |   Multiple        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CRUISE_LINES   |   Cruise Lines        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TBD   |   Tbd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LEGAL_GAMBLING   |   Legal Gambling        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SINGLE_MID_PFAC   |   Single Mid Pfac        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CBD_CAT_1   |   Cbd Cat 1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CBD_CAT_2   |   Cbd Cat 2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAYPAL_EXCEPTION   |   Paypal Exception        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AIRLINES   |   Airlines        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### paymentFacilitator

---

tags: [paymentFacilitator]

---

* Description: Payment Service Provider/Payment Facilitator

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| directPfFlag| Direct Pf Flag        |    A_AMOB_1MM   |   A Amob 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    V_VI_1MM   |   V Vi 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    M_MC_1MM   |   M Mc 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    W_MC_VI_AMOB_1MM   |   W Mc Vi Amob 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    X_VI_AMOB_1MM   |   X Vi Amob 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    R_MC_VI_1MM   |   R Mc Vi 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    T_MC_AMOB_1MM   |   T  Mc Amob 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LEGACY   |   Legacy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GLOBAL   |   Global        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MARKETPLACE_CLIENT   |   Marketplace Client        |    Available     | Optional     | Allowed |    NA |
| parentId| Parent ID        |       |           |    Available     | Optional     | Allowed |    NA |
| participantType| Participant Type        |    C_PARTICIPANT   |   C Participant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -   |                 |   A Participant        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -   |  B_PARTICIPANT   |   B Participant        |    Available     | Optional     | Allowed |    NA |
| pfIdAmex| Payment Facilitator Id Amex        |       |           |    Available     | Optional     | Allowed |    NA |
| pfIdDscv| Payment Facilitator Id Discover        |       |           |    Available     | Optional     | Allowed |    NA |
| pfIdMc| Payment Facilitator Id Mc        |       |           |    Available     | Optional     | Allowed |    NA |
|       |                                  |       |           |    Available     | Optional     | Allowed |    NA |
| pfIdUpi| Payment Facilitator Id Upi        |       |           |    Available     | Optional     | Allowed |    NA |
| pfIdVi| Payment Facilitator Id-Marketplace Id Vi        |       |           |    Available     | Optional     | Allowed |    NA |
| serviceType | Service Type for Omnipay |    HYBRID   |  Hybrid  |    Available     | Optional     | Allowed |    NA |
|   -   |  -   |    FULL_SERVICE   |   Full Service   |    Available     | Optional     | Allowed |    NA |
|   -   |  -   |    SELF_SERVICE   |   Self Service   |    Available     | Optional     | Allowed |    NA |
| subMerchantId | Sub Merchant ID for Omnipay |    STRING   |   String   |    Available | Optional     | Allowed |  NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| directPfFlag| Direct Pf Flag        |    A_AMOB_1MM   |   A Amob 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    V_VI_1MM   |   V Vi 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    M_MC_1MM   |   M Mc 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    W_MC_VI_AMOB_1MM   |   W Mc Vi Amob 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    X_VI_AMOB_1MM   |   X Vi Amob 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    R_MC_VI_1MM   |   R Mc Vi 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    T_MC_AMOB_1MM   |   T  Mc Amob 1Mm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LEGACY   |   Legacy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GLOBAL   |   Global        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MARKETPLACE_CLIENT   |   Marketplace Client        |    Available     | Optional     | Allowed |    NA |
| parentId| Parent ID        |       |           |    Available     | Optional     | Allowed |    NA |
| participantType| Participant Type        |    C_PARTICIPANT   |   C Participant        |    Available     | Optional     | Allowed |    NA |
|          -            |             -    |                    |   A Participant        |    Available     | Optional     | Allowed |    NA |
|          -            |             -    |    B_PARTICIPANT   |   B Participant        |    Available     | Optional     | Allowed |    NA |
| pfIdAmex| Payment Facilitator Id Amex        |       |           |    Available     | Optional     | Allowed |    NA |
| pfIdDscv| Payment Facilitator Id Discover        |       |           |    Available     | Optional     | Allowed |    NA |
| pfIdMc| Payment Facilitator Id Mc        |       |           |    Available     | Optional     | Allowed |    NA |
|       |                                  |       |           |    Available     | Optional     | Allowed |    NA |
| pfIdUpi| Payment Facilitator Id Upi        |       |           |    Available     | Optional     | Allowed |    NA |
| pfIdVi| Payment Facilitator Id-Marketplace Id Vi        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| serviceType| Service Type for Omnipay        |    HYBRID   |   Hybrid        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FULL_SERVICE   |   Full Service        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SELF_SERVICE   |   Self Service        |    Available     | Optional     | Allowed |    NA |
| pfIdVi| Payment Facilitator Id-Marketplace Id Vi        |       |           |    Available     | Optional     | Allowed |    NA |
| pspIndicator| Payment Service Provider Indicator        |    SELF_SERVICE   |   Self Service        |    Available     | Optional     | Allowed |    NA |
|                    |                                       |    FUND_PF   |   Fund Pf        |    Available     | Optional     | Allowed |    NA |
|                    |                                       |    HYBRID_SERVICE   |   Hybrid Service        |    Available     | Optional     | Allowed |    NA |
|                    |                                       |    FUND_SUB   |   Fund Sub        |    Available     | Optional     | Allowed |    NA |
| subMerchantId| Sub Merchant ID for Omnipay        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab-end -->

### platformSwitch3CrossReference

---

tags: [platformSwitch3CrossReference]

---

* Description: Platform Switch 3 Cross Reference

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| northChainBank| North Chain Bank        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| northChainBank| North Chain Bank        |       |           |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### pricingMthdDisclosures

---

tags: [pricingMthdDisclosures]

---

* Description: Pricing Method Disclosures

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|     offeringType      |             Offering Type              |    UNKNOWN   |   Unknown        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_OTHER   |   All Other        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SIMPLIFIED   |   Simplified        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FLAT_RATE_NO_BB   |   Flat Rate No Bb        |    Available     | Optional     | Allowed |    NA |
| pricingSchedule| Pricing Schedule        |    SCHEDULE_103   |   Schedule 103        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNKNOWN   |   Unknown        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_135   |   Schedule 135        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_IC   |   Schedule Ic        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_105   |   Schedule 105        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_112   |   Schedule 112        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_010   |   Schedule 010        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_3T   |   Schedule 3T        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_133   |   Schedule 133        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_127   |   Schedule 127        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_123   |   Schedule 123        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_120   |   Schedule 120        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_108   |   Schedule 108        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_113   |   Schedule 113        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_111   |   Schedule 111        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_102   |   Schedule 102        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_104   |   Schedule 104        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_136   |   Schedule 136        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_101   |   Schedule 101        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_028   |   Schedule 028        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_2T   |   Schedule 2T        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_150   |   Schedule 150        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_138   |   Schedule 138        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_125   |   Schedule 125        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_124   |   Schedule 124        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|     offeringType      |             Offering Type              |    UNKNOWN   |   Unknown        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALL_OTHER   |   All Other        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SIMPLIFIED   |   Simplified        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FLAT_RATE_NO_BB   |   Flat Rate No Bb        |    Available     | Optional     | Allowed |    NA |
| pricingSchedule| Pricing Schedule        |    SCHEDULE_103   |   Schedule 103        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNKNOWN   |   Unknown        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_135   |   Schedule 135        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_IC   |   Schedule Ic        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_105   |   Schedule 105        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_112   |   Schedule 112        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_010   |   Schedule 010        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_3T   |   Schedule 3T        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_133   |   Schedule 133        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_127   |   Schedule 127        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_123   |   Schedule 123        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_120   |   Schedule 120        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_108   |   Schedule 108        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_113   |   Schedule 113        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_111   |   Schedule 111        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_102   |   Schedule 102        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_104   |   Schedule 104        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_136   |   Schedule 136        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_101   |   Schedule 101        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_028   |   Schedule 028        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_2T   |   Schedule 2T        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_150   |   Schedule 150        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_138   |   Schedule 138        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_125   |   Schedule 125        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SCHEDULE_124   |   Schedule 124        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### promotion

---

tags: [promotion]

---

* Description: Promotion Tracking

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| promotionName1| Promotion Name One        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| promotionName2| Promotion Name Two        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| promotionName3| Promotion Name Three        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| promotionName4| Promotion Name Four        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| promotionName5| Promotion Name Five        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| promotionName1| Promotion Name One        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| promotionName2| Promotion Name Two        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| promotionName3| Promotion Name Three        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| promotionName4| Promotion Name Four        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| promotionName5| Promotion Name Five        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### prop51Conversion

---

tags: [prop51Conversion]

---

* Description: Prop 51 Conversion

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| northShellMid| Original North Shell Mid/N        |    Digits only - MERCHANT ID   |   Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| propMerchantId| Original Prop Merchant Id        |    Digits only - MERCHANT ID   |   Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| northShellMid| Original North Shell Mid/N        |    Digits only - MERCHANT ID   |   Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| propMerchantId| Original Prop Merchant Id        |    Digits only - MERCHANT ID   |   Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### purchaseReturnAuthAutomation

---

tags: [purchaseReturnAuthAutomation]

---

* Description: Purchase Return Authorization Automation

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    NOT_ENABLED   |   Not Enabled        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ENABLED   |   Enabled        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| status| Program Status        |    NOT_ENABLED   |   Not Enabled        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ENABLED   |   Enabled        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### rapidDepositExceptionStatus

---

tags: [rapidDepositExceptionStatus]

---

* Description: Rapid Deposit Exception Status

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    NO_RAPID_DEP_OVERRIDE   |   No Rapid Dep Override        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RAPID_DEP_NOT_ALLOWED   |   Rapid Dep Not Allowed        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RAPID_DEP_IS_ALLOWED   |   Rapid Dep Is Allowed        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| offeringType| Offering Type        |    NO_RAPID_DEP_OVERRIDE   |   No Rapid Dep Override        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RAPID_DEP_NOT_ALLOWED   |   Rapid Dep Not Allowed        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RAPID_DEP_IS_ALLOWED   |   Rapid Dep Is Allowed        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### rateLock

---

tags: [rateLock]

---

* Description: Rate Lock

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| billingEffectiveDate| Billing Effective Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| billingExpirationDate| Billing Expiration Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| rateLockLength| Number Of Years The Rate Lock Is In Place        |    TWO_YEARS   |   Two Years        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    THREE_YEARS   |   Three Years        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONE_YEAR   |   One Year        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| billingEffectiveDate| Billing Effective Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| billingExpirationDate| Billing Expiration Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| rateLockLength| Number Of Years The Rate Lock Is In Place        |    TWO_YEARS   |   Two Years        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    THREE_YEARS   |   Three Years        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONE_YEAR   |   One Year        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### recurringPayment

---

tags: [recurringPayment]

---

* Description: Recurring Payment

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| recurringPaymentsIndicator| Hosted Recurring Payments Indicator        |    HPR_MC_VISA_CAU   |   Hpr Mc Visa Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_PARTICIPATING_HRP   |   Not Participating Hrp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_ALL_CAU   |   Hrp All Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_DISCOVER_CAU   |   Hrp Discover Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_VISA_CAU   |   Hrp Visa Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PARTICIPATING_HRP   |   Participating Hrp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_MC_DISCOVER_CAU   |   Hrp Mc Discover Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_NC_CAU   |   Hrp Nc Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_VISA_DISCOVER_CAU   |   Hrp Visa Discover Cau        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| recurringPaymentsIndicator| Hosted Recurring Payments Indicator        |    HPR_MC_VISA_CAU   |   Hpr Mc Visa Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_PARTICIPATING_HRP   |   Not Participating Hrp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_ALL_CAU   |   Hrp All Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_DISCOVER_CAU   |   Hrp Discover Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_VISA_CAU   |   Hrp Visa Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PARTICIPATING_HRP   |   Participating Hrp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_MC_DISCOVER_CAU   |   Hrp Mc Discover Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_NC_CAU   |   Hrp Nc Cau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HRP_VISA_DISCOVER_CAU   |   Hrp Visa Discover Cau        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### referencedDeposit

---

tags: [referencedDeposit]

---

* Description: Referenced Deposit

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| depositReferenceNumber| Deposit Reference Number        |       |           |    Available     | Optional     | Allowed |    NA |
| referenceNumberType| Reference Number Type        |    ALPHANUMERIC   |   Alphanumeric        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NUMERIC   |   Numeric        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| depositReferenceNumber| Deposit Reference Number        |       |           |    Available     | Optional     | Allowed |    NA |
| referenceNumberType| Reference Number Type        |    ALPHANUMERIC   |   Alphanumeric        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NUMERIC   |   Numeric        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### restrictedUseTransmatchRewards

---

tags: [restrictedUseTransmatchRewards]

---

* Description: Restricted Use Transmatch Rewards Program

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|          -            |                 -                    |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|          -            |                 -                    |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### retrievalConfig

---

tags: [retrievalConfig]

---

* Description: Retrievals Config

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| email| email address        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| reversal24HourProcessIndicator| Reversal 24Hour Process Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| reversalDaylightSavingsIndicator| Reversal Daylight Savings Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| reversalTimeZoneCode| Reversal TimeZone Code        |    BAKER_ISLAND   |   Baker Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EAST_AFRICA   |   East Africa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NEPAL_TIME   |   Nepal Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EASTERN_GREENLAND   |   Eastern Greenland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAWSON_STANDARD   |   Mawson Standard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HAWAII_ALEUTIAN   |   Hawaii Aleutian        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PACIFIC_TIME   |   Pacific Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHRISTMAS_ISLAND   |   Christmas Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CENTRAL_EUROPEAN   |   Central European        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMT-0430   |   Gmt 0430        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MARQUESAS_TIME   |   Marquesas Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EASTERN_TIME   |   Eastern Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    INDIAN_STANDARD   |   Indian Standard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRAN_DAYLIGHT   |   Iran Daylight        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUS_CENTRAL_SUMMER   |   Aus Central Summer        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CENTRAL_AFRICA   |   Central Africa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MOUNTAIN_TIME   |   Mountain Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LINE_ISLAND   |   Line Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FIJI_TIME   |   Fiji Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JAPAN_TIME   |   Japan Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMT-0330   |   Gmt 0330        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PHOENIX_ISLAND   |   Phoenix Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAPAU_NEW_GUINEA   |   Papau New Guinea        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALASKAN_TIME   |   Alaskan Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CENTRAL_TIME   |   Central Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GREENWICH_MEAN   |   Greenwich Mean        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUSTRAILIAN_CST   |   Austrailian Cst        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GEORGIA_STANDARD   |   Georgia Standard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NORFOLK_TIME   |   Norfolk Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHINA_TIME   |   China Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COCOS_ISLAND   |   Cocos Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ATLANTIC_TIME   |   Atlantic Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHATHAM_STANDARD   |   Chatham Standard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMT+1130   |   Gmt+1130        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRASILIA_DAYLIGHT   |   Brasilia Daylight        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAMOA_STANDARD   |   Samoa Standard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BHUTAN_TIME   |   Bhutan Time  |    Available     | Optional     | Allowed |    NA   |
|          -            |                 -                    |    ATLANTIC_DAYLIGHT   |   Atlantic Daylight  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0100   |   G-0100  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0200   |   G-0200  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0400   |   G-0400  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0500   |   G-0500  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0600   |   G-0600  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0700   |   G-0700  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0800   |   G-0800  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0900   |   G-0900  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0930   |   G-0930  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-1000   |   G-1000  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-1100   |   G-1100  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-1200   |   G-1200  |    Available     | Optional     | Allowed |    NA   |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| email| email address        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| reversal24HourProcessIndicator| Reversal 24Hour Process Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| reversalDaylightSavingsIndicator| Reversal Daylight Savings Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| reversalTimeZoneCode| Reversal TimeZone Code        |    BAKER_ISLAND   |   Baker Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EAST_AFRICA   |   East Africa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NEPAL_TIME   |   Nepal Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EASTERN_GREENLAND   |   Eastern Greenland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAWSON_STANDARD   |   Mawson Standard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HAWAII_ALEUTIAN   |   Hawaii Aleutian        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PACIFIC_TIME   |   Pacific Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHRISTMAS_ISLAND   |   Christmas Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CENTRAL_EUROPEAN   |   Central European        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMT-0430   |   Gmt 0430        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MARQUESAS_TIME   |   Marquesas Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EASTERN_TIME   |   Eastern Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    INDIAN_STANDARD   |   Indian Standard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRAN_DAYLIGHT   |   Iran Daylight        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUS_CENTRAL_SUMMER   |   Aus Central Summer        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CENTRAL_AFRICA   |   Central Africa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MOUNTAIN_TIME   |   Mountain Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LINE_ISLAND   |   Line Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FIJI_TIME   |   Fiji Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JAPAN_TIME   |   Japan Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMT-0330   |   Gmt 0330        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PHOENIX_ISLAND   |   Phoenix Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAPAU_NEW_GUINEA   |   Papau New Guinea        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALASKAN_TIME   |   Alaskan Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CENTRAL_TIME   |   Central Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GREENWICH_MEAN   |   Greenwich Mean        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUSTRAILIAN_CST   |   Austrailian Cst        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GEORGIA_STANDARD   |   Georgia Standard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NORFOLK_TIME   |   Norfolk Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHINA_TIME   |   China Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COCOS_ISLAND   |   Cocos Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ATLANTIC_TIME   |   Atlantic Time        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHATHAM_STANDARD   |   Chatham Standard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GMT+1130   |   Gmt+1130        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRASILIA_DAYLIGHT   |   Brasilia Daylight        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAMOA_STANDARD   |   Samoa Standard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BHUTAN_TIME   |   Bhutan Time  |    Available     | Optional     | Allowed |    NA   |
|          -            |                 -                    |    ATLANTIC_DAYLIGHT   |   Atlantic Daylight  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0100   |   G-0100  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0200   |   G-0200  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0400   |   G-0400  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0500   |   G-0500  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0600   |   G-0600  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0700   |   G-0700  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0800   |   G-0800  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0900   |   G-0900  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-0930   |   G-0930  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-1000   |   G-1000  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-1100   |   G-1100  |    Available     | Optional     | Allowed |    NA   |
|    -    |     -     |    G-1200   |   G-1200  |    Available     | Optional     | Allowed |    NA   |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### rtp

---

tags: [rtp]

---

* Description: Rtp

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|         status               |          Program Status                           |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|         status               |          Program Status                           |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### sameDaySettlement

---

tags: [sameDaySettlement]

---

* Description: Same Day Settlement

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| currencyCd| Currency Code        |    EURO   |   Euro        |    Available     | Optional     | Allowed |    NA |
| currencyCd| Currency Code        |    CANADIAN_DOLLAR   |   Canadian Dollar        |    Available     | Optional     | Allowed |    NA |
| currencyCd| Currency Code        |    GRT_BRITISH_POUND   |   Grt British Pound        |    Available     | Optional     | Allowed |    NA |
| currencyCd| Currency Code        |    USA_DOLLAR   |   Usa Dollar        |    Available     | Optional     | Allowed |    NA |
|         status               |          Program Status                           |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| currencyCd| Currency Code        |    EURO   |   Euro        |    Available     | Optional     | Allowed |    NA |
| currencyCd| Currency Code        |    CANADIAN_DOLLAR   |   Canadian Dollar        |    Available     | Optional     | Allowed |    NA |
| currencyCd| Currency Code        |    GRT_BRITISH_POUND   |   Grt British Pound        |    Available     | Optional     | Allowed |    NA |
| currencyCd| Currency Code        |    USA_DOLLAR   |   Usa Dollar        |    Available     | Optional     | Allowed |    NA |
|         status               |          Program Status                           |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### selectiveDivert

---

tags: [selectiveDivert]

---

* Description: Negative Bankwire Selective Divert

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|         status               |          Program Status                           |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|         status               |          Program Status                           |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### settlementConfig

---

tags: [settlementConfig]

---

* Description: Settlement Config

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| billbackCode| Billback Code        |    AUTO_BILLBK_OFF   |   Auto Billbk Off        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LEGACY   |   Legacy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUTO_BILLBK_ON   |   Auto Billbk On        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUTO_BILLBK_WITH_REVERSAL   |   Auto Billbk With Reversal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_AUTO_BILLBK   |   Not Auto Billbk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUTO_BILLBK_NO_REVERSAL   |   Auto Billbk No Reversal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FUEL_CARD   |   Fuel Card        |    Available     | Optional     | Allowed |    NA |
| billbackHierarchyCode| Billback Hierarchy Code        |    OUTLET   |   Outlet        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHAIN   |   Chain        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BANK   |   Bank        |    Available     | Optional     | Allowed |    NA |
| billbackRoundingIndicator| Bill Back Rounding Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| billbackSurchargeCode| Billback Surcharge Code        |    AUTO_BILL_SRCHRG_BSNS   |   Auto Bill Srchrg Bsns        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FUEL_CARD_PALN_CODE_VI   |   Fuel Card Paln Code Vi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EXCLUDE_AUTO_FUEL_VI   |   Exclude Auto Fuel Vi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GOVT_PLAN_CODE_VI   |   Govt Plan Code Vi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CORP_CARD_PLAN_CODE_MC_VI   |   Corp Card Plan Code Mc Vi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COMMERCIAL_CARD_PLAN_CODE_MC_VI   |   Commercial Card Plan Code Mc Vi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_AUTO_BILL_SRCHRG   |   No Auto Bill Srchrg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUTO_BILLSRCHRG_MER   |   Auto Billsrchrg Mer        |    Available     | Optional     | Allowed |    NA |
| processingTypeCode| Processing Type Code        |    PAPER_TERMINAL   |   Paper Terminal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EDC   |   Edc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CASH_ADV_OUTLET_ON_US   |   Cash Adv Outlet On Us        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DIRECT_SOLUTIONS   |   Direct Solutions        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FUNDING_ACCT   |   Funding Acct        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ECR   |   Ecr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TAPE_DEPOSITOR   |   Tape Depositor        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAPER_VOICE   |   Paper Voice        |    Available     | Optional     | Allowed |    NA |
| settleFrequencyCode| Settle Frequency Code        |    AT_SETTLEMENT   |   At Settlement        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DAILY_DISC   |   Daily Disc        |    Available     | Optional     | Allowed |    NA |
|    -    |    -    |    2X_WEEKLY_CHAIN   |   2X Weekly Chain   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    2X_WEEKLY_OUTLET   |   2X Weekly Outlet   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    WEEKLY_CHECK_CHAIN   |   Weekly Check Chain   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    WEEKLY_CHECK_OUTLET   |   Weekly Check Outlet   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    2X_MONTHLY_CHAIN   |   2X Monthly Chain   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    2X_MONTHLY_OUTLET   |   2X Monthly Outlet   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    MONTHLY_CHAIN   |   Monthly Chain   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    MONTHLY_OUTLET   |   Monthly Outlet   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    FLEX_FUND   |   Flex Fund   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    FLEX_FUND_ONUS   |   Flex Fund Onus   |    Available     | Optional     | Allowed |    NA    |
| surchargeExceptionCode| Determine If A Billback Surcharge Should Be Applied        |    NO_SCHG_VISA_SIG_COMM   |   No Schg Visa Sig Comm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_SCHG_VISA_INF_MC   |   No Schg Visa Inf Mc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_SCHG_VISA_SIG_MC   |   No Schg Visa Sig Mc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_SCHG_VISA_INF_COMM   |   No Schg Visa Inf Comm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALLOW_SCHG   |   Allow Schg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SPEC_SCHG_VISA_INF_COMM   |   Special Schg Visa Inf Comm F20A        |    Available     | Optional     | Allowed |    NA |
| chargeBarer| Charge Barer for Omnipay |    CRED | Creditor pays all charges | Available | Optional | Allowed |  NA |
|   -   |  -  |    SLEV | Charges Follow The Service Level; The Only Allowed Alternative For Sepa Payments  |    Available     | Optional     | Allowed |  NA |  
|  -  |  -  |    DEBT |    Debt - Debtor Pays All Charges        |    Available     | Optional     | Allowed |  NA |  
|  -  |  -  |    SHAR | Shar - Debtor And Creditor Pay Their Own Charges |    Available     | Optional  | Allowed |  NA |
| dcc| DCC Merchant for Omnipay        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| settlementMethod| The settlement method assigned to for the merchant        |    IFS_MONTHLY_NEG   |   Ifs Monthly Neg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DE_DAILY_CUP   |   De Daily Cup        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DAILY   |   Daily        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IFS_DAILY_CUP   |   Ifs Daily Cup        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DE_DAILY   |   De Daily        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IFS_TREASURY   |   Ifs Treasury        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IFS_DAILY   |   Ifs Daily        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IFS_DAILY_NEG   |   Ifs Daily Neg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DAILY_CUP   |   Daily Cup        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IFS_DAILY_NEG_CUP   |   Ifs Daily Neg Cup        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| billbackCode| Billback Code        |    AUTO_BILLBK_OFF   |   Auto Billbk Off        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LEGACY   |   Legacy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUTO_BILLBK_ON   |   Auto Billbk On        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUTO_BILLBK_WITH_REVERSAL   |   Auto Billbk With Reversal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_AUTO_BILLBK   |   Not Auto Billbk        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUTO_BILLBK_NO_REVERSAL   |   Auto Billbk No Reversal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FUEL_CARD   |   Fuel Card        |    Available     | Optional     | Allowed |    NA |
| billbackHierarchyCode| Billback Hierarchy Code        |    OUTLET   |   Outlet        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHAIN   |   Chain        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BANK   |   Bank        |    Available     | Optional     | Allowed |    NA |
| billbackRoundingIndicator| Bill Back Rounding Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| billbackSurchargeCode| Billback Surcharge Code        |    AUTO_BILL_SRCHRG_BSNS   |   Auto Bill Srchrg Bsns        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_SPECIFIED   |   Not Specified        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FUEL_CARD_PALN_CODE_VI   |   Fuel Card Paln Code Vi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EXCLUDE_AUTO_FUEL_VI   |   Exclude Auto Fuel Vi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GOVT_PLAN_CODE_VI   |   Govt Plan Code Vi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CORP_CARD_PLAN_CODE_MC_VI   |   Corp Card Plan Code Mc Vi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COMMERCIAL_CARD_PLAN_CODE_MC_VI   |   Commercial Card Plan Code Mc Vi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_AUTO_BILL_SRCHRG   |   No Auto Bill Srchrg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUTO_BILLSRCHRG_MER   |   Auto Billsrchrg Mer        |    Available     | Optional     | Allowed |    NA |
| processingTypeCode| Processing Type Code        |    PAPER_TERMINAL   |   Paper Terminal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EDC   |   Edc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CASH_ADV_OUTLET_ON_US   |   Cash Adv Outlet On Us        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DIRECT_SOLUTIONS   |   Direct Solutions        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FUNDING_ACCT   |   Funding Acct        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ECR   |   Ecr        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TAPE_DEPOSITOR   |   Tape Depositor        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAPER_VOICE   |   Paper Voice        |    Available     | Optional     | Allowed |    NA |
| settleFrequencyCode| Settle Frequency Code        |    AT_SETTLEMENT   |   At Settlement        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DAILY_DISC   |   Daily Disc        |    Available     | Optional     | Allowed |    NA |
|    -    |    -    |    2X_WEEKLY_CHAIN   |   2X Weekly Chain   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    2X_WEEKLY_OUTLET   |   2X Weekly Outlet   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    WEEKLY_CHECK_CHAIN   |   Weekly Check Chain   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    WEEKLY_CHECK_OUTLET   |   Weekly Check Outlet   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    2X_MONTHLY_CHAIN   |   2X Monthly Chain   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    2X_MONTHLY_OUTLET   |   2X Monthly Outlet   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    MONTHLY_CHAIN   |   Monthly Chain   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    MONTHLY_OUTLET   |   Monthly Outlet   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    FLEX_FUND   |   Flex Fund   |    Available     | Optional     | Allowed |    NA    |
|    -    |    -    |    FLEX_FUND_ONUS   |   Flex Fund Onus   |    Available     | Optional     | Allowed |    NA    |
| surchargeExceptionCode| Determine If A Billback Surcharge Should Be Applied        |    NO_SCHG_VISA_SIG_COMM   |   No Schg Visa Sig Comm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_SCHG_VISA_INF_MC   |   No Schg Visa Inf Mc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_SCHG_VISA_SIG_MC   |   No Schg Visa Sig Mc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_SCHG_VISA_INF_COMM   |   No Schg Visa Inf Comm        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALLOW_SCHG   |   Allow Schg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SPEC_SCHG_VISA_INF_COMM   |   Special Schg Visa Inf Comm F20A        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| billbackIndicatorCode| Billback Indicator Code        |       |           |    Available     | Optional     | Allowed |    NA |
| chargeBarer| Charge Barer for Omnipay |  CRED | Creditor pays all charges |  Available | Optional | Allowed |  NA |
|   -   |    -    |  SLEV   |  Charges Follow The Service Level; The Only Allowed Alternative For Sepa Payments  |    Available  | Optional    | Allowed |    NA |  
|   -   |  -  |    DEBT  |  Debtor Pays All Charges  |    Available     | Optional     | Allowed |    NA |  
|   -   |  -  |    SHAR  | Debtor And Creditor Pay Their Own Charges  |  Available | Optional | Allowed |  NA  |

| dcc| DCC Merchant for Omnipay        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| settlementMethod| The settlement method assigned to for the merchant        |    IFS_MONTHLY_NEG   |   Ifs Monthly Neg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DE_DAILY_CUP   |   De Daily Cup        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DAILY   |   Daily        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IFS_DAILY_CUP   |   Ifs Daily Cup        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DE_DAILY   |   De Daily        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IFS_TREASURY   |   Ifs Treasury        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IFS_DAILY   |   Ifs Daily        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IFS_DAILY_NEG   |   Ifs Daily Neg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DAILY_CUP   |   Daily Cup        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IFS_DAILY_NEG_CUP   |   Ifs Daily Neg Cup        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab-end -->

### signatureCapture

---

tags: [signatureCapture]

---

* Description: Signature Capture

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| signatureCaptureIndicator| Signature Capture Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| signatureCaptureRejectsIndicator| Signature Capture Rejects Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| signatureCaptureIndicator| Signature Capture Indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| signatureCaptureRejectsIndicator| Signature Capture Rejects Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### southFrontEndBridge

---

tags: [southFrontEndBridge]

---

* Description: Sfe Sunset Bridge Merchant Conversions

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|          status         |           Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|          status         |           Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### southHdcLateCutC

---

tags: [southHdcLateCutC]

---

* Description: South Platform Hdc Late Batch Cut C

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|          status         |           Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|          status         |           Program Status        |    CANCEL   |   Cancel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ACTIVE   |   Active        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### statementConfig

---

tags: [statementConfig]

---

* Description: Statement Config

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| cardAlternateCity| Card Alternate City        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| cardAlternateName| Card Alternate Name        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| cardAlternateStateCode| Card Alternate State Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| email| Statement email address        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| icplusStatementFormatCode| Code determining the interchange fee information the System prints on the merchant statement        |    ICPLUS_LONG_STMT   |   Icplus Long Stmt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| statementDeliveryCode| Statement delivery method        |    BULK_MAIL   |   Bulk Mail  |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAIL   |   Mail        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HOLD   |   Hold        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PRINT   |   Print        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLINE   |   Online        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EMAIL   |   Email        |    Available     | Optional     | Allowed |    NA |
| statementFaxIndicator| Statement Fax Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| statementFaxNumber| Statement fax number        |    STRING (max - 15/min length - 10)   |   String (Max - 15/Min Length - 10)        |    Available     | Optional     | Allowed |    NA |
| statementMailToCode| Indicates where printed statement will be sent        |    RECAP_CORP_STMT_OUTLET   |   Recap Corp Stmt Outlet        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAIL_TO_CORP_NO_RECAP   |   Mail To Corp No Recap        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SUPP_STMT_RECAP   |   Supp Stmt Recap        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAIL_TO_CORP   |   Mail To Corp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RECAP_NO_STMT   |   Recap No Stmt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAIL_TO_OUTLET   |   Mail To Outlet        |    Available     | Optional     | Allowed |    NA |
|   -   |    -    |    ROLLUP_TO_OUTLET   |   RollUp To Outlet   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    ROLLUP_TO_CHAIN   |   RollUp To Chain   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    ROLLUP_TO_CORPORATION   |   RollUp To Corporation   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    DBA_RECAP_BILL_TO   |   DBA Recap Bill To   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    18   |   Value - 18   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    19   |   Value - 19   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    20   |   Value - 20   |    Available     | Optional     | Allowed |    NA   |
| statementTypeCode| Statement type summary or detail        |    FISERV_DETAIL   |   Fiserv Detail        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FISERV_SUMMUARY   |   Fiserv Summuary        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CONCORD_SUMMARY   |   Concord Summary        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CONCORD_DETAIL   |   Concord Detail        |    Available     | Optional     | Allowed |    NA |
|   -   |    -   |    PTI   |   PTI   |    Available     | Optional     | Allowed |    NA |
|   -   |    -   |    FDMS   |   FDMS  |    Available     | Optional     | Allowed |    NA |
|   -   |    -   |    BAMS_CHAIN_SUMMARY   |   BAMS Chain Summary  |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| cardAlternateCity| Card Alternate City        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| cardAlternateName| Card Alternate Name        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| cardAlternateStateCode| Card Alternate State Code        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| email| Statement email address        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| icplusStatementFormatCode| Code determining the interchange fee information the System prints on the merchant statement        |    ICPLUS_LONG_STMT   |   Icplus Long Stmt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
| statementDeliveryCode| Statement delivery method        |    BULK_MAIL   |   Bulk Mail  |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAIL   |   Mail        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HOLD   |   Hold        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PRINT   |   Print        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLINE   |   Online        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EMAIL   |   Email        |    Available     | Optional     | Allowed |    NA |
| statementFaxIndicator| Statement Fax Indicator        |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| statementFaxNumber| Statement fax number        |    STRING (max - 15/min length - 10)   |   String (Max - 15/Min Length - 10)        |    Available     | Optional     | Allowed |    NA |
| statementMailToCode| Indicates where printed statement will be sent        |    RECAP_CORP_STMT_OUTLET   |   Recap Corp Stmt Outlet        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAIL_TO_CORP_NO_RECAP   |   Mail To Corp No Recap        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SUPP_STMT_RECAP   |   Supp Stmt Recap        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAIL_TO_CORP   |   Mail To Corp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RECAP_NO_STMT   |   Recap No Stmt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAIL_TO_OUTLET   |   Mail To Outlet        |    Available     | Optional     | Allowed |    NA |
|   -   |    -    |    ROLLUP_TO_OUTLET   |   RollUp To Outlet   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    ROLLUP_TO_CHAIN   |   RollUp To Chain   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    ROLLUP_TO_CORPORATION   |   RollUp To Corporation   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    DBA_RECAP_BILL_TO   |   DBA Recap Bill To   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    18   |   Value - 18   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    19   |   Value - 19   |    Available     | Optional     | Allowed |    NA   |
|   -   |    -    |    20   |   Value - 20   |    Available     | Optional     | Allowed |    NA   |
| statementTypeCode| Statement type summary or detail        |    FISERV_DETAIL   |   Fiserv Detail        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FISERV_SUMMUARY   |   Fiserv Summuary        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CONCORD_SUMMARY   |   Concord Summary        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CONCORD_DETAIL   |   Concord Detail        |    Available     | Optional     | Allowed |    NA |
|   -   |    -   |    PTI   |   PTI   |    Available     | Optional     | Allowed |    NA |
|   -   |    -   |    FDMS   |   FDMS  |    Available     | Optional     | Allowed |    NA |
|   -   |    -   |    BAMS_CHAIN_SUMMARY   |   BAMS Chain Summary  |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### stockExchange

---

tags: [stockExchange]

---

* Description: Stock Exchange/Ctry Name

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| countryName| Country Name        |    GUADELOUPE   |   Guadeloupe        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GIBRALTAR   |   Gibraltar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GHANA   |   Ghana        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GABON   |   Gabon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FAROE_ISLANDS   |   Faroe Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FIJI   |   Fiji        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANGOLA   |   Angola        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NAMIBIA   |   Namibia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LIECHTENSTEIN   |   Liechtenstein        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUNISIA   |   Tunisia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MONTSERRAT   |   Montserrat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LIBYA   |   Libya        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BULGARIA   |   Bulgaria        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAYOTTE   |   Mayotte        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAURITANIA   |   Mauritania        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MALDIVES   |   Maldives        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LITHUANIA   |   Lithuania        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LAOS   |   Laos        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VIRGIN_ISLANDS_BRITI   |   Virgin Islands Briti        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KOREA_SOUTH   |   Korea South        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KOREA_NORTH   |   Korea North        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JARVIS_ISLAND   |   Jarvis Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JAMAICA   |   Jamaica        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    INDONESIA   |   Indonesia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HUNGARY   |   Hungary        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUINEA   |   Guinea        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WALLIS_AND_FUTUNA   |   Wallis And Futuna        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOLIVIA   |   Bolivia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BHUTAN   |   Bhutan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CAMEROON   |   Cameroon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SWEDEN   |   Sweden        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SYRIA   |   Syria        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TANZANIA   |   Tanzania        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VENEZUELA   |   Venezuela        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TIMOR_LESTE   |   Timor Leste        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SINT_MAARTEN   |   Sint Maarten        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUVALU   |   Tuvalu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNITED_STATES   |   United States        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHILE   |   Chile        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CLIPPERTON_ISLAND   |   Clipperton Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CONGO_KINSHASA   |   Congo Kinshasa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EQUATORIAL_GUINEA   |   Equatorial Guinea        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    THAILAND   |   Thailand        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANTIGUA_AND_BARBUDA   |   Antigua And Barbuda        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VIETNAM   |   Vietnam        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZAMBIA   |   Zambia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    N/A   |   N/A        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DENMARK   |   Denmark        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DHEKELIA   |   Dhekelia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EL_SALVADOR   |   El Salvador        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAMOA   |   Samoa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ESTONIA   |   Estonia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ETHIOPIA   |   Ethiopia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VANUATU   |   Vanuatu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BELARUS   |   Belarus        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ASHMORE_N_CARTIER_ISL   |   Ashmore N Cartier Isl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARMENIA   |   Armenia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARGENTINA   |   Argentina        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SRI_LANKA   |   Sri Lanka        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WAKE_ISLAND   |   Wake Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VIRGIN_ISLANDS_US   |   Virgin Islands Us        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TURKEY   |   Turkey        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TOGO   |   Togo        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    URUGUAY   |   Uruguay        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNITED_KINGDOM   |   United Kingdom        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TURKS_AND_CAICOS_ISLA   |   Turks And Caicos Isla        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOLOMON_ISLANDS   |   Solomon Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TRINIDAD_AND_TOBAGO   |   Trinidad And Tobago        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TOKELAU   |   Tokelau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SVALBARD   |   Svalbard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARUBA   |   Aruba        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SPRATLY_ISLANDS   |   Spratly Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SPAIN   |   Spain        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOUTH_SUDAN   |   South Sudan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AZERBAIJAN   |   Azerbaijan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GREECE   |   Greece        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SLOVAKIA   |   Slovakia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SINGAPORE   |   Singapore        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SERBIA   |   Serbia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PANAMA   |   Panama        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_PIERRE_N_MIQUEL   |   Saint Pierre N Miquel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JERSEY   |   Jersey        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KIRIBATI   |   Kiribati        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOMALIA   |   Somalia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SURINAME   |   Suriname        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SEYCHELLES   |   Seychelles        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_KITTS_AND_NEVIS   |   Saint Kitts And Nevis        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    POLAND   |   Poland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TAJIKISTAN   |   Tajikistan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BARBADOS   |   Barbados        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BURUNDI   |   Burundi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRENCH_POLYNESIA   |   French Polynesia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GAMBIA_THE   |   Gambia The        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GERMANY   |   Germany        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UKRAINE   |   Ukraine        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MALTA   |   Malta        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRANCE   |   France        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAUDI_ARABIA   |   Saudi Arabia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UGANDA   |   Uganda        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOUTH_AFRICA   |   South Africa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PALESTINIAN_TERRITORY   |   Palestinian Territory        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PARACEL_ISLANDS   |   Paracel Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PERU   |   Peru        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PORTUGAL   |   Portugal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZIMBABWE   |   Zimbabwe        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_LUCIA   |   Saint Lucia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SIERRA_LEONE   |   Sierra Leone        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SWITZERLAND   |   Switzerland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PHILIPPINES   |   Philippines        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOUTH_GEORGIA_N_S_SAN   |   South Georgia N S San        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UZBEKISTAN   |   Uzbekistan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNITED_ARAB_EMIRATES   |   United Arab Emirates        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TURKMENISTAN   |   Turkmenistan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TONGA   |   Tonga        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SUDAN   |   Sudan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TAIWAN   |   Taiwan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COOK_ISLANDS   |   Cook Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SLOVENIA   |   Slovenia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_VINCENT_N_THE_G   |   Saint Vincent N The G        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SENEGAL   |   Senegal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAO_TOME_AND_PRINCIPE   |   Sao Tome And Principe        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAN_MARINO   |   San Marino        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_MARTIN   |   Saint Martin        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PALAU   |   Palau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RUSSIA   |   Russia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ROMANIA   |   Romania        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REUNION   |   Reunion        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAKISTAN   |   Pakistan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NORTH_MACEDONIA   |   North Macedonia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NIGERIA   |   Nigeria        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MARSHALL_ISLANDS   |   Marshall Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WESTERN_SAHARA   |   Western Sahara        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HAITI   |   Haiti        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MOLDOVA   |   Moldova        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KAZAKHSTAN   |   Kazakhstan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JAPAN   |   Japan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ISRAEL   |   Israel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUINEA_BISSAU   |   Guinea Bissau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUATEMALA   |   Guatemala        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRENCH_STHERN_ANTAR   |   French Sthern Antar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MIDWAY_ISLANDS   |   Midway Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANGUILLA   |   Anguilla        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MOROCCO   |   Morocco        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NAURU   |   Nauru        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NAVASSA_ISLAND   |   Navassa Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NEW_CALEDONIA   |   New Caledonia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MACAU   |   Macau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BURMA   |   Burma        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NIGER   |   Niger        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MALI   |   Mali        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KUWAIT   |   Kuwait        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KENYA   |   Kenya        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JOHNSTON_ATOLL   |   Johnston Atoll        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HONG_KONG   |   Hong Kong        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CZ_FALKLAND_ISLANDS   |   Cz Falkland Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ICELAND   |   Iceland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BENIN   |   Benin        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AMERICAN_SAMOA   |   American Samoa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MEXICO   |   Mexico        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MARTINIQUE   |   Martinique        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CZECHIA   |   Czechia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LUXEMBOURG   |   Luxembourg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LIBERIA   |   Liberia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LEBANON   |   Lebanon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LATVIA   |   Latvia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRUNEI   |   Brunei        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ISLE_OF_MAN   |   Isle Of Man        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRAQ   |   Iraq        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUSTRALIA   |   Australia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CANADA   |   Canada        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CAMBODIA   |   Cambodia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CABO_VERDE   |   Cabo Verde        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRITISH_INDIAN_OCEAN   |   British Indian Ocean        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AFGHANISTAN   |   Afghanistan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KYRGYZSTAN   |   Kyrgyzstan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CENTRAL_AFRICAN_REPUB   |   Central African Repub        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHINA   |   China        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CORAL_SEA_ISLANDS   |   Coral Sea Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COSTA_RICA   |   Costa Rica        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CROATIA   |   Croatia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CUBA   |   Cuba        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOSNIA_AND_HERZEGOVIN   |   Bosnia And Herzegovin        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRAZIL   |   Brazil        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NORFOLK_ISLAND   |   Norfolk Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NORTHERN_MARIANA_ISLE   |   Northern Mariana Isle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAPUA_NEW_GUINEA   |   Papua New Guinea        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PARAGUAY   |   Paraguay        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    QATAR   |   Qatar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALGERIA   |   Algeria        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOTSWANA   |   Botswana        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JORDAN   |   Jordan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NEW_ZEALAND   |   New Zealand        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BERMUDA   |   Bermuda        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BELIZE   |   Belize        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BELGIUM   |   Belgium        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BANGLADESH   |   Bangladesh        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAKER_ISLAND   |   Baker Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAHRAIN   |   Bahrain        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NEPAL   |   Nepal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BURKINA_FASO   |   Burkina Faso        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HOWLAND_ISLAND   |   Howland Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HONDURAS   |   Honduras        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HOLY_SEE   |   Holy See        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MONGOLIA   |   Mongolia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUAM   |   Guam        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_BARTHELEMY   |   Saint Barthelemy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MOZAMBIQUE   |   Mozambique        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YEMEN   |   Yemen        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MALAWI   |   Malawi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MALAYSIA   |   Malaysia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAURITIUS   |   Mauritius        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MICRONESIA_FEDERATED   |   Micronesia Federated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MONACO   |   Monaco        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MONTENEGRO   |   Montenegro        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KINGMAN_REEF   |   Kingman Reef        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOMINICA   |   Dominica        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LESOTHO   |   Lesotho        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRENADA   |   Grenada        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GEORGIA   |   Georgia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FINLAND   |   Finland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ERITREA   |   Eritrea        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ECUADOR   |   Ecuador        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOUVET_ISLAND   |   Bouvet Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NIUE   |   Niue        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_HELENA_ASCENSI   |   Saint Helena Ascensi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RWANDA   |   Rwanda        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PUERTO_RICO   |   Puerto Rico        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PITCAIRN_ISLANDS   |   Pitcairn Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PALMYRA_ATOLL   |   Palmyra Atoll        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OMAN   |   Oman        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NORWAY   |   Norway        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAHAMAS_THE   |   Bahamas The        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NETHERLANDS   |   Netherlands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AKROTIRI   |   Akrotiri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRAN   |   Iran        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRELAND   |   Ireland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ITALY   |   Italy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JAN_MAYEN   |   Jan Mayen        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MADAGASCAR   |   Madagascar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COMOROS   |   Comoros        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DJIBOUTI   |   Djibouti        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUSTRIA   |   Austria        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CAYMAN_ISLANDS   |   Cayman Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANTARCTICA   |   Antarctica        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALBANIA   |   Albania        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    INDIA   |   India        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANDORRA   |   Andorra        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GREENLAND   |   Greenland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NICARAGUA   |   Nicaragua        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EGYPT   |   Egypt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CONGO_BRAZZAVILLE   |   Congo Brazzaville        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CURAÇAO   |   Curaçao        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOMINICAN_REPUBLIC   |   Dominican Republic        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHAD   |   Chad        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHRISTMAS_ISLAND   |   Christmas Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COLOMBIA   |   Colombia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HEARD_ISLAND_AND_MCD   |   Heard Island And Mcd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUYANA   |   Guyana        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COCOS_KEELING_ISLAND   |   Cocos Keeling Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUERNSEY   |   Guernsey        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KOSOVO   |   Kosovo        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRENCH_GUIANA   |   French Guiana        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ESWATINI   |   Eswatini        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CYPRUS   |   Cyprus        |    Available     | Optional     | Allowed |    NA |
| stockExchangeName| Stock Exchange Name        |    EDGA_EXCHANGE_INC   |   Edga Exchange Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EDGX_EXCHANGE_INC   |   Edgx Exchange Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NASDAQ_OMX_BX_INC   |   Nasdaq Omx Bx Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHICAGO_BOARD_OPTIONS   |   Chicago Board Options        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NATIONAL_STOCK_EXCHG   |   National Stock Exchg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    INTERNATIONAL_SECURITY   |   International Security        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    N/A   |   N/A        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NASDAQ_OMX_PHLX_INC   |   Nasdaq Omx Phlx Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHICAGO_STOCK_EXCHG   |   Chicago Stock Exchg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    C2_OPTIONS_EXCHG_INC   |   C2 Options Exchg Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    THE_NASDAQ_STOCK_MKT   |   The Nasdaq Stock Mkt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NYSE_ARCA_INC   |   Nyse Arca Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NYSE_MKT_LLC   |   Nyse Mkt Llc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NEW_YORK_STOCK_EXCHG   |   New York Stock Exchg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BATS_EXCHANGE_INC_F2   |   Bats Exchange Inc F2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BATS_Y_EXCHANGE_INC   |   Bats Y Exchange Inc        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| countryName| Country Name        |    GUADELOUPE   |   Guadeloupe        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GIBRALTAR   |   Gibraltar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GHANA   |   Ghana        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GABON   |   Gabon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FAROE_ISLANDS   |   Faroe Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FIJI   |   Fiji        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANGOLA   |   Angola        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NAMIBIA   |   Namibia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LIECHTENSTEIN   |   Liechtenstein        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUNISIA   |   Tunisia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MONTSERRAT   |   Montserrat        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LIBYA   |   Libya        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BULGARIA   |   Bulgaria        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAYOTTE   |   Mayotte        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAURITANIA   |   Mauritania        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MALDIVES   |   Maldives        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LITHUANIA   |   Lithuania        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LAOS   |   Laos        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VIRGIN_ISLANDS_BRITI   |   Virgin Islands Briti        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KOREA_SOUTH   |   Korea South        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KOREA_NORTH   |   Korea North        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JARVIS_ISLAND   |   Jarvis Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JAMAICA   |   Jamaica        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    INDONESIA   |   Indonesia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HUNGARY   |   Hungary        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUINEA   |   Guinea        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WALLIS_AND_FUTUNA   |   Wallis And Futuna        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOLIVIA   |   Bolivia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BHUTAN   |   Bhutan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CAMEROON   |   Cameroon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SWEDEN   |   Sweden        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SYRIA   |   Syria        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TANZANIA   |   Tanzania        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VENEZUELA   |   Venezuela        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TIMOR_LESTE   |   Timor Leste        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SINT_MAARTEN   |   Sint Maarten        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TUVALU   |   Tuvalu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNITED_STATES   |   United States        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHILE   |   Chile        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CLIPPERTON_ISLAND   |   Clipperton Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CONGO_KINSHASA   |   Congo Kinshasa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EQUATORIAL_GUINEA   |   Equatorial Guinea        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    THAILAND   |   Thailand        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANTIGUA_AND_BARBUDA   |   Antigua And Barbuda        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VIETNAM   |   Vietnam        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZAMBIA   |   Zambia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    N/A   |   N/A        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DENMARK   |   Denmark        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DHEKELIA   |   Dhekelia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EL_SALVADOR   |   El Salvador        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAMOA   |   Samoa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ESTONIA   |   Estonia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ETHIOPIA   |   Ethiopia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VANUATU   |   Vanuatu        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BELARUS   |   Belarus        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ASHMORE_N_CARTIER_ISL   |   Ashmore N Cartier Isl        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARMENIA   |   Armenia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARGENTINA   |   Argentina        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SRI_LANKA   |   Sri Lanka        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WAKE_ISLAND   |   Wake Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VIRGIN_ISLANDS_US   |   Virgin Islands Us        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TURKEY   |   Turkey        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TOGO   |   Togo        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    URUGUAY   |   Uruguay        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNITED_KINGDOM   |   United Kingdom        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TURKS_AND_CAICOS_ISLA   |   Turks And Caicos Isla        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOLOMON_ISLANDS   |   Solomon Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TRINIDAD_AND_TOBAGO   |   Trinidad And Tobago        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TOKELAU   |   Tokelau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SVALBARD   |   Svalbard        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ARUBA   |   Aruba        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SPRATLY_ISLANDS   |   Spratly Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SPAIN   |   Spain        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOUTH_SUDAN   |   South Sudan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AZERBAIJAN   |   Azerbaijan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GREECE   |   Greece        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SLOVAKIA   |   Slovakia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SINGAPORE   |   Singapore        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SERBIA   |   Serbia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PANAMA   |   Panama        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_PIERRE_N_MIQUEL   |   Saint Pierre N Miquel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JERSEY   |   Jersey        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KIRIBATI   |   Kiribati        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOMALIA   |   Somalia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SURINAME   |   Suriname        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SEYCHELLES   |   Seychelles        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_KITTS_AND_NEVIS   |   Saint Kitts And Nevis        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    POLAND   |   Poland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TAJIKISTAN   |   Tajikistan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BARBADOS   |   Barbados        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BURUNDI   |   Burundi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRENCH_POLYNESIA   |   French Polynesia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GAMBIA_THE   |   Gambia The        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GERMANY   |   Germany        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UKRAINE   |   Ukraine        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MALTA   |   Malta        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRANCE   |   France        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAUDI_ARABIA   |   Saudi Arabia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UGANDA   |   Uganda        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOUTH_AFRICA   |   South Africa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PALESTINIAN_TERRITORY   |   Palestinian Territory        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PARACEL_ISLANDS   |   Paracel Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PERU   |   Peru        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PORTUGAL   |   Portugal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ZIMBABWE   |   Zimbabwe        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_LUCIA   |   Saint Lucia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SIERRA_LEONE   |   Sierra Leone        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SWITZERLAND   |   Switzerland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PHILIPPINES   |   Philippines        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SOUTH_GEORGIA_N_S_SAN   |   South Georgia N S San        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UZBEKISTAN   |   Uzbekistan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNITED_ARAB_EMIRATES   |   United Arab Emirates        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TURKMENISTAN   |   Turkmenistan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TONGA   |   Tonga        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SUDAN   |   Sudan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TAIWAN   |   Taiwan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COOK_ISLANDS   |   Cook Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SLOVENIA   |   Slovenia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_VINCENT_N_THE_G   |   Saint Vincent N The G        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SENEGAL   |   Senegal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAO_TOME_AND_PRINCIPE   |   Sao Tome And Principe        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAN_MARINO   |   San Marino        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_MARTIN   |   Saint Martin        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PALAU   |   Palau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RUSSIA   |   Russia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ROMANIA   |   Romania        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REUNION   |   Reunion        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAKISTAN   |   Pakistan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NORTH_MACEDONIA   |   North Macedonia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NIGERIA   |   Nigeria        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MARSHALL_ISLANDS   |   Marshall Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WESTERN_SAHARA   |   Western Sahara        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HAITI   |   Haiti        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MOLDOVA   |   Moldova        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KAZAKHSTAN   |   Kazakhstan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JAPAN   |   Japan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ISRAEL   |   Israel        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUINEA_BISSAU   |   Guinea Bissau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUATEMALA   |   Guatemala        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRENCH_STHERN_ANTAR   |   French Sthern Antar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MIDWAY_ISLANDS   |   Midway Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANGUILLA   |   Anguilla        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MOROCCO   |   Morocco        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NAURU   |   Nauru        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NAVASSA_ISLAND   |   Navassa Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NEW_CALEDONIA   |   New Caledonia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MACAU   |   Macau        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BURMA   |   Burma        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NIGER   |   Niger        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MALI   |   Mali        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KUWAIT   |   Kuwait        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KENYA   |   Kenya        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JOHNSTON_ATOLL   |   Johnston Atoll        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HONG_KONG   |   Hong Kong        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CZ_FALKLAND_ISLANDS   |   Cz Falkland Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ICELAND   |   Iceland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BENIN   |   Benin        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AMERICAN_SAMOA   |   American Samoa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MEXICO   |   Mexico        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MARTINIQUE   |   Martinique        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CZECHIA   |   Czechia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LUXEMBOURG   |   Luxembourg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LIBERIA   |   Liberia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LEBANON   |   Lebanon        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LATVIA   |   Latvia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRUNEI   |   Brunei        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ISLE_OF_MAN   |   Isle Of Man        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRAQ   |   Iraq        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUSTRALIA   |   Australia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CANADA   |   Canada        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CAMBODIA   |   Cambodia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CABO_VERDE   |   Cabo Verde        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRITISH_INDIAN_OCEAN   |   British Indian Ocean        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AFGHANISTAN   |   Afghanistan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KYRGYZSTAN   |   Kyrgyzstan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CENTRAL_AFRICAN_REPUB   |   Central African Repub        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHINA   |   China        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CORAL_SEA_ISLANDS   |   Coral Sea Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COSTA_RICA   |   Costa Rica        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CROATIA   |   Croatia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CUBA   |   Cuba        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOSNIA_AND_HERZEGOVIN   |   Bosnia And Herzegovin        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BRAZIL   |   Brazil        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NORFOLK_ISLAND   |   Norfolk Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NORTHERN_MARIANA_ISLE   |   Northern Mariana Isle        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PAPUA_NEW_GUINEA   |   Papua New Guinea        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PARAGUAY   |   Paraguay        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    QATAR   |   Qatar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALGERIA   |   Algeria        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOTSWANA   |   Botswana        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JORDAN   |   Jordan        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NEW_ZEALAND   |   New Zealand        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BERMUDA   |   Bermuda        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BELIZE   |   Belize        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BELGIUM   |   Belgium        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BANGLADESH   |   Bangladesh        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAKER_ISLAND   |   Baker Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAHRAIN   |   Bahrain        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NEPAL   |   Nepal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BURKINA_FASO   |   Burkina Faso        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HOWLAND_ISLAND   |   Howland Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HONDURAS   |   Honduras        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HOLY_SEE   |   Holy See        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MONGOLIA   |   Mongolia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUAM   |   Guam        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_BARTHELEMY   |   Saint Barthelemy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MOZAMBIQUE   |   Mozambique        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YEMEN   |   Yemen        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MALAWI   |   Malawi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MALAYSIA   |   Malaysia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAURITIUS   |   Mauritius        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MICRONESIA_FEDERATED   |   Micronesia Federated        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MONACO   |   Monaco        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MONTENEGRO   |   Montenegro        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KINGMAN_REEF   |   Kingman Reef        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOMINICA   |   Dominica        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    LESOTHO   |   Lesotho        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GRENADA   |   Grenada        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GEORGIA   |   Georgia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FINLAND   |   Finland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ERITREA   |   Eritrea        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ECUADOR   |   Ecuador        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BOUVET_ISLAND   |   Bouvet Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NIUE   |   Niue        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SAINT_HELENA_ASCENSI   |   Saint Helena Ascensi        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    RWANDA   |   Rwanda        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PUERTO_RICO   |   Puerto Rico        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PITCAIRN_ISLANDS   |   Pitcairn Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PALMYRA_ATOLL   |   Palmyra Atoll        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OMAN   |   Oman        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NORWAY   |   Norway        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAHAMAS_THE   |   Bahamas The        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NETHERLANDS   |   Netherlands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AKROTIRI   |   Akrotiri        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRAN   |   Iran        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    IRELAND   |   Ireland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ITALY   |   Italy        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    JAN_MAYEN   |   Jan Mayen        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MADAGASCAR   |   Madagascar        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COMOROS   |   Comoros        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DJIBOUTI   |   Djibouti        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    AUSTRIA   |   Austria        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CAYMAN_ISLANDS   |   Cayman Islands        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANTARCTICA   |   Antarctica        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ALBANIA   |   Albania        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    INDIA   |   India        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ANDORRA   |   Andorra        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GREENLAND   |   Greenland        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NICARAGUA   |   Nicaragua        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EGYPT   |   Egypt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CONGO_BRAZZAVILLE   |   Congo Brazzaville        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CURAÇAO   |   Curaçao        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DOMINICAN_REPUBLIC   |   Dominican Republic        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHAD   |   Chad        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHRISTMAS_ISLAND   |   Christmas Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COLOMBIA   |   Colombia        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    HEARD_ISLAND_AND_MCD   |   Heard Island And Mcd        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUYANA   |   Guyana        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    COCOS_KEELING_ISLAND   |   Cocos Keeling Island        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    GUERNSEY   |   Guernsey        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KOSOVO   |   Kosovo        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRENCH_GUIANA   |   French Guiana        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ESWATINI   |   Eswatini        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CYPRUS   |   Cyprus        |    Available     | Optional     | Allowed |    NA |
| stockExchangeName| Stock Exchange Name        |    EDGA_EXCHANGE_INC   |   Edga Exchange Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EDGX_EXCHANGE_INC   |   Edgx Exchange Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NASDAQ_OMX_BX_INC   |   Nasdaq Omx Bx Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHICAGO_BOARD_OPTIONS   |   Chicago Board Options        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NATIONAL_STOCK_EXCHG   |   National Stock Exchg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    INTERNATIONAL_SECURITY   |   International Security        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    N/A   |   N/A        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NASDAQ_OMX_PHLX_INC   |   Nasdaq Omx Phlx Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CHICAGO_STOCK_EXCHG   |   Chicago Stock Exchg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    C2_OPTIONS_EXCHG_INC   |   C2 Options Exchg Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    THE_NASDAQ_STOCK_MKT   |   The Nasdaq Stock Mkt        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NYSE_ARCA_INC   |   Nyse Arca Inc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NYSE_MKT_LLC   |   Nyse Mkt Llc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NEW_YORK_STOCK_EXCHG   |   New York Stock Exchg        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BATS_EXCHANGE_INC_F2   |   Bats Exchange Inc F2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BATS_Y_EXCHANGE_INC   |   Bats Y Exchange Inc        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### sunocoAutoboarding

---

tags: [sunocoAutoboarding]

---

* Description: Sunoco Autoboarding

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| posPartnerName| Pos Partner Name        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| rollback5CentIndicator| Rollback 5 Cent Indicator        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| posPartnerName| Pos Partner Name        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |
| rollback5CentIndicator| Rollback 5 Cent Indicator        |    STRING   |   String        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### transactionControl

---

tags: [transactionControl]

---

* Description: Transaction Control

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| cardActivatedTerminalCode| Merchant identified type of cardholders activated terminals that will be accepted         |    No   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    Yes   |   Yes        |    Available     | Optional     | Allowed |    NA |
| commercialCardInterchangeServiceCode| Indicates the level of participation in the mastercard or visa commercial card interchange service        |    DERIVE_TAX_MC   |   Derive Tax Mc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_PARTICIPATING   |   Not Participating        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DERIVE_TAX_VISA   |   Derive Tax Visa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DERIVE_TAX_MC_VISA   |   Derive Tax Mc Visa        |    Available     | Optional     | Allowed |    NA |
| efraudServiceCode| EFraud Service level code        |    BASIC   |   Basic        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DEACTIVATE_SERVICE   |   Deactivate Service        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PREMIUM   |   Premium        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PREMIUM_PLUS   |   Premium Plus        |    Available     | Optional     | Allowed |    NA |
| fraudFlexEffectiveDate| Fraud Flex Effective Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| fraudFlexIndicator| Fraud Flex Detect Indicator        |    FRAUD_SCORE_PROD   |   Fraud Score Prod        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_FRAUD_SCORE   |   No Fraud Score        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRAUS_SCORE_CERT   |   Fraus Score Cert        |    Available     | Optional     | Allowed |    NA |
|   -   |     -    |    PAYEEZY   |   Payeezy        |    Available     | Optional     | Allowed |    NA |
| globalGatewayE4EffectiveDate| Payeezy gateway effective date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| globalGatewayE4Indicator |  Indicates if the merchant uses the Payeezy Gateway  |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    STAGED   |   Staged        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| mastercardIramIndicator| Mastercard Incremental Reversal Auth Match indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| mastercardTieredMerchantId| Mastercard tiered merchant ID        |    STRING containing digits only - MERCHANT ID   |   String Containing Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| visaDebitAcceptIndicator| Describes level of Visa Debit Acceptance         |    VISA_DEBIT_POS   |   Visa Debit Pos        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VISA_DEBIT_CNP   |   Visa Debit Cnp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_VISA_DEBIT   |   No Visa Debit        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VISA_DEBIT_ALL   |   Visa Debit All        |    Available     | Optional     | Allowed |    NA |
| visaIramIndicator| Visa Incremental Reversal Auth Match indicator         |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| visaMerchantVerificationValue| Visa merchant verification value        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| visaMviReserveAmount| VISA MVI Reserve amount        |    STRING containing digits with decimal. Format: 00.00   |   String Containing Digits With Decimal. Format: 00.00        |    Available     | Optional     | Allowed |    NA |
| visaRelationshipIndicator| Visa relationship particpant indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramAuthSourceCode| Visa Technology Migration Program  authorization source code        |    OFFLINE   |   Offline        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REFFERAL   |   Refferal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONTMP_NONAPPRVD_TRANS   |   Nontmp Nonapprvd Trans        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ISS_APPRVD   |   Iss Apprvd        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramCardholderIdCode| Visa Technology Migration Program  cardholder ID code        |    UNATTENDED_NOPIN_4   |   Unattended Nopin 4        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNATTENDED_NOPIN_3   |   Unattended Nopin 3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PIN_ENTERED   |   Pin Entered        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SIG_VERIFIED   |   Sig Verified        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramEntryMode| Visa Technology Migration Program terminal entry mode code        |    MAG_STRP_TRACK_READ_XMIT   |   Mag Strp Track Read Xmit        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TERM_NOT_USED   |   Term Not Used        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAG_STRP_TRACK2   |   Mag Strp Track2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAG_STRP_TRACK1   |   Mag Strp Track1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KEY_ENTERED   |   Key Entered        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramPointofsaleCapabilityCode| Visa Technology Migration Program terminal capability code         |    CHIP_CARD   |   Chip Card        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNKNOWNOWN   |   Unknownown        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAG_STRP   |   Mag Strp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CARD_DATA_NOT_READ   |   Card Data Not Read        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OCR_READ   |   Ocr Read        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CONTACTLESS   |   Contactless        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAR_CODE_READ   |   Bar Code Read        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TERM_NOT_USED   |   Term Not Used        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramRequestCode| Visa Technology Migration Program request code        |    NOT_TMP_QUAL   |   Not Tmp Qual        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_MASTER_VALUES   |   Use Master Values        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TMP_QUAL   |   Tmp Qual        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramServiceLevelCode| Visa Technology Migration Program service level code        |    SERVICE   |   Service        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_SERVICE   |   No Service        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TIIF2_M3   |   Tiif2 M3        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| cardActivatedTerminalCode| Merchant identified type of cardholders activated terminals that will be accepted         |    No   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    Yes   |   Yes        |    Available     | Optional     | Allowed |    NA |
| commercialCardInterchangeServiceCode| Indicates the level of participation in the mastercard or visa commercial card interchange service        |    DERIVE_TAX_MC   |   Derive Tax Mc        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_PARTICIPATING   |   Not Participating        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DERIVE_TAX_VISA   |   Derive Tax Visa        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DERIVE_TAX_MC_VISA   |   Derive Tax Mc Visa        |    Available     | Optional     | Allowed |    NA |
| efraudServiceCode| EFraud Service level code        |    BASIC   |   Basic        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    DEACTIVATE_SERVICE   |   Deactivate Service        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PREMIUM   |   Premium        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONE   |   None        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PREMIUM_PLUS   |   Premium Plus        |    Available     | Optional     | Allowed |    NA |
| fraudFlexEffectiveDate| Fraud Flex Effective Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| fraudFlexIndicator| Fraud Flex Detect Indicator        |    FRAUD_SCORE_PROD   |   Fraud Score Prod        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_FRAUD_SCORE   |   No Fraud Score        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    FRAUS_SCORE_CERT   |   Fraus Score Cert        |    Available     | Optional     | Allowed |    NA |
|   -   |     -    |    PAYEEZY   |   Payeezy        |    Available     | Optional     | Allowed |    NA |
| globalGatewayE4EffectiveDate| Payeezy gateway effective date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| globalGatewayE4Indicator |  Indicates if the merchant uses the Payeezy Gateway  |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    STAGED   |   Staged        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| mastercardIramIndicator| Mastercard Incremental Reversal Auth Match indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| mastercardTieredMerchantId| Mastercard tiered merchant ID        |    STRING containing digits only - MERCHANT ID   |   String Containing Digits Only - Merchant Id        |    Available     | Optional     | Allowed |    NA |
| visaDebitAcceptIndicator| Describes level of Visa Debit Acceptance         |    VISA_DEBIT_POS   |   Visa Debit Pos        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VISA_DEBIT_CNP   |   Visa Debit Cnp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_VISA_DEBIT   |   No Visa Debit        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    VISA_DEBIT_ALL   |   Visa Debit All        |    Available     | Optional     | Allowed |    NA |
| visaIramIndicator| Visa Incremental Reversal Auth Match indicator         |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| visaMerchantVerificationValue| Visa merchant verification value        |    STRING containing digits only   |   String Containing Digits Only        |    Available     | Optional     | Allowed |    NA |
| visaMviReserveAmount| VISA MVI Reserve amount        |    STRING containing digits with decimal. Format: 00.00   |   String Containing Digits With Decimal. Format: 00.00        |    Available     | Optional     | Allowed |    NA |
| visaRelationshipIndicator| Visa relationship particpant indicator        |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramAuthSourceCode| Visa Technology Migration Program  authorization source code        |    OFFLINE   |   Offline        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REFFERAL   |   Refferal        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NONTMP_NONAPPRVD_TRANS   |   Nontmp Nonapprvd Trans        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ISS_APPRVD   |   Iss Apprvd        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramCardholderIdCode| Visa Technology Migration Program  cardholder ID code        |    UNATTENDED_NOPIN_4   |   Unattended Nopin 4        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNATTENDED_NOPIN_3   |   Unattended Nopin 3        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    PIN_ENTERED   |   Pin Entered        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    SIG_VERIFIED   |   Sig Verified        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramEntryMode| Visa Technology Migration Program terminal entry mode code        |    MAG_STRP_TRACK_READ_XMIT   |   Mag Strp Track Read Xmit        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TERM_NOT_USED   |   Term Not Used        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAG_STRP_TRACK2   |   Mag Strp Track2        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAG_STRP_TRACK1   |   Mag Strp Track1        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    KEY_ENTERED   |   Key Entered        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramPointofsaleCapabilityCode| Visa Technology Migration Program terminal capability code         |    CHIP_CARD   |   Chip Card        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    UNKNOWNOWN   |   Unknownown        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    MAG_STRP   |   Mag Strp        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CARD_DATA_NOT_READ   |   Card Data Not Read        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    OCR_READ   |   Ocr Read        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    CONTACTLESS   |   Contactless        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    BAR_CODE_READ   |   Bar Code Read        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TERM_NOT_USED   |   Term Not Used        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramRequestCode| Visa Technology Migration Program request code        |    NOT_TMP_QUAL   |   Not Tmp Qual        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    USE_MASTER_VALUES   |   Use Master Values        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TMP_QUAL   |   Tmp Qual        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    YES   |   Yes        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO   |   No        |    Available     | Optional     | Allowed |    NA |
| visaTechnologyMigrationProgramServiceLevelCode| Visa Technology Migration Program service level code        |    SERVICE   |   Service        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_SERVICE   |   No Service        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    TIIF2_M3   |   Tiif2 M3        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### trustKeeper

---

tags: [trustKeeper]

---

* Description: Trust Keeper

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| trustkeeperDate| Trustkeeper Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| trustkeeperIndicator| Trustkeeper Indicator        |    ENROLLED   |   Enrolled        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EXPIRED   |   Expired        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_RESPONSE   |   No Response        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REFUSED   |   Refused        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_ENROLLED   |   Not Enrolled        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
| trustkeeperDate| Trustkeeper Date        |    STRING (max/min length - 10)   |   String (Max/Min Length: 10)        |    Available     | Optional     | Allowed |    NA |
| trustkeeperIndicator| Trustkeeper Indicator        |    ENROLLED   |   Enrolled        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    EXPIRED   |   Expired        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NO_RESPONSE   |   No Response        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    REFUSED   |   Refused        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    NOT_ENROLLED   |   Not Enrolled        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### wfbCanadaEmergingMarkets

---

tags: [wfbCanadaEmergingMarkets]

---

* Description: Wfb Canada Emerging Markets

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|     offeringType             |       Offering Type           |    DAILY_FANTASY_SPORTS   |   Daily Fantasy Sports        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLINE_GAMBLING   |   Online Gambling        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|     offeringType             |       Offering Type           |    DAILY_FANTASY_SPORTS   |   Daily Fantasy Sports        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    ONLINE_GAMBLING   |   Online Gambling        |    Available     | Optional     | Allowed |    NA |

<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

### wfbSurcharge

---

tags: [wfbSurcharge]

---

* Description: Wfpg Surcharge Acct

* List of Attributes:

<!-- type: tab 
titles: UMM, North, GMA 
-->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|     offeringType             |       Offering Type           |    EBILL_EXPRESS_SURCHARGE   |   Ebill Express Surcharge        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WFPG_SURCHARGE_ACCT   |   WFPG Surcharge Acct        |    Available     | Optional     | Allowed |    NA |
<!-- type: tab -->

| Attribute                    | Description                                       | Values        | Value Description                                         | Inquiry  | Create   | Update   |  Delete  |
|:-----------------------------|:--------------------------------------------------|:--------------|:----------------------------------------------------------|:--------:|:--------:|:--------:|:--------:|
|     offeringType             |       Offering Type           |    EBILL_EXPRESS_SURCHARGE   |   Ebill Express Surcharge        |    Available     | Optional     | Allowed |    NA |
|          -            |                 -                    |    WFPG_SURCHARGE_ACCT   |   WFPG Surcharge Acct        |    Available     | Optional     | Allowed |    NA |
<!-- type: tab -->

| Attribute | Description | Values | Value Description | Inquiry  | Create | Update |  Delete  |
|:---------|:------------|:--------------|:------------|:--------:|:------:|:------:|:--------:|
| NA | NA  | NA | NA |  NA  |  NA  |  NA  | NA |

<!-- type: tab-end -->

# Business Event: Account Information Summary Data Updated

## Overview

The Customer Agreement service domain publishes `Account_Information_Summary_Data_Updated` as part of the `Agreement_Lifecycle` event family. The publication informs downstream consumers that the Account information summary data updated business activity occurred in VisionNext.

**Standard:** BIAN

**Service Domain:** Customer Agreement

**BusinessEventName:** `Account_Information_Summary_Data_Updated`

**BusinessEventGroup:** `Agreement_Lifecycle`

## Purpose

Publish the Account information summary data updated event so downstream consumers can react to the update represented by the source event.

## Business Trigger

AIS trigger fields ClearingSystemMemberIdentification AccountIdentification status creditLimit nextStatementDate

### In this example

- `AgreementId`: `AGREEMENT-1000001`
- `Changes[].Changed.ProductId`: `PRODUCT-1001`
- `Changes[].Changed.Status`: `Enabled`
- `Schema`: `agreement`

## Typical Consumers

- Customer servicing and case-management applications
- Agreement, account-processing, billing, and collections services
- Event data hub, analytics, and operational monitoring consumers
- Notification and downstream customer-engagement services

## Business Context

### Business Scenario

Customer Agreement publishes `Account_Information_Summary_Data_Updated` when the documented trigger occurs: aIS trigger fields ClearingSystemMemberIdentification AccountIdentification status creditLimit nextStatementDate.

Downstream consumers subscribe to the event so they can update their local view of the business state without coupling directly to the producing service.

### Publisher

| Attribute | Value |
| --- | --- |
| Domain | Customer Agreement |
| Event | `Account_Information_Summary_Data_Updated` |
| Event Group | `Agreement_Lifecycle` |
| Trigger | AIS trigger fields ClearingSystemMemberIdentification AccountIdentification status creditLimit nextStatementDate |
| Business Purpose | Publish the Account information summary data updated event so downstream consumers can react to the update represented by the source event. |

### Business Consumers

| Consumer | Subscription Purpose |
| --- | --- |
| Customer servicing and case-management applications | Consume `Account_Information_Summary_Data_Updated` to keep local business state aligned with the source event. |
| Agreement, account-processing, billing, and collections services | Maintain agreement state and lifecycle processing related to `Account_Information_Summary_Data_Updated`. |
| Event data hub, analytics, and operational monitoring consumers | Support reporting, operational metrics, and trend analysis for `Account_Information_Summary_Data_Updated`. |
| Notification and downstream customer-engagement services | Notify customers or channels when the Account information summary data updated occurs. |

### Business Outcome

The event establishes an authoritative enterprise record for the `Account_Information_Summary_Data_Updated` business occurrence. Subscribing systems use it to keep servicing, operations, analytics, audit, and customer-facing views aligned with the source event state.

Without publication of this event, downstream systems may continue operating from stale state, causing inconsistent servicing decisions, delayed operational follow-up, incomplete audit history, or mismatched analytical reporting.

## Short Publication Version

`Account_Information_Summary_Data_Updated` notifies subscribers that the Account information summary data updated business activity occurred in VisionNext.

## Event Schema

### Event Header

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Version` | string | Event schema version for the published contract. | v1.0 |
| `FiId` | string | Financial institution identifier for the tenant that owns the event. | FI-1001 |
| `BrandId` | string | Brand identifier under the financial institution. | BRAND-001 |
| `BusinessEventId` | string | Unique identifier for this business-event instance. | be-11111111-2222-3333-8444-555555555555 |
| `BusinessEventName` | string | Fixed business event name used by subscribers and routing configuration. | Account_Information_Summary_Data_Updated |
| `BusinessEventGroup` | string | Fixed event family or lifecycle group used for classification. | Agreement_Lifecycle |
| `UserId` | string | User, process, or service actor associated with the event when available. | USER-1001 |
| `Channel` | string | Channel or source through which the business action was initiated. | API |
| `BusinessEventDateTime` | string | UTC timestamp when the business event was generated. | 2026-09-17T10:00:00.000Z |
| `TraceState` | string | W3C trace state used for distributed tracing. | vn-trace-id=0cd9816cd865cd7b44074d619b3d5891 |
| `TraceParent` | string | W3C trace parent used for distributed tracing. | 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01 |

### Event Body

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `AgreementId` | string | Unique agreement identifier associated with the event. | AGREEMENT-1000001 |
| `Schema` | string | Event-specific schema value supplied by the agreement event. | agreement |
| `DatabaseTransactionId` | string | Identifier for the related database transaction id in the Account information summary data updated event. | TXN-1000001 |
| `Changes` | `array<object>` | Collection of changes entries carried by the event. | null |
| `Changes[].Schema` | string | Event-specific schema value supplied by the agreement event. | agreement |
| `Changes[].Table` | string | Event-specific table value supplied by the agreement event. | agreement |
| `Changes[].Operation` | string | Event-specific operation value supplied by the agreement event. | ADD |
| `Changes[].RecordKey` | object | Nested record key object carried by the event. | null |
| `Changes[].RecordKey.id` | string | Identifier for the related id in the Account information summary data updated event. | ID-1001 |
| `Changes[].Changed` | object | Nested changed object carried by the event. | null |
| `Changes[].Changed.ClosingDate` | nullable | Date or timestamp associated with closing date for this event. | null |
| `Changes[].Changed.AltIdProtected` | string | Event-specific alt id protected value supplied by the agreement event. | ALT-ID-PROTECTED-1001 |
| `Changes[].Changed.IsNetworkAccountUpdaterOptedOut` | boolean | Date or timestamp associated with is network account updater opted out for this event. | false |
| `Changes[].Changed.FirstTransactionDate` | nullable | Date or timestamp associated with first transaction date for this event. | null |
| `Changes[].Changed.BlockedReasonCode` | nullable | Reason value associated with blocked reason code. | null |
| `Changes[].Changed.ClosedStatusReasonCode` | nullable | Status value represented by closed status reason code. | null |
| `Changes[].Changed.BtLimitAmount` | nullable | Amount, balance, or numeric value for bt limit amount. | null |
| `Changes[].Changed.CreditLimitCurrency` | nullable | Amount, balance, or numeric value for credit limit currency. | null |
| `Changes[].Changed.ClosureRequestDate` | nullable | Date or timestamp associated with closure request date for this event. | null |
| `Changes[].Changed.CreatedDateTime` | string | Date or timestamp associated with created date time for this event. | 2026-09-17T10:00:00.000Z |
| `Changes[].Changed.AgreementId` | string | Unique agreement identifier associated with the event. | AGREEMENT-1000001 |
| `Changes[].Changed.UpdatedDateTime` | nullable | Date or timestamp associated with updated date time for this event. | null |
| `Changes[].Changed.BalanceClearedDateTime` | nullable | Date or timestamp associated with balance cleared date time for this event. | null |
| `Changes[].Changed.Id` | string | Identifier for the related id in the Account information summary data updated event. | ID-1001 |
| `Changes[].Changed.StatusChangedDateTime` | nullable | Date or timestamp associated with status changed date time for this event. | null |
| `Changes[].Changed.BrandId` | string | Brand identifier under the financial institution. | BRAND-001 |
| `Changes[].Changed.CreditLimitAmount` | nullable | Amount, balance, or numeric value for credit limit amount. | null |
| `Changes[].Changed.OpeningDate` | string | Date or timestamp associated with opening date for this event. | 2026-09-17 |
| `Changes[].Changed.IsClosed` | boolean | Event-specific is closed value supplied by the agreement event. | false |
| `Changes[].Changed.AltId` | nullable | Identifier for the related alt id in the Account information summary data updated event. | null |
| `Changes[].Changed.CashLimitAmount` | nullable | Amount, balance, or numeric value for cash limit amount. | null |
| `Changes[].Changed.BtLimitCurrency` | nullable | Amount, balance, or numeric value for bt limit currency. | null |
| `Changes[].Changed.ProductId` | string | Product identifier associated with the agreement, card, reward, or transaction context. | PRODUCT-1001 |
| `Changes[].Changed.VnId` | nullable | Identifier for the related vn id in the Account information summary data updated event. | null |
| `Changes[].Changed.DateToDisable` | nullable | Date or timestamp associated with date to disable for this event. | null |
| `Changes[].Changed.MtLimitAmount` | nullable | Amount, balance, or numeric value for mt limit amount. | null |
| `Changes[].Changed.VnTraceId` | string | Identifier for the related vn trace id in the Account information summary data updated event. | VN-TRACE-ID-1001 |
| `Changes[].Changed.BillingCycleDay` | string | Event-specific billing cycle day value supplied by the agreement event. | 31 |
| `Changes[].Changed.BillOverlimitFeeNextCycle` | boolean | Amount, balance, or numeric value for bill overlimit fee next cycle. | false |
| `Changes[].Changed.MtLimitCurrency` | nullable | Amount, balance, or numeric value for mt limit currency. | null |
| `Changes[].Changed.CashLimitCurrency` | nullable | Amount, balance, or numeric value for cash limit currency. | null |
| `Changes[].Changed.Status` | string | Business status value represented by this event. | Enabled |
| `Changes[].Changed.FiId` | string | Financial institution identifier for the tenant that owns the event. | FI-1001 |
| `Changes[].RecordBeforeChange` | object | Nested record before change object carried by the event. | null |
| `Changes[].Unchanged` | object | Nested unchanged object carried by the event. | null |

### Reference Data - Agreement

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `AgreementId` | string | Unique agreement identifier associated with the event. | AGREEMENT-1000001 |
| `AgreementAlternateId` | integer | Identifier for the related agreement alternate id in the Account information summary data updated event. | 1001 |
| `FinancialInstitutionId` | string | Identifier for the related financial institution id in the Account information summary data updated event. | FI-1001 |
| `BrandId` | string | Brand identifier under the financial institution. | BRAND-001 |
| `ProductId` | string | Product identifier associated with the agreement, card, reward, or transaction context. | PRODUCT-1001 |
| `Status` | string | Business status value represented by this event. | ACTIVE |
| `StatusChangedDateTime` | string | Date or timestamp associated with status changed date time for this event. | 2026-09-17T10:00:00.000Z |
| `Closed` | boolean | Event-specific closed value supplied by the agreement event. | true |
| `CreditBalance` | object | Amount, balance, or numeric value for credit balance. | null |
| `CreditBalance.Value` | integer | Numeric value for the related amount or balance object. | 125 |
| `CreditBalance.Currency` | string | ISO currency code for the related monetary amount. | USD |
| `Balances` | `array<object>` | Amount, balance, or numeric value for balances. | null |
| `Balances[].BalanceType` | string | Amount, balance, or numeric value for balance type. | STANDARD |
| `Balances[].FacilityId` | string | Identifier for the related facility id in the Account information summary data updated event. | FACILITY-ID-1001 |
| `Balances[].CurrentBalance` | object | Amount, balance, or numeric value for current balance. | null |
| `Balances[].CurrentBalance.Value` | integer | Numeric value for the related amount or balance object. | 125 |
| `Balances[].CurrentBalance.Currency` | string | ISO currency code for the related monetary amount. | USD |
| `Balances[].PendingBalance` | object | Amount, balance, or numeric value for pending balance. | null |
| `Balances[].PendingBalance.Value` | integer | Numeric value for the related amount or balance object. | 125 |
| `Balances[].PendingBalance.Currency` | string | ISO currency code for the related monetary amount. | USD |
| `Balances[].AvailableBalance` | object | Amount, balance, or numeric value for available balance. | null |
| `Balances[].AvailableBalance.Value` | integer | Numeric value for the related amount or balance object. | 125 |
| `Balances[].AvailableBalance.Currency` | string | ISO currency code for the related monetary amount. | USD |
| `Balances[].UnappliedPendingBalance` | object | Amount, balance, or numeric value for unapplied pending balance. | null |
| `Balances[].UnappliedPendingBalance.Value` | integer | Numeric value for the related amount or balance object. | 125 |
| `Balances[].UnappliedPendingBalance.Currency` | string | ISO currency code for the related monetary amount. | USD |
| `Balances[].Limit` | object | Amount, balance, or numeric value for limit. | null |
| `Balances[].Limit.Value` | integer | Numeric value for the related amount or balance object. | 125 |
| `Balances[].Limit.Currency` | string | ISO currency code for the related monetary amount. | USD |
| `PaymentDueDate` | string | Date or timestamp associated with payment due date for this event. | 2026-09-17 |
| `CurrentDueAmount` | object | Amount, balance, or numeric value for current due amount. | null |
| `CurrentDueAmount.Value` | integer | Numeric value for the related amount or balance object. | 125 |
| `CurrentDueAmount.Currency` | string | ISO currency code for the related monetary amount. | USD |
| `PastDueAmount` | object | Amount, balance, or numeric value for past due amount. | null |
| `PastDueAmount.Value` | integer | Numeric value for the related amount or balance object. | 125 |
| `PastDueAmount.Currency` | string | ISO currency code for the related monetary amount. | USD |
| `TotalDueAmount` | object | Amount, balance, or numeric value for total due amount. | null |
| `TotalDueAmount.Value` | integer | Numeric value for the related amount or balance object. | 125 |
| `TotalDueAmount.Currency` | string | ISO currency code for the related monetary amount. | USD |
| `DelinquencyLevel` | integer | Event-specific delinquency level value supplied by the agreement event. | 1 |
| `BilledCount` | integer | Event-specific billed count value supplied by the agreement event. | 1 |
| `EffectiveMissedDueDate` | string | Date or timestamp associated with effective missed due date for this event. | 2026-09-17 |
| `EffectiveDelinquentDate` | string | Date or timestamp associated with effective delinquent date for this event. | 2026-09-17 |
| `EffectiveDelinquentDays` | integer | Event-specific effective delinquent days value supplied by the agreement event. | 1 |
| `EffectiveMissedDueDays` | integer | Event-specific effective missed due days value supplied by the agreement event. | 1 |
| `BillOverlimitFeeNextCycle` | boolean | Amount, balance, or numeric value for bill overlimit fee next cycle. | true |
| `AgreementInvolvements` | `array<object>` | Collection of agreement involvements entries carried by the event. | null |
| `AgreementInvolvements[].AgreementInvolvementId` | string | Identifier for the related agreement involvement id in the Account information summary data updated event. | AGREEMENT-1000001 |
| `AgreementInvolvements[].PartyId` | string | Unique party identifier associated with the event. | PARTY-1000001 |
| `AgreementInvolvements[].PartyRole` | string | Event-specific party role value supplied by the agreement event. | string |
| `AgreementInvolvements[].IsActive` | boolean | Event-specific is active value supplied by the agreement event. | true |
| `OpeningDate` | string | Date or timestamp associated with opening date for this event. | 2026-09-17 |
| `ExternalAccount` | `array<object>` | Collection of external account entries carried by the event. | null |
| `ExternalAccount[].ClearingSystemIdentificationCode` | string | Code value for clearing system identification code. | string |
| `ExternalAccount[].AccountIdentification` | string | Event-specific account identification value supplied by the agreement event. | ACCOUNT-IDENTIFIER-1001 |
| `ExternalAccount[].ClearingSystemMemberIdentification` | string | Event-specific clearing system member identification value supplied by the agreement event. | string |
| `BusinessStatuses` | `array<object>` | Status value represented by business statuses. | null |
| `BusinessStatuses[].Source` | string | Event-specific source value supplied by the agreement event. | string |
| `BusinessStatuses[].BusinessStatus` | string | Status value represented by business status. | ACTIVE |
| `BusinessStatuses[].BusinessStatusAddedDateTime` | string | Date or timestamp associated with business status added date time for this event. | 2026-09-17T10:00:00.000Z |
| `LatestTransfer` | object | Nested latest transfer object carried by the event. | null |
| `LatestTransfer.TransferRequestId` | string | Identifier for the related transfer request id in the Account information summary data updated event. | REQUEST-1001 |
| `LatestTransfer.TransferRequestDate` | string | Date or timestamp associated with transfer request date for this event. | 2026-09-17 |
| `LatestTransfer.TransferStatus` | string | Status value represented by transfer status. | ACTIVE |
| `LatestTransfer.TransferReason` | string | Reason value associated with transfer reason. | CUSTOMER_REQUEST |
| `LatestTransfer.SourceProduct` | object | Nested source product object carried by the event. | null |
| `LatestTransfer.SourceProduct.ProductId` | string | Product identifier associated with the agreement, card, reward, or transaction context. | PRODUCT-1001 |
| `LatestTransfer.SourceProduct.ProductType` | string | Type classification for product type. | STANDARD |
| `LatestTransfer.TargetProduct` | object | Nested target product object carried by the event. | null |
| `LatestTransfer.TargetProduct.ProductId` | string | Product identifier associated with the agreement, card, reward, or transaction context. | PRODUCT-1001 |
| `LatestTransfer.TargetProduct.ProductType` | string | Type classification for product type. | STANDARD |

### Sample

```json
{
  "EventHeader": {
    "Version": "v1.0",
    "FiId": "FI-1001",
    "BrandId": "BRAND-001",
    "BusinessEventId": "be-11111111-2222-3333-8444-555555555555",
    "BusinessEventName": "Account_Information_Summary_Data_Updated",
    "BusinessEventGroup": "Agreement_Lifecycle",
    "UserId": "USER-1001",
    "Channel": "API",
    "BusinessEventDateTime": "2026-09-17T10:00:00.000Z",
    "TraceState": "vn-trace-id=0cd9816cd865cd7b44074d619b3d5891",
    "TraceParent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "EventBody": {
    "AgreementId": "AGREEMENT-1000001",
    "Schema": "agreement",
    "DatabaseTransactionId": "TXN-1000001",
    "Changes": [
      {
        "Schema": "agreement",
        "Table": "agreement",
        "Operation": "ADD",
        "RecordKey": {
          "id": "ID-1001"
        },
        "Changed": {
          "ClosingDate": null,
          "AltIdProtected": "ALT-ID-PROTECTED-1001",
          "IsNetworkAccountUpdaterOptedOut": false,
          "FirstTransactionDate": null,
          "BlockedReasonCode": null,
          "ClosedStatusReasonCode": null,
          "BtLimitAmount": null,
          "CreditLimitCurrency": null,
          "ClosureRequestDate": null,
          "CreatedDateTime": "2026-09-17T10:00:00.000Z",
          "AgreementId": "AGREEMENT-1000001",
          "UpdatedDateTime": null,
          "BalanceClearedDateTime": null,
          "Id": "ID-1001",
          "StatusChangedDateTime": null,
          "BrandId": "BRAND-001",
          "CreditLimitAmount": null,
          "OpeningDate": "2026-09-17",
          "IsClosed": false,
          "AltId": null,
          "CashLimitAmount": null,
          "BtLimitCurrency": null,
          "ProductId": "PRODUCT-1001",
          "VnId": null,
          "DateToDisable": null,
          "MtLimitAmount": null,
          "VnTraceId": "VN-TRACE-ID-1001",
          "BillingCycleDay": "31",
          "BillOverlimitFeeNextCycle": false,
          "MtLimitCurrency": null,
          "CashLimitCurrency": null,
          "Status": "Enabled",
          "FiId": "FI-1001"
        },
        "RecordBeforeChange": {},
        "Unchanged": {}
      },
      {
        "Schema": "agreement",
        "Table": "external_account",
        "Operation": "ADD",
        "RecordKey": {
          "id": "ID-1001"
        },
        "Changed": {
          "CreatedDateTime": "2026-09-17T10:00:00.000Z",
          "ClearingSystemIdentificationCode": "GBDSC",
          "AgreementId": null,
          "UpdatedDateTime": null,
          "ClearingSystemMemberIdentification": "1e150e0d-32b7-4a64-b40f-7f2736c7709d",
          "VnTraceId": "VN-TRACE-ID-1001",
          "AccountIdentificationCode": "ACCOUNT-IDENTIFIER-1001",
          "Id": "ID-1001"
        },
        "RecordBeforeChange": {},
        "Unchanged": {}
      },
      {
        "Schema": "agreement",
        "Table": "external_account",
        "Operation": "UPDATE",
        "RecordKey": {
          "id": "ID-1001"
        },
        "Changed": {
          "AgreementId": "AGREEMENT-1000001"
        },
        "RecordBeforeChange": {
          "AgreementId": null
        },
        "Unchanged": {
          "CreatedDateTime": "2026-09-17T10:00:00.000Z",
          "ClearingSystemIdentificationCode": "GBDSC",
          "UpdatedDateTime": null,
          "ClearingSystemMemberIdentification": "1e150e0d-32b7-4a64-b40f-7f2736c7709d",
          "VnTraceId": "VN-TRACE-ID-1001",
          "AccountIdentificationCode": "ACCOUNT-IDENTIFIER-1001",
          "Id": "ID-1001"
        }
      }
    ]
  },
  "ReferenceData": {
    "Agreement": {
      "AgreementId": "AGREEMENT-1000001",
      "AgreementAlternateId": 1001,
      "FinancialInstitutionId": "FI-1001",
      "BrandId": "BRAND-001",
      "ProductId": "PRODUCT-1001",
      "Status": "ACTIVE",
      "StatusChangedDateTime": "2026-09-17T10:00:00.000Z",
      "Closed": true,
      "CreditBalance": {
        "Value": 125,
        "Currency": "USD"
      },
      "Balances": [
        {
          "BalanceType": "STANDARD",
          "FacilityId": "FACILITY-ID-1001",
          "CurrentBalance": {
            "Value": 125,
            "Currency": "USD"
          },
          "PendingBalance": {
            "Value": 125,
            "Currency": "USD"
          },
          "AvailableBalance": {
            "Value": 125,
            "Currency": "USD"
          },
          "UnappliedPendingBalance": {
            "Value": 125,
            "Currency": "USD"
          },
          "Limit": {
            "Value": 125,
            "Currency": "USD"
          }
        }
      ],
      "PaymentDueDate": "2026-09-17",
      "CurrentDueAmount": {
        "Value": 125,
        "Currency": "USD"
      },
      "PastDueAmount": {
        "Value": 125,
        "Currency": "USD"
      },
      "TotalDueAmount": {
        "Value": 125,
        "Currency": "USD"
      },
      "DelinquencyLevel": 1,
      "BilledCount": 1,
      "EffectiveMissedDueDate": "2026-09-17",
      "EffectiveDelinquentDate": "2026-09-17",
      "EffectiveDelinquentDays": 1,
      "EffectiveMissedDueDays": 1,
      "BillOverlimitFeeNextCycle": true,
      "AgreementInvolvements": [
        {
          "AgreementInvolvementId": "AGREEMENT-1000001",
          "PartyId": "PARTY-1000001",
          "PartyRole": "string",
          "IsActive": true
        }
      ],
      "OpeningDate": "2026-09-17",
      "ExternalAccount": [
        {
          "ClearingSystemIdentificationCode": "string",
          "AccountIdentification": "ACCOUNT-IDENTIFIER-1001",
          "ClearingSystemMemberIdentification": "string"
        }
      ],
      "BusinessStatuses": [
        {
          "Source": "string",
          "BusinessStatus": "ACTIVE",
          "BusinessStatusAddedDateTime": "2026-09-17T10:00:00.000Z"
        }
      ],
      "LatestTransfer": {
        "TransferRequestId": "REQUEST-1001",
        "TransferRequestDate": "2026-09-17",
        "TransferStatus": "ACTIVE",
        "TransferReason": "CUSTOMER_REQUEST",
        "SourceProduct": {
          "ProductId": "PRODUCT-1001",
          "ProductType": "STANDARD"
        },
        "TargetProduct": {
          "ProductId": "PRODUCT-1001",
          "ProductType": "STANDARD"
        }
      }
    }
  }
}
```

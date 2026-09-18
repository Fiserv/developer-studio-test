# Business Event: Abu Report File Rejected

## Overview

The File Processing service domain publishes `Abu_Report_File_Rejected` as part of the `Transaction_Lifecycle` event family. The publication informs downstream consumers that the Abu report file rejected business activity occurred in VisionNext.

**Standard:** BIAN

**Service Domain:** File Processing

**BusinessEventName:** `Abu_Report_File_Rejected`

**BusinessEventGroup:** `Transaction_Lifecycle`

## Purpose

Publish the Abu report file rejected event so downstream consumers can react to the rejection represented by the source event.

## Business Trigger

The event is generated when VisionNext records the Abu report file rejected business activity in the File Processing domain.

### In this example

- `FileActionResponse.PrivateData[].SubMerchantId`: `SUB-MERCHANT-ID-1001`
- `FileActionResponse.PrivateData[].SubMerchantName`: `SUB MERCHANT BETA`
- `FileActionResponse.PrivateData[].Card.MaskedPrimaryAccountNumber`: `411111XXXXXX1111`
- `FileActionResponse.PrivateData[].UpdateMethod`: `2026-09-17`

## Typical Consumers

- File processing and operations support teams
- Clearing and settlement processing services
- Event Management delivery and alert consumers
- Event data hub, analytics, and operational monitoring consumers

## Business Context

### Business Scenario

File Processing publishes `Abu_Report_File_Rejected` as part of the `Transaction_Lifecycle` event family. The event is generated when VisionNext records the Abu report file rejected business activity in the File Processing domain.

Downstream consumers subscribe to the event so they can update their local view of the business state without coupling directly to the producing service.

### Publisher

| Attribute | Value |
| --- | --- |
| Domain | File Processing |
| Event | `Abu_Report_File_Rejected` |
| Event Group | `Transaction_Lifecycle` |
| Topic | `documented as` |
| Trigger | The event is generated when VisionNext records the Abu report file rejected business activity in the File Processing domain. |
| Business Purpose | Publish the Abu report file rejected event so downstream consumers can react to the rejection represented by the source event. |

### Business Consumers

| Consumer | Subscription Purpose |
| --- | --- |
| File processing and operations support teams | Support operational monitoring and exception follow-up for `Abu_Report_File_Rejected`. |
| Clearing and settlement processing services | Consume `Abu_Report_File_Rejected` to keep local business state aligned with the source event. |
| Event Management delivery and alert consumers | Route by FI/Brand, manage subscriptions, retries, delivery audit, and webhook publication. |
| Event data hub, analytics, and operational monitoring consumers | Support reporting, operational metrics, and trend analysis for `Abu_Report_File_Rejected`. |

### Business Outcome

The event establishes an authoritative enterprise record for the `Abu_Report_File_Rejected` business occurrence. Subscribing systems use it to keep servicing, operations, analytics, audit, and customer-facing views aligned with the source event state.

Without publication of this event, downstream systems may continue operating from stale state, causing inconsistent servicing decisions, delayed operational follow-up, incomplete audit history, or mismatched analytical reporting.

## Short Publication Version

`Abu_Report_File_Rejected` notifies subscribers that the Abu report file rejected business activity occurred in VisionNext.

## Event Schema

### Event Header

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Version` | string | Event schema version for the published contract. | v1.0 |
| `FiId` | string | Financial institution identifier for the tenant that owns the event. | FI-1001 |
| `BrandId` | string | Brand identifier under the financial institution. | BRAND-001 |
| `BusinessEventId` | string | Unique identifier for this business-event instance. | be-11111111-2222-3333-8444-555555555555 |
| `BusinessEventName` | string | Fixed business event name used by subscribers and routing configuration. | Abu_Report_File_Rejected |
| `BusinessEventGroup` | string | Fixed event family or lifecycle group used for classification. | Transaction_Lifecycle |
| `UserId` | string | User, process, or service actor associated with the event when available. | USER-1001 |
| `Channel` | string | Channel or source through which the business action was initiated. | API |
| `BusinessEventDateTime` | string | UTC timestamp when the business event was generated. | 2026-09-17T10:00:00.000Z |
| `TraceState` | string | W3C trace state used for distributed tracing. | vn-trace-id=0cd9816cd865cd7b44074d619b3d5891 |
| `TraceParent` | string | W3C trace parent used for distributed tracing. | 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01 |

### Event Body

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `FileActionResponse` | object | Nested file action response object carried by the event. | - |
| `FileActionResponse.PrivateData` | `array<object>` | Collection of private data entries carried by the event. | - |
| `FileActionResponse.PrivateData[].SubMerchantId` | string | Identifier for the related sub merchant id in the Abu report file rejected event. | SUB-MERCHANT-ID-1001 |
| `FileActionResponse.PrivateData[].SubMerchantName` | string | Event-specific sub merchant name value supplied by the file system event. | SUB MERCHANT BETA |
| `FileActionResponse.PrivateData[].Card` | object | Nested card object carried by the event. | - |
| `FileActionResponse.PrivateData[].Card.MaskedPrimaryAccountNumber` | string | Event-specific masked primary account number value supplied by the file system event. | 411111XXXXXX1111 |
| `FileActionResponse.PrivateData[].UpdateMethod` | string | Date or timestamp associated with update method for this event. | 2026-09-17 |
| `FileActionResponse.PrivateData[].UpdateDescription` | string | Date or timestamp associated with update description for this event. | 2026-09-17T10:00:00.000Z |
| `FileActionResponse.PrivateData[].RejectReason` | string | Reason value associated with reject reason. | PN01 |
| `FileActionResponse.PrivateData[].RejectDescription` | string | Event-specific reject description value supplied by the file system event. | Permanent Account Number not found for 601100XXXXXX9424, 353011XXXXXX0000 |
| `FileActionResponse.Header` | object | Nested header object carried by the event. | - |
| `FileActionResponse.Header.CreationDateTime` | string | Date or timestamp associated with creation date time for this event. | 2026-09-17T10:00:00.000Z |
| `FileActionResponse.Header.TraceData` | `array<object>` | Collection of trace data entries carried by the event. | - |
| `FileActionResponse.Header.TraceData[].Type` | string | Type classification for type. | SchemeProcessingId |
| `FileActionResponse.Header.TraceData[].Value` | string | Numeric value for the related amount or balance object. | 7e50b9ebfddc40668f59daa12bef199f |
| `FileActionResponse.Issuer` | object | Nested issuer object carried by the event. | - |
| `FileActionResponse.Issuer.Identification` | string | Event-specific identification value supplied by the file system event. | 00000545511 |
| `FileActionResponse.Acquirer` | object | Nested acquirer object carried by the event. | - |
| `FileActionResponse.Acquirer.Identification` | string | Event-specific identification value supplied by the file system event. | 88776655443 |
| `FileActionResponse.Acceptor` | object | Nested acceptor object carried by the event. | - |
| `FileActionResponse.Acceptor.BusinessName` | string | Event-specific business name value supplied by the file system event. | MERCHANT BETA ONLINE |
| `FileActionResponse.Acceptor.Identification` | string | Event-specific identification value supplied by the file system event. | MID000000000002 |
| `FileActionResponse.Card` | object | Nested card object carried by the event. | - |
| `FileActionResponse.Card.MaskedPrimaryAccountNumber` | string | Event-specific masked primary account number value supplied by the file system event. | 411111XXXXXX1111 |
| `FileActionResponse.Card.ProtectedPanIndicator` | string | Event-specific protected pan indicator value supplied by the file system event. | 411111XXXXXX1111 |

### Reference Data

_No ReferenceData objects are present in the current source sample._

### Sample

```json
{
  "EventHeader": {
    "Version": "v1.0",
    "FiId": "FI-1001",
    "BrandId": "BRAND-001",
    "BusinessEventId": "be-11111111-2222-3333-8444-555555555555",
    "BusinessEventName": "Abu_Report_File_Rejected",
    "BusinessEventGroup": "Transaction_Lifecycle",
    "UserId": "USER-1001",
    "Channel": "API",
    "BusinessEventDateTime": "2026-09-17T10:00:00.000Z",
    "TraceState": "vn-trace-id=0cd9816cd865cd7b44074d619b3d5891",
    "TraceParent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "EventBody": {
    "FileActionResponse": {
      "PrivateData": [
        {
          "SubMerchantId": "SUB-MERCHANT-ID-1001",
          "SubMerchantName": "SUB MERCHANT BETA",
          "Card": {
            "MaskedPrimaryAccountNumber": "411111XXXXXX1111"
          },
          "UpdateMethod": "2026-09-17",
          "UpdateDescription": "2026-09-17T10:00:00.000Z",
          "RejectReason": "PN01",
          "RejectDescription": "Permanent Account Number not found for 601100XXXXXX9424, 353011XXXXXX0000"
        }
      ],
      "Header": {
        "CreationDateTime": "2026-09-17T10:00:00.000Z",
        "TraceData": [
          {
            "Type": "SchemeProcessingId",
            "Value": "7e50b9ebfddc40668f59daa12bef199f"
          },
          {
            "Type": "ExternalFileName",
            "Value": "YTF.AR.T284.C.E0032471.D260626.T143053.A019"
          }
        ]
      },
      "Issuer": {
        "Identification": "00000545511"
      },
      "Acquirer": {
        "Identification": "88776655443"
      },
      "Acceptor": {
        "BusinessName": "MERCHANT BETA ONLINE",
        "Identification": "MID000000000002"
      },
      "Card": {
        "MaskedPrimaryAccountNumber": "411111XXXXXX1111",
        "ProtectedPanIndicator": "411111XXXXXX1111"
      }
    }
  },
  "ReferenceData": {}
}
```

# Business Event: Abu Report File Processed

## Overview

The File Processing service domain publishes `Abu_Report_File_Processed` as part of the `Transaction_Lifecycle` event family. The publication informs downstream consumers that the Abu report file processed business activity occurred in VisionNext.

**Standard:** BIAN

**Service Domain:** File Processing

**BusinessEventName:** `Abu_Report_File_Processed`

**BusinessEventGroup:** `Transaction_Lifecycle`

## Purpose

Publish the Abu report file processed event so downstream consumers can react to the processing outcome represented by the source event.

## Business Trigger

The event is generated when VisionNext records the Abu report file processed business activity in the File Processing domain.

### In this example

- `FileActionResponse.PrivateData[].Status`: `REJECTED`
- `Header.TraceData[].Type`: `SchemeProcessingId`
- `Header.TraceData[].Value`: `d1143a6774d0423fbcc77d4e19eda172`
- `Header.FiId`: `FI-1001`

## Typical Consumers

- File processing and operations support teams
- Clearing and settlement processing services
- Event Management delivery and alert consumers
- Event data hub, analytics, and operational monitoring consumers

## Business Context

### Business Scenario

File Processing publishes `Abu_Report_File_Processed` as part of the `Transaction_Lifecycle` event family. The event is generated when VisionNext records the Abu report file processed business activity in the File Processing domain.

Downstream consumers subscribe to the event so they can update their local view of the business state without coupling directly to the producing service.

### Publisher

| Attribute | Value |
| --- | --- |
| Domain | File Processing |
| Event | `Abu_Report_File_Processed` |
| Event Group | `Transaction_Lifecycle` |
| Trigger | The event is generated when VisionNext records the Abu report file processed business activity in the File Processing domain. |
| Business Purpose | Publish the Abu report file processed event so downstream consumers can react to the processing outcome represented by the source event. |

### Business Consumers

| Consumer | Subscription Purpose |
| --- | --- |
| File processing and operations support teams | Support operational monitoring and exception follow-up for `Abu_Report_File_Processed`. |
| Clearing and settlement processing services | Consume `Abu_Report_File_Processed` to keep local business state aligned with the source event. |
| Event Management delivery and alert consumers | Route by FI/Brand, manage subscriptions, retries, delivery audit, and webhook publication. |
| Event data hub, analytics, and operational monitoring consumers | Support reporting, operational metrics, and trend analysis for `Abu_Report_File_Processed`. |

### Business Outcome

The event establishes an authoritative enterprise record for the `Abu_Report_File_Processed` business occurrence. Subscribing systems use it to keep servicing, operations, analytics, audit, and customer-facing views aligned with the source event state.

Without publication of this event, downstream systems may continue operating from stale state, causing inconsistent servicing decisions, delayed operational follow-up, incomplete audit history, or mismatched analytical reporting.

## Short Publication Version

`Abu_Report_File_Processed` notifies subscribers that the Abu report file processed business activity occurred in VisionNext.

## Event Schema

### Event Header

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Version` | string | Event schema version for the published contract. | v1.0 |
| `FiId` | string | Financial institution identifier for the tenant that owns the event. | FI-1001 |
| `BrandId` | string | Brand identifier under the financial institution. | BRAND-001 |
| `BusinessEventId` | string | Unique identifier for this business-event instance. | be-11111111-2222-3333-8444-555555555555 |
| `BusinessEventName` | string | Fixed business event name used by subscribers and routing configuration. | Abu_Report_File_Processed |
| `BusinessEventGroup` | string | Fixed event family or lifecycle group used for classification. | Transaction_Lifecycle |
| `UserId` | string | User, process, or service actor associated with the event when available. | USER-1001 |
| `Channel` | string | Channel or source through which the business action was initiated. | API |
| `BusinessEventDateTime` | string | UTC timestamp when the business event was generated. | 2026-09-17T10:00:00.000Z |
| `TraceState` | string | W3C trace state used for distributed tracing. | vn-trace-id=0cd9816cd865cd7b44074d619b3d5891 |
| `TraceParent` | string | W3C trace parent used for distributed tracing. | 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01 |

### Event Body

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Header` | object | Nested header object carried by the event. | - |
| `Header.TraceData` | `array<object>` | Collection of trace data entries carried by the event. | - |
| `Header.TraceData[].Type` | string | Type classification for type. | SchemeProcessingId |
| `Header.TraceData[].Value` | string | Numeric value for the related amount or balance object. | d1143a6774d0423fbcc77d4e19eda172 |
| `Header.FiId` | string | Financial institution identifier for the tenant that owns the event. | FI-1001 |
| `FileActionResponse` | object | Nested file action response object carried by the event. | - |
| `FileActionResponse.PrivateData` | `array<object>` | Collection of private data entries carried by the event. | - |
| `FileActionResponse.PrivateData[].Status` | string | Business status value represented by this event. | REJECTED |
| `FileActionResponse.PrivateData[].RejectReason` | string | Reason value associated with reject reason. | FE01 |
| `FileActionResponse.PrivateData[].RejectDescription` | string | Event-specific reject description value supplied by the file system event. | File contains no data |

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
    "BusinessEventName": "Abu_Report_File_Processed",
    "BusinessEventGroup": "Transaction_Lifecycle",
    "UserId": "USER-1001",
    "Channel": "API",
    "BusinessEventDateTime": "2026-09-17T10:00:00.000Z",
    "TraceState": "vn-trace-id=0cd9816cd865cd7b44074d619b3d5891",
    "TraceParent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "EventBody": {
    "Header": {
      "TraceData": [
        {
          "Type": "SchemeProcessingId",
          "Value": "d1143a6774d0423fbcc77d4e19eda172"
        },
        {
          "Type": "ExternalFileName",
          "Value": "YTF.AR.T284.C.E0032471.D260626.T143053.A025"
        }
      ],
      "FiId": "FI-1001"
    },
    "FileActionResponse": {
      "PrivateData": [
        {
          "Status": "REJECTED",
          "RejectReason": "FE01",
          "RejectDescription": "File contains no data"
        }
      ]
    }
  },
  "ReferenceData": {}
}
```

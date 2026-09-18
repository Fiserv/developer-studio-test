# Business Event: Feedback File Processed

## Overview

The File Processing service domain publishes `Feedback_File_Processed` as part of the `Transaction_Lifecycle` event family. The publication informs downstream consumers that the Feedback file processed business activity occurred in VisionNext.

**Standard:** BIAN

**Service Domain:** File Processing

**BusinessEventName:** `Feedback_File_Processed`

**BusinessEventGroup:** `Transaction_Lifecycle`

## Purpose

Publish the Feedback file processed event so downstream consumers can react to the processing outcome represented by the source event.

## Business Trigger

The event is generated when VisionNext records the Feedback file processed business activity in the File Processing domain.

### In this example

- `Status`: `SUCC`
- `FileName`: `FILE-1001`
- `CreationDateTime`: `2026-09-17T10:00:00.000Z`
- `TotalNumberOfRecords`: `1`

## Typical Consumers

- File processing and operations support teams
- Clearing and settlement processing services
- Event Management delivery and alert consumers
- Event data hub, analytics, and operational monitoring consumers

## Business Context

### Business Scenario

File Processing publishes `Feedback_File_Processed` as part of the `Transaction_Lifecycle` event family. The event is generated when VisionNext records the Feedback file processed business activity in the File Processing domain.

Downstream consumers subscribe to the event so they can update their local view of the business state without coupling directly to the producing service.

### Publisher

| Attribute | Value |
| --- | --- |
| Domain | File Processing |
| Event | `Feedback_File_Processed` |
| Event Group | `Transaction_Lifecycle` |
| Trigger | The event is generated when VisionNext records the Feedback file processed business activity in the File Processing domain. |
| Business Purpose | Publish the Feedback file processed event so downstream consumers can react to the processing outcome represented by the source event. |

### Business Consumers

| Consumer | Subscription Purpose |
| --- | --- |
| File processing and operations support teams | Support operational monitoring and exception follow-up for `Feedback_File_Processed`. |
| Clearing and settlement processing services | Consume `Feedback_File_Processed` to keep local business state aligned with the source event. |
| Event Management delivery and alert consumers | Route by FI/Brand, manage subscriptions, retries, delivery audit, and webhook publication. |
| Event data hub, analytics, and operational monitoring consumers | Support reporting, operational metrics, and trend analysis for `Feedback_File_Processed`. |

### Business Outcome

The event establishes an authoritative enterprise record for the `Feedback_File_Processed` business occurrence. Subscribing systems use it to keep servicing, operations, analytics, audit, and customer-facing views aligned with the source event state.

Without publication of this event, downstream systems may continue operating from stale state, causing inconsistent servicing decisions, delayed operational follow-up, incomplete audit history, or mismatched analytical reporting.

## Short Publication Version

`Feedback_File_Processed` notifies subscribers that the Feedback file processed business activity occurred in VisionNext.

## Event Schema

### Event Header

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Version` | string | Event schema version for the published contract. | v1.0 |
| `FiId` | string | Financial institution identifier for the tenant that owns the event. | FI-1001 |
| `BrandId` | string | Brand identifier under the financial institution. | BRAND-001 |
| `BusinessEventId` | string | Unique identifier for this business-event instance. | be-11111111-2222-3333-8444-555555555555 |
| `BusinessEventName` | string | Fixed business event name used by subscribers and routing configuration. | Feedback_File_Processed |
| `BusinessEventGroup` | string | Fixed event family or lifecycle group used for classification. | Transaction_Lifecycle |
| `UserId` | string | User, process, or service actor associated with the event when available. | USER-1001 |
| `Channel` | string | Channel or source through which the business action was initiated. | API |
| `BusinessEventDateTime` | string | UTC timestamp when the business event was generated. | 2026-09-17T10:00:00.000Z |
| `TraceState` | string | W3C trace state used for distributed tracing. | vn-trace-id=0cd9816cd865cd7b44074d619b3d5891 |
| `TraceParent` | string | W3C trace parent used for distributed tracing. | 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01 |

### Event Body

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `FileName` | string | Event-specific file name value supplied by the file system event. | FILE-1001 |
| `CreationDateTime` | string | Date or timestamp associated with creation date time for this event. | 2026-09-17T10:00:00.000Z |
| `TotalNumberOfRecords` | integer | Event-specific total number of records value supplied by the file system event. | 1 |
| `Status` | string | Business status value represented by this event. | SUCC |
| `ProcessedRecordCount` | integer | Event-specific processed record count value supplied by the file system event. | 1 |

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
    "BusinessEventName": "Feedback_File_Processed",
    "BusinessEventGroup": "Transaction_Lifecycle",
    "UserId": "USER-1001",
    "Channel": "API",
    "BusinessEventDateTime": "2026-09-17T10:00:00.000Z",
    "TraceState": "vn-trace-id=0cd9816cd865cd7b44074d619b3d5891",
    "TraceParent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "EventBody": {
    "FileName": "FILE-1001",
    "CreationDateTime": "2026-09-17T10:00:00.000Z",
    "TotalNumberOfRecords": 1,
    "Status": "SUCC",
    "ProcessedRecordCount": 1
  },
  "ReferenceData": {}
}
```

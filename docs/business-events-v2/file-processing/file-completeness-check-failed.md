# Business Event: File Completeness Check Failed

## Overview

The File Processing service domain publishes `File_Completeness_Check_Failed` as part of the `File_System_Lifecycle` event family. The publication informs downstream consumers that the File completeness check failed business activity occurred in VisionNext.

**Standard:** BIAN

**Service Domain:** File Processing

**BusinessEventName:** `File_Completeness_Check_Failed`

**BusinessEventGroup:** `File_System_Lifecycle`

## Purpose

Publish the File completeness check failed event so downstream consumers can react to the business state change represented by the source event.

## Business Trigger

event payload meaning operational runbook context?

### In this example

- `EventBody.FileId`: `1001`
- `Type`: `File Alerts`
- `EventBody.Source`: `VISA`

## Typical Consumers

- File processing and operations support teams
- Clearing and settlement processing services
- Event Management delivery and alert consumers
- Event data hub, analytics, and operational monitoring consumers

## Business Context

### Business Scenario

File Processing publishes `File_Completeness_Check_Failed` when the documented trigger occurs: event payload meaning operational runbook context?.

Downstream consumers subscribe to the event so they can update their local view of the business state without coupling directly to the producing service.

### Publisher

| Attribute | Value |
| --- | --- |
| Domain | File Processing |
| Event | `File_Completeness_Check_Failed` |
| Event Group | `File_System_Lifecycle` |
| Trigger | event payload meaning operational runbook context? |
| Business Purpose | Publish the File completeness check failed event so downstream consumers can react to the business state change represented by the source event. |

### Business Consumers

| Consumer | Subscription Purpose |
| --- | --- |
| File processing and operations support teams | Support operational monitoring and exception follow-up for `File_Completeness_Check_Failed`. |
| Clearing and settlement processing services | Consume `File_Completeness_Check_Failed` to keep local business state aligned with the source event. |
| Event Management delivery and alert consumers | Route by FI/Brand, manage subscriptions, retries, delivery audit, and webhook publication. |
| Event data hub, analytics, and operational monitoring consumers | Support reporting, operational metrics, and trend analysis for `File_Completeness_Check_Failed`. |

### Business Outcome

The event establishes an authoritative enterprise record for the `File_Completeness_Check_Failed` business occurrence. Subscribing systems use it to keep servicing, operations, analytics, audit, and customer-facing views aligned with the source event state.

Without publication of this event, downstream systems may continue operating from stale state, causing inconsistent servicing decisions, delayed operational follow-up, incomplete audit history, or mismatched analytical reporting.

## Short Publication Version

`File_Completeness_Check_Failed` notifies subscribers that the File completeness check failed business activity occurred in VisionNext.

## Event Schema

### Event Header

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Version` | string | Event schema version for the published contract. | v1.0 |
| `FiId` | string | Financial institution identifier for the tenant that owns the event. | FI-1001 |
| `BrandId` | string | Brand identifier under the financial institution. | BRAND-001 |
| `BusinessEventId` | string | Unique identifier for this business-event instance. | be-11111111-2222-3333-8444-555555555555 |
| `BusinessEventName` | string | Fixed business event name used by subscribers and routing configuration. | File_Completeness_Check_Failed |
| `BusinessEventGroup` | string | Fixed event family or lifecycle group used for classification. | File_System_Lifecycle |
| `UserId` | string | User, process, or service actor associated with the event when available. | USER-1001 |
| `Channel` | string | Channel or source through which the business action was initiated. | API |
| `BusinessEventDateTime` | string | UTC timestamp when the business event was generated. | 2026-09-17T10:00:00.000Z |
| `TraceState` | string | W3C trace state used for distributed tracing. | vn-trace-id=0cd9816cd865cd7b44074d619b3d5891 |
| `TraceParent` | string | W3C trace parent used for distributed tracing. | 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01 |

### Event Body

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Type` | string | Type classification for type. | File Alerts |
| `EventBody` | object | Nested event body object carried by the event. | - |
| `EventBody.FileId` | integer | Identifier for the related file id in the File completeness check failed event. | 1001 |
| `EventBody.Source` | string | Event-specific source value supplied by the file system event. | VISA |

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
    "BusinessEventName": "File_Completeness_Check_Failed",
    "BusinessEventGroup": "File_System_Lifecycle",
    "UserId": "USER-1001",
    "Channel": "API",
    "BusinessEventDateTime": "2026-09-17T10:00:00.000Z",
    "TraceState": "vn-trace-id=0cd9816cd865cd7b44074d619b3d5891",
    "TraceParent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "EventBody": {
    "Type": "File Alerts",
    "EventBody": {
      "FileId": 1001,
      "Source": "VISA"
    }
  },
  "ReferenceData": {}
}
```

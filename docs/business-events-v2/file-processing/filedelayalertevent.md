# Business Event: Filedelayalertevent

## Overview

The File Processing service domain publishes `Filedelayalertevent` as part of the `Transaction_Lifecycle` event family. The publication informs downstream consumers that the Filedelayalertevent business activity occurred in VisionNext.

**Standard:** BIAN

**Service Domain:** File Processing

**BusinessEventName:** `Filedelayalertevent`

**BusinessEventGroup:** `Transaction_Lifecycle`

## Purpose

Publish the Filedelayalertevent event so downstream consumers can react to the business state change represented by the source event.

## Business Trigger

The event is generated when VisionNext records the Filedelayalertevent business activity in the File Processing domain.

### In this example

- `AlertId`: `ALERT-ID-1001`
- `AlertName`: `file_delay_alert_added`
- `SourceChannel`: `VISA`
- `ScheduledDate`: `2026-09-17`

## Typical Consumers

- File processing and operations support teams
- Clearing and settlement processing services
- Event Management delivery and alert consumers
- Event data hub, analytics, and operational monitoring consumers

## Business Context

### Business Scenario

File Processing publishes `Filedelayalertevent` as part of the `Transaction_Lifecycle` event family. The event is generated when VisionNext records the Filedelayalertevent business activity in the File Processing domain.

Downstream consumers subscribe to the event so they can update their local view of the business state without coupling directly to the producing service.

### Publisher

| Attribute | Value |
| --- | --- |
| Domain | File Processing |
| Event | `Filedelayalertevent` |
| Event Group | `Transaction_Lifecycle` |
| Trigger | The event is generated when VisionNext records the Filedelayalertevent business activity in the File Processing domain. |
| Business Purpose | Publish the Filedelayalertevent event so downstream consumers can react to the business state change represented by the source event. |

### Business Consumers

| Consumer | Subscription Purpose |
| --- | --- |
| File processing and operations support teams | Support operational monitoring and exception follow-up for `Filedelayalertevent`. |
| Clearing and settlement processing services | Consume `Filedelayalertevent` to keep local business state aligned with the source event. |
| Event Management delivery and alert consumers | Route by FI/Brand, manage subscriptions, retries, delivery audit, and webhook publication. |
| Event data hub, analytics, and operational monitoring consumers | Support reporting, operational metrics, and trend analysis for `Filedelayalertevent`. |

### Business Outcome

The event establishes an authoritative enterprise record for the `Filedelayalertevent` business occurrence. Subscribing systems use it to keep servicing, operations, analytics, audit, and customer-facing views aligned with the source event state.

Without publication of this event, downstream systems may continue operating from stale state, causing inconsistent servicing decisions, delayed operational follow-up, incomplete audit history, or mismatched analytical reporting.

## Short Publication Version

`Filedelayalertevent` notifies subscribers that the Filedelayalertevent business activity occurred in VisionNext.

## Event Schema

### Event Header

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Version` | string | Event schema version for the published contract. | v1.0 |
| `FiId` | string | Financial institution identifier for the tenant that owns the event. | FI-1001 |
| `BrandId` | string | Brand identifier under the financial institution. | BRAND-001 |
| `BusinessEventId` | string | Unique identifier for this business-event instance. | be-11111111-2222-3333-8444-555555555555 |
| `BusinessEventName` | string | Fixed business event name used by subscribers and routing configuration. | Filedelayalertevent |
| `BusinessEventGroup` | string | Fixed event family or lifecycle group used for classification. | Transaction_Lifecycle |
| `UserId` | string | User, process, or service actor associated with the event when available. | USER-1001 |
| `Channel` | string | Channel or source through which the business action was initiated. | API |
| `BusinessEventDateTime` | string | UTC timestamp when the business event was generated. | 2026-09-17T10:00:00.000Z |
| `TraceState` | string | W3C trace state used for distributed tracing. | vn-trace-id=0cd9816cd865cd7b44074d619b3d5891 |
| `TraceParent` | string | W3C trace parent used for distributed tracing. | 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01 |

### Event Body

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `AlertId` | string | Identifier for the related alert id in the Filedelayalertevent event. | ALERT-ID-1001 |
| `AlertName` | string | Event-specific alert name value supplied by the file system event. | file_delay_alert_added |
| `SourceChannel` | string | Event-specific source channel value supplied by the file system event. | VISA |
| `ScheduledDate` | string | Date or timestamp associated with scheduled date for this event. | 2026-09-17 |
| `ScheduledTime` | string | Date or timestamp associated with scheduled time for this event. | 10:00 |
| `WindowStart` | string | Event-specific window start value supplied by the file system event. | 2026-08-25T12:00:00Z |
| `WindowEnd` | string | Event-specific window end value supplied by the file system event. | 2026-08-28T10:00:00Z |
| `Expected File` | integer | Event-specific expected file value supplied by the file system event. | 41 |
| `Received File` | integer | Event-specific received file value supplied by the file system event. | 16 |
| `Message` | string | Event-specific message value supplied by the file system event. | Expected VISA file not received by 10:00 |
| `Timestamp` | string | Date or timestamp associated with timestamp for this event. | 2026-09-17T10:00:00.000Z |

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
    "BusinessEventName": "Filedelayalertevent",
    "BusinessEventGroup": "Transaction_Lifecycle",
    "UserId": "USER-1001",
    "Channel": "API",
    "BusinessEventDateTime": "2026-09-17T10:00:00.000Z",
    "TraceState": "vn-trace-id=0cd9816cd865cd7b44074d619b3d5891",
    "TraceParent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "EventBody": {
    "AlertId": "ALERT-ID-1001",
    "AlertName": "file_delay_alert_added",
    "SourceChannel": "VISA",
    "ScheduledDate": "2026-09-17",
    "ScheduledTime": "10:00",
    "WindowStart": "2026-08-25T12:00:00Z",
    "WindowEnd": "2026-08-28T10:00:00Z",
    "Expected File": 41,
    "Received File": 16,
    "Message": "Expected VISA file not received by 10:00",
    "Timestamp": "2026-09-17T10:00:00.000Z"
  },
  "ReferenceData": {}
}
```

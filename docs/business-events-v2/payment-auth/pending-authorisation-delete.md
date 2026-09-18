# Business Event: Pending Authorisation Delete

## Overview

The Payment Auth service domain publishes `Pending_Authorisation_Delete` as part of the `Transaction_Lifecycle` event family. The publication informs downstream consumers that the Pending authorisation delete business activity occurred in VisionNext.

**Standard:** BIAN

**Service Domain:** Payment Auth

**BusinessEventName:** `Pending_Authorisation_Delete`

**BusinessEventGroup:** `Transaction_Lifecycle`

## Purpose

Publish the Pending authorisation delete event so downstream consumers can react to the business state change represented by the source event.

## Business Trigger

Whether the event is emitted for: only expired pending auth deletion manual cancellation both other deletion paths What Synap does with the event after consuming it

### In this example

- `Status`: `DELE`
- `SwitchTxnId`: `TXN-1000001`

## Typical Consumers

- Synap
- Transaction capture and payment authorization services
- Account processing, financial accounting, collections, and rewards services
- Customer servicing, dispute, and notification applications
- Event data hub, analytics, and operational monitoring consumers

## Business Context

### Business Scenario

Payment Auth publishes `Pending_Authorisation_Delete` when the documented trigger occurs: whether the event is emitted for: only expired pending auth deletion manual cancellation both other deletion paths What Synap does with the event after consuming it.

Downstream consumers subscribe to the event so they can update their local view of the business state without coupling directly to the producing service.

### Publisher

| Attribute | Value |
| --- | --- |
| Domain | Payment Auth |
| Event | `Pending_Authorisation_Delete` |
| Event Group | `Transaction_Lifecycle` |
| Topic | `vn.payment-authorisation.pending-auth.delete.v1` |
| Trigger | Whether the event is emitted for: only expired pending auth deletion manual cancellation both other deletion paths What Synap does with the event after consuming it |
| Business Purpose | Publish the Pending authorisation delete event so downstream consumers can react to the business state change represented by the source event. |

### Business Consumers

| Consumer | Subscription Purpose |
| --- | --- |
| Synap | Consume `Pending_Authorisation_Delete` to keep local business state aligned with the source event. |
| Transaction capture and payment authorization services | Consume `Pending_Authorisation_Delete` to keep local business state aligned with the source event. |
| Account processing, financial accounting, collections, and rewards services | Adjust collection activity and delinquency handling based on `Pending_Authorisation_Delete`. |
| Customer servicing, dispute, and notification applications | Notify customers or channels when the Pending authorisation delete occurs. |
| Event data hub, analytics, and operational monitoring consumers | Support reporting, operational metrics, and trend analysis for `Pending_Authorisation_Delete`. |

### Business Outcome

The event establishes an authoritative enterprise record for the `Pending_Authorisation_Delete` business occurrence. Subscribing systems use it to keep servicing, operations, analytics, audit, and customer-facing views aligned with the source event state.

Without publication of this event, downstream systems may continue operating from stale state, causing inconsistent servicing decisions, delayed operational follow-up, incomplete audit history, or mismatched analytical reporting.

## Short Publication Version

`Pending_Authorisation_Delete` notifies subscribers that the Pending authorisation delete business activity occurred in VisionNext.

## Event Schema

### Event Header

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Version` | string | Event schema version for the published contract. | v1.0 |
| `FiId` | string | Financial institution identifier for the tenant that owns the event. | FI-1001 |
| `BrandId` | string | Brand identifier under the financial institution. | BRAND-001 |
| `BusinessEventId` | string | Unique identifier for this business-event instance. | be-11111111-2222-3333-8444-555555555555 |
| `BusinessEventName` | string | Fixed business event name used by subscribers and routing configuration. | Pending_Authorisation_Delete |
| `BusinessEventGroup` | string | Fixed event family or lifecycle group used for classification. | Transaction_Lifecycle |
| `UserId` | string | User, process, or service actor associated with the event when available. | USER-1001 |
| `Channel` | string | Channel or source through which the business action was initiated. | API |
| `BusinessEventDateTime` | string | UTC timestamp when the business event was generated. | 2026-09-17T10:00:00.000Z |
| `TraceState` | string | W3C trace state used for distributed tracing. | vn-trace-id=0cd9816cd865cd7b44074d619b3d5891 |
| `TraceParent` | string | W3C trace parent used for distributed tracing. | 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01 |

### Event Body

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `SwitchTxnId` | string | Identifier for the related switch txn id in the Pending authorisation delete event. | TXN-1000001 |
| `Status` | string | Business status value represented by this event. | DELE |

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
    "BusinessEventName": "Pending_Authorisation_Delete",
    "BusinessEventGroup": "Transaction_Lifecycle",
    "UserId": "USER-1001",
    "Channel": "API",
    "BusinessEventDateTime": "2026-09-17T10:00:00.000Z",
    "TraceState": "vn-trace-id=0cd9816cd865cd7b44074d619b3d5891",
    "TraceParent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "EventBody": {
    "SwitchTxnId": "TXN-1000001",
    "Status": "DELE"
  },
  "ReferenceData": {}
}
```

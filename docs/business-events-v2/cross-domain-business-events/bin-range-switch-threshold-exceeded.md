# Business Event: Bin Range Switch Threshold Exceeded

## Overview

The Cross-Domain Business Events service domain publishes `Bin_Range_Switch_Threshold_Exceeded` as part of the `Transaction_Lifecycle` event family. The publication informs downstream consumers that the Bin range switch threshold exceeded business activity occurred in VisionNext.

**Standard:** BIAN

**Service Domain:** Cross-Domain Business Events

**BusinessEventName:** `Bin_Range_Switch_Threshold_Exceeded`

**BusinessEventGroup:** `Transaction_Lifecycle`

## Purpose

Publish the Bin range switch threshold exceeded event so downstream consumers can react to the business state change represented by the source event.

## Business Trigger

The event is generated when VisionNext records the Bin range switch threshold exceeded business activity in the Cross-Domain Business Events domain.

### In this example

- `AgreementId`: `AGREEMENT-1000001`
- `Bin`: `400189`
- `FeatureId`: `1001`
- `AllocationPercentage`: `100`

## Typical Consumers

- Domain services subscribing to cross-domain state changes
- Customer servicing and operations teams
- Event Management delivery and audit consumers
- Event data hub, analytics, and operational monitoring consumers

## Business Context

### Business Scenario

Cross-Domain Business Events publishes `Bin_Range_Switch_Threshold_Exceeded` as part of the `Transaction_Lifecycle` event family. The event is generated when VisionNext records the Bin range switch threshold exceeded business activity in the Cross-Domain Business Events domain.

Downstream consumers subscribe to the event so they can update their local view of the business state without coupling directly to the producing service.

### Publisher

| Attribute | Value |
| --- | --- |
| Domain | Cross-Domain Business Events |
| Event | `Bin_Range_Switch_Threshold_Exceeded` |
| Event Group | `Transaction_Lifecycle` |
| Trigger | The event is generated when VisionNext records the Bin range switch threshold exceeded business activity in the Cross-Domain Business Events domain. |
| Business Purpose | Publish the Bin range switch threshold exceeded event so downstream consumers can react to the business state change represented by the source event. |

### Business Consumers

| Consumer | Subscription Purpose |
| --- | --- |
| Domain services subscribing to cross-domain state changes | Consume `Bin_Range_Switch_Threshold_Exceeded` to keep local business state aligned with the source event. |
| Customer servicing and operations teams | Support operational monitoring and exception follow-up for `Bin_Range_Switch_Threshold_Exceeded`. |
| Event Management delivery and audit consumers | Preserve traceable evidence of the Bin range switch threshold exceeded. |
| Event data hub, analytics, and operational monitoring consumers | Support reporting, operational metrics, and trend analysis for `Bin_Range_Switch_Threshold_Exceeded`. |

### Business Outcome

The event establishes an authoritative enterprise record for the `Bin_Range_Switch_Threshold_Exceeded` business occurrence. Subscribing systems use it to keep servicing, operations, analytics, audit, and customer-facing views aligned with the source event state.

Without publication of this event, downstream systems may continue operating from stale state, causing inconsistent servicing decisions, delayed operational follow-up, incomplete audit history, or mismatched analytical reporting.

## Short Publication Version

`Bin_Range_Switch_Threshold_Exceeded` notifies subscribers that the Bin range switch threshold exceeded business activity occurred in VisionNext.

## Event Schema

### Event Header

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Version` | string | Event schema version for the published contract. | v1.0 |
| `FiId` | string | Financial institution identifier for the tenant that owns the event. | FI-1001 |
| `BrandId` | string | Brand identifier under the financial institution. | BRAND-001 |
| `BusinessEventId` | string | Unique identifier for this business-event instance. | be-11111111-2222-3333-8444-555555555555 |
| `BusinessEventName` | string | Fixed business event name used by subscribers and routing configuration. | Bin_Range_Switch_Threshold_Exceeded |
| `BusinessEventGroup` | string | Fixed event family or lifecycle group used for classification. | Transaction_Lifecycle |
| `UserId` | string | User, process, or service actor associated with the event when available. | USER-1001 |
| `Channel` | string | Channel or source through which the business action was initiated. | API |
| `BusinessEventDateTime` | string | UTC timestamp when the business event was generated. | 2026-09-17T10:00:00.000Z |
| `TraceState` | string | W3C trace state used for distributed tracing. | vn-trace-id=0cd9816cd865cd7b44074d619b3d5891 |
| `TraceParent` | string | W3C trace parent used for distributed tracing. | 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01 |

### Event Body

| Field | Type | Description | Sample |
| --- | --- | --- | --- |
| `Bin` | integer | Event-specific bin value supplied by the other event. | 400189 |
| `FeatureId` | integer | Identifier for the related feature id in the Bin range switch threshold exceeded event. | 1001 |
| `AgreementId` | string | Unique agreement identifier associated with the event. | AGREEMENT-1000001 |
| `AllocationPercentage` | integer | Event-specific allocation percentage value supplied by the other event. | 100 |
| `NumberOfPossiblePans` | integer | Event-specific number of possible pans value supplied by the other event. | 1 |
| `FeatureIdentification` | string | Event-specific feature identification value supplied by the other event. | PAN1320381 |
| `NumberOfPansAllocated` | integer | Event-specific number of pans allocated value supplied by the other event. | 1 |
| `NextPanFeatureIdentification` | string | Event-specific next pan feature identification value supplied by the other event. | 411111XXXXXX1111 |

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
    "BusinessEventName": "Bin_Range_Switch_Threshold_Exceeded",
    "BusinessEventGroup": "Transaction_Lifecycle",
    "UserId": "USER-1001",
    "Channel": "API",
    "BusinessEventDateTime": "2026-09-17T10:00:00.000Z",
    "TraceState": "vn-trace-id=0cd9816cd865cd7b44074d619b3d5891",
    "TraceParent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "EventBody": {
    "Bin": 400189,
    "FeatureId": 1001,
    "AgreementId": "AGREEMENT-1000001",
    "AllocationPercentage": 100,
    "NumberOfPossiblePans": 1,
    "FeatureIdentification": "PAN1320381",
    "NumberOfPansAllocated": 1,
    "NextPanFeatureIdentification": "411111XXXXXX1111"
  },
  "ReferenceData": {}
}
```

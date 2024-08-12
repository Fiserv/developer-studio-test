---
tags: [Referencia de la API, Respuesta de Error]
---

# Respuesta de Error

Fiserv incluye el `errorResponse` como parte del objeto de error unto con los datos correspondientes en los campos`type`, `code`, `field` y `message` fields. 

<!--
type: tab
titles: error, Ejemplo JSON, Respuesta de Error
-->

La siguiente tabla identifica los parámetros en el objeto de error.

| Variable  | Tipo     | Longitud Máxima | Descripción                                                          |
|-----------|----------|-----------------|----------------------------------------------------------------------|
| `type`    | *string* | 256             | El tipo de respuesta del HOST, GATEWAY, NETWORK o APIM.              |
| `code`    | *string* | 256             | Código de respuesta de error del host, la puerta de enlace o la red. |
| `field`   | *string* | 256             | La propiedad o atributo asociado con el error.                       |
| `message` | *string* | 256             | Información específica de una propiedad o atributo.                  |


<!--
type: tab
-->

Formato de cadena JSON para `error`:

```json
{
  "error": {
    "type": "GATEWAY",
    "code": "XXX",
    "field": "sourceType",
    "message": "Missing type ID property."
  }
}
```

<!--
type: tab
-->

Ejemplo de una respuesta de cargo (400: Solicitud Incorrecta)

```json
{
  "errorResponse": {
    "gatewayResponse": {
      "transactionType": "CANCEL",
      "transactionState": "DECLINED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails": {
        "orderId": "CH-aafaaf45-0cfb-4f4f-8ec0-301e40c14e34",
        "transactionTimestamp": "2021-06-20T23:42:48Z",
        "apiTraceId": "5c059eee2388e191",
        "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
        "transactionId": "b2d883cdf3051598acb295f29a1e1582"
      }
    },
    "error": [
      {
        "type": "GATEWAY",
        "code": "703",
        "message": "Write to downstream failed"
      }
    ]
  }
}
```

<!-- type: tab-end -->

---

## Ver también

- [Encriptación a Nivel de Mensaje](?path=docs/spanish/referencia-api/encriptacion.md)
- [Glosario API](?path=docs/spanish/referencia-api/glosario-api.md)
- [Manejo de Respuesta](?path=docs/spanish/referencia-api/manejo-respuesta.md)
- [Solicitud de API](?path=docs/spanish/referencia-api/solicitud-api.md)
- [Webhook](?path=docs/spanish/referencia-api/4-notificaciones.md)

---

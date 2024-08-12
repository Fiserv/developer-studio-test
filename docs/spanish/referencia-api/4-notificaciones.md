---
tags: [Referencia de la API, Webhook, Eventos]
---

# Webhook

Los webhooks son una forma en que los sistemas envían notificaciones en tiempo real sobre eventos que han ocurrido. Funcionan al permitir que un Cliente brinde un servicio que puede recibir notificaciones cada vez que ocurren ciertos eventos en los sistemas de Fiserv. Con los webhooks, las aplicaciones se pueden mantener actualizadas sobre cosas como cambios de autorización, actualizaciones de tarjetas o cuentas y alertas de fraude.

Para usar webhooks, FirstVision puede enviar una solicitud HTTP POST a un punto final designado siempre que ocurra un evento. Esto envía una notificación a la aplicación receptora, que luego puede tomar las medidas necesarias en respuesta. Los webhooks proporcionan una forma rápida y eficiente para que los diferentes sistemas se comuniquen y se mantengan informados sobre eventos importantes.

Para la implementación de Webhook, Fiserv proporciona los estándares y el diseño de API para los diferentes Endpoints que los Clientes necesitan implementar por su parte. Esos endpoints están a cargo de las notificaciones al Usuario Final y cualquier otra funcionalidad que los Clientes quieran tener internamente.

![image](https://user-images.githubusercontent.com/111396588/209873236-86eb54b6-f214-4f8f-9652-51c03ad8d604.png)

Si el tipo de autenticación es OAuth, se requiere que el cliente exponga una API para obtener el token de autorización.
Si la autenticación no es OAuth, la autenticación puede ser mediante api key o basic authorization.

## Información sensible

Todas los payloads pueden contener el campo datos cifrados, pero se utilizarán según las necesidades del Cliente. Si el cliente necesita datos confidenciales en texto sin formato, los payloads de Webhook enviarán este campo con todos los datos confidenciales en un formato cifrado y luego los Clientes podrán descifrarlo y obtener datos de texto sin formato.


## Webhooks Events

### Authorization

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "00"
    }
  ],
  "cardNumber": "***************5669",
  "description": "APPROVED",
  "transaction": {
    "id": "01765999999998 2013572895880110A00000000000000000000 /12 00",
    "amount": "00000000010.00",
    "reason": "294",
    "currency": "MXN",
    "feeAmount": "00000000010.00",
    "acceptorName": "TEST MERCHANT",
    "cashbackAmount": "00000000010.00",
    "authorizationDate": "20221202",
    "authorizationTime": "141638",
    "additionInformation": "0120484MEXICO 0"
  }
}
```

### Account Life Cycle

Includes events for: **Payment Due Date Event and Account Cycle Event.**

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "0"
    }
  ],
  "description": "APPROVED",
  "transaction": {
    "eventDate": "20220127",
    "eventTime": "141638"
  }
}
```

### Account Management

Includes events for: **Available Credit Event, Payment Posted Event, Change of Address, Payment Due Date Change and Credit Limit Change.**

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "00"
    }
  ],
  "description": "APPROVED",
  "transaction": {
    "eventDate": "20220127",
    "eventTime": "141638"
  }
}
```

### Card Life Cycle

Includes events for: **Card Blocked Message, Activation Message and Card Action/Embossing.**

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "00"
    }
  ],
  "cardNumber": "***************5669",
  "description": "APPROVED",
  "transaction": {
    "eventDate": "20221202",
    "eventTime": "141638",
    "blockReason": "TEST MERCHANT",
    "isActivated": "Y"
  }
}
```

### Fraud Authorization

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "00"
    }
  ],
  "cardNumber": "***************5669",
  "description": "APPROVED",
  "transaction": {
    "amount": "00000000010.00",
    "reason": "294",
    "currency": "MXN",
    "eventDate": "20221202",
    "eventTime": "141638",
    "acceptorName": "TEST MERCHANT"
  }
}
```

### Fraud Block

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "00"
    }
  ],
  "cardNumber": "***************5669",
  "description": "APPROVED",
  "transaction": {
    "reason": "294",
    "eventDate": "20221202",
    "eventTime": "141638",
    "blockReason": "MERCHANT"
  }
}
```

---

## Ver también

- [Access Token](?path=docs/spanish/referencia-api/accessToken.md)
- [Encriptación a Nivel de Mensaje](?path=docs/spanish/referencia-api/encriptacion.md)
- [Glosario API](?path=docs/spanish/referencia-api/glosario-api.md)
- [Manejo de Respuesta](?path=docs/spanish/referencia-api/manejo-respuesta.md)
- [Solicitud de API](?path=docs/spanish/referencia-api/solicitud-api.md)

---

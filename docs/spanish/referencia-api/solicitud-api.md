---
tags: [Referencia de la API, Encabezado de Solicitudes, Cuerpo de Solicitudes, Encabezado]
---

# Solicitud de API

## Encabezado de Solicitud

RESTful API tiene una estructura de encabezado coherente basada en un set de parámetros.

<!--
type: tab
titles: Header, Ejemplo de Encabezado de Solicitud
-->

To create the header, provide the following values:

| Variable            | Tipo      | Longitud | Descripción/Valores                                                                                                                                                                                                                        |
|---------------------|-----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Content-Type`      | *string*  | N/A      | Los tipos de contenido. Valor Válido (Aplicación/JSON).                                                                                                                                                                                    |
| `Client-Request-Id` | *string*  | N/A      | Una identificación generada por el Cliente para el seguimiento de solicitudes y la creación de firmas, única por solicitud. Esto también se utiliza para el control de idempotencia. Se recomienda un Formato UUID de 128 bits.            |
| `apikey`           | *string*  | N/A      | API Key proporcionada al comercio que asocia las solicitudes con la aplicación adecuada en el Developer Portal.                                                                                                                            |
| `Timestamp`         | *integer* | N/A      | Marca de tiempo de época en milisegundos en la solicitud de un sistema Cliente. Se utiliza para la generación de firmas de mensajes y el límite de tiempo (5 minutos).                                                                     |
| `Accept-Language`   | *string*  | N/A      | El encabezado Accept-Language contiene información sobre la preferencia de idioma de un usuario. Este encabezado HTTP es útil para sitios multilingües para decidir el mejor idioma para dar servicios al Cliente. ejemplo: en-US o fr-CA. |
| `Auth-Token-Type`   | *string*  | N/A      | Indica el tipo de autorización HMAC o AccessToken..                                                                                                                                                                                        |
| `Authorization`     | *string*  | N/A      | Se utiliza para garantizar que la solicitud no haya sido manipulada durante la transmisión.                                                                                                                                                |
| `Message-Digest`    | *string*  | N/A      | Solo se necesita desde el navegador o la aplicación del Cliente a la API en las solicitudes de la página de pago hospedada.                                                                                                                |

<!--
type: tab
-->

```json
"header": {
  "Content-Type": "application/json",
  "Client-Request-Id": "CLIENT_REQUEST_ID",
  "apikey": "API_KEY",
  "Timestamp": "TIMESTAMP",
  "Auth-Token-Type": "AUTH_TOKEN_TYPE" ,
  "Authorization": "ACCESS_TOKEN"
}
```

<!-- type: tab-end -->

---

## Cuerpo de la Solicitud

El cuerpo de la solicitud de transacción difiere según la transacción que se inicie.

<!--
type: tab
titles: Ejemplo de Cuerpo de Solicitud
-->

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```

<!-- type: tab-end -->

---

## Ver también

- [Access Token](?path=docs/spanish/referencia-api/accessToken.md)
- [Encriptación a Nivel de Mensaje](?path=docs/spanish/referencia-api/encriptacion.md)
- [Glosario API](?path=docs/spanish/referencia-api/glosario-api.md)
- [Manejo de Respuesta](?path=docs/spanish/referencia-api/manejo-respuesta.md)
- [Webhook](?path=docs/spanish/referencia-api/4-notificaciones.md)


---

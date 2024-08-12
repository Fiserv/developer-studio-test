---
tags: [Referencia de la API, Gestión de Respuestas, Código de Respuesta, Código de Estado HTTP]
---

# Código de Respuesta y Gestión de Mensajes

Los códigos de respuesta identifican el estado final de la transacción desde la puerta de enlace, el host y/o el servidor (HTTP). Los códigos y mensajes son únicos por estado de transacción que incluye: aprobaciones, rechazos y errores.

---

## Códigos de Estado HTTP

El estado de la transacción se puede determinar mediante el código de estado HTTP de tres dígitos de la respuesta. Estos códigos de estado se agrupan en tres clases diferentes, y el primer dígito se puede usar para identificar rápidamente la clase de un código de estado.

- **2xx: Correcto** - Indica que se procesó correctamente la solicitud y devolverá el objeto ProcessResponseDetails junto con el `responseCode` y  `responseMessage`. Esta puede ser la respuesta del emisor o una respuesta de error del procesador.
- **4xx: Error del Cliente** - Indica datos incorrectos en la solicitud y devolverá el objeto `errorResponse` junto con el código, el mensaje y el campo.
- **5xx: Error del Servidor**  - Indica que el servidor no pudo procesar la solicitud y devolverá el objeto `errorResponse` junto con el código, el mensaje y el campo.

<!--
type: tab
titles: 2xx, 4xx, 5xx
-->

### Código de Estado de Éxito y Descripción

| Código | Mensaje          | Descripción                                                                                                    |
|--------|------------------|----------------------------------------------------------------------------------------------------------------|
| 200    | Success          | Indica que una solicitud ha tenido éxito.                                                                      |
| 201    | Created          | Indica que una solicitud se ha realizado correctamente y, como resultado, se ha creado un nuevo recurso.       |
| 204    | No Content       | Indica que una solicitud se ha realizado correctamente y que el Cliente no necesita salir de su página actual. |


<!--
type: tab
-->

### Código descripción y resolución de estado de error del Cliente

| Código | Mensaje                | Descripción                                                                                                        | Resolución                                                                                  |
|--------|------------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| 400    | Bad Request            | No se pudo entender la solicitud debido a una sintaxis incorrecta.                                                 | El comercio debe hacer las modificaciones y repetir la solicitud.                           |
| 401    | Unauthorized           | Indica que la solicitud requiere información de autenticación del usuario.                                         | El comercio puede repetir la solicitud con un campo de encabezado de Autorización adecuado. |
| 403    | Forbidden              | Solicitud no autorizada. El comercio no tiene derechos de acceso al contenido.                                     | Solicite acceso.                                                                            |
| 404    | Not Found              | No se puede encontrar el recurso solicitado.                                                                       | Revise el listado de APIs.                                                                  |
| 408    | Request Time Out       | No se recibió una respuesta a la solicitud durante el período de tiempo establecido.                               | Por favor intente más tarde.                                                                |
| 415    | Unsupported Media Type | No se pudo procesar el tipo de medio proporcionado, tal como se indica en el encabezado de solicitud Content-Type. | El comercio debe corregir los datos y volver a enviar.                                      |
| 422    | Unprocessable Content  | No se pueden procesar las instrucciones contenidas.                                                                | El comerciante deberá hacer las modificaciones y repetir la solicitud.                      |
| 425    | Too Early              | La solicitud se envió demasiado pronto.                                                                            | El comercio debe esperar un tiempo y enviar la solicitud.                                   |
| 429    | Too Many Requests      | El comercio envío demasiadas solicitudes en un período de tiempo determinado.                                      | El comercio debe esperar un tiempo y enviar la solicitud.                                   |
<!--
type: tab
-->

### Código, descripción y resolución de estado de error del Servidor

| Código | Mensaje               | Descripción                                                                   | Resolución                       |
|--------|-----------------------|-------------------------------------------------------------------------------|----------------------------------|
| 500    | Internal Server Error | Se encontró una condición inesperada que le impidió cumplir con la solicitud. | Informe el error.                |
| 502    | Bad Gateway           | El servidor recibió una respuesta no válida del servidor ascendente.          | Intente después de algún tiempo. |
| 503    | Service Unavailable   | El servidor de aplicaciones no está listo para manejar la solicitud.          | Intente después de algún tiempo. |
| 504    | Gateway Timeout       | No se recibió respuesta de la aplicación.                                     | Intente después de algún tiempo. |

<!-- type: tab-end -->

---

## Ver también

- [Access Token](?path=docs/spanish/referencia-api/accessToken.md)
- [Encriptación a Nivel de Mensaje](?path=docs/spanish/referencia-api/encriptacion.md)
- [Glosario API](?path=docs/spanish/referencia-api/glosario-api.md)
- [Solicitud de API](?path=docs/spanish/referencia-api/solicitud-api.md)
- [Webhook](?path=docs/spanish/referencia-api/4-notificaciones.md)

---

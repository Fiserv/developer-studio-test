# Access Token

Para utilizar las API expuestas en los módulos Clientes, Cuentas, Tarjetas y Transacciones, se necesita el uso de un Access Token.

En términos prácticos, el Access Token es una secuencia de caracteres que actúa como una clave digital, permitiendo que una determinada aplicación acceda a los recursos y datos específicos de nuestras API de forma segura. Garantiza que sólo los clientes autenticados y autorizados puedan interactuar con los servicios prestados.

![1](https://github.com/user-attachments/assets/5e0e7d2a-7a2c-4410-b17b-1f3b924eeff8)

Esta página documentará cómo solicitar un Access Token utilizando las credenciales del cliente siguiendo una política estándar de OAuth (autorización abierta), que permite al usuario acceder a recursos sin compartir sus credenciales.

## Request

### Endpoint

**Method:** Post

**URL:** `https://{{endpoint}}/token`

### Autenticación

El tipo de autorización para esta llamada es **"Autenticación básica"**. Utiliza la clave API como nombre de usuario y el secreto del cliente como contraseña.

![2](https://github.com/user-attachments/assets/022ffb9d-872e-434f-a851-2e94ecb13078)

Al configurar este tipo de autorización en Postman, automáticamente generará el Encabezado de Autorización, codificando el usuario y contraseña en Base64, agregando el “Básico” (con el espacio a la derecha).

![3](https://github.com/user-attachments/assets/5a3d5ed5-0218-4360-88cc-be857919d720)

**Nota:** Las credenciales (clave de API -username- y secreto de cliente -password-) deben ser solicitadas por el cliente al PM para que pueda solicitarlas al equipo de API.

### Headers

**Content-Type:** application/x-www-form-urlencoded

**apikey:** El mismo Apikey utilizado como nombre de usuario mencionado en la sección de autorización.

**Authorization:** Generado automáticamente por Postman con el "tipo de autorización" anterior. 

![4](https://github.com/user-attachments/assets/ec573822-5aeb-44e1-9788-db0a6cba4b85)

### Ejemplo de Solicitud
```bash
curl --location 'https://{{endpoint}}/{{product}}/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: rfDarhUD3omwZf1hwQphgegrd0Yodx9y' \
--header 'Authorization: Basic c3FIOG9vSGV4VHoAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ' \
--data-urlencode 'grant_type=client_credentials'
```

***Disclaimer:** Todos los valores de la solicitud de muestra son ficticios y tienen una intención puramente instructiva.*

## Response

![5](https://github.com/user-attachments/assets/97977392-3fb1-4234-985f-6ed7b13b4dd4)

**`token_type`** está configurado para el tipo de autorización Bearer Token. Además, el Access Token requerido para cualquier solicitud enviada a las API expuestas en los módulos Clientes, Cuentas, Tarjetas, y Transacciones estará en el campo **`access_token`** de la respuesta.

Por lo tanto, si está utilizando Postman, es necesario configurar el token de portador en la pestaña de autorización de solicitud.

![6](https://github.com/user-attachments/assets/dcfb9bb5-ca47-48fa-b08a-fa5137662425)

De lo contrario, simplemente agregue manualmente un Authorization Header a cada solicitud con el contenido " Bearer [ACCESS_TOKEN]", en el cual el [ACCESS_TOKEN] corresponderá a lo generado en la respuesta de la variable **access_token**:

```bash
--header 'Authorization: Bearer [ACCESS_TOKEN]' 
```

Además, el campo **`expires_in`** mostrará la duración del token de acceso; el tiempo se expresa en segundos.

![7](https://github.com/user-attachments/assets/ce1f895e-4aa8-493c-8e0d-1636803e8888)

Actualmente, el valor del campo **`expires_in`** es de 900 segundos. Sin embargo, recomendamos utilizar el valor contenido en la variable directamente (**`expires_in`**) devuelta en el cuerpo de la respuesta, como en la imagen anterior. De esta forma, si hay un cambio en el tiempo de vencimiento del token, la aplicación cliente no necesitará mantenimiento.

```pseudocode
IF (current_dateTime() > InicialDateTime() + expires_in) {
    statements
}
END IF
```

### Ejemplo de Response

```json
{   
    "token_type": "BearerToken",
    "issued_at": "1420260525643",
    "client_id": "5jUAdGv9pBouF0wOH5keAVI35GBtx3dT",
    "access_token": "XkhU2DFnMGIVL2hvsRHLM00hRWav",
    "expires_in": "1799", //--in seconds
    "status": "approved"
}
```

***Disclaimer:** Todos los valores de la solicitud de muestra son ficticios y tienen una intención puramente instructiva.*

---

## Ver también

- [Encriptación a Nivel de Mensaje](?path=docs/spanish/referencia-api/encriptacion.md)
- [Glosario API](?path=docs/spanish/referencia-api/glosario-api.md)
- [Manejo de Respuesta](?path=docs/spanish/referencia-api/manejo-respuesta.md)
- [Solicitud de API](?path=docs/spanish/referencia-api/solicitud-api.md)
- [Webhook](?path=docs/spanish/referencia-api/4-notificaciones.md)

---

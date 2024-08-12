---
tags: [Casos Principales, Firma HMAC]
---

# ¿Qué es la firma HMAC?

HMAC, un código de autenticación de mensajes basado en algoritmos Hash. Es un control de seguridad que genera una firma Hash para cada mensaje enviado de un punto a otro.

Cuando se envía un mensaje a un servidor con HMAC habilitado, se genera una nueva firma para su mensaje de acuerdo con su llave secreta.

El cliente y el servidor deben tener la misma llave secreta para que puedan verificar la autenticidad del mensaje y su integridad, ya que los mensajes modificados dan como resultado firmas diferentes.

El mismo mensaje generado con la misma llave secreta siempre dará como resultado la misma firma.

![image](https://user-images.githubusercontent.com/111396588/223831325-86b618a5-1ee4-4134-a82f-f5ce04766e01.png)

## ¿Por qué se debe usar?

Al habilitar la verificación HMAC, se puede garantizar la autenticidad del remitente del mensaje y certificar que el mensaje no ha sido interceptado ni modificado por piratas informáticos.

## ¿Cómo se debe utilizar?

Necesitará una herramienta para generar sus mensajes HMAC con base en su llave secreta. La mayoría de los lenguajes de programación tienen muchas bibliotecas que pueden ayudar a enviar o verificar la autenticidad del remitente y la integridad del mensaje.

Solo se requiere ingresar el algoritmo hash común, el mensaje y la llave secreta para generar un mensaje HMAC firmado.
age.

---

## Ver también

- [Ambiente de API](?path=docs/spanish/casos-principales/ambiente-api.md)
- [Auditoría y Monitoreo](?path=docs/spanish/casos-principales/auditoria.md)
- [Cargar Fondos](?path=docs/spanish/casos-principales/cargas.md)
- [Controles de Tarjetas](?path=docs/spanish/casos-principales/controles-tarjeta.md)
- [Emisión de Tarjetas Digitales](?path=docs/spanish/casos-principales/emision-tarjetas.md)
- [Gestión de Clientes](?path=docs/spanish/casos-principales/gestion-clientes.md)
- [Gestión de Cuentas](?path=docs/spanish/casos-principales/gestion-cuentas.md)
- [Gestión de Tarjetas](?path=docs/spanish/casos-principales/gestion-tarjetas.md)
- [Integración con el Sistema Falcon](?path=docs/spanish/casos-principales/integracion-falcon.md)
- [Relación Cliente-Cuenta-Tarjeta](?path=docs/spanish/casos-principales/relacion.md)

---

---
tags: [Casos Principales, Gestión de Tarjetas, Tarjetas, Embozador, PAN Token, Códigos De Seguridad, PIN]
---

# Gestión de Tarjetas

## Actualizar de la Acción de la Tarjeta 

Use esta API para actualizar la bandera de acción utilizada para volver a grabar (reemitir) un número de tarjeta específico.

Esta API le permite al usuario solicitar la reemisión de una tarjeta por algún motivo como pérdida/robo, daño, expiración de la tarjeta, reemplazo de emergencia, etc.

**PUT** `/cards/embosser/cardAction-L8V2`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Tarjetas Masivas 

Esta API permite al usuario agregar o actualizar una solicitud para grabar nuevas tarjetas de forma masiva. Estas tarjetas pueden ser de crédito, débito o prepago. La cantidad de tarjetas que serán embozadas es un parámetro solicitado por la API.

Las tarjetas embozadas no tendrán un nombre de embozador, pero el número de tarjeta, la fecha de expiración y los valores de seguridad de la tarjeta serán parte de ellos.

**POST** `/cards/mass-card-issue-L8V3`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Agregar Registro de Tarjetas 

La API permite crear información de tarjeta utilizada para grabar una tarjeta o plástico nuevos en relieve. Esta información de la tarjeta debe tener relación con un número de cuenta creado a través de API **Account Add** y este número de cuenta debe estar relacionado con un número de cliente creado a través de API **Customer Add**.

Esta API permite agregar información de la tarjeta como la fecha de vencimiento de la tarjeta, el código de servicio, el nombre del tarjetahabiente, la dirección donde se entregará la tarjeta, los límites para compras, etc.

El número de tarjeta se calcula de forma aleatoria por la aplicación, y este número no se generará de nuevo (duplicado).

**POST** `/cards/embosser/l8vf`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Consultar de Valores de Seguridad 

Esta API le permite al usuario obtener los valores de seguridad de la tarjeta (CVV, CVV2, ICVV, número PIN) ya grabados en relieve para un número de tarjeta específico.

Los valores de seguridad proporcionados por la API se cifrarán mediante una clave de seguridad de 32 bytes, por lo que el usuario debe utilizar la misma clave de seguridad y el algoritmo 3Des para descifrar los valores de seguridad.

**POST** `/cards/v1/pin/codes`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Consultar Número de Intentos de PIN No Válidos 

Esta API permite al tarjetahabiente obtener el número de intentos de PIN no válidos.

Como parte de los parámetros de seguridad, se configura el número de intentos de PIN no válidos para evitar que se pueda calcular el número de PIN para propuestas de fraude. Cuando se alcanza este parámetro, el número PIN se bloquea y se debe calcular un nuevo número PIN.

Los intentos de PIN no válidos pueden ocurrir por muchas razones. La razón más popular es cuando el tarjetahabiente comete un error al ingresar el número de PIN en el cajero automático.

**POST** `/cards/pin/invalid-attempts`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Consultar Tarjeta o PAN Token

Actualmente, cuando un cliente no está certificado por la industria de tarjetas de pago (PCI), el número de tarjeta no se puede mostrar en ningún servicio web, cajero automático, POS, etc. PAN-TOKEN se puede mostrar en un servicio web, cajero automático, POS o cualquier otro dispositivo o servicio sin comprometer el número de tarjeta real.

Para mantener seguro este valor de seguridad, se requiere utilizar un PAN-TOKEN en lugar de un número de tarjeta, por lo que cuando se crea un número de tarjeta, la funcionalidad actual genera el PAN-TOKEN como sustituto del número de tarjeta.

Cuando se crea una nueva tarjeta a través de la API **Card Embosser**, el PAN-TOKEN se calcula automáticamente utilizando una CLAVE de seguridad y puede tener valores numéricos y alfanuméricos.

Utilice esta API para obtener el token PAN calculado para un número de tarjeta.

**POST** `/cards/embosser/card-pan-l8v2`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Consultar Valores Dinámicos

Use esta API para calcular y consultar un nuevo CVV2 para compras con tarjeta no presente.

Actualmente, cuando la tarjeta se graba en relieve a través de API **Card Embosser**, el código CVV2 estático se calcula y se imprime en el panel de firma en el reverso de la tarjeta. La nueva funcionalidad de Dynamic CVV2 le permite al tarjetahabiente llamar a esta API para generar y calcular un nuevo CVV2 antes de realizar una compra no presente. Por lo tanto, cuando se activa la API, el CVV2 estático se desactiva y cada vez que el tarjetahabiente desea realizar una nueva compra sin tarjeta presente, se deberá calcular el CVV2 nuevo por medio de esta API.

**POST** `/cards/pin/dynamic-values`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Crear Tarjeta Instantánea 

Esta API le permite al usuario solicitar la creación de cuenta y tarjeta de forma instantánea. La información de la tarjeta estará lista para ser utilizada para compras.

La información del cliente debe ser creada por medio de la API **Customer Add** antes de llamar a la API de tarjeta instantánea.

**POST** `/account/v2/instantCard`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Validar PIN

Use esta API para confirmar que el PIN generado sea correcto.

Esta API requiere el PIN Block y el número de tarjeta y no el PIN en claro.

**POST** `/cards/pin/validation`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.


---

## Ver también

- [Ambiente de API](?path=docs/spanish/casos-principales/ambiente-api.md)
- [Auditoría y Monitoreo](?path=docs/spanish/casos-principales/auditoria.md)
- [Cargar Fondos](?path=docs/spanish/casos-principales/cargas.md)
- [Controles de Tarjetas](?path=docs/spanish/casos-principales/controles-tarjeta.md)
- [Emisión de Tarjetas Digitales](?path=docs/spanish/casos-principales/emision-tarjetas.md)
- [Firma HMAC](?path=docs/spanish/casos-principales/hmac.md)
- [Gestión de Clientes](?path=docs/spanish/casos-principales/gestion-clientes.md)
- [Gestión de Cuentas](?path=docs/spanish/casos-principales/gestion-cuentas.md)
- [Integración con el Sistema Falcon](?path=docs/spanish/casos-principales/integracion-falcon.md)
- [Relación Cliente-Cuenta-Tarjeta](?path=docs/spanish/casos-principales/relacion.md)

---

---
tags: [Casos Principales, Gestión de Clientes, Cliente, Datos Demográficos, Generación, Dirección]
---

# Gestión de Clientes

## Actualizar Cliente

Esta API permite la actualización de la información demográfica de un cliente específico. Actualmente se ingresa a través de la API **Customer Add**. El valor requerido por esta API es el número de cliente creado a través de la API **Customer Add**.

**PUT** `/customer`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Agregar Cliente

Esta API le permite a un Banco ingresar información demográfica del cliente, como nombre, dirección, número de teléfono, correo electrónico, número de identificación, etc. se agregará por medio de esta API.

Cada cliente nuevo tendrá un número único llamado Número de Cliente, este Número de Cliente puede ser generado aleatoriamente por el sistema o puede ser ingresado como parte de los valores de la API.

Este número de cliente es independiente del número de identificación personal del cliente: Seguro Social, Cédula, CPN o Licencia de Conducir.

**POST** `/customer/l8v2`
                
La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Agregar Número de Relación

Esta API permite que un tarjetahabiente agrupe todos los números de relación que ya fueron creados bajo un mismo Número de Cliente.

El número de Relación es un número único asignado a una Tarjeta Corporativa; por ejemplo, Walmart con un número de cliente 123, se identifica con un número de relación único 567 y bajo este número de relación se crean muchas cuentas y tarjetas para los empleados de Walmart. Entonces, al usar el Número de Cliente 123 en esta API, es posible obtener el Número de Relación 567.

**POST** `/customer/relationshipNumber`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Consultar Datos Demográficos

Con esta API el tarjetahabiente podrá obtener toda la información demográfica ya agregada a través de la API **Customer Add** cuando se crea un cliente nuevo. La misma información se mostrará en el mensaje de respuesta de la API. La información demográfica del cliente solo se mostrará y no podrá ser actualizada ni eliminada.

La API utilizará los valores del Número de Cliente para obtener la información demográfica del cliente.

**POST** `/customer/demographicData-l8v2`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Consultar de Dirección Actual/Anterior

La API proporciona información de la información demográfica del cliente y la dirección postal anterior.

Cuando se ingresa un número de cuenta o relación como entrada al servicio, el servicio devuelve la información del propietario principal y copropietario del registro del cliente.

El número de cliente adecuado se encuentra utilizando los servicios de navegación. Cuando el número de cliente se ingresa en el servicio, se devuelven los datos para ese registro.

**GET** `/customer/{accountNumber}/current-prior-address`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Encontrar un Número de Cuenta

Esta API le permite a un tarjetahabiente conocer todos los números de cuenta de los productos de Crédito, Deuda, Prepago, Monedero, creados bajo el Número de Cliente, previamente creado con la API **Customer Add**.

Esta información se envía en el mensaje de respuesta de la API una vez que se haya activado. El Número de Cliente será el principal valor utilizado para la búsqueda de los números de cuenta.

**POST** `/customer/accountNumber`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Generar Cliente y Número de Cuenta 

Esta API le permite al banco generar de forma masiva una cantidad definida de clientes, tarjetas, cuentas y números de relación. Los números solicitados serán reservados por el sistema, por lo que estos números no se volverán a generar.

Esta API es muy exitosa cuando el banco tiene muchas sucursales y necesita generar y embozar plásticos con diferentes números de tarjeta y fechas expiración de tarjeta pero sin nombre. Por lo tanto, las tarjetas se pueden distribuir entre muchas sucursales bancarias para ser usadas como reemplazo temporal de la tarjeta cuando el tarjetahabiente pierde su tarjeta actual.

La API solicita la identificación del banco (organización), la identificación del producto (logotipo), la cantidad de números a generar para los números de Cliente, Cuentas, Tarjetas y Relación.

La respuesta de la API mostrará el número de cliente, cuenta, tarjeta y relación tal como se solicitaron.

**POST** `/customer/generation`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Obtener Detalles de Tarjetas 

Esta API le permite al cliente conocer todos los números de tarjeta creados bajo este número de cliente para productos de tarjetas de crédito, tarjetas de débito, tarjetas prepago o monederos digitales.

Esta información se envía en el mensaje de respuesta de la API una vez que se haya activado. El Número de Cliente será el principal valor utilizado para la búsqueda de los números de cuenta.

**GET** `/customer/v3/cards/details`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

---

## Ver también

- [Ambiente de API](?path=docs/spanish/casos-principales/ambiente-api.md)
- [Auditoría y Monitoreo](?path=docs/spanish/casos-principales/auditoria.md)
- [Cargar Fondos](?path=docs/spanish/casos-principales/cargas.md)
- [Controles de Tarjetas](?path=docs/spanish/casos-principales/controles-tarjeta.md)
- [Emisión de Tarjetas Digitales](?path=docs/spanish/casos-principales/emision-tarjetas.md)
- [Firma HMAC](?path=docs/spanish/casos-principales/hmac.md)
- [Gestión de Cuentas](?path=docs/spanish/casos-principales/gestion-cuentas.md)
- [Gestión de Tarjetas](?path=docs/spanish/casos-principales/gestion-tarjetas.md)
- [Integración con el Sistema Falcon](?path=docs/spanish/casos-principales/integracion-falcon.md)
- [Relación Cliente-Cuenta-Tarjeta](?path=docs/spanish/casos-principales/relacion.md)

---

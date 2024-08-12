---
tags: [Casos Principales, Cargar Fondos desde una Cuenta Origen, Cuenta Balance, Punto a Punto]
---

# Cargar Fondos desde una Cuenta Origen 

## Definición

A través de las API'S actualmente creadas y ubicadas en el portal, es posible cargar dinero de una Cuenta de Tarjeta de Débito a una Cuenta de Tarjeta de Crédito o Tarjeta Prepago, mover dinero de una Cuenta Crédito a una Cuenta Débito o Prepago o realizar cargos de dinero desde una Cuenta de Tarjeta Prepago a otra Cuenta de Tarjeta Prepago.

Estas API están diseñadas para permitir que los clientes potenciales, los clientes y los desarrolladores realicen pruebas en línea y directamente en un ambiente de prueba real, si aún no ha configurado su ambiente de prueba.

Cada API permitirá cargar dinero desde diferentes productos de origen a diferentes productos de destino. Con el uso de las diferentes opciones o parámetros, estas APIs controlan, acreditan y debitan el dinero de la fuente y del receptor de dinero para cada Cuenta, permitiendo actualizaciones en línea o no del uso de crédito disponible por parte de la tarjeta, según el parámetro definido en la API antes de que se active.

## Propósito

La creación de cuentas de Crédito, Débito y Prepago son un requisito que se debe completar antes de ejecutar cualquiera de las APIs utilizadas para cargar dinero. La cual debe ser creada usando las APIs para Creación de Clientes **(Customer Add)**, Creación de Cuentas **(Account Add)** y Creación de Tarjetas **(Embosser Add)**.

Sin embargo, dependiendo de los valores utilizados en APIS, también es posible cargar dinero utilizando montos financieros directos, recibidos en efectivo de una sucursal bancaria.

## Casos de Uso

![image](https://user-images.githubusercontent.com/111396588/224208640-605f6900-ab7a-40e3-9062-d40563b0ed8f.png)

El uso de esta API le permite cargar dinero a un producto de Débito, Crédito, Tarjeta Prepago y Monedero, utilizando los parámetros definidos en el Portal. Esta API toma como fuente el efectivo recibido de una agencia o sucursal bancaria y aplicará estos fondos. Estos fondos pueden ser en moneda nacional o extranjera. Como parte de sus funciones, esta API permite indicar a través de sus parámetros, si el dinero depositado en la Cuenta puede ser utilizado de forma inmediata o no.

A través de los parámetros indicados es posible identificar la cuenta, tarjeta del producto desde la cual se está realizando el retiro de dinero (débito) y definir la cuenta y tarjeta a la cual se realizará el abono, también se requiere que, como parte de los parámetros de la API, se agregue la ubicación geográfica (latitud y longitud) de la fuente (remitente) que está cargando dinero. También se requiere el número de tarjeta del que se recibe el dinero (beneficiario) como parte de los parámetros requeridos por la API.

**PUT** `/account/v2/balance`
      
La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Diagrama de Secuencia

![image](https://user-images.githubusercontent.com/111396588/224208900-25a90498-2011-4a85-96b0-9b5a8accab98.png)

---

## Ver también

- [Ambiente de API](?path=docs/spanish/casos-principales/ambiente-api.md)
- [Auditoría y Monitoreo](?path=docs/spanish/casos-principales/auditoria.md)
- [Controles de Tarjetas](?path=docs/spanish/casos-principales/controles-tarjeta.md)
- [Emisión de Tarjetas Digitales](?path=docs/spanish/casos-principales/emision-tarjetas.md)
- [Firma HMAC](?path=docs/spanish/casos-principales/hmac.md)
- [Gestión de Clientes](?path=docs/spanish/casos-principales/gestion-clientes.md)
- [Gestión de Cuentas](?path=docs/spanish/casos-principales/gestion-cuentas.md)
- [Gestión de Tarjetas](?path=docs/spanish/casos-principales/gestion-tarjetas.md)
- [Integración con el Sistema Falcon](?path=docs/spanish/casos-principales/integracion-falcon.md)
- [Relación Cliente-Cuenta-Tarjeta](?path=docs/spanish/casos-principales/relacion.md)

---

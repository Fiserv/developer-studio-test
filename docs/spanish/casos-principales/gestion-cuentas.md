---
tags: [Casos Principales, Gestión de Cuentas, Cuenta, Saldo, Débito, Límite de Crédito, Bloquear, Desbloquear, Buró de Crédito, Transferencias P2P, Datos Demográficos, Generación, Dirección]
---

# Gestión de Cuentas

## Actualizar Banco, Sucursal y Tienda Pendiente 

Esta API le permite al usuario actualizar la Sucursal de la tienda en donde se aprobó el crédito para crear la cuenta y la tarjeta. Este número es parte de la información de la cuenta y se agrega por primera vez cuando se crea la cuenta a través de la API **Account Add**.

**PUT** `/account/bank-branch-store`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Buró de Crédito

Esta API, le permite a un usuario actualizar los campos del buró de crédito a nivel de cuenta, por lo que la cuenta se agregará al informe del buró de crédito generado diariamente. Este informe se utiliza para informar a una institución de Buró de Crédito sobre la situación y clasificación del crédito del tarjetahabiente.

Esta API utiliza el número de cuenta y una bandera para indicar si la cuenta se debe agregar al informe del Buró de Crédito.

**PUT** `/account/creditBureau`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar el Estado del Monedero Digital de la Cuenta

La API le permite al usuario cambiar el estado actual del monedero digital a activo, inactivo o suspendido.

El Monedero Digital es una funcionalidad actual que permite que una cuenta de tarjeta prepago tenga más de un bucket de código de moneda llamado "Monedero Digital" para cargar dinero. Una cuenta de tarjeta prepago puede tener una monedero para cargar USD, moneda local y otros códigos de moneda.

Esta API se puede usar para cambiar el estado de cada una de los monederos.

**PUT** `/account/walletStatus`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar el Límite de Crédito Temporal 

Use esta API para aumentar el límite de crédito de la cuenta por un número específico de días. Esta API es muy útil cuando el tarjetahabiente no tiene más límite de crédito disponible y solicita un aumento del límite de crédito para un número específico de días, por lo que cuando se completa el límite de tiempo, el límite de crédito original se restablece como límite de crédito actual.

Esta API utiliza el número de cuenta como parámetro de búsqueda y se deben configurar los valores como límite de crédito de la cuenta, límite de crédito nuevo y aumentar la fecha de expiración antes de que se active la API.

**PUT** `/cards/temporary-credit-limit`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar la Cuenta de Usuario 

Esta API permite actualizar los valores de más de 50 campos de usuario definidos en la información de nivel de cuenta. Estos campos de usuario son campos de uso discrecional que el usuario puede usar para agregar información adicional en la cuenta.

Valores como fechas, cantidades, códigos, etc. se puede configurar en la API antes de dispararla.

**PUT** `/account/user`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar la Tabla de Control de Definición de Precios 

Esta API permite asignar una Tabla de Control de Procesamiento (PCT) nueva a una Cuenta existente para un rango de fechas.

Actualmente, cuando se crea una cuenta nueva usando la API **Account Add**, se debe agregar el número PCT. Esta tabla PCT contiene el parámetro de procesamiento utilizado por la cuenta para procesar intereses, cargos, impuestos, etc.

Usando esta API es posible cambiar manualmente la Tabla PCT actual por otra Tabla PCT con diferentes parámetros.

**PUT** `/account/pctId`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar los Criterios de Autorización 

Esta API le permite al usuario crear y actualizar una relación entre las transacciones de autorización de tarjetas y una tabla de criterios de autorización.

La tabla de criterios de autorización es una funcionalidad actual para definir una tabla de criterios de aprobación de autorizaciones en función de la actividad comercial o MCC, las horas, el día de la semana, el código del país, el código postal, de modo que el monto de la autorización pueda ser validado para aprobar o rechazar la autorización.  La información de esta tabla debe ser agregada antes de usar esta API.

**PUT** `/account/auth-criteria`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar los Límites de Carga de Tarjetas Prepago 

Esta API permite que un usuario actualice los límites máximos y mínimos actuales de la cantidad permitida para las cuentas de tarjetas prepago.

Cuando se crea una cuenta de tarjeta prepago mediante la API **Account Add**. Se establecen los montos máximos y mínimos que puede tener una tarjeta prepago. Sin embargo, estos límites pueden cambiar con el tiempo, por lo que la API ayudará al cliente a configurar los parámetros nuevos.

**PUT** `/account/ppd-load-limits`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Número de Cliente

La API permite que un usuario cambie el número de cliente ya vinculado a una información de cuenta específica.

Actualmente, cuando se crea una información de cuenta en el ambiente de prueba a través de la API **Account Add**, se requiere agregar el número de cliente creado a través de su API **Customer Add**. Este enlace es necesario para vincular un cliente con una cuenta creada.

Por medio de la API es posible eliminar este enlace y hacer un enlace diferente entre el número de cuenta y un número de cliente diferente que ya fue creado en el ambiente de prueba.

Esta API utiliza el número de cuenta como parámetro de búsqueda y un número de cliente existente que se utilizará para establecer un enlace nuevo.

**PUT** `/account/v2/customer`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Número de Relación de Cuenta 

Esta API permite vincular una subcuenta nueva creada por medio de la API **Account Add** con una cuenta de relación previamente creada.

El número de Relación es un número único asignado a una Tarjeta Corporativa; por ejemplo, Walmart con un número de cliente 123, se identifica con un número de relación único 567 y bajo este número de relación se crean muchas cuentas y tarjetas para los empleados de Walmart. Entonces, usando el número de relación 567 es posible vincular una subcuenta nueva adicional.

**PUT** `/account/relationship/account`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Partes Asociadas 

Esta API permite que el usuario actualice los parámetros seleccionados a nivel de información de la cuenta, relacionados con los campos de las Partes Asociadas.

Los campos de Parte Asociada ubicados a nivel de Cuenta se utilizan para identificar si la Cuenta tiene alguna relación con un tercero. Un tercero asociado puede ser: un garante, un co-deudor, un firmante autorizado, un representante de ventas, etc.

**PUT** `/account/associatedParties`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Plazo de Cuota 

Esta API, permite que el usuario cambie o actualice el plazo de pago de una transacción que ya fue posteada en la cuenta.

En algunos países de LATAM, cuando se registra una transacción de compra en la Cuenta, se puede financiar en un número específico de cuotas, por lo que se debe calcular un monto de pago fijo para estas transacciones.

Esta API le permite al usuario cambiar el número de cuotas que ya fue configurado a nivel de transacciones.

Esta API utiliza el número de cuenta, el número de referencia de transacciones y el nuevo número de cuotas como parte de los parámetros de búsqueda.

**PUT** `/account/installment-term`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Producto Promocional de Transferencia de Cuenta

Use esta API para actualizar un tipo de tarjeta de producto actual a otro; por ejemplo, actualizar de Visa Classic a Visa Gold, o de MasterCard Classic a MasterCard Black.

Cuando se activa la API, la información de la cuenta, la información de la tarjeta y los saldos se transfieren a una cuenta y tarjeta nuevas. La información del cliente será la misma. Los estados de cuenta se eliminarán de la cuenta anterior, pero el ciclo de transacciones hasta la fecha se transferirá a la cuenta nueva.

Se puede usar la misma API para hacer una degradación del producto, es decir, transferir de Visa Gold a Visa Classic o de MasterCard Black a MasterCard Classic.

**PUT** `/account/transfer-promotional-product`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Sobrelímites de Tarjetas Prepago 

Esta API permite actualizar el monto de sobrelímite permitido para un número de cuenta de tarjeta prepago específico. Este monto de sobrelímite es un monto fijo utilizado por el sistema de autorización para validar el monto de autorización si está por debajo de este monto cuando la cuenta no tiene más crédito disponible.

**PUT** `/account/ppd-over-limit`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Agregar Cuenta

Esta API permite agregar toda la información de la Cuenta para cualquier producto de tarjetas de crédito, tarjetas de débito, tarjetas prepago y monederos digitales. Información como límites de crédito, ciclos de facturación, nombre corto del cliente, códigos de bloqueo de la cuenta, número de cliente, tecnología de la tarjeta, etc. se puede agregar como parte de los campos de esta API.

El número de cuenta es un número único que es diferente al número de tarjeta, el número de cuenta es un número creado por el sistema de forma aleatoria.

Esta API necesita el número de cliente como un valor obligatorio antes de que se pueda activar la API. Este número de cliente se proporciona cuando se activa la API **Customer Add** para agregar información demográfica.

**POST** `/account/add-L8V3`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Bloquear y Desbloquear Cuentas

Esta API puede ser utilizada por el tarjetahabiente para bloquear/desbloquear la cuenta, no la tarjeta. Actualmente, como parte de la funcionalidad de First Vision, un tarjetahabiente debe tener la información del cliente, la información de la cuenta y la información de la tarjeta ya creada por medio de las APIs: **Customer Add**, **Account Add** y **Card Add**.

El uso de esta API bloquea la cuenta por cualquier motivo, con más de 25 tipos de códigos de bloqueo ya hayan sido definidos a nivel de producto. Por lo tanto, dependiendo de la activación del código de bloqueo en la API, todas las tarjetas bajo este número de cuenta pueden ser bloqueadas automáticamente para evitar aprobar autorizaciones.

El número de cuenta es un valor obligatorio para activar esta API.

**PUT** `/account/block-code`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Buscar Detalles de Cuentas

La API permite que un usuario obtenga toda la información de la cuenta que fue previamente agregada por medio de la API **Account Add** en un ambiente de prueba. Esta información de la cuenta se recibe en el mensaje de respuesta de la API después de llamar a la API.

Esta API mostrará Información como el estado de la cuenta, el número de cliente, los códigos de bloqueo de la cuenta, el límite de crédito, las banderas de exención, etc.

Esta API requiere el Número de Cuenta como parámetro de búsqueda junto con la identificación del banco (organización).

**GET** `/account/v2/accounts`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Buscar Detalles de Relaciones

Esta API le permite al usuario agrupar todos los números de cuenta ya creados bajo un mismo número de relación.

Un número de relación se define como una Cuenta Corporativa, lo que significa que todas las cuentas y tarjetas que forman parte de esta Corporación deben ser creadas bajo esta Cuenta Corporativa.

La API **Account Add** permite crear cuentas corporativas y las subcuentas que formarán parte de estas cuentas.

Esta API utiliza el Número de Cuenta Corporativa como parámetro de búsqueda.

**GET** `/account/{accountNumber}/relationship`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Buscar Saldos de Cuentas 

Esta API, puede ser utilizada por el tarjetahabiente para obtener información sobre el saldo actual de la cuenta. Utilizando el número de cuenta como parámetro de búsqueda, la API mostrará el saldo actual de la cuenta, el crédito disponible, el saldo de efectivo, el límite de crédito, etc. en el mensaje de salida de la API.

Esta API mostrará la información de los saldos de la cuenta en tiempo real, en modo de consulta, por lo que no se pueden actualizar los valores del saldo de la cuenta.

Esta API usa el número de cuenta que fue asignado cuando la API **Account Add** fue activada.

**POST** `/account/balance/details`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Consultar Débito/Crédito Directo 

La API le permite al usuario traer toda la información sobre valores previamente configurados a nivel de cuenta o generar un Débito Directo o Crédito Directo.

El Débito Directo y el Crédito Directo es una funcionalidad para permitir que el proceso interno realice un débito o crédito de una Cuenta Bancaria (cuenta corriente o cuenta de ahorro) y este monto puede ser utilizado para pagar el saldo mínimo o completo del Estado de Cuenta.

La cuenta de ahorros, la cuenta corriente y la cuenta de enrutamiento son valores configurados previamente a nivel de cuenta, por lo que, después de llamar a esta API, esta información debe ser configurada como parte de la información de la cuenta a través de la API **Account Add**.

**GET** `/account/{accountNumber}/credit-debit`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Consultar Detalles de la Cuenta a la Tarjeta 

La API le permite a un usuario averiguar todas las tarjetas que han sido creadas bajo un mismo número de cuenta. Si solo se proporciona el número de cuenta como entrada para una cuenta de doble moneda, la llamada a la API devolverá el número de tarjeta para la cuenta local. Si se proporciona un número de Organización en los datos de entrada, la respuesta proporciona los números de tarjeta asociados con esa Organización, ya sea una Organización local o extranjera.

Para activar esta API, la información del número de cuenta y la información de la tarjeta deben haberse creado previamente utilizando las API: **Customer Add**, **Account Add** y **Card Add**.

Esta API mostrará todas las tarjetas creadas bajo el número de cuenta, la tarjeta principal y las tarjetas adicionales.

**POST** `/cards/embosser/card-details-L8V3`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Consultar Información de Saldos, Refinanciamiento y Reestructuración 

Esta API le permite a un usuario seleccionar un monto de saldo específico de un plan de crédito de cuenta y refinanciar o reestructurar este saldo en un número nuevo de cuotas o en un monto fijo.

Por ejemplo, un saldo de cuenta de $10.000 para el plan de crédito 10002 a 5 cuotas tiene un pago fijo de $2.000 mensuales. Utilizando esta API, para refinanciar o reestructurar este saldo, el nuevo número de cuotas puede ser 10 con un pago mínimo de $1.000 por mes.

Esta API solicita el número de cuenta, el tipo de refinanciamiento, el plan de crédito, nuevo número de cuotas y el monto nuevo.

**GET** `/account/{accountNumber}/balance`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Entrada / Salida de Efectivo

Esta API permite aplicar un monto de dinero de una sucursal bancaria, cajero automático, servicio web, etc. Esta transferencia de dinero no realiza un débito de una cuenta existente de tarjeta de crédito, tarjeta de débito o tarjeta prepago, si no que esta API postea un monto de dinero específico a una cuenta destino.

Use los parámetros de la API para permitir que la transferencia de dinero esté lista para usar después de llamar a la API o espere hasta el día siguiente.

**PUT** `/account/v2/balance`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Resumen de la Cuenta 

Use esta API para obtener la información más importante de la cuenta, como el número de cuenta, el nombre del cliente, su dirección y número de teléfono, los campos del usuario, la información financiera de la cuenta, el nivel de morosidad, etc. Esta API utiliza el número de cuenta como parámetro de búsqueda.

**GET** `/account/{accountNumber}/overview`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Transferir Fondos de Cuenta a Cuenta 

Esta API le permite a un usuario transferir una cantidad específica de dinero PUNTO A PUNTO entre dos cuentas diferentes: de tarjeta de crédito a tarjeta de débito, de tarjeta de débito a tarjeta de débito, de tarjeta de crédito a tarjeta prepago o tarjeta de débito a tarjeta prepago, monederos digitales, etc.

Esta transferencia puede ser inmediata, por lo que el destinatario de la cuenta puede usar dinero después de que se llame a la API o puede ser al día siguiente, esto depende de los parámetros de la API.

Después de llamar a esta API, se crean transacciones de débito y crédito para las cuentas origen y destino.

Esta API usa el número de cuenta de la cuenta origen y el número de cuenta de la cuenta destino.

**PUT** `/account/transferP2P`

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
- [Gestión de Tarjetas](?path=docs/spanish/casos-principales/gestion-tarjetas.md)
- [Integración con el Sistema Falcon](?path=docs/spanish/casos-principales/integracion-falcon.md)
- [Relación Cliente-Cuenta-Tarjeta](?path=docs/spanish/casos-principales/relacion.md)

---

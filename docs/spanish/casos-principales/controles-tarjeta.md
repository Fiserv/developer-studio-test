---
tags: [Casos Principales, Controles de Tarjeta, Tarjetas, Embozador, Bloquear, Desbloquear, Límites, Viajes, Transferir, Activar, PIN]
---

# Controles de Tarjetas

En esta sección se describen las diferentes APIs del Portal que se utilizan para tomar acciones sobre las diferentes actividades relacionadas con el uso de la tarjeta de crédito, débito, tarjeta prepago o monedero, para cualquiera de los productos Visa, MasterCard o American Express. A continuación, una descripción de las funcionalidades y características de la API.

Como requisito principal, es importante que las tarjetas de crédito, tarjetas de débito, tarjetas prepago o monederos digitales hayan sido creados en el ambiente de prueba como se detalló en este documento, utilizando las APIs para la Creación de Clientes **(Client Add)**, Creación de Cuentas **(Account Add)** y Creación de Tarjetas **(Card Add)**.

## Activar Tarjeta

La API activa una tarjeta que ya fue embozada. Esta API le permite al tarjetahabiente activar un número nuevo de tarjeta cuando la recibe por correo o la recoge en una sucursal bancaria. La fecha de activación de la tarjeta se guardará en el ambiente de prueba por motivos de auditoría.

Si el tarjetahabiente intenta utilizar la tarjeta para realizar compras o adelantos en efectivo, antes de que se active, la solicitud de autorización se rechazará con el motivo de rechazo "La tarjeta no está activada", por lo que el tarjetahabiente podrá activar su tarjeta al disparar esta API.

Esta API debe ser disparada cada vez que se emboza una tarjeta nueva (principal o adicional), para activar cada tarjeta que sea embozada.

Los valores requeridos para esta API son número de tarjeta, identificación del producto bancario (Organización) y tipo de servicio (A= Activación).

**PUT** `/cards/activation`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Límites para Compras 

Esta API le permite al cliente actualizar en línea, los diferentes límites para compras asociados a las tarjetas de crédito, tarjetas de débito, tarjetas prepago y monederos digitales. Estos límites para compras se asignan para compras en comercios, adelantos de efectivo, compras por Internet y compras internacionales. Los límites para compras asignan el número de transacciones y los montos máximos permitidos para su uso en forma diaria, semanal, quincenal y mensual. Estos límites para compras se pueden asignar tanto a la tarjeta principal como a tarjetas adicionales.

Los valores se modifican 100% en línea y se pueden ajustar tantas veces como se requiera.

Esta API solicita como información requerida el número de tarjeta, el número de transacción y los montos para cada Límite para Compras.

**PUT** `/cards/spend-limits-L8V3`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Indicador de Viaje

A través de la API, el tarjetahabiente podrá definir los destinos, fuera de su país donde utilizará la tarjeta de crédito. Esta API activa en línea las fechas y países a los que viajará el tarjetahabiente en los próximos meses.

Si la tarjeta se usa en un país o rango de fechas que no ha sido definido por esta API, la solicitud de autorización será rechazada con la respuesta: “Transacción no está permitida”.

Esta API le permite al tarjetahabiente definir el rango de fechas y países donde se usará la tarjeta, también le permite modificar y eliminar países y fechas ya definidas.

Los valores requeridos por la API son el número de tarjeta, código ISO del país, rango de fechas de inicio y fin, permitiendo hasta un máximo de cinco países a visitar con sus respectivos rangos de fechas

**PUT** `/cards/travel`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar PIN de Tarjeta

Esta API le permite al tarjetahabiente reasignar un nuevo número de identificación personal (PIN). Normalmente se usa cuando se entrega una nueva tarjeta al tarjetahabiente y es necesario configurar un nuevo PIN y vincularlo a la nueva tarjeta ya activada mediante la API Cards Activation.

La API reasigna y actualiza el nuevo PIN 100% en línea para que el tarjetahabiente pueda usar el nuevo PIN después de que se haya asignado. Esta API se puede disparar 
desde diferentes canales como cajero automático, páginas web, VCR, APP, etc. El tarjetahabiente elegirá el nuevo PIN de cuatro dígitos y, junto con el número de tarjeta de crédito y la asociación de clave (utilizada para cifrar la nueva API), la aplicación bancaria debería poder calcular el PIN Block nuevo para activar la API.

Los valores requeridos para esta API son número de tarjeta, organización bancaria, canal, PIN Block y asociación de clave.

**PUT** `/cards/pin/`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Actualizar Transferencia de Tarjeta

Esta API permite que el tarjetahabiente bloquee su número de tarjeta actual y solicite una tarjeta nueva con un número de tarjeta diferente en un solo disparador. Al igual que API de bloqueo o desbloqueo de tarjetas, el número de tarjeta se puede bloquear en caso de que el tarjetahabiente crea que la información de la tarjeta esté comprometida y, al mismo tiempo, puede solicitar un número nuevo de tarjeta, por lo que la nueva tarjeta se grabará en relieve durante el proceso por lotes y estará lista para ser entregada al día siguiente.

Como parte de los valores solicitados por la API, se requiere el número de tarjeta, número de cuenta, la organización y la fecha efectiva.

**PUT** `/cards/transfer`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Bloquear/Desbloquear PIN

El API le permite al tarjetahabiente bloquear su número PIN actual. Esto se puede usar cuando cree que la información del PIN puede verse comprometida. Esta API solo bloquea el número PIN y no el número de tarjeta, por lo que el Cliente después de disparar esta API para bloquear el PIN, aún puede usar la tarjeta para compras pero no para adelantos en efectivo.

Usando la misma API, el tarjetahabiente puede desbloquear un número PIN que ya haya sido bloqueado, simplemente disparado la API con un valor diferente en el campo Código de Función.

Otra función de esta API es permitir que el tarjetahabiente desbloquee un PIN de la tarjeta después de que haya sido bloqueado por exceso de intentos fallidos de PIN en el cajero automático.

Los valores requeridos por esta API son el número de tarjeta, el canal, la organización del banco y la función del servicio.

**PUT** `/cards/pin/status`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Bloquear/Desbloquear Tarjeta

A través de esta API, el tarjetahabiente podrá realizar bloqueos preventivos y definitivos sobre la información de su tarjeta de crédito, tarjeta de débito, tarjeta prepago y monedero. Con el fin de prevenir cualquier posible fraude cuando el tarjetahabiente sospeche que la información de la tarjeta puede estar comprometida.

De igual forma, el tarjetahabiente podrá realizar un desbloqueo preventivo de su tarjeta cuando esté seguro de que la información de su tarjeta no está comprometida.

La información requerida por la API, como el número de tarjeta, el código de bloqueo y la función, debe incluirse antes de la activación de la API.

**PUT** `/cards/embosser/block`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

## Cambiar el PIN de una Tarjeta

El cambio de PIN es una funcionalidad actual para permitir que el tarjetahabiente cambie el PIN de su tarjeta actual. El motivo para cambiar el PIN de la tarjeta puede ser porque el PIN se vió comprometido, el tarjetahabiente desea realizar el cambio o el emisor así lo requiere después de un cierto número de días.

Con esta API, el tarjetahabiente podrá cambiar su número PIN actual por otro número PIN. A diferencia de la API de actualización del PIN de la tarjeta, esta API solicitará el número de PIN actual asignado al tarjetahabiente, por lo que ambos valores deben ser agregados antes de activar la API: PIN Actual y PIN Nuevo.

Esta API se puede utilizar cuando el tarjetahabiente necesite cambiar el número PIN actual por otro número PIN en caso de que esta información se vea comprometida. 

Esta API se puede activar desde ATRM, VCR, APP, Servicio Web, etc. y está 100 % en línea.

Los valores requeridos para esta API son el número de tarjeta, el canal, el PIN Block actual, el PIN Block nuevo, la asociación de claves (para cifrar los bloqueos de PIN), el PIN Offset nuevo y la organización bancaria.

**PUT** `/cards/pin/pin-change`

La descripción de cada campo de la API se encuentra dentro de las especificaciones definidas en el portal.

---

## Ver también

- [Ambiente de API](?path=docs/spanish/casos-principales/ambiente-api.md)
- [Auditoría y Monitoreo](?path=docs/spanish/casos-principales/auditoria.md)
- [Cargar Fondos](?path=docs/spanish/casos-principales/cargas.md)
- [Emisión de Tarjetas Digitales](?path=docs/spanish/casos-principales/emision-tarjetas.md)
- [Firma HMAC](?path=docs/spanish/casos-principales/hmac.md)
- [Gestión de Clientes](?path=docs/spanish/casos-principales/gestion-clientes.md)
- [Gestión de Cuentas](?path=docs/spanish/casos-principales/gestion-cuentas.md)
- [Gestión de Tarjetas](?path=docs/spanish/casos-principales/gestion-tarjetas.md)
- [Integración con el Sistema Falcon](?path=docs/spanish/casos-principales/integracion-falcon.md)
- [Relación Cliente-Cuenta-Tarjeta](?path=docs/spanish/casos-principales/relacion.md)

---

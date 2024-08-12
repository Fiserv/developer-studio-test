---
tags: [Empezando, Terminología, Cuenta, Cliente, Tarjetas, Segmentos de Planes, First Vision, Emisor, Procesamiento de Tarjetas, Pagos]
---

# Terminología

## ¿Qué son los clientes, las cuentas y las tarjetas?

Para recuperar la información de los titulares de cuentas en el sistema de FirstVision, se requerirá un número de cliente, un número de cuenta o un número de tarjeta.

Una cuenta establecida generalmente consta de lo siguiente:

<!--
type: tab
titles: Cuenta, Cliente, Tarjetas
-->

También conocido como segmento base de cuenta.

1. Contiene información como el límite de crédito, el ciclo de facturación, el estado y los códigos de bloqueo, los controles de precios y los detalles de la domiciliación bancaria.

2. Identificado por un número de cuenta único asignado por el cliente, o generado automáticamente por el sistema.

3. Se pueden establecer y asociar múltiples Cuentas para un solo Cliente.

4. Por lo general, se genera un estado de cuenta todos los meses para una cuenta.

<!--
type: tab
-->

También se conoce como registro de nombre y dirección.

1. Contiene información demográfica del cliente sobre el cliente (propietario) y "secundario" (copropietario, cónyuge), como nombre, dirección, dirección de correo electrónico, números de teléfono, fecha de nacimiento, información de identificación e información de empleo.

2. Identificado por un número de cuenta único asignado por el cliente, o generado automáticamente por el sistema.

3. Además del cliente principal, también se pueden establecer y asociar hasta tres clientes adicionales para una sola cuenta con el fin de almacenar información sobre las partes asociadas, como un poder notarial y garantes.

4. También se puede establecer un cliente para un solo registro de segmento base de cuenta y establecer una relación entre ellos para almacenar una dirección alternativa.

<!--
type: tab
-->

También conocido como grabador en relieve o embozador.

1. Contiene información sobre la tarjeta o el plástico, como el nombre grabado en relieve en la tarjeta, la fecha de vencimiento, el tipo de material plástico utilizado para crear la tarjeta y las restricciones de autorización de la tarjeta.

2. El número de tarjeta (también conocido como PAN) es el número que está impreso en el plástico físico y está sujeto a estrictas reglas de privacidad. Como resultado, algunos clientes no almacenarán este número y podrán recuperar cualquier dato de tarjeta de FirstVision como un número enmascarado.

3. Pueden existir varias tarjetas para una cuenta. Por ejemplo, puede haber tarjetas adicionales para otros miembros de un hogar, que se encuentran bajo una sola cuenta. Estas tarjetas adicionales se pueden vincular a su propio cliente, cuando esta información sea necesaria.

<!-- type: tab-end -->

![image](https://user-images.githubusercontent.com/111396588/223825911-aba5e5da-3fe3-48c6-8e51-0a9085cdd041.png)

Además, una cuenta tendrá varios **Segmentos del Plan**:

- Los segmentos del plan no se crean como parte del proceso de configuración de una cuenta nueva. El sistema los genera automáticamente cuando las transacciones de venta se postean en una cuenta.

- Cada plan tiene un cierto 'tipo'; por ejemplo, compras en comercios, adelantos de efectivo o transferencia de saldos. El plan contiene información monetaria y otros detalles sobre las transacciones contenidas en el plan, incluyendo la tasa de interés, cambios manuales y opciones de deferido, saldo de planes y componentes facturados no pagados.

- Cada segmento del plan asignado a una cuenta se identifica de manera única mediante una combinación de un número de 5 dígitos y un número de registro.

![image](https://user-images.githubusercontent.com/111396588/223825942-c86f84ef-1565-4664-8230-f731e74c6512.png)

---

## Ver también

- [Empezando](?path=docs/spanish/empezando.md)
- [Estructura](?path=docs/spanish/empezando/estructura.md)
- [Lista Servicios](?path=docs/spanish/empezando/lista-servicios.md)
- [Postman](?path=docs/spanish/empezando/postman.md)

---

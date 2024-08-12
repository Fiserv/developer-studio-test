---
tags: [Casos Principales, Relación Cliente-Cuenta-Tarjeta, Cliente, Cuenta, Tarjeta ]
---

# Relación Cliente-Cuenta-Tarjeta

![image](https://user-images.githubusercontent.com/111396588/223833940-818911c3-1024-4a09-9650-1e4796fc3d54.png)

Como parte de la funcionalidad de First Vision, se requieren tres pasos durante el proceso de creación de un nuevo cliente que tendrá una tarjeta de crédito, tarjeta de débito, tarjeta prepaga o monedero digital. Estos tres pasos le permiten al banco agregar la información demográfica del Cliente, definir los valores de la cuenta y finalmente generar el embozado de la tarjeta nueva.

Cada uno de estos pasos depende del otro. Esto significa que una tarjeta no se puede embozar si no hay información del Cliente o información de la Cuenta.

Una vez ingresada esta información a través de las diferentes APIs, es posible definir si este nuevo Cliente será un tarjetahabiente individual o un Cliente corporativo definido bajo una relación.

A continuación, se describen las funcionalidades de cada uno de estos tres pasos actualmente definidos en el portal:

<!-- type: row -->

<!-- type: card
title: Gestión de Clientes
description: Permite la gestión de la información demográfica del tarjetahabiente como nombre, dirección, números de teléfono, etc.
-->

<!-- type: card
title:  Gestión de Cuentas
description: Permite la gestión de una cuenta que contiene información financiera del Crédito disponible/utilizado.
-->

<!-- type: card
title: Gestión de Tarjetas
description: Permite la gestión del instrumento de pago que se utiliza para realizar transacciones financieras, como tarjetas físicas, tarjetas virtuales, monederos digitales.
-->

<!-- type: row-end -->

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
- [Gestión de Tarjetas](?path=docs/spanish/casos-principales/gestion-tarjetas.md)
- [Integración con el Sistema Falcon](?path=docs/spanish/casos-principales/integracion-falcon.md)

---

---
tags: [Casos Principales, Falcon, Fraude, Detección, Prevención, Gestión]
---

# Integración con el Sistema Falcon

Falcon es una aplicación de detección, prevención y gestión de fraudes. Falcon examina todas las transacciones entrantes y determina la probabilidad de que la transacción sea fraudulenta. Falcon tiene su propia red neuronal que evalúa las transacciones que llegan a Falcon. Con base en varios factores, Falcon le asigna una calificación a cada transacción, que indica la probabilidad de una transacción sea fraudulenta.

Falcon les asigna una puntuación de cero a 999 a cada una de las transacciones que recibe en tiempo real. Luego, cada transacción atraviesa un conjunto de reglas establecidas según las distintas necesidades de negocio para identificar el fraude. Al final, Falcon enviará el mensaje de respuesta al sistema de host de autorización como, por ejemplo, indicando que se debe rechazar la autorización y bloquear la tarjeta. Al activar el parámetro en First Vision, es posible realizar una integración con Falcon, por lo que las transacciones de autorización procesadas por FirstVision se enrutarán a Falcon para establecer un control de fraude.

![image](https://user-images.githubusercontent.com/111396588/208846621-4b1bd3c3-0355-48ff-a23a-0d6f313ec3d0.png)

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
- [Relación Cliente-Cuenta-Tarjeta](?path=docs/spanish/casos-principales/relacion.md)

---

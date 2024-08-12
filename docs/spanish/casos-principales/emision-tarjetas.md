---
tags: [Casos Principales, Emisión de Tarjetas Digitales, Cliente, Cuenta, Tarjetas, Embozador]
---

# Emisión de Tarjetas Digitales

## Definición

La siguiente sección tiene como objetivo definir la emisión de una tarjeta digital en la plataforma FirstVision.

Una tarjeta digital se comportará como un monedero financiado por el límite de crédito de la cuenta y los clientes pueden realizar compras de comercio electrónico (solo con el comercio de marca compartida) usando el monedero digital en lugar de usar una tarjeta física. Una sola Cuenta de FirstVision puede tener una tarjeta de crédito física y una tarjeta digital como embozadores independientes. Durante la apertura de las cuentas, se puede definir si van tener solo una tarjeta física o solo una tarjeta digital o ambas.

## Propósito

El propósito de este caso de usuario es emitir una tarjeta digital nueva a un cliente en la plataforma FirstVision.

## Casos de Uso

El siguiente caso de usuario determina las acciones requeridas para emitir una tarjeta digital nueva.

![image](https://user-images.githubusercontent.com/111396588/208847157-3b0caa4b-f73d-469a-8cb6-7461af6317a3.png)

## Diagrama de Secuencia

![image](https://user-images.githubusercontent.com/111396588/208847202-038f4634-9a8b-4de2-8446-028b386e1211.png)

Para emitir una tarjeta digital nueva a un cliente, debemos seguir estos pasos:

### 1. Customer Add

Esta solicitud incluye datos personales del cliente, información demográfica y otra información relativa a la entidad. La respuesta a esta solicitud traerá el Número de Cliente creado.

**POST** `/customer/l8v2`
      
### 2. Account Add

Con el Número de Cliente creado en la solicitud anterior, esta solicitud propagará la información del límite de crédito de la Cuenta, la fecha del ciclo de pago, el nombre corto y más información inherente a la entidad.

**POST** `/account/add-L8V3`
          
### 3. Embosser Add

Esta solicitud se encarga de agregar la información a la tarjeta digital emitida. Esta solicitud requiere tanto el Código de Cliente como el Código de Cuenta.

**POST** `/cards/embosser/l8vf`
          
### 4. Card Activation

Después de las solicitudes del cliente, la cuenta y el embozador, se aplican las nuevas configuraciones de tarjeta para el cliente, pero no están activas para su uso. Esta solicitud activará la tarjeta y la dejará lista para usar.

**PUT** `/cards/activation`
          
---

## Ver también

- [Ambiente de API](?path=docs/spanish/casos-principales/ambiente-api.md)
- [Auditoría y Monitoreo](?path=docs/spanish/casos-principales/auditoria.md)
- [Cargar Fondos](?path=docs/spanish/casos-principales/cargas.md)
- [Controles de Tarjetas](?path=docs/spanish/casos-principales/controles-tarjeta.md)
- [Firma HMAC](?path=docs/spanish/casos-principales/hmac.md)
- [Gestión de Clientes](?path=docs/spanish/casos-principales/gestion-clientes.md)
- [Gestión de Cuentas](?path=docs/spanish/casos-principales/gestion-cuentas.md)
- [Gestión de Tarjetas](?path=docs/spanish/casos-principales/gestion-tarjetas.md)
- [Integración con el Sistema Falcon](?path=docs/spanish/casos-principales/integracion-falcon.md)
- [Relación Cliente-Cuenta-Tarjeta](?path=docs/spanish/casos-principales/relacion.md)

---

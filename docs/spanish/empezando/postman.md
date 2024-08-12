---
tags: [Empezando, Postman, Tutorial]
---

# Tutorial para Pruebas de Postman

Esta sección tiene como objetivo demostrar la configuración inicial que se debe aplicar a la colección de Postman, antes de realizar solicitudes a las API de Fiserv disponibles.

Si no ha utilizado la herramienta Postman como cliente HTTP para probar solicitudes, acceda al enlace oficial de la herramienta para obtener más información: 
 [Postman Official](https://www.postman.com/)
 
La colección Postman se compartirá temporalmente con cada cliente de acuerdo con sus necesidades.

## Importar Colección

### 1. Abra Postman y haga clic en el botón de importación para abrir la colección provista

![image](https://user-images.githubusercontent.com/111396588/223823808-2d79de52-0b42-4500-b6ee-31bf49c818ad.png)

### 2. Después de importar la colección, verá que la siguiente contiene las solicitudes divididas por carpetas según cada entidad y también las solicitudes iniciales, por ejemplo, "Get Access Token"

![image](https://user-images.githubusercontent.com/111396588/223823863-c76ef596-2ab8-473a-b801-9cd0980edea7.png)

## Crear el ambiente

### 3. En este paso configuraremos el ambiente necesario para ejecutar solicitudes en Postman de forma dinámica, ya que las solicitudes ya vienen configuradas con variables de ambiente las cuales configuraremos a continuación. Haga clic en el botón de ambientes y siga los siguientes pasos

![image](https://user-images.githubusercontent.com/111396588/223825081-8f5e489e-04b0-4450-9e2e-a2a0adffa375.png)

### 4. Haga clic en el botón nuevamente en la sección de Ambiente para crear un ambiente para ejecutar solicitudes

![image](https://user-images.githubusercontent.com/111396588/223825110-985fce44-fbfd-4713-83f9-ddd85954b08a.png)

### 5. Haga clic en el ambiente y luego defina el nombre de este ambiente

![image](https://user-images.githubusercontent.com/111396588/223825130-b65824be-7525-4df5-80e5-bc9934e4dcd6.png)

## Configurar el ambiente

### 6. Ahora deberá crear las variables como el siguiente ejemplo con las credenciales enviadas. En este paso puede definir cuáles variables se utilizarán durante el uso de la colección, como punto final, puerto y otros

![image](https://user-images.githubusercontent.com/111396588/223825150-eae49a0b-c45c-46d5-a365-982e08e69922.png)

### 7.  En la esquina superior derecha, seleccione el ambiente creado para aplicar la configuración de las variables de ambiente creadas en el paso anterior

![image](https://user-images.githubusercontent.com/111396588/223825174-82bca4fb-bcd5-4b6e-b2ba-f93651088a00.png)

### 8. Si ha seguido los pasos correctamente hasta el momento, el ambiente está listo para enviar solicitudes a las API. Haga clic en Obtener Token de Acceso a la API para iniciar las pruebas para la API

![image](https://user-images.githubusercontent.com/111396588/223825212-38ced20b-4446-4b54-b3d5-2b1b1f291ec4.png)

## Ejecutar Primera Solicitud

### 9. Haga clic en el botón de Enviar

![image](https://user-images.githubusercontent.com/111396588/223825243-f72d7a6c-89bf-4281-b055-6ff96b718ba6.png)

### 10. Notará que tiene un "access_token" que se configura automáticamente en la variable de ambiente "token" y tiene una fecha de expiración. Cuando el token expire, deberá repetir el paso anterior

![image](https://user-images.githubusercontent.com/111396588/223825263-3f1a2342-9731-417d-9de5-a7ba28628b1d.png)

¡Ya está listo para comenzar a probar nuestras APIs!

---

## Ver también

- [Empezando](?path=docs/spanish/empezando.md)
- [Estructura](?path=docs/spanish/empezando/estructura.md)
- [Lista Servicios](?path=docs/spanish/empezando/lista-servicios.md)
- [Terminología](?path=docs/spanish/empezando/terminologia.md)

---

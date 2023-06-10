# Overview
La aplicación API Rest es para activar los eventos de envíos de emails.
### Uso
Todas las consultas se deben hacer con el siguiente header authorization:
```
'Authorization': 'Bearer ' + (TOKEN BRINDADO POR INTERNO)
```


### Envío Exitoso
La respuesta satisfactoria de todos los endpoints el key status será "successful". Ejemplo:
```json
{
    "status": "successful",
    "message": "The email was sent"
}
```


### Errores
En el caso de que exista algún error se enviará un JSON el key status será "failed" (Tener en cuenta que el valor de message puede variar). Ejemplo:
```json
{
    "status": "failed",
    "message": "The email is not valid"
}
```
# Endpoints
### Email Bienvenida Endpoint
Method **POST**
Headers **Content-Type: application/json**
```
https://www.enerjet.com.pe/mail/api/gardi/bienvenida
```
Enviar JSON con los siguientes parámetros, ejemplo:
```json
{
    "name": "Christian",
    "email": "christianchangh@gmail.com",
    "qr_code": "3NI87K",
    "country": "PE"
}
```
#

### Email Mantenimiento Endpoint
Method **POST**
Headers **Content-Type: application/json**
```
https://www.enerjet.com.pe/mail/api/gardi/mantenimiento
```
Enviar JSON con los siguientes parámetros, ejemplo:
```json
{
    "name": "Christian",
    "email": "christianchangh@gmail.com",
    "qr_code": "3J19ZX",
    "service_name": "Enerjet Service 01",
    "service_address": "Av. Arequipa 1111, Lima",
    "maintenance_date": "12/04/2022",
    "country": "PE"
}
```

#

### Email Recordatorio Endpoint
Method **POST**
Headers **Content-Type: application/json**
```
https://www.enerjet.com.pe/mail/api/gardi/recordatorio
```
Enviar JSON con los siguientes parámetros, ejemplo:
```json
{
    "name": "Christian",
    "email": "christianchangh@gmail.com",
    "qr_code": "3J19ZX",
    "service_name": "Enerjet Service 01",
    "service_address": "Av. Arequipa 1111, Lima",
    "maintenance_date": "12/04/2022",
    "guarantee": "9"
}
```
#

### Email Pérdida de Garantía Endpoint
Method **POST**
Headers **Content-Type: application/json**
```
https://www.enerjet.com.pe/mail/api/gardi/perdida-garantia
```
Enviar JSON con los siguientes parámetros, ejemplo:
```json
{
    "name": "Christian",
    "email": "christianchangh@gmail.com",
    "qr_code": "3J19ZX"
}
```

#

### Email Renovación Endpoint
Method **POST**
Headers **Content-Type: application/json**
```
https://www.enerjet.com.pe/mail/api/gardi/renovacion
```
Enviar JSON con los siguientes parámetros, ejemplo:
```json
{
    "name": "Christian",
    "email": "christianchangh@gmail.com",
    "qr_code": "3J19ZX",
    "service_name": "Enerjet Service 01",
    "service_address": "Av. Arequipa 1111, Lima",
    "purchase_date": "22/01/2022"
}
```

#

### Email Completa Activación Endpoint
Method **POST**
Headers **Content-Type: application/json**
```
https://www.enerjet.com.pe/mail/api/gardi/completa-activacion
```
Enviar JSON con los siguientes parámetros, ejemplo:
```json
{
    "name": "Christian",
    "email": "christianchangh@gmail.com",
}
```

That's it... ¡Happy coding!
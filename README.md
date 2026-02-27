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

#

### Email Custom (Website) Endpoint
Method **POST**
Headers **Content-Type: application/json**
```
https://www.enerjet.com.pe/mail/api/website/custom
```
Enviar JSON con los siguientes parámetros, ejemplo sin adjuntos:
```json
{
    "email": "destinatario@ejemplo.com",
    "subject": "Asunto del correo",
    "template": "<html><body><h1>Hola</h1></body></html>"
}
```

Ejemplo con adjuntos en Base64 (máximo **6MB** en total):
```json
{
    "email": "destinatario@ejemplo.com",
    "subject": "Correo con adjunto",
    "template": "<html><body><h1>Revisa el adjunto</h1></body></html>",
    "ccRecipients": "copia1@ejemplo.com, copia2@ejemplo.com",
    "attachments": [
        {
            "name": "documento.pdf",
            "contentType": "application/pdf",
            "contentBytes": "JVBERi0xLjQK... (contenido en Base64)"
        }
    ]
}
```

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `email` | string | ✅ | Email del destinatario |
| `subject` | string | ✅ | Asunto del correo |
| `template` | string | ✅ | Cuerpo del email en HTML |
| `ccRecipients` | string | ❌ | Emails en copia separados por coma |
| `attachments` | array | ❌ | Archivos adjuntos en Base64 |
| `attachments[].name` | string | ✅* | Nombre del archivo (ej: "doc.pdf") |
| `attachments[].contentType` | string | ✅* | MIME type (ej: "application/pdf") |
| `attachments[].contentBytes` | string | ✅* | Contenido del archivo en Base64 |

> *Requerido si se envía `attachments`

That's it... ¡Happy coding!
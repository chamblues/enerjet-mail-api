# Overview
La aplicación API Rest es para activar los eventos de envíos de emails.
## Uso
### Email Bienvenida Endpoint
Method **POST**
```
https://enerjet.com.pe/mail/api/gardi/bienvenida
```

Enviar JSON con los siguientes parámetros, ejemplo:
```json
{
    "name": "Christian",
    "email": "christianchangh@gmail.com"
}
```
La respuesta satisfactoria del endpoint es de la siguiente forma:
```json
{
    "status": "successful",
    "message": "The email was sent"
}
```


## Errores
En el caso de que exista algún error se enviará un JSON de la siguiente forma (Tener en cuenta que el valor de message puede variar):
```json
{
    "status": "failed",
    "message": "The email is not valid"
}
```

Continuará...
*(Por el momento se esta trabajando en un ambiente de email de pruebas con **mailtrap**, sin embargo, las respuestas del endpoint son las que se usarán a lo largo del proceso).*
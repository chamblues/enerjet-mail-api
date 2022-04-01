# Overview
La aplicación API Rest es para activar los eventos de envíos de emails.
## Uso
#### Email Bienvenida Endpoint
Enviar JSON con los siguientes parámetros:
```json
{
    "name": "Christian",
    "email": "christianchangh@gmail.com"
}
```
El retorno a la consulta es un JSON de la siguiente forma:
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

# Aplicación Nodejs para Haibu

# auto: jorge painequeo

### Introducción:

La actual aplicación está desarrollada con entorno de desarrollo nodejs y docker. todo el código se encuentra en github: https://github.com/kokesolik/proyecto_haibu_nodejs.git

### inicio:

Paso 1: Lo primero es descargar el proyecto con git
Paso 2: Posicionarse en la carpeta descargada y crear la imagen del contenedor con: "docker build . -t nodejs"
Paso 3: Ahora levantar un contenedor en base a la imagen: "docker run --name Haibu-js -it -p 8000:80 nodejs"
Paso 4: entrar a : http://localhost:8000/ y revisar el sistema.

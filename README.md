# Migración de los servicios a contenedores

## contenedor con el servicio Api-rest

Para la implementación de nuestro servicio de API-REST, implementado en Node JS en un contenedor de Docker se realizan las siguientes operaciones:

En nuestro proyecto creamos un nuevo archivo llamado Dockerfile, para implementar el servicio de api-rest, dentro de un contenedor, este archivo tiene el siguiente contenido.
En el mismo se explica lo que se ejecuta cada línea. 

![DockerFile](imagenes/docker/dockerFile.png)

 Para que no se copien la carpeta node_modules se crea un archivo adicional dentro del proyecto que lleva como nombre. dockerignore en este archivo se especifican los archivos que no se desean copiar en el contenedor el cual tiene el siguiente contenido:

 ![DockerFile](imagenes/docker/dockerignore.png)

 Una vez construido el archivo Dockerfile, se procede a construir la imagen, para la ejecución del proyecto. cómo se especificó en el archivo se descargará de Dockerhub la imagen mas reciente con Node JS. Lo anterior se lleva a cabo con el comando.

~~~
sudo docker build -t node-restapi .
~~~

Se ejecuta el comando con permisos de root, se especifica docker build, para construir la imagen especificamos. La opción menos -t, es para darle un nombre a la imagen en este caso la llamaremos node-restapi. Finalmente se pasa como argumento un . que significa que el archivo Dockerfile se encuentra en el directorio actual. A continuación, se anexa el resultado de este comando en consola.

 ![DockerFile](imagenes/docker/dockerBuild.png)

 Una vez creada la imagen y ejecutados los comandos en el Dockerfile con el comando:

~~~
sudo docker images
~~~

Que despliega las images que se han creado 

![DockerFile](imagenes/docker/dockerImages.png)

Una vez creada la imagen se ejecuta el siguiente comando para la creación del contenedor con la imagen creada

~~~
Sudo docker run -it -p 8082:8082 node-restapi 
~~~


Ejecutamos el comando con permiso de administrador con sudo. Con docker run corremos el contenedor, con la opción -it especificamos que la salida de la consola del contenedor se imprima en consola actual. Con la opción -p hacemos un mapeo de puertos entre la maquina anfitrión y el contenedor, por lo tanto, se especifica, que la maquina anfitrión escucha por el puerto 8082 y el contenedor también, pero se puede realizar un mapeo de puertos diferentes, por ejemplo:

La máquina anfitriona escuche las peticiones por el puerto 80, pero el contenedor escucha por el puerto 8082. A continuación, se muestra el resultado del comando en consola que crea el contenedor y ejecuta el servicio.

![DockerFile](imagenes/docker/dockerRun.png)

A continuación, se ejecuta una petición por medio de postman al endpoint movies, que devuelve todas las películas en la base de datos, esto se realiza a través de una petición get al endpoint anteriormente mencionado, por medio de la url 192.168.0.201:8082/movies.

![DockerFile](imagenes/docker/dockerCorriendo.png)

## contenedor con el servicio de Front-end

Para este contenedor se proceden con los mismos pasos utilizados en el back-end 

Se crea el Dockerfile

![DockerFile](imagenes/docker/dockerfileFrontend.png)

Se ejecuta el comando 

~~~
sudo docker build -t interfaz .
~~~

![DockerFile](imagenes/docker/dockerBuildFrontend.png)


Se evidencia la creación de la imagen

![DockerFile](imagenes/docker/dockerImagesFrontend.png)


Se ejecuta el comando 

~~~
sudo docker run -it -p 8080:8080 interfaz
~~~

![DockerFile](imagenes/docker/dockerCorriendoFrontend.png)

A continuación, se evidencia el funcionamiento del front-end en el contenedor de docker desplegado se especifica que la URL para ingresar al contenedor es la siguiente con la configuración asignada 

* http://192.168.0.201:8080/#/methods/get

![DockerFile](imagenes/docker/dockerCorriendoFrontend2.png)


## contenedor con el servicio de Dashboard

A continuación, solo se relacionan las imágenes de los comandos ejecutados para el despliegue del Dashboard dado para el despliegue de esta herramienta utilizamos una aplicación de Vuetify para comprobar que los servicios se encuentran funcionando.


![DockerFile](imagenes/docker/dockerBuildDashboard.png)

![DockerFile](imagenes/docker/dockerImagesDashboard.png)

![DockerFile](imagenes/docker/dockerCorriendoDashboard.png)

# Docker Compose

Para la orquestación de los contenedores del Front-end y del Back-end se utiliza la herramienta docker-compose. Esta herramienta utiliza un archivo docker-compose.yml que a continuación se explica su estructura.

![DockerFile](imagenes/docker/docker-compose1.png)

En este primer fragmento se explica cada línea que se implementa en el archivo docker-compose.yml con el despliegue del contenedor con el back-end.

![DockerFile](imagenes/docker/docker-compose2.png)

Fragmento del archivo docker-compose.yml con el despliegue del front-end.

![DockerFile](imagenes/docker/docker-compose3.png)

Fragmento del archivo docker-compose.yml con el despliegue del Dashboard



El paso para seguir es ejecutar el comando que despliega la configuración realizada en el archivo docker-compose.yml que es el siguiente.

~~~
sudo docker-compose up
~~~

![DockerFile](imagenes/docker/docker-composeUp.png)

A continuación, se evidencia todos los servicios funcionando con el siguiente comando 


~~~
sudo docker-compose ps
~~~

![DockerFile](imagenes/docker/docker-composePs.png)










    
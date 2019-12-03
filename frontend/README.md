# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

### Create project

~~~
vue create frontend
~~~

### Vuetify

~~~
vue add vuetify
~~~

### Material Design Icon

~~~
npm install @mdi/font -D
~~~

~~~
npm install material-design-icons-iconfont --save
~~~

---

### Configuration - Documentation

**vuetify.js:**

La ruta del archivo es src **>** plugins **>** vuetify.js.

Editamos el contenido del archivo por lo siguiente:

~~~
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md'
  }
})
~~~

Básicamente aquí se le dice al vuetify que utilice los icons de material design.

**Router:**

En la carpeta src creamos el archivo router.js con el siguiente contenido:

~~~
import Router from 'vue-router'
import Methods from './components/Methods.vue'
import OptGet from './components/OptGet.vue'
import OptGetId from './components/OptGetId.vue'
import OptPost from './components/OptPost.vue'
import OptPatch from './components/OptPatch.vue'
import OptDelete from './components/OptDelete.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default new Router({
  routes: [
    {
      path: '/methods',
      name: 'methods',
      redirect: '/methods/get',
      component: Methods,
      children: [
        {
          path: 'get',
          name: 'get',
          component: OptGet
        },
        {
          path: 'getid',
          name: 'getid',
          component: OptGetId
        },
        {
          path: 'post',
          name: 'post',
          component: OptPost
        },
        {
          path: 'patch',
          name: 'patch',
          component: OptPatch
        },
        {
          path: 'delete',
          name: 'delete',
          component: OptDelete
        }
      ]
    }
  ]
})
~~~

Debemos guardar la dependencia vue-router con el siguiente comando:

~~~
npm install --save vue-router
~~~

**App.vue:**

El archivo se encuentra en la carpeta src. Cambiamos el contenido que viene por defecto en el archivo, por lo siguiente:

~~~
<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  //
};
</script>
~~~

**main.js:**

El archivo se encuentra en la carpeta src.

~~~
import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
~~~

---

### Aplicación Web

En src **>** components creamos todos los componentes necesarios para el funcionamiento de nuestra aplicación web.

La aplicación consta de un menú (Menu.vue) con 5 botones (Opt*.vue), y cada botón tiene una vista correspondiente a un método HTTP.

El archivo Methods tendrá el menú y la vista correspondiente a cada botón.

Esta aplicación tiene como fin consumir la API construida en la carpeta backend.

---

### Peticiones http

~~~
npm install --save axios
~~~

---

### Para arreglar el error de CORS

https://github.com/oberonamsterdam/jsonapi-mock/issues/6

Lo que toca hacer es agregar cuatro líneas de código en el backend para editar el header y que no salgan algún error de CORS. Esas líneas de código se muestran en el README.md del backend.

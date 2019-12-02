# sd-m3-frontend

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
vue create sd-m3-frontend
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

Editar el contenido del archivo por lo siguiente:

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

En la carpeta src crear el archivo router.js con el siguiente contenido:

~~~
~~~

~~~
npm install --save vue-router
~~~

**App.vue:**

El archivo se encuentra en la carpeta src. Cambiamos el contenido que viene por defecto en el archivo, por lo siguiente:

~~~
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

**Peticiones http:**

~~~
npm install --save axios
~~~

---
**Para arreglar el error de CORS**
https://github.com/oberonamsterdam/jsonapi-mock/issues/6

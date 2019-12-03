<template>
  <v-app>
    <v-content>
      <Monitor></Monitor>
    </v-content>
  </v-app>
</template>

<script>
import Monitor from './components/Monitor';
export default {
  name: 'App',
  components: {
    Monitor
  },
  data: () => ({
    //
  }),
};
</script>

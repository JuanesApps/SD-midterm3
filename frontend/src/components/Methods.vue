<template>
  <v-row>
    <v-col cols="3">
      <Menu></Menu>
    </v-col>
    <v-col cols="9">
      <router-view></router-view>
    </v-col>
  </v-row>
</template>

<script>
import Menu from "./Menu";
export default {
  name: "Methods",
  components: { Menu },
  data: () => ({})
};
</script>

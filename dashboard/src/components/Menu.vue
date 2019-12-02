<template>
  <v-navigation-drawer permanent>
    <v-list nav dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in menulist" :key="i" @click="changeview(item)">
          <v-list-item-content>
            <v-list-item-title class="mx-12" v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menulist: [
        { text: "GET", icon: "inbox" },
        { text: "GET-ID", icon: "supervised_user_circle" },
        { text: "POST", icon: "history" },
        { text: "PATCH", icon: "history" },
        { text: "DELETE", icon: "add_circle" }
      ]
    };
  },
  methods: {
    changeview(item) {
      if (item.text == "GET") {
        this.$router.push("/methods/get");
      }
      if (item.text == "GET-ID") {
        this.$router.push("/methods/getid");
      }
      if (item.text == "POST") {
        this.$router.push("/methods/post");
      }
      if (item.text == "PATCH") {
        this.$router.push("/methods/patch");
      }
      if (item.text == "DELETE") {
        this.$router.push("/methods/delete");
      }
    }
  }
};
</script>

<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex>
        <div>
          <v-card class="px-5 py-5 my-5">
            <v-card-title>Monitor</v-card-title>
            <v-data-table :headers="headers" :items="table" hide-default-footer class="elevation-1">
            </v-data-table>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Monitor",
  data: () => ({
    backendurl: "http://localhost:8082/movies/",
    frontendurl: "http://localhost:8083/#/methods/get/",
    backendstatus: "down",
    frontendstatus: "down",
    table: [{ status: "Status", backstatus: "up", frontstatus: "down" }],
    headers: [
      { text: "", value: "status" },
      { text: "Backend", value: "backstatus" },
      { text: "Frontend", value: "frontstatus" }
    ]
  }),
  methods: {
    async checkstatus() {
      this.table = [];
      await axios
        .get(this.backendurl)
        .then(response => {
          // eslint-disable-next-line no-console
          console.log("BACK " + response.status);
          this.backendstatus = "up";
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log("El error que arroja la petición al back es = " + err);
          this.backendstatus = "down";
        });
      await axios
        .get(this.frontendurl)
        .then(response => {
          // eslint-disable-next-line no-console
          console.log("FRONT " + response.status);
          this.frontendstatus = "up";
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err.response);
          if (!err.response) {
            // Error: Network Error
            this.frontendstatus = "down";
          } else {
            this.frontendstatus = "up";
          }
        });
      if (this.table.length > 0) {
        this.table;
      } else if (this.table.length == 0) {
        this.table.push({
          status: "Status",
          backstatus: this.backendstatus,
          frontstatus: this.backendstatus
        });
        // eslint-disable-next-line no-console
        console.log(this.table);
      }
    }
  },
  mounted() {
    this.checkstatus();
  }
};
</script>

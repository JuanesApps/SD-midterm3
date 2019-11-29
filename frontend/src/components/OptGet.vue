<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex>
        <div>
          <v-card class="px-5 py-5">
            <v-text-field
              label="Endpoint"
              hint="http://localhost:8082/movies/"
              persistent-hint
              type="text"
              outlined
              v-model="endpoint"
            ></v-text-field>
            <v-card-actions>
              <v-btn block @click="submit">Send</v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div>
          <v-card class="px-5 py-5 my-5">
            <v-data-table
              :headers="headers"
              :items="movies"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "OptGet",
  data: () => ({
    endpoint: "http://localhost:8082/movies/",
    movies: [],
    headers: [
      { text: "ID", value: "_id" },
      { text: "Title", value: "title" },
      { text: "Release", value: "release" },
      { text: "Score", value: "score" },
      { text: "Reviewer", value: "reviewer" },
      { text: "Publication", value: "publication" }
    ]
  }),
  methods: {
    submit() {
      this.movies = [];
      if (this.endpoint != "") {
        axios
          .get(this.endpoint)
          .then(response => {
            // eslint-disable-next-line no-console
            console.log(response);
            this.movies = response.data.movies;
          })
          .catch(e => {
            e;
          });
      }
    }
  }
};
</script>

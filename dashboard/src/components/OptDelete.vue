<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex>
        <div>
          <v-card class="px-5 py-5">
            <v-text-field
              prepend-icon="person"
              label="Endpoint"
              type="text"
              outlined
              v-model="endpoint"
            ></v-text-field>
            <v-text-field
              prepend-icon="person"
              label="movieID"
              type="text"
              outlined
              v-model="movieid"
            ></v-text-field>
            <v-card-actions>
              <v-btn block @click="submit">Send</v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div v-for="(movie, index) in movies" :key="index">
          <v-card class="px-5 py-5 my-5">{{movie}}</v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "OptDelete",
  data: () => ({
    endpoint: "http://localhost:8082/movies/",
    movieid: "",
    movies: []
  }),
  methods: {
    submit() {
      this.movies = [];
      if ((this.endpoint != "") & (this.movieid != "")) {
        axios
          .delete(this.endpoint + this.movieid)
          .then(response => {
            // eslint-disable-next-line no-console
            console.log(response);
            response.status;
          })
          .catch(e => {
            e;
          });
      }
    }
  }
};
</script>

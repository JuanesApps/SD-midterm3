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
            <v-text-field
              label="movieID"
              hint="5ddf580801116a2048c35a8e"
              persistent-hint
              type="text"
              outlined
              v-model="movieid"
            ></v-text-field>
            <v-card-actions>
              <v-btn block @click="submit">GET</v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div>
          <v-card class="px-5 py-5 my-5">
            <v-text-field
              label="Title"
              hint="Doctor Strange"
              persistent-hint
              type="text"
              outlined
              v-model="title"
            ></v-text-field>
            <v-text-field
              label="Release"
              hint="2016"
              persistent-hint
              type="number"
              outlined
              v-model="release"
            ></v-text-field>
            <v-text-field
              label="Score"
              hint="7"
              persistent-hint
              type="number"
              outlined
              v-model="score"
            ></v-text-field>
            <v-text-field
              label="Reviewer"
              hint="Anthony Miller"
              persistent-hint
              type="text"
              outlined
              v-model="reviewer"
            ></v-text-field>
            <v-text-field
              label="Publication"
              hint="ComicBookHero.com"
              persistent-hint
              type="text"
              outlined
              v-model="publication"
            ></v-text-field>
            <v-card-actions>
              <v-btn block @click="changeValues">PATCH</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "OptPatch",
  data: () => ({
    endpoint: "http://localhost:8082/movies/",
    movieid: "",
    movie: [],
    title: "",
    release: 0,
    score: 0,
    reviewer: "",
    publication: ""
  }),
  methods: {
    submit() {
      this.movies = [];
      if ((this.endpoint != "") & (this.movieid != "")) {
        axios
          .get(this.endpoint + this.movieid)
          .then(response => {
            this.movie.push(response.data.movie);
            // eslint-disable-next-line no-console
            console.log(this.movie);
            this.title = response.data.movie.title;
            this.release = response.data.movie.release;
            this.score = response.data.movie.score;
            this.reviewer = response.data.movie.reviewer;
            this.publication = response.data.movie.publication;
          })
          .catch(e => {
            e;
          });
      }
    },
    changeValues() {
      if (
        (this.title != "") &
        (this.release >= 0) &
        (this.score >= 0) &
        (this.reviewer != "") &
        (this.publication != "") &
        ((this.title != this.movie.title) |
          (this.release != this.movie.release) |
          (this.score != this.movie.score) |
          (this.reviewer != this.movie.reviewer) |
          (this.publication != this.movie.publication))
      ) {
        axios
          .patch(this.endpoint + this.movieid, [
            { propName: "title", value: this.title },
            { propName: "release", value: this.release },
            { propName: "score", value: this.score },
            { propName: "reviewer", value: this.reviewer },
            { propName: "publication", value: this.publication }
          ])
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

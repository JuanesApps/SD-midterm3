<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex>
        <div>
          <v-card class="px-5 py-5">
            <v-text-field
              prepend-icon="person"
              label="Endpoint"
              hint="http://localhost:8082/movies/"
              persistent-hint
              type="text"
              outlined
              v-model="endpoint"
            ></v-text-field>
          </v-card>
        </div>
        <div>
          <v-card class="px-5 py-5 my-5">
            <v-text-field
              prepend-icon="person"
              label="Title"
              hint="Doctor Strange"
              persistent-hint
              type="text"
              outlined
              v-model="title"
            ></v-text-field>
            <v-text-field
              prepend-icon="person"
              label="Release"
              hint="2016"
              persistent-hint
              type="number"
              outlined
              v-model="release"
            ></v-text-field>
            <v-text-field
              prepend-icon="person"
              label="Score"
              hint="7"
              persistent-hint
              type="number"
              outlined
              v-model="score"
            ></v-text-field>
            <v-text-field
              prepend-icon="person"
              label="Reviewer"
              hint="Anthony Miller"
              persistent-hint
              type="text"
              outlined
              v-model="reviewer"
            ></v-text-field>
            <v-text-field
              prepend-icon="person"
              label="Publication"
              hint="ComicBookHero.com"
              persistent-hint
              type="text"
              outlined
              v-model="publication"
            ></v-text-field>
            <v-card-actions>
              <v-btn block @click="submit">Send</v-btn>
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
  name: "OptPost",
  data: () => ({
    endpoint: "http://localhost:8082/movies/",
    title: "",
    release: 0,
    score: 0,
    reviewer: "",
    publication: ""
  }),
  methods: {
    submit() {
      if (this.endpoint != "") {
        axios
          .post(this.endpoint, {
            title: this.title,
            release: this.release,
            score: this.score,
            reviewer: this.reviewer,
            publication: this.publication
          })
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

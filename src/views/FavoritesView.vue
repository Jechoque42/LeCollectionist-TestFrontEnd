<script setup lang="ts">
import MovieCardGroup from "@/components/layout/MovieCardGroup.vue";
import BaseCard from "@/components/base/BaseCard.vue";

import { storeToRefs } from "pinia";
import { useMoviesStore } from "@/stores/movies";

// Access the movies store and retrieve favorite movies
const { allFavoritesMovies } = storeToRefs(useMoviesStore());
</script>

<template>
  <main>
    <div class="page-layout">
      <h1>
        My favorite movies
      </h1>
      <MovieCardGroup v-if="allFavoritesMovies.length">
        <BaseCard v-for="movie in allFavoritesMovies" :key="movie.id" :movieData="movie"/>
      </MovieCardGroup>
      <p v-else>
        There are no movies in your favorites list at the moment.
        Please add some of your favorite movies.
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
</style>

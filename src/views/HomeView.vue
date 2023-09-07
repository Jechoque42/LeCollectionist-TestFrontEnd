<script setup lang="ts">
import BaseCard from "@/components/base/BaseCard.vue";
import MovieCardGroup from "@/components/layout/MovieCardGroup.vue";
import { onMounted } from "vue";
import { useMoviesStore } from "@/stores/movies";
import { TmdbApiServices } from "@/services/moviesAPI.services";

// Access the movies store
const moviesStore = useMoviesStore();
const { getNPopularMovies } = moviesStore;

// Function to apply background image of the movie id send in parameter
const applyBG = async () => {
  await TmdbApiServices.defineMovieImageAsBG('76600');
}

// Apply background image when component is mounted
onMounted(applyBG);
</script>

<template>
  <main class="linear-gradient">
    <div class="page-layout">
      <h1>
        Most popular movies Today
      </h1>
      <MovieCardGroup>
        <BaseCard
            v-for="movie in getNPopularMovies(4)"
            :key="movie.id"
            :movieData="movie" />
      </MovieCardGroup>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply bg-fixed bg-cover bg-center bg-no-repeat z-0 absolute flex top-0 min-w-full min-h-full;
}
</style>

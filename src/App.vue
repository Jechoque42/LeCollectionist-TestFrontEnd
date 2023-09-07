<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useMoviesStore } from "@/stores/movies";
import { onMounted } from "vue";
import TheHeader from "@/components/layout/TheHeader.vue";

// Access the movies store
const moviesStore = useMoviesStore();
const { fetchAllFavoriteMovies, fetchPopularMovies } = moviesStore;

// Fetch favorite and popular movies when component is mounted
onMounted(async () => {
  await fetchAllFavoriteMovies();
  await fetchPopularMovies();
});
</script>

<template>
  <TheHeader />

  <RouterView />
</template>

<style lang="scss" scoped>
</style>

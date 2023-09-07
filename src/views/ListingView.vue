<script setup lang="ts">
import TheTabBar from "@/components/layout/TheTabBar.vue";
import MovieCardGroup from "@/components/layout/MovieCardGroup.vue";
import BaseCard from "@/components/base/BaseCard.vue";
import ThePageNavigation from "@/components/layout/ThePageNavigation.vue";
import {computed, onMounted, ref, watch} from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useMoviesStore } from "@/stores/movies";
import { EMovieGenres } from "@/enums/movieGenres.enum";
import type { MovieGenreKeys } from "@/enums/movieGenres.enum";

// Access the route and movies store
const $route = useRoute();
const { currentMoviesCategory, totalPages } = storeToRefs(useMoviesStore());
const { fetchMovieByCategory } = useMoviesStore();

// Define refs for current category and page number
const currentCategory = ref($route.params.id.toString().toUpperCase() as MovieGenreKeys)
const currentPage = ref(1)

// Function to update page number
const updatePage = (newPageNumber: number) => {
  currentPage.value = newPageNumber
}

// Computed property to format the category with the first letter capitalized if category is undefined display All
const formattedCategory = computed(() => {
  const id = $route.params.id.toString().toUpperCase() as MovieGenreKeys
  return EMovieGenres[id] ? currentCategory.value.charAt(0).toUpperCase() + currentCategory.value.slice(1).toLowerCase() : 'All';
});

// Watch for route changes and update category and page
watch($route, async (to) => {
  currentPage.value = 1
  currentCategory.value = to.params.id.toString().toUpperCase() as MovieGenreKeys
  await fetchMovieByCategory(EMovieGenres[currentCategory.value], currentPage.value);
});

// Watch for page changes and fetch movies accordingly
watch(currentPage, async (newPage) => {
  await fetchMovieByCategory(EMovieGenres[currentCategory.value], newPage);
});

// Fetch movies for the current category when the component is mounted
onMounted(async () => {
  const id = $route.params.id.toString().toUpperCase() as MovieGenreKeys
  await fetchMovieByCategory(EMovieGenres[id], currentPage.value)
});

</script>
<template>
  <main>
    <div class="page-layout">
      <TheTabBar/>
      <h1>
        {{ formattedCategory }} movies
      </h1>
      <MovieCardGroup>
        <BaseCard v-for="movie in currentMoviesCategory" :key="movie.id" :movieData="movie"/>
      </MovieCardGroup>
      <ThePageNavigation v-if="totalPages > 1" :pageNumber="currentPage" :totalPages="totalPages" @update:pageNumber="updatePage"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
</style>

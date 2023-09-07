<script setup lang="ts">
import { EMovieGenres, MovieGenresNames } from "@/enums/movieGenres.enum";
import BaseTabs from "@/components/base/BaseTabs.vue";
</script>

<template>
  <nav class="tab-bar">
    <ul class="tab-bar-list">
      <BaseTabs v-for="genreName in MovieGenresNames" :category="genreName" :key="EMovieGenres[genreName]" />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
/* Styling for the Genre Tabs Component */
.tab-bar {
  @apply border-b border-gray-700;
}

.tab-bar-list {
  @apply flex flex-wrap -mb-px text-sm font-medium text-center text-gray-400;
}
</style>

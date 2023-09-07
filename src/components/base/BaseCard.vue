<script setup lang="ts">
import { computed, PropType } from 'vue';
import { storeToRefs } from "pinia";

import type { IMovie } from "@/models/movie.model";
import IconFavorite from "@/components/icons/IconFavorite.vue";

// Store references
import { useMoviesStore } from "@/stores/movies";
const { allFavoritesMovies } = storeToRefs(useMoviesStore());
const { switchFavoriteStateMovie } = useMoviesStore();

// Component props
const props = defineProps({
  movieData: {
    type: Object as PropType<IMovie>,
    required: true,
  },
});

// Computed property to check if the movie is a favorite
const isFavorite = computed<boolean>(() => {
  const currentMovieId = props.movieData.id;
  return allFavoritesMovies.value.some(movie => movie.id === currentMovieId);
});

// Computed property for the formatted poster path URL
const formattedPosterPathUrl = computed<string | undefined>(() => {
  const baseImageUrlTmdbW500 = 'https://image.tmdb.org/t/p/w500/';
  const backdropPath = props.movieData?.backdrop_path;
  return backdropPath ? `url('${baseImageUrlTmdbW500}${backdropPath}')` : undefined;
});

// Method to toggle the favorite state when the card is clicked
const toggleFavoriteState = () => {
  switchFavoriteStateMovie(props.movieData, !isFavorite.value);
};
</script>

<template>
  <article
      class="movie-card-layout linear-gradient"
      @click="toggleFavoriteState()"
  >
    <IconFavorite class="movie-card-favorite" :isFilled="isFavorite"/>
    <h3>{{ props.movieData?.title }}</h3>
  </article>
</template>

<style lang="scss" scoped>
/* Styling for the Movie Card Component */
.movie-card-layout {
  @apply relative flex justify-end bg-cover rounded bg-top bg-center p-3 cursor-pointer;
  background-image: v-bind(formattedPosterPathUrl);
  aspect-ratio: 16/9;
  flex-direction: column;
  border: 1px solid var(--ct-grey);
  box-shadow: var(--ct-grey) 0 0 7px;
  transition: transform .2s;

  @media (hover: hover) {
    &:hover {
      box-shadow: var(--ct-grey) 0 0 5px;
      transform: scale(1.02);
    }
  }
}

/* Styling for the Favorite Icon */
.movie-card-favorite {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
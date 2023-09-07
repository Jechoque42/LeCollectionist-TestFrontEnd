<template>
  <div class="movie-card-group">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .movie-card-group {
    @apply grid gap-4;

    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
</style>
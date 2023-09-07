<script setup lang="ts">
import IconChevron from "@/components/icons/IconChevron.vue";

// Component props
const props = defineProps({
  pageNumber: Number,
  totalPages: Number,
});

// Emit function for updating pageNumber
const emits = defineEmits(['update:pageNumber']);

// Decrement the page number when the Previous button is clicked
const decrementPage = () => {
  if (props.pageNumber > 1) {
    const newPageNumber = props.pageNumber - 1;
    emits('update:pageNumber', newPageNumber);
  }
};

// Increment the page number when the Next button is clicked
const incrementPage = () => {
  const newPageNumber = props.pageNumber + 1;
  emits('update:pageNumber', newPageNumber);
};
</script>

<template>
  <div class="page-navigation">
    <button class="page-navigation-button" @click="decrementPage()">
      <IconChevron :icon-height="15" :icon-width="15" :icon-orientation="'left'"/> Prev
    </button>
    <span class="page-navigation-index">{{ props.pageNumber }}/{{ props.totalPages }}</span>
    <button class="page-navigation-button" @click="incrementPage()">
      Next <IconChevron :icon-height="15" :icon-width="15"/>
    </button>
  </div>
</template>

<style lang="scss">
/* Styling for the Page Navigation Component */
.page-navigation {
  @apply flex flex-row justify-center py-8;

  &-button {
    @apply flex flex-row justify-center items-center
  }

  &-index {
    @apply px-4
  }
}
</style>
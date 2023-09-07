<script setup lang="ts">
import { computed } from "vue";

// Component props
const props = defineProps(
  {
    category: {
      type: String,
      required: true
    }
  }
)

// Computed property to convert category to lowercase
const lowerCaseCategory = computed<string | undefined>(() => {
  return props.category?.toLowerCase();
});

// Computed property to format the category name (capitalize first letter)
const formattedCategory = computed<string | undefined>(() => {
  return lowerCaseCategory.value.charAt(0).toUpperCase() + lowerCaseCategory.value.slice(1);
});
</script>

<template>
    <li class="mr-2">
      <router-link class="base-tab" :to="`/listing/${lowerCaseCategory}`">
        {{ formattedCategory }}
      </router-link>
    </li>
</template>

<style lang="scss" scoped>
/* Styling for the Category Tab Component */
.base-tab {
  @apply inline-flex items-center justify-center px-2 py-4 border-b-2 border-transparent rounded-t-lg;

  &:hover {
    @apply text-gray-300 border-gray-300;
  }
}

/* Styling for the active router link */
.router-link-active {
  @apply text-blue-600 border-b-2 border-blue-600 rounded-t-lg;
}
</style>

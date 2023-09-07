<script setup lang="ts">
import IconMenu from "@/components/icons/IconMenu.vue";
import {ref} from "vue";

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header>
    <div class="theHeader-layout">
      <!-- Logo -->
      <div class="theHeader-logo">
        <router-link to="/">
          <img src="../../assets/images/lecollectionist-logo.svg" alt="Logo" class="theHeader-logo-img"/>
        </router-link>
      </div>

      <!-- Navigation Menu (Desktop) -->
      <nav class="theHeader-menu">
        <router-link to="/listing/action" class="theHeader-menu-link">Listing</router-link>
        <router-link to="/favorites" class="theHeader-menu-link">Favorites</router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="theHeader-menu-button"
      >
        <IconMenu />
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <nav
        v-if="isMobileMenuOpen"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="theHeader-menu-mobile"
    >
      <router-link to="/listing/action" class="theHeader-menu-mobile-link">Listing</router-link>
      <router-link to="/favorites" class="theHeader-menu-mobile-link">Favorites</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  @apply bg-gray-900 text-white fixed w-full top-0 z-20;
}

.theHeader-layout {
  @apply container mx-auto p-4 flex justify-between items-center;
}

.theHeader-logo {
  @apply flex items-center;

  &-image {
    @apply h-8 w-auto mr-2;
  }
}

.theHeader-menu {
  @apply hidden md:flex space-x-4;

  &-link {
    @apply hover:text-gray-400;
  }
}

.theHeader-menu-button {
  @apply md:hidden text-gray-400 focus:outline-none;
}

.theHeader-menu-mobile {
  @apply md:hidden bg-gray-800 mt-2;

  &-link {
    @apply block py-2 px-4 text-white hover:bg-gray-700;
  }
}
</style>

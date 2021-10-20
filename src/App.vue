<script>

import Logo from './components/Logo';
import { useRouter } from "vue-router";
import { useMainNavigation } from "./helpers/useMainNavigation";

export default {

  components: {
    Logo
  },

  setup() {

    const router = useRouter();
    const mainNavigation = useMainNavigation();

    const navigateTo = async path => {

      await router.push({path});

      mainNavigation.showMainMenu.value = false;
    };

    return {
      showMenu: mainNavigation.showMainMenu,
      menu: mainNavigation.mainMenu,
      navigateTo
    }
  }
}

</script>

<template>

  <div id="App" class="flex flex-col h-screen">

    <div class="container mx-auto max-w-screen-lg p-2 border-b flex flex-row justify-between items-center">

      <Logo></Logo>

      <ul class="hidden md:flex space-x-4">
        <li v-for="item in menu" :key="item.path" class="cursor-pointer" @click="navigateTo(item.path)">
          {{ item.name }}
        </li>
      </ul>

      <button @click="showMenu = !showMenu" class="px-3 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

    </div>

    <ul v-show="showMenu" class="border-b p-4 text-center space-y-2">
      <li v-for="item in menu" :key="item.path" class="cursor-pointer" @click="navigateTo(item.path)">
        {{ item.name }}
      </li>
    </ul>

    <div class="flex flex-grow">

      <div class="container mx-auto max-w-screen-lg mt-8 px-4">
        <router-view></router-view>
      </div>

    </div>

    <div class="p-2 bg-white border-t text-center">
      Young Persons Guarantee 2021
    </div>

  </div>

</template>

<style lang="scss">
</style>

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

    const navigateTo = path => router.push({path}).then(() => {
      mainNavigation.showMenu.value = false;
    });

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

    <div class="p-2 border-b flex flex-row justify-between">

      <Logo></Logo>

      <button @click="showMenu = !showMenu" class="px-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

    </div>

    <div class="flex flex-row bg-white flex-grow p-4">

      <div class="hidden md:flex flex-shrink-0">
        <ul class="p-2 text-center w-64">

          <li v-for="item in menu" :key="item.path" class="px-2 py-1">
            <a @click="navigateTo(item.path)">{{ item.name }}</a>
          </li>

        </ul>
      </div>

      <router-view></router-view>

    </div>

    <div class="p-2 bg-white border-t text-center">
      Young Persons Guarantee 2021
    </div>

  </div>

</template>

<style lang="scss">
</style>

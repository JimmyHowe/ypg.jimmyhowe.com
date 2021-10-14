<script>

import { ref } from 'vue';
import Logo from './components/Logo';

export default {

  components: {
    Logo
  },

  setup() {
    return {
      showMenu: ref(false)
    }
  }
}

</script>

<template>

  <div id="App" class="flex flex-col h-screen">

    <div class="p-2 border-b flex flex-row justify-between">

      <Logo></Logo>

      <button @click="showMenu = !showMenu" class="px-3 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

    </div>

    <ul v-if="showMenu" class="p-2 border-b">

      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/search">Search</router-link>
      </li>

    </ul>

    <div class="flex bg-white flex-grow p-4">

      <router-view></router-view>

    </div>

    <div class="p-2 bg-white border-t text-center">
      Young Persons Guarantee 2021
    </div>

  </div>

</template>

<style lang="scss">
</style>

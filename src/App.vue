<script>

import Logo from './components/Logo';

export default {

  components: {
    Logo
  }
}

</script>

<template>

  <div id="App" class="flex flex-col h-screen">

    <div class="p-2 border-b">

      <Logo></Logo>

    </div>

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

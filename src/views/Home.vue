<script>

export default {

  components: {},

  setup: function () {

    const links = [
      {
        path: '/instructions',
        name: 'Instructions',
        description: 'Setup your device to use the PWA.'
      },
      {
        path: '/search',
        name: 'Search',
        description: 'Demo search functionality that grabs jobs from the LMI for All API'
      }
    ];

    function getColor(index) {

      const colors = [
        'bg-ypg-yellow',
        'bg-ypg-purple',
        'bg-ypg-blue',
      ];

      return [colors[index]]
    }

    return {
      links,
      getColor,
    }
  }
};

</script>

<template>

  <div>

    <div class="w-full space-y-4">

      <p>Demonstration PWA</p>

      <div class="space-y-4 md:space-y-0 md:gap-4 md:grid md:grid-cols-3">

        <router-link v-for="(link, index) in links" :key="link.path" :to="link.path"
                     class="flex w-full border rounded-lg h-32 space-x-4 overflow-hidden shadow"
        >

          <div :class="getColor(index)" class="w-4 flex-shrink-0"></div>

          <div class="pr-4">

            <h2 class="mt-4 mb-2 font-bold">
              {{ link.name }}
            </h2>

            <p>
              {{ link.description }}
            </p>

          </div>

        </router-link>

      </div>

    </div>

  </div>

</template>
<script>

import { onMounted, reactive } from "vue"
import axios from 'axios'

const URL = "https://api.lmiforall.org.uk/api/v1/vacancies/search?limit=10&keywords=Developer";

export default {

  components: {},

  setup() {
    const data = reactive({
      results: [],
    });

    onMounted(async () => {

      try {

        let response = await axios.get(URL);

        data.results = response.data

      } catch (e) {

        console.log(e);
      }
    })

    function toHumanReadable(iso) {
      try {

        return new Date(iso).toDateString();
      } catch (e) {
        console.log(e.message);
      }
    }

    return {
      data,
      toHumanReadable
    }
  }

}
</script>

<template>

  <div class="container mx-auto p-4">

    <h1 class="text-4xl font-bold mt-8">
      Developer Jobs
    </h1>

    <div v-if="data.results.length === 0">
      LOADING...
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">

      <a v-for="result in data.results" :key="result.id" :href="result.link"
         class="rounded shadow p-4" target="_blank"
      >

        <div class="text-gray-500 text-sm">

          <span v-if="result.activedate.start">
            {{ toHumanReadable(result.activedate.start) }}
          </span>

        </div>

        <div class="font-semibold text-lg mb-4">
          {{ result.title }} - {{ result.company }}
        </div>

        <div>

          <div v-if="result.location.location" class="flex">

            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </span>
            {{ result.location.location }}

          </div>

        </div>

      </a>

    </div>

  </div>

</template>
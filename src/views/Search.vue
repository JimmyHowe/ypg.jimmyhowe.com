<script>

import { onMounted, ref, watch } from "vue"
import { useSearch } from "../helpers/useSearch";

export default {

  components: {},

  setup() {

    const search = useSearch();

    const keyword = ref('developer');

    watch(keyword, () => {

      search.find(keyword);
    })

    onMounted(async () => {

      await search.find(keyword);
    })

    function toHumanReadable(iso) {
      try {

        return new Date(iso).toDateString();
      } catch (e) {
        console.log(e.message);
      }
    }

    return {
      results: search.results,
      isWorking: search.isWorking,
      toHumanReadable,
      keyword
    }
  }

}
</script>

<template>

  <div class="container mx-auto p-4">

    <h1 class="text-4xl font-bold mt-8 mb-6">
      Opportunities
    </h1>

    <select v-model="keyword" class="block w-full mx-2 p-2">
      <option disabled value="">Please select one</option>
      <option value="vacancies">Vacancies</option>
      <option value="apprenticeships">Apprenticeships</option>
      <option value="courses">Courses</option>
    </select>

    <div v-if="results.length === 0 || isWorking" class="m-4">
      Loading
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">

      <a v-for="result in results" :key="result.id" :href="result.link"
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
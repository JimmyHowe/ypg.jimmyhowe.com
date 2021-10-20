<script>

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },

  setup() {

    const tabs = [
      'IOS',
      'Android'
    ]

    return {
      tabs
    }
  }
}
</script>

<template>

  <div id="Instructions">

    <TabGroup vertical>
      <TabList class="space-x-2 mb-2">
        <Tab v-for="tab in tabs" :key="tab" v-slot="{ selected }" as="template">
          <button
              class="px-4 py-1 border rounded"
              :class="[selected ? '' : 'bg-white text-black']"
          >
            {{ tab }}
          </button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel class="prose-lg lg:prose-xl p-4">

          <ol class="list-decimal">
            <li>
              On any page, press the Safari share button.
            </li>
            <li>
              From the menu select, Add to Home Screen
            </li>
            <li>
              Enter 'YPG' to the select box.
            </li>
            <li>
              Select Add
            </li>
          </ol>

          <p>The YPG site will now be added to the phone screen.</p>

        </TabPanel>
        <TabPanel class="prose-lg lg:prose-xl p-4">

          <ol class="list-decimal">
            <li>
              When the page loads, there will be a prompt asking to add the app to the home page.
            </li>
          </ol>

          <p>The YPG site will now be added to the phone screen.</p>

        </TabPanel>
      </TabPanels>
    </TabGroup>

  </div>

</template>
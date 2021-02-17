<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-toolbar class="bg-white glossy text-dark" style="height:70px">
        <q-avatar size="70px">
          <img
            src="~assets/SWIMSlogo_circle.png"
          />
        </q-avatar>
        <q-toolbar-title class="text-h5 text-bold" >
          ECF Hong Kong Rocky Shore GIS Website Storyboard 2019-2023
        </q-toolbar-title>

        <q-tabs align="left" v-model="tab" dense>
          <q-route-tab to="/home" name="home" class="text-blue" icon="home" label="Homepage" />
          <q-route-tab to="/interactiveHabitat" name="interactiveHabitat" class="text-orange" icon="map" label="Interactive Habitat" />
          <q-route-tab to="/l/demo2" name="speciesSearchEngine" class="text-red" icon="travel_explore" label="Species Search Engine" />
        </q-tabs>
     
        <!-- <q-separator dark vertical inset></q-separator> -->
        <!-- <q-btn dense flat round icon="menu" @click="right = !right" /> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      right: false,
      tab: "Home",
    };
  },
  methods: {
    onItemClick() {
      // console.log('Clicked on an Item')
    },
  },
};
</script>
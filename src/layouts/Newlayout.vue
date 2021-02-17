<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-toolbar class="bg-white glossy text-dark" style="height:70px">
        <q-avatar size="70px">
          <img
            src="~assets/SWIMSlogo_circle.png"
          />
        </q-avatar>
        <q-toolbar-title>
          <h5><b>ECF Hong Kong Rocky Shore GIS Website Storyboard 2019-2023</b></h5>
        </q-toolbar-title>

         <q-tab :style="[selected_tab == 't_0' ? {backgroundColor: 'green'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_about_me')" style="width:120px;min-height:auto !important;color: white"
                   label="About Me"/></q-tab>
        <q-tabs align="left" v-model="tab" dense>
          <q-route-tab to="/home" name="home" class="text-blue" icon="home" label="Homepage" />
          <q-route-tab to="/interactiveHabitat" name="interactiveHabitat" class="text-orange" icon="map" label="Interactive Habitat" />
          <q-route-tab to="/l/demo2" name="speciesSearchEngine" class="text-red" icon="travel_explore" label="Species Search Engine" />
        </q-tabs>
        <!-- <q-separator dark vertical inset></q-separator> -->
        <!-- <q-btn dense flat round icon="menu" @click="right = !right" /> -->
      </q-toolbar>

      
      </div>
    </q-header>

    <!-- <q-drawer
      show-if-above
      v-model="right"
      side="right"
      content-class="doc -right-drawer"
      elevated
    >
      <!-- drawer content -->
    <!-- </q-drawer> --> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      right: false,
      tab: "interactiveHabitat",
    };
  },
  methods: {
    onItemClick() {
      // console.log('Clicked on an Item')
    },
  },
};
</script>
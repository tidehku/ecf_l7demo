<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-toolbar class="bg-grey-1 text-dark" style="height: 80px">
        <q-avatar size="65px">
          <img src="~assets/SWIMSlogo2.png" />
        </q-avatar>
        <q-toolbar-title class="text-h5 text-bold">
          ECF Hong Kong Rocky Shore GIS Website Storyboard 2019-2023
        </q-toolbar-title>

        <q-tabs align="left" v-model="tab" dense>
          <q-route-tab
            to="/"
            name="home"
            class="text-blue"
            icon="home"
            label="Homepage"
          />
          <q-route-tab
            to="/interactiveHabitat"
            name="interactiveHabitat"
            class="text-red-8"
            icon="map"
            label="Interactive Habitat"
          />
          <q-route-tab
            to="/l/demo2"
            name="speciesSearchEngine"
            class="text-indigo-9"
            icon="travel_explore"
            label="Species Search Engine"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar class="bg-white text-dark" style="height: 40px">
        <q-toolbar-title id="footer">
          Copyright ©
          {{ new Date().getFullYear() }} —
          <a href="https://www.tidehku.com/" target="_blank">
            <strong>Tropical IntertiDal Ecology Group</strong>
          </a>
          , The Swire Institute of Marine Science, The University of Hong Kong
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: "Home",
    };
  },
};
</script>

<style lang="sass">
.q-toolbar__title
  color: dark
  font: normal

#footer.q-toolbar__title
  text-align: center
  font-size: 15px
</style>

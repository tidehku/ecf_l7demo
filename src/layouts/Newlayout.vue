<template>
  <q-layout view="hHh lpR lFr">
    <q-header elevated>
      <q-toolbar class="bg-dark glossy text-white">
        <q-avatar>
          <img
            src="https://image.flaticon.com/icons/png/512/1889/1889699.png"
          />
        </q-avatar>
        <q-toolbar-title>
          Explore Marine Biodiversity around Hong Kong Shore
        </q-toolbar-title>

        <q-tabs align="left">
          <q-route-tab to="/page1" text-color="yellow" label="Log in" />
          <q-route-tab to="/page2" label="About us" />
          <q-route-tab to="/l/demo1" label="LeafletDemo" />
          <q-route-tab to="/l/demo2" label="UserCenter" />
        </q-tabs>
        <q-separator dark vertical inset></q-separator>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>

      <!-- <div class="q-mx-md"> -->
      <div class="q-gutter-y-md" style="max-width: 1000px">
        <q-tabs
          aligh="left"
          v-model="tab"
          class="bg-grey-1"
          dense
          align="justify"
        >
          <q-route-tab
            to="home"
            class="text-blue"
            name="home"
            icon="home"
            label="Homepage"
          ></q-route-tab>

          <q-route-tab
            to="interactiveHabitat"
            class="text-orange"
            name="interactiveHabitat"
            icon="map"
            label="Interactive Habitat"
          ></q-route-tab>
          <q-route-tab
            to="demoMap"
            class="text-cyan"
            name="speciesSearchEngine"
            icon="search"
            label="Species Search Engine"
          ></q-route-tab>
          <q-route-tab
            to="drillDown"
            class="text-red"
            name="drillDown"
            icon="map"
            label="Drill Down Map"
          ></q-route-tab>
        </q-tabs>
      </div>
    </q-header>

    <q-drawer show-if-above v-model="right" side="right" elevated>
      <!-- drawer content -->
    </q-drawer>

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
};
</script>
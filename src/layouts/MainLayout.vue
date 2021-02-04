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

        <q-btn-dropdown stretch flat label="Upload Files">
          <q-list>
            <q-item-label header>Folders</q-item-label>
            <q-item
              v-for="n in 3"
              :key="`x.${n}`"
              clickable
              v-close-popup
              tabindex="0"
            >
              <q-item-section avatar>
                <q-avatar
                  icon="folder"
                  color="secondary"
                  text-color="white"
                ></q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info"></q-icon>
              </q-item-section>
            </q-item>
            <q-separator inset spaced></q-separator>
            <q-item-label header>Files</q-item-label>
            <q-item
              v-for="n in 3"
              :key="`y.${n}`"
              clickable
              v-close-popup
              tabindex="0"
            >
              <q-item-section avatar>
                <q-avatar
                  icon="assignment"
                  color="primary"
                  text-color="white"
                ></q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Vacation</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info"></q-icon>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-tabs align="left">
          <q-route-tab to="/page1" text-color="yellow" label="Home" />
          <q-route-tab to="/page2" label="About us" />
          <q-route-tab to="/page3" label="Setting" />
          <q-route-tab to="/page4" label="Help" />
        </q-tabs>

        <q-separator dark vertical inset></q-separator>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="right = !right"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="Right" show-if-above bordered content-class="bg-grey-1">
    </q-drawer>

    <q-drawer show-if-above v-model="Right" side="right" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {
      Right: false,
    };
  },
};
</script>

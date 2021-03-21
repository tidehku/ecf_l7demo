<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-toolbar class="bg-grey-1 text-dark" style="height: 80px">
        <q-avatar size="65px">
          <img src="~assets/SWIMSlogo2.png" />
        </q-avatar>
        <q-toolbar-title class="text-h5 text-bold">
          ECF HK Rocky Shore GIS Website Storyboard 2019-2023
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
            to="/SpeciesSearchEngine"
            name="speciesSearchEngine"
            class="text-indigo-9"
            icon="travel_explore"
            label="Species Search Engine"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      side="right"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="240"
      :breakpoint="500"
      bordered
      elevated
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple to="/interactiveHabitat/historical">
            <q-item-section avatar>
              <q-icon name="book" />
            </q-item-section>

            <q-item-section> Historical Records </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/interactiveHabitat">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> ECF Sampling Data </q-item-section>
          </q-item>

          <q-separator />

          <q-expansion-item
            label="NorthWestern Sites"
            header-class=" text-blue-10 text-bold"
            default-opened
          >
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Lung Kwu Tan"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo2"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Siu Lam"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Luk Keng"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Tai O"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-expansion-item>
          <q-expansion-item
            label="SouthWestern Sites"
            header-class=" text-blue-10 text-bold"
            default-opened
          >
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Lung Kwu Tan"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo2"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Siu Lam"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Luk Keng"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Tai O"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-expansion-item>
          <q-expansion-item
            label="Southern Sites"
            header-class=" text-blue-10 text-bold"
            default-opened
          >
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Lung Kwu Tan"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo2"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Siu Lam"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Luk Keng"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Tai O"
              header-class="bg-blue-grey-2 text-bold"
              dense
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

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
      drawer: false,
      miniState: true,
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

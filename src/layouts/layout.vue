<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-toolbar
        class="bg-grey-2 text-dark justify-around"
        style="height: 10vh"
      >
        <!-- app fullscreen -->
        <q-btn round @click="$q.fullscreen.toggle()">
          <q-avatar size="50px">
            <img src="~assets/hkrise.png" />
          </q-avatar>
          <q-tooltip content-style="font-size: 16px">
            Enter / Exit App Fullscreen
          </q-tooltip>
        </q-btn>

        <q-toolbar-title class="text-5 text-bold">
          Hong Kong Rocky shore Interactive Search Engine (HKRISE)
        </q-toolbar-title>
        <q-tabs
          class="text-indigo"
          active-bg-color="indigo"
          active-color="white"
          v-model="tab"
          dense
        >
          <q-route-tab
            to="/"
            name="home"
            icon="home"
            label="Home"
            style="width: 8vw"
          />
          <q-route-tab
            to="/method"
            name="Methods"
            icon="biotech"
            label="Methods"
            style="width: 8vw"
          />
          <q-route-tab
            to="/interactiveHabitat"
            name="interactiveHabitat"
            icon="map"
            label="Map"
            style="width: 8vw"
          />
          <q-route-tab
            to="/SpeciesSearchEngine"
            name="speciesSearchEngine"
            icon="travel_explore"
            label="Search"
            style="width: 8vw"
          />
          <q-route-tab
            to="/gallery"
            name="Gallery"
            icon="collections"
            label="Gallery"
            style="width: 8vw"
          />
        </q-tabs>
        <q-btn flat @click="drawer = !drawer" round icon="menu" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      side="right"
      overlay
      :width="300"
      :breakpoint="500"
      elevated
      content-class="bg-indigo-1"
    >
      <div class="q-py-xl">
        <q-card bordered flat class="searchbox fixed-center" style="width: 90%">
          <div
            class="q-py-md bg-indigo text-white text-h6 text-bold text-center"
          >
            Dashboard Navigation
          </div>
          <div class="q-pa-md q-gutter-md">
            <q-select
              filled
              dense
              bg-color="indigo-1"
              label-color="indigo"
              v-model="region"
              :options="regionOptions"
              label="Choose Region"
              @input="setSites"
            />

            <q-select
              filled
              dense
              bg-color="indigo-1"
              label-color="indigo"
              v-model="subSite"
              :options="sites"
              label="Choose Site"
            />

            <q-select
              filled
              dense
              bg-color="indigo-1"
              label-color="indigo"
              v-model="dashboard"
              :options="dashboardOptions"
              label="Choose Dashboard"
            />
            <div class="row justify-center">
              <q-btn
                no-caps
                dense
                color="indigo"
                class="text-h6 q-ma-md q-px-md"
                glossy
                label="Search"
                @click="changeSite()"
              />
            </div>
          </div>
        </q-card>
      </div>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </q-page-container>

    <q-footer elevated>
      <q-toolbar class="bg-white text-dark">
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
      region: null,
      sites: null,
      subSite: "",
      dashboard: null,
      regionOptions: [
        {
          label: "Eastern",
          sites: ["Pak Lap", "Kau Sai Chau", "Pak Shui Wun", "Sai Wan"]
        },
        {
          label: "Northeastern",
          sites: ["Double Island", "Hung Shek Mun", "Kat O", "Yung Shue Au"]
        },
        {
          label: "Northwestern",
          sites: ["Luk Keng", "Lung Kwu Tan", "Siu Lam", "Tai O"]
        },
        {
          label: "Southern",
          sites: ["Middle Bay", "Tai Tam", "Wah Fu", "Shek O"]
        },
        {
          label: "Southwestern",
          sites: ["Peng Chau", "Pui O", "Shui Tseng", "Tai Long Wan"]
        },
        {
          label: "Tolo Harbour",
          sites: ["Lai Chi Chong", "Ma Shi Chau", "Starfish Bay", "Tseng Tau"]
        }
      ],
      dashboardOptions: [
        {
          label: "Physical dashboard",
          value: "phy"
        },
        {
          label: "Biological dashboard",
          value: "bio"
        }
      ]
    };
  },
  methods: {
    home() {
      this.$router.replace("/");
    },
    setSites(val) {
      this.sites = val.sites;
    },
    changeSite() {
      this.$router.push(
        `/interactiveHabitat/${this.dashboard.value}${this.subSite.replace(
          /\s/g,
          ""
        )}`
      );
    },
    openDrawerCallback() {
      this.drawer = !this.drawer;
    }
  },

  created() {
    this.$root.$on("openDrawer", this.openDrawerCallback);
  },

  beforeDestroy() {
    this.$root.$off("openDrawer", this.openDrawerCallback);
  }
};
</script>

<style lang="sass" scoped>
// .q-toolbar__title
//   color: dark
//   font: normal

#footer.q-toolbar__title
  text-align: center
  font-size: 15px

.searchbox
  // border-width: 3px
  // border-color: $indigo
</style>

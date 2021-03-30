<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-toolbar
        class="bg-grey-1 text-dark"
        style="height: 70px"
      >
        <q-btn
          round
          glossy
        >
          <q-avatar
            size="65px"
            @click="home()"
          >
            <img src="~assets/SWIMSlogo2.png" />
          </q-avatar>
        </q-btn>
        <q-toolbar-title class="text-5 text-bold">
          ECF HK Rocky Shore GIS Website Storyboard 2019-2023
        </q-toolbar-title>

        <q-tabs
          align="left"
          v-model="tab"
          dense
        >
          <q-route-tab
            to="/"
            name="home"
            class="text-amber"
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
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      side="right"
      overlay
      :width="320"
      :breakpoint="500"
      elevated
      content-class="bg-grey-3"
    >
      <q-list padding>
        <q-item
          clickable
          v-ripple
          to="/"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> Home Page </q-item-section>
        </q-item>
        <q-separator />
        <q-item
          clickable
          v-ripple
          to="/interactiveHabitat/historical"
        >
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>

          <q-item-section> Historical Records </q-item-section>
        </q-item>
        <q-separator />

        <q-item
          clickable
          v-ripple
          to="/interactiveHabitat"
        >
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section> ECF Sampling Data </q-item-section>
        </q-item>

        <q-separator />
      </q-list>
      <q-card
          bordered
          flat
          class="q-ma-md searchbox"
          style="width: 90%"
        >
          <div class="q-py-sm bg-black text-white text-h6 text-bold text-center">
            Quick Search Link
          </div>

          <q-select
            filled
            dense
            v-model="region"
            :options="regionOptions"
            label="Choose Region"
            @input="setSites"
          />

          <q-select
            filled
            dense
            v-model="subSite"
            :options="sites"
            label="Choose Site"
          />

          <q-select
            filled
            dense
            v-model="dashboard"
            :options="dashboardOptions"
            label="Choose Dashboard"
          />
          <div class="row justify-center">
            <q-btn
              no-caps
              dense
              color="black"
              class="text-h6 q-ma-md q-px-md"
              glossy
              label="Search"
              @click="changeSite()"
            />
          </div>
        </q-card>
    </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer elevated>
        <q-toolbar
          class="bg-white text-dark"
          style="height: 40px"
        >
          <q-toolbar-title id="footer">
            Copyright ©
            {{ new Date().getFullYear() }} —
            <a
              href="https://www.tidehku.com/"
              target="_blank"
            >
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
          sites: ["Pak Lap", "Kau Sai Chau", "Pak Shui Wun", "Sai Wan"],
        },
        {
          label: "North Eastern",
          sites: ["Double Island", "Hung Shek Mun", "Kat O", "Yung Shue Au"],
        },
        {
          label: "North Western",
          sites: ["Luk Keng", "Lung Kwu Tan", "Siu Lam", "Tai O"],
        },
        {
          label: "Southern",
          sites: ["Middle Bay", "Tai Tam", "Wah Fu", "Shek O"],
        },
        {
          label: "South Western",
          sites: ["Peng Chau", "Pui O", "Shui Tseng", "Tai Long Wan"],
        },
        {
          label: "Tolo Habour",
          sites: ["Lai Chi Chong", "Ma Shi Chau", "Starfish Bay", "Tseng Tau"],
        },
      ],
      dashboardOptions: [
        {
          label: "Physical Dashboard",
          value: "physicalDashboard",
        },
        {
          label: "Biological Dashboard",
          value: "biologicalDashboard",
        },
      ],
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
      this.$router.push(`/${this.dashboard.value}/${this.subSite}`);
    },
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

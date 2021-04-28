<template>
  <q-layout view="hhh lpr fff">
    <q-drawer
      v-model="drawer"
      side="right"
      overlay
      :width="320"
      :breakpoint="500"
      elevated
      content-class="bg-teal-3"
    >
      <div class="q-py-xl row justify-center">
        <q-card
          bordered
          flat
          class="searchbox"
          style="width: 90%"
        >
          <div class="q-py-md bg-indigo text-white text-h6 text-bold text-center">
            Dashboard Quick Navigation
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
      <router-view />
    </q-page-container>
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

<style lang="sass" scoped>
// .q-toolbar__title
//   color: dark
//   font: normal

#footer.q-toolbar__title
  text-align: center
  font-size: 15px

.searchbox
  border-width: 3px
  border-color: $indigo
</style>

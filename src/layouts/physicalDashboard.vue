<template>
  <q-layout view="hhh lpR fFf">
    <q-header>
      <q-bar
        class="bg-indigo-8 text-white glossy"
        style="height: 35px"
      >
        <q-btn round>
          <q-avatar size="40px">
            <img
              src="~assets/swims.png"
              @click="home()"
            />
          </q-avatar>
        </q-btn>
        <div class="q-px-md text-h4 text-bold">
          ECF Hong Kong Rocky Shore | Physical Dashboard
        </div>
        <q-space />
        <q-btn
          no-caps
          class="text-indigo-8 text-bold switchbutton"
          color="white"
          icon-right="eco"
          label="Switch to Biological Dashboard"
          to="/biologicalDashboard"
        />
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          icon="menu"
        />
      </q-bar>
    </q-header>
    <q-drawer
      v-model="drawer"
      side="right"
      overlay
      :width="300"
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

        <q-separator /><br />
        <q-card
          bordered
          flat
          class="q-ma-sm searchbox"
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

        <!-- <q-item  v-for="region in regions">{{ region }}</q-item> -->
      </q-list>
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
      drawer: false,
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
  // watch: {
  //   subSite: function () {
  //     this.$router.push(`/${this.subSite}`);
  //     // console.log(this.subSite);
  //   },
  // },
};
</script>

<style lang="sass">
.searchbox
  border-width: 2px
  border-color: black
  // background-color: $indigo-5
</style>

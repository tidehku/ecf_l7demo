<template>
  <q-layout view="hhh lpR fFf">
    <q-header>
      <q-bar
        class="bg-indigo-8 text-white glossy"
        style="height: 40px"
      >
        <q-avatar size="40px">
          <img src="~assets/swims.png" />
        </q-avatar>
        <q-bar-title class="q-px-md text-h5 text-bold">
          ECF Hong Kong Rocky Shore | Physical Dashboard of {{xxx}} xxx Site
        </q-bar-title>
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

        <q-separator /><br>
        <q-card
          bordered
          flat
          class="q-pa-sm searchbox"
        >

          <div class="q-py-sm bg-black text-white text-h6 text-bold text-center">Quick Search Link</div>

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
            @input="setSites"
          />

          <q-select
            filled
            dense
            v-model="model"
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
              to="/physicalDashboard/${region.sites}`"
            />
            <!-- to="/physicalDashboard/$sitename$"-->
          </div>

        </q-card>

        <!-- <q-item  v-for="region in regions">{{ region }}</q-item> -->

      </q-list>

    </q-drawer>

    <q-page-container class="col page">
      <div class="row justify-center no-wrap">
        <q-card
          bordered
          class="col-3 temperature"
        >
          <div class="text-h5 text-bold row justify-center title">Temperature</div>
          <highcharts :options="chartOptions1"></highcharts>
          <highcharts :options="chartOptions2"></highcharts>
        </q-card>

        <q-card
          bordered
          class="bg-indigo-1 maincard"
        >
          <div class="row">

            <q-card-section
              vertical
              class="col-6"
            >
              <div class="text-h5 text-bold row justify-center">Site Name</div>
              <p>
                Here can be a site introduction: {{lorem}}</p>
              <q-carousel
                height="150px"
                animated
                v-model="slide"
                arrows
                infinite
              >
                <q-carousel-slide
                  :name="1"
                  img-src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-carousel-slide
                  :name="3"
                  img-src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
                <q-carousel-slide
                  :name="4"
                  img-src="https://cdn.quasar.dev/img/quasar.jpg"
                />
              </q-carousel>
              <!-- <q-img :ratio="16 / 9" src="~assets/placeholder2.jpg" /> -->
            </q-card-section>

            <q-card-section class="col-6 q-px-sm">
              <l-map
                :zoom=10.6
                :center="center"
                :options="mapOptions"
                class="l-map"
              >
                <l-tile-layer
                  :url="url"
                  :attribution="attribution"
                />
                <l-marker :lat-lng="[22.39235, 113.916341]"></l-marker>
              </l-map>
            </q-card-section>
          </div>
        </q-card>

        <q-card
          bordered
          class="col-3 waveFetch"
        >
          <div class="text-h5 text-bold row justify-center title">Wave Fetch</div>
          <highcharts :options="chartOptions1"></highcharts>
          <highcharts :options="chartOptions2"></highcharts>
        </q-card>
      </div>
      <div class="row justify-center">
        <q-card
          bordered
          class="bottomcard"
        >
          <div class="text-h5 text-bold row justify-center title">Nutrient Levels</div>

          <q-card-section horizontal>
            <div class="col-6 row q-pa-xs justify-center">
              <q-badge
                color="red-5"
                class="text-white text-bold multi-line"
              >Chlorophyll a</q-badge>
            </div>
            <div class="col-6 row q-pa-xs justify-center">
              <q-badge
                color="red-5"
                class="text-white text-bold multi-line"
              >Organic Matter</q-badge>
            </div>
          </q-card-section>
          <q-card-section horizontal>
            <highcharts
              class="col-3"
              :options="chartOptions1"
            ></highcharts>
            <highcharts
              class="col-3"
              :options="chartOptions2"
            ></highcharts>
            <q-separator vertical />
            <highcharts
              class="col-3"
              :options="chartOptions1"
            ></highcharts>
            <highcharts
              class="col-3"
              :options="chartOptions2"
            ></highcharts>
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { LMap, LMarker, LTileLayer } from "vue2-leaflet";
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);

export default {
  components: { LMap, LMarker, LTileLayer },
  data() {
    return {
      drawer: false,
      region: null,
      sites: null,
      subSite: "",
      model: null,
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
      dashboardOptions: ["Physical Dashboard", "Biological Dashboard"],
      slide: 1,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      center: L.latLng(22.39235, 113.916341),
      mapOptions: {
        zoomControl: false,
      },

      url:
        "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: "Source &copy; Esri",

      chartOptions1: {
        chart: {
          type: "spline",
          height: (1 / 2) * 100 + "%", // 16:9 ratio
        },
        credits: {
          enabled: false,
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "Summer",
        },
        series: [
          {
            showInLegend: false,
            data: [10, 6, 8, 2, 8, 4, 6, 7],
          },
        ],
      },
      chartOptions2: {
        chart: {
          type: "spline",
          height: (1 / 2) * 100 + "%", // 16:9 ratio
        },
        credits: {
          enabled: false,
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "Winter",
        },
        series: [
          {
            showInLegend: false,
            data: [2, 3, 9, 5, 6, 4, 1, 2],
          },
        ],
      },
    };
  },
  methods: {
    setSites(val) {
      this.sites = val.sites;
    },
  },
};
</script>

<style lang="sass">
.q-select
  padding: 15px

.q-card
  background-color: white

.searchbox
  border-width: 2px
  border-color: black
  // background-color: $indigo-5

.page
  background-color: $grey-6
  padding: 4px

.q-card
  width: 97%
.temperature
  // background-color: $indigo-1
  padding: 2px
  margin: 4px
.maincard
  padding: 2px
  margin: 4px
.waveFetch
  padding: 2px
  margin: 4px

.bottomcard
  padding: 2px
  margin: 4px
  width: 99.5%

.title
  background-color: $indigo-5
  color: white

.l-map
  border: 8px solid
  border-color: $indigo-4
</style>

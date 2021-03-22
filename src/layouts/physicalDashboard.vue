<template>
  <div class="col page">
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
          <q-card-section class="col-3">
            <highcharts :options="chartOptions1"></highcharts>
          </q-card-section>
          <q-card-section class="col-3">
            <highcharts :options="chartOptions2"></highcharts>
          </q-card-section>

          <q-separator vertical />
          <q-card-section class="col-3">
            <highcharts :options="chartOptions1"></highcharts>
          </q-card-section>

          <q-card-section class="col-3">
            <highcharts :options="chartOptions2"></highcharts>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
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
};
</script>

<style lang="sass">
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
  border: 2px solid
  border-color: black

</style>
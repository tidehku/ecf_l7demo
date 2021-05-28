<template>
  <q-page class="justify-center">
    <q-bar
      elevated
      class="bg-blue-9 text-white"
    >
      <div class="text-bold row justify-center">
        Biological Dashboard of Starfish Bay, Tolo Habour Region
      </div>
      <!-- <q-btn
        class="bg-indigo text-white"
        no-caps
        label="Tolo Habour Region"
      /> -->
      <q-space />
      <q-btn
        dense
        icon="eco"
        color="white"
        text-color="blue-8"
        to="/interactiveHabitat/bioStarfishBay"
      >
        <q-tooltip>
          Switch to Biological Dashboard
        </q-tooltip>
      </q-btn>
      <q-btn
        dense
        icon="keyboard_backspace"
        class="bg-white text-blue-8"
        to="/interactiveHabitat/SW"
      >
        <q-tooltip>
          Go back
        </q-tooltip>
      </q-btn>
    </q-bar>
    <div class="page">
      <q-card bordered>
        <div class="text-h5 text-bold row justify-center title">
          Daily Temperature
          <q-icon
            class="absolute all-pointer-events"
            size="32px"
            name="info"
            color="white"
            style="top: 2px; right: 8px"
          >
            <q-tooltip>
              Here can be some note on the interpretation/ecological
              significance of the data
            </q-tooltip>
          </q-icon>
        </div>
        <div class="row">
          <div class="col-6 tab1">winter</div>
          <div class="col-6 tab2">summer</div>
        </div>
        <div class="row">
          <highcharts
            class="col-6"
            :options="Temperature1"
          ></highcharts>
          <q-separator vertical />
          <div class="text-center noData">
            2021 Summer data <br />
            Not available yet
          </div>
        </div>
      </q-card>

      <q-card bordered>
        <div class="text-h5 text-bold row justify-center title">
          Nutrient Level
          <q-icon
            class="absolute all-pointer-events"
            size="32px"
            name="info"
            color="white"
            style="top: 2px; right: 8px"
          >
            <q-tooltip>
              Here can be some note on the interpretation/ecological
              significance of the data
            </q-tooltip>
          </q-icon>
        </div>
        <div class="row no-wrap">
          <div class="col-6 text-center text-bold text-blue">Chlorophyll a</div>
          <q-separator vertical />
          <div class="col-6 text-center text-bold text-blue">
            Organic Matter
          </div>
        </div>
        <div class="row">
          <div class="col-3 tab1">winter</div>
          <div class="col-3 tab2">summer</div>
          <div class="col-3 tab1">winter</div>
          <div class="col-3 tab2">summer</div>
        </div>
        <div class="row">
          <highcharts
            class="col-3"
            :options="Chla1"
          ></highcharts>
          <div class="text-center noData">
            2021 Summer data <br />
            Not available yet
          </div>
          <q-separator vertical />
          <highcharts
            class="col-3"
            :options="OM1"
          ></highcharts>
          <div class="text-center noData">
            2021 Summer data <br />
            Not available yet
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { LMap, LMarker, LTileLayer } from "vue2-leaflet";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
exporting(Highcharts);
import More from "highcharts/highcharts-more";
More(Highcharts);
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);
import { tempData } from "./physicalData/temperature";
import { omData } from "./physicalData/om";
import { chlaData } from "./physicalData/chla";

export default {
  components: { LMap, LMarker, LTileLayer },
  data() {
    return {
      Temperature1: tempData.SBTemperature1,
      Temperature2: tempData.SBTemperature2,
      Chla1: chlaData.SBChla1,
      OM1: omData.SBOm1,
    };
  },
  mounted() {
    console.log(firebaseStore)
  }
};
</script>

<style lang="sass" scoped>
.page
  background-color: $grey-6
  padding: 4px
  // height: 90vh
  // overflow: hidden
.q-card
  padding: 2px
  margin: 4px
  background-color: white
.tab1
  background-color: $grey-4
  color: $blue
  font-size: 16px
  text-align: center
  font-weight: bold
.tab2
  background-color: #85C1E9
  color: white
  font-size: 16px
  text-align: center
  font-weight: bold
.title
  background-color: $blue-6
  color: white
.noData
  margin: auto
  text-align: center
  font-weight: bold
  color: $grey-8
  font-size: 20px
</style>

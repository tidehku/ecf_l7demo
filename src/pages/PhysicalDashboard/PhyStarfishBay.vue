<template>
  <q-page class="page justify-center">
    <q-bar class="bg-black text-white">
      <div class="text-bold row justify-center">
        Physical Dashboard of Starfish Bay, Tolo Habour Region
      </div>
      <q-space />
      <q-btn
        dense
        icon="eco"
        color="teal"
      />
      <q-btn
        dense
        icon="keyboard_backspace"
        color="indigo"
        v-go-back=" '/' "
      />
      <q-btn
        dense
        no-caps
        color="teal"
        class="text-bold"
        label="Switch to Biological Dashboard"
        to="/biologicalDashboard/Starfish%20Bay"
      />
      <q-btn
        flat
        @click="drawer = !drawer"
        round
        icon="menu"
      />
    </q-bar>

    <q-card bordered>
      <div class="text-h5 text-bold row justify-center title">
        Daily Temperature
      </div>
      <div class="row">
        <div class="col-6 tab1"> winter </div>
        <div class="col-6 tab2"> summer </div>
      </div>
      <div class="row">
        <highcharts
          class="col-6"
          :options="Temperature1"
        ></highcharts>
        <q-separator vertical />
        <div class="text-center noData">
          2021 Summer data <br /> Not available yet
        </div>
      </div>
    </q-card>

    <q-card bordered>
      <div class="text-h5 text-bold row justify-center title">
        Nutrient Level
      </div>
      <div class="row no-wrap">
        <div class="col-6 text-center text-bold text-indigo"> Chlorophyll a </div>
        <q-separator vertical />
        <div class="col-6 text-center text-bold text-indigo"> Organic Matter </div>
      </div>
      <div class="row">
        <div class="col-3 tab1"> winter </div>
        <div class="col-3 tab2"> summer </div>
        <div class="col-3 tab1"> winter </div>
        <div class="col-3 tab2"> summer </div>
      </div>
      <div class="row">
        <highcharts
          class="col-3"
          :options="Chla1"
        ></highcharts>
        <div class="text-center noData">
          2021 Summer data <br /> Not available yet
        </div>
        <q-separator vertical />
        <highcharts
          class="col-3"
          :options="Chla1"
        ></highcharts>
        <div class="text-center noData">
          2021 Summer data <br /> Not available yet
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { LMap, LMarker, LTileLayer } from "vue2-leaflet";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
exporting(Highcharts);
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
};
</script>

<style lang="sass" scoped>
.q-page
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
  color: $indigo
  font-size: 16px
  text-align: center
  font-weight: bold
.tab2
  background-color: #b0bad2
  color: white
  font-size: 16px
  text-align: center
  font-weight: bold
.title
  background-color: $indigo-5
  color: white
.noData
  margin: auto
  text-align: center
  font-weight: bold
  color: $grey-8
  font-size: 20px
</style>

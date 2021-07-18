<template>
  <q-page class="justify-center">
    <q-bar elevated class="bg-blue-9 text-white">
      <div class="text-bold row justify-center">
        Physical Dashboard of Starfish Bay, Tolo Harbour Region
      </div>
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
        to="/interactiveHabitat/TL"
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
          <highcharts class="col-6" :options="Temperature1"></highcharts>
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
          <highcharts class="col-3" :options="Chla1"></highcharts>
          <div class="text-center noData">
            2021 Summer data <br />
            Not available yet
          </div>
          <q-separator vertical />
          <highcharts class="col-3" :options="OM1"></highcharts>
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
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
exporting(Highcharts);
import More from "highcharts/highcharts-more";
More(Highcharts);
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);
import { tempData } from "../siteData/temperature";
import { omData } from "../siteData/om";
import { chlaData } from "../siteData/chla";
// import { firebaseStore } from "boot/firebase";
import csv2json from "csvjson-csv2json";

export default {
  data() {
    return {
      Temperature1: tempData.SBTemperature1,
      Chla1: chlaData.SBChla1,
      OM1: omData.TLSBOm1
    };
  },
  mounted() {
    let temp =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTndCzwP6dsadAksOQXXoJCgPCYlxahjEFZzFKGLqi3xK20Jq9m79f_QyAz5w9jR9Ft8U1GYD3fYicy/pub?gid=0&single=true&output=csv";

    let bar =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTndCzwP6dsadAksOQXXoJCgPCYlxahjEFZzFKGLqi3xK20Jq9m79f_QyAz5w9jR9Ft8U1GYD3fYicy/pub?gid=971498666&single=true&output=csv";

    const requestTemp = this.$axios.get(temp);
    const requestBar = this.$axios.get(bar);

    this.$axios.all([requestTemp, requestBar]).then(
      this.$axios.spread((...responses) => {
        const tempData = csv2json(responses[0].data);

        let cacheHHMean = [];
        let cacheHHRange = [];
        let cacheLMMean = [];
        let cacheLMRange = [];

        tempData.map(doc => {
          cacheHHMean.push([parseInt(doc.time), parseFloat(doc.HHMean)]);
          cacheHHRange.push([
            parseInt(doc.time),
            parseFloat(doc.HHMin),
            parseFloat(doc.HHMax)
          ]);
          cacheLMMean.push([parseInt(doc.time), parseFloat(doc.LMMean)]);
          cacheLMRange.push([
            parseInt(doc.time),
            parseFloat(doc.LMMin),
            parseFloat(doc.LMMax)
          ]);
        });
        this.Temperature1.series[0].data = cacheHHMean;
        this.Temperature1.series[1].data = cacheHHRange;
        this.Temperature1.series[2].data = cacheLMMean;
        this.Temperature1.series[3].data = cacheLMRange;

        const barData = csv2json(responses[1].data);

        let cacheChla = [];
        barData.map(doc => {
          cacheChla.push([[doc.commonx].toString(), parseFloat([doc.chla])]);
        });
        this.Chla1.series[0].data = cacheChla;

        let cacheOM = [];
        barData.map(doc => {
          cacheOM.push([[doc.commonx].toString(), parseFloat([doc.om])]);
        });
        this.OM1.series[0].data = cacheOM;
      })
    );
    // firebaseStore
    //   .collection("starfishBay")
    //   .doc("2020winter")
    //   .collection("phy")
    //   .doc("temp")
    //   .get()
    //   .then(doc => {
    //     const dataArr = Object.entries(doc.data()); // leng 2: HH & LM

    //     const HHMean = dataArr[0][1].average; // obj
    //     const HHMeanArr = Object.values(HHMean); // array
    //     let cacheHHMean = [];
    //     for (var i = 0; i < HHMeanArr.length; i++) {
    //       cacheHHMean.push([i, HHMeanArr[i]]);
    //     }
    //     this.Temperature1.series[0].data = cacheHHMean;

    //     const HHMaxArr = Object.values(dataArr[0][1].max);
    //     const HHMinArr = Object.values(dataArr[0][1].min);
    //     let cacheHHRange = [];
    //     for (var j = 0; j < HHMaxArr.length; j++) {
    //       cacheHHRange.push([j, HHMaxArr[j], HHMinArr[j]]);
    //     }
    //     this.Temperature1.series[1].data = cacheHHRange;
    //   });
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

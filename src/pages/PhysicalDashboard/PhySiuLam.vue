<template>
  <q-page class="justify-center">
    <q-bar elevated class="bg-blue-9 text-white">
      <div class="text-bold row justify-center">
        Physical dashboard of Siu Lam, Northwestern region
      </div>
      <q-space />
      <q-btn
        dense
        icon="eco"
        color="white"
        text-color="blue-8"
        to="/interactiveHabitat/*"
      >
        <q-tooltip>
          Switch to Biological dashboard
        </q-tooltip>
      </q-btn>
      <q-btn
        dense
        icon="keyboard_backspace"
        class="bg-white text-blue-8"
        to="/interactiveHabitat/NW"
      >
        <q-tooltip>
          Go back
        </q-tooltip>
      </q-btn>
    </q-bar>
    <div class="page">
      <q-card bordered>
        <div class="text-h5 text-bold row justify-center title">
          Hourly rock temperature throughout a day
          <q-icon
            class="absolute all-pointer-events"
            size="32px"
            name="info"
            color="white"
            style="top: 2px; right: 8px"
          >
            <q-tooltip>
              Please visit the METHODS tab to check out how these measurements
              were made.
            </q-tooltip>
          </q-icon>
        </div>
        <div class="row">
          <div class="col-6 phyTab1">Winter</div>
          <div class="col-6 phyTab2">Summer</div>
        </div>
        <div class="row no-wrap">
          <highcharts class="col-6" :options="Temperature1"></highcharts>
          <q-separator vertical />
          <highcharts class="col-6" :options="Temperature2"></highcharts>
        </div>
      </q-card>

      <q-card bordered>
        <div class="text-h5 text-bold row justify-center title">
          Nutrient levels
          <q-icon
            class="absolute all-pointer-events"
            size="32px"
            name="info"
            color="white"
            style="top: 2px; right: 8px"
          >
            <q-tooltip>
              Please visit the METHODS tab to check out how these measurements
              were made.
            </q-tooltip>
          </q-icon>
        </div>
        <div class="row no-wrap">
          <div class="col-6 text-center text-bold text-blue">
            Chlorophyll <i>a</i>
          </div>
          <q-separator vertical />
          <div class="col-6 text-center text-bold text-blue">
            Organic matter
          </div>
        </div>
        <div class="row">
          <div class="col-3 phyTab1">Winter</div>
          <div class="col-3 phyTab2">Summer</div>
          <div class="col-3 phyTab1">Winter</div>
          <div class="col-3 phyTab2">Summer</div>
        </div>
        <div class="row no-wrap">
          <highcharts class="col-3" :options="Chla1"></highcharts>
          <highcharts class="col-3" :options="Chla2"></highcharts>
          <q-separator vertical />
          <highcharts class="col-3" :options="OM1"></highcharts>
          <highcharts class="col-3" :options="OM2"></highcharts>
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
import csv2json from "csvjson-csv2json";

export default {
  data() {
    return {
      Temperature1: tempData.SBTemperature1,
      Temperature2: tempData.SBTemperature2,
      Chla1: chlaData.NWSLChla1,
      OM1: omData.NWSLOm1,
      Chla2: chlaData.NWSLChla2,
      OM2: omData.NWSLOm2
    };
  },
  mounted() {
    let temp =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzBL5KIVMVQ_dRvjF7mBQaBXZKEyF5HgGawfsrUx8t6x1FjAfc4Ilj2wJs46Gh2Hgj2wl0IV1E7phE/pub?gid=0&single=true&output=csv";

    let bar =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzBL5KIVMVQ_dRvjF7mBQaBXZKEyF5HgGawfsrUx8t6x1FjAfc4Ilj2wJs46Gh2Hgj2wl0IV1E7phE/pub?gid=1343364949&single=true&output=csv";

    const requestTemp = this.$axios.get(temp);
    const requestBar = this.$axios.get(bar);
    const requestTemp21sum = this.$axios.get(temp);
    const requestBar21sum = this.$axios.get(bar);

    this.$axios
      .all([requestTemp, requestBar, requestTemp21sum, requestBar21sum])
      .then(
        this.$axios.spread((...responses) => {
          const tempData = csv2json(responses[0].data);

          let cacheHHMean = [];
          let cacheHHRange = [];
          let cacheLMMean = [];
          let cacheLMRange = [];

          tempData.map(doc => {
            cacheHHMean.push([parseInt(doc.time_20w), parseFloat(doc.HHMean_20w)]);
            cacheHHRange.push([
              parseInt(doc.time_20w),
              parseFloat(doc.HHMin_20w),
              parseFloat(doc.HHMax_20w)
            ]);
            cacheLMMean.push([parseInt(doc.time_20w), parseFloat(doc.LMMean_20w)]);
            cacheLMRange.push([
              parseInt(doc.time_20w),
              parseFloat(doc.LMMin_20w),
              parseFloat(doc.LMMax_20w)
            ]);
          });
          this.Temperature1.series[0].data = cacheHHMean;
          this.Temperature1.series[1].data = cacheHHRange;
          this.Temperature1.series[2].data = cacheLMMean;
          this.Temperature1.series[3].data = cacheLMRange;

          const barData = csv2json(responses[1].data);

          let cacheChla = [];
          barData.map(doc => {
            cacheChla.push([[doc.commonx_20w].toString(), parseFloat([doc.chla_20w])]);
          });
          this.Chla1.series[0].data = cacheChla;

          let cacheOM = [];
          barData.map(doc => {
            cacheOM.push([[doc.commonx_20w].toString(), parseFloat([doc.om_20w])]);
          });
          this.OM1.series[0].data = cacheOM;

          // tempData21sum
          const tempData21sum = csv2json(responses[2].data);

          let cacheHHMean1 = [];
          let cacheHHRange1 = [];
          let cacheLMMean1 = [];
          let cacheLMRange1 = [];

          tempData21sum.map(doc => {
            cacheHHMean1.push([parseInt(doc.time_21s), parseFloat(doc.HHMean_21s)]);
            cacheHHRange1.push([
              parseInt(doc.time_21s),
              parseFloat(doc.HHMin_21s),
              parseFloat(doc.HHMax_21s)
            ]);
            cacheLMMean1.push([parseInt(doc.time_21s), parseFloat(doc.LMMean_21s)]);
            cacheLMRange1.push([
              parseInt(doc.time_21s),
              parseFloat(doc.LMMin_21s),
              parseFloat(doc.LMMax_21s)
            ]);
          });
          this.Temperature2.series[0].data = cacheHHMean1;
          this.Temperature2.series[1].data = cacheHHRange1;
          this.Temperature2.series[2].data = cacheLMMean1;
          this.Temperature2.series[3].data = cacheLMRange1;

          // bar21sum
          const barData1 = csv2json(responses[3].data);

          let cacheChla1 = [];
          barData1.map(doc => {
            cacheChla1.push([[doc.commonx_21s].toString(), parseFloat([doc.chla_21s])]);
          });
          this.Chla2.series[0].data = cacheChla1;

          let cacheOM1 = [];
          barData1.map(doc => {
            cacheOM1.push([[doc.commonx_21s].toString(), parseFloat([doc.om_21s])]);
          });
          this.OM2.series[0].data = cacheOM1;
        })
      );
  }
};
</script>

<style lang="sass" scoped>
.page
  background-color: $grey-6
  padding: 4px
.q-card
  padding: 2px
  margin: 4px
  background-color: white

.title
  background-color: $blue-6
  color: white
</style>
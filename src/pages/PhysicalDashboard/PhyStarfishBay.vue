<template>
  <q-page class="justify-center">
    <q-bar elevated class="bg-blue-9 text-white">
      <div class="text-bold row justify-center">
        Physical Dashboard of Starfish Bay, Tolo Habour Region
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
// import { tempData } from "../siteData/temperature";
import { omData } from "../siteData/om";
import { chlaData } from "../siteData/chla";
import { firebaseStore } from "boot/firebase";

export default {
  data() {
    return {
      Temperature1: {
        chart: {
          height: "35%"
        },
        credits: {
          enabled: false
        },
        title: {
          text: ""
        },
        subtitle: {
          text: ""
        },
        xAxis: {
          type: "time",
          title: {
            text: "Time (hour)"
          },
          accessibility: {
            rangeDescription: "Range: 0-24 h."
          }
        },
        yAxis: {
          title: {
            text: "Temperature"
          },
          labels: {
            formatter: function() {
              return this.value + "°C";
            }
          }
        },
        tooltip: {
          crosshairs: true,
          shared: true,
          valueSuffix: "°C"
        },
        legend: {
          layout: "proximate",
          align: "right",
          verticalAlign: "middle"
        },
        series: [
          {
            name: "HH Temperature",
            color: "#D67E32",
            data: [],
            zIndex: 1,
            marker: {
              enabled: false,
              lineWidth: 2
            }
          },
          {
            name: "HH Range",
            color: "#F8C762",
            data: [],
            type: "arearange",
            lineWidth: 0,
            linkedTo: ":previous",
            fillOpacity: 0.3,
            zIndex: 0,
            marker: {
              enabled: false
            }
          },
          {
            name: "LM Temperature",
            color: "#11B678",
            data: [
              [0, 22.26],
              [1, 21.74],
              [2, 21.15],
              [3, 20.22],
              [4, 19.31],
              [5, 18.43],
              [6, 17.69],
              [7, 17.07],
              [8, 17.06],
              [9, 17.63],
              [10, 18.57],
              [11, 20.41],
              [12, 18.63],
              [13, 18.98],
              [14, 18.8],
              [15, 18.26],
              [16, 18.35],
              [17, 19.31],
              [18, 19.54],
              [19, 19.59],
              [20, 19.72],
              [21, 19.76],
              [22, 19.76],
              [23, 19.72]
            ],
            zIndex: 1,
            marker: {
              enabled: false,
              lineWidth: 2
            }
          },
          {
            name: "LM Range",
            color: "#7FDCB9",
            data: [
              [0, 21.5, 23.17],
              [1, 20.5, 22.83],
              [2, 19.33, 22.33],
              [3, 18.17, 22],
              [4, 16.67, 21.67],
              [5, 15.83, 21.5],
              [6, 15.33, 21.17],
              [7, 14.83, 19.17],
              [8, 14.83, 19],
              [9, 15.17, 19.83],
              [10, 15.5, 21.5],
              [11, 16.33, 23.33],
              [12, 0, 23],
              [13, 0, 24],
              [14, 0, 25],
              [15, 0, 22.83],
              [16, 0, 22],
              [17, 0, 23.33],
              [18, 0, 23.5],
              [19, 0, 23.5],
              [20, 0, 23.5],
              [21, 0, 23.5],
              [22, 0, 23.33],
              [23, 0, 23.17]
            ],
            type: "arearange",
            lineWidth: 0,
            linkedTo: ":previous",
            fillOpacity: 0.3,
            zIndex: 0,
            marker: {
              enabled: false
            }
          }
        ]
      },
      Chla1: chlaData.SBChla1,
      OM1: omData.SBOm1
    };
  },
  mounted() {
    firebaseStore
      .collection("starfishBay")
      .doc("2020winter")
      .collection("phy")
      .doc("temp")
      .get()
      .then(doc => {
        const dataArr = Object.entries(doc.data()); // leng 2: HH & LM

        const HHMean = dataArr[0][1].average; // obj
        const HHMeanArr = Object.values(HHMean); // array
        let cacheHHMean = [];
        for (var i = 0; i < HHMeanArr.length; i++) {
          cacheHHMean.push([i, HHMeanArr[i]]);
        }
        this.Temperature1.series[0].data = cacheHHMean;

        const HHMaxArr = Object.values(dataArr[0][1].max);
        const HHMinArr = Object.values(dataArr[0][1].min);
        let cacheHHRange = [];
        for (var j = 0; j < HHMaxArr.length; j++) {
          cacheHHRange.push([j, HHMaxArr[j], HHMinArr[j]]);
        }
        this.Temperature1.series[1].data = cacheHHRange;
      });
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

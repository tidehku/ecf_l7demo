<template>
  <q-page>
    <div class="row justify-center no-wrap">
      <q-card
        bordered
        class="col-3 temperature"
      >
        <div class="text-h5 text-bold row justify-center title">
          Temperature
        </div>
        <highcharts :options="chart1"></highcharts>
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
            <div class="text-h5 text-bold row justify-center">Starfish Bay</div>
            <p>
              <b>Region:</b> Tolo Harbour <br />
              <b>GPS:</b> 22°26'10.5"N 114°14'49.5"E <br />
              <b>Tidal range:</b> Survey area ranges from a Low of 1.28 m to a high of 3.00 m above Chart Datum. <br />
              <b>Transect length:</b> 14 m <br />
              <b>Shore exposure:</b> Biologically defined as sheltered to intermediate. <br />
              <b>Aspect:</b> North. <br />
              <b>Slope:</b> <br />
              <b>Rock type:</b> Predominantly igneous rock composed of homogeneous and equigranular granite (CEDD, 2006). <br />
              <b>Feasibility:</b> When assessing this site’s suitability, It was determined to be moderately susceptible to vessel traffic and of low susceptibility to sand inundation and human disturbance. As a result, the site poses a low safety risk from oncoming wave action. <br />
            </p>

          </q-card-section>

          <q-card-section class="col-6 q-px-sm q-gutter-sm">
            <q-img
              height="200px"
              src="~assets/SiteImage/StarfishBay.png"
            />

            <l-map
              :zoom="10.6"
              :center="center"
              :options="mapOptions"
              class="l-map"
              style="height: 200px; width: 100%"
            >
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              />
              <l-marker :lat-lng="[22.436252, 114.247089]"></l-marker>
            </l-map>
          </q-card-section>
        </div>
      </q-card>

      <q-card
        bordered
        class="col-3 waveFetch"
      >
        <div class="text-h5 text-bold row justify-center title">
          Wave Fetch
        </div>
        <highcharts :options="chartOptions1"></highcharts>
        <highcharts :options="chartOptions2"></highcharts>
      </q-card>
    </div>
    <div class="row justify-center">
      <q-card
        bordered
        class="bottomcard"
      >
        <div class="text-h5 text-bold row justify-center title">
          Nutrient Levels
        </div>

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
  </q-page>
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
      SiteIntro: `Region: Tolo Harbour.
      GPS: 22°26'10.5"N 114°14'49.5"E
      Tidal range: Survey area ranges from a Low of 1.28 m to a high of 3.00 m above Chart Datum.
      Transect length: 14 m
      Shore exposure: Biologically defined as sheltered to intermediate. 
      Aspect: North.
      Slope:
      Rock type: Predominantly igneous rock composed of homogeneous and equigranular granite (CEDD, 2006).
      Feasibility: When assessing this site’s suitability, It was determined to be moderately susceptible to vessel traffic and of low susceptibility to sand inundation and human disturbance. As a result, the site poses a low safety risk from oncoming wave action.
      `,
      center: L.latLng(22.436252, 114.247089),
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
      chart1: {
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
          text: "Winter Mean Temperature",
        },
        yAxis: {
          title: {
            text: "Temperature",
          },
          labels: {
            formatter: function () {
              return this.value + "°";
            },
          },
        },
        series: [
          {
            showInLegend: false,
            name: "HH",
            data: [
              16.68333333,
              16.03333333,
              15.6,
              15.26666667,
              15.05,
              14.75,
              14.6,
              14.33333333,
              15.08333333,
              15.9,
              17.06666667,
              18.26666667,
              17.21666667,
              18.13333333,
              18.71666667,
              18.41666667,
              16.96666667,
              15.91666667,
              14.81666667,
              14.33333333,
              14.2,
              14.13333333,
              14.51666667,
              14.88333333,
            ],
          },
          {
            name: "LM",
            showInLegend: false,
            marker: {
              symbol: "diamond",
            },
            data: [
              20.01666667,
              19.36666667,
              18.85,
              17.95,
              17.05,
              16.35,
              15.75,
              15.1,
              15.41666667,
              16,
              17.16666667,
              18.98333334,
              16.73333334,
              17.18333333,
              16.7,
              16.41666667,
              16.71666667,
              17.61666667,
              17.6,
              17.68333333,
              17.76666667,
              17.78333333,
              17.75,
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="sass">
.q-select
  padding: 15px
.q-card
  width: 97%
  background-color: white
.q-page
  background-color: $grey-6
  padding: 4px
.temperature
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
  height: 100%
  border: 8px solid
  border-color: $indigo-4
</style>

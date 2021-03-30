<template>
  <q-page>
    <div class="row justify-center no-wrap">
      <q-card
        bordered
        class="temperature"
        style="width:30%"
      >
        <div class="text-h5 text-bold row justify-center title">
          Temperature
        </div>
        <highcharts :options="Temperature1"></highcharts>
        <highcharts :options="Temperature2"></highcharts>
      </q-card>

      <q-card
        bordered
        class="bg-indigo-1 maincard"
        style="width:45%"
      >
        <div class="row">
          <q-card-section class="col-4 q-px-sm q-gutter-sm">
            <q-img
              height="160px"
              src="~assets/SiteImage/StarfishBay.png"
            />

            <l-map
              :zoom="10.6"
              :center="center"
              :options="mapOptions"
              class="l-map"
              style="height: 160px; width: 100%"
            >
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              />
              <l-marker :lat-lng="[22.436252, 114.247089]"></l-marker>
            </l-map>
          </q-card-section>
          <q-card-section
            vertical
            class="col-8"
          >
            <div class="text-h5 text-bold text-indigo">Tolo Habour | Starfish Bay</div>
            <p>
              <!-- <b>GPS:</b> 22°26'10.5"N 114°14'49.5"E <br /> -->
              <b>Tidal range:</b> Survey area ranges from a Low of 1.28 m to a
              high of 3.00 m above Chart Datum. <br />
              <b>Transect length:</b> 14 m <br />
              <b>Shore exposure:</b> Biologically defined as sheltered to
              intermediate. <br />
              <b>Aspect:</b> North. <br />
              <!-- <b>Slope:</b> <br /> -->
              <b>Rock type:</b> Predominantly igneous rock composed of
              homogeneous and equigranular granite. <br />
              <b>Feasibility:</b> When assessing this site’s suitability, it was
              determined to be moderately susceptible to vessel traffic and of
              low susceptibility to sand inundation and human disturbance. As a
              result, the site poses a low safety risk from oncoming wave
              action. <br />
            </p>
          </q-card-section>
        </div>
      </q-card>

      <q-card
        bordered
        class="col-3 waveFetch"
        style="width:25%"
      >
        <div class="text-h5 text-bold row justify-center title">Wave Fetch</div>
        <highcharts :options="WaveFetch1"></highcharts>
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
            :options="Chla1"
          ></highcharts>
          <highcharts
            class="col-3"
            :options="Chla1"
          ></highcharts>
          <q-separator vertical />
          <highcharts
            class="col-3"
            :options="OM1"
          ></highcharts>
          <highcharts
            class="col-3"
            :options="OM1"
          ></highcharts>
        </q-card-section>
      </q-card>
    </div>
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
import { waveData } from "./physicalData/wave";
import { omData } from "./physicalData/om";
import { chlaData } from "./physicalData/chla";

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

      Temperature1: tempData.SBTemperature1,
      Temperature2: tempData.SBTemperature2,
      WaveFetch1: waveData.SBWaveFetch1,
      Chla1: chlaData.SBChla1,
      OM1: omData.SBOm1,
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
// .l-map
//   height: 100%
//   border: 8px solid
//   border-color: $indigo-4
</style>

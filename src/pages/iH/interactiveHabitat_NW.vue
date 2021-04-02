<template>
  <q-page class="row q-pa-sm q-gutter-xs justify-center bg-grey-6">
    <q-card
      bordered
      style="width:33%"
    >
      <q-toolbar class="bg-indigo-10 text-h5 text-bold text-white">
        North Western Region
        <q-space />
        <q-separator
          dark
          vertical
          inset
        />
        <q-tabs
          v-model="tab"
          inline-label
          shrink
        >
          <q-tab
            name="Back"
            label="Back"
            icon="keyboard_arrow_left"
            v-go-back="'/interactiveHabitat'"
          >
          </q-tab>
        </q-tabs>
      </q-toolbar>

      <p class="q-pa-sm row">{{ lorem }}</p>
      <q-space />

      <q-card class="q-px-xs">
        <l-map
          style="height: 330px"
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          :max-zoom="zoom"
          :min-zoom="zoom"
        >
          <LTileLayer />
          <l-geo-json
            :geojson="region"
            :options="regionOptions"
          ></l-geo-json>

          <l-geo-json
            :geojson="sitesLocation"
            :options="siteOptions"
          >
          </l-geo-json>

          <l-control-scale
            position="bottomleft"
            :metric="true"
            :imperial="true"
          ></l-control-scale>
        </l-map>
      </q-card>
    </q-card>
    <div style="width:66%">
      <q-card
        class="bg-indigo-1"
        style="width:99%; height:39%"
      >
        <div class="q-px-md bg-indigo-10 text-center text-h6 text-bold text-white shadow-2 rounded-borders">
          Regional Average Data Summary
        </div>
        <div class="row q-pa-sm justify-around">
          <q-card
            class="q-pa-sm"
            style="width:19%; height:40%"
          >
            <div class="q-px-sm text-h7 text-bold"> Average <br /> Nutrient Level </div>
            <div class="row justify-center">
              <div class="q-pa-md text-h2 text-bold text-red"> 123 </div>
            </div>
          </q-card>
          <q-card
            class="q-pa-sm "
            style="width:19%; height:40%"
          >
            <div class="q-px-sm text-h7 text-bold"> Average <br /> Wave Fetch </div>
            <div class="row justify-center">
              <div class="q-pa-md text-h2 text-bold text-red"> 123 </div>
            </div>
          </q-card>
          <q-card
            class="q-pa-sm "
            style="width:19%; height:40%"
          >
            <div class="q-px-sm text-h7 text-bold"> Average <br />Temperature </div>
            <div class="row justify-center">
              <div class="q-pa-md text-h2 text-bold text-red"> 123 </div>
            </div>
          </q-card>
          <q-card
            class="q-pa-sm "
            style="width:19%; height:40%"
          >
            <div class="q-px-sm text-h7 text-bold"> Number of <br />Mobile Species </div>
            <div class="row justify-center">
              <div class="q-pa-md text-h2 text-bold text-red"> 123 </div>
            </div>
          </q-card>
          <q-card
            class="q-pa-sm "
            style="width:19%; height:40%"
          >
            <div class="q-px-sm text-h7 text-bold"> Number of <br />Sessile Species </div>
            <div class="row justify-center">
              <div class="q-pa-md text-h2 text-bold text-red"> 123 </div>
            </div>
          </q-card>
        </div>
      </q-card>
      <div class="row justify-around">
        <q-card
          class="q-pa-xs"
          style="width:24%; height:60"
          v-for="n in 4"
          :key="`y.${n}`"
        >
          <div class="q-pa-sm bg-indigo-9 text-h5 text-bold text-white"> Lung Kwu Tan</div>
          <q-img
            src="~/assets/SiteImage/StarfishBay.png"
            height="200px"
            basic
          />
          <div class="row justify-end">
            <q-btn
              class="q-ma-sm"
              style="align-items: center"
              no-caps
              color="indigo-5"
              label="Learn more"
              @click="card1 = true"
            />
          </div>
        </q-card>
        <q-dialog
          v-model="card1"
          transition-show="flip-down"
          persistent
          full-width
          full-height
        >
          <q-card>
            <q-bar>
              <b>Site Introduction: Tolo Habour | Starfish Bay </b>
              <q-space />
              <q-btn
                dense
                flat
                icon="close"
                v-close-popup
              >
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section
              horizontal
              class="q-pa-md"
            >
              <q-img
                class="q-ma-md"
                height="450px"
                width="900px"
                src="~assets/SiteImage/StarfishBay.png"
              />
              <q-card-section class="text-subtitle1">
                <b>Site Name: </b>Starfish Bay <br />
                <b>Region: </b>Tolo Harbour <br />
                <b>GPS:</b> 22°26'10.5"N 114°14'49.5"E <br />
                <b>Tidal range:</b> Survey area ranges from a Low of 1.28 m to a
                high of 3.00 m above Chart Datum. <br />
                <b>Transect length:</b> 14 m <br />
                <b>Shore exposure:</b> Biologically defined as sheltered to
                intermediate. <br />
                <b>Aspect:</b> North. <br />
                <b>Slope:</b> / <br />
                <b>Rock type:</b> Predominantly igneous rock composed of
                homogeneous and equigranular granite. (CEDD, 2006). <br />
                <b>Feasibility:</b> When assessing this site’s suitability, it was
                determined to be moderately susceptible to vessel traffic and of
                low susceptibility to sand inundation and human disturbance. As a
                result, the site poses a low safety risk from oncoming wave
                action. <br />

                <div class="q-py-lg row justify-around">
                  <q-btn
                    color="indigo-5"
                    label="Go to Physical Dashboard"
                    to="/physicalDashboard/Starfish Bay"
                  />
                  <q-btn
                    color="secondary"
                    label="Go to Biological Dashboard"
                    to="/biologicalDashboard/Starfish Bay"
                  />
                </div>
              </q-card-section>

            </q-card-section>

          </q-card>
        </q-dialog>
      </div>
    </div>

  </q-page>
</template>

<script>
import { LMap, LGeoJson, LControlScale } from "vue2-leaflet";

export default {
  name: "NW",
  components: {
    LMap,
    LGeoJson,
    LControlScale,
    LTileLayer: () => import("components/tileLayer"),
  },
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      card1: false,
      zoom: 10,
      center: L.latLng(22.340890230379372, 113.97214768915284),
      mapOptions: {
        zoomSnap: 0.2,
      },
      sitesLocation: require("../../MapData/NW_Sites.json"),
      siteOptions: {
        style: function style(feature) {
          return {
            color: red,
          };
        },
        onEachFeature: (feature, layer) => {
          layer.on("click", (e) => {
            this.$router.push(`/physicalDashboard`);
          });
        },
      },
      region: require("../../MapData/NW.json"),
      regionOptions: {
        style: function style(feature) {
          return {
            opacity: 0.6,
            color: feature.properties.fill /* refer to json data */,
            fillOpacity: 0.3,
          };
        },
      },
    };
  },
};
</script>

<style lang="sass">
.q-card
  padding: 4px
  margin: 3px
</style>

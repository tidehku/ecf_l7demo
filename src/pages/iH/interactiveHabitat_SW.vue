<template>
  <q-page class="q-pa-xs row justify-center bg-grey-5">
    <div style="width: 33%">
      <q-card
        class="maincard"
        style="height: 80vh"
        bordered
      >
        <q-toolbar class="text-h5 text-bold regiontheme">
          South Western Region
          <q-space />
          <q-separator
            dark
            vertical
            inset
          />
          <q-tabs
            inline-label
            shrink
          >
            <q-tab
              name="Back"
              label="Back"
              icon="keyboard_arrow_left"
              to="/interactiveHabitat"
            >
            </q-tab>
          </q-tabs>
        </q-toolbar>
        <p class="q-pa-sm">{{ lorem }}</p>
        <div class="q-px-xs">
          <l-map
            style="height: 50vh"
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
        </div>
      </q-card>
    </div>
    <div style="width: 66.3%; height: 30vh">
      <q-card
        class="bg-grey-4 maincard"
        style="height: 29vh"
      >
        <div class="text-center text-h6 regiontheme">
          Regional Average Data Summary
        </div>
        <div class="row q-pa-sm justify-evenly">
          <q-card
            class="maincard"
            style="width: 19%; height: 20vh"
          >
            <div class="q-px-sm text-bold">
              Average <br />
              Temperature
            </div>
            <div
              class="text-h2 text-bold text-red center"
              style="col-grow"
            >123</div>
          </q-card>
          <q-card
            class="maincard"
            style="width: 19%; height: 20vh"
          >
            <div class="q-px-sm text-bold">
              Average <br />
              Wave Fetch
            </div>
            <div class="text-h2 text-bold text-red center">123</div>
          </q-card>
          <q-card
            class="maincard"
            style="width: 19%; height: 20vh"
          >
            <div class="q-px-sm text-bold">
              Average <br />
              Nutrient Levels
            </div>
            <div class="text-h2 text-bold text-red center">123</div>
          </q-card>
          <q-card
            class="maincard"
            style="width: 19%; height: 20vh"
          >
            <div class="q-px-sm text-bold">
              Number of <br />Mobile Species
            </div>
            <div class="text-h2 text-bold text-red center">123</div>
          </q-card>
          <q-card
            class="maincard"
            style="width: 19%; height: 20vh"
          >
            <div class="q-px-sm text-bold">
              Number of <br />Sessile Species
            </div>
            <div class="text-h2 text-bold text-red center">123</div>
          </q-card>

        </div>
      </q-card>
      <div class="row justify-around">
        <q-card
          class="q-ma-md maincard"
          style="width: 24%; height: 50vh"
        >
          <div class="q-pa-sm text-h5 text-bold regiontheme">
            Lung Kwu Tan
          </div>
          <q-img
            src="~/assets/SiteImage/StarfishBay.png"
            height="35vh"
            basic
          />
          <div class="row justify-end">
            <q-btn
              class="q-ma-sm regiontheme"
              style="align-items: center"
              no-caps
              label="Learn more"
              @click="card1 = true"
            />
          </div>
        </q-card>
        <q-card
          class="q-ma-md maincard"
          style="width: 24%; height: 50vh"
        >
          <div class="q-pa-sm text-h5 text-bold regiontheme">
            Siu Lam
          </div>
          <q-img
            src="~/assets/SiteImage/StarfishBay.png"
            height="35vh"
            basic
          />
          <div class="row justify-end">
            <q-btn
              class="q-ma-sm regiontheme"
              style="align-items: center"
              no-caps
              label="Learn more"
              @click="card1 = true"
            />
          </div>
        </q-card>
        <q-card
          class="q-ma-md maincard"
          style="width: 24%; height: 50vh"
        >
          <div class="q-pa-sm text-h5 text-bold regiontheme">
            Luk Keng
          </div>
          <q-img
            src="~/assets/SiteImage/StarfishBay.png"
            height="35vh"
            basic
          />
          <div class="row justify-end">
            <q-btn
              class="q-ma-sm regiontheme"
              style="align-items: center"
              no-caps
              label="Learn more"
              @click="card1 = true"
            />
          </div>
        </q-card>
        <q-card
          class="q-ma-md maincard"
          style="width: 24%; height: 50vh"
        >
          <div class="q-pa-sm text-h5 text-bold regiontheme">
            Tai Long Wan
          </div>
          <q-img
            src="~/assets/SiteImage/StarfishBay.png"
            height="35vh"
            basic
          />
          <div class="row justify-end">
            <q-btn
              class="q-ma-sm regiontheme"
              style="align-items: center"
              no-caps
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
                class="col-3"
                height="400px"
                src="~assets/SiteImage/StarfishBay.png"
              />
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_TLSB"
                  separator="cell"
                  dense
                  hide-bottom
                  hide-header
                  :rows-per-page-options="[0]"
                >
                </q-table>

                <div class="q-py-lg row justify-around">
                  <q-btn
                    color="indigo-5"
                    label="Go to Physical Dashboard"
                    to="/physicalDashboard/Starfish Bay"
                  />
                  <q-btn
                    color="teal"
                    label="Go to Biological Dashboard"
                    to="/biologicalDashboard/Starfish Bay"
                  />
                </div>
              </div>
              <q-img
                class="col-3"
                height="400px"
                src="~assets/SiteImage/StarfishBay.png"
              />
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
      siteName: `Starfish Bay`,
      regionName: `Tolo Harbour`,
      GPS: `22°26'10.5"N 114°14'49.5"E`,
      tidalRange: `Survey area ranges from a Low of 1.28 m to a high of 3.00 m above Chart Datum`,
      transectLength: `14 m`,
      shoreExposure: `Sheltered to intermediate`,
      aspect: `North`,
      slope: `/`,
      rockType: `Igneous rock`,
      feasibility: `When assessing this site’s suitability, it was determined to be moderately susceptible to vessel traffic and of 
      low susceptibility to sand inundation and human disturbance. As a result, the site poses a low safety risk from oncoming wave action. `,
      Table_TLSB: [
        {
          name: "Site Name",
          data: "Starfish Bay",
        },
        {
          name: "Region",
          data: "Tolo Harbour",
        },
        {
          name: "GPS",
          data: `22°26'10.5"N 114°14'49.5"E`,
        },
        {
          name: "Tidal Range",
          data:
            "Survey area ranges from a Low of 1.28 m to a high of 3.00 m above Chart Datum.",
        },
        {
          name: "Transect length",
          data: "14 m",
        },
        {
          name: "Shore exposure",
          data: "Biologically defined as sheltered to intermediate",
        },
        {
          name: "Aspect",
          data: "North",
        },
        {
          name: "Slope",
          data: "/",
        },
        {
          name: "Rock type",
          data: `Predominantly igneous rock composed of homogeneous and equigranular granite. (CEDD, 2006).`,
        },
        {
          name: "Feasibility",
          data:
            "When assessing this site’s suitability, it was determined to be moderately susceptible to vessel traffic and of low susceptibility to sand inundation and human disturbance. As a result, the site poses a low safety risk from oncoming wave action.",
        },
      ],
      zoom: 10.4,
      center: L.latLng(22.26, 114.01),
      mapOptions: {
        zoomSnap: 0.2,
      },
      sitesLocation: require("../../MapData/SW_Sites.json"),
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
      region: require("../../MapData/SW.json"),
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

<style lang="sass" scoped>
.maincard
  padding: 4px
  margin: 3px
t
  color: $indigo-5
  font-weight: 900
.regiontheme
  background-color: #4f958d
  color: white
  font-weight: bold
</style>

<template>
  <q-page class="q-pa-xs row justify-center bg-grey-5 no-wrap">
    <q-card class="q-ma-sm" style="width: 33%; height:81vh" bordered>
      <q-toolbar class="bg-indigo-6 text-h5 text-bold text-white">
        Northeastern region
        <q-space />
        <q-separator dark vertical inset />
        <q-tabs inline-label shrink>
          <q-route-tab
            name="Back"
            label="Back"
            icon="keyboard_arrow_left"
            to="/interactiveHabitat"
          >
          </q-route-tab>
        </q-tabs>
      </q-toolbar>
      <div class="q-pa-sm">{{ regionNE }}</div>

      <l-map
        class="map"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        :max-zoom="zoom"
        :min-zoom="zoom"
      >
        <LTileLayer />
        <l-geo-json :geojson="region" :options="regionOptions"></l-geo-json>

        <l-geo-json :geojson="sitesLocation" :options="siteOptions">
        </l-geo-json>

        <l-control-scale
          position="bottomleft"
          :metric="true"
          :imperial="false"
        ></l-control-scale>
      </l-map>
    </q-card>

    <div style="width: 66.3%">
      <q-card class="bg-indigo-1" style="height: 40vh">
        <div
          class="q-px-md bg-indigo-6 text-center text-h6 text-bold text-white rounded-borders"
        >
          Regional average data summary
        </div>
        <div class="row q-py-xs justify-evenly no-wrap">
          <q-card class="q-pa-sm" style="width: 22%; min-height: 32vh">
            <div class="q-px-sm">
              <span class="text-bold text-indigo-4">Max. rock emperature</span>
              <br />
              High shore: <br />
              <h>37.25</h> <b> ± 4.33 ℃</b>
              <div class="row justify-end">
                (n = 4)
              </div>
              Mid shore: <br />
              <h>32.38</h> <b> ± 3.20 ℃</b>
              <div class="row justify-end">
                (n = 4)
              </div>
            </div>
          </q-card>
          <q-card class="q-pa-sm" style="width: 18%">
            <div class="q-px-sm">
              <y>Total wave fetch</y> <br />
              <div class="items-end">
                Max: <br />
                <h>49.59</h> <b> km</b> <br /><br />
                Min: <br />
                <h>15.05</h> <b> km</b>
                <div class="row justify-end">
                  (n = 2)
                </div>
              </div>
            </div>
          </q-card>
          <q-card class="q-pa-sm" style="width: 24%">
            <div class="q-px-sm">
              <y>Nutrient levels</y> <br />
              Chlorophyll <i>a</i>: <br />
              <h>9.41</h> <b> ± 0.78 µg/cm<sup>2</sup></b>
              <div class="row justify-end">
                (n = 4)
              </div>
              Organic matter: <br />
              <h>8.44</h> <b> ± 1.37 mg/cm<sup>2</sup></b>
              <div class="row justify-end">
                (n = 4)
              </div>
            </div>
          </q-card>
          <q-card class="q-pa-sm" style="width: 16%">
            <div class="q-px-sm">
              <y>Mobile species richness</y> <br /><br />
              <div class="items-center">
                Max:<h>25</h> <br /><br />
                Min:<h>14</h>
              </div>
            </div>
          </q-card>
          <q-card class="q-pa-sm" style="width: 16%">
            <div class="q-px-sm">
              <y>Sessile species richness</y> <br /><br />
              <div class="items-center">
                Max:<h>23</h> <br /><br />
                Min:<h>12</h>
              </div>
            </div>
          </q-card>
        </div>
      </q-card>
      <div class="row no-wrap justify-around">
        <q-card class="q-ma-md" style="width: 24%; height: 40vh">
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Double Island
          </div>
          <q-img
            src="~/assets/SiteImage/Double Island.png"
            height="25vh"
            basic
          />
          <div class="row bg-white absolute-bottom">
            <q-icon
              class="q-pa-sm"
              style="font-size: 2.5rem"
              name="img:icons/Semi-exposed.svg"
            />

            <q-space />
            <q-btn
              class="q-ma-sm"
              no-caps
              color="indigo-6"
              label="Learn more"
              @click="card1 = true"
            />
          </div>
        </q-card>
        <q-card class="q-ma-md" style="width: 24%; height: 40vh">
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Kat O
          </div>

          <q-img src="~/assets/SiteImage/Kat O.png" height="25vh" basic></q-img>
          <div class="row bg-white absolute-bottom">
            <q-icon
              class="q-pa-sm"
              style="font-size: 2.5rem"
              name="img:icons/Semi-exposed.svg"
            />
            <q-space />

            <q-btn
              class="q-ma-sm"
              no-caps
              color="indigo-6"
              label="Learn more"
              @click="card2 = true"
            />
          </div>
        </q-card>
        <q-card class="q-ma-md" style="width: 24%; height: 40vh">
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Yung Shue Au
          </div>
          <q-img
            src="~/assets/SiteImage/Yung Shue Au.png"
            height="25vh"
            basic
          />
          <div class="row bg-white absolute-bottom">
            <q-icon
              class="q-pa-sm"
              style="font-size: 2.5rem"
              name="img:icons/Semi-exposed.svg"
            />
            <q-space />
            <q-btn
              class="q-ma-sm"
              no-caps
              color="indigo-6"
              label="Learn more"
              @click="card3 = true"
            />
          </div>
        </q-card>
        <q-card class="q-ma-md" style="width: 24%; height: 40vh">
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Hung Shek Mun
          </div>
          <q-img
            src="~/assets/SiteImage/Hung Shek Mun.png"
            height="25vh"
            basic
          />
          <div class="row bg-white absolute-bottom">
            <q-icon
              class="q-pa-sm"
              style="font-size: 2.5rem"
              name="img:icons/Sheltered.svg"
            />
            <q-space />
            <q-btn
              class="q-ma-sm"
              no-caps
              color="indigo-6"
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
            <q-bar style="height: 40px" class="bg-indigo text-bold">
              <div class="text-indigo-2">Site introduction |</div>
              <div class="text-indigo-1">Northeastern region</div>
              <div class="text-white">>> Double Island</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Double Island.png"
              />
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_NEDI"
                  separator="horizontal"
                  dense
                  hide-bottom
                  hide-header
                  :rows-per-page-options="[0]"
                >
                </q-table>

                <div class="q-py-xl row justify-around">
                  <q-btn
                    color="teal-5"
                    no-caps
                    label="Go to Biological dashboard"
                    to="/interactiveHabitat/biologicalStarfishBay"
                    icon="eco"
                  ></q-btn>
                  <q-btn
                    color="blue-6"
                    no-caps
                    label="Go to Physical dashboard"
                    to="/interactiveHabitat/physicalStarfishBay"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Double Island.png"
              />
            </q-card-section>
          </q-card>
        </q-dialog>
        <q-dialog
          v-model="card2"
          transition-show="flip-down"
          persistent
          full-width
        >
          <q-card>
            <q-bar style="height: 40px" class="bg-indigo text-bold">
              <div class="text-indigo-2">Site introduction |</div>
              <div class="text-indigo-1">Northeastern region</div>
              <div class="text-white">>> Kat O</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Kat O.png"
              />
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_NEKO"
                  separator="horizontal"
                  dense
                  hide-bottom
                  hide-header
                  :rows-per-page-options="[0]"
                >
                </q-table>

                <div class="q-py-xl row justify-around">
                  <q-btn
                    color="teal-5"
                    no-caps
                    label="Go to Biological dashboard"
                    to="/interactiveHabitat/biologicalStarfishBay"
                    icon="eco"
                  ></q-btn>
                  <q-btn
                    color="blue-6"
                    no-caps
                    label="Go to Physical dashboard"
                    to="/interactiveHabitat/physicalStarfishBay"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Kat O.png"
              />
            </q-card-section>
          </q-card>
        </q-dialog>
        <q-dialog
          v-model="card3"
          transition-show="flip-down"
          persistent
          full-width
        >
          <q-card>
            <q-bar style="height: 40px" class="bg-indigo text-bold">
              <div class="text-indigo-2">Site introduction |</div>
              <div class="text-indigo-1">Northeastern region</div>
              <div class="text-white">>> Yung Shue Au</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Yung Shue Au.png"
              />
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_NEYSA"
                  separator="horizontal"
                  dense
                  hide-bottom
                  hide-header
                  :rows-per-page-options="[0]"
                >
                </q-table>

                <div class="q-py-xl row justify-around">
                  <q-btn
                    color="teal-5"
                    no-caps
                    label="Go to Biological dashboard"
                    to="/interactiveHabitat/biologicalStarfishBay"
                    icon="eco"
                  ></q-btn>
                  <q-btn
                    color="blue-6"
                    no-caps
                    label="Go to Physical dashboard"
                    to="/interactiveHabitat/physicalStarfishBay"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Yung Shue Au.png"
              />
            </q-card-section>
          </q-card>
        </q-dialog>
        <q-dialog
          v-model="card4"
          transition-show="flip-down"
          persistent
          full-width
        >
          <q-card>
            <q-bar style="height: 40px" class="bg-indigo text-bold">
              <div class="text-indigo-2">Site introduction |</div>
              <div class="text-indigo-1">Northeastern region</div>
              <div class="text-white">>> Hung Shek Mun</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Hung Shek Mun.png"
              />
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_NEHSM"
                  separator="horizontal"
                  dense
                  hide-bottom
                  hide-header
                  :rows-per-page-options="[0]"
                >
                </q-table>

                <div class="q-py-xl row justify-around">
                  <q-btn
                    color="teal-5"
                    no-caps
                    label="Go to Biological dashboard"
                    to="/interactiveHabitat/biologicalStarfishBay"
                    icon="eco"
                  ></q-btn>
                  <q-btn
                    color="blue-6"
                    no-caps
                    label="Go to Physical dashboard"
                    to="/interactiveHabitat/physicalStarfishBay"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Hung Shek Mun.png"
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
import "leaflet.zoomhome/dist/leaflet.zoomhome.js";

export default {
  name: "NE",
  components: {
    LMap,
    LGeoJson,
    LControlScale,
    LTileLayer: () => import("components/tileLayer")
  },
  data() {
    return {
      card1: false,
      card2: false,
      card3: false,
      card4: false,
      zoom: 10.8,
      center: L.latLng(22.53, 114.32),
      mapOptions: {
        zoomSnap: 0.2,
        zoomControl: false
      },
      sitesLocation: require("../../MapData/NE_Sites.json"),
      siteOptions: {
        style: function style(feature) {
          return {
            color: red
          };
        },
        onEachFeature: (feature, layer) => {
          layer.bindPopup(feature.properties.Site, {
            permanent: true,
            sticky: true,
            direction: "center"
          });
        }
      },
      region: require("../../MapData/NE.json"),
      regionOptions: {
        style: function style(feature) {
          return {
            opacity: 0.6,
            color: feature.properties.fill,
            fillOpacity: 0.3
          };
        }
      }
    };
  },
  computed: {
    regionNE() {
      return this.$store.state.storeText.regionNE;
    },
    Table_NEDI() {
      return this.$store.state.storeRegionTable.Table_NEDI;
    },
    Table_NEKO() {
      return this.$store.state.storeRegionTable.Table_NEKO;
    },
    Table_NEYSA() {
      return this.$store.state.storeRegionTable.Table_NEYSA;
    },
    Table_NEHSM() {
      return this.$store.state.storeRegionTable.Table_NEHSM;
    }
  }
};
</script>

<style lang="sass" scoped>
.q-card
  padding: 4px
  margin: 3px
  display: flex
  flex-direction: column

h
  color: $red-8
  font-size: 24px

y
  font-weight: 600
  color: $indigo-4
.map
  flex: 1
  border: 5px solid white
</style>

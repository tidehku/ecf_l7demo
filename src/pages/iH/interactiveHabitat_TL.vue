<template>
  <q-page class="q-pa-xs row justify-center no-wrap">
    <q-card class="q-ma-sm" style="width: 33%; height:85vh" bordered>
      <q-toolbar class="bg-indigo-6 text-h5 text-bold text-white">
        Tolo Harbour region
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
      <div class="q-pa-md" style="font-size: 1.1rem" align="justify">
        {{ regionTL }}
      </div>

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
      <!-- layout issues here -->
      <landingTL />

      <div class="row no-wrap justify-around">
        <q-card class="q-ma-md" style="width: 24%; height: 35vh">
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Starfish Bay
          </div>
          <q-img
            src="~/assets/SiteImage/Starfish Bay_20winter.png"
            height="25vh"
            basic
          >
            <template v-slot:loading>
              <div class="text-yellow">
                <q-spinner-ios />
                <div class="q-mt-md">Loading...</div>
              </div>
            </template>
          </q-img>
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
        <q-card class="q-ma-md" style="width: 24%; height: 35vh">
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Ma Shi Chau
          </div>
          <q-img
            src="~/assets/SiteImage/Ma Shi Chau_20winter.png"
            height="25vh"
            basic
          >
            <template v-slot:loading>
              <div class="text-yellow">
                <q-spinner-ios />
                <div class="q-mt-md">Loading...</div>
              </div>
            </template>
          </q-img>
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
        <q-card class="q-ma-md" style="width: 24%; height: 35vh">
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Tseng Tau
          </div>

          <q-img src="~/assets/SiteImage/Tseng Tau.png" height="25vh" basic>
            <template v-slot:loading>
              <div class="text-yellow">
                <q-spinner-ios />
                <div class="q-mt-md">Loading...</div>
              </div>
            </template>
          </q-img>
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
              @click="card3 = true"
            />
          </div>
        </q-card>
        <q-card class="q-ma-md" style="width: 24%; height: 35vh">
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Lai Chi Chong
          </div>
          <q-img
            src="~/assets/SiteImage/Lai Chi Chong_20winter.png"
            height="25vh"
            basic
          >
            <template v-slot:loading>
              <div class="text-yellow">
                <q-spinner-ios />
                <div class="q-mt-md">Loading...</div>
              </div>
            </template>
          </q-img>
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
              @click="card4 = true"
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
              <div class="text-indigo-1">Tolo Harbour region</div>
              <div class="text-white">>> Starfish Bay</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Starfish Bay_21winter.png"
              >
                <template v-slot:loading>
                  <div class="text-yellow">
                    <q-spinner-ios />
                    <div class="q-mt-md">Loading...</div>
                  </div>
                </template>
              </q-img>
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_TLSB"
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
                    to="/interactiveHabitat/bioStarfishBay_yr1"
                    icon="eco"
                  ></q-btn>
                  <q-btn
                    color="blue-6"
                    no-caps
                    label="Go to Physical dashboard"
                    to="/interactiveHabitat/phyStarfishBay_yr1"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Starfish Bay_21summer.png"
              >
                <template v-slot:loading>
                  <div class="text-yellow">
                    <q-spinner-ios />
                    <div class="q-mt-md">Loading...</div>
                  </div>
                </template>
              </q-img>
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
              <div class="text-indigo-1">Tolo Harbour region</div>
              <div class="text-white">>> Ma Shi Chau</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Ma Shi Chau_21winter.png"
              >
                <template v-slot:loading>
                  <div class="text-yellow">
                    <q-spinner-ios />
                    <div class="q-mt-md">Loading...</div>
                  </div>
                </template>
              </q-img>
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_TLMSC"
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
                    to="/interactiveHabitat/phyMaShiChau"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Ma Shi Chau_21summer.png"
              >
                <template v-slot:loading>
                  <div class="text-yellow">
                    <q-spinner-ios />
                    <div class="q-mt-md">Loading...</div>
                  </div>
                </template>
              </q-img>
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
              <div class="text-indigo-1">Tolo Harbour region</div>
              <div class="text-white">>> Tseng Tau</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Tseng Tau.png"
              >
                <template v-slot:loading>
                  <div class="text-yellow">
                    <q-spinner-ios />
                    <div class="q-mt-md">Loading...</div>
                  </div>
                </template>
              </q-img>
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_TLTT"
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
                    to="/interactiveHabitat/phyTsengTau"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Tseng Tau_21summer.png"
              >
                <template v-slot:loading>
                  <div class="text-yellow">
                    <q-spinner-ios />
                    <div class="q-mt-md">Loading...</div>
                  </div>
                </template></q-img
              >
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
              <div class="text-indigo-1">Tolo Harbour region</div>
              <div class="text-white">>> Lai Chi Chong</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Lai Chi Chong_21winter.png"
              />
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_TLLCC"
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
                    to="/interactiveHabitat/phyLaiChiChong"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Lai Chi Chong_21summer.png"
              >
                <template v-slot:loading>
                  <div class="text-yellow">
                    <q-spinner-ios />
                    <div class="q-mt-md">Loading...</div>
                  </div>
                </template>
              </q-img>
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
import landingTL from "../../components/landingTL.vue";

export default {
  name: "TL",
  components: {
    LMap,
    LGeoJson,
    LControlScale,
    LTileLayer: () => import("components/tileLayer"),
    landingTL
  },
  data() {
    return {
      card1: false,
      card2: false,
      card3: false,
      card4: false,

      zoom: 11.4,
      center: L.latLng(22.45, 114.25),
      mapOptions: {
        zoomSnap: 0.2,
        zoomControl: false,
        dragging: false
      },
      sitesLocation: require("../../MapData/TL_Sites.json"),
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
      region: require("../../MapData/TL.json"),
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
    regionTL() {
      return this.$store.state.storeText.regionTL;
    },
    Table_TLSB() {
      return this.$store.state.storeRegionTable.Table_TLSB;
    },
    Table_TLMSC() {
      return this.$store.state.storeRegionTable.Table_TLMSC;
    },
    Table_TLTT() {
      return this.$store.state.storeRegionTable.Table_TLTT;
    },
    Table_TLLCC() {
      return this.$store.state.storeRegionTable.Table_TLLCC;
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
</style>

<template>
  <q-page class="q-pa-xs row justify-center no-wrap">
    <q-card class="q-ma-sm" style="width: 33%; height:85vh" bordered>
      <q-toolbar class="bg-indigo-6 text-h5 text-bold text-white">
        Southern region
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
        {{ regionSO }}
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
      <landingSO />

      <div class="row no-wrap justify-around">
        <q-card class="q-ma-md" style="width: 24%; height: 35vh">
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Shek O
          </div>

          <q-img src="~/assets/SiteImage/Shek O.png" height="25vh" basic />
          <div class="row bg-white absolute-bottom">
            <q-icon
              class="q-pa-sm"
              style="font-size: 2.5rem"
              name="img:icons/Exposed.svg"
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
            Wah Fu
          </div>
          <q-img
            src="~/assets/SiteImage/Wah Fu.png"
            height="25vh"
            basic
          ></q-img>
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
            Middle Bay
          </div>

          <q-img src="~/assets/SiteImage/Middle Bay.png" height="25vh" basic />
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
        <q-card class="q-ma-md" style="width: 24%; height: 35vh">
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Tai Tam
          </div>

          <q-img src="~/assets/SiteImage/Tai Tam.png" height="25vh" basic />
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
              <div class="text-indigo-1">Southern region</div>
              <div class="text-white">>> Shek O</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Shek O.png"
              />
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_SOSO"
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
                    to="/interactiveHabitat/phyShekO"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Shek O.png"
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
              <div class="text-indigo-1">Southern region</div>
              <div class="text-white">>> Wah Fu</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Wah Fu.png"
              />
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_SOWF"
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
                    to="/interactiveHabitat/phyWahFu"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Wah Fu.png"
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
              <div class="text-indigo-1">Southern region</div>
              <div class="text-white">>> Middle Bay</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Middle Bay.png"
              />
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_SOMB"
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
                    to="/interactiveHabitat/phyMiddleBay"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Middle Bay.png"
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
              <div class="text-indigo-1">Southern region</div>
              <div class="text-white">>> Tai Tam</div>
              <q-space />
              <q-btn dense flat class="text-white" icon="close" v-close-popup>
                <q-tooltip>Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section horizontal class="q-pa-md">
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Tai Tam.png"
              />
              <div class="col-6 q-px-md">
                <q-table
                  class="siteTable"
                  :data="Table_SOTT"
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
                    to="/interactiveHabitat/phyTaiTam"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Tai Tam.png"
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
import landingSO from "../../components/landingSO.vue";

export default {
  name: "SO",
  components: {
    LMap,
    LGeoJson,
    LControlScale,
    LTileLayer: () => import("components/tileLayer"),
    landingSO
  },
  data() {
    return {
      card1: false,
      card2: false,
      card3: false,
      card4: false,
      zoom: 10.8,
      center: L.latLng(22.23, 114.22),
      mapOptions: {
        zoomSnap: 0.2,
        zoomControl: false,
        dragging: false
      },
      sitesLocation: require("../../MapData/SO_Sites.json"),
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
      region: require("../../MapData/SO.json"),
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
    regionSO() {
      return this.$store.state.storeText.regionSO;
    },
    Table_SOSO() {
      return this.$store.state.storeRegionTable.Table_SOSO;
    },
    Table_SOWF() {
      return this.$store.state.storeRegionTable.Table_SOWF;
    },
    Table_SOMB() {
      return this.$store.state.storeRegionTable.Table_SOMB;
    },
    Table_SOTT() {
      return this.$store.state.storeRegionTable.Table_SOTT;
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

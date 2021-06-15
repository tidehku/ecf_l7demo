<template>
  <q-page class="q-pa-xs row justify-center bg-grey-5 no-wrap">
    <q-card class="q-ma-sm" style="width: 33%; height:81vh" bordered>
      <q-toolbar class="bg-indigo-6 text-h5 text-bold text-white">
        Southern Region
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
      <div class="q-pa-sm">{{ regionSO }}</div>

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
          Regional Average Data Summary
        </div>
        <div class="row q-py-xs justify-evenly no-wrap">
          <q-card class="q-pa-sm" style="width: 22%; min-height: 32vh">
            <div class="q-px-sm">
              <y>Max Temperature</y> <br />
              HH: <br />
              <h>43.00</h> <b> ± 2.52 ℃</b>
              <div class="row justify-end">
                (n = 4)
              </div>
              LM: <br />
              <h>35.83</h> <b> ± 0.76 ℃</b>
              <div class="row justify-end">
                (n = 3)
              </div>
            </div>
          </q-card>
          <q-card class="q-pa-sm" style="width: 18%">
            <div class="q-px-sm">
              <y>Total Wave Fetch</y> <br />
              <div class="items-end">
                Max: <br />
                <h>400.93</h> <b> km</b> <br /><br />
                Min: <br />
                <h>4.61</h> <b> km</b>
                <div class="row justify-end">
                  (n = 4)
                </div>
              </div>
            </div>
          </q-card>
          <q-card class="q-pa-sm" style="width: 24%">
            <div class="q-px-sm">
              <y>Nutrient levels</y> <br />
              chlorophyll a: <br />
              <h>12.78</h> <b> ± 7.25 µg/ cm2</b>
              <div class="row justify-end">
                (n = 4)
              </div>
              Organic matter: <br />
              <h>5.96</h> <b> ± 1.83 g</b>
              <div class="row justify-end">
                (n = 4)
              </div>
            </div>
          </q-card>
          <q-card class="q-pa-sm" style="width: 16%">
            <div class="q-px-sm">
              <y>Mobile Species Richness</y> <br /><br />
              <div class="items-center">
                Max:<h>23</h> <br /><br />
                Min:<h>19</h>
              </div>
            </div>
          </q-card>
          <q-card class="q-pa-sm" style="width: 16%">
            <div class="q-px-sm">
              <y>Sessile Species Richness</y> <br /><br />
              <div class="items-center">
                Max:<h>22</h> <br /><br />
                Min:<h>17</h>
              </div>
            </div>
          </q-card>
        </div>
      </q-card>
      <div class="row no-wrap justify-around">
        <q-card class="q-ma-md" style="width: 24%; height: 40vh">
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
        <q-card class="q-ma-md" style="width: 24%; height: 40vh">
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
        <q-card class="q-ma-md" style="width: 24%; height: 40vh">
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
        <q-card class="q-ma-md" style="width: 24%; height: 40vh">
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
              <div class="text-indigo-2">Site Introduction |</div>
              <div class="text-indigo-1">Southern Region</div>
              <div class="text-white">>> Shek O Site</div>
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
                    label="Go to Biological Dashboard"
                    to="/interactiveHabitat/biologicalStarfishBay"
                    icon="eco"
                  ></q-btn>
                  <q-btn
                    color="blue-6"
                    no-caps
                    label="Go to Physical Dashboard"
                    to="/interactiveHabitat/physicalStarfishBay"
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
              <div class="text-indigo-2">Site Introduction |</div>
              <div class="text-indigo-1">Southern Region</div>
              <div class="text-white">>> Wah Fu Site</div>
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
                    label="Go to Biological Dashboard"
                    to="/interactiveHabitat/biologicalStarfishBay"
                    icon="eco"
                  ></q-btn>
                  <q-btn
                    color="blue-6"
                    no-caps
                    label="Go to Physical Dashboard"
                    to="/interactiveHabitat/physicalStarfishBay"
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
              <div class="text-indigo-2">Site Introduction |</div>
              <div class="text-indigo-1">Southern Region</div>
              <div class="text-white">>> Middle Bay Site</div>
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
                    label="Go to Biological Dashboard"
                    to="/interactiveHabitat/biologicalStarfishBay"
                    icon="eco"
                  ></q-btn>
                  <q-btn
                    color="blue-6"
                    no-caps
                    label="Go to Physical Dashboard"
                    to="/interactiveHabitat/physicalStarfishBay"
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
              <div class="text-indigo-2">Site Introduction |</div>
              <div class="text-indigo-1">Southern Region</div>
              <div class="text-white">>> Tai Tam Site</div>
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
                    label="Go to Biological Dashboard"
                    to="/interactiveHabitat/biologicalStarfishBay"
                    icon="eco"
                  ></q-btn>
                  <q-btn
                    color="blue-6"
                    no-caps
                    label="Go to Physical Dashboard"
                    to="/interactiveHabitat/physicalStarfishBay"
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

export default {
  name: "SO",
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
      zoom: 9.8,
      center: L.latLng(22.23, 114.18),
      mapOptions: {
        zoomSnap: 0.2,
        zoomControl: false
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

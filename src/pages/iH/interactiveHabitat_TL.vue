<template>
  <q-page class="q-pa-xs row justify-center bg-grey-5 no-wrap">
    <q-card
      class="q-ma-sm"
      style="width: 33%; height:81vh"
      bordered
    >
      <q-toolbar class="bg-indigo-6 text-h5 text-bold text-white">
        Tolo Habour Region
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
          <q-route-tab
            name="Back"
            label="Back"
            icon="keyboard_arrow_left"
            to="/interactiveHabitat"
          >
          </q-route-tab>
        </q-tabs>
      </q-toolbar>
      <div class="q-pa-sm">{{ Region }}</div>

      <l-map
        class="map"
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
          :imperial="false"
        ></l-control-scale>
      </l-map>
    </q-card>

    <div style="width: 66.3%">
      <q-card
        class="bg-indigo-1"
        style="height: 40vh"
      >
        <div class="q-px-md bg-indigo-6 text-center text-h6 text-bold text-white rounded-borders">
          Regional Average Data Summary
        </div>
        <div class="row q-py-xs justify-evenly no-wrap">
          <q-card
            class="q-pa-sm"
            style="width: 22%; min-height: 32vh"
          >
            <div class="q-px-sm">
              <y>Max Temperature</y> <br />
              HH: <br />
              <h>35.67</h> <b> ± 6.11 ℃</b>
              <div class="row justify-end">
                (n = 3)
              </div>
              LM: <br />
              <h>33.88</h> <b> ± 4.68 ℃</b>
              <div class="row justify-end">
                (n = 4)
              </div>
            </div>
          </q-card>
          <q-card
            class="q-pa-sm"
            style="width: 18%"
          >
            <div class="q-px-sm">
              <y>Total Wave Fetch</y> <br />
              <div class="items-end">
                Max: <br />
                <h>17.98</h> <b> km</b> <br /><br />
                Min: <br />
                <h>12.31</h> <b> km</b>
                <div class="row justify-end">
                  (n = 2)
                </div>
              </div>
            </div>
          </q-card>
          <q-card
            class="q-pa-sm"
            style="width: 24%"
          >
            <div class="q-px-sm">
              <y>Nutrient levels</y> <br />
              chlorophyll a: <br />
              <h>11.60</h> <b> ± 10.38 µg/ cm2</b>
              <div class="row justify-end">
                (n = 4)
              </div>
              Organic matter: <br />
              <h>14.43</h> <b> ± 8.41 g</b>
              <div class="row justify-end">
                (n = 4)
              </div>
            </div>
          </q-card>
          <q-card
            class="q-pa-sm"
            style="width: 16%"
          >
            <div class="q-px-sm">
              <y>Mobile Species Richness</y> <br /><br />
              <div class="items-center">
                Max:<h>22</h> <br /><br />
                Min:<h>17</h>
              </div>
            </div>
          </q-card>
          <q-card
            class="q-pa-sm"
            style="width: 16%"
          >
            <div class="q-px-sm">
              <y>Sessile Species Richness</y> <br /><br />
              <div class="items-center">
                Max:<h>15</h> <br /><br />
                Min:<h>13</h>
              </div>
            </div>
          </q-card>
        </div>
      </q-card>
      <div class="row no-wrap justify-around">
        <q-card
          class="q-ma-md"
          style="width: 24%; height: 40vh"
        >
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Starfish Bay
          </div>
          <q-img
            src="~/assets/SiteImage/Starfish Bay.png"
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
        <q-card
          class="q-ma-md"
          style="width: 24%; height: 40vh"
        >
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Ma Shi Chau
          </div>
          <q-img
            src="~/assets/SiteImage/Ma Shi Chau.png"
            height="25vh"
            basic
          ></q-img>
          <div class="row bg-white absolute-bottom">
            <q-icon
              class="q-pa-sm"
              style="font-size: 2.5rem"
              name="img:icons/semi-exposed.svg"
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
        <q-card
          class="q-ma-md"
          style="width: 24%; height: 40vh"
        >
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Tseng Tau
          </div>

          <q-img
            src="~/assets/SiteImage/Tseng Tau.png"
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
              @click="card3 = true"
            />
          </div>
        </q-card>
        <q-card
          class="q-ma-md"
          style="width: 24%; height: 40vh"
        >
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Lai Chi Chong
          </div>
          <q-img
            src="~/assets/SiteImage/Lai Chi Chong.png"
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
            <q-bar
              style="height: 40px"
              class="bg-indigo text-bold"
            >
              <div class="text-indigo-2">Site Introduction |</div>
              <div class="text-indigo-1">Tolo Habour Region</div>
              <div class="text-white">>> Starfish Bay Site</div>
              <q-space />
              <q-btn
                dense
                flat
                class="text-white"
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
                height="flex"
                src="~assets/SiteImage/Starfish Bay.png"
              />
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
                    label="Go to Biological Dashboard"
                    to="/interactiveHabitat/bioStarfishBay"
                    icon="eco"
                  ></q-btn>
                  <q-btn
                    color="blue-6"
                    no-caps
                    label="Go to Physical Dashboard"
                    to="/interactiveHabitat/phyStarfishBay"
                    icon="thermostat"
                  ></q-btn>
                </div>
              </div>
              <q-img
                class="col-3"
                height="flex"
                src="~assets/SiteImage/Starfish Bay.png"
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
            <q-bar
              style="height: 40px"
              class="bg-indigo text-bold"
            >
              <div class="text-indigo-2">Site Introduction |</div>
              <div class="text-indigo-1">Tolo Habour Region</div>
              <div class="text-white">>> Ma Shi Chau Site</div>
              <q-space />
              <q-btn
                dense
                flat
                class="text-white"
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
                height="flex"
                src="~assets/SiteImage/Ma Shi Chau.png"
              />
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
                src="~assets/SiteImage/Ma Shi Chau.png"
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
            <q-bar
              style="height: 40px"
              class="bg-indigo text-bold"
            >
              <div class="text-indigo-2">Site Introduction |</div>
              <div class="text-indigo-1">Tolo Habour Region</div>
              <div class="text-white">>> Tseng Tau Site</div>
              <q-space />
              <q-btn
                dense
                flat
                class="text-white"
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
                height="flex"
                src="~assets/SiteImage/Tseng Tau.png"
              />
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
                src="~assets/SiteImage/Tseng Tau.png"
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
            <q-bar
              style="height: 40px"
              class="bg-indigo text-bold"
            >
              <div class="text-indigo-2">Site Introduction |</div>
              <div class="text-indigo-1">Tolo Habour Region</div>
              <div class="text-white">>> Lai Chi Chong Site</div>
              <q-space />
              <q-btn
                dense
                flat
                class="text-white"
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
                height="flex"
                src="~assets/SiteImage/Lai Chi Chong.png"
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
                src="~assets/SiteImage/Lai Chi Chong.png"
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
  name: "EA",
  components: {
    LMap,
    LGeoJson,
    LControlScale,
    LTileLayer: () => import("components/tileLayer"),
  },
  data() {
    return {
      Region:
        "The Tolo (TL) region has weak water circulation due to being located in a sheltered channel with a narrow exit to the open sea.  Historically the high concentration of discharged sewage trapped within the Tolo Harbour had resulted in frequent eutrophication events, which has been alleviated in recent years by better water treatment and sewage management (though red tides and hypoxia are still not uncommon particularly during Mar - Aug).  Coastal rocks are quite soft in the region (e.g. Tseng Tau, Ma Shi Chau), as geologically sandstone/siltstone is common in the Tolo area.",
      card1: false,
      card2: false,
      card3: false,
      card4: false,
      Table_TLSB: [
        {
          name: "Location",
          data: "Sha Tin District, New Territories",
        },
        {
          name: "GPS coordinates",
          data: `22°26'10.5"N, 114°14'49.5"E `,
        },
        {
          name: "Tidal Range",
          data: "1.3 m - 3.0 m + C.D.",
        },
        {
          name: "Transect length",
          data: "14 m",
        },
        {
          name: "Shore exposure",
          data: "Intermediate",
        },
        {
          name: "Maximum wave Force",
          data: "1.09 N",
        },
        {
          name: "Aspect",
          data: "/",
        },
        {
          name: "Slope",
          data: "/",
        },
        {
          name: "Rock type",
          data: "Igneous",
        },
      ],
      Table_TLMSC: [
        {
          name: "Location",
          data: "Tai Po District, New Territories",
        },
        {
          name: "GPS coordinates",
          data: `22°27'25.4"N, 114°14'04.3"E `,
        },
        {
          name: "Tidal Range",
          data: "1.1 m - 3.0 m + C.D.",
        },
        {
          name: "Transect length",
          data: "20 m",
        },
        {
          name: "Shore exposure",
          data: "Sheltered",
        },
        {
          name: "Maximum wave Force",
          data: "/",
        },
        {
          name: "Aspect",
          data: "/",
        },
        {
          name: "Slope",
          data: "/",
        },
        {
          name: "Rock type",
          data: `Sedimentary`,
        },
      ],
      Table_TLTT: [
        {
          name: "Location",
          data: "Tai Po District, New Territories",
        },
        {
          name: "GPS coordinates",
          data: `22°26'00.7"N, 114°16'07.1"E`,
        },
        {
          name: "Tidal Range",
          data: "1.1 m - 2.6 m + C.D.",
        },
        {
          name: "Transect length",
          data: "17 m",
        },
        {
          name: "Shore exposure",
          data: "Sheltered",
        },
        {
          name: "Maximum wave Force",
          data: "1.16 N",
        },
        {
          name: "Aspect",
          data: "/",
        },
        {
          name: "Slope",
          data: "/",
        },
        {
          name: "Rock type",
          data: `Sedimentary`,
        },
      ],
      Table_TLLCC: [
        {
          name: "Location",
          data: "Tai Po District, New Territories",
        },
        {
          name: "GPS coordinates",
          data: `22°27'23.9"N, 114°17'58.0"E`,
        },
        {
          name: "Tidal Range",
          data: "1.2 m - 2.4 m + C.D.",
        },
        {
          name: "Transect length",
          data: "19 m",
        },
        {
          name: "Shore exposure",
          data: "Sheltered",
        },
        {
          name: "Maximum wave Force",
          data: "/",
        },
        {
          name: "Aspect",
          data: "/",
        },
        {
          name: "Slope",
          data: "/",
        },
        {
          name: "Rock type",
          data: `Igneous`,
        },
      ],
      zoom: 11,
      center: L.latLng(22.45, 114.25),
      mapOptions: {
        zoomSnap: 0.2,
        zoomControl: false,
      },
      sitesLocation: require("../../MapData/TL_Sites.json"),
      siteOptions: {
        style: function style(feature) {
          return {
            color: red,
          };
        },
        onEachFeature: (feature, layer) => {
          layer.bindPopup(feature.properties.Site, {
            permanent: true,
            sticky: true,
            direction: "center",
          });
        },
      },
      region: require("../../MapData/TL.json"),
      regionOptions: {
        style: function style(feature) {
          return {
            opacity: 0.6,
            color: feature.properties.fill,
            fillOpacity: 0.3,
          };
        },
      },
    };
  },
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

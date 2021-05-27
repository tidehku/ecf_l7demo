<template>
  <q-page class="q-pa-xs row justify-center bg-grey-5 no-wrap">
    <q-card
      class="q-ma-sm"
      style="width: 33%; height:81vh"
      bordered
    >
      <q-toolbar class="bg-indigo-6 text-h5 text-bold text-white">
        North Eastern Region
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
              <h>37.25</h> <b> ± 4.33 ℃</b>
              <div class="row justify-end">
                (n = 4)
              </div>
              LM: <br />
              <h>32.38</h> <b> ± 3.20 ℃</b>
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
                <h>49.59</h> <b> km</b>
                <br /><br />
                Min: <br />
                <h>15.05</h> <b> km</b>
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
              <h>9.41</h> <b> ± 0.78 µg/ cm2</b>
              <div class="row justify-end">
                (n = 4)
              </div>
              Organic matter: <br />
              <h>8.44</h> <b> ± 1.37 g</b>
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
                Max:<h>25</h> <br /><br />
                Min:<h>14</h>
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
                Max:<h>23</h> <br /><br />
                Min:<h>12</h>
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
            Double Island
          </div>
          <q-img
            src="~/assets/SiteImage/Double Island.png"
            height="25vh"
            basic
          />
          <div class="row bg-white absolute-bottom">
            <q-icon
              style="font-size: 3rem"
              src="icons/favicon-32x32.png"
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
            Kat O
          </div>
          <q-img
            src="~/assets/SiteImage/Kat O.png"
            height="25vh"
            basic
          ></q-img>
          <div class="row bg-white absolute-bottom justify-end">
            <q-btn
              class="q-ma-sm"
              no-caps
              color="indigo-6"
              label="Learn more"
              @click="card2 = true"
            />
          </div>
        </q-card>
        <q-card
          class="q-ma-md"
          style="width: 24%; height: 40vh"
        >
          <div class="q-pa-sm bg-indigo-6 text-h5 text-bold text-white">
            Yung Shue Au
          </div>
          <q-img
            src="~/assets/SiteImage/Yung Shue Au.png"
            height="25vh"
            basic
          />
          <div class="row bg-white absolute-bottom justify-end">
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
            Hung Shek Mun
          </div>
          <q-img
            src="~/assets/SiteImage/Hung Shek Mun.png"
            height="25vh"
            basic
          />
          <div class="row bg-white absolute-bottom justify-end">
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
              <div class="text-indigo-2"> Site Introduction | </div>
              <div class="text-indigo-1"> North Eastern Region </div>
              <div class="text-white"> >> Double Island Site</div>
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
            <q-bar
              style="height: 40px"
              class="bg-indigo text-bold"
            >
              <div class="text-indigo-2"> Site Introduction | </div>
              <div class="text-indigo-1"> North Eastern Region </div>
              <div class="text-white"> >> Kat O Site</div>
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
            <q-bar
              style="height: 40px"
              class="bg-indigo text-bold"
            >
              <div class="text-indigo-2"> Site Introduction | </div>
              <div class="text-indigo-1"> North Eastern Region </div>
              <div class="text-white"> >> Yung Shue Au Site</div>
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
            <q-bar
              style="height: 40px"
              class="bg-indigo text-bold"
            >
              <div class="text-indigo-2"> Site Introduction | </div>
              <div class="text-indigo-1"> North Eastern Region </div>
              <div class="text-white"> >> Hung Shek Mun Site</div>
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
        "The Northeastern (NE) region receives lower wave exposure compared to the Eastern region as it is sheltered by mainland China to the North.  The region generally has good water quality and lower disturbance as it is remote, protected by Geological Park and has low population levels (only a few Hakka villages remaining).  To get to some of our sites in this region we will inevitably need to hire a boat (e.g. Double Island, Kat O) or otherwise undertake a strenuous, long-distance hike (e.g. Yung Shue Au, Hung Shek Mun).  But because of the remoteness, shores in this region support a vast number of species including even corals!",
      card1: false,
      card2: false,
      card3: false,
      card4: false,
      Table_NEDI: [
        {
          name: "Location",
          data: "North district, New Territories",
        },
        {
          name: "GPS coordinates",
          data: `22°31'05.7"N, 114°19'10.4"E`,
        },
        {
          name: "Tidal Range",
          data: "1.1 m - 3.0 m + C.D.",
        },
        {
          name: "Transect length",
          data: "15 m",
        },
        {
          name: "Shore exposure",
          data: "Intermediate",
        },
        {
          name: "Maximum wave Force",
          data: "2.06 N",
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
      Table_NEKO: [
        {
          name: "Location",
          data: "North district, New Territories",
        },
        {
          name: "GPS coordinates",
          data: `22°33'03.7"N, 114°17'50.0"E`,
        },
        {
          name: "Tidal Range",
          data: "1.3 m - 3.4 m + C.D.",
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
      Table_NEYSA: [
        {
          name: "Location",
          data: "North District, New Territories",
        },
        {
          name: "GPS coordinates",
          data: `22°32'58.0"N, 114°14'49.8"E`,
        },
        {
          name: "Tidal Range",
          data: "1.2 m - 3.2 m + C.D.",
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
      Table_NEHSM: [
        {
          name: "Location",
          data: "North district, New Territories",
        },
        {
          name: "GPS coordinates",
          data: `22°30'04.6"N, 114°18'05.1"E`,
        },
        {
          name: "Tidal Range",
          data: "1.1 m - 2.7 m + C.D.",
        },
        {
          name: "Transect length",
          data: "14 m",
        },
        {
          name: "Shore exposure",
          data: "Sheltered",
        },
        {
          name: "Maximum wave Force",
          data: "2.46 N",
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
      zoom: 10.8,
      center: L.latLng(22.53, 114.32),
      mapOptions: {
        zoomSnap: 0.2,
        zoomControl: false,
      },
      sitesLocation: require("../../MapData/NE_Sites.json"),
      siteOptions: {
        style: function style(feature) {
          return {
            color: red,
          };
        },
        onEachFeature: (feature, layer) => {
          // layer.bindPopup("click", (e) => {
          //   this.$router.push(`/physicalDashboard`);
          // });
          // var popup = new L.popup()
          //   .setLatLng(e.latlng)
          //   .setContent(
          //     '<p style="color: grey;">' + feature.properties.name + "</p>"
          //   );
          layer.bindPopup("feature.properties.name", {
            permanent: true,
            sticky: true,
            direction: "center",
          });
        },
      },
      region: require("../../MapData/NE.json"),
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

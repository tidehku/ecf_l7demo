<template>
  <q-page class="q-pa-sm bg-grey-6">
    <div
      class="row justify-center"
      style="height:220px"
    >
      <q-card
        class="col-4 q-pa-xs"
        bordered
        style="width:33%"
      >
        <div class="q-pa-md bg-indigo-10 text-h5 text-bold text-white sitename">
          North Western Region
        </div>
        <p class="q-pa-md row">{{ lorem }}</p>
      </q-card>
      <q-card
        class="q-pa-xs"
        style="width:66%"
      >
        <q-card
          class="bg-indigo-1 row"
          style="width:20%"
        >
          <div class="q-px-md text-h7 text-bold">Nutrient Levels </div>
          <!-- <div class="row justify-center"> -->
          <div class="q-pa-md text-h2 text-bold text-red"> 123 </div>
          <!-- </div> -->
        </q-card>
      </q-card>
      <!-- <div class="q-px-md">
        <q-table
          class="infoTable"
          title="Regional Average Data Summary"
          :data="data"
          separator="cell"
          dense
          bordered
          hide-bottom
          hide-header
          title-class="bolded"
        >
        </q-table>

        <!-- <div class="q-py-md row justify-end">
          <q-btn
            no-caps
            color="indigo-10"
            size="20px"
            v-go-back="'/interactiveHabitat'"
            push
          >
            <q-icon
              center
              name="keyboard_arrow_left"
            />
            Go Back
          </q-btn>
        </div> -->
      <!-- </div> -->
    </div>
    <div class="row justify-center">
      <q-card
        class="q-pa-xs"
        style="width:33%"
      >
        <l-map
          style="height: 300px"
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
      <q-card
        class="q-pa-xs"
        style="width:16.3%"
      >
        <div class="q-pa-sm bg-indigo-9 text-h5 text-bold text-white"> Site Name</div>
        <q-img
          src="~/assets/SiteImage/StarfishBay.png"
          height="200px"
          basic
        />
        <div class="row justify-center">
          <q-btn
            class="q-ma-sm"
            style="align-items: center"
            no-caps
            color="indigo-5"
            label="Learn more"
            to="/physicalDashboard"
          />
        </div>
      </q-card>
      <q-card
        class="q-pa-xs"
        style="width:16.3%"
      >
        <div class="q-pa-sm bg-indigo-9 text-h5 text-bold text-white"> Site Name</div>
        <q-img
          src="~/assets/SiteImage/StarfishBay.png"
          height="200px"
          basic
        />
        <div class="row justify-center">
          <q-btn
            class="q-ma-sm"
            style="align-items: center"
            no-caps
            color="indigo-5"
            label="Learn more"
            to="/physicalDashboard"
          />
        </div>
      </q-card>
      <q-card
        class="q-pa-xs"
        style="width:16.3%"
      >
        <div class="q-pa-sm bg-indigo-9 text-h5 text-bold text-white"> Site Name</div>
        <q-img
          src="~/assets/SiteImage/StarfishBay.png"
          height="200px"
          basic
        />
        <div class="row justify-center">
          <q-btn
            class="q-ma-sm"
            style="align-items: center"
            no-caps
            color="indigo-5"
            label="Learn more"
            to="/physicalDashboard"
          />
        </div>
      </q-card>
      <q-card
        class="q-pa-xs"
        style="width:16.3%"
      >
        <div class="q-pa-sm bg-indigo-9 text-h5 text-bold text-white"> Site Name</div>
        <q-img
          src="~/assets/SiteImage/StarfishBay.png"
          height="200px"
          basic
        />
        <div class="row justify-center">
          <q-btn
            class="q-ma-sm"
            style="align-items: center"
            no-caps
            color="indigo-5"
            label="Learn more"
            to="/physicalDashboard"
          />
        </div>
      </q-card>

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
      data: [
        {
          name: "Nutrient Levels",
          data: "...",
        },
        {
          name: "Average Wave Fetch",
          data: "...",
        },
        {
          name: "Average Temperature",
          data: "...",
        },
        {
          name: "Number of mobile species",
          data: "...",
        },
        {
          name: "Number of Sessile species",
          data: "...",
        },
      ],
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

<style lang="sass" scoped>
.q-card
  width: 98%
  padding: 4px
  margin: 2px
.q-table__top
  background-color: $indigo-10
  color: white
.q-table__title
  font-weight: 500
td:first-child
  background-color: $indigo-1
</style>

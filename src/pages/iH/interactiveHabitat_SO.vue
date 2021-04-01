<template>
  <div class="row q-pa-sm">
    <q-card
      class="col-4 maincard"
      bordered
      dark
    >
      <div class="q-pa-md bg-indigo-10 text-h4 text-bold text-white sitename">
        Southern Region
      </div>
      <p class="q-pa-md row">{{ lorem }}</p>

      <div class="q-px-md">
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

        <div class="q-py-md row justify-end">
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
        </div>
      </div>
    </q-card>

    <div class="col-8">
      <l-map
        style="height: 100%"
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
        <vue-leaflet-minimap
          :layer="minimapLayer"
          :options="miniMapOptions"
        ></vue-leaflet-minimap>
      </l-map>
    </div>
  </div>
</template>

<script>
import VueLeafletMinimap from "vue-leaflet-minimap";
import "leaflet-minimap/dist/Control.MiniMap.min.css";
import { LMap, LGeoJson, LControlScale } from "vue2-leaflet";

export default {
  name: "EA",
  components: {
    LMap,
    LGeoJson,
    LControlScale,
    VueLeafletMinimap,
    LTileLayer: () => import("components/tileLayer"),
  },
  data() {
    return {
      lorem:
        "Habitat Info: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      zoom: 11.0,
      center: L.latLng(22.2523, 114.2132),
      mapOptions: {
        zoomSnap: 0.2,
      },
      sitesLocation: require("../../MapData/SO_Sites.json"),
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
      region: require("../../MapData/SO.json"),
      regionOptions: {
        style: function style(feature) {
          return {
            opacity: 0.6,
            color: feature.properties.fill /* refer to json data */,
            fillOpacity: 0.3,
          };
        },
      },
      minimapLayer: new L.TileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
      ),
      miniMapOptions: {
        position: "bottomright",
        zoomAnimation: true,
        width: 100,
        height: 100,
        toggleDisplay: true,
        minimize: true,
      },
    };
  },
};
</script>

<style lang="sass">
.maincard
  background-color: $blue-grey-5
  .q-table__top
    background-color: $indigo-10
    color: white
  .q-table__title
    font-weight: 500
  td:first-child
    background-color: $indigo-1
</style>

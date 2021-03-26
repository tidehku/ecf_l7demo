<template>
  <div class="row q-px-sm fullScreen">
    <q-card
      class="col-4 bg-blue-grey-5"
      dark
      bordered
    >
      <q-card-section class="bg-indigo-8">
        <div class="q-mx-sm text-h4 text-weight-bold">HK Eastern Sites</div>
      </q-card-section>
      <q-card-section class="q-mx-sm row">
        <p>{{ lorem }}</p>
      </q-card-section>

      <q-card-section>
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

        <div class="q-pa-md row justify-end">

          <q-btn
            no-caps
            color="indigo-8"
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
      </q-card-section>
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
        > </l-geo-json>

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
      zoom: 10.6,
      center: L.latLng(22.32, 114.3883),
      mapOptions: {
        zoomSnap: 0.2,
      },
      sitesLocation: require("../../MapData/EA_Sites.json"),
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
      region: require("../../../EA.json"),
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
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
.infoTable
  /* specifying max-width so the example can
   highlight the sticky column on any browser window */
  .q-table__top
    background-color: $indigo-8
    color: #fff
  .q-table__title
    font-weight: 500
  td:first-child
    background-color: $indigo-1
</style>

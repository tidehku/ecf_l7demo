<template>
  <div class="row q-pa-sm fullScreen">
    <q-card class="col-4 maincard" bordered dark>
      <div class="q-pa-md bg-indigo-10 text-h4 text-bold text-white sitename">
        North Eastern Sites
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
            <q-icon center name="keyboard_arrow_left" />
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
        <l-geo-json :geojson="region" :options="geoJSONOptions"></l-geo-json>

        <l-geo-json :geojson="SitesLocation"> </l-geo-json>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LGeoJson } from "vue2-leaflet";

export default {
  name: "NE",
  components: {
    LMap,
    LGeoJson,
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
      zoom: 11.6,
      center: L.latLng(22.5303, 114.3388),
      mapOptions: {
        zoomSnap: 0.2,
      },
      SitesLocation: require("../../MapData/NE_Sites.json"),
      region: require("../../../NE.json"),
      geoJSONOptions: {
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

<style lang="sass">
.maincard
  background-color: $blue-grey-5
  // border-width: 2px
  // border-color: $indigo-10
  // .infoTable
  .q-table__top
    background-color: $indigo-10
    color: white
  .q-table__title
    font-weight: 500
  td:first-child
    background-color: $indigo-1
</style>
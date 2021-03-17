<template>
  <div class="row q-px-sm">
    <q-card
      class="col-4 bg-blue-grey-5"
      dark
      bordered
    >
      <q-card-section class="bg-blue-10">
        <div class="q-mx-sm text-h4 text-weight-bold">Eastern Sites</div>
      </q-card-section>
      <q-card-section class="q-mx-sm row">
        <p>{{ lorem }}</p>
      </q-card-section>

      <q-card-section>
        <q-table
          class="infoTable"
          title="Regional Summary"
          :data="data"
          :columns="columns"
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
            color="blue-10"
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
          :options="geoJSONOptions"
        ></l-geo-json>

        <l-geo-json :geojson="SitesLocation"> </l-geo-json>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LGeoJson } from "vue2-leaflet";

export default {
  name: "EA",
  components: {
    LMap,
    LGeoJson,
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
      zoom: 10.6,
      center: L.latLng(22.32, 114.3883),
      mapOptions: {
        zoomSnap: 0.2,
      },
      SitesLocation: require("../../MapData/EA_Sites.json"),
      region: require("../../../EA.json"),
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
</style>

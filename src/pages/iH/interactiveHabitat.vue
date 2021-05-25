<template>
  <div class="row q-pa-sm">
    <q-card
      bordered
      dark
      class="col-4 bg-blue-grey-4 q-py-xl maincard"
      style="height: 80vh"
    >
      <q-card class="q-mx-lg q-pa-sm bg-indigo-10 text-h6 text-bold text-center text-white">
        HKRISE! Interactive Habitat Map (2020 - 2023)
      </q-card>

      <q-card class="q-mx-lg row justify-center">
        <p class="q-ma-sm q-pa-sm text-black"> The Hong Kong coastline is stratified into sex zones according to their unique hydrographic characteristics, e.g., salinity and wave action. Four sites, involving two relatively sheltered and two relatively exposed natural rocky shores, are selected in each zone for sampling. Surveys are conducted along six tidal heights for each site, and is repeated over two seasons per year for a two-year period. </p>

        <p class="text-red-10 text-bold">
          ( Hint: Please Click Any Zone for Localized Data )
        </p>
      </q-card>
      <q-icon
        class="absolute-bottom-right"
        size="32px"
        name="info"
        color="white"
        style="top: 2px; right: 8px"
      >
        <q-tooltip>
          Please select on the map which region you would like to explore (see the regional stratification and site selection here).
        </q-tooltip>
      </q-icon>
    </q-card>

    <div class="col-8">
      <l-map
        style="height: 100%"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        ref="myMapRef"
      >
        <LTileLayer />
        <l-geo-json
          :geojson="regions"
          :options="geoJSONOptions"
        > </l-geo-json>

        <l-control-scale
          position="bottomleft"
          :metric="true"
          :imperial="false"
        ></l-control-scale>

        <vue-leaflet-minimap
          :layer="minimapLayer"
          :options="options"
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
  name: "MapGeoJSON",
  components: {
    LMap,
    LGeoJson,
    LTileLayer: () => import("components/tileLayer"),
    LControlScale,
    VueLeafletMinimap,
  },
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      zoom: 10.25,
      maxZoom: 15,
      minZoom: 10.25,
      center: L.latLng(22.3508, 114.2),
      mapOptions: {
        zoomSnap: 0.25,
      },
      regions: require("../../MapData/regions.json"),
      geoJSONOptions: {
        style: function style(feature) {
          return {
            // weight: feature.properties.stroke_width,
            opacity: 0.5,
            color: feature.properties.fill /* refer to json data */,
            fillOpacity: 0.4,
          };
        },
        onEachFeature: (feature, layer) => {
          // /* movehover open popup */
          // layer.on("mouseover", e => {
          //   var popup = new L.popup()
          //     .setLatLng(e.latlng)
          //     .setContent(
          //       '<p style="color: grey;">' + feature.properties.name + "</p>"
          //     )
          //     .openOn(this.$refs.myMapRef.mapObject);
          // });

          /* click on the geojson feature to navigate */
          layer.on("click", () => {
            this.$router.push(`interactiveHabitat/${feature.properties.name}`);
          });
        },
      },
      minimapLayer: new L.TileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
      ),
      options: {
        position: "bottomright",
        zoomAnimation: true,
        width: 120,
        height: 120,
        toggleDisplay: true,
        minimize: true,
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.my-label
  position: absolute
  width: 1000px
  font-size: 20px
</style>

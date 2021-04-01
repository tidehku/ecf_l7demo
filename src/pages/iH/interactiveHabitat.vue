<template>
  <div class="row q-pa-sm">
    <q-card bordered dark class="col-4 bg-blue-grey-4 maincard" height="900px">
      <!-- remove the SWIMS logo -->
      <!-- <div class="q-pa-md row justify-center">
        <q-img
          src="~/assets/SWIMSlogo2.png"
          alt="SWIMs logo"
          style="width: 120px; height: 100%; align: center"
        />
      </div> -->
      <q-card
        class="q-mx-lg q-pa-sm bg-indigo-10 text-h6 text-bold text-center text-white"
      >
        Interactive Habitat Map <br />around Hong Kong Rocky Shore <br />by ECF
        2019-2023
      </q-card>

      <q-card class="q-mx-lg row justify-center">
        <p class="q-ma-sm q-pa-sm text-black">
          {{ lorem }}
        </p>

        <p class="text-red-10 text-bold">
          ( Hint: Please Click Any Zone for Localized Data )
        </p>
      </q-card>
      <div class="q-pa-md row justify-end">
        <q-btn
          no-caps
          class="q-px-md"
          color="indigo-10"
          dense
          v-go-back="'/interactiveHabitat/historical'"
          push
        >
          Switch to Historical Map
        </q-btn>
      </div>
    </q-card>

    <div class="col-8">
      <l-map
        style="height: 100%"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        :bounds="bounds"
        :max-bounds="maxBounds"
        :max-zoom="maxZoom"
        :min-zoom="minZoom"
        ref="myMapRef"
      >
        <LTileLayer />
        <l-geo-json :geojson="regions" :options="geoJSONOptions"> </l-geo-json>

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
      tab: "mails",
      // splitterModel: 20,
      zoom: 10.25,
      maxZoom: 15,
      minZoom: 10.25,
      center: L.latLng(22.3908, 114.1721),
      bounds: L.latLngBounds([
        [22.557533808609336, 113.73082231707503],
        [22.239381865658696, 114.62448168220955],
      ]),
      maxBounds: L.latLngBounds([
        [22.557533808609336, 113.73082231707503],
        [22.239381865658696, 114.62448168220955],
      ]),
      mapOptions: {
        zoomSnap: 0.25,
      },
      SitesLocation: require("../../MapData/SamplingPoints.json"),
      regions: require("../../MapData/regions.json"),
      geoJSONOptions: {
        style: function style(feature) {
          return {
            // weight: feature.properties.stroke_width,
            opacity: 0.6,
            color: feature.properties.fill /* refer to json data */,
            fillOpacity: 0.3,
          };
        },
        onEachFeature: (feature, layer) => {
          layer.on("mouseover", (e) => {
            // console.log(feature.properties.name);

            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent(
                '<p style="color: grey;">' + feature.properties.name + "</p>"
              )
              .openOn(this.$refs.myMapRef.mapObject);
          });

          /* click on the geojson feature to navigate */
          layer.on("click", (e) => {
            // console.log(feature.properties.name);
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
        width: 100,
        height: 90,
        toggleDisplay: true,
        minimize: true,
      },
    };
  },
};
</script>

<style lang="sass" scoped>
</style>
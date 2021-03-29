<template>
  <div class="row q-pa-sm">
    <q-card
      bordered
      dark
      class="col-4 bg-blue-grey-13 maincard"
    >
      <div class="q-pa-md row justify-center">
        <q-img
          src="~/assets/SWIMSlogo2.png"
          alt="SWIMs logo"
          style="width: 120px; height: 100%; align: center"
        />
      </div>
      <q-card class="q-mx-lg q-pa-sm bg-indigo-10 text-h6 text-bold text-center text-white">
        Interactive Habitat Map <br>around Hong Kong Rocky Shore <br />by Historical Records
      </q-card>

      <q-card class="q-mx-lg row justify-center">
        <p class="q-ma-sm q-pa-sm text-black">
          {{ lorem }} </p>

        <p class="text-red-10 text-bold">
          ( Hint: Please Click Any Zone for Localized Data ) </p>
      </q-card>
      <div class="q-pa-md row justify-end">
        <q-btn
          no-caps
          class="q-px-md"
          color="indigo-10"
          dense
          v-go-back="'/interactiveHabitat'"
          push
        >
          Switch to Current Map
        </q-btn>
      </div>
    </q-card>

    <div class="col-8 embed-container">
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          title="Historical Hong Kong Rocky Shore"
          src="//mcmaster.maps.arcgis.com/apps/Embed/index.html?webmap=fd07e00fdd714745b60401832e2a085e&extent=113.7729,22.1911,114.5214,22.5289&zoom=true&previewImage=false&scale=true&legend=true&disable_scroll=true&theme=light">
        </iframe>
      </div>
      <!-- <l-map
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
        <l-geo-json
          :geojson="historicalPoints"
          :options="historicalOptions"
        > </l-geo-json>
        <l-control-scale
          position="topright"
          :metric="true"
          :imperial="false"
        ></l-control-scale>

        <vue-leaflet-minimap
          :layer="minimapLayer"
          :options="options"
        ></vue-leaflet-minimap>
      </l-map> -->
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
      tab: "mails",
      // splitterModel: 20,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      historicalPoints: require("../../MapData/historical1.json"),
      minimapLayer: new L.TileLayer(
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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


<template>
  <div class="row q-pa-sm">
    <div class="col-4">
      <q-card
        dark
        bordered
        class="q-pa-md bg-blue-grey-13 my-card"
      >
        <div class="q-pa-md row justify-center">
          <q-img
            src="~/assets/SWIMSlogo2.png"
            alt="SWIMs logo"
            style="width: 120px; height: 100%; align: center"
          />
        </div>

        <div class="bg-blue-10 text-h6 text-bold text-center text-white">
          WElCOME PAGE
        </div>
        <div class="text-h6 text-bold text-center text-white">
          Interactive Habitat Map<br />Around Hong Kong Rocky Shore<br />Historical
          Data
        </div>

        <div class="q-ma-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quis tempore praesentium illum? Molestiae ipsa repellendus ipsam!
            Quaerat placeat eveniet, quo tempora dolorum, maxime eos odit,
            voluptate aspernatur ipsa.
          </p>
        </div>

        <div class="row justify-center">
          <q-btn
            no-caps
            color="blue-10"
            size="15px"
            push
            style="width: 280px"
          >
            <div class="row items-center no-wrap">
              <q-icon
                center
                name="zoom_in"
              />
              <div class="text-center no-caps">
                Please Select Any Zone<br />for Localized Data
              </div>
            </div>
          </q-btn>
        </div>
        <br /><br /><br />
      </q-card>
    </div>

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
      </l-map>
    </div>

    <!-- <template v-slot:before> -->
    <!-- <q-tabs class="col-1">
        class="bg-blue-grey-13 text-white text-bold shadow-2"
        v-model="tab"
        align="left"
        vertical
        active-color="white"
      >
        <q-route-tab
          text-center
          no-caps
          name="Current"
          label="Current"
          to="/interactiveHabitat"
        />
        <q-route-tab
          text-center
          no-caps
          name="Historical"
          label="Historical"
          to="/interactiveHabitat/historical"
        />
      </q-tabs> -->

    <!-- </template> -->

    <!-- <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="mails">
            <div class="text-h4 q-mb-md">Mails</div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md">Alarms</div>
          </q-tab-panel>
        </q-tab-panels>
      </template> -->

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
      historicalPoints: require("../../MapData/historicalData.json"),
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


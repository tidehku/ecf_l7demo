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
          Interactive Habitat Map<br />Around Hong Kong Rocky Shore<br />by ECF
          2019-2023
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
        </div><br><br><br>
      </q-card>
    </div>

    <div class="col-7">
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
          :geojson="regions"
          :options="geoJSONOptions"
        > </l-geo-json>
      </l-map>
    </div>

    <div class="col-1">

      <!-- <template v-slot:before> -->
        <q-tabs
          class="bg-blue-grey-13 text-white text-bold shadow-2"
          v-model="tab"
          vertical
          active-color="white"
          
        >
          <q-tab
            text-center
            no-caps
            name="Historical"
            label="Historical"
          />
          <q-tab
            text-center
            no-caps
            name="Current"
            label="Current"
          />
        </q-tabs>
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
  </div>
</template>

<script>
import { LMap, LGeoJson } from "vue2-leaflet";

export default {
  name: "MapGeoJSON",
  components: {
    LMap,
    LGeoJson,
    LTileLayer: () => import("components/tileLayer"),
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
    };
  },
};
</script>


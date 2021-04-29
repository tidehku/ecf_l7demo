<template>
  <div class="row q-pa-sm">
    <div class="col-4">
      <q-card
        dark
        bordered
        class="bg-grey-10 my-card"
        style="height: 80vh"
      >
        <div class="q-pa-lg bg-teal-7 text-h5 text-bold text-center text-white">
          Species Search Engine
        </div>
        <q-card-section class="q-ma-md">
          <div class="text-h6 text-bold text-left text-white">
            Family:
          </div>
          <q-input
            dark
            outlined
            dense
            v-model="text"
            :readonly="readonly"
            :disable="disable"
          >
          </q-input>
          <div class="text-h6 text-bold text-left text-white">
            Genus:
          </div>
          <q-input
            dark
            outlined
            dense
            v-model="text"
            :readonly="readonly"
            :disable="disable"
          >
          </q-input>
          <div class="text-h6 text-bold text-left text-white">
            Species:
          </div>
          <q-input
            dark
            outlined
            dense
            v-model="text"
            :readonly="readonly"
            :disable="disable"
          >
          </q-input>
        </q-card-section>
        <br><br>

        <div class="row justify-center">
          <q-btn
            no-caps
            color="teal-7"
            size="15px"
            push
            style="width: 150px"
          >
            <div class="row items-center no-wrap">
              <q-icon
                center
                name="search"
              />
              <div class="text-center no-caps">
                Search
              </div>
            </div>
          </q-btn>

        </div><br><br><br>
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
          :geojson="regions"
          :options="geoJSONOptions"
        > </l-geo-json>
      </l-map>
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
      zoom: 10.25,
      maxZoom: 15,
      minZoom: 10.25,
      center: L.latLng(22.3508, 114.1721),
      // bounds: L.latLngBounds([
      //   [22.557533808609336, 113.73082231707503],
      //   [22.239381865658696, 114.62448168220955],
      // ]),
      // maxBounds: L.latLngBounds([
      //   [22.557533808609336, 113.73082231707503],
      //   [22.239381865658696, 114.62448168220955],
      // ]),
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


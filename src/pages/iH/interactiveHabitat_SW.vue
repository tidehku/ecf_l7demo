<template>
  <div class="q-pa-xs">
    <div class="flex flex-center column">
      <div
        id="parent"
        class="full-width row inline wrap justify-start items-start content-start"
        style="overflow: hidden"
      >
        <div id="sidebar" class="col-4 bg-grey-6" style="overflow: auto">
          <q-card dark bordered class="bg-blue-grey-13 my-card">
            <q-separator dark inset />
            <div class="q-mx-sm">
              <h4><b>SouthWestern Sites</b></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quis tempore praesentium illum? Molestiae ipsa repellendus
                ipsam! Quaerat placeat eveniet, quo tempora dolorum, maxime eos
                odit, voluptate aspernatur assumenda ipsa.
              </p>
            </div>

            <div class="q-pa-sm">
              <q-markup-table :separator="vertical" bordered>
                <tbody class="bg-white">
                  <tr>
                    <td class="text-left">Nutrient Levels</td>
                    <td class="text-right">...</td>
                  </tr>
                  <tr>
                    <td class="text-left">Average Wave Fetch</td>
                    <td class="text-right">...</td>
                  </tr>
                  <tr>
                    <td class="text-left">Average Temperature</td>
                    <td class="text-right">...</td>
                  </tr>
                  <tr>
                    <td class="text-left">Number of Species of fauna</td>
                    <td class="text-right">...</td>
                  </tr>
                  <tr>
                    <td class="text-left">Number of Species of flora</td>
                    <td class="text-right">...</td>
                  </tr>
                </tbody>
              </q-markup-table>
            </div>
            <div class="row justify-center">
              <q-btn no-caps color="blue-10" size="20px" push>
                <div class="row items-center no-wrap">
                  <q-icon center name="backup_table" />
                  <div class="text-center no-caps">Go to Dashboard</div>
                </div>
              </q-btn>
            </div>

            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>

        <div class="col-8 bg-grey-6" style="overflow: auto">
          <div class="map">
            <l-map
              style="height: 480px; width: 100%"
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              :bounds="bounds"
              :max-bounds="maxBounds"
              :max-zoom="maxZoom"
              :min-zoom="minZoom"
            >
              <l-tile-layer :url="url" :attribution="attribution" />
              <l-geo-json
                :geojson="geojson"
                :color="geojson.color"
                :options="geoJSONOptions"
              />
            </l-map>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6"></div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LGeoJson } from "vue2-leaflet";

export default {
  name: "MapGeoJSON",
  components: { LMap, LTileLayer, LGeoJson, LMarker },
  data() {
    return {
      zoom: 11,
      center: L.latLng(22.2656, 114.0133),
      // bounds: L.latLngBounds([
      //   [22.457533808609336, 113.93082231707503],
      //   [22.239381865658696, 114.02448168220955],
      // ]),
      // // maxBounds: L.latLngBounds([
      // //   [22.557533808609336, 113.73082231707503],
      // //   [22.139381865658696, 114.62448168220955],
      // // ]),
      url:
        "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution:
        "Source &copy; Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",
      mapOptions: {
        zoomSnap: 0.2,
      },
      geojson: require("../../../SW.json"),
      // popupName: 11,
      // geoJSONOptions: {
      //   style: function style(feature) {
      //     return {
      //       weight: 4,
      //       opacity: 0.5,
      //       color: "red",
      //       fillOpacity: 0.2,
      //     };
      //   },
      // },
    };
  },
};
</script>
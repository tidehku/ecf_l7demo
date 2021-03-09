<template>
  <div class="row q-px-sm">
    <div
      id="sidebar"
      class="col-4 bg-grey-6"
    >
      <q-card
        dark
        bordered
        class="bg-blue-grey-13 my-card"
      >
        <q-separator
          dark
          inset
        />
        <div class="q-mx-sm">
          <h4><b>North Western Sites</b></h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quis tempore praesentium illum? Molestiae ipsa repellendus ipsam!
            Quaerat placeat eveniet, quo tempora dolorum, maxime eos odit,
            voluptate aspernatur assumenda ipsa.
          </p>
        </div>

        <div class="q-pa-sm">
          <q-markup-table
            separator="cell"
            dense
            bordered
          >
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
        <div class="q-pa-sm row justify-center">
          <q-btn
            class="full-width"
            no-caps
            color="blue-10"
            size="20px"
            push
          >
            <div
              dense
              class="row items-center no-wrap"
            >
              <q-icon
                center
                name="backup_table"
              />
              <div class="text-center no-caps">Go to Dashboard</div>
            </div>
          </q-btn>
        </div>
      </q-card>
    </div>

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
  name: "NW",
  components: {
    LMap,
    LGeoJson,
    LTileLayer: () => import("components/tileLayer"),
  },
  data() {
    return {
      zoom: 10.8,
      center: L.latLng(22.340890230379372, 113.97214768915284),
      mapOptions: {
        zoomSnap: 0.2,
      },
      SitesLocation: require("../../MapData/NW_Sites.json"),
      region: require("../../../NW.json"),
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
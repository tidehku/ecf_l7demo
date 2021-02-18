<template>
  <div class="q-pa-xs">
    <div class="flex flex-center column">
      <div
        id="parent"
        class="full-width row inline wrap justify-start items-start content-start"
        style="overflow: hidden;"
      >
        <div
          id="sidebar"
          class="col-4 bg-grey-6"
          style="overflow: auto;"
        >
          <q-card
            dark
            bordered
            class="bg-blue-grey-13 my-card"
          >
            <div class="q-pa-md row justify-center">
              <q-img
                src="~/assets/SWIMSlogo2.png"
                alt="SWIMs logo"
                style="width: 200px; height:100%; align: center"
              />
            </div>

            <div class="bg-blue-10 text-h5 text-bold text-center text-white">
              WElCOME PAGE
            </div>
            <div class="text-h5 text-bold text-center text-white">
              Interactive Habitat Map<br>Around Hong Kong Rocky Shore<br>by ECF 2019-2023
            </div>
            <!-- <q-separator
              dark
              inset
            /> -->
            <div class="q-ma-lg">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis tempore praesentium illum? Molestiae ipsa repellendus ipsam! Quaerat placeat eveniet, quo tempora dolorum, maxime eos odit, voluptate aspernatur assumenda ipsa.</p>
            </div>

            <div class="row justify-center">
              <q-btn
                no-caps
                color="blue-10"
                size="20px"
                push
              >
                <div class="row items-center no-wrap">
                  <q-icon
                    center
                    name="zoom_in"
                  />
                  <div class="text-center no-caps">
                    Please Select Any Zone<br>for Localized Data
                  </div>
                </div>
              </q-btn>
            </div>

            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>

        <div
          class="col-8 bg-grey-6"
          style="overflow: auto;"
        >
          <div class="map">
            <l-map
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              style="height: 600px; width: 100%"
            >
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              />
              <l-geo-json
                :geojson="geojson"
                :color="geojson.color"
              />
              </l-geo-json>
            </l-map>
          </div>
        </div>
      </div>

    </div>

    <div class="col-6">

    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LGeoJson } from "vue2-leaflet";

export default {
  name: "MapGeoJSON",
  components: { LMap, LTileLayer, LGeoJson, LMarker },
  data: function () {
    return {
      mapOptions: {
        zoomSnap: 0.5,
      },
      center: [22.352, 114.15],
      zoom: 10.5,
      url:
        "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution:
        "Source &copy; Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",
      geojson: require("../../regions.json"),
    };
  },
};
</script>

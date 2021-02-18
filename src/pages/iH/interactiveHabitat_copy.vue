<template>
  <div class="q-px-xs">
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
            class="q-py-md bg-blue-grey-13 my-card"
          >
            <div class="q-pa-md row justify-center">
              <q-img
                src="~/assets/SWIMSlogo2.png"
                alt="SWIMs logo"
                style="width: 120px; height:100%; align: center"
              />
            </div>

            <div class="bg-blue-10 text-h6 text-bold text-center text-white">
              WElCOME PAGE
            </div>
            <div class="text-h6 text-bold text-center text-white">
              Interactive Habitat Map<br>Around Hong Kong Rocky Shore<br>by ECF 2019-2023
            </div>
            <!-- <q-separator
              dark
              inset
            /> -->
            <div class="q-ma-sm">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis tempore praesentium illum? Molestiae ipsa repellendus ipsam! Quaerat placeat eveniet, quo tempora dolorum, maxime eos odit, voluptate aspernatur assumenda ipsa.</p>
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
                    Please Select Any Zone<br>for Localized Data
                  </div>
                </div>
              </q-btn>
            </div>
          </q-card>
        </div>

        <div
          class="col-8 bg-grey-6"
          style="overflow: auto"
        >
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
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              />
              <l-geo-json
                :geojson="geojson"
                :color="geojson.color"
                :options="geoJSONOptions"
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
  data() {
    return {
      zoom: 10.25,
      maxZoom: 15,
      minZoom: 10.25,
      center: L.latLng(22.340890230379372, 114.17214768915284),
      bounds: L.latLngBounds([
        [22.557533808609336, 113.73082231707503],
        [22.139381865658696, 114.62448168220955],
      ]),
      maxBounds: L.latLngBounds([
        [22.557533808609336, 113.73082231707503],
        [22.139381865658696, 114.62448168220955],
      ]),
      url:
        "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution:
        "Source &copy; Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",
      mapOptions: {
        zoomSnap: 0.25,
      },
      geojson: require("../../../NW.json"),
      popupName: 11,
      geoJSONOptions: {
        style: function style(feature) {
          return {
            weight: 2,
            opacity: 0.5,
            color: "red",
            fillOpacity: 0.5,
          };
        },
      },
    };
  },
};
</script>

 // popupName: 11,
      // mapOptions: {
      //   style: function style(feature) {
      //     return {
      //       weight: 2,
      //       opacity: 0.5,
      //       color: "white",
      //       fillOpacity: 0.5
      //     };
      //   },   
      // }
      // function getColor()
<template>
  <div class="row q-pa-sm">
    <q-card
      bordered
      dark
      class="col-4 bg-blue-grey-4 q-py-xl maincard"
      style="height: 80vh"
    >
      <q-card
        class="q-mx-lg q-pa-sm bg-indigo-10 text-h6 text-bold text-center text-white"
      >
        Interactive Habitat Map <br />around Hong Kong Rocky Shore <br />by ECF
        2019-2023
      </q-card>

      <q-card class="q-mx-lg row justify-center">
        <p class="q-ma-sm q-pa-sm text-black">{{ lorem }}{{ lorem }}</p>

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
        ref="myMapRef"
      >
        <LTileLayer />

        <!-- region_name marker -->
        <l-geo-json :geojson="regionMarker" :options="regionMarkerOptions">
        </l-geo-json>

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
    VueLeafletMinimap
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
        zoomSnap: 0.25
      },
      regions: require("../../MapData/regions.json"),
      geoJSONOptions: {
        style: function style(feature) {
          return {
            // weight: feature.properties.stroke_width,
            opacity: 0.5,
            color: feature.properties.fill /* refer to json data */,
            fillOpacity: 0.4
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
        }
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
        minimize: true
      },
      regionMarker: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              name: "NE"
            },
            geometry: {
              type: "Point",
              coordinates: [114.32, 22.53]
            }
          },
          {
            type: "Feature",
            properties: {
              name: "TL"
            },
            geometry: {
              type: "Point",
              coordinates: [114.23, 22.44]
            }
          },
          {
            type: "Feature",
            properties: {
              name: "SW"
            },
            geometry: {
              type: "Point",
              coordinates: [113.98, 22.23]
            }
          },
          {
            type: "Feature",
            properties: {
              name: "NW"
            },
            geometry: {
              type: "Point",
              coordinates: [113.92, 22.34]
            }
          },
          {
            type: "Feature",
            properties: {
              name: "EA"
            },
            geometry: {
              type: "Point",
              coordinates: [114.38, 22.30]
            }
          },
          {
            type: "Feature",
            properties: {
              name: "SO"
            },
            geometry: {
              type: "Point",
              coordinates: [114.18, 22.23]
            }
          }
        ]
      },
      regionMarkerOptions: {
        onEachFeature: (feature, layer) => {
          layer.bindTooltip("<div>" + feature.properties.name + "</div>", {
            permanent: true,
            sticky: true,
            direction: "center"
          });
        }
      }
    };
  }
};
</script>

<style lang="sass">
.leaflet-tooltip
  background-color: transparent
  border: transparent
  box-shadow: none
  font-weight: bold
  font-size: 26px
  color: white

.leaflet-pane .leaflet-marker-pane
  display: none
</style>

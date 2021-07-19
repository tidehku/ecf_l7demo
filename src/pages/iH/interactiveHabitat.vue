<template>
  <div class="row q-pa-sm q-gutter-xs no-wrap">
    <q-card style="width: 75vh; height: 105vh">
      <q-img src="~/assets/mapcover.png" style="width: 75vh; height: 105vh" />

      <q-icon
        class="absolute-top-right"
        size="32px"
        name="info"
        color="white"
        style="top: 10px; right: 10px"
      >
        <q-tooltip>
          The coastline of Hong Kong was stratified into six regions according
          to <br />
          local hydrological characteristics and general shore directions.
          Details <br />
          can be found in the METHODS tab.
        </q-tooltip>
      </q-icon>
    </q-card>

    <q-card class="col-8">
      <l-map
        style="height: 100%"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        ref="myMapRef"
      >
        <LTileLayer />

        <l-geo-json :geojson="regions" :options="geoJSONOptions"> </l-geo-json>

        <l-marker
          v-for="item in regionMarker"
          :key="item.properties.name"
          :lat-lng="item.geometry.coordinates"
        >
          <l-icon>
            <div class="text-h4 text-bold text-white">
              {{ item.properties.name }}
            </div>
          </l-icon>
        </l-marker>

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
    </q-card>
  </div>
</template>

<script>
import VueLeafletMinimap from "vue-leaflet-minimap";
import "leaflet-minimap/dist/Control.MiniMap.min.css";
import { LMap, LGeoJson, LMarker, LIcon, LControlScale } from "vue2-leaflet";
import "leaflet.zoomhome/dist/leaflet.zoomhome.js";

export default {
  name: "MapGeoJSON",
  components: {
    LMap,
    LGeoJson,
    LMarker,
    LTileLayer: () => import("components/tileLayer"),
    LControlScale,
    LIcon,
    VueLeafletMinimap
  },
  data() {
    return {
      zoom: 10.25,
      maxZoom: 15,
      minZoom: 10.25,
      center: L.latLng(22.3508, 114.2),
      mapOptions: {
        zoomSnap: 0.25,
        zoomControl: false
      },
      regions: require("../../MapData/regions.json"),
      geoJSONOptions: {
        style: function style(feature) {
          return {
            opacity: 0.5,
            color: feature.properties.fill /* refer to json */,
            fillOpacity: 0.4
          };
        },

        getLabel: function(feature) {
          return feature.properties.name;
        },

        onEachFeature: (feature, layer) => {
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
      markers: [
        {
          id: "TL",
          position: { lat: 22.44, lng: 114.23 },
          draggable: true,
          visible: true
        }
      ],

      regionMarker: [
        {
          type: "Feature",
          properties: {
            name: "NE"
          },
          geometry: {
            type: "Point",
            coordinates: [22.55, 114.32]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "TL"
          },
          geometry: {
            type: "Point",
            coordinates: [22.46, 114.23]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "SW"
          },
          geometry: {
            type: "Point",
            coordinates: [22.25, 113.98]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "NW"
          },
          geometry: {
            type: "Point",
            coordinates: [22.36, 113.92]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "EA"
          },
          geometry: {
            type: "Point",
            coordinates: [22.32, 114.38]
          }
        },
        {
          type: "Feature",
          properties: {
            name: "SO"
          },
          geometry: {
            type: "Point",
            coordinates: [22.25, 114.18]
          }
        }
      ],

      regionMarkerOptions: {
        onEachFeature: (feature, layer) => {
          layer.bindTooltip("<div>" + feature.properties.name + "</div>", {
            permanent: true,
            className: "my-label",
            direction: "center"
          });
        }
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const map = this.$refs.myMapRef.mapObject;
      const zoomHome = L.Control.zoomHome({
        position: "topleft"
      });
      map.addControl(zoomHome);
    });
  }
};
</script>

<style lang="sass" scoped>

.my-label
  background-color: transparent
  border: none
  box-shadow: none
  font-weight: bold
  font-size: 26px
  color: white
.leaflet-marker-pane
  display: none
</style>

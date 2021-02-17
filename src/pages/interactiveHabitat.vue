<template>
  <div class="map">
    <l-map :zoom="zoom" :center="center" style="height: 600px; width: 100%">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-geo-json :geojson="geojson"
      :color="geojson.color"/>
      </l-geo-json>
    </l-map>
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
      center: [22.352, 114.15],
      zoom: 11,
      url:
        "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution:
        "Source &copy; Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",
      geojson: require("../../regions.json"),
      geojson: {
        color: "#e4ce7f",
      },
    };
  },
};
</script>

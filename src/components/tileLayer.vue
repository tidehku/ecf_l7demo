<template>
  <l-tile-layer :url="url" :attribution="attribution" />
</template>

<script>
import { LTileLayer } from "vue2-leaflet";
export default {
  components: { LTileLayer },
  data() {
    return {
      url:
        "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: "Source &copy; Esri and the GIS User Community"
    };
  }
};
</script>

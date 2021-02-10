<template>
  <div>
    <div id="hkmap"></div>
  </div>
</template>


<script>
import { Scene } from "@antv/l7";
import { DrillDownLayer } from "@antv/l7-district";
import { GaodeMap } from "@antv/l7-maps";

export default {
  data() {
    return {};
  },

  mounted() {
    const colors = ["#B8E1FF", "#7DAAFF", "#3D76DD", "#0047A5", "#001D70"];
    const scene = new Scene({
      id: "drillDown",
      map: new GaodeMap({
        center: [116.2825, 39.9],
        pitch: 0,
        style: "blank",
        zoom: 3,
        minZoom: 3,
        maxZoom: 10,
      }),
    });
    scene.on("loaded", () => {
      new DrillDownLayer(scene, {
        data: [],
        viewStart: "Country",
        viewEnd: "City",
        fill: {
          color: {
            field: "NAME_CHN",
            values: colors,
          },
        },
        popup: {
          enable: true,
          Html: (props) => {
            return `<span>${props.NAME_CHN}</span>`;
          },
        },
      });
    });
  },
};
</script>

<style>
</style>



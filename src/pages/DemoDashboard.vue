<template>
  <div>
    <div class="row q-pa-sm justify-center">
      <q-card class="col-3">
        <div class="text-h5 text-bold row justify-center">Temperature</div>
        <highcharts :options="chartOptions"></highcharts>
        <highcharts :options="chartOptions"></highcharts>
      </q-card>
      <q-card class="col-6 q-pa-sm">

        <div class="q-col-gutter-sm row">
          <q-card-section
            vertical
            class="col-6"
          >
            <div class="text-h5 text-bold row justify-center">Site Name</div>
            <q-card-section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quis tempore praesentium illum? Molestiae ipsa repellendus
              ipsam! Quaerat placeat eveniet, quo tempora dolorum, maxime eos
              odit, voluptate aspernatur assumenda ipsa.
              <q-img
                :ratio="16/9"
                src="~assets/placeholder.png"
              />
            </q-card-section>

          </q-card-section>

          <q-card-section class="col-6">
            <l-map
              :zoom="zoom"
              :center="center"
            >
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              />
            </l-map>
          </q-card-section>

        </div>
      </q-card>
      <q-card class="col-3">
        <div class="text-h5 text-bold row justify-center">Wave Fetch</div>
        <highcharts :options="chartOptions"></highcharts>
        <highcharts :options="chartOptions"></highcharts>
      </q-card>
    </div>
    <div class="row q-pa-sm justify-center">
      <q-card class="col-12">
        <div class="text-h5 text-bold row justify-center">Nutrient Levels</div>
        <q-card-section
          horizontal
          class="col-6"
        >
          <highcharts :options="chartOptions"></highcharts>
        </q-card-section>
        <q-card-section
          horizontal
          class="col-6"
        >
          <highcharts :options="chartOptions"></highcharts>
        </q-card-section>
      </q-card>
    </div>
  </div>

</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);

export default {
  components: { LMap, LTileLayer },
  data() {
    return {
      center: L.latLng(22.3908, 114.1721),
      zoom: 10.25,
      url:
        "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: "Source &copy; Esri",

      chartOptions: {
        chart: {
          type: "spline",
          height: (9 / 18) * 100 + "%", // 16:9 ratio
        },
        credits: {
          enabled: false,
        },
        title: {
          text: "Summer",
        },
        series: [
          {
            showInLegend: false,
            data: [10, 0, 8, 2, 6, 4, 5, 5],
          },
        ],
      },
    };
  },
};
</script>

<style lang="sass">
</style>
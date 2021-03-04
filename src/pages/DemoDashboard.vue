<template>
  <div class="row q-pa-sm justify-center">
    <q-card class="col-3">
      <div class="text-h5 text-bold row justify-center">Temperature</div>
      <highcharts :options="chartOptions"></highcharts>
      <highcharts :options="chartOptions"></highcharts>
    </q-card>
    <q-card class="col-6">
      <div class="text-h5 text-bold row justify-center">Site Name</div>
     <div class="col-3 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          quis tempore praesentium illum? Molestiae ipsa repellendus
          ipsam! Quaerat placeat eveniet, quo tempora dolorum, maxime eos
          odit, voluptate aspernatur assumenda ipsa.
        </p>
     </div>
      <div class="col-3 ">
        <img src="~assets/placeholder.png" />
      </div>
    </q-card>
    <q-card class="col-3">
      <div class="text-h5 text-bold row justify-center">Wave Fetch</div>
    </q-card>
  </div>

</template>

<script>
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);

export default {
  data() {
    return {
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
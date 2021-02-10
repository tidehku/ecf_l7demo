<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
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
        },
        title: {
          text: "Entire title",
        },
        series: [
          {
            data: [10, 0, 8, 2, 6, 4, 5, 5],
          },
        ],
      },
      title: "Title",
    };
  },
};
</script>

<style>
</style>
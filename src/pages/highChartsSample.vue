<template>
  <div>
    <highcharts :options="pieOptions"></highcharts>
  </div>
</template>

<script>
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);
import { LineChart } from "./LineChart";

export default {
  data() {
    return {
      pieOptions: LineChart.lineChart1,
    };
  },
};
</script>

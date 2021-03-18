<template>
  <div>
    <highcharts :options="pieOptions"></highcharts>
  </div>
</template>

<script>
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);
import { PieData } from "./chartData";

export default {
  data() {
    return {
      pieOptions: PieData,
    };
  },
};
</script>

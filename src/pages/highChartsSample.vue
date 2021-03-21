<template>
  <div>
    <highcharts :options="pieOptions"></highcharts>
  </div>
</template>

<script>
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);
import { PieChart } from "./PieChart";

export default {
  data() {
    return {
      pieOptions: PieChart,
    };
  },
};
</script>

<template>
  <div>
    <highcharts :options="chartOptions[0]"></highcharts>
    <highcharts :options="chartOptions[1]"></highcharts>
    <button @click="changeData">Change data for first chart</button>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  components: {
    highcharts: Chart
  },
  data() {
    return {
      chartOptions: [
        {
          series: [
            {
              data: [1, 2, 3]
            }
          ]
        },
        {
          series: [
            {
              data: [4, 5, 6]
            }
          ]
        },
      ]
    }
  },
  methods: {
    changeData() {
      this.chartOptions[0].series[0].data = [4, 8, 1];
    }
  }
};
</script>
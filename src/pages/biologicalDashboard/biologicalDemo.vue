<template>
  <q-page class="row q-pa-sm justify-center no-wrap page">
    <q-card class="listName" style="width:33%">
      <div class="text-h5 text-bold row justify-center title">
        List of Species Names
      </div>
      <div class="q-pa-sm q-gutter-sm justify-center row">
        <q-list
          dense
          bordered
          separator
          padding
          class="bg-red-1 rounded-borders"
          style="width: 180px"
        >
          <q-item clickable v-ripple v-for="item in 15" :key="item.message">
            <q-item-section> Species name #{{ item }}</q-item-section>
          </q-item>
        </q-list>

        <q-list
          dense
          bordered
          separator
          padding
          class="bg-red-1 rounded-borders"
          style="width: 180px"
        >
          <q-item clickable v-ripple v-for="item in 15" :key="item.number">
            <q-item-section> Species name #{{ item }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-card>

    <q-card class="col-8 chartCard">
      <div class="text-h5 text-bold row justify-center title">
        Abundance: Pie Chart and Bar Chart
      </div>
      <q-separator />

      <q-card-section horizontal>
        <div class="col-6 row q-pa-xs justify-center">
          <q-badge color="red-5" class="text-white text-bold multi-line"
            >Fauna Species</q-badge
          >
        </div>
        <div class="col-6 row q-pa-xs justify-center">
          <q-badge color="red-5" class="text-white text-bold multi-line"
            >Flora Species</q-badge
          >
        </div>
      </q-card-section>

      <q-card-section horizontal>
        <highcharts class="col-3" :options="pieChart"></highcharts>
        <highcharts class="col-3" :options="pieChart"></highcharts>
        <q-separator vertical />
        <highcharts class="col-3" :options="pieChart"></highcharts>
        <highcharts class="col-3" :options="pieChart"></highcharts>
      </q-card-section>

      <q-card-section horizontal class="row">
        <highcharts class="col-6" :options="barChart"></highcharts>
        <q-separator vertical />
        <highcharts class="col-6" :options="barChart"></highcharts>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);
import { PieChart } from "src/pages/PieChart";
import { BarChart } from "src/pages/BarChart";

export default {
  components: {},
  data() {
    return {
      pieChart: PieChart,
      barChart: BarChart
    };
  }
};
</script>

<style lang="sass" scoped>
.page
  background-color: $grey-6
  padding: 4px
  // height: 98%
.listName
  width: 33%
  padding: 3px
  margin: 4px
.chartCard
  padding: 3px
  margin: 4px
.title
  background-color: $indigo-5
  color: white
</style>

<template>
  <q-page class="row q-pa-sm justify-center no-wrap page">
    <q-card class="width:33% listName">
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
          <q-item
            clickable
            v-ripple
            v-for="item in 15"
            :key="item.message"
          >
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
          <q-item
            clickable
            v-ripple
            v-for="item in 15"
            :key="item.number"
          >
            <q-item-section> Species name #{{ item }}</q-item-section>
          </q-item>

        </q-list>
      </div>
    </q-card>

    <q-card class="col-8 chartCard">
      <div class="text-h5 text-bold row justify-center title">Abundance: Pie Chart and Bar Chart</div>
      <q-separator />

      <q-card-section horizontal>
        <div class="col-6 row q-pa-xs justify-center">
          <q-badge
            color="red-5"
            class="text-white text-bold multi-line"
          >Mobile Species</q-badge>
        </div>
        <div class="col-6 row q-pa-xs justify-center">
          <q-badge
            color="red-5"
            class="text-white text-bold multi-line"
          >Sessile Species</q-badge>
        </div>
      </q-card-section>

      <q-card-section horizontal>
        <highcharts
          class="col-3"
          :options="pieChart1"
        ></highcharts>
        <highcharts
          class="col-3"
          :options="pieChart2"
        ></highcharts>
        <q-separator vertical />
        <highcharts
          class="col-3"
          :options="pieChart3"
        ></highcharts>
        <highcharts
          class="col-3"
          :options="pieChart4"
        ></highcharts>
      </q-card-section>

      <div class="row justify-around">
        <q-badge
          color="red-5"
          class="text-white text-bold multi-line"
        >Shannon's Diversity index H'</q-badge>

        <q-badge
          color="red-5"
          class="text-white text-bold multi-line"
        >Pielou's evenness J</q-badge>

        <q-badge
          color="red-5"
          class="text-white text-bold multi-line"
        >Species richness S</q-badge>
      </div>

      <q-card-section
        horizontal
        class="row"
      >

        <highcharts
          class="col-4"
          :options="barChart1"
        ></highcharts>
        <q-separator vertical />
        <highcharts
          class="col-4"
          :options="barChart2"
        ></highcharts>
        <q-separator vertical />
        <highcharts
          class="col-4"
          :options="barChart3"
        ></highcharts>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);
import { pieData } from "./biologicalData/pie";
import { barData } from "./biologicalData/bar";

export default {
  components: {},
  data() {
    return {
      barChart1: barData.SBBar1,
      barChart2: barData.SBBar2,
      barChart3: barData.SBBar3,

      pieChart1: pieData.SBPie1,
      // pieChart2: pieData.SBPie1,
      // pieChart3: pieData.SBPie1,
      // pieChart4: pieData.SBPie1,
    };
  },
};
</script>

<style lang="sass">
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

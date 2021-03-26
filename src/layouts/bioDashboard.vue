<template>
  <q-layout view="hhh lpR fFf">
    <q-header>
      <q-bar
        class="bg-indigo-8 text-white glossy"
        style="height: 40px"
      >
        <q-avatar size="40px">
          <img src="~assets/swims.png" />
        </q-avatar>
        <q-bar-title class="q-px-md text-h5 text-bold">
          ECF Hong Kong Rocky Shore | Biological Dashboard of xxx Site
        </q-bar-title>
        <q-space />
        <q-btn
          no-caps
          class="text-indigo-8 text-bold switchbutton"
          color="white"
          icon-right="eco"
          label="Switch to Physical Dashboard"
          to="/physicalDashboard"
        />
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          icon="menu"
        />
      </q-bar>
    </q-header>
    <q-drawer
      v-model="drawer"
      side="right"
      overlay
      :width="300"
      :breakpoint="500"
      elevated
      content-class="bg-grey-3"
    >

      <q-list padding>
        <q-item
          clickable
          v-ripple
          to="/interactiveHabitat/historical"
        >
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>

          <q-item-section> Historical Records </q-item-section>
        </q-item>
        <q-separator />

        <q-item
          clickable
          v-ripple
          to="/interactiveHabitat"
        >
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section> ECF Sampling Data </q-item-section>
        </q-item>

        <q-separator /><br>
        <q-card
          bordered
          flat
          class="q-ma-md searchbox"
        >

          <div class="q-py-sm bg-black text-white text-h6 text-bold text-center">Quick Search Link</div>

          <q-select
            filled
            dense
            v-model="model1"
            :options="regionOptions"
            label="Choose Region"
          />

          <q-select
            filled
            dense
            v-model="model2"
            :options="siteOptions"
            label="Choose Site"
          />

          <q-select
            filled
            dense
            v-model="model3"
            :options="dashboardOptions"
            label="Choose Dashboard"
          />
          <div class="row justify-center">
            <q-btn
              no-caps
              dense
              push
              color="black"
              class="text-h6 q-ma-md q-px-md"
              glossy
              label="Search"
            />
          </div>

        </q-card>

        <!-- <q-item  v-for="region in regions">{{ region }}</q-item> -->

      </q-list>

    </q-drawer>

  <q-page-container class="row q-pa-sm justify-center no-wrap page">
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
          >Fauna Species</q-badge>
        </div>
        <div class="col-6 row q-pa-xs justify-center">
          <q-badge
            color="red-5"
            class="text-white text-bold multi-line"
          >Flora Species</q-badge>
        </div>
      </q-card-section>

      <q-card-section horizontal>
        <highcharts
          class="col-3"
          :options="pieChart"
        ></highcharts>
        <highcharts
          class="col-3"
          :options="pieChart"
        ></highcharts>
        <q-separator vertical />
        <highcharts
          class="col-3"
          :options="pieChart"
        ></highcharts>
        <highcharts
          class="col-3"
          :options="pieChart"
        ></highcharts>
      </q-card-section>

      <q-card-section
        horizontal
        class="row"
      >
        <highcharts
          class="col-6"
          :options="barChart"
        ></highcharts>
        <q-separator vertical />
        <highcharts
          class="col-6"
          :options="barChart"
        ></highcharts>

      </q-card-section>
    </q-card>

  </q-page-container>
 </q-layout>
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
      barChart: BarChart,
      drawer: false,
      model1: null,
      model2: null,
      model3: null,
      regionOptions: [
        "North Western",
        "South Western",
        "Southern",
        "Eastern",
        "Tolo Habour",
        "North Eastern Sites",
      ],
      siteOptions: [
        "North Western",
        "South Western",
        "Southern",
        "Eastern",
        "Tolo Habour",
        "North Eastern Sites",
      ],
      dashboardOptions: ["Physical Dashboard", "Biological Dashboard"],
    };
  },
};
</script>

<style lang="sass">
.q-select
  padding: 15px

.searchTitle
  padding: 15px

.q-card
  background-color: white

.searchbox
  border-width: 2px
  border-color: black
  // background-color: $indigo-5
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

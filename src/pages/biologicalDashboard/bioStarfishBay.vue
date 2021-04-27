<template>
  <q-page class="row q-pa-sm justify-center no-wrap page">
    <q-card class="width:33% listName">
      <div class="text-h5 text-bold row justify-center title">
        List of Species Names
      </div>
      <div class="row justify-around">
        <div class="text-indigo-5 text-bold">Mobile species
        </div>
        <div class="text-indigo-5 text-bold">Sessile species
        </div>
      </div>

      <div class="q-pa-sm q-gutter-sm justify-center row">
        <q-list
          dense
          bordered
          separator
          padding
          class="bg-indigo-1 text-caption rounded-borders"
          style="width: 180px"
        >
          <q-item
            clickable
            v-ripple
            v-for="mobile in mobiles"
            :key="mobile.message"
          >
            <q-item-section> <i>{{ mobile }} </i></q-item-section>
          </q-item>
        </q-list>

        <q-list
          dense
          bordered
          separator
          padding
          class="bg-red-1 text-caption rounded-borders"
          style="width: 180px"
        >
          <q-item
            clickable
            v-ripple
            v-for="sessile in sessiles"
            :key="sessile.message"
          >
            <q-item-section> <i>{{ sessile }} </i></q-item-section>
          </q-item>

        </q-list>
      </div>
    </q-card>

    <q-card class="col-8 chartCard">
      <div class="text-h5 text-bold row justify-center title">Species Abundance and Diversity Indices</div>

      <q-card-section horizontal>
        <div class="col-12 row q-pa-xs justify-around">
          <div class="text-indigo-5 text-bold">Mobile species
          </div>
          <div class="text-indigo-5 text-bold">Sessile species
          </div>
        </div>
      </q-card-section>

      <div class="row q-pa-xs justify-around">
        <q-badge
          color="indigo-2"
          class="text-black text-bold multi-line"
        >2020 winter</q-badge>
        <q-badge
          color="indigo-2"
          class="text-black text-bold multi-line"
        >2021 summer</q-badge>
        <q-badge
          color="indigo-2"
          class="text-black text-bold multi-line"
        >2020 winter</q-badge>
        <q-badge
          color="indigo-2"
          class="text-black text-bold multi-line"
        >2021 summer</q-badge>
      </div>

      <q-card-section horizontal>
        <highcharts
          class="col-3"
          :options="pieChart1"
        ></highcharts>
        <div class="col-3 noData">
          Summer data <br /> Not available yet
        </div>
        <q-separator vertical />
        <highcharts
          class="col-3"
          :options="pieChart3"
        ></highcharts>
        <div class="col-3 noData">
          Summer data <br /> Not available yet
        </div>
      </q-card-section>

      <q-separator />
      <div class="row justify-around">
        <div class="text-indigo-5 text-bold">Shannon's Diversity index H'
        </div>
        <div class="text-indigo-5 text-bold">Pielou's evenness J
        </div>
        <div class="text-indigo-5 text-bold">Species richness S
        </div>
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
import { pieData } from "./biologicalData/Pie";
import { barData } from "./biologicalData/bar";

export default {
  components: {},
  data() {
    return {
      mobiles: [
        "Echinolittorin malaccana",
        "Echinolittorin radiata",
        "Echinolittorina vidua",
        "Lunella granulata",
        "Monodonta labio",
        "Patelloida ryukyuensis",
        "Planaxis sulcatus",
        "Reishia clavigera",
        "Reishia luteostoma",
        "Siphonaria japonica",
        "Tenguella musiva",
        "Liolophura japonica",
      ],
      sessiles: [
        "High shore biofilm",
        "Hildenbrandia rubra",
        "Pseudulvella applanata",
        "Ulva lactuca",
        "Gelidium pusillum",
        "Amphibalanus amphitrite",
        "Capitulum mitella",
        "Tetraclita squamosa",
        "Diadumene lineata",
        "Barbatia virescens",
        "Brachidontes variabilis",
        "Isognomon ephippium",
        "Saccostrea cuccullata",
        "Xenostrobus securis",
      ],
      barChart1: barData.SBBar1,
      barChart2: barData.SBBar2,
      barChart3: barData.SBBar3,

      pieChart1: pieData.SBPie1,
      // pieChart2: pieData.SBPie1,
      pieChart3: pieData.SBPie3,
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
.noData
  margin: auto
  text-align: center
  font-weight: bold
  color: $grey-8
  font-size: 16px
</style>

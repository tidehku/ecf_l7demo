<template>
  <q-page class="justify-center">
    <q-bar class="bg-teal-8 text-white">
      <div class="text-bold row justify-center">
        Biological Dashboard of Tai O, North Western Region
      </div>
      <q-space />
      <q-btn
        dense
        icon="thermostat"
        class="bg-white text-teal"
        to="/interactiveHabitat/phyTaiO"
      >
        <q-tooltip>
          Switch to physical Dashboard
        </q-tooltip>
      </q-btn>
      <q-btn
        dense
        icon="keyboard_backspace"
        class="bg-white text-teal"
        to="/interactiveHabitat/NW"
      >
        <q-tooltip>
          Go back
        </q-tooltip>
      </q-btn>
    </q-bar>
    <div class="justify-center page">
      <div class="row no-wrap">
        <q-card class="width:33% listName">
          <div class="text-h5 text-bold row justify-center title">
            List of Species Names
          </div>
          <div class="row no-wrap">
            <div class="col-6 text-h6 text-center text-bold text-teal">
              Mobile species
            </div>
            <div class="col-6 text-h6 text-center text-bold text-teal">
              Sessile species
            </div>
          </div>
          <div class="row no-wrap justify-evenly">
            <q-scroll-area
              :thumb-style="thumbStyle"
              style="height: 80vh; width: 45%"
            >
              <q-list
                dense
                bordeteal
                separator
                padding
                class="bg-teal-1 text-caption rounded-borders"
                style="width: 180px"
              >
                <q-item
                  clickable
                  v-ripple
                  v-for="mobile in mobiles"
                  :key="mobile.message"
                >
                  <q-item-section>
                    <i>{{ mobile }} </i>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
            <q-scroll-area
              :thumb-style="thumbStyle"
              style="height: 80vh; width: 45%"
            >
              <q-list
                dense
                bordeteal
                separator
                padding
                class="bg-teal-1 text-caption rounded-borders"
                style="width: 180px"
              >
                <q-item
                  clickable
                  v-ripple
                  v-for="sessile in sessiles"
                  :key="sessile.message"
                >
                  <q-item-section>
                    <i>{{ sessile }} </i>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </div>
        </q-card>

        <q-card class="col-8 chartCard">
          <div class="text-h5 text-bold row justify-center title">
            Species Abundance and Diversity Indices
          </div>
          <div class="row no-wrap">
            <div class="col-6 text-h6 text-center text-bold text-teal">
              5 most abundant Mobile species
            </div>
            <q-separator vertical />
            <div class="col-6 text-h6 text-center text-bold text-teal">
              5 most abundant Sessile species
            </div>
          </div>

          <div class="row">
            <div class="col-3 tab1">winter</div>
            <div class="col-3 tab2">summer</div>
            <div class="col-3 tab1">winter</div>
            <div class="col-3 tab2">summer</div>
          </div>
          <q-card-section horizontal>
            <highcharts
              class="col-3"
              :options="pieChart1"
            ></highcharts>
            <div class="col-3 noData">
              Summer data <br />
              Not available yet
            </div>
            <q-separator vertical />
            <highcharts
              class="col-3"
              :options="pieChart3"
            ></highcharts>
            <div class="col-3 noData">
              Summer data <br />
              Not available yet
            </div>
          </q-card-section>

          <q-separator />
          <div class="row">
            <div class="col-4 tab2">Shannon's Diversity index H'</div>
            <div class="col-4 tab1">Pielou's evenness J</div>
            <div class="col-4 tab2">Species richness S</div>
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
      </div>
    </div>
  </q-page>
</template>

<script>
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);
import { pieData } from "../siteData/pie";
import { barData } from "../siteData/bar";

export default {
  components: {},
  data() {
    return {
      mobiles: [
        "Cellana	grata",
        "Cellana	toreuma",
        "Echinolittorina	radiata",
        "Echinolittorina	vidua",
        "Littoraria	sinensis",
        "Lottia	luchuana",
        "Nerita	yoldii",
        "Nipponacmea fuscoviridis",
        "Patelloida ryukyuensis",
        "Patelloida saccharina",
        "Peasiella sp.",
        "Reishia clavigera",
        "Siphonaria	japonica",
        "Siphonaria	laciniosa",
        "Diadumene lineata",
        "Unidentified baby snails",
        "Unidentified baby limpets",
      ],
      sessiles: [
        "Encrusting coralline algae",
        "Hildenbrandia rubra",
        "Pseudulvella applanata",
        "Middle Bay brown biofilm ",
        "Ulva lactuca",
        "Feldmannia mitchelliae",
        "Centroceras sp.",
        "Corallina sp.",
        "Gelidium sp.",
        "Hydroides sp.",
        "Amphibalanus amphitrite",
        "Capitulum mitella",
        "Chthamalus malayensis",
        "Tetraclita japonica",
        "Tetraclita squamosa",
        "Barbatia virescens",
        "Perna viridis",
        "Planostrea pestigris",
        "Saccostrea cuccullata",
      ],
      barChart1: barData.TOBar1,
      barChart2: barData.TOBar2,
      barChart3: barData.TOBar3,

      pieChart1: pieData.TOPie1,
      // pieChart2: pieData.TOPie1,
      pieChart3: pieData.TOPie3,
      // pieChart4: pieData.TOPie1,
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#24A9A9",
        width: "5px",
        opacity: 0.75,
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.page
  background-color: $grey-6
  padding: 4px
.listName
  width: 33%
  padding: 3px
  margin: 4px
.chartCard
  padding: 3px
  margin: 4px
.title
  background-color: $teal-6
  color: white
.noData
  margin: auto
  text-align: center
  font-weight: bold
  color: $grey-8
  font-size: 16px
.tab1
  background-color: $grey-3
  color: black
  font-size: 16px
  text-align: center
  font-weight: bold
.tab2
  background-color: $teal-2
  color: black
  font-size: 16px
  text-align: center
  font-weight: bold
</style>

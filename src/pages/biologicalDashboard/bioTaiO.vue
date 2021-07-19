<template>
  <q-page class="justify-center">
    <q-bar class="bg-teal-8 text-white">
      <div class="text-bold row justify-center">
        Biological dashboard of Tai O, Northwestern region
      </div>
      <q-space />
      <q-btn
        dense
        icon="thermostat"
        class="bg-white text-teal"
        to="/interactiveHabitat/phyTaiO"
      >
        <q-tooltip>
          Switch to Physical dashboard
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
            Species list
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
              >
                <q-item
                  clickable
                  v-ripple
                  v-for="mobile in mobiles"
                  :key="mobile.message"
                >
                  <q-item-section avatar>
                    <q-icon name="horizontal_rule" style="display: none" />
                  </q-item-section>
                  <q-item-section>
                    {{ mobile }}
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
              >
                <q-item
                  clickable
                  v-ripple
                  v-for="sessile in sessiles"
                  :key="sessile.message"
                >
                  <q-item-section avatar>
                    <q-icon name="horizontal_rule" style="display: none" />
                  </q-item-section>
                  <q-item-section>
                    {{ sessile }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </div>
        </q-card>

        <q-card class="col-8 chartCard">
          <div class="text-h5 text-bold row justify-center title">
            Assemblage composition and ecological indices
          </div>
          <div class="row no-wrap">
            <div class="col-6 text-h6 text-center text-bold text-teal">
              Five most common mobile species
              (abundance over 60 quadrats)
            </div>
            <q-separator vertical />
            <div class="col-6 text-h6 text-center text-bold text-teal">
              Five most common sessile species
              (incidence over 60 quadrats)
            </div>
          </div>

          <div class="row">
            <div class="col-3 tab1">Winter</div>
            <div class="col-3 tab2">Summer</div>
            <div class="col-3 tab1">Winter</div>
            <div class="col-3 tab2">Summer</div>
          </div>
          <q-card-section horizontal>
            <highcharts class="col-3" :options="pieChart1"></highcharts>
            <div class="col-3 noData">
              Summer data <br />
              Not available yet
            </div>
            <q-separator vertical />
            <highcharts class="col-3" :options="pieChart2"></highcharts>
            <div class="col-3 noData">
              Summer data <br />
              Not available yet
            </div>
          </q-card-section>

          <q-separator />
          <div class="row">
            <div class="col-4 tab2">Shannon's diversity index <i>H'</i></div>
            <div class="col-4 tab1">Pielou's evenness <i>J</i></div>
            <div class="col-4 tab2">Species richness <i>S</i></div>
          </div>

          <q-card-section horizontal class="row">
            <highcharts class="col-4" :options="barChart1"></highcharts>
            <q-separator vertical />
            <highcharts class="col-4" :options="barChart2"></highcharts>
            <q-separator vertical />
            <highcharts class="col-4" :options="barChart3"></highcharts>
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
import csv2json from "csvjson-csv2json";

export default {
  components: {},
  data() {
    return {
      mobiles: [],
      sessiles: [],
      barChart1: barData.TOBar1,
      barChart2: barData.TOBar2,
      barChart3: barData.TOBar3,
      pieChart1: pieData.TOPie1,
      pieChart2: pieData.TOPie2,
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#24A9A9",
        width: "5px",
        opacity: 0.75
      }
    };
  },
  mounted() {
    let name =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4wp5Dl-Sm-sI9DYjezihdkVgz2gVS6rakgFfn_9SdPKOYrUoHzLaEomqP19Qmy75bUcIHFLiaYjqD/pub?gid=0&single=true&output=csv";

    let pie =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4wp5Dl-Sm-sI9DYjezihdkVgz2gVS6rakgFfn_9SdPKOYrUoHzLaEomqP19Qmy75bUcIHFLiaYjqD/pub?gid=1752414671&single=true&output=csv";

    let bar =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4wp5Dl-Sm-sI9DYjezihdkVgz2gVS6rakgFfn_9SdPKOYrUoHzLaEomqP19Qmy75bUcIHFLiaYjqD/pub?gid=588301274&single=true&output=csv";

    const requestName = this.$axios.get(name);

    const requestPie = this.$axios.get(pie);

    const requestBar = this.$axios.get(bar);

    this.$axios.all([requestName, requestPie, requestBar]).then(
      this.$axios.spread((...responses) => {
        // name
        const recordName = csv2json(responses[0].data);
        recordName.map(doc => {
          let cacheMobileName = [];
          cacheMobileName.push(doc.mobile);
          for (let i of cacheMobileName) i && this.mobiles.push(i);
          let cacheSessileName = [];
          cacheSessileName.push(doc.sessile);
          for (let j of cacheSessileName) j && this.sessiles.push(j);
        });

        // pie
        const pieChart = csv2json(responses[1].data);
        let cacheMobilePie = [];
        pieChart.map(doc => {
          cacheMobilePie.push([doc.pieMobile, parseInt(doc.pieMobileCnt)]);
        });
        this.pieChart1.series[0].data = cacheMobilePie;

        let cacheSessilePie = [];
        pieChart.map(doc => {
          cacheSessilePie.push([doc.pieSessile, parseInt(doc.pieSessileCnt)]);
        });
        this.pieChart2.series[0].data = cacheSessilePie;

        // bar
        const barChart = csv2json(responses[2].data);
        let cacheShannon = [];
        barChart.map(doc => {
          cacheShannon.push([
            [doc.commonx].toString(),
            parseFloat([doc.shannony])
          ]);
        });
        this.barChart1.series[0].data = cacheShannon;

        let cachePielou = [];
        barChart.map(doc => {
          cachePielou.push([
            [doc.commonx].toString(),
            parseFloat([doc.pielouy])
          ]);
        });
        this.barChart2.series[0].data = cachePielou;

        let cacheRichness = [];
        barChart.map(doc => {
          cacheRichness.push([
            [doc.commonx].toString(),
            parseFloat([doc.richnessy])
          ]);
        });
        this.barChart3.series[0].data = cacheRichness;
      })
    );
  }
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

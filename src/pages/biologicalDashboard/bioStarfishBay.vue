<template>
  <q-page class="justify-center">
    <q-bar class="bg-teal-8 text-white">
      <div class="text-bold row justify-center">
        Biological dashboard of Starfish Bay, Tolo Harbour region
      </div>
      <q-space />
      <q-btn
        dense
        icon="thermostat"
        class="bg-white text-teal"
        to="/interactiveHabitat/phyStarfishBay"
      >
        <q-tooltip>
          Switch to Physical dashboard
        </q-tooltip>
      </q-btn>
      <q-btn
        dense
        icon="keyboard_backspace"
        class="bg-white text-teal"
        to="/interactiveHabitat/TL"
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
                  <q-chip
                    color="orange"
                    size="0.5rem"
                    v-if="mobile.summer == 'True'"
                  ></q-chip>
                  <q-chip
                    color="teal-1"
                    size="0.5rem"
                    v-if="mobile.summer == 'False'"
                  ></q-chip>
                  <q-chip
                    color="blue"
                    size="0.5rem"
                    v-if="mobile.winter == 'True'"
                  ></q-chip>
                  <q-chip
                    color="teal-1"
                    size="0.5rem"
                    v-if="mobile.winter == 'False'"
                  ></q-chip>
                  <q-item-section>
                    {{ mobile.name }}
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
                  <q-chip
                    color="orange"
                    size="0.5rem"
                    v-if="sessile.summer == 'True'"
                  ></q-chip>
                  <q-chip
                    color="teal-1"
                    size="0.5rem"
                    v-if="sessile.summer == 'False'"
                  ></q-chip>
                  <q-chip
                    color="blue"
                    size="0.5rem"
                    v-if="sessile.winter == 'True'"
                  ></q-chip>
                  <q-chip
                    color="teal-1"
                    size="0.5rem"
                    v-if="sessile.winter == 'False'"
                  ></q-chip>
                  <q-item-section>
                    {{ sessile.name }}
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
              Five most common mobile species (abundance over 50 quadrats)
            </div>
            <q-separator vertical />
            <div class="col-6 text-h6 text-center text-bold text-teal">
              Five most common sessile species (incidence out of 50 quadrats)
            </div>
          </div>

          <div class="row">
            <div class="col-3 bioTab1">Winter</div>
            <div class="col-3 bioTab2">Summer</div>
            <div class="col-3 bioTab1">Winter</div>
            <div class="col-3 bioTab2">Summer</div>
          </div>
          <q-card-section class="row no-wrap" horizontal>
            <highcharts class="col-3" :options="pieChart1"></highcharts>
            <highcharts class="col-3" :options="pieChart3"></highcharts>
            <q-separator vertical />
            <highcharts class="col-3" :options="pieChart2"></highcharts>
            <highcharts class="col-3" :options="pieChart4"></highcharts>
          </q-card-section>

          <q-separator />
          <div class="row">
            <div class="col-4 bioTab2">Shannon's diversity index <i>H'</i></div>
            <div class="col-4 bioTab1">Pielou's evenness <i>J</i></div>
            <div class="col-4 bioTab2">Species richness <i>S</i></div>
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
      barChart1: barData.SBShannon,
      barChart2: barData.SBPielou,
      barChart3: barData.SBRichness,
      pieChart1: pieData.SBPie1,
      pieChart2: pieData.SBPie2,
      pieChart3: pieData.SBPie3,
      pieChart4: pieData.SBPie4,
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
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj1DEvGcqdn05_uRxl7LMTGmlG_NBk27gnAKbIGuGTmn9Za84sCCZRWty4iR800Akr3QPryHGjLXg_/pub?gid=0&single=true&output=csv";

    let pie =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj1DEvGcqdn05_uRxl7LMTGmlG_NBk27gnAKbIGuGTmn9Za84sCCZRWty4iR800Akr3QPryHGjLXg_/pub?gid=1752414671&single=true&output=csv";

    let pie21summer =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj1DEvGcqdn05_uRxl7LMTGmlG_NBk27gnAKbIGuGTmn9Za84sCCZRWty4iR800Akr3QPryHGjLXg_/pub?gid=1412208874&single=true&output=csv";
    let barShannon =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj1DEvGcqdn05_uRxl7LMTGmlG_NBk27gnAKbIGuGTmn9Za84sCCZRWty4iR800Akr3QPryHGjLXg_/pub?gid=678347772&single=true&output=csv";

    let barPielou =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj1DEvGcqdn05_uRxl7LMTGmlG_NBk27gnAKbIGuGTmn9Za84sCCZRWty4iR800Akr3QPryHGjLXg_/pub?gid=1604038742&single=true&output=csv";
    let barRichness =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj1DEvGcqdn05_uRxl7LMTGmlG_NBk27gnAKbIGuGTmn9Za84sCCZRWty4iR800Akr3QPryHGjLXg_/pub?gid=1298166498&single=true&output=csv";

    const requestName = this.$axios.get(name);
    const requestPie = this.$axios.get(pie);
    const requestPie21summer = this.$axios.get(pie21summer);
    const requestBarShnnon = this.$axios.get(barShannon);
    const reqBarPielou = this.$axios.get(barPielou);
    const reqBarRichness = this.$axios.get(barRichness);

    this.$axios
      .all([
        requestName,
        requestPie,
        requestPie21summer,
        requestBarShnnon,
        reqBarPielou,
        reqBarRichness
      ])
      .then(
        this.$axios.spread((...responses) => {
          // name
          const recordName = csv2json(responses[0].data);

          let mobileName = [],
            mobileSum = [],
            mobileWin = [];

          recordName.forEach(i => {
            mobileName.push(i.mobile);
            mobileSum.push(i.mobile_sum);
            mobileWin.push(i.mobile_win);
          });

          let cacheMobileName = {};
          cacheMobileName = mobileName.map((value, i) => ({
            name: value,
            summer: mobileSum[i],
            winter: mobileWin[i]
          }));

          this.mobiles = cacheMobileName;

          let sessileName = [],
            sessileSum = [],
            sessileWin = [];

          recordName.forEach(i => {
            sessileName.push(i.sessile);
            sessileSum.push(i.sessile_sum);
            sessileWin.push(i.sessile_win);
          });

          let cacheSessileName = {};
          cacheSessileName = sessileName.map((value, i) => ({
            name: value,
            summer: sessileSum[i],
            winter: sessileWin[i]
          }));

          this.sessiles = cacheSessileName;

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

          const pieChart21summer = csv2json(responses[2].data);
          let cacheMobilePie1 = [];
          pieChart21summer.map(doc => {
            cacheMobilePie1.push([doc.pieMobile, parseInt(doc.pieMobileCnt)]);
          });
          this.pieChart3.series[0].data = cacheMobilePie1;

          let cacheSessilePie1 = [];
          pieChart21summer.map(doc => {
            cacheSessilePie1.push([
              doc.pieSessile,
              parseInt(doc.pieSessileCnt)
            ]);
          });
          this.pieChart4.series[0].data = cacheSessilePie1;

          // bar
          const shannony = csv2json(responses[3].data);
          let cacheWin20shanno = [];
          shannony.map(doc => {
            cacheWin20shanno.push([parseFloat([doc.winter2020])]);
          });
          this.barChart1.series[0].data = cacheWin20shanno;
          let cacheSum21shanno = [];
          shannony.map(doc => {
            cacheSum21shanno.push([parseFloat([doc.summer2021])]);
          });
          this.barChart1.series[1].data = cacheSum21shanno;

          const pielouy = csv2json(responses[4].data);
          let cacheWin20pielou = [];
          pielouy.map(doc => {
            cacheWin20pielou.push([parseFloat([doc.winter2020])]);
          });
          this.barChart2.series[0].data = cacheWin20pielou;
          let cacheSum21pielou = [];
          pielouy.map(doc => {
            cacheSum21pielou.push([parseFloat([doc.summer2021])]);
          });
          this.barChart2.series[1].data = cacheSum21pielou;

          const richnessy = csv2json(responses[5].data);
          let cacheWin20rich = [];
          richnessy.map(doc => {
            cacheWin20rich.push([parseFloat([doc.winter2020])]);
          });
          this.barChart3.series[0].data = cacheWin20rich;
          let cacheSum21rich = [];
          richnessy.map(doc => {
            cacheSum21rich.push([parseFloat([doc.summer2021])]);
          });
          this.barChart3.series[1].data = cacheSum21rich;
        })
      );
  }
};
</script>

<style lang="sass" scoped>
.page
  background-color: $grey-6
  padding: 4px

.title
  background-color: $teal-6
  color: white
</style>

<template>
  <div>
    <div class="row q-px-sm justify-center">
      <q-card class="col-4"
        ><br />
        <div class="text-h5 text-bold row justify-center">
          List of Species Names
        </div>
        <div class="q-pa-sm q-gutter-sm justify-center row">
          <q-list
            dense
            bordered
            separator
            padding
            class="bg-blue-1 rounded-borders"
            style="width: 180px"
          >
            <q-item clickable v-ripple>
              <q-item-section>
                species name #1
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #2
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #3
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #4
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #5
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #6
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #7
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #8
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #9
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #10
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #11
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #12
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #13
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #14
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #15
              </q-item-section>
            </q-item>
          </q-list>

          <q-list
            dense
            bordered
            separator
            padding
            class="bg-blue-1 rounded-borders"
            style="width: 180px"
          >
            <q-item clickable v-ripple>
              <q-item-section>
                species name #1
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #2
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #3
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #4
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #5
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #6
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #7
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #8
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #9
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #10
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #11
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #12
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #13
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #14
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                species name #15
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card>

      <q-card class="col-8 q-pa-xs">
        <div class="text-h5 text-bold row justify-center">Biological Dashboard: Pie Chart and Bar Chart</div>
        <q-separator />                         

        <q-card-section horizontal>
          <div class="col-6 text-bold text-center">Fauna Species</div>
          <div class="col-6 text-bold text-center">Flora Species</div>
        </q-card-section>
        <q-card-section horizontal>
          <q-card-section class="col-3">
            <highcharts :options="pieChart"></highcharts>
          </q-card-section>
          <q-card-section class="col-3">
            <highcharts :options="pieChart"></highcharts>
          </q-card-section>

          <q-separator vertical />
          <q-card-section class="col-3">
            <highcharts :options="pieChart"></highcharts>
          </q-card-section>

          <q-card-section class="col-3">
            <highcharts :options="pieChart"></highcharts>
          </q-card-section>
        </q-card-section>

        <q-card-section horizontal class="row">
          <q-card-section class="col-6">
          <highcharts :options="barChart"></highcharts>
          </q-card-section>
          <q-card-section class="col-6">
          <highcharts :options="barChart"></highcharts>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
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
    };
  }
};
</script>

<style lang="sass"></style>

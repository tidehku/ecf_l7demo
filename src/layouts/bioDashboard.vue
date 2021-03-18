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
            <highcharts :options="linechart"></highcharts>
          </q-card-section>
          <q-card-section class="col-3">
            <highcharts :options="linechart"></highcharts>
          </q-card-section>

          <q-separator vertical />
          <q-card-section class="col-3">
            <highcharts :options="linechart"></highcharts>
          </q-card-section>

          <q-card-section class="col-3">
            <highcharts :options="linechart"></highcharts>
          </q-card-section>
        </q-card-section>

        <q-card-section horizontal class="row">
          <q-card-section class="col-6">
          <highcharts :options="barchart"></highcharts>
          </q-card-section>
          <q-card-section class="col-6">
          <highcharts :options="barchart"></highcharts>
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

export default {
  components: {},
  data() {
    return {
      barchart: {
        chart: {
          type: "column",
          height: (3 / 4) * 100 + "%" // 16:9 ratio
        },
        credits: {
          enabled: false
        },
        title: {
          text: "Abundance of Fauna Species"
        },
        subtitle: {
          tect: "by ECF at which site location"
        },
        xAxis: {
          type: 'category',
          labels:{
            rotation: -45,
          }
        },
        yAxis:{
          min: 0,
          title: {
            text: 'Abundance'
          }
        },
        legend: {
          enabled: false
        },
        series: [
          {
            name: 'Species Abundance',
            showInLegend: true,
            data: [
              ['species1', 3],
              ['species2', 10],
              ['species3', 5],
              ['species4', 15],
              ['species5', 3],
              ['species6', 5],
              ['species7', 2],
              ['species8', 16],
              ['species9', 10],
              ['species10', 2],
            ],
          }
        ]
      },
      linechart: {
        chart: {
          type: "spline",
          height: (1 / 1) * 100 + "%", // 16:9 ratio
        },
        credits: {
          enabled: false,
        },
        title: {
          text: "Summer",
        },
        series: [
          {
            showInLegend: false,
            data: [10, 6, 8, 2, 8, 4, 6, 7],
          },
        ],
      },
    };
  }
};
</script>

<style lang="sass"></style>

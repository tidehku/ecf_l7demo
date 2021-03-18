<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer
      v-model="right"
      side="right"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="240"
      :breakpoint="500"
      bordered
      elevated
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            clickable
            v-ripple
            to="/interactiveHabitat/historical"
          >
            <q-item-section avatar>
              <q-icon name="book" />
            </q-item-section>

            <q-item-section>
              Historical Records
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/interactiveHabita"
          >
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              ECF Sampling Data
            </q-item-section>
          </q-item>

          <q-separator />

          <q-expansion-item
            icon="map"
            label="Regional Data"
            header-class="text-blue-10 text-bold"
            default-opened
            expand-separator
          >
            <q-expansion-item
              expand-separator
              label="NorthWestern"
              default-opened
            >
              <q-expansion-item
                :header-inset-level="0.5"
                expand-separator
                label="Lung Kwu Tan"
              >
                <q-list
                  dense
                  bordered
                  separator
                  :header-inset-level="0.5"
                >
                  <q-item
                    clickable
                    v-ripple
                    to="/interactiveHabitat/demo2"
                  >
                    <q-item-section>
                      Biological Dashboard
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    v-ripple
                    to="/interactiveHabitat/demo"
                  >
                    <q-item-section>
                      Physical Dashboard
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

            </q-expansion-item>

          </q-expansion-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <div class="row q-px-sm justify-center">
      <q-card class="col-3">
        <div class="text-h5 text-bold row justify-center">Temperature</div>
        <q-separator />
        <highcharts :options="chartOptions1"></highcharts>
        <highcharts :options="chartOptions2"></highcharts>
      </q-card>

      <q-card class="col-6 q-pa-xs">
        <div class="q-col-gutter-xs row">
          <q-card-section
            vertical
            class="col-6"
          >
            <div class="text-h5 text-bold row justify-center">Site Name</div>

            <q-card-section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quis tempore praesentium illum? Molestiae ipsa repellendus ipsam!
              Quaerat placeat eveniet, quo tempora dolorum, maxime eos odit,
              voluptate aspernatur assumenda ipsa.
              <q-carousel
                height=150px
                animated
                v-model="slide"
                arrows
                infinite
              >
                <q-carousel-slide
                  :name="1"
                  img-src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-carousel-slide
                  :name="3"
                  img-src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
                <q-carousel-slide
                  :name="4"
                  img-src="https://cdn.quasar.dev/img/quasar.jpg"
                />
              </q-carousel>
              <!-- <q-img :ratio="16 / 9" src="~assets/placeholder2.jpg" /> -->
            </q-card-section>
          </q-card-section>

          <q-card-section class="col-6">
            <l-map
              :zoom="zoom"
              :center="center"
            >
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              />
              <l-marker :lat-lng="[22.39235, 113.916341]"></l-marker>
            </l-map>
          </q-card-section>
        </div>
      </q-card>

      <q-card class="col-3 ">
        <div class="text-h5 text-bold row justify-center">Wave Fetch</div>
        <q-separator />
        <highcharts :options="chartOptions1"></highcharts>
        <highcharts :options="chartOptions2"></highcharts>
      </q-card>
    </div>
    <div class="row q-pa-sm justify-center">
      <q-card class="col-12">
        <div class="text-h5 text-bold row justify-center">Nutrient Levels</div>
        <q-separator />

        <q-card-section horizontal>
          <div class="col-6 text-bold text-center">Chlorophyll a</div>
          <div class="col-6 text-bold text-center">Organic Matter</div>
        </q-card-section>
        <q-card-section horizontal>
          <q-card-section class="col-3">
            <highcharts :options="chartOptions1"></highcharts>
          </q-card-section>
          <q-card-section class="col-3">
            <highcharts :options="chartOptions2"></highcharts>
          </q-card-section>

          <q-separator vertical />
          <q-card-section class="col-3">
            <highcharts :options="chartOptions1"></highcharts>
          </q-card-section>

          <q-card-section class="col-3">
            <highcharts :options="chartOptions2"></highcharts>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-layout>
</template>

<script>
import { LMap, LMarker, LTileLayer } from "vue2-leaflet";
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);

export default {
  components: { LMap, LMarker, LTileLayer },
  data() {
    return {
      drawer: false,
      miniState: true,
      slide: 1,
      center: L.latLng(22.3908, 114.1721),
      zoom: 10.25,
      url:
        "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: "Source &copy; Esri",

      chartOptions1: {
        chart: {
          type: "spline",
          height: (1 / 2) * 100 + "%", // 16:9 ratio
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
      chartOptions2: {
        chart: {
          type: "spline",
          height: (1 / 2) * 100 + "%", // 16:9 ratio
        },
        credits: {
          enabled: false,
        },
        title: {
          text: "Winter",
        },
        series: [
          {
            showInLegend: false,
            data: [2, 3, 9, 5, 6, 4, 1, 2],
          },
        ],
      },
    };
  },
};
</script>

<style lang="sass">
</style>

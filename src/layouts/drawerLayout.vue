<template>
  <q-layout view="hhh lpR fFf">
    <q-header>
      <q-bar
        class="bg-indigo-8 text-white glossy"
        style="height: 40px"
      >
        <q-avatar size="45px">
          <img src="~assets/SWIMSlogo1.png" />
        </q-avatar>
        <q-bar-title class="text-h5 text-bold"
        >
         <!-- v-if="path == '/interactiveHabitat/dashboard/biological'" -->
          ECF Hong Kong Rocky Shore | Physical Dashboard of xxx Site
        </q-bar-title>
        <q-space />
        <q-btn
          no-caps
          class="text-indigo-8 text-bold switchbutton"
          color="white"
          icon-right="eco"
          label="Switch to Biological Dashboard"
          to="/interactiveHabitat/dashboard/biological"
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
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
</style>

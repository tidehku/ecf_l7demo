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
        <q-bar-title class="text-h5 text-bold">
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
      show-if-above
      overlay
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

            <q-item-section> Historical Records </q-item-section>
          </q-item>

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

          <q-separator />

          <q-select
            filled
            v-model="model"
            :options="regionOptions"
            label="Choose Region"
            style="width:95%"
          />

          <q-select
            filled
            v-model="model"
            :options="siteOptions"
            label="Choose Site"
            style="width:95%"
          />

          <!-- <q-item  v-for="region in regions">{{ region }}</q-item> -->
          </q-select> -->

        </q-list>
      </q-scroll-area>
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
      miniState: true,
      model: null,
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
    };
  },
};
</script>

<style lang="sass">
.q-select
  padding: 15px
</style>

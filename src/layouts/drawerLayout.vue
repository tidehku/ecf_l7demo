<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-bar class="bg-blue-grey-1 text-dark glossy" style="height: 60px">
        <q-avatar size="45px">
          <img src="~assets/SWIMSlogo2.png" />
        </q-avatar>
        <q-toolbar-title class="text-h3 text-bold">
          ECF HK Rocky Shore GIS Website Storyboard 2019-2023
        </q-toolbar-title>
      </q-bar>
    </q-header>
    <q-drawer
      v-model="drawer"
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
          <q-item clickable v-ripple to="/interactiveHabitat/historical">
            <q-item-section avatar>
              <q-icon name="book" />
            </q-item-section>

            <q-item-section> Historical Records </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/interactiveHabitat">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> ECF Sampling Data </q-item-section>
          </q-item>

          <q-separator />

          <q-expansion-item
            label="NorthWestern Sites"
            header-class="bg-blue-10 text-white text-bold"
            default-opened
          >
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Lung Kwu Tan"
              header-class="bg-blue-grey-2 text-bold"
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo2"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Siu Lam"
              header-class="bg-blue-grey-2 text-bold"
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Luk Keng"
              header-class="bg-blue-grey-2 text-bold"
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Tai O"
              header-class="bg-blue-grey-2 text-bold"
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-expansion-item>
          <q-expansion-item
            label="SouthWestern Sites"
            header-class="bg-blue-10 text-white text-bold"
            default-opened
          >
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Lung Kwu Tan"
              header-class="bg-blue-grey-2 text-bold"
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo2"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Siu Lam"
              header-class="bg-blue-grey-2 text-bold"
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Luk Keng"
              header-class="bg-blue-grey-2 text-bold"
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              switch-toggle-side
              dense-toggle
              label="Tai O"
              header-class="bg-blue-grey-2 text-bold"
            >
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Biological Dashboard </q-item-section>
                </q-item>
                <q-separator inset="item" />
                <q-item
                  clickable
                  v-ripple
                  :inset-level="1"
                  to="/interactiveHabitat/demo"
                >
                  <q-item-section> Physical Dashboard </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-expansion-item>
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
    };
  },
};
</script>



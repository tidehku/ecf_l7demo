<template>
  <div class="q-ma-md">
    <!-- <div class="q-bar">
      <q-bar dark class="bg-darkgray text-white q-my-md shadow-2">
        <q-btn dense flat round icon="lens" size="8.5px" color="red" />
        <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
        <q-btn dense flat round icon="lens" size="8.5px" color="green" />
        <div class="col text-center text-weight-bold">
          Welcome To My Website
        </div>
      </q-bar>
    </div> -->

    <!-- <h3
      id="title"
      class="text-Black text-no-wrap"
      style="font-family: 'Roboto', bold">
      Hello Welcome to My Website
    </h3> -->

    <div class="q-ma-sm">
      <q-card-section>
        <q-img
          src="https://www.swims.hku.hk/wp-content/themes/swims/images/logo.png"
          alt="SWIMs logo"
          width="240px"
          align="top"
        />
      </q-card-section>

      <!-- <div class="mapImg">
        <q-img
          src="~assets/map_new_sites.png"
          alt="Uh Oh! Image not found!"
          width="600px"
          align="top"
        />
      </div> -->

      <div class="q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = true"
          @mouseleave="autoplay = true"
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
      </div>

      <!-- <div class="q-gutter-md">
        <q-btn
          align="left"
          class="btn-fixed-width"
          color="primary"
          label="Map of HK Shore"
          to="demoMap"
        />
        <q-btn
          align="left"
          class="btn-fixed-width"
          color="primary"
          label="Drill Down Map"
          to="drillDown"
        />
      </div> -->
    </div>

    <!-- <br /><br /> -->
    <!-- <div class="q-pa-md bg-grey-10 text-white">
      <div class="q-gutter-md">
        <p>Please select the identity that best fits you:</p>
        <q-radio
          dark
          v-model="Identity"
          val="High School Student"
          label="High School Student"
        />
        <q-radio
          dark
          v-model="Identity"
          val="University/College Student"
          label="University/College Student"
        />
        <q-radio dark v-model="Identity" val="Educator" label="Educator" />
        <q-radio dark v-model="Identity" val="Outsider" label="Outsider" />
      </div>
    </div>
    <div class="q-px-sm">
      Your selection is: <strong>{{ "Identity" }}</strong>
    </div> -->
  </div>

  <!-- <q-btn color="primary" style="width: 200px">
      <div class="ellipsis">Interactive Habitat</div></q-btn
    >
    <q-btn color="primary" style="width: 200px">
      <div class="ellipsis">Species Search Engine</div></q-btn
    > -->
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      Identity: "Student",
      tab: "interactiveHabitat",
      slide: 1,
      autoplay: true
    };
  },
};
</script>

<style lang="sass" scoped>
</style>

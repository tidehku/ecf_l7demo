<template>
  <div class="row justify-center q-gutter-xs q-ma-sm">
    <div class="col-10 justify-center">
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

    <div class="row justify-center">
      <h3 class="text-no-wrap" style="font-family: 'Roboto'">
        <b>Welcome to ECF Rocky Shore GIS Website Storyboard</b>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      Identity: "Student",
      tab: "interactiveHabitat",
      slide: 1,
      autoplay: true,
    };
  },
};
</script>

<style lang="sass" scoped>
</style>

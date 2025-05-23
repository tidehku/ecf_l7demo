<template>
  <q-page>
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
      height="72vh"
    >
      <q-carousel-slide
        v-for="slide in slides"
        :key="slide.id"
        :name="slide.id"
        :img-src="slide.src"
      />
    </q-carousel>

    <div class="q-pa-xl bg-indigo-2 justify-center">
      <q-card
        class="q-pa-md bg-indigo text-center text-white text-h4 text-bold"
      >
        Welcome To HKRISE !
      </q-card>
      <div
        class="q-pa-lg constrain"
        style="font-size: 1.1rem"
        align="justify"
        v-html="HKRISE"
      >
        {{ HKRISE }}
      </div>
    </div>

    <div class="q-pa-xl bg-indigo-1 justify-center">
      <div>
        <q-card
          class="q-pa-md bg-indigo text-h4 text-bold text-white text-center"
          >Hong Kong Rocky Shore Environment</q-card
        >
        <div
          class="q-pa-lg constrain"
          style="font-size: 1.1rem"
          align="justify"
        >
          {{ HKRockyShore1 }}
        </div>
        <div
          class="q-pa-lg constrain"
          style="font-size: 1.1rem"
          align="justify"
        >
          {{ HKRockyShore2 }}
        </div>
        <div class="q-pa-md">
          <video-background
            @click.native="pauseVideo()"
            ref="videobackground"
            src="VID_20210224_141116.mp4"
            style="height: 72vh; width: 61vw; border-radius: 12px; display: block; margin-left: auto; margin-right: auto;"
          >
            <div class="absolute-center">
              <q-btn
                @click.stop="resumeVideo()"
                color="amber-2"
                flat
                icon="play_arrow"
                rounded
                size="xl"
                v-show="resume"
              />
            </div>
          </video-background>
        </div>

        <div
          class="q-pa-lg constrain"
          style="font-size: 1.1rem"
          align="justify"
          v-html="HKRockyShore3"
        >
          {{ HKRockyShore3 }}
        </div>
      </div>
    </div>

    <div class="q-pa-xl bg-indigo-1 justify-center">
      <div class="q-pa-md row text-h4 text-bold justify-center subtitle">
        Navigation through HKRISE
      </div>
      <div class="row no-wrap q-pa-sm q-gutter-sm justify-evenly">
        <q-card style="width: 20%">
          <q-card-section class="bg-orange-10 text-white text-center">
            <q-icon clickable name="biotech" style="font-size: 4rem" />
            <div class="text-subtitle1 text-bold">METHODS</div>
          </q-card-section>

          <q-card-section style="font-size: 1rem">
            Details of how we conducted the territory-wide survey.
          </q-card-section>
          <div class="q-pa-md row absolute-bottom justify-end">
            <q-btn no-caps color="orange-10" label="Explore" to="method" />
          </div>
        </q-card>

        <q-card style="width: 20%">
          <q-card-section class="bg-amber-8 text-white text-center">
            <q-icon clickable name="map" style="font-size: 4rem" />
            <div class="text-subtitle1 text-bold">MAP</div>
          </q-card-section>

          <q-card-section style="font-size: 1rem">
            Biological and physical dashboards of each site, showing assemblage
            structure and ecological indices, rock temperature, nutrient
            availability and wave forces.
          </q-card-section>
          <div class="q-pa-md row justify-end">
            <q-btn
              no-caps
              color="amber-8"
              label="Explore"
              to="interactiveHabitat"
            />
          </div>
        </q-card>
        <q-card style="width: 20%">
          <q-card-section class="bg-green-6 text-white text-center">
            <q-icon clickable name="travel_explore" style="font-size: 4rem" />
            <div class="text-subtitle1 text-bold">SEARCH</div>
          </q-card-section>

          <q-card-section style="font-size: 1rem">
            Explore distributions of the past (from the review by Ng et al.
            2017) and present (from the current territory-wide survey) rocky
            intertidal biodiversity in Hong Kong.
          </q-card-section>
          <div class="q-pa-md row absolute-bottom justify-end">
            <q-btn
              no-caps
              color="green-6"
              label="Explore"
              to="SpeciesSearchEngine"
            />
          </div>
        </q-card>

        <q-card style="width: 20%">
          <q-card-section class="bg-cyan-7 text-white text-center">
            <q-icon clickable name="collections" style="font-size: 4rem" />
            <div class="text-subtitle1 text-bold">GALLERY</div>
          </q-card-section>

          <q-card-section style="font-size: 1rem">
            See photographs of fantastic rocky intertidal organisms here!
          </q-card-section>
          <div class="q-pa-md row absolute-bottom justify-end">
            <q-btn no-caps color="cyan-7" label="Explore" to="gallery" />
          </div>
        </q-card>
        <q-card style="width: 20%">
          <q-card-section class="bg-indigo text-white text-center">
            <q-icon clickable name="dashboard" style="font-size: 4rem" />
            <div class="text-subtitle1 text-bold">QUICK NAVIGATION</div>
          </q-card-section>

          <q-card-section style="font-size: 1rem">
            The ≡ drawer allows quick access to the biological and physical
            dashboards of all our sites.
          </q-card-section>
          <div class="q-pa-md row absolute-bottom justify-end">
            <q-btn
              no-caps
              color="indigo-5"
              label="Explore"
              @click="openDrawer()"
            />
          </div>
        </q-card>
      </div>
    </div>

    <div class="q-pa-xl bg-indigo-1 justify-center">
      <div class="q-pa-md row text-h4 text-bold justify-center subtitle">
        Meet the TideChasers
      </div>
      <q-card-section class="q-pa-md constrainTideChasers">
        <q-img
          src="~/assets/groupphoto2.jpg"
          style="width: 100%; height: 80vh; border-radius: 12px"
          :ratio="16 / 9"
        />
        <div
          class="q-pa-lg constrain"
          style="font-size: 1.1rem"
          align="justify"
          v-html="TidesMessage"
        >
          {{ TidesMessage }}
        </div>
      </q-card-section>
    </div>

    <div class="q-pa-xl bg-indigo-1 justify-center">
      <q-card bordered flat class="q-ma-sm bg-white maincard">
        <div
          class="q-pa-md bg-indigo-6 text-white text-h4 text-bold text-center"
        >
          Related links
        </div>
        <q-card-section class="row justify-evenly">
          <div class="q-px-xl linkcard">
            <q-img src="~/assets/TIDElogo.png"> </q-img>
          </div>
          <div class="q-px-xl linkcard">
            <q-img src="~/assets/SWIMSlogo2.png"> </q-img>
          </div>
          <div class="q-px-xl linkcard">
            <q-img src="~/assets/ECFlogo.jpg"> </q-img>
          </div>
          <div class="q-px-xl linkcard">
            <q-img src="~/assets/HKOlogo.png"> </q-img>
          </div>
          <div class="q-px-xl linkcard">
            <q-img src="~/assets/hkulogo.jpg"> </q-img>
          </div>
        </q-card-section>
        <q-card-section class="row justify-evenly q-gutter-md">
          <q-btn
            no-caps
            class="linkbtn"
            label="Tropical IntertiDal Ecology Group"
            type="a"
            target="_blank"
            style="font-size: 1.0rem"
            href="https://www.tidehku.com/"
          />
          <q-btn
            no-caps
            class="linkbtn"
            label="The Swire Institute of Marine Science, HKU"
            type="a"
            target="_blank"
            style="font-size: 1.0rem"
            href="https://www.swims.hku.hk/"
          />
          <q-btn
            no-caps
            class="linkbtn"
            label="Environment and Conservation Fund"
            type="a"
            target="_blank"
            style="font-size: 1.0rem"
            href="https://www.ecf.gov.hk/en/home/index.html "
          />
          <q-btn
            no-caps
            class="linkbtn"
            label="Hong Kong Observatory"
            type="a"
            target="_blank"
            style="font-size: 1.0rem"
            href="https://www.hko.gov.hk/en/index.html"
          />
          <q-btn
            no-caps
            class="linkbtn"
            label="The School of Biological Sciences, HKU"
            type="a"
            target="_blank"
            style="font-size: 1.0rem"
            href="https://www.biosch.hku.hk/ "
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import Vue from "vue";
import VideoBackground from "vue-responsive-video-background-player";
Vue.component("video-background", VideoBackground);
import slides from "./carouselSlides";

export default {
  name: "PageIndex",
  data() {
    return {
      resume: false,
      slide: 1,
      autoplay: true,
      slides: slides
    };
  },
  methods: {
    pauseVideo() {
      this.resume = true;
      this.$refs.videobackground.player.pause();
    },
    resumeVideo() {
      this.resume = false;
      this.$refs.videobackground.player.play();
    },
    openDrawer() {
      this.$root.$emit("openDrawer");
    }
  },
  computed: {
    HKRISE() {
      return this.$store.state.storeText.HKRISE;
    },
    HKRockyShore1() {
      return this.$store.state.storeText.HKRockyShore1;
    },
    HKRockyShore2() {
      return this.$store.state.storeText.HKRockyShore2;
    },
    HKRockyShore3() {
      return this.$store.state.storeText.HKRockyShore3;
    },
    TidesMessage() {
      return this.$store.state.storeText.TidesMessage;
    }
  }
};
</script>

<style lang="sass" scoped>
.page
  background-color: $grey-3
.maincard
  background-color: $indigo-1
  border-width: 2px
.linkcard
  width: 18%
.linkbtn
  width: 18%
  background-color: $indigo
  color: white
  font-size: 14px
.subtitle
  background-color: $indigo-6
  color: white
</style>

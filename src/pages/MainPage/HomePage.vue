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
    >
      <q-carousel-slide
        :name="1"
        img-src="~/assets/images/carousel1.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="~/assets/images/carousel2.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="~/assets/images/carousel3.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="~/assets/images/carousel4.jpg"
      />
      <q-carousel-slide
        :name="5"
        img-src="~/assets/images/carousel5.jpg"
      />
      <q-carousel-slide
        :name="6"
        img-src="~/assets/images/carousel6.jpg"
      />
      <q-carousel-slide
        :name="7"
        img-src="~/assets/images/carousel9.jpg"
      />
    </q-carousel>

    <div class="q-pa-xl bg-indigo-2 justify-center">
      <q-card class="q-pa-sm bg-indigo text-center text-white text-h3 text-bold">
        Welcome To HKRISE !
      </q-card>
      <div
        class="q-pa-md text-subtitle1"
        v-html="HKRISE"
      >
        {{ HKRISE }}
      </div>
    </div>

    <div class="q-pa-xl justify-center">
      <div>
        <q-card class="q-pa-sm bg-indigo text-h4 text-bold text-white text-center">Hong Kong Rocky Shore Environment</q-card>
        <div class="q-pa-sm text-subtitle1">
          {{ HKRockyShore1 }}
        </div>
        <div class="q-pa-sm text-subtitle1">
          {{ HKRockyShore2 }}
        </div>
        <div class="q-pa-xl center">
          <video-background
            @click.native="pauseVideo()"
            ref="videobackground"
            src="VID_20210224_141116.mp4"
            style="height: 70vh"
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
        <div class="q-pa-sm text-subtitle1">
          {{ HKRockyShore3 }}
        </div>
      </div>
    </div>
    <q-card
      flat
      bordered
      class="q-ma-sm maincard"
    >
      <div class="q-pa-sm row text-h4 text-bold justify-center subtitle">
        Navigation through HKRISE
      </div>
      <div class="row no-wrap q-pa-sm q-gutter-sm justify-center">
        <q-card style="width: 25%">
          <q-card-section class="bg-orange-10 text-white text-center">
            <q-icon
              clickable
              name="map"
              style="font-size: 4rem"
            />
            <div class="text-subtitle1 text-bold">Interactive Habitat Map</div>
          </q-card-section>

          <q-card-section>
            This interactive map shows biological and physical information of
            each site in this territory-wide survey. In the physical dashboard,
            you will see data of rock temperature, nutrient availability and
            wave forces. In the biological dashboard, you will see species
            assemblage structures, abundances and a number of ecological indices
            quantifying the richness and diversity of the assemblages.
          </q-card-section>
          <div class="q-pa-md row justify-end">
            <q-btn
              no-caps
              color="orange-10"
              label="Explore"
            />
          </div>
        </q-card>
        <q-card style="width: 18%">
          <q-card-section class="bg-amber-9 text-white text-center">
            <q-icon
              clickable
              name="travel_explore"
              style="font-size: 4rem"
            />
            <div class="text-subtitle1 text-bold">Species Search Engine</div>
          </q-card-section>

          <q-card-section>
            In this search engine, you will be able to explore the past (from
            the review by Ng et al. 2017) and current (from the current ECF
            territory-wide survey) rocky intertidal biodiversity in Hong Kong.
          </q-card-section>
          <div class="q-pa-md row absolute-bottom justify-end">
            <q-btn
              no-caps
              color="amber-9"
              label="Explore"
            />
          </div>
        </q-card>
        <q-card style="width: 18%">
          <q-card-section class="bg-teal text-white text-center">
            <q-icon
              clickable
              name="biotech"
              style="font-size: 4rem"
            />
            <div class="text-subtitle1 text-bold">Methodology</div>
          </q-card-section>

          <q-card-section>
            You can see how the territory-wide rocky shore biodiversity survey
            was conducted here.
          </q-card-section>
          <div class="q-pa-md row absolute-bottom justify-end">
            <q-btn
              no-caps
              color="teal"
              label="Explore"
            />
          </div>
        </q-card>
        <q-card style="width: 18%">
          <q-card-section class="bg-blue-8 text-white text-center">
            <q-icon
              clickable
              name="collections"
              style="font-size: 4rem"
            />
            <div class="text-subtitle1 text-bold">Gallery</div>
          </q-card-section>

          <q-card-section>
            See how we enjoyed our fieldwork in this gallery! We have also
            uploaded photographs of fantastic rocky intertidal organisms and
            landscapes here!
          </q-card-section>
          <div class="q-pa-md row absolute-bottom justify-end">
            <q-btn
              no-caps
              color="blue-8"
              label="Explore"
            />
          </div>
        </q-card>
        <q-card style="width: 18%">
          <q-card-section class="bg-indigo text-white text-center">
            <q-icon
              clickable
              name="dashboard"
              style="font-size: 4rem"
            />
            <div class="text-subtitle1 text-bold">Dashboard Navigation</div>
          </q-card-section>

          <q-card-section>
            The quick navigation panel under the ≡ drawer allows quick access to
            the physical and biological dashboards of our 24 field sites.
          </q-card-section>
          <div class="q-pa-md row absolute-bottom justify-end">
            <q-btn
              no-caps
              color="indigo-5"
              label="Explore"
            />
          </div>
        </q-card>
      </div>
    </q-card>

    <q-card
      flat
      bordered
      class="q-ma-sm maincard"
    >
      <!-- add the aviable links -->
      <div class="q-pa-sm row text-h4 text-bold justify-center subtitle">
        Meet the TideChasers
      </div>
      <q-card-section
        class="q-pa-md maincard"
        horizontal
      >
        <div
          class="q-ma-md text-subtitle1"
          v-html="TidesMessage"
        >
          {{ TidesMessage }}
        </div>
        <q-img
          class="col-5"
          src="~/assets/rockyshore.jpg"
        />
      </q-card-section>

      <!-- breakpoint of the section -->
    </q-card>

    <q-card
      bordered
      flat
      class="q-ma-sm bg-white maincard"
    >
      <div class="q-pa-sm bg-indigo-6 text-white text-h4 text-bold text-center">
        Related Links
      </div>
      <q-card-section class="row justify-evenly">
        <div class="q-px-lg linkcard">
          <q-img src="~/assets/TIDElogo.png"> </q-img>
        </div>
        <div class="q-px-lg linkcard">
          <q-img src="~/assets/SWIMSlogo2.png"> </q-img>
        </div>
        <div class="q-px-lg linkcard">
          <q-img src="~/assets/ECFlogo.jpg"> </q-img>
        </div>
        <div class="q-pa-lg linkcard">
          <q-img src="~/assets/HKOlogo.png"> </q-img>
        </div>
        <div class="q-px-lg linkcard">
          <q-img src="~/assets/hkulogo.jpg"> </q-img>
        </div>
      </q-card-section>
      <q-card-section class="row justify-evenly q-gutter-md">
        <q-btn
          no-caps
          class="linkbtn"
          label="Tropical IntertiDal Ecology (TIDE) Group"
          type="a"
          target="_blank"
          href="https://www.tidehku.com/"
        />
        <q-btn
          no-caps
          class="linkbtn"
          label="The Swire Institute of Marine Science (SWIMS), HKU"
          type="a"
          target="_blank"
          href="https://www.swims.hku.hk/"
        />
        <q-btn
          no-caps
          class="linkbtn"
          label="Environmental and Conservation Fund (ECF)"
          type="a"
          target="_blank"
          href="https://www.ecf.gov.hk/en/home/index.html "
        />
        <q-btn
          no-caps
          class="linkbtn"
          label="Hong Kong Observatory (HKO)"
          type="a"
          target="_blank"
          href="https://www.hko.gov.hk/en/index.html"
        />
        <q-btn
          no-caps
          class="linkbtn"
          label="The School of Biological Science, University of Hong Kong"
          type="a"
          target="_blank"
          href="https://www.biosch.hku.hk/ "
        />
      </q-card-section>
    </q-card>

    <!-- <q-card
      flat
      bordered
      class="q-ma-sm maincard"
    >
      <div class="q-pa-md row text-h4 text-bold justify-center subtitle">
        Photo Gallery | Species around Hong Kong Rocky Shore
      </div>
      <q-card-section class="q-pa-md">
        <q-carousel
          arrows
          animated
          v-model="slide2"
          height="450px"
        >
          <q-carousel-slide
            name="first"
            img-src="https://live.staticflickr.com/4480/37090314393_d7f0e99270_b.jpg"
          >
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Species One</div>
              <div class="text-subtitle1">Diadumene lineata</div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide
            name="second"
            img-src="https://st4.depositphotos.com/11040300/31028/i/1600/depositphotos_310289226-stock-photo-tiny-sea-shells-lunella-coronata.jpg"
          >
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Species Two</div>
              <div class="text-subtitle1">Lunella Coronata</div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide
            name="third"
            img-src="https://static.inaturalist.org/photos/16832624/large.jpg?1525025403"
          >
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Species Three</div>
              <div class="text-subtitle1">Saccostrea cuccullata</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-card-section>
      <div class="q-pa-md">1</div>
    </q-card> -->
  </q-page>
</template>

<script>
import Vue from "vue";
import VideoBackground from "vue-responsive-video-background-player";
Vue.component("video-background", VideoBackground);

export default {
  name: "PageIndex",
  data() {
    return {
      resume: false,
      HKRISE: `
       <h>H</h>ong <h>K</h>ong <h>R</h>ocky shore <h>I</h>nteractive <h>S</h>earch <h>E</h>ngine (<h>HKRISE</h>) is a geographic information system (GIS) representing the findings from the first systematic, quantitative territory-wide rocky shore biodiversity survey in Hong Kong. With over 80% of Hong Kong's coastline being hard, rocky outcrops (Morton et al. 1996), rocky shores in Hong Kong not only are incredibly rich in biodiversity, but are also extremely dynamic through seasons where you will see completely different landscapes during monsoonal summer and winter. In this GIS you'll get to explore the species we found on a number of rocky shores in Hong Kong, from the oceanic east to the Pearl River-influenced west coast, from shores heavily influenced by anthropogenic impact to the remote, undisturbed northeastern islands, and from ferocious wave-exposed shores to calm, sheltered bays. As you will see, each rocky shore is quite unique not only in terms of their biota, but also in their physical characteristics which drive some of the variation we observe in species abundance and distribution. We hope, through the use of this GIS, you can visualize the biodiversity and physical environment of Hong Kong's rocky shore in a vivid way, compare and contrast spatial and seasonal differences in community structure, and to search for species distribution rapidly in an user-friendly interface. We also include in this GIS information on historical species distribution (1912 - 2015) from the review by Ng et al. 2017 (database available at  <a
            href="https://www.tidehku.com/"
            target="_blank"
          >
            <strong>Tropical IntertiDal Ecology (TIDE) Group</strong>
          </a> ) and, therefore, you can compare our current dataset with species records from the past. Let the exploration begin!`,
      HKRockyShore1: `The coastline of Hong Kong is long and complex.  Whilst wave-exposed shores in Hong Kong are generally located along southern and eastern coasts due to long wave fetches opening towards the South China Sea, western coasts and shores within the Tolo Harbour are relatively sheltered as they are protected by adjacent islands or headlands.  In fact, the complex coastline and presence of numerous islands in Hong Kong waters (> 260 islands of various sizes, Williams et al. 2019) create spatially variable wave fetches and, when coupled with the highly heterogeneous geomorphology in coastal rock types (granites, sandstone, siltstone etc) and the east-west salinity/nutrient gradients created by the Pearl River discharge, a diverse set of physical environments are found along Hong Kong rocky shores.`,
      HKRockyShore2: `In terms of seasonal changes, Hong Kong experiences a seasonal tropical climate with primarily a hot & wet (~ May to Oct) and a cool & dry season (~ Dec to Mar) throughout the year.  During the hot & wet season, daily maximum air temperature can reach up to 35 °C (HKO, 2021), and rock temperature on the shore can reach even higher, attaining 62 °C at the maximum.  Mass mortality of rocky shore organisms is thus often observed during this time of the year, particularly for sessile species (e.g. mussels) which cannot move around to escape the heat stress.  On the other hand, however, rainfall in Hong Kong is also more frequent and intense in this season, with over 80% of annual rainfalls occurring during May to Sep (HKO, 2021) which, when combined with the hot temperature, can impose severe physiological stress to rocky shore organisms (Firth & Williams 2009).`,
      HKRockyShore3: `In the cool & dry season, although thermal stress is ameliorated, the stronger north-eastern monsoon (compared to the hot & wet season) results in stronger waves and thus higher dislodgement risk experienced by rocky shore organisms.  In this time of the year, macroalgae such as Phycocalidia spp. and Ulva spp. thrive on shores probably due to the low environmental temperature (with rock surface attaining a minimum of 4 °C), and the supply of larvae from temperate seas brought by the Taiwan Current (originates from the East China Sea).  The cool, less-saline Taiwan Current is, however, moderated by the south China branching of the Kuroshio Current, which carries warmer tropical waters and keeps Hong Kong waters relatively warm and saline even during the cool & dry season.  In the hot & wet season, due to the shift in monsoon direction, the South China Sea Warm Current (also known as the Hainan Current) prevails, bringing us warm waters and larvae of tropical species.  Overall, the dynamic seasonal changes and complex spatial variations in shore physical environments allow for a multitude of species to settle and live on Hong Kong rocky shores, which harbour a rich set of species assemblages that you can get to explore using this GIS!`,
      TidesMessage: `This territory-wide rocky shore survey is not possible without the dedication of a rather small group of enthusiastic (or crazy ...) rocky shore ecologists (call us TideChasers …): Steven Wong, Brian Leung, Jackson Lau, Valerie Hickey and Tommy Hui, all members of the <a
            href="https://www.tidehku.com/"
            target="_blank"
          >
            <strong>Tropical IntertiDal Ecology (TIDE) Group</strong>
          </a> led by Prof. Gray A. Williams at the Swire Institute of Marine Science, the University of Hong Kong.  This GIS was developed by Yvonne Li and Yifei Gu, computer specialists in the TIDE group.  The team would also like to thank other members of the TIDE group for their tremendous help both on the shore and in the laboratory, and grant number 105/2019 from the Environment Conservation Fund, HKSAR, which financed the project.`,
      tab: "interactiveHabitat",
      slide: 1,
      autoplay: false,
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
  },
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
.membercard
  width: 19%
.subtitle
  background-color: $indigo-6
  color: white
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>

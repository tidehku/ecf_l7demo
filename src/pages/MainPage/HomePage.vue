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
      <div class="q-pa-md text-subtitle1">
        <h>H</h>ong <h>K</h>ong <h>R</h>ocky shore <h>I</h>nteractive <h>S</h>earch <h>E</h>ngine (<h>HKRISE</h>) {{HKRISE}}
      </div>
    </div>

    <div class="q-pa-xl justify-center">
      <q-card class="q-pa-sm bg-indigo text-h4 text-bold text-white">Hong Kong Rocky Shore Environment</q-card>
      <div class="q-pa-sm text-subtitle1">
        {{ HKRockyShore1 }} </div>
      <div class="q-pa-sm text-subtitle1">
        {{ HKRockyShore1 }} </div>

      <div class="q-pa-sm q-gutter-md row no-wrap">
        <div class="col-7 text-subtitle1">
          {{ HKRockyShore3 }}
        </div>
        <q-img
          style="width:40%"
          src="~/assets/images/hkrockyshore1.jpg"
        />
      </div>

      <!-- <q-card
      flat
      bordered
      class="q-ma-sm maincard"
    >
      <div class="q-pa-md row text-h4 text-bold justify-center subtitle">
        ECF Rocky Shore Sampling Sites
      </div>

      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-white bg-grey-10"
          active-color="indigo-4"
          indicator-color="indigo-4"
          align="justify"
          narrow-indicator
        >
          <q-tab
            name="Eastern"
            label="Eastern"
          />
          <q-tab
            name="North Eastern"
            label="North Eastern"
          />
          <q-tab
            name="North Western"
            label="North Western"
          />
          <q-tab
            name="Southern"
            label="Southern"
          />
          <q-tab
            name="South Western"
            label="South Western"
          />
          <q-tab
            name="Tolo Habour"
            label="Tolo Habour"
          />
        </q-tabs>
        <q-separator />
        <q-tab-panels
          v-model="tab"
          animated
        >
          <q-tab-panel name="Eastern">
            <div class="row justify-center q-gutter-md">
              <q-card
                class="col-3 sitecard"
                v-for="EA in EAs"
                :key="EA.message"
              >
                <q-img
                  src="~/assets/rockyshore.jpg"
                  basic
                >
                  <div class="absolute-bottom text-bold text-h7">
                    Eastern - {{ EA }}
                  </div>
                </q-img>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
                <div class="q-pa-md row justify-end">
                  <q-btn
                    no-caps
                    color="indigo-5"
                    label="Learn more"
                    to="/physicalDashboard"
                  />
                </div>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="North Eastern">
            <div class="row justify-center q-gutter-md">
              <q-card
                class="col-3 sitecard"
                v-for="NE in NEs"
                :key="NE.message"
              >
                <q-img
                  src="~/assets/rockyshore.jpg"
                  basic
                >
                  <div class="absolute-bottom text-bold text-h7">
                    North Eastern - {{ NE }}
                  </div>
                </q-img>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
                <div class="q-pa-md row justify-end">
                  <q-btn
                    no-caps
                    color="indigo-5"
                    label="Learn more"
                  />
                </div>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="North Western">
            <div class="row justify-center q-gutter-md">
              <q-card
                class="col-3 sitecard"
                v-for="NW in NWs"
                :key="NW.message"
              >
                <q-img
                  src="~/assets/rockyshore.jpg"
                  basic
                >
                  <div class="absolute-bottom text-bold text-h7">
                    North Western - {{ NW }}
                  </div>
                </q-img>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
                <div class="q-pa-md row justify-end">
                  <q-btn
                    no-caps
                    color="indigo-5"
                    label="Learn more"
                  />
                </div>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="Southern">
            <div class="row justify-center q-gutter-md">
              <q-card
                class="col-3 sitecard"
                v-for="SO in SOs"
                :key="SO.message"
              >
                <q-img
                  src="~/assets/rockyshore.jpg"
                  basic
                >
                  <div class="absolute-bottom text-bold text-h7">
                    Southern - {{ SO }}
                  </div>
                </q-img>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
                <div class="q-pa-md row justify-end">
                  <q-btn
                    no-caps
                    color="indigo-5"
                    label="Learn more"
                  />
                </div>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="South Western">
            <div class="row justify-center q-gutter-md">
              <q-card
                class="col-3 sitecard"
                v-for="SW in SWs"
                :key="SW.message"
              >
                <q-img
                  src="~/assets/rockyshore.jpg"
                  basic
                >
                  <div class="absolute-bottom text-bold text-h7">
                    South Western - {{ SW }}
                  </div>
                </q-img>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
                <div class="q-pa-md row justify-end">
                  <q-btn
                    no-caps
                    color="indigo-5"
                    label="Learn more"
                  />
                </div>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="Tolo Habour">
            <div class="row justify-center q-gutter-md">
              <q-card
                class="col-3 sitecard"
                v-for="TL in TLs"
                :key="TL.message"
              >
                <q-img
                  src="~/assets/rockyshore.jpg"
                  basic
                >
                  <div class="absolute-bottom text-bold text-h7">
                    Tolo Habour - {{ TL }}
                  </div>
                </q-img>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
                <div class="q-pa-md row justify-end">
                  <q-btn
                    no-caps
                    color="indigo-5"
                    label="Learn more"
                  />
                </div>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-card> -->

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
          <div class="q-ma-md text-subtitle1">
            {{ TidesMessage }}</div>
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
        <div class="q-pa-sm bg-indigo-6 text-white text-h4 text-bold text-center">Related Links</div>
        <q-card-section class="row justify-evenly">
          <q-card
            flat
            class="q-px-lg linkcard"
          >
            <q-img src="~/assets/hkulogo.jpg"> </q-img>

          </q-card>

          <q-card
            flat
            class="q-px-lg linkcard"
          >
            <q-img src="~/assets/SWIMSlogo2.png"> </q-img>

          </q-card>
          <q-card
            flat
            class="q-px-lg linkcard"
          >
            <q-img src="~/assets/TIDElogo.png"> </q-img>
          </q-card>
          <q-card
            flat
            class="q-px-lg linkcard"
          >
            <q-img src="~/assets/ECFlogo.jpg"> </q-img>

          </q-card>
        </q-card-section>
        <q-card-section class="row justify-evenly q-gutter-md">
          <q-btn
            no-caps
            color="indigo-5"
            style="width: 16%"
            label="Tropical IntertiDal Ecology (TIDE) Group"
            target="_blank"
            href="https://www.hku.hk/"
          />
          <q-btn
            no-caps
            color="indigo-5"
            style="width: 16%"
            label="The Swire Institute of Marine Science (SWIMS)"
            type="a"
            href="https://www.swims.hku.hk/"
          />
          <q-btn
            no-caps
            color="indigo-5"
            style="width: 16%"
            label="Environmental and Conservation Fund (ECF)"
            type="a"
            href="https://www.tidehku.com/"
          />
          <q-btn
            no-caps
            color="indigo-5"
            style="width: 16%"
            label="Hong Kong Observatory (HKO)"
            type="a"
            href="https://www.ecf.gov.hk/en/home/index.html"
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

    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      HKRISE:
        "is a geographic information system (GIS) representing the findings from the first systematic, quantitative territory-wide rocky shore biodiversity survey in Hong Kong. With over 80% of Hong Kong's coastline being hard, rocky outcrops (Morton et al. 1996), rocky shores in Hong Kong not only are incredibly rich in biodiversity, but are also extremely dynamic through seasons where you will see completely different landscapes during monsoonal summer and winter. In this GIS you'll get to explore the species we found on a number of rocky shores in Hong Kong, from the oceanic east to the Pearl River-influenced west coast, from shores heavily influenced by anthropogenic impact to the remote, undisturbed northeastern islands, and from ferocious wave-exposed shores to calm, sheltered bays. As you will see, each rocky shore is quite unique not only in terms of their biota, but also in their physical characteristics which drive some of the variation we observe in species abundance and distribution. We hope, through the use of this GIS, you can visualize the biodiversity and physical environment of Hong Kong's rocky shore in a vivid way, compare and contrast spatial and seasonal differences in community structure, and to search for species distribution rapidly in an user-friendly interface. We also include in this GIS information on historical species distribution (1912 - 2015) from the review by Ng et al. 2017 (database available at Tropical IntertiDal Ecology (TIDE) group) and, therefore, you can compare our current dataset with species records from the past. Let the exploration begin!",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      HKRockyShore1:
        "The coastline of Hong Kong is long and complex.  Whilst wave-exposed shores in Hong Kong are generally located along southern and eastern coasts due to long wave fetches opening towards the South China Sea, western coasts and shores within the Tolo Harbour are relatively sheltered as they are protected by adjacent islands or headlands.  In fact, the complex coastline and presence of numerous islands in Hong Kong waters (> 260 islands of various sizes, Williams et al. 2019) create spatially variable wave fetches and, when coupled with the highly heterogeneous geomorphology in coastal rock types (granites, sandstone, siltstone etc) and the east-west salinity/nutrient gradients created by the Pearl River discharge, a diverse set of physical environments are found along Hong Kong rocky shores.",
      HKRockyShore2:
        "In terms of seasonal changes, Hong Kong experiences a seasonal tropical climate with primarily a hot & wet (~ May to Oct) and a cool & dry season (~ Dec to Mar) throughout the year.  During the hot & wet season, daily maximum air temperature can reach up to 35 °C (HKO, 2021), and rock temperature on the shore can reach even higher, attaining 62 °C at the maximum.  Mass mortality of rocky shore organisms is thus often observed during this time of the year, particularly for sessile species (e.g. mussels) which cannot move around to escape the heat stress.  On the other hand, however, rainfall in Hong Kong is also more frequent and intense in this season, with over 80% of annual rainfalls occurring during May to Sep (HKO, 2021) which, when combined with the hot temperature, can impose severe physiological stress to rocky shore organisms (Firth & Williams 2009).",
      HKRockyShore3:
        "In the cool & dry season, although thermal stress is ameliorated, the stronger north-eastern monsoon (compared to the hot & wet season) results in stronger waves and thus higher dislodgement risk experienced by rocky shore organisms.  In this time of the year, macroalgae such as Phycocalidia spp. and Ulva spp. thrive on shores probably due to the low environmental temperature (with rock surface attaining a minimum of 4 °C), and the supply of larvae from temperate seas brought by the Taiwan Current (originates from the East China Sea).  The cool, less-saline Taiwan Current is, however, moderated by the south China branching of the Kuroshio Current, which carries warmer tropical waters and keeps Hong Kong waters relatively warm and saline even during the cool & dry season.  In the hot & wet season, due to the shift in monsoon direction, the South China Sea Warm Current (also known as the Hainan Current) prevails, bringing us warm waters and larvae of tropical species.  Overall, the dynamic seasonal changes and complex spatial variations in shore physical environments allow for a multitude of species to settle and live on Hong Kong rocky shores, which harbour a rich set of species assemblages that you can get to explore using this GIS!",
      TidesMessage:
        "This territory-wide rocky shore survey is not possible without the dedication of a rather small group of enthusiastic (or crazy ...) rocky shore ecologists (call us TideChasers …): Steven Wong, Brian Leung, Jackson Lau, Valerie Hickey and Tommy Hui, all members of the Tropical IntertiDal Ecology (TIDE) group led by Prof. Gray A. Williams at the Swire Institute of Marine Science, the University of Hong Kong.  This GIS was developed by Yvonne Li and Yifei Gu, computer specialists in the TIDE group.  The team would also like to thank other members of the TIDE group for their tremendous help both on the shore and in the laboratory, and grant number 105/2019 from the Environment Conservation Fund, HKSAR, which financed the project.",
      Identity: "Student",
      tab: "interactiveHabitat",
      slide: 1,
      slide2: "first",
      autoplay: false,
      group: "op1",
      options: [
        {
          label: "Eastern",
          value: "op1",
        },
        {
          label: "North Eastern",
          value: "op2",
        },
        {
          label: "North Western",
          value: "op3",
        },
        {
          label: "Southern",
          value: "op4",
        },
        {
          label: "South Western",
          value: "op5",
        },
        {
          label: "Tolo Habour",
          value: "op6",
        },
      ],
      tab: "Eastern",
      EAs: ["Pak Lap", "Kau Sai Chau", "Pak Shui Wun", "Sai Wan"],
      NEs: ["Double Island", "Hung Shek Mun", "Kat O", "Yung Shue Au"],
      NWs: ["Luk Keng", "Lung Kwu Tan", "Siu Lam", "Tai O"],
      SOs: ["Middle Bay", "Tai Tam", "Wah Fu", "Shek O"],
      SWs: ["Peng Chau", "Pui O", "Shui Tseng", "Tai Long Wan"],
      TLs: ["Lai Chi Chong", "Ma Shi Chau", "Starfish Bay", "Tseng Tau"],
      expanded: false,
      regions: [
        {
          label: "Eastern",
          sites: ["Pak Lap", "Kau Sai Chau", "Pak Shui Wun", "Sai Wan"],
        },
        {
          label: "North Eastern",
          sites: ["Double Island", "Hung Shek Mun", "Kat O", "Yung Shue Au"],
        },
        {
          label: "North Western",
          sites: ["Luk Keng", "Lung Kwu Tan", "Siu Lam", "Tai O"],
        },
        {
          label: "Southern",
          sites: ["Middle Bay", "Tai Tam", "Wah Fu", "Shek O"],
        },
        {
          label: "South Western",
          sites: ["Peng Chau", "Pui O", "Shui Tseng", "Tai Long Wan"],
        },
        {
          label: "Tolo Habour",
          sites: ["Lai Chi Chong", "Ma Shi Chau", "Starfish Bay", "Tseng Tau"],
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.page
  background-color: $grey-3
  height: 100vh
.maincard
  background-color: $indigo-1
  border-width: 2px
.sitecard
  width: 23%
.linkcard
  width: 16%
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
h
  font-weight: bold
  color: $indigo
</style>

<template>
  <div class="page justify-center q-gutter-xs q-ma-sm">
    <!-- img-gallery -->
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

    <div class="q-my-xl row justify-center text-h3 text-bold">
      Welcome to ECF Rocky Shore GIS Website Storyboard
    </div>

    <q-card
      flat
      bordered
      class="q-ma-sm maincard"
    >
      <q-card-section horizontal>
        <div class="q-ma-md q-gutter-lg">
          <div class="text-h4 text-bold text-indigo">Hong Kong Rocky Shore</div>
          <p>{{ lorem }} {{ lorem }} {{ lorem }}</p>
        </div>
        <q-img
          class="col-5"
          src="~/assets/rockyshore.jpg"
        />
      </q-card-section>
    </q-card>

    <q-card
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
    </q-card>

    <q-card class="q-ma-md maincard">
      <q-card-section class="bg-indigo-6 text-white">
        <div class="text-h4 text-bold text-center">Important Links</div>
      </q-card-section>
      <q-card-section class="row justify-around">
        <q-card class="col-3 q-pa-sm sitecard">
          <q-card-section class="q-pa-lg">
            <q-img src="~/assets/hkulogo.jpg">
            </q-img>
          </q-card-section>
          <div class="row justify-center">
            <q-btn
              no-caps
              color="indigo-5"
              label="The University of Hong Kong (HKU)"
              type="a"
              href="https://www.hku.hk/"
            />
          </div>
        </q-card>

        <q-card class="col-3 q-pa-sm sitecard">
          <q-card-section class="q-pa-lg">
            <q-img src="~/assets/SWIMSlogo2.png">
            </q-img>
          </q-card-section>
          <div class="row justify-center">
            <q-btn
              no-caps
              color="indigo-5"
              label="The Swire Institute of Marine Science (SWIMS)"
              type="a"
              href="https://www.swims.hku.hk/"
            />
          </div>
        </q-card>
        <q-card class="col-3 q-pa-sm sitecard">
          <q-card-section>
            <q-img src="~/assets/TIDElogo.png">
            </q-img>
          </q-card-section>
          <div class="row justify-center">
            <q-btn
              no-caps
              color="indigo-5"
              label="Tropical IntertiDal Ecology (TIDE) Group"
              type="a"
              href="https://www.tidehku.com/"
            />
          </div>
        </q-card>
        <q-card class="col-3 q-pa-sm sitecard">
          <q-card-section class="q-pa-lg">
            <q-img src="~/assets/ECFlogo.jpg">
            </q-img>
          </q-card-section>
          <div class="row justify-center">
            <q-btn
              no-caps
              color="indigo-5"
              label="Environment and Conservation Fund (ECF)"
              type="a"
              href="https://www.ecf.gov.hk/en/home/index.html"
            />
          </div>
        </q-card>
      </q-card-section>
      </q-card-actions>
    </q-card>

    <q-card
      flat
      bordered
      class="q-ma-sm maincard"
    >
      <!-- add the aviable links -->
      <div class="q-pa-md row text-h4 text-bold justify-center subtitle">
        About Us | Tropical IntertiDal Ecology (TIDE) Group
      </div>
      <q-card-section
        class="q-pa-md maincard"
        horizontal
      >
        <div class="q-ma-md">
          <p>{{ TidesMessage }}</p>
        </div>
        <q-img
          class="col-5"
          src="~/assets/rockyshore.jpg"
        />
      </q-card-section>

      <!-- breakpoint of the section -->

      <div class="q-pa-md row text-h4 text-bold justify-center subtitle">
        Our People | Tide Group Members
      </div>
      <div class="q-py-md row justify-center q-gutter-sm">
        <q-card
          class="col-3 q-py-md membercard"
          v-for="item in 10"
          :key="item.message"
        >
          <q-img
            src="~assets/personicon.png"
            basic
          > </q-img>
          <div class="q-px-md subtitle">
            <div class="text-h5 text-bold">Name</div>
            <div class="text-caption text-indigo-2 text-italic">
              Title/position
            </div>

          </div>
          <div class="q-px-md text-caption text-black ">
            <b>Contact:</b> email address
          </div>
          <!-- <div class="row justify-end">
            <q-btn
              color="grey"
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />

            <div v-show="expanded">
              <q-card-section class="text-caption">
                {{ lorem }}
              </q-card-section>
            </div>

          </div> -->
        </q-card>
      </div>
    </q-card>

    <q-card
      flat
      bordered
      class="q-ma-sm maincard"
    >
      <!-- add the aviable links -->
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
            img-src="https://st4.depositphotos.com/11040300/31028/i/1600/depositphotos_310289226-stock-photo-tiny-sea-shells-lunella-coronata.jpg"
          >
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Species One</div>
              <div class="text-subtitle1">Lunella Coronata</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            name="second"
            img-src="https://live.staticflickr.com/4480/37090314393_d7f0e99270_b.jpg"
          >
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Species Two</div>
              <div class="text-subtitle1">Diadumene lineata</div>
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

    </q-card>

  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      TidesMessage:
        "Welcome to the Tropical IntertiDal Ecology (TIDE) Group at the Swire Institute of Marine Science (SWIMS), HKU! Our primary research interests are in unravelling the mechanisms underlying the behaviours and ecophysiology of intertidal organisms, but we are really interested in almost anything you find on rocky (and occasionally sandy, and extremely occasionally mangrove!) intertidal systems.  By a combination of field and laboratory methods we aim to quantify and understand species responses from individual to biogeographic scales in today’s rapidly changing environment. Using a variety of empirical and modelling approaches, we synthesize novel ideas, examine critical hypotheses, and establish mechanistic links between patterns and processes to advance our knowledge on tropical intertidal ecology.  We also get to travel to great places, work with some really cool people and eat a lot of excellent regional food!",
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

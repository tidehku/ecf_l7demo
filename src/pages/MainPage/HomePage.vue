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

      <!-- <q-option-group
        class="row justify-evenly"
        v-model="group"
        :options="options"
        color="primary"
        inline
      />
      <div class="q-py-md row justify-center q-gutter-md">
        <q-card
          class="col-3 sitecard"
          v-for="item in items"
          :key="item.message"
        >
          <q-img
            src="~/assets/rockyshore.jpg"
            basic
          >
            <div class="absolute-bottom text-h6">
              Eastern - {{ item }}
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
      </div> -->
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
</style>

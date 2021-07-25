<template>
  <q-card class="bg-indigo-1" style="height: 40vh">
    <div
      class="q-px-md bg-indigo-6 text-center text-h5 text-bold text-white rounded-borders"
    >
      Regional average data summary
    </div>
    <div class="col">
      <q-option-group
        class="text-center"
        v-model="panel"
        inline
        :options="[
          { label: '2020 Winter', value: 'winter2020' },
          { label: '2021 Summer', value: 'summer2021' }
        ]"
      />

      <q-tab-panels v-model="panel" animated class="bg-indigo-1">
        <q-tab-panel name="winter2020">
          <div class="row no-wrap justify-evenly">
            <q-card class="q-pa-sm bg-white">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.2rem">
                  Max. rock temperature
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1.2rem">High shore: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingNW.winter2020.highShoreTemp }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingNW.winter2020.highShoreTempDelta }} °C</b
                  >
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.winter2020.highShoreTempN }})
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1.2rem">Mid shore: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingNW.winter2020.lowShoreTemp }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingNW.winter2020.lowShoreTempDelta }} °C</b
                  >
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.winter2020.lowShoreTempN }})
                </div>
              </q-card-section>
            </q-card>

            <q-card class="q-pa-sm bg-white" style="width: 26%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.2rem">
                  Nutrient levels
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1.2rem">Chlorophyll <i>a</i>: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingNW.winter2020.chla }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingNW.winter2020.chlaDelta }} µg/cm<sup>2</sup></b
                  >
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.winter2020.chlaN }})
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1.2rem">Organic matter: </span>
                <div class="row no-wrap">
                  <div class="landingValue">{{ landingNW.winter2020.om }}</div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingNW.winter2020.omDelta }} mg/cm<sup>2</sup></b
                  >
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.winter2020.omN }})
                </div>
              </q-card-section>
            </q-card>

            <q-card class="q-pa-sm bg-white" style="width: 18%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.2rem">
                  Mobile species richness
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1.2rem">Max: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingNW.winter2020.mobileMax }}
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1.2rem">Min: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingNW.winter2020.mobileMin }}
                  </div>
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.winter2020.mobileN }})
                </div>
              </q-card-section>
            </q-card>

            <q-card class="q-pa-sm bg-white" style="width: 18%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.2rem">
                  Sessile species richness
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1.2rem">Max: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingNW.winter2020.sessileMax }}
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1.2rem">Min: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingNW.winter2020.mobileMin }}
                  </div>
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.winter2020.sessileN }})
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>

        <q-tab-panel name="summer2021">
          <div class="row no-wrap justify-evenly">
            <q-card class="q-pa-sm bg-white">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.2rem">
                  Max. rock temperature
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1.2rem">High shore: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingNW.summer2021.highShoreTemp }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingNW.summer2021.highShoreTempDelta }} °C</b
                  >
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.summer2021.highShoreTempN }})
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1.2rem">Mid shore: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingNW.summer2021.lowShoreTemp }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingNW.summer2021.lowShoreTempDelta }} °C</b
                  >
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.summer2021.lowShoreTempN }})
                </div>
              </q-card-section>
            </q-card>

            <q-card class="q-pa-sm bg-white" style="width: 26%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.2rem">
                  Nutrient levels
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1.2rem">Chlorophyll <i>a</i>: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingNW.summer2021.chla }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingNW.summer2021.chlaDelta }} µg/cm<sup>2</sup></b
                  >
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.summer2021.chlaN }})
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1.2rem">Organic matter: </span>
                <div class="row no-wrap">
                  <div class="landingValue">{{ landingNW.summer2021.om }}</div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingNW.summer2021.omDelta }} mg/cm<sup>2</sup></b
                  >
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.summer2021.omN }})
                </div>
              </q-card-section>
            </q-card>

            <q-card class="q-pa-sm bg-white" style="width: 18%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.2rem">
                  Mobile species richness
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1.2rem">Max: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingNW.summer2021.mobileMax }}
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1.2rem">Min: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingNW.summer2021.mobileMin }}
                  </div>
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.summer2021.mobileN }})
                </div>
              </q-card-section>
            </q-card>

            <q-card class="q-pa-sm bg-white" style="width: 18%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.2rem">
                  Sessile species richness
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1.2rem">Max: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingNW.summer2021.sessileMax }}
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1.2rem">Min: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingNW.summer2021.sessileMin }}
                  </div>
                </div>
                <div class="row justify-end">
                  (n = {{ landingNW.summer2021.sessileN }})
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-card>
</template>

<script>
import landingNW from "./landingNW";
export default {
  data() {
    return {
      panel: "winter2020",
      landingNW
    };
  }
};
</script>

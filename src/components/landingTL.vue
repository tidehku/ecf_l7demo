<template>
  <q-card class="bg-indigo-1" style="height: 49vh">
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
          { label: '2021 Summer', value: 'summer2021' },
          { label: '2021 Winter', value: 'winter2021' },
          { label: '2022 Summer', value: 'summer2022' }
        ]"
      />

      <q-tab-panels
        v-model="panel"
        animated
        class="bg-indigo-1"
        style="height: 38vh"
      >
        <q-tab-panel name="winter2020">
          <div class="row no-wrap">
            <q-card square class="bg-white" style="width: 20%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.1rem">
                  Max. rock temperature
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">High shore: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingTL.winter2020.highShoreTemp }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingTL.winter2020.highShoreTempDelta }} °C</b
                  >
                </div>
                
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">Mid shore: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingTL.winter2020.lowShoreTemp }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingTL.winter2020.lowShoreTempDelta }} °C</b
                  >
                </div>
                
              </q-card-section>
            </q-card>

            <q-card square class="bg-white" style="width: 25%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.1rem">
                  Nutrient levels
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">Chlorophyll <i>a</i>: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingTL.winter2020.chla }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingTL.winter2020.chlaDelta }} µg/cm<sup>2</sup></b
                  >
                </div>
                
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">Organic matter: </span>
                <div class="row no-wrap">
                  <div class="landingValue">{{ landingTL.winter2020.om }}</div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingTL.winter2020.omDelta }} mg/cm<sup>2</sup></b
                  >
                </div>
                
              </q-card-section>
            </q-card>

            <q-card square class="bg-white" style="width: 19%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.1rem">
                  Total wave fetch
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">Max: </span>
                &nbsp;
                <div class="row no-wrap">
                  <div class="landingValue q-pl-md">
                    {{ landingTL.winter2020.waveMax }}
                  </div>
                  &nbsp;
                  <b class="self-center">km</b>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">Min: </span>
                &nbsp;
                <div class="row no-wrap">
                  <div class="landingValue q-pl-md">
                    {{ landingTL.winter2020.waveMin }}
                  </div>
                  &nbsp;
                  <b class="self-center">km</b>
                </div>
                
              </q-card-section>
            </q-card>

            <q-card square class="bg-white" style="width: 18%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.1rem">
                  Mobile species richness
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1rem">Max: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingTL.winter2020.mobileMax }}
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1rem">Min: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingTL.winter2020.mobileMin }}
                  </div>
                </div>
                
              </q-card-section>
            </q-card>

            <q-card square class="bg-white" style="width: 18%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.1rem">
                  Sessile species richness
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1rem">Max: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingTL.winter2020.sessileMax }}
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1rem">Min: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingTL.winter2020.sessileMin }}
                  </div>
                </div>
                
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>

        <q-tab-panel name="summer2021">
          <div class="row no-wrap">
            <q-card square class="bg-white" style="width: 20%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.1rem">
                  Max. rock temperature
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">High shore: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingTL.summer2021.highShoreTemp }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingTL.summer2021.highShoreTempDelta }} °C</b
                  >
                </div>
                
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">Mid shore: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingTL.summer2021.lowShoreTemp }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingTL.summer2021.lowShoreTempDelta }} °C</b
                  >
                </div>
                
              </q-card-section>
            </q-card>

            <q-card square class="bg-white" style="width: 25%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.1rem">
                  Nutrient levels
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">Chlorophyll <i>a</i>: </span>
                <div class="row no-wrap">
                  <div class="landingValue">
                    {{ landingTL.summer2021.chla }}
                  </div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingTL.summer2021.chlaDelta }} µg/cm<sup>2</sup></b
                  >
                </div>
                
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">Organic matter: </span>
                <div class="row no-wrap">
                  <div class="landingValue">{{ landingTL.summer2021.om }}</div>
                  &nbsp;
                  <b class="self-center">
                    ± {{ landingTL.summer2021.omDelta }} mg/cm<sup>2</sup></b
                  >
                </div>
                
              </q-card-section>
            </q-card>

            <q-card square class="bg-white" style="width: 19%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.1rem">
                  Total wave fetch
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">Max: </span>
                &nbsp;
                <div class="row no-wrap">
                  <div class="landingValue q-pl-md">
                    {{ landingTL.summer2021.waveMax }}
                  </div>
                  &nbsp;
                  <b class="self-center">km</b>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <span style="font-size: 1rem">Min: </span>
                &nbsp;
                <div class="row no-wrap">
                  <div class="landingValue q-pl-md">
                    {{ landingTL.summer2021.waveMin }}
                  </div>
                  &nbsp;
                  <b class="self-center">km</b>
                </div>
                
              </q-card-section>
            </q-card>

            <q-card square class="bg-white" style="width: 18%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.1rem">
                  Mobile species richness
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1rem">Max: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingTL.summer2021.mobileMax }}
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1rem">Min: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingTL.summer2021.mobileMin }}
                  </div>
                </div>
                
              </q-card-section>
            </q-card>

            <q-card square class="bg-white" style="width: 18%">
              <q-card-section>
                <div class="landingSubtitle" style="font-size: 1.1rem">
                  Sessile species richness
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1rem">Max: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingTL.summer2021.sessileMax }}
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row no-wrap">
                  <span style="font-size: 1rem">Min: </span>
                  &nbsp;
                  <div class="landingValue q-pl-md">
                    {{ landingTL.summer2021.sessileMin }}
                  </div>
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
import landingTL from "./landingTL";
export default {
  data() {
    return {
      panel: "winter2020",
      landingTL
    };
  }
};
</script>

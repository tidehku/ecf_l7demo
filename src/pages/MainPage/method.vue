<template>
  <q-page class="q-gutter-md bg-grey-3">
    <div class="row">
      <div class="q-pa-xl q-gutter-md col-7">
        <div class="text-indigo title">
          Stratification of Hong Kong coastline
        </div>
        <div class="text-subtitle1">{{ stratification }}</div>
      </div>
      <div class="q-pa-md col-5">
        <q-img class="col-5" src="~/assets/method1.png" />
        <div class="q-px-md bg-black text-white">
          Map showing demarcation of regions and location of sampling sites
          within each region.
        </div>
      </div>
    </div>

    <div class="q-gutter-md bg-indigo-5 text-white">
      <div class="q-pa-md title text-center text-white">
        Rocky shore assemblage surveys using transect and quadrat methods
      </div>
      <div class="row justify-evenly">
        <div class="justify-center" style="width:25%">
          <q-img src="~/assets/method2.png" />
          <div class="q-px-md bg-black text-white">
            Morning survey in Shek O ....
          </div>
          <q-img src="~/assets/method3.png" />

          <div class="q-px-md bg-black text-white">
            The ECF team surveying rocky shores in Luk Keng
          </div>
          <q-img src="~/assets/method4.png" />
          <div class="q-px-md bg-black text-white">
            The ECF team surveying rocky shores in Tai O
          </div>
        </div>
        <div class="q-px-lg" style="width:60%">
          <div class="text-subtitle1">
            {{ method1 }}
          </div>
          <br />
          <br />
          <div class="text-subtitle1">
            {{ method2 }}
          </div>
        </div>
      </div>
    </div>

    <div class="q-gutter-md">
      <div class="q-pa-md title text-indigo text-center">
        Quantifying habitat properties
      </div>
      <div class="row justify-evenly">
        <div class="col-5">
          <div class="q-px-lg text-subtitle1">{{ quantifying }}</div>
        </div>
        <div class="col-6">
          <q-img style="width:50%" src="~/assets/method5.png" />
          <q-img style="width:50%" src="~/assets/method6.png" />
          <div class="q-px-md bg-black text-white">
            Custom-built wavelogger (left image) and rugged temperature loggers
            (right image) deployed on shores to record wave force and rock
            surface temperature.
          </div>
        </div>
      </div>
    </div>

    <div class="q-pa-md bg-indigo">
      <div class="title text-center text-white">Glossary</div>
      <div class="text-subtitle1 text-center text-white">
        This glossary outlines the definitions of the biological and physical
        terms/measurements adopted in this survey
      </div>
    </div>

    <div class="row justify-center">
      <q-table
        class="bioGlossary "
        title="Biological Terms/measurements"
        table-header-class="bg-teal-4 text-center text-bold text-white"
        title-class="text-bold text-teal"
        separator="horizontal"
        :data="bioGlossary"
        :columns="columns"
        row-key="name"
        hide-bottom
        :rows-per-page-options="[0]"
      >
        <template v-slot:body-cell-name="props">
          <q-td :props="props">
            <div>
              {{ props.value }}
            </div>
          </q-td>

          <q-td :props="props">
            <div class="description">
              {{ props.row.description }}
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="row justify-center">
      <q-table
        class="phyGlossary "
        title="Physical Terms/measurements"
        table-header-class="bg-blue-4 text-center text-bold text-white"
        title-class="text-bold text-blue"
        separator="horizontal"
        :data="phyGlossary"
        :columns="columns"
        row-key="name"
        hide-bottom
        :rows-per-page-options="[0]"
      >
        <template v-slot:body-cell-name="props">
          <q-td :props="props">
            <div>
              {{ props.value }}
            </div>
          </q-td>

          <q-td :props="props">
            <div class="description">
              {{ props.row.description }}
            </div>
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="q-pa-md bg-indigo">
      <div class="title text-center text-white">Reference</div>
    </div>
    <div class="row justify-center bg-white">
      <q-card flat v-html="reference" class="text-body1">
        <div class="text-left" style="text-align: left">
          {{ reference }}
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "Terminology",
          align: "left",
          field: row => row.name,
          format: val => `${val}`
        },
        {
          name: "description",
          align: "left",
          label: "Description"
        }
      ],

      bioGlossary: [
        {
          name: "Mobile species",
          description: `Species that are able to move around on their own, including most gastropods (snails and limpets), crabs and fishes.`
        },
        {
          name: "Sessile species",
          description: `Species with limited or no ability to move around, such as algae, bivalves (oysters and mussels) and some sea anemones.  In some cases, an entity in sessile species might not correspond to a single species but a mix of microbial species constituting an unique functional entity, e.g. high shore biofilm, that is hard to be further separated into species level in the field.`
        },
        {
          name: "Shannon’s diversity index (H’) ",
          description: `A diversity index based on Shannon & Weaver (1949), calculated using the formula H’ = - Σ pi log pi (where i ranges from 1 to the total number of species found, and pi is the proportion of the abundance of species i in the sampling area).  A higher value of H’ indicates a more diverse assemblage at a sampling area (either by increasing the number of species or having species with more similar numbers of individuals).  In our project, H’ is calculated based on identified mobile species where count is available.`
        },
        {
          name: "Species richness (S)",
          description: `The total number of either count or mobile species found in a sampling area, where counts or presence/absence data are available (either based on region/site in this GIS).`
        },
        {
          name: "Pielou’s evenness index (J)",
          description: `An index used to indicate the evenness of species distribution in an assemblage, calculated by dividing H’ with the maximum possible value of H’.  A higher J indicates a more even assemblage at a sampling area (species are having more similar number of individuals, instead of having heavily dominant species).  In our project, J is calculated based on identified mobile species where count is available.`
        },
        {
          name: "Chlorophyll a (Chl a) concentration",
          description: `A proxy for algal/biofilm biomass on the rock surface, measured using spectrophotometry (extraction using cold methanol) and expressed in µg/cm².  A higher value indicates higher standing stock of algae/cyanobacteria on the rock surface, which could be resulted from a higher productivity in the surrounding pelagic environment, or reduced consumer pressure (less abundance of grazers on the shore, see Williams et al. 2000).`
        },
        {
          name: "Organic matter (OM) concentration",
          description: `A proxy for total biomass (including algae, cyanobacteria, bacteria etc) on the rock surface, measured using mass loss-on-ignition (in a muffle furnace at 500 °C for 4 h) and expressed in mg/cm². `
        }
      ],
      phyGlossary: [
        {
          name: "Total wave fetch",
          description: `The total distance of seas along 16 equiangular directions from a coastal location to surrounding land masses (up to 200 km).  Longer the wave fetch generally implies stronger wave action impacting the shore (see Burrows et al. 2008).`
        },
        {
          name: "Max. wave force",
          description: `The maximum force (measured in N) estimated using a custom-built wavelogger with an accelerometer.  The logger was deployed at the low-mid level on the shore for 48 h, recording acceleration every 10 s.  The readings were, therefore, subjected to the prevailing wind direction and speed during the recording period.`
        },
        {
          name: "Rock temperature",
          description: `Rock surface temperature (measured in °C) using rugged temperature loggers attached onto the rock surface using marine epoxy.  Temperatures were recorded every 1 h for a period of 2 years at our study sites.`
        },
        {
          name: "Shore aspect",
          description: `The direction faced by the shore, measured using a hand-held compass (expressed in ° from the north direction).`
        },
        {
          name: "Shore slope",
          description: `The inclination of the shore measured in °, ranging from 0° (a completely horizontal shore) to 90° (a completely vertical shore).`
        },
        {
          name: "Rock type",
          description: `Geological formation/composition of rocks in our sampling sites, adopting the classification based on CEDD (2006).`
        },
        {
          name: "Chart Datum (C. D.)",
          description: `Water level during the lowest astronomical tide, which has been adopted as the reference level to measure tidal height in Hong Kong since 1917 (Lands Department, 1995).`
        },
        {
          name: "Wave exposure icons",
          description: `In the regional landing page where you can select information of the four study sites within that region, there is a “wave exposure icon” next to each site.  As we deliberately selected four sites with different wave exposures within a region, the icon indicates the relative wave exposure of that site: 
          Most exposed within the region: 
          Intermediately exposed within the region:
          Least exposed within the region: `
        }
      ]
    };
  },
  computed: {
    /* migrate text to Vuex store */
    method1() {
      return this.$store.state.storeText.method1;
    },
    method2() {
      return this.$store.state.storeText.method2;
    },
    quantifying() {
      return this.$store.state.storeText.quantifying;
    },
    stratification() {
      return this.$store.state.storeText.stratification;
    },
    reference() {
      return this.$store.state.storeText.reference;
    }
  }
};
</script>

<style lang="sass" scoped>
.title
  font-size: 2.5em
  font-weight: bold
.caption
  font-size: 1em
  color: $indigo-10
  font-style: italic

.bioGlossary
  width: 80%
.bioGlossary td:first-child
  width: 25%
  background-color: $teal-1
  font-weight: bold

.phyGlossary
  width: 80%
.phyGlossary td:first-child
  width: 25%
  background-color: $blue-1
  font-weight: bold

.description
  font-size: 1em
  white-space: normal
  margin-top: 4px
</style>

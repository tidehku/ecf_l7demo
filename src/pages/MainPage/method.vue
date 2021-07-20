<template>
  <q-page class="q-gutter-sm bg-grey-3">
    <div class="row methodConstrain">
      <div class="q-pa-md q-gutter-sm col-6">
        <div class="text-indigo title">
          Stratification of Hong Kong coastline
        </div>
        <div style="font-size: 1.3rem">{{ stratification }}</div>
      </div>
      <div class="q-pa-sm col-6">
        <q-img src="~/assets/method1.png" />
        <div class="text-center bg-black text-white">
          Map showing demarcation of regions and location of sampling sites
          within each region.
        </div>
      </div>
    </div>

    <div class="q-gutter-sm bg-indigo-5 text-white methodConstrain">
      <div class="q-pa-md title text-center text-white">
        Rocky shore assemblage surveys
      </div>
      <div class="row justify-around">
        <div class="justify-center" style="width:35%">
          <q-img src="~/assets/method2.png" />
          <div class="q-px-md bg-black text-white">
            Morning survey in Shek O ....
          </div>
          <q-img src="~/assets/method3.png" />

          <div class="q-px-md bg-black text-white">
            The ECF team surveying the rocky shore in Luk Keng.
          </div>
          <q-img src="~/assets/method4.png" />
          <div class="q-px-md bg-black text-white">
            The ECF team surveying the rocky shore in Tai O.
          </div>
        </div>
        <div class="q-px-lg" style="width:62%">
          <div style="font-size: 1.3rem" v-html="method1">
            {{ method1 }}
          </div>
          <br />
          <br />
          <div style="font-size: 1.3rem" v-html="method2">
            {{ method2 }}
          </div>
        </div>
      </div>
    </div>

    <div class="q-gutter-sm methodConstrain">
      <div class="q-pa-md title text-indigo text-center">
        Quantifying habitat properties
      </div>
      <div class="row justify-around">
        <div class="q-px-lg" style="font-size: 1.3rem" v-html="quantifying">
          {{ quantifying }}
        </div>

        <div>
          <q-img style="width:43vw" src="~/assets/method5.png" />
          <q-img style="width:43vw" src="~/assets/method6.png" />
          <div class="text-center bg-black text-white">
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
        This glossary outlines the definitions of biological and physical
        terms/measurements adopted in this survey.
      </div>
    </div>

    <div class="row justify-center">
      <q-table
        class="bioGlossary"
        title="Biological terms/measurements"
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
            <div v-html="props.value">
              {{ props.value }}
            </div>
          </q-td>

          <q-td :props="props">
            <div class="description" v-html="props.row.description">
              {{ props.row.description }}
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="row justify-center">
      <q-table
        class="phyGlossary"
        title="Physical terms/measurements"
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
      <div class="title text-center text-white">References</div>
    </div>
    <div class="row justify-center ">
      <div
        v-html="reference"
        style="text-align: left; width: 80vw; font-size: 1rem"
      >
        {{ reference }}
      </div>
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
          headerStyle: "font-size: 20px",
          field: row => row.name,
          format: val => `${val}`
        },
        {
          name: "description",
          align: "left",
          label: "Description",
          headerStyle: "font-size: 20px"
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
    },
    bioGlossary() {
      return this.$store.state.storeText.bioGlossary;
    },
    phyGlossary() {
      return this.$store.state.storeText.phyGlossary;
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
  width: 86vw
.bioGlossary td:first-child
  width: 25vw
  background-color: $teal-1
  font-weight: bold
  font-size: 1.3rem

.phyGlossary
  width: 86vw
.phyGlossary td:first-child
  width: 25vw
  background-color: $blue-1
  font-weight: bold
  font-size: 1.3rem

.description
  font-size: 1.3rem
  white-space: normal
  margin-top: 4px
</style>

<template>
  <q-page class="q-pa-md">
    <div class="title">
      Stratification of Hong Kong coastline
    </div>
    <div class="text-subtitle1"> {{ Stratification }}</div>
    <div class="title">
      Rocky shore assemblage surveys using transect and quadrat methods
    </div>
    <div class="text-subtitle1"> {{ method1 }}</div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      Stratification: `To achieve a representative sample of Hong Kong rocky shore biodiversity, the coastline of Hong Kong was stratified into six regions according to local hydrological characteristics and general shore directions: the north-western region which is heavily influenced by the Pearl River discharge (NW); the south-western region (SW), the southern region (SO), both regarded as the transition between the estuarine waters to the west and the oceanic waters to the east; the eastern region which is more oceanic and exposed (EA); the north-eastern region close to the border of China which is relatively undisturbed (NE) and the Tolo Harbour area which is a sheltered, enclosed bay in the New Territories (TL).`,
      method1: `Four sites were selected within each region, based on their exposures and sampling feasibilities, for the biodiversity survey.  Relatively exposed and sheltered sites were included in each of the six regions, in order to capture the variation in assemblage structures on shores with different wave-swept regimes.  At each site, six equidistant transects of ~ 16 m were laid from the low (defined as 0.25 m below the coralline zone, or 1.15 m above Chart Datum) to high tidal heights (defined as the Echinolittorina malaccana zone): high-high (HH), low-high (LM), high-mid (HM), low-mid (LM), high-low (HL) and low-low (LL).  Comparisons across sheltered and exposed shores are thus possible due to the tidal heights being defined operationally according to local, site-specific wave-swept regimes (based on the fact that E. malaccana follow the awash zone in the supralittoral fringe, see Lewis 1961, Gilman et al. 2006).`,
    };
  },
};
</script>

<style lang="sass" scoped>
.title
    font-size: 2em
    font-weight: bold
    color: $indigo
</style>
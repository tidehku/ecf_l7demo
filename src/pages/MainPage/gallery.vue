<template>
  <q-page class="page q-pa-md">
    <div class="row q-gutter-sm justify-center">
      <viewer style="width:19.2%">
        <div> Bivalve x 3 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Bivalve - Saccostrea cuccullata.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Bivalve - Saccostrea scyphophilla (=S. mordax) and a chiton.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Bivalve - Saccostrea sp..jpg')"
        />
        <div> Snail x 5</div>
        <img
          class="image"
          :src="require('../../assets/gallery/Snail - Echinolittorina radiata_2.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Snail - Monodonta labio and Peasiella sp.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Snail - Peasiella sp..jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Snail - Echinolittorina radiata_1.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Snail - Reishia clavigera.jpg')"
        />

      </viewer>
      <viewer style="width:19.2%">
        <div> Gastropod x 1 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Gastropod - Elysia sp.jpg')"
        />
        <div> Limpet x 4 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Limpet - Cellana toreuma.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Limpet - Lottia luchuana.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Limpet - Nipponacmea fuscoviridis.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Limpet - Patelloida saccharina.jpg')"
        />
        <div> False Limpet x 2 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/False limpet - Siphonaria laciniosa.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/False limpet - Siphonaria laciniosa2.jpg')"
        />

        <div> Chiton x 2 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Chiton -  Liolophura japonica.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Chiton - Leptoplax doederleini.jpg')"
        />
      </viewer>
      <viewer style="width:19.2%">
        <div> Sea anemone x 3 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Sea anemone - Anthopleura buddemeiri.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Sea anemone - Spheractis cheungae 1.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Sea anemone - Spheractis cheungae 2.jpg')"
        />
        <div> Barnale x 5 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Barnacle - Amphibalanus amphitrite.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Barnacle - Capitulum mitella.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Barnacle - mixed species.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Barnacle - Tetraclita japonica and limpets.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Barnacle - Tetraclita squamosa.jpg')"
        />
      </viewer>
      <viewer style="width:19.2%">

        <div> fish x 3 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Fish - Bathygobius meggitti 1.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Fish - Bathygobius meggitti 2.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Fish - Bathygobius meggitti 3.jpg')"
        />
        <div> Algae x 4 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Algae - Corallina sp..png')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Algae - Ishige sp..jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Algae - Phycocalidia (=Porphyra_ higher shore) and Dermonema (lower shore).jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Algae (cyanobacteria) - Kyrtuthrix maculans.jpg')"
        />
      </viewer>
      <viewer style="width:19.2%">
        <div> Shrimp </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Shrimp - Palaemon pacificus.jpg')"
        />
        <div> Bryozoan x 1 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Bryozoan - Watersipora sp. and Algae Colpomenia sinuosa.jpg')"
        />
        <div> Crab x 4 </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Crab - 1.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Crab - Eriphia smithii.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Crab - Nanosesarma minutum.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Crab - Parasesarma pictum.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Crab.jpg')"
        />
      </viewer>
      <!-- <viewer>
          <img
            class="image"
            :src="require('../../assets/rockyshore1.jpg')"
          />
          <img
            class="image"
            :src="require('../../assets/placeholder.png')"
          />
          <img
            class="image"
            :src="require('../../assets/map.png')"
          />
          <img
            class="image"
            :src="require('../../assets/ECFlogo.jpg')"
          />
        </viewer> -->

      <!-- <div class="row">
        <div style="width:25%">
          <q-zoom background-color="blue-grey-1">
            <img
              :src="require('../../assets/gallery/Snail - Echinolittorina radiata_1.jpg')"
              class="my-image"
            >
          </q-zoom>
          <q-zoom background-color="blue-grey-1">
            <img
              :src="require('../../assets/gallery/Snail - Echinolittorina radiata_2.jpg')"
              class="my-image"
            >
          </q-zoom>
          <q-zoom background-color="blue-grey-1">
            <img
              :src="require('../../assets/gallery/Snail - Monodonta labio and Peasiella sp.jpg')"
              class="my-image"
            >
          </q-zoom>
        </div>
      </div> -->
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.image
  // height: 35%
  max-width: 100%
  // width: 30vh
  // width: 30% // screen
  // max-height: 30%
  cursor: pointer
  // margin: 2px
  // display: inline-block

// .my-image
//   width: 24%
//   height: 25%
//   max-width: 100%
//   max-height: 100%
//   margin: auto

// .my-image
//   width: 100%
//   height: auto
//   max-width: 100%
//   max-height: 100%
//   margin: auto
</style>
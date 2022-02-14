<template>
  <q-page class="page q-pa-md">
    <div class="row q-gutter-sm justify-center">
      <viewer style="width:19.2%">
        <div class="speciesName">Bivalve</div>
        <img
          class="image"
          :src="
            require('../../assets/gallery/Bivalve - Saccostrea cuccullata.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Bivalve - Saccostrea scyphophilla (=S. mordax) and a chiton.jpg')
          "
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Bivalve - Saccostrea sp..jpg')"
        />
        <div class="speciesName">Snail</div>
        <img
          class="image"
          :src="
            require('../../assets/gallery/Snail - Echinolittorina radiata_2.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Snail - Monodonta labio and Peasiella sp.jpg')
          "
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Snail - Peasiella sp..jpg')"
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Snail - Echinolittorina radiata_1.jpg')
          "
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Snail - Reishia clavigera.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Gastropod - Elysia sp.jpg')"
        />
      </viewer>
      <viewer style="width:19.2%">
        <div class="speciesName">Limpet</div>
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
          :src="
            require('../../assets/gallery/Limpet - Nipponacmea fuscoviridis.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Limpet - Patelloida saccharina.jpg')
          "
        />
        <div class="speciesName">False limpet</div>
        <img
          class="image"
          :src="
            require('../../assets/gallery/False limpet - Siphonaria laciniosa.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/False limpet - Siphonaria laciniosa2.jpg')
          "
        />

        <div class="speciesName">Chiton</div>
        <img
          class="image"
          :src="
            require('../../assets/gallery/Chiton -  Liolophura japonica.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Chiton - Leptoplax doederleini.jpg')
          "
        />
      </viewer>
      <viewer style="width:19.2%">
        <div class="speciesName">Sea anemone</div>
        <img
          class="image"
          :src="
            require('../../assets/gallery/Sea anemone - Anthopleura buddemeiri.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Sea anemone - Spheractis cheungae 1.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Sea anemone - Spheractis cheungae 2.jpg')
          "
        />
        <div class="speciesName">Barnacle</div>
        <img
          class="image"
          :src="
            require('../../assets/gallery/Barnacle - Amphibalanus amphitrite.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Barnacle - Capitulum mitella.jpg')
          "
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Barnacle - mixed species.jpg')"
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Barnacle - Tetraclita japonica and limpets.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Barnacle - Tetraclita squamosa.jpg')
          "
        />
      </viewer>
      <viewer style="width:19.2%">
        <div class="speciesName">Fish</div>
        <img
          class="image"
          :src="
            require('../../assets/gallery/Fish - Bathygobius meggitti 1.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Fish - Bathygobius meggitti 2.jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Fish - Bathygobius meggitti 3.jpg')
          "
        />
        <div class="speciesName">Algae</div>
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
          :src="
            require('../../assets/gallery/Algae - Phycocalidia (=Porphyra_ higher shore) and Dermonema (lower shore).jpg')
          "
        />
        <img
          class="image"
          :src="
            require('../../assets/gallery/Algae (cyanobacteria) - Kyrtuthrix maculans.jpg')
          "
        />
      </viewer>
      <viewer style="width:19.2%">
        <div class="speciesName">Shrimp</div>
        <img
          class="image"
          :src="require('../../assets/gallery/Shrimp - Palaemon pacificus.jpg')"
        />
        <div class="speciesName">Crab</div>
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
        <div class="speciesName">Others</div>
        <img
          class="image"
          :src="
            require('../../assets/gallery/Bryozoan - Watersipora sp. and Algae Colpomenia sinuosa.jpg')
          "
        />
      </viewer>
    </div>
  </q-page>
</template>

<script>
import gtm from "../components/gtm";

export default {
  created() {
    gtm.logEvent("myCat", "myAction", "myLabel", 0);
  }
};
</script>

<style lang="sass" scoped>
.image
  max-width: 100%
  cursor: pointer
  border-radius: 8px
</style>

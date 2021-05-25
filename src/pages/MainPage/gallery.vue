<template>
  <q-page class="page q-pa-md">
    <div class="row q-gutter-sm">
      <viewer style="width:20%">
        <div> Snail x 5</div>
        <img
          class="image"
          :src="require('../../assets/gallery/Snail - Echinolittorina radiata_1.jpg')"
        />
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
          :src="require('../../assets/gallery/Snail - Peasiella sp.jpg')"
        />
        <img
          class="image"
          :src="require('../../assets/gallery/Snail - Reishia clavigera.jpg')"
        />
      </viewer>
      <viewer style="width:20%">
        <div> Shrimp </div>
        <img
          class="image"
          :src="require('../../assets/gallery/Shrimp - Palaemon pacificus.jpg')"
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
        <!-- <img
          class="image"
          :src="require('../../assets/gallery/False limpet - Siphonaria laciniosa2.JPG')"
        /> -->

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
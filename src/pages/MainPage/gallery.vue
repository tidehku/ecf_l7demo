<template>
  <q-page class="page">
    <div class="q-col-gutter-md row items-start">
      <div>
        <viewer>
          <img
            class="image"
            :src="require('../../assets/ECFlogo.jpg')"
          />
          <img
            class="image"
            :src="require('../../assets/hkulogo.jpg')"
          />
        </viewer>
        <viewer>
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
        </viewer>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="sass">
.image
  // height: 35%
  width: 30vh
  // width: 30% // screen
  max-height: 30%
  cursor: pointer
  margin: 7px
  display: inline-block
</style>
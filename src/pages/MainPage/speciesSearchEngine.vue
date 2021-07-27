<template>
  <div>
    <iframe
      id="hkriseSearchEngine"
      src="https://tidekepler-5wdtxpxin-ygswims.vercel.app"
      frameborder="1"
      style="position: absolute; top: 100px; width: 100%; height: 90vh"
    ></iframe>
  </div>
</template>

<script>
import { QSpinnerHourglass } from "quasar";
// import { firebaseAuth } from "boot/firebase";

export default {
  mounted() {
    this.$q.loading.show({
      spinner: QSpinnerHourglass,
      spinnerColor: "teal-3",
      spinnerSize: 150,
      message: '<h6 class="text-white">Initialising species search engine</h6>'
    });

    this.timer = setTimeout(() => {
      this.$q.loading.hide();
      this.timer = void 0;
    }, 2700);
  },
  beforeDestroy() {
    if (this.timer !== void 0) {
      clearTimeout(this.timer);
      this.$q.loading.hide();
    }
  }
};
</script>

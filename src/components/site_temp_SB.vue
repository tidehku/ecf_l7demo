<template>
  <q-card bordered>
        <div class="text-h5 text-bold row justify-center title">
          Hourly rock temperature throughout a day
         
         <q-option-group
        class="text-center"
        v-model="panel"
        inline
        :options="[
          { label: 'Year I', value: 'year1' },
          { label: 'Year II', value: 'year2' }
        ]"
      />
          <q-icon
            class="absolute all-pointer-events"
            size="32px"
            name="info"
            color="white"
            style="top: 2px; right: 8px"
          >
            <q-tooltip>
              Please visit the METHODS tab to check out how these measurements
              were made.
            </q-tooltip>
          </q-icon>
        </div>
        <div class="row">
          <div class="col-6 phyTab1">Winter</div>
          <div class="col-6 phyTab2">Summer</div>
        </div>
        <div class="row no-wrap">
          <highcharts class="col-6" :options="Temperature1"></highcharts>
          <q-separator vertical />
          <highcharts class="col-6" :options="Temperature2"></highcharts>
        </div>
      </q-card>
</template>
<script>
import landingEA from "./landingEA";
export default {
  data() {
    return {
      panel: "year1",
      site_temp_SB
    };
  }
};
</script>
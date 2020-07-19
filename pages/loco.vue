<template>
  <v-layout style="margin: 0px; padding: 0px;" justify-center>
    <v-flex style="margin: 0px; padding: 0px;" xs12 sm12 md12>
      <p style="margin: 0px; padding: 0px; font-size: 15px;">
        {{ $t('crowdlamp.text') }}
      </p>
      <map-base ref="mapBase" :markers="markers"></map-base>
    </v-flex>
  </v-layout>
</template>
<script>
import MapBase from '@/components/MapBaseLoco.vue'
export default {
  components: {
    MapBase
  },
  data() {
    return {
      markers: []
    }
  },
  mounted() {
    this.getMarkersData()
  },
  methods: {
    async getMarkersData() {
      this.markers = await this.$refs.mapBase.getMarkersData()
    }
  }
}
</script>

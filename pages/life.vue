<template>
  <map-base ref="mapBase" :markers="markers" :has_clowd="true"></map-base>
</template>
<script>
import MapBase from '@/components/MapBase.vue'
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
      this.markers = await this.$refs.mapBase.getMarkersData('life')
    }
  }
}
</script>

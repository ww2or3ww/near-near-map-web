<template>
  <map-base ref="mapBase"></map-base>
</template>
<script>
import MapBase from '@/components/MapBase.vue'
export default {
  components: {
    MapBase
  },
  mounted() {
    this.$refs.mapBase.initialize('plant')
  }
}
</script>

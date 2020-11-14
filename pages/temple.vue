<template>
  <v-layout style="margin: 0px; padding: 0px;" justify-center>
    <v-flex style="margin: 0px; padding: 0px;" xs12 sm12 md12>
      <map-base ref="mapBase"></map-base>
    </v-flex>
  </v-layout>
</template>
<script>
import MapBase from '@/components/MapBase.vue'
export default {
  components: {
    MapBase
  },
  mounted() {
    this.$refs.mapBase.initialize('temple')
  }
}
</script>

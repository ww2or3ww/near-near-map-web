<template>
  <v-layout style="margin: 0px; padding: 0px;" justify-center>
    <v-flex style="margin: 0px; padding: 0px;" xs12 sm12 md12>
      <div>
        <p style="margin: 0px; padding: 0px; font-size: 15px;">
          <router-link :to="localePath('/line')">
            {{ $t('lineapp.text') }}
          </router-link>
        </p>
      </div>
      <map-base ref="mapBase"></map-base>
      <div>
        <p style="margin: 0px; padding: 0px; font-size: 15px;">
          {{ $t('hama-certified.text') }}
        </p>
      </div>
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
    this.$refs.mapBase.initialize('drink')
  }
}
</script>

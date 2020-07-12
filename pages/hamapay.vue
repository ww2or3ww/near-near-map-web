<template>
  <v-layout style="margin: 0px; padding: 0px;" justify-center>
    <v-flex style="margin: 0px; padding: 0px;" xs12 sm12 md12>
      <p style="margin: 0px; padding: 0px;">
        【
        <a
          href="https://www.city.hamamatsu.shizuoka.jp/kanko/corona/paypay.html"
          target="_blank"
        >
          {{ $t('hamapay.text') }}
        </a>
        】
      </p>
      <map-base ref="mapBase" :markers="markers"></map-base>
    </v-flex>
  </v-layout>
</template>
<script>
import MapBase from '@/components/MapBase4HamaPay.vue'
export default {
  components: {
    MapBase
  },
  data() {
    return {
      markers: []
    }
  }
}
</script>

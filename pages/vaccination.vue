<template>
  <v-layout style="margin: 0px; padding: 0px;" justify-center>
    <v-flex style="margin: 0px; padding: 0px;" xs12 sm12 md12>
      <p style="margin: 0px; padding: 0px; font-size: 13px;">
        {{ $t('vaccination1.text') }}
      </p>
      <p style="margin: 0px; padding: 0px; font-size: 13px;">
        <a
          href="https://www.city.hamamatsu.shizuoka.jp/kenkozoshin/shingatakoronawakuchin.html"
          target="_blank"
        >
          {{ $t('vaccination2.text') }}
        </a>
      </p>
      <map-base ref="mapBase"></map-base>
      <p style="margin: 0px; padding: 0px; font-size: 13px;">
        {{ $t('vaccination3.text') }}
      </p>
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
    this.$refs.mapBase.initialize('vaccination')
  }
}
</script>

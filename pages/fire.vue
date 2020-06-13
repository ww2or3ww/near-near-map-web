<template>
  <v-layout style="margin: 0px; padding: 0px;" justify-center>
    <v-flex style="margin: 0px; padding: 0px;" xs12 sm12 md12>
      <p style="margin: 0px; padding: 0px;">
        【
        <a href="https://camp-fire.jp/projects/view/282243" target="_blank">
          花火師応援プロジェクト
        </a>
        】
      </p>
      <p style="margin: 0px; padding: 0px;">
        【
        <a
          href="https://www.google.com/search?q=%E6%97%A5%E6%9C%AC%E3%81%AE%E8%8A%B1%E7%81%AB%E3%80%8C%E3%82%A8%E3%83%BC%E3%83%AB%E3%80%8D%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88"
          target="_blank"
        >
          日本の花火「エール」プロジェクト
        </a>
        】
      </p>
      <map-base ref="mapBase" :markers="markers"></map-base>
    </v-flex>
  </v-layout>
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
      this.markers = await this.$refs.mapBase.getMarkersData('fire')
    }
  }
}
</script>

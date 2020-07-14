<template>
  <v-layout column justify-center align-center>
    <iframe :src="mymapsrc" :style="styleMap"></iframe>
  </v-layout>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
  data() {
    return {
      currentLoc: {},
      maplocation: { lng: 0, lat: 0 },
      mymapsrc: '',
      styleMap: {
        width: '100%',
        height: '440px'
      }
    }
  },
  async created() {
    const pos = await this.getCurrentPosition()
    const latlon = 'll=' + pos.coords.latitude + ',' + pos.coords.longitude
    this.mymapsrc =
      'https://www.google.com/maps/d/embed?mid=16vGjDkluI9ySL80xB0huSsDMnL3-hRFe&z=16&' +
      latlon
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      let mapHeight = window.innerHeight - 150
      this.styleMap.height = mapHeight + 'px'
    },
    async onClickCurrentPositon() {
      const pos = await this.getCurrentPosition()
      const data = {}
      data.lat = pos.coords.latitude
      data.lng = pos.coords.longitude
      data.accuracy = pos.coords.accuracy
      this.$set(this.currentLoc, 'coords', data)
      this.maplocation.lat = data.lat
      this.maplocation.lng = data.lng
    },
    getCurrentPosition() {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }
  }
}
</script>
<style></style>

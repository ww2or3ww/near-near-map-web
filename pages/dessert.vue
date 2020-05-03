<template>
  <map-base :markers="markers"></map-base>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
import MapBase from '@/components/MapBase.vue'
export default {
  components: {
    MapBase
  },
  data() {
    return {
      fullheight: window.innerHeight + 'px',
      markers: []
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize)
  },
  methods: {
    resize() {
      this.fullheight = window.innerHeight + 'px'
    }
  }
}
</script>

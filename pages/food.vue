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
      markers: [
        {
          position: { lng: 137.6694974, lat: 34.7277163 },
          content: {
            title: '浜松市立神久呂小学校あああああああああ',
            image: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
            pinicon: '',
            facebook: 'https://www.facebook.com/w2or3w',
            twitter: 'https://twitter.com/w2or3w',
            instagram: 'https://www.instagram.com/w2or3w/',
            homepage: 'https://mosaic.w2or3w.com',
            tel: '08050801165',
            address: '静岡県浜松市西区神ケ谷町3490',
            needReservation: true,
            canDelivery: true,
            canTakeout: true,
            canDriveThru: true
          }
        },
        {
          position: { lng: 137.665636, lat: 34.725357 },
          content: {
            title: '神久呂中学校',
            image: '',
            pinicon: '',
            facebook: '',
            twitter: '',
            instagram: '',
            homepage: '',
            tel: '',
            address: '',
            needReservation: false,
            canDelivery: false,
            canTakeout: false,
            canDriveThru: false
          }
        }
      ]
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

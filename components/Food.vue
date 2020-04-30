<template>
  <v-layout column justify-center align-center>
    <v-btn @click="onClickGetCurrentPositon">get current position</v-btn>
    <p>{{ currentLoc.coords }}</p>
    <GmapMap
      ref="gmp"
      class="map-panel"
      map-type-id="roadmap"
      style="width: 100%; height: 480px"
      :draggable="true"
      :center="maplocation"
      :zoom="15"
      :options="mapOptions"
    >
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
        <table>
          <tr>
            <td><img :src="infoContent.imageurl" /></td>
            <td style="text-align:left; color: black;">
              <a :href="infoContent.url" target="_blank">{{
                infoContent.title
              }}</a>
              <p>{{ infoContent.address }}</p>
            </td>
          </tr>
        </table>
      </GmapInfoWindow>
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :title="m.title"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        :icon="m.content.pinicon"
        @click="onClickMarker(index, m)"
      />
    </GmapMap>
  </v-layout>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
  data() {
    return {
      fullheight: window.innerHeight + 'px',
      currentLoc: {},
      maplocation: { lng: 0, lat: 0 },
      markers: [
        {
          position: { lng: 137.6694974, lat: 34.7277163 },
          content: {
            title: '神久呂小学校',
            imageurl: '',
            pinicon: '',
            address: 'address AAA',
            url: 'url AAA'
          }
        },
        {
          position: { lng: 137.665636, lat: 34.725357 },
          content: {
            title: '神久呂中学校',
            imageurl: '',
            pinicon: '',
            address: 'address BBB',
            url: 'url BBB'
          }
        }
      ],
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoWindowPos: null,
      infoWinOpen: false,
      infoContent: {
        title: null,
        imageurl: null,
        pinicon: null,
        address: null,
        url: null
      },
      mapOptions: {
        streetViewControl: false,
        styles: [
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text'
          },
          {
            featureType: 'poi.business',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'transit',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    this.onClickGetCurrentPositon()
    this.markers.unshift({
      position: this.maplocation,
      content: {
        title: "I'm here!",
        imageurl: '',
        pinicon: {
          url: require('~/assets/img/pin-here-1.png'),
          scaledSize: { width: 32, height: 32, f: 'px', b: 'px' }
        },
        address: 'address xxx',
        url: 'url xxx'
      }
    })
  },
  methods: {
    resize() {
      this.fullheight = window.innerHeight + 'px'
    },
    async onClickMarker(index, marker) {
      console.log(marker.position)
      this.$refs.gmp.panTo(marker.position)
      this.infoWindowPos = marker.position
      this.infoContent = marker.content
      this.infoWinOpen = true
      const data = {}
      data.lat = marker.position.lat
      data.lng = marker.position.lng
      data.title = this.markers[index].content.title
      this.$set(this.currentLoc, 'coords', data)
    },
    async onClickGetCurrentPositon() {
      const pos = await this.getCurrentPosition()
      console.log(pos)
      const data = {}
      data.lat = pos.coords.latitude
      data.lng = pos.coords.longitude
      data.accuracy = pos.coords.accuracy
      //data.altitude = pos.coords.altitude
      //data.altitudeAccuracy = pos.coords.altitudeAccuracy
      //data.heading = pos.coords.heading
      //data.speed = pos.coords.speed
      this.$set(this.currentLoc, 'coords', data)
      this.maplocation.lat = data.lat
      this.maplocation.lng = data.lng
      this.$refs.gmp.panTo(this.maplocation)
    },
    getCurrentPosition() {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }
  }
}
</script>

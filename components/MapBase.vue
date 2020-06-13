<template>
  <v-layout column justify-center align-center>
    <GmapMap
      ref="gmp"
      map-type-id="roadmap"
      :style="styleMap"
      :draggable="true"
      :center="maplocation"
      :zoom="13"
      :options="mapOptions"
      @click="onClickMap($event)"
    >
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
        <v-card :style="styleMapInfoCard">
          <v-container :style="styleMapInfoTitle">
            <!-- TITLE -->
            <v-card-subtitle class="map-info-subtitle">
              <p class="map-info-p-subtitle" style="margin: 4px;">
                {{ marker.title }}
              </p>
            </v-card-subtitle>
          </v-container>
          <v-container :style="styleMapInfoContainer">
            <!-- IFRAME -->
            <v-row justify="space-between" :style="styleMapIFrameRow">
              <v-col class="map-info-col">
                <iframe
                  v-if="srcIFrame"
                  :src="srcIFrame"
                  class="map-info-iframe"
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
                <img
                  v-else-if="srcImage"
                  :src="srcImage"
                  :style="styleMapImageRow"
                  class="map-info-image"
                />
              </v-col>
            </v-row>
          </v-container>
          <v-container :style="styleMapInfoMenus">
            <!-- SNS -->
            <v-row
              justify="space-between"
              class="map-info-row"
              style="padding-top: 4px; padding-bottom: 4px;"
            >
              <v-col class="map-info-col">
                <div class="d-flex flex-row-reverse">
                  <v-btn
                    v-if="marker.homepage"
                    class="map-info-btn"
                    fab
                    width="28px"
                    height="28px"
                    color="#888888"
                    :href="marker.homepage"
                    target="_blank"
                  >
                    <v-icon size="20px">mdi-home</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="marker.facebook"
                    class="map-info-btn"
                    fab
                    width="28px"
                    height="28px"
                    color="#888888"
                    :href="marker.facebook"
                    target="_blank"
                  >
                    <v-icon size="20px">mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="marker.instagram"
                    class="map-info-btn"
                    fab
                    width="28px"
                    height="28px"
                    :href="marker.instagram"
                    color="#888888"
                    target="_blank"
                  >
                    <v-icon size="20px">mdi-instagram</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="marker.twitter"
                    class="map-info-btn"
                    fab
                    width="28px"
                    height="28px"
                    color="#888888"
                    :href="marker.twitter"
                    target="_blank"
                  >
                    <v-icon size="20px">mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="marker.media1"
                    class="map-info-btn"
                    fab
                    width="28px"
                    height="28px"
                    color="#888888"
                    :href="marker.media1"
                    target="_blank"
                  >
                    <v-icon size="20px">mdi-newspaper-variant-outline</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="marker.media2"
                    class="map-info-btn"
                    fab
                    width="28px"
                    height="28px"
                    color="#888888"
                    :href="marker.media2"
                    target="_blank"
                  >
                    <v-icon size="20px">mdi-newspaper-variant-outline</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="marker.media3"
                    class="map-info-btn"
                    fab
                    width="28px"
                    height="28px"
                    color="#888888"
                    :href="marker.media3"
                    target="_blank"
                  >
                    <v-icon size="20px">mdi-newspaper-variant-outline</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <!-- ACCESS -->
            <v-row justify="space-between" class="map-info-row">
              <v-col class="map-info-col" cols="3" sm="3">
                <div style="text-align: left;">
                  <v-btn
                    class="map-info-btn"
                    fab
                    width="28px"
                    height="28px"
                    color="#888888"
                    :href="
                      'https://www.near-near-map-manage.w2or3w.com/update/?type=' +
                        marker.type +
                        '&tel=' +
                        marker.tel
                    "
                    target="_blank"
                  >
                    <v-icon size="20px">mdi-circle-edit-outline</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col class="map-info-col" cols="6" sm="6">
                <div class="d-flex flex-row-reverse">
                  <v-btn
                    class="map-info-btn"
                    fab
                    width="28px"
                    height="28px"
                    color="#888888"
                    :href="
                      'https://www.google.com/maps/dir/?api=1&destination=' +
                        marker.position.lat +
                        ',' +
                        marker.position.lng
                    "
                    target="_blank"
                  >
                    <v-icon size="20px">mdi-google-maps</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="marker.tel"
                    class="map-info-btn"
                    fab
                    width="28px"
                    height="28px"
                    color="#888888"
                    :href="'tel:' + marker.tel"
                    target="_blank"
                  >
                    <v-icon size="20px">mdi-phone</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </GmapInfoWindow>
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :title="m.title"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        :icon="m.pinicon"
        @click="onClickMarker(index, m)"
      />
    </GmapMap>
  </v-layout>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
  props: {
    markers: {
      type: Array,
      default: ''
    },
    has_clowd: {
      type: Boolean(),
      default: false
    }
  },
  data() {
    return {
      pageType: '',
      currentLoc: {},
      maplocation: { lng: 0, lat: 0 },
      styleMap: {
        width: '100%',
        height: '440px'
      },
      styleMapInfoCard: {
        height: '400px',
        margin: '0px',
        padding: '0px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '0px solid',
        borderColor: 'red'
      },
      styleMapInfoTitle: {
        margin: '0px',
        padding: '0px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '0px solid',
        borderColor: 'green'
      },
      styleMapInfoContainer: {
        height: '400px',
        margin: '0px',
        padding: '0px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '0px solid',
        borderColor: 'blue'
      },
      styleMapInfoMenus: {
        height: '400px',
        margin: '0px',
        padding: '0px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '0px solid',
        borderColor: 'red'
      },
      styleMapIFrameRow: {
        height: '100px',
        margin: '0px',
        padding: '0px',
        border: '0px solid',
        borderColor: 'green'
      },
      styleMapImageRow: {
        height: '100px',
        margin: '0px',
        padding: '0px',
        border: '0px solid',
        borderColor: 'red'
      },
      srcIFrame: '',
      srcImage: '',
      infoOptions: {
        minWidth: 1024,
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoWindowPos: null,
      infoWinOpen: false,
      marker: {
        position: { lng: 0, lat: 0 }
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
            elementType: 'all',
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
          }
        ]
      }
    }
  },
  mounted() {},
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      let mapHeight = window.innerHeight - 140
      if (this.pageType == 'fire') {
        mapHeight = mapHeight - 32
      }
      const infoHeight = window.innerHeight / 2
      const titleHeight = 64
      const menusHeight = 80
      const containerHeight = infoHeight - menusHeight - titleHeight
      const iframeHeight = infoHeight - titleHeight - menusHeight
      this.styleMap.height = mapHeight + 'px'
      this.styleMapInfoCard.height = infoHeight + 'px'
      this.styleMapInfoContainer.height = containerHeight + 'px'
      this.styleMapIFrameRow.height = 100 + '%'
      this.styleMapImageRow.height = containerHeight + 'px'
      this.styleMapInfoMenus.height = menusHeight + 'px'
    },
    async onClickMap(event) {
      this.infoWinOpen = false
    },
    async onClickMarker(index, marker) {
      if (index === 0) {
        return
      }
      this.$refs.gmp.panTo(marker.position)
      this.infoWindowPos = marker.position
      this.marker = marker
      this.srcIFrame = this.getIFrameSrc(marker)
      if (!this.srcIFrame) {
        this.srcImage = marker.image
      }
      this.infoWinOpen = true
      const data = {}
      data.lat = marker.position.lat
      data.lng = marker.position.lng
      data.title = this.markers[index].title
      this.$set(this.currentLoc, 'coords', data)
    },
    getIFrameSrc(marker) {
      let src = ''
      if (marker.homepage && marker.homepage.indexOf('https') == 0) {
        src = marker.homepage
      } else if (marker.media1 && marker.media1.indexOf('https') == 0) {
        src = marker.media1
      } else if (marker.media2 && marker.media2.indexOf('https') == 0) {
        src = marker.media1
      } else if (marker.media3 && marker.media3.indexOf('https') == 0) {
        src = marker.media1
      } else if (marker.media4 && marker.media4.indexOf('https') == 0) {
        src = marker.media1
      } else if (marker.media5 && marker.media5.indexOf('https') == 0) {
        src = marker.media1
      }
      return src
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
      this.$refs.gmp.panTo(this.maplocation)
    },
    getCurrentPosition() {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    },
    async getMarkersData(type) {
      this.pageType = type
      await this.onClickCurrentPositon()

      const requestAddress =
        'https://l8h2fp9jcf.execute-api.ap-northeast-1.amazonaws.com/work/near-near-map-dev?type=' +
        type +
        '&latlon=' +
        this.maplocation.lat +
        ',' +
        this.maplocation.lng
      const response = await this.$axios.$get(requestAddress)
      response.unshift({
        position: this.maplocation,
        title: "I'm here!",
        pinicon: {
          url: require('~/assets/img/pin-here-1.png'),
          scaledSize: { width: 24, height: 24, f: 'px', b: 'px' }
        }
      })
      const noclowd = require('~/assets/img/pin/mm_20_red.png')
      const gray = require('~/assets/img/pin/mm_20_gray.png')
      const red = require('~/assets/img/pin/red-dot.png')
      const orange = require('~/assets/img/pin/orange-dot.png')
      const blue = require('~/assets/img/pin/blue-dot.png')
      for (let i = 1; i < response.length; i++) {
        let path = '~/assets/img/pin/blue-dot.png'
        let iwidth = 32
        let iheight = 32
        if (this.has_clowd) {
          if (response[i].crowd_lv == 3) {
            path = red
          } else if (response[i].crowd_lv == 2) {
            path = orange
          } else if (response[i].crowd_lv == 1) {
            path = blue
          } else {
            path = gray
            iwidth = 18
            iheight = 30
          }
        } else {
          path = noclowd
          iwidth = 18
          iheight = 30
        }
        response[i].pinicon = {
          url: path,
          scaledSize: { width: iwidth, height: iheight, f: 'px', b: 'px' }
        }
      }
      return response
    }
  }
}
</script>
<style>
.map-info-subtitle {
  margin: 0px;
  padding: 0px;
  background-color: rgba(255, 255, 255, 1);
  border: 0px solid;
}
.map-info-p-subtitle {
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  color: rgba(8, 8, 8, 1);
}
.map-info-row {
  margin: 0px;
  padding: 0px;
  border: 1px solid;
  border-color: lightgray;
  border-top: 0px solid;
}
.map-info-col {
  text-align: center;
  margin: 0px;
  margin-right: 12px;
  padding: 0px;
  border: 0px solid;
  border-color: red;
}
.map-info-btn {
  margin: 4px;
}
.map-info-iframe {
  width: 200%;
  height: 200%;
  margin-right: 8px;
  transform: scale(0.5);
  -o-transform: scale(0.5);
  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform-origin: 0 0;
  -o-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
}
.gm-style-iw-d {
  overflow: unset !important;
}
</style>

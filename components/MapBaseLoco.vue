<template>
  <v-layout column justify-center align-center>
    <GmapMap
      ref="gmp"
      map-type-id="roadmap"
      :style="styleMap"
      :draggable="true"
      :center="maplocation"
      :zoom="zoom"
      :options="mapOptions"
      @click="onClickMap($event)"
      @zoom_changed="onZoomChanged($event)"
      @center_changed="onCenterChanged($event)"
      @dragend="onDragEnd()"
    >
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
        <div>
          <v-card
            :style="[
              styleMapInfoCard,
              { overflow: marker.list.length > 1 ? 'scroll' : 'hidden' }
            ]"
          >
            <div v-for="(item, key) in marker.list" :key="key">
              <v-container
                :style="[
                  styleMapInfoTitle,
                  { backgroundColor: convertLv2Color(item.crowd_lv) }
                ]"
              >
                <!-- TITLE -->
                <p class="map-info-p-subtitle">
                  {{ item.title }}
                </p>
              </v-container>
              <v-container v-if="isIFrame" :style="styleMediaContainer">
                <!-- IFRAME -->
                <v-row justify="space-between" :style="styleMapIFrameRow">
                  <v-col class="map-info-col">
                    <iframe
                      v-if="srcIFrame"
                      :src="srcIFrame"
                      class="map-info-iframe"
                      sandbox="allow-scripts allow-same-origin"
                    ></iframe>
                  </v-col>
                </v-row>
              </v-container>
              <v-container :style="styleMapInfoMenus">
                <!-- LINKS -->
                <v-row
                  justify="space-between"
                  class="map-info-row"
                  style="padding-top: 4px; padding-bottom: 4px;"
                >
                  <v-col class="map-info-col">
                    <div class="d-flex flex-row-reverse">
                      <v-btn
                        v-if="item.homepage && item.homepage.address"
                        class="map-info-btn"
                        fab
                        width="28px"
                        height="28px"
                        color="#888888"
                        :href="item.homepage.address"
                        target="_blank"
                      >
                        <v-icon size="20px">mdi-home</v-icon>
                      </v-btn>
                      <v-btn
                        v-if="item.media1 && item.media1.address"
                        class="map-info-btn"
                        fab
                        width="28px"
                        height="28px"
                        color="#888888"
                        :href="item.media1.address"
                        target="_blank"
                      >
                        <v-icon size="20px">
                          mdi-newspaper-variant-outline
                        </v-icon>
                      </v-btn>
                      <v-btn
                        v-if="item.tel"
                        class="map-info-btn"
                        fab
                        width="28px"
                        height="28px"
                        color="#888888"
                        :href="'tel:' + item.tel"
                        target="_blank"
                      >
                        <v-icon size="20px">mdi-phone</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-card>
          <v-container :style="styleMapInfoMenus">
            <!-- ACCESS -->
            <v-row
              justify="space-between"
              class="map-info-row"
              style="padding-top: 4px; padding-bottom: 4px;"
            >
              <v-col class="map-info-col">
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
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </GmapInfoWindow>
      <GmapMarker
        v-for="(m, index) in myMarkers"
        :key="index"
        :title="m.title"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        :icon="m.pinicon"
        @click="onClickMarker(index, m)"
      />
    </GmapMap>
    <transition name="fade">
      <v-btn
        v-show="!infoWinOpen && !loading"
        fixed
        fab
        small
        bottom
        right
        color="#44444488"
        style="bottom: 240px; right: 22px;"
        @click="onClickSearch"
      >
        <v-icon color="white">mdi-selection-search t</v-icon>
      </v-btn>
    </transition>
    <transition name="fade">
      <v-btn
        v-show="!infoWinOpen && !loading"
        fixed
        fab
        small
        bottom
        right
        color="#44444488"
        style="bottom: 185px; right: 22px;"
        @click="onClickHome"
      >
        <v-icon color="white">mdi-home-circle-outline</v-icon>
      </v-btn>
    </transition>
    <v-layout justify-center>
      <transition name="fade">
        <v-progress-circular
          v-show="loading"
          :size="80"
          :width="7"
          color="blue"
          fixed
          fab
          bottom
          center
          indeterminate
          :style="styleProgressCircular"
        ></v-progress-circular>
      </transition>
    </v-layout>
  </v-layout>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
  data() {
    return {
      loading: true,
      myMarkers: [],
      maplocation: { lng: 0, lat: 0 },
      maplocationTmp: { lng: 0, lat: 0 },
      zoom: 15,
      styleMap: {
        width: '100%',
        height: '440px'
      },
      styleMapInfoCard: {
        height: '400px',
        margin: '2px 12px 4px 0px',
        padding: '0px 0px 2px 0px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '0px solid',
        borderColor: 'red'
      },
      styleMapInfoTitle: {
        margin: '0px !important',
        padding: '2px 2px 2px 4px !important',
        border: '0px solid',
        borderColor: 'blue'
      },
      styleMediaContainer: {
        height: '400px',
        margin: '0px',
        padding: '0px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '0px solid',
        borderColor: 'blue'
      },
      styleMapInfoMenus: {
        height: '48',
        margin: '0px',
        padding: '0px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '0px solid',
        borderColor: 'blue'
      },
      styleMapIFrameRow: {
        height: '100%',
        margin: '0px',
        padding: '0px',
        border: '0px solid',
        borderColor: 'green'
      },
      styleProgressCircular: {
        bottom: '100px'
      },
      srcIFrame: '',
      isIFrame: false,
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
        position: { lng: 0, lat: 0 },
        list: [
          {
            title: ''
          }
        ]
      },
      mapOptions: {
        streetViewControl: false,
        styles: [
          {
            featureType: 'administrative',
            elementType: 'all',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'landscape',
            elementType: 'labels.icon',
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
            featureType: 'transit',
            elementType: 'all',
            stylers: [
              {
                visibility: 'on'
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
  mounted() {
    this.$refs.gmp.panTo(this.maplocation)
  },
  created() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      let isIFrame = this.srcIFrame != null && this.srcIFrame != ''
      this.handleResize(isIFrame)
    },
    handleResize(isIFrame) {
      this.isIFrame = isIFrame
      let mapHeight = window.innerHeight - 150
      let infoWidth = 0
      let mediaContainerHeight = 0
      if (isIFrame == false) {
        infoWidth = window.innerWidth / 2
        if (window.innerWidth <= 500) {
          infoWidth = window.innerWidth - 48
        } else if (window.innerWidth > 800) {
          infoWidth = window.innerWidth / 3
        }
      } else {
        mediaContainerHeight = mapHeight / 3
        if (window.innerWidth <= 500) {
          infoWidth = window.innerWidth - 48
        } else if (window.innerWidth <= 800) {
          infoWidth = window.innerWidth / 1.5
        } else {
          infoWidth = window.innerWidth / 2
        }
      }
      // let infoHeight = window.innerHeight / 2
      let infoHeight =
        Number(mediaContainerHeight) +
        Number(this.styleMapInfoMenus.height) +
        this.styleMapInfoMenus.height * this.marker.list.length -
        16
      if (infoHeight > (mapHeight / 3) * 2 - 32) {
        infoHeight = (mapHeight / 3) * 2 - 32
        infoHeight -= Number(this.styleMapInfoMenus.height)
      }
      this.styleMap.height = mapHeight + 'px'
      this.styleMapInfoCard.height = infoHeight + 'px'
      this.styleMediaContainer.height = mediaContainerHeight + 'px'
      this.infoOptions.minWidth = infoWidth
      this.styleProgressCircular.bottom = mapHeight / 2 + 80 + 'px'
    },
    async onClickMap(event) {
      this.infoWinOpen = false
      this.updateMapPrmToCookie()
    },
    async onZoomChanged(event) {
      this.zoom = event
      this.updateMapPrmToCookie()
    },
    async onCenterChanged(event) {
      this.maplocationTmp.lat = event.lat()
      this.maplocationTmp.lng = event.lng()
    },
    async onDragEnd() {
      this.updateMapPrmToCookie()
    },
    async onClickSearch() {
      this.loading = true
      this.myMarkers = []
      this.myMarkers = await this.getMarkersData()
      this.loading = false
    },
    async initialize() {
      this.onClickSearch()
    },
    async onClickHome() {
      const currentPosTmp = await this.getCurrentPosition()
      const currentPos = {
        lat: currentPosTmp.coords.latitude,
        lng: currentPosTmp.coords.longitude
      }
      this.maplocationTmp = currentPos
      this.$refs.gmp.panTo(this.maplocationTmp)
      this.$setLatLng(this.maplocationTmp)
    },
    async onClickMarker(index, marker) {
      if (index === 0) {
        return
      }
      this.$refs.gmp.panTo(marker.position)
      this.infoWindowPos = marker.position
      this.marker = marker
      this.marker.title = marker.list[0].title
      this.marker.homepage = marker.list[0].homepage
      this.marker.media1 = marker.list[0].media1
      if (marker.list.length == 1) {
        this.srcIFrame = this.getIFrameSrc(marker.list[0])
      } else {
        this.srcIFrame = ''
      }
      let isIFrame = this.srcIFrame != null && this.srcIFrame != ''
      this.handleResize(isIFrame)

      this.infoWinOpen = true
      this.updateMapPrmToCookie()
    },
    updateMapPrmToCookie() {
      this.$setZoom(this.zoom)
      this.$setLatLng(this.maplocationTmp)
    },
    getIFrameSrcByValue(item) {
      let src = null
      if ('address' in item && item.address) {
        if (
          item.address.indexOf('https') == 0 &&
          item.address.indexOf('e-map.ne.jp') < 0 &&
          item.address.indexOf('facebook.com/') < 0 &&
          item.address.indexOf('instagram.com/') < 0 &&
          item.address.indexOf('twitter.com/') < 0
        ) {
          if (item.has_xframe_options == 0) {
            src = item.address
          }
        } else if (item.address.indexOf('http://www.entstore.co.jp') == 0) {
          src = item.address.replace('http://', 'https://')
        }
      }
      return src
    },
    getIFrameSrc(marker) {
      let src = ''
      if (marker.homepage) {
        if ((src = this.getIFrameSrcByValue(marker.homepage)) != null) {
          return src
        }
      }
      if (marker.media1) {
        if ((src = this.getIFrameSrcByValue(marker.media1)) != null) {
          return src
        }
      }
      return src
    },
    getCurrentPosition() {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    },
    convertLv2Color(lv) {
      if (lv == 1) {
        return 'rgba(105, 145, 253, 1)'
      } else if (lv == 2) {
        return 'rgba(255, 174, 0, 1)'
      } else if (lv == 3) {
        return 'rgba(255, 110, 115, 1)'
      }
      return 'rgba(222, 222, 222, 1)'
    },
    async getMarkersData() {
      const currentPosTmp = await this.getCurrentPosition()
      const currentPos = {
        lat: currentPosTmp.coords.latitude,
        lng: currentPosTmp.coords.longitude
      }
      const zoomCookies = this.$getZoom()
      if (zoomCookies == null || zoomCookies == 0) {
        this.zoom = 15
      } else {
        this.zoom = zoomCookies
      }
      const latlonCookies = this.$getLatLng()
      if (
        latlonCookies != null &&
        latlonCookies.lat != null &&
        latlonCookies.lng != null
      ) {
        this.maplocation.lat = latlonCookies.lat
        this.maplocation.lng = latlonCookies.lng
      } else {
        this.maplocation = currentPos
      }
      this.maplocationTmp.lat = this.maplocation.lat
      this.maplocationTmp.lng = this.maplocation.lng

      const requestAddress =
        'https://l8h2fp9jcf.execute-api.ap-northeast-1.amazonaws.com/work/near-near-map-loco?' +
        'latlon=' +
        this.maplocation.lat +
        ',' +
        this.maplocation.lng
      const response = await this.$axios.$get(requestAddress)
      response.list.unshift({
        position: currentPos,
        title: "I'm here!",
        list: [
          {
            title: "I'm here!"
          }
        ],
        pinicon: {
          url: require('~/assets/img/pin-here-1.png'),
          scaledSize: { width: 24, height: 24, f: 'px', b: 'px' }
        }
      })
      const noclowd = require('~/assets/img/pin/mm_20_gray.png')
      const gray = require('~/assets/img/pin/mm_20_gray.png')
      const red = require('~/assets/img/pin/red-dot.png')
      const orange = require('~/assets/img/pin/orange-dot.png')
      const blue = require('~/assets/img/pin/blue-dot.png')
      for (let i = 1; i < response.list.length; i++) {
        let path = '~/assets/img/pin/blue-dot.png'
        let iwidth = 42
        let iheight = 42
        if (response.has_clowd) {
          if (response.list[i].list[0].crowd_lv == 3) {
            path = red
          } else if (response.list[i].list[0].crowd_lv == 2) {
            path = orange
          } else if (response.list[i].list[0].crowd_lv == 1) {
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
        response.list[i].pinicon = {
          url: path,
          scaledSize: { width: iwidth, height: iheight, f: 'px', b: 'px' }
        }
      }
      return response.list
    }
  }
}
</script>
<style>
.map-info-p-subtitle {
  font-size: 16px;
  font-weight: bold;
  margin: 0px !important;
  padding: 0px !important;
  color: rgba(8, 8, 8, 1);
  border: 0px solid;
  border-color: green;
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
  margin-right: 4px;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

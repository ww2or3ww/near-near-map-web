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
        <v-card class="map-info-card" min-width="160" max-width="240">
          <v-container class="map-info-container">
            <v-card-subtitle class="map-info-subtitle">
              <p class="map-info-p-subtitle" style="margin: 0px;">
                {{ infoContent.title }}
              </p>
            </v-card-subtitle>

            <v-row justify="space-between" class="map-info-row">
              <v-col v-if="infoContent.image" class="map-info-col">
                <v-img :src="infoContent.image"></v-img>
              </v-col>
            </v-row>
            <v-row justify="space-between" class="map-info-row">
              <v-col v-if="infoContent.homepage" class="map-info-col">
                <v-btn
                  fab
                  width="28px"
                  height="28px"
                  color="#888888"
                  :href="infoContent.homepage"
                  target="_blank"
                >
                  <v-icon size="24px">mdi-home</v-icon>
                </v-btn>
              </v-col>
              <v-col v-if="infoContent.facebook" class="map-info-col">
                <v-btn
                  fab
                  width="28px"
                  height="28px"
                  color="#888888"
                  :href="infoContent.facebook"
                  target="_blank"
                >
                  <v-icon size="24px">mdi-facebook</v-icon>
                </v-btn>
              </v-col>
              <v-col v-if="infoContent.instagram" class="map-info-col">
                <v-btn
                  fab
                  width="28px"
                  height="28px"
                  color="#888888"
                  :href="infoContent.instagram"
                  target="_blank"
                >
                  <v-icon size="24px">mdi-instagram</v-icon>
                </v-btn>
              </v-col>
              <v-col v-if="infoContent.twitter" class="map-info-col">
                <v-btn
                  fab
                  width="28px"
                  height="28px"
                  color="#888888"
                  :href="infoContent.twitter"
                  target="_blank"
                >
                  <v-icon size="24px">mdi-twitter</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row justify="space-between" class="map-info-row">
              <v-col class="map-info-col" style="text-align: left;">
                <p
                  class="map-info-col-p"
                  style="margin: 0px; padding: 0px; padding-left: 4px;"
                >
                  ✓ 要予約
                </p>
                <p
                  class="map-info-col-p"
                  style="margin: 0px; padding: 0px; padding-left: 4px;"
                >
                  ○ デリバリー
                </p>
                <p
                  class="map-info-col-p"
                  style="margin: 0px; padding: 0px; padding-left: 4px;"
                >
                  ○ テイクアウト
                </p>
                <p
                  class="map-info-col-p"
                  style="margin: 0px; padding: 0px; padding-left: 4px;"
                >
                  ○ ドライブスルー
                </p>
              </v-col>
              <v-col v-if="infoContent.tel" class="map-info-col padding: 0px;">
                <v-btn
                  fab
                  width="28px"
                  height="28px"
                  color="#888888"
                  :href="'tel:' + infoContent.tel"
                  target="_blank"
                >
                  <v-icon size="24px">mdi-phone</v-icon>
                </v-btn>
                <p class="map-info-col-p" style="margin: 4px;">
                  {{ infoContent.tel }}
                </p>
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
        :icon="m.content.pinicon"
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
    }
  },
  data() {
    return {
      currentLoc: {},
      maplocation: { lng: 0, lat: 0 },
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
<style>
.map-info-card {
  margin: 0px;
  padding: 0px;
  border: 0px solid;
}
.map-info-container {
  margin: 0px;
  padding: 0px;
  background-color: rgba(255, 255, 255, 1);
  border: 0px solid;
}
.map-info-subtitle {
  margin: 0px;
  padding: 0px;
  background-color: rgba(255, 255, 255, 1);
  border: 0px solid;
}
.map-info-p-subtitle {
  font-size: 12px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  color: rgba(8, 8, 8, 1);
}
.map-info-row {
  margin: 0px;
  padding: 0px;
  border: 0px solid;
  border-color: green;
}
.map-info-col {
  text-align: center;
  margin: 0px;
  padding: 2px;
  border: 0px solid;
  border-color: red;
}
.map-info-col-p {
  font-size: 8px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  color: rgba(80, 80, 80, 1);
}
</style>

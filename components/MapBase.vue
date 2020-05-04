<template>
  <v-layout column justify-center align-center>
    <GmapMap
      ref="gmp"
      class="map-panel"
      map-type-id="roadmap"
      style="width: 100%; height: 560px"
      :draggable="true"
      :center="maplocation"
      :zoom="15"
      :options="mapOptions"
      @click="onClickMap($event)"
    >
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
        <v-card class="map-info-card" min-width="240" max-width="320">
          <v-container class="map-info-container">
            <v-card-subtitle class="map-info-subtitle">
              <p class="map-info-p-subtitle" style="margin: 0px;">
                {{ marker.content.title }}
              </p>
            </v-card-subtitle>

            <v-row justify="space-between" class="map-info-row">
              <v-col v-if="marker.content.image" class="map-info-col">
                <v-img :src="marker.content.image"></v-img>
              </v-col>
            </v-row>
            <v-row justify="space-between" class="map-info-row">
              <v-col v-if="marker.content.homepage" class="map-info-col">
                <v-btn
                  fab
                  width="28px"
                  height="28px"
                  color="#888888"
                  :href="marker.content.homepage"
                  target="_blank"
                >
                  <v-icon size="24px">mdi-home</v-icon>
                </v-btn>
              </v-col>
              <v-col v-if="marker.content.facebook" class="map-info-col">
                <v-btn
                  fab
                  width="28px"
                  height="28px"
                  color="#888888"
                  :href="marker.content.facebook"
                  target="_blank"
                >
                  <v-icon size="24px">mdi-facebook</v-icon>
                </v-btn>
              </v-col>
              <v-col v-if="marker.content.instagram" class="map-info-col">
                <v-btn
                  fab
                  width="28px"
                  height="28px"
                  :href="marker.content.instagram"
                  color="#888888"
                  target="_blank"
                >
                  <v-icon size="24px">mdi-instagram</v-icon>
                </v-btn>
              </v-col>
              <v-col v-if="marker.content.twitter" class="map-info-col">
                <v-btn
                  fab
                  width="28px"
                  height="28px"
                  color="#888888"
                  :href="marker.content.twitter"
                  target="_blank"
                >
                  <v-icon size="24px">mdi-twitter</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row justify="space-between" class="map-info-row">
              <v-col
                class="map-info-col"
                style="text-align: left;"
                xl="6"
                lg="6"
                md="6"
                sm="6"
                xs="6"
              >
                <p
                  v-if="marker.content.needReservation"
                  class="map-info-col-p"
                  style="margin: 0px; padding: 0px; padding-left: 8px;"
                >
                  <v-icon size="16px" color="red darken-2">
                    mdi-alert-circle-outline
                  </v-icon>
                  {{ $t('map.info.need_reservation') }}
                </p>
                <p
                  v-else
                  class="map-info-col-p"
                  style="margin: 0px; padding: 0px; padding-left: 8px;"
                >
                  <v-icon size="16px" color="green darken-2">
                    mdi-check-circle-outline
                  </v-icon>
                  {{ $t('map.info.no_need_reservation') }}
                </p>
                <p
                  v-if="marker.content.canDelivery"
                  class="map-info-col-p"
                  style="margin: 0px; padding: 0px; padding-left: 8px;"
                >
                  <v-icon size="16px" color="green darken-2">
                    mdi-check-circle-outline
                  </v-icon>
                  {{ $t('map.info.delivery') }}
                </p>
                <p
                  v-if="marker.content.canTakeout"
                  class="map-info-col-p"
                  style="margin: 0px; padding: 0px; padding-left: 8px;"
                >
                  <v-icon size="16px" color="green darken-2">
                    mdi-check-circle-outline
                  </v-icon>
                  {{ $t('map.info.takeout') }}
                </p>
                <p
                  v-if="marker.content.canDriveThru"
                  class="map-info-col-p"
                  style="margin: 0px; padding: 0px; padding-left: 8px;"
                >
                  <v-icon size="16px" color="green darken-2">
                    mdi-check-circle-outline
                  </v-icon>
                  {{ $t('map.info.drivethru') }}
                </p>
              </v-col>
              <v-col
                v-if="marker.content.tel"
                class="map-info-col padding: 0px;"
              >
                <v-btn
                  style="margin-top: 8px; margin-bottom: 4px;"
                  fab
                  width="28px"
                  height="28px"
                  color="#888888"
                  :href="'tel:' + marker.content.tel"
                  target="_blank"
                >
                  <v-icon size="24px">mdi-phone</v-icon>
                </v-btn>
                <p class="map-info-col-p" style="margin: 4px;">
                  {{ marker.content.tel }}
                </p>
              </v-col>
              <v-col class="map-info-col padding: 0px;">
                <v-btn
                  style="margin-top: 8px; margin-bottom: 4px;"
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
                  <v-icon size="24px">mdi-google-maps</v-icon>
                </v-btn>
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
        minWidth: 320,
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoWindowPos: null,
      infoWinOpen: false,
      marker: {
        position: { lng: 0, lat: 0 },
        content: {
          title: '',
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
    this.onClickCurrentPositon()
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
    async onClickMap(event) {
      console.log('------onClickMap---------')
      console.log(event)
      this.infoWinOpen = false
    },
    async onClickMarker(index, marker) {
      console.log(marker.position)
      this.$refs.gmp.panTo(marker.position)
      this.infoWindowPos = marker.position
      this.marker = marker
      this.infoWinOpen = true
      const data = {}
      data.lat = marker.position.lat
      data.lng = marker.position.lng
      data.title = this.markers[index].content.title
      this.$set(this.currentLoc, 'coords', data)
    },
    async onClickCurrentPositon() {
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

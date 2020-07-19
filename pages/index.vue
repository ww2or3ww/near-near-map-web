<template>
  <v-layout justify-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="common-card-title">
          <p class="common-p-card-title" style="margin:0px;">
            {{ $t('index.title[0]') }}
          </p>
        </v-card-title>

        <subtitle-text2-card
          v-for="index in 2"
          :key="index"
          :subtitle="$t('index.content[' + (index - 1) + '].title')"
          :text1="$t('index.content[' + (index - 1) + '].text_1')"
          :text2="$t('index.content[' + (index - 1) + '].text_2')"
          :text3="$t('index.content[' + (index - 1) + '].text_3')"
        >
        </subtitle-text2-card>
      </v-card>

      <v-card>
        <v-card-title class="common-card-title">
          <p class="common-p-card-title" style="margin:0px;">
            {{ $t('index.title[1]') }}
          </p>
        </v-card-title>

        <subtitle-text2-clickable-card
          v-for="(item, index) in contents"
          :key="index"
          :subtitle="$t('index.menu[' + index + '].title')"
          :text1="$t('index.menu[' + index + '].text_1')"
          :text2="$t('index.menu[' + index + '].text_2')"
          :text3="$t('index.menu[' + index + '].text_3')"
          :content="item"
          :visible="index > 0"
          @click="onSwitchPage(index)"
        >
        </subtitle-text2-clickable-card>
      </v-card>

      <v-divider color="lightgray"></v-divider>
      <v-card>
        <v-card-text>
          <p class="index-foot" style="margin: 0px;">
            near-near-map.w2or3w.com
          </p>
          <router-link
            :to="localePath('/about')"
            style="text-decoration: none;"
          >
            <p class="index-foot" style="margin: 0px;">
              PRIVACY POLICY
            </p>
          </router-link>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import SubtitleText2Card from '@/components/cards/SubtitleText2Card.vue'
import SubtitleText2ClickableCard from '@/components/cards/SubtitleText2ClickableCard.vue'
export default {
  components: {
    SubtitleText2Card,
    SubtitleText2ClickableCard
  },
  data() {
    return {
      contents: this.$getContents()
    }
  },
  mounted() {
    const latlon = {
      lat: null,
      lng: null
    }
    this.$cookies.set('near-near-map.w2or3w.com/latlon', latlon, {
      path: '/',
      maxAge: 60 * 60 * 24 * 1
    })
  },
  methods: {
    onSwitchPage(index) {
      this.$nuxt.$emit('onSwitchPage', index)
    }
  }
}
</script>
<style>
.index-foot {
  width: 100%;
  margin: 0px;
  color: white;
  border: 0px solid;
}
.index-card-content {
  border: 0px solid;
}
.index-p-card-subtitle {
  font-family: 'Nico Moji';
  font-size: 16px;
}
.index-p-card-text {
  font-size: 12px;
  margin: 0px;
  padding: 0px;
  margin-left: 12px;
  border: 0px solid;
}
.index-card-text {
  margin-left: 8px;
}
</style>

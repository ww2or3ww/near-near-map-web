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
          v-for="index in 7"
          :key="index"
          :subtitle="$t('index.menu[' + index + '].title')"
          :text1="$t('index.menu[' + index + '].text_1')"
          :text2="$t('index.menu[' + index + '].text_2')"
          @click="onSwitchPage(index)"
        >
        </subtitle-text2-clickable-card>
      </v-card>

      <v-card>
        <v-card-title>
          <v-btn
            class="mx-2"
            fab
            small
            color="white"
            href="https://twitter.com/w2or3w"
            target="_blank"
          >
            <v-icon color="#333333" size="24px">mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            small
            color="white"
            href="https://www.facebook.com/w2or3w"
            target="_blank"
          >
            <v-icon color="#333333" size="24px">mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            small
            color="white"
            href="https://www.instagram.com/w2or3w"
            target="_blank"
          >
            <v-icon color="#333333" size="24px">mdi-instagram</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <p class="index-foot" style="margin: 0px;">
            near-near-map.w2or3w.com
          </p>
          <router-link to="policy" style="text-decoration: none;">
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
    return {}
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
  line-height: 0px;
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

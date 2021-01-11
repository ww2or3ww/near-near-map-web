<template>
  <v-layout justify-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="common-card-title">
          <p class="common-p-card-title" style="margin: 0px;">LINEアプリ</p>
        </v-card-title>
        <v-card-title class="common-card-title">
          <p class="common-p-card-subtitle" style="margin: 0px;">
            ・にゃーにゃーマップ
          </p>
        </v-card-title>
        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            本サイトのLINEアプリ版です。
          </p>
          <p class="font-card-text" style="margin: 0px;">
            <a href="https://line.me/R/ti/p/@559iugzz" target="_blank">
              こちら
            </a>
            から友達登録してください。
          </p>
        </v-card-text>
        <v-card-title class="common-card-title">
          <p class="common-p-card-subtitle" style="margin: 0px;">
            ・モザイク
          </p>
        </v-card-title>
        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            顔にモザイクをかけます。
          </p>
          <p class="font-card-text" style="margin: 0px;">
            <a href="https://line.me/R/ti/p/@694uscfl" target="_blank">
              こちら
            </a>
            から友達登録してください。
          </p>
        </v-card-text>
        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            お気付きの点やご意見・ご要望などございましたら、お気軽にSNS等へメッセージください。
          </p>
        </v-card-text>
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
            <v-icon color="#333333" size="28px">mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            small
            color="white"
            href="https://www.facebook.com/w2or3w"
            target="_blank"
          >
            <v-icon color="#333333" size="28px">mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            small
            color="white"
            href="https://www.instagram.com/w2or3w"
            target="_blank"
          >
            <v-icon color="#333333" size="28px">mdi-instagram</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            small
            color="white"
            href="https://github.com/ww2or3ww"
            target="_blank"
          >
            <v-icon color="#333333" size="28px">mdi-github</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <p class="index-foot" style="margin: 0px; padding-left: 8px;">
            near-near-map.w2or3w.com
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      showNearNearMap: false,
      showMosaic: false
    }
  }
}
</script>

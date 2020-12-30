<template>
  <v-layout justify-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="common-card-title">
          <p class="common-p-card-title" style="margin: 0px;">アバウト</p>
        </v-card-title>
        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            当Webサービスは、以下の目的・動機のために開発・運用しています。
          </p>
          <ul>
            <li class="font-card-text">
              自身の技術力向上のため。
            </li>
            <li class="font-card-text">
              COVID-19関連の様々な取り組みに感化され『ワタシもなにか...』と思ったため。
            </li>
          </ul>
        </v-card-text>

        <v-card-title class="common-card-title">
          <p class="common-p-card-title" style="margin: 0px;">
            プライバシーポリシー
          </p>
        </v-card-title>
        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            以下の点をご承知いただいた上でご利用ください。
          </p>
          <ul>
            <li class="font-card-text">
              サービスをご利用された結果発生した損害について、開発者は一切の責任を負いかねます。
            </li>
          </ul>
          <p class="font-card-text" style="margin: 0px;">
            Alexaスキルのプライバシーポリシーは ->
            <router-link :to="localePath('/about_alexa')">
              こちら
            </router-link>
          </p>
        </v-card-text>

        <v-card-title class="common-card-title">
          <p class="common-p-card-title" style="margin: 0px;">テクニカル</p>
        </v-card-title>
        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            以下の技術を利用しています。学習しながら。
          </p>
          <ul>
            <li class="font-card-text">
              Nuxt.js, Vuetify
            </li>
            <li class="font-card-text">
              Google Maps API, Google Drive API
            </li>
            <li class="font-card-text">
              AWS Amplify, AppSync, DynamoDB, S3, Lambda(Python), StepFunctions,
              CloudSearch, Athena, Rekognition
            </li>
          </ul>
          <p></p>
          <p class="font-card-text" style="margin: 0px;">
            アーキテクチャは以下のような感じ。
          </p>
          <v-img
            src="https://near-near-map.s3-ap-northeast-1.amazonaws.com/resource/image/architecture.png"
            width="50%"
            max-width="160px"
            @click.stop="showArchitecture = true"
          ></v-img>
          <v-dialog v-model="showArchitecture" max-width="85vw">
            <img
              src="https://near-near-map.s3-ap-northeast-1.amazonaws.com/resource/image/architecture.png"
              width="100%"
              @click.stop="showArchitecture = false"
            />
          </v-dialog>
        </v-card-text>

        <v-card-title class="common-card-title" style="margin-top: 8px;">
          <p class="common-p-card-title" style="margin: 0px;">
            コントリビューションねがい
          </p>
        </v-card-title>
        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            もしよろしければお願いします。
          </p>
          <ul>
            <li class="font-card-text">
              一部をオープンソースにしています
            </li>
          </ul>
          <p class="font-card-text" style="margin: 0px; padding-left: 24px">
            Issue登録、プルリクエスト、翻訳、言語対応、etc... 歓迎です。
          </p>
          <p class="font-card-text" style="margin: 0px; padding-left: 24px">
            ->
            <a
              href="https://github.com/ww2or3ww/near-near-map-web"
              target="_blank"
            >
              GitHub Repository
            </a>
          </p>
          <p></p>
          <ul>
            <li class="font-card-text">
              誰でも登録・更新できるようにしています。
            </li>
          </ul>
          <p class="font-card-text" style="margin: 0px; padding-left: 24px">
            お気に入りのお店を登録してみてください。
          </p>
          <p class="font-card-text" style="margin: 0px; padding-left: 24px">
            情報の修正・改善・追加、歓迎です。(※すぐには反映されません。)
          </p>
          <p class="font-card-text" style="margin: 0px; padding-left: 24px">
            ->
            <a href="https://near-near-map-manage.w2or3w.com/" target="_blank">
              Near Near Map Manage
            </a>
          </p>
          <p></p>
          <ul>
            <li class="font-card-text">
              共通フォーマットCSVでの情報提供もお待ちしています。
            </li>
          </ul>
          <p class="font-card-text" style="margin: 0px; padding-left: 24px">
            たくさん登録したいけど、UIからポチポチは大変だわ、、。という方。
          </p>
          <p class="font-card-text" style="margin: 0px; padding-left: 24px">
            CSVでください。サンプルは ->
            <a
              href="https://near-near-map.s3-ap-northeast-1.amazonaws.com/data/near-near-map-data-sample.csv"
              target="_blank"
            >
              こちら
            </a>
          </p>
        </v-card-text>

        <v-card-title class="common-card-title">
          <p class="common-p-card-title" style="margin: 0px;">
            クローリング・スクレイピング
          </p>
        </v-card-title>
        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            当サイトは、各種ホームページやメディアサイト様から情報を収集させていただいております。
          </p>
          <p class="font-card-text" style="margin: 0px;">
            礼儀と敬意を忘れぬように努めます。
          </p>
          <p class="font-card-text" style="margin: 0px;">
            参照させて頂いたサイト様は ->
            <router-link :to="localePath('/thanks')">
              こちら
            </router-link>
            にまとめています。
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
      showArchitecture: false
    }
  }
}
</script>

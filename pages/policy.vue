<template>
  <v-layout justify-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="common-card-title">
          <p class="common-p-card-title">アバウト</p>
        </v-card-title>
        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            当Webサービスは、管理人であり開発者である
            <a
              href="https://twitter.com/w2or3w"
              target="_blank"
              style="color: lightgray;"
            >
              2or3 (ツカサ)
            </a>
            が、以下の目的・動機のために開発・運用しています。
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

        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            以下の技術を利用しています。学習しながら。
          </p>
          <ul>
            <li class="font-card-text">
              Nuxt.js (Vue.js / Vuetify / SPA / Static Site Generation)
            </li>
            <li class="font-card-text">
              Google Maps API
            </li>
            <li class="font-card-text">
              AWS Amplify, AppSync, DynamoDB, S3, Lambda(Python)
            </li>
          </ul>
        </v-card-text>

        <v-card-title class="common-card-title">
          <p class="common-p-card-title">プライバシーポリシー</p>
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
        </v-card-text>

        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            お気付きの点やご意見などございましたら、お気軽にSNS等へメッセージください。
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

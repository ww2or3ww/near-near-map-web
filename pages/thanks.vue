<template>
  <v-layout justify-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="common-card-title">
          <p class="common-p-card-title" style="margin: 0px;">
            スペシャルサンクス
          </p>
        </v-card-title>
        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            当サイトは、各種ホームページやメディアサイト様から情報を収集させていただいております。
          </p>
          <p class="font-card-text" style="margin: 0px;">
            礼儀と敬意を忘れぬように努めます。
          </p>
        </v-card-text>

        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              style="margin: 0px; padding: 0px;"
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="items" :search="search">
            <template v-slot:item.title="{ item }">
              <a
                :href="item.address"
                target="_blank"
                style="color: lightgray; text-decoration: none;"
              >
                {{ item.title }}
              </a>
            </template>
          </v-data-table>
        </v-card>

        <v-card-text class="card-text">
          <p class="font-card-text" style="margin: 0px;">
            参照すべき、オススメのメディアサイトを教えて下さい。自薦他薦は問いません。
          </p>
          <p></p>
          <p class="font-card-text" style="margin: 0px;">
            誰でも登録・更新できるようにしています。お気に入りのお店を登録してみてください。
          </p>
          <p class="font-card-text" style="margin: 0px">
            情報の修正・改善・追加、歓迎です。(※すぐには反映されません。)
          </p>
          <p class="font-card-text" style="margin: 0px">
            ->
            <a href="https://near-near-map-manage.w2or3w.com/" target="_blank">
              Near Near Map Manage
            </a>
          </p>
          <p></p>
          <p class="font-card-text" style="margin: 0px;">
            たくさん登録したいけど、UIからポチポチは大変だわ、、。という方。
          </p>
          <p class="font-card-text" style="margin: 0px;">
            CSVでください。サンプルは ->
            <a
              href="https://near-near-map.s3-ap-northeast-1.amazonaws.com/data/near-near-map-data-sample.csv"
              target="_blank"
            >
              こちら
            </a>
          </p>
          <p></p>
          <p class="font-card-text" style="margin: 0px;">
            何かございましたら、お気軽にSNS等へメッセージください。
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
      search: '',
      headers: [
        {
          sortable: false,
          value: 'title'
        }
      ],
      items: [
        {
          title: 'モチカエル (Closed)',
          address: ''
        },
        {
          title: '奥三河エール飯',
          address: 'https://www.okuminavi.jp/takeout/'
        },
        {
          title: '遠州マスクマップ',
          address: 'https://enshumask.hamazo.tv/'
        },
        {
          title: 'はままつ飯.net',
          address: 'https://machimeshi.net/'
        },
        {
          title: 'テイクアウト浜松',
          address: 'https://take-out-hamamatsu.com/'
        },
        {
          title: 'ココハマ',
          address: 'https://www.murakichi.net/'
        },
        {
          title: 'キラッと奥三河観光ナビ',
          address: 'https://www.okuminavi.jp/'
        },
        {
          title: '静岡バーべキュー＆キャンプ場特集｜TNC',
          address: 'https://www.tnc.ne.jp/special/bbq/index.html'
        },
        {
          title: 'スーパー銭湯全国検索(静岡県,愛知県)',
          address: 'https://www.supersento.com/'
        },
        {
          title: '浜松パワーフード',
          address: 'https://hamamatsu-pf.jp/'
        },
        {
          title: '遠鉄ストア',
          address: 'https://www.entstore.co.jp/'
        },
        {
          title: '杏林堂薬局',
          address: 'https://www.kyorindo.co.jp/'
        },
        {
          title: 'トクバイ(遠鉄ストア, 杏林堂薬局)',
          address: 'https://tokubai.co.jp/'
        },
        {
          title: 'テイクアウト いわた',
          address: 'https://take-out-iwata.com/'
        },
        {
          title: '静岡県商工会Go To Eat',
          address: 'https://gotoeat-shizuoka.com/'
        },
        {
          title: 'ふじのくに静岡県GoToEat',
          address: 'https://premium-gift.jp/fujinokunigotoeat/'
        },
        {
          title: 'Go To Eat あいち',
          address: 'https://www.gotoeat-aichi.jp/'
        }
      ]
    }
  }
}
</script>

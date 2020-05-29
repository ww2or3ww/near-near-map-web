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
          title: '奥三河エール飯 | キラッと奥三河観光ナビ',
          address: 'https://www.okuminavi.jp/takeout/'
        },
        {
          title: '浜松のテイクアウト情報まとめサイト│はままつ飯.net',
          address: 'https://machimeshi.net/'
        },
        {
          title: 'テイクアウト浜松｜おいしい浜松、持ち帰ろう。',
          address: 'https://take-out-hamamatsu.com/'
        },
        {
          title: '公益社団法人 日本煙火協会',
          address: 'http://www.hanabi-jpa.jp/'
        }
      ]
    }
  }
}
</script>

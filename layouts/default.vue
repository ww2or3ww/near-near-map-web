<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click="onClickLink(item, i)"
        >
          <v-list-item-action>
            <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
            <v-img v-if="item.url" :src="item.url" height="24" width="24">
            </v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="font-drawer-title" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn v-if="drawer" icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title class="font-title" v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <v-container fluid style="margin:0px; padding:0px; ">
        <div class="d-flex flex-row-reverse" style="align-items: center;">
          <div>
            <p class="foot2" style="margin: 0px; padding: 0px;">
              &nbsp;∧ ∧&nbsp;&nbsp;
            </p>
            <p class="foot2" style="margin: 0px; padding: 0px;">(ﾟーﾟ*)</p>
          </div>
          <div>
            <p class="foot1" style="margin: 0px; padding: 0px;">
              {{ selectedTitle }}&nbsp;&nbsp;
            </p>
          </div>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      selectedTitle: '',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'トップ',
          to: '/'
        },
        {
          icon: 'mdi-food',
          title: 'フード',
          to: '/food'
        },
        {
          icon: 'mdi-coffee',
          title: 'ドリンク',
          to: '/drink'
        },
        {
          icon: 'mdi-cake',
          title: 'デザート',
          to: '/dessert'
        },
        {
          icon: null,
          url: require('~/assets/img/icon-mask.png'),
          title: 'マスク',
          to: '/mask'
        },
        {
          icon: 'mdi-flower',
          title: 'プラント',
          to: '/plant'
        },
        {
          icon: 'mdi-lead-pencil',
          title: 'スタディ',
          to: '/study'
        },
        {
          icon: 'mdi-fire',
          title: 'ファイヤー',
          to: '/fire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'にゃーにゃーまっぷ'
    }
  },
  mounted() {
    const index = this.items.findIndex((e) => {
      return e.to === this.$route.path
    })
    this.onClickLink(this.items[index], index)
  },
  methods: {
    onClickLink(item, i) {
      if (i === 0) {
        this.selectedTitle = '♪'
      } else {
        this.selectedTitle = item.title + '    }'
      }
    }
  }
}
</script>
<style>
@import 'https://fonts.googleapis.com/earlyaccess/nicomoji.css';
.font-title {
  font-family: 'Nico Moji';
  font-size: 24px;
}
.font-drawer-title {
  font-family: 'Nico Moji';
  font-size: 20px;
}
.foot1 {
  font-family: 'Nico Moji';
  font-size: 16px;
  text-align: right;
  margin: 0px;
  padding: 0px;
  border: 0px solid;
}
.foot2 {
  font-size: 8px;
  text-align: right;
  color: white;
  margin: 0px;
  padding: 0px;
  border: 0px solid;
}
</style>

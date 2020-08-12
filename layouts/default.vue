<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      width="360"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in $t('index.menu')"
          :key="index"
          :to="localePath(item.link)"
          @click="onSwitchPage(index)"
        >
          <v-list-item-action>
            <v-icon
              v-if="contents[index].icon && contents[index].hilite == false"
            >
              {{ contents[index].icon }}
            </v-icon>
            <v-icon v-else-if="contents[index].icon" color="#E91E63">
              {{ contents[index].icon }}
            </v-icon>
            <v-img
              v-if="contents[index].image"
              :src="contents[index].image"
              height="24"
              width="24"
            >
            </v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              v-if="contents[index].hilite == false"
              class="font-drawer-title"
              v-text="item.title"
            />
            <v-list-item-title
              v-else
              class="font-drawer-title"
              style="color: #E91E63;"
              v-text="item.title"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <language-selector />
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn v-if="drawer" icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title class="font-title" v-text="this.$t('title')" />
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
        <v-list-item @click="right = !right">
          <v-list-item-action>
            <v-icon>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-content></v-list-item-content>
        </v-list-item>
        <v-list-item v-if="notSupportCtrl" @click="onClickCurrentPosition">
          <pin-count-selector />
          <language-selector />
          <v-list-item-action>
            <v-icon>
              mdi-human-male
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="font-drawer-text">
              現在地
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="notSupportCtrl" @click="onClickSearch">
          <v-list-item-action>
            <v-icon>
              mdi-selection-search
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="font-drawer-text">
              再検索
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <v-container fluid style="margin:0px; padding:0px; ">
        <div class="d-flex flex-row-reverse" style="align-items: center;">
          <div>
            <p class="foot-cat" style="margin: 0px; padding: 0px;">
              &nbsp;∧ ∧&nbsp;&nbsp;
            </p>
            <p class="foot-cat" style="margin: 0px; padding: 0px;">(ﾟーﾟ*)</p>
          </div>
          <div>
            <p class="foot-text" style="margin: 0px; padding: 0px;">
              {{ selectedTitle }}&nbsp;&nbsp;
            </p>
          </div>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import LanguageSelector from '@/components/controls/LanguageSelector.vue'
import PinCountSelector from '@/components/controls/PinCountSelector.vue'
export default {
  components: {
    LanguageSelector,
    PinCountSelector
  },
  data() {
    return {
      selectedTitle: '',
      clipped: false,
      drawer: false,
      fixed: false,
      notSupportCtrl: false,
      contents: this.$getContents(),
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  created() {
    this.setListener()
  },
  mounted() {
    this.updateBottomWord()
  },
  methods: {
    setListener() {
      this.$nuxt.$on('onSwitchPage', this.onSwitchPage)
    },
    updateBottomWord() {
      const path = this.$route.path.replace(/\/$/, '')
      const index = this.contents.findIndex((e) => {
        const link = '/' + this.$i18n.locale + e.link
        return e.link === path || link === path
      })
      this.onSwitchPage(index < 0 ? 0 : index)
    },
    onSwitchPage(index) {
      const path = this.localePath(this.contents[index].link)
      if (path !== this.$route.path) {
        this.$router.push(path)
      }

      if (index === 0) {
        this.selectedTitle = '♪'
      } else {
        const item = this.$i18n.t('index.menu')[index]
        this.selectedTitle = item.title + ' ♪  }'
      }
    },
    onClickCurrentPosition() {},
    onClickSearch() {}
  }
}
</script>
<style>
@import 'https://fonts.googleapis.com/earlyaccess/nicomoji.css';
.font-title {
  font-family: 'Nico Moji';
  font-size: 28px !important;
}
.font-drawer-title {
  font-family: 'Nico Moji';
  font-size: 20px;
}
.font-drawer-text {
  font-family: 'Nico Moji';
  font-size: 16px;
}
.foot-text {
  font-family: 'Nico Moji';
  font-size: 16px;
  text-align: right;
  margin: 0px;
  padding: 0px;
  border: 0px solid;
}
.foot-cat {
  font-size: 8px;
  text-align: right;
  color: white;
  margin: 0px;
  padding: 0px;
  border: 0px solid;
}
.common-card-title {
  padding: 0px;
  padding-left: 16px;
  border: 0px solid;
}
.common-p-card-title {
  padding: 0px;
  font-family: 'Nico Moji';
  font-size: 20px;
  border: 0px solid;
}
</style>

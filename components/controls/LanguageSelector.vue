<template>
  <v-container fluid>
    <v-select
      prepend-icon="mdi-earth"
      label="Lang:"
      item-text="name"
      item-key="code"
      :items="this.$i18n.locales"
      :value="currentLocale"
      single-line
      return-object
      @change="onLocaleChanged"
    >
    </v-select>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: 'availableLocales()'
    }
  },
  computed: {
    currentLocaleCode() {
      return this.$i18n.locale
    },
    currentLocale() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.currentLocaleCode
      )
    }
  },
  methods: {
    onLocaleChanged(locale) {
      const path = this.switchLocalePath(locale.code)
      this.$router.push(path)
    }
  }
}
</script>

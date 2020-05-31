<template>
  <v-container fluid>
    <v-select
      prepend-icon="mdi-earth"
      item-text="name"
      item-key="code"
      :items="this.$i18n.locales"
      :value="currentLocale"
      single-line
      return-object
      @change="onChanged"
    >
    </v-select>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
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
    onChanged(locale) {
      const path = this.switchLocalePath(locale.code)
      this.$router.push(path)
    }
  }
}
</script>

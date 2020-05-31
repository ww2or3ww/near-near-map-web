<template>
  <v-container fluid>
    <v-select
      prepend-icon="mdi-map-marker-plus"
      :items="this.$getPinCountList()"
      :value="currentNumber"
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
    currentNumber() {
      return this.$getPinCountList().find((number) => number === 25)
    }
  },
  methods: {
    onChanged(number) {}
  }
}
</script>

<template>
  <v-layout justify-center>
    <v-flex xs12 sm12 md12>
      <cmp :basic-data="basicData" />
    </v-flex>
  </v-layout>
</template>

<script>
import Cmp from '~/components/Food.vue'

export default {
  components: {
    Cmp
  },
  data() {
    return {
      basicData: {
        type: 'food'
      }
    }
  },
  methods: {}
}
</script>

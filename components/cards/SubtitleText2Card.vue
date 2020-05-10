<template>
  <v-card class="card-content">
    <v-card-subtitle v-if="subtitle">
      <p class="p-card-subtitle" style="margin: 0px;">
        {{ subtitle }}
      </p>
    </v-card-subtitle>
    <v-card-text class="card-text">
      <p class="p-card-text" style="margin: 0px;">
        {{ text1 }}
      </p>
      <p class="p-card-text" style="margin: 0px;">
        {{ text2 }}
      </p>
      <p v-if="text3" class="p-card-text" style="margin: 0px;">
        {{ text3 }}
      </p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    subtitle: {
      type: String,
      default: ''
    },
    text1: {
      type: String,
      default: ''
    },
    text2: {
      type: String,
      default: ''
    },
    text3: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.card-content {
  border: 0px solid;
}
.p-card-subtitle {
  font-family: 'Nico Moji';
  font-size: 16px;
  line-height: 0px;
}
.card-text {
  margin-left: 8px;
}
.p-card-text {
  font-size: 12px;
  margin: 0px;
  padding: 0px;
  margin-left: 12px;
  border: 0px solid;
}
</style>

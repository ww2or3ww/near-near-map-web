<template>
  <v-card class="card-content" @click.stop="$emit('click')">
    <v-card-subtitle style="padding-bottom: 0px;">
      <p class="p-card-subtitle" style="margin: 0px; padding: 0px;">
        {{ subtitle }}
      </p>
      <p class="p-card-subtitle-count" style="margin: 0px; padding: 0px;">
        &nbsp;&nbsp;{{ count }}
      </p>
    </v-card-subtitle>
    <v-card-text class="card-text">
      <p class="p-card-text" style="margin: 0px;">
        {{ text1 }}
      </p>
      <p class="p-card-text" style="margin: 0px;">
        {{ text2 }}
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
    count: {
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
  display: inline-block;
}
.p-card-subtitle-count {
  font-size: 12px;
  line-height: 0px;
  display: inline-block;
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

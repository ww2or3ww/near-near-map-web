<template>
  <v-card v-if="visible" class="card-content" @click.stop="$emit('click')">
    <v-card-subtitle style="padding-bottom: 0px; padding-top: 4px;">
      <v-icon v-if="content.icon && content.hilite == false" size="16">
        {{ content.icon }}
      </v-icon>
      <v-icon v-else-if="content.icon" size="16" color="#E91E63">
        {{ content.icon }}
      </v-icon>
      <v-img
        v-if="content.image"
        :src="content.image"
        height="16"
        width="16"
        style="display: inline-block;"
      >
      </v-img>
      <p
        v-if="content.hilite == false"
        class="p-card-subtitle"
        style="margin: 0px; padding: 0px;"
      >
        {{ subtitle }}
      </p>
      <p
        v-else
        class="p-card-subtitle"
        style="margin: 0px; padding: 0px; color: #E91E63;"
      >
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
      <p class="p-card-text" style="margin: 0px;">
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
    hilite: {
      type: Boolean,
      default: false
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
    content: {
      type: Object,
      default: null
    },
    link: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
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

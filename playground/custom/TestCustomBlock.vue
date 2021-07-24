<template>
  <v-col cols="12" sm="4">
    <v-card>
      <v-card-title>Custom blocks</v-card-title>
      <v-card-text>
        <p class="custom-block">{{ custom }}</p>
        <p class="custom-block-lang">{{ customLang }}</p>
        <p class="custom-block-src">{{ customSrc }}</p>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'TestCustomBlock',
  data() {
    return {
      custom: '',
      customLang: '',
      customSrc: '',
    }
  },
  created() {
    this.custom = this.$options.__customBlock.custom
    this.customLang = this.$options.__customBlock.customLang
    this.customSrc = this.$options.__customBlock.customSrc
  },
}
</script>

<custom>
export default {
  "custom": "Custom Block"
}
</custom>

<custom lang="json">
{
  "customLang": "Custom Block JSON BLock"
}
</custom>

<custom src="./custom.json"></custom>

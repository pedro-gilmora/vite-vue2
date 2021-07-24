<template>
  <v-col cols="12" sm="4">
    <v-card>
      <v-card-title>Static Asset Handling</v-card-title>
      <v-card-text>
        <p class="asset-import">
          Path for assets import from js: <code>{{ filepath }}</code>
        </p>
        <p>
          Relative asset reference in template:
          <img src="./nested/testAssets.png" style="width: 30px;" />
        </p>
        <p>
          Alias asset reference in template:
          <img src="/@/test-assets/nested/testAssets.png" style="width: 30px;" />
        </p>
        <p>
          Absolute asset reference in template:
          <img src="/favicon.ico" style="width: 30px;" />
        </p>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import filepath from './nested/testAssets.png'

export default {
  data() {
    return {
      filepath
    }
  }
}
</script>

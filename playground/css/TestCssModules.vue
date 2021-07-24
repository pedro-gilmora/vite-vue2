<template>
  <v-col cols="12" sm="4">
    <v-card>
      <v-card-title>CSS Modules</v-card-title>
      <v-card-text>
        <div class="css-modules-sfc" :class="$style.blue">
          &lt;style module&gt; - this should be blue
        </div>
        <div class="css-modules-import" :class="imported.turquoise">
          CSS modules import - this should be orange
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import imported from './testCssModules.module.css'

export default {
  data: () => ({ imported }),
}
</script>

<style module>
.blue {
  color: blue;
}
</style>

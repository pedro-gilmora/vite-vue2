<template>
  <v-col cols="12" sm="4">
    <v-card>
      <v-card-title>Hot Module Replacement</v-card-title>
      <v-card-text>
        <p>
          HMR: click button and edit template part of
          <code>./TestHmr.vue</code>, count should not reset
        </p>
        <v-btn class="hmr-increment" @click="count++">
          Count: {{ count }} time{{ count !== 1 ? "s" : "" }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      count: 0,
    }
  },
})
</script>

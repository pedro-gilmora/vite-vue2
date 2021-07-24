<template>
  <v-col cols="12" sm="4">
    <v-card>
      <v-card-title>Scoped CSS</v-card-title>
      <v-card-text>
        <div class="style-scoped">&lt;style scoped&gt;: only this should be purple</div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style scoped>
div {
  color: rgb(138, 43, 226);
}
</style>

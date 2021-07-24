<template>
  <v-app>
    <h1 class="text-center">Vite-Plugin-Vue2-Enhanced Playground</h1>
    <v-container>
      <v-row align-start>
        <v-col cols="12" sm="4">
          <v-card>
            <v-card-title>Spread operator works</v-card-title>
            <v-card-text>
              <code>
                ["Test", 1, ...('abc').split('')] 
                <br/>
                //returns {{ ['Test', 1, ...'abc'.split('')] }}
              </code>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card>
            <v-card-title>Coalescing null and chaining operator, they work here too:</v-card-title>
            <v-card-text>
              <code>//a = { b: {c: 'Luis' } } 
                <br/>a?.c?.b ?? a?.b?.c //returns '{{a?.c?.b ?? a?.b?.c}}'
              </code>
            </v-card-text>
          </v-card>
        </v-col>
        <TestBlockSrcImport />
        <TestScopedCss />
        <TestCssModules />
        <TestHmr />
        <TestCustomBlock />
        <TestAssets />
        <v-col cols="12" sm="4">
          <v-card>
            <v-card-title>
              <TestJsx />  
            </v-card-title>
            <v-card-title>              
              <TestJsxSFC />
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import TestBlockSrcImport from './src-import/TestBlockSrcImport.vue'
import TestScopedCss from './css/TestScopedCss.vue'
import TestCssModules from './css/TestCssModules.vue'
import TestCustomBlock from './custom/TestCustomBlock.vue'
import TestHmr from './hmr/TestHmr.vue'
import TestAssets from './test-assets/TestAssets.vue'
import TestJsx from './TestJsx'
import TestJsxSFC from './TestJsxSFC.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'App',
  components: {
    TestScopedCss,
    TestBlockSrcImport,
    TestCssModules,
    TestCustomBlock,
    TestHmr,
    TestAssets,
    TestJsx,
    TestJsxSFC,
  },
})
export default class App extends Vue {
  a = { b: { c: 'Luis' } } as any
}
</script>

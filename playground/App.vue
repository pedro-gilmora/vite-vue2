<template>
  <v-app>
    <v-btn>Hla {{a?.c?.c}}</v-btn>
    Coalescing null and null chaining  works
    <h1>Vite-Plugin-Vue2 Playground</h1>
    <TestBlockSrcImport/>
    <TestScopedCss/>
    <TestCssModules/>
    <TestCustomBlock/>
    <TestHmr/>
    <TestAssets/>
    <TestJsx/>
    <TestJsxSFC/> 
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
import {Component, Vue} from 'vue-property-decorator'

@Component({name: 'App',
  components: {
    TestScopedCss,
    TestBlockSrcImport,
    TestCssModules,
    TestCustomBlock,
    TestHmr,
    TestAssets,
    TestJsx,
    TestJsxSFC
  }})
export default class App extends Vue{
  a = {b:{c:'Luis'}} as any
}
</script>

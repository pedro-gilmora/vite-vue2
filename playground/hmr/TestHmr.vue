<template>
  <div>
    <h2>Hot Module Replacement 2</h2>
    <p>
    <span>
      HMR: click button and edit template part of <code>./TestHmr.vue</code>,
      count should not reset sdfsdfs
    </span>
      <button class="hmr-increment" @click="count++">
        &gt;&gt;&gt; {{ count }} &lt;&lt;&lt;
      </button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

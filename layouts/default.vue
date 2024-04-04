<template>
  <div class="relative w-full bg-auto bg-cover">
    <div class="mb-[15rem] flex flex-col items-center">
      <div class="relative w-full">
        <Nav :bg-transparent="false" />
        <div>
          <slot />
          <ModalsContainer />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}

body {
  overflow-y: auto;
  overflow-x: auto;
}
</style>

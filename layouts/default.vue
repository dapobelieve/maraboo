<template>
  <div class="scroller relative w-full bg-auto bg-cover">
    <div class="mb-[5rem] flex flex-col items-center">
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
body {
  overflow-y: auto;
  overflow-x: auto;
}
</style>

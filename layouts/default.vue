<template>
  <div class=" w-full bg-auto relative bg-cover">
    <div class="flex flex-col items-center mb-[15rem]">
      <div class="relative w-full">
        <Nav :bg-transparent="false" />
        <div class="pt-10">
          <slot />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import bg from "assets/images/bg.svg";

export default {
  data() {
    return {
      image: bg,
    };
  },
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}

body  {
  overflow-y:auto;
  overflow-x:auto;
}
</style>

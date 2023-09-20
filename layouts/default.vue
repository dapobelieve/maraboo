<template>
  <div class="subpixel-antialiased w-full bg-auto relative bg-cover">
    <div class="flex flex-col items-center px-5 sm:px-5 lg:px-10">
      <!-- <div class="bg-white w-full sticky z-10 h-8 top-0 left-0"></div> -->
      <div class="2xl:max-w-[101rem] relative w-full">
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
</style>

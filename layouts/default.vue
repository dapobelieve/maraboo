<template>
  <div class="subpixel-antialiased w-full relative bg-cover">
    <div class="flex flex-col items-center px-5 sm:px-5 lg:px-10">
      <div class="2xl:max-w-[101rem] w-full">
        <Nav :bg-transparent="false" />
        <slot />
        <Footer />
      </div>
    </div>
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

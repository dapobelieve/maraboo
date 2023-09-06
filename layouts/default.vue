<template>
  <div class="subpixel-antialiased bg-auto relative bg-cover">
    
    <div class="px-[20px] lg:px-[0px]">
      <Nav :bg-transparent="false"/>
    <slot />
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

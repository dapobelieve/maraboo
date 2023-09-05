<template>
  <div class="subpixel-antialiased bg-auto relative bg-cosver">
    <Nav />
    <slot />
    <Footer />
  </div>
</template>
<script>
import bg from "assets/images/bg-12.svg";

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

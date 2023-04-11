<template>
  <div
    class="subpixel-antialiased bg-auto bg-no-repeat relative bg-cover"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <Nav />
    <slot />
    <Footer />
  </div>
</template>
<script>
import bg from "assets/images/bg-2.svg";

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

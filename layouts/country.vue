<template>
  <div class="subpixel-antialiased bg-auto relative">
    <slot />
    <div class="px-5 sm:px-5 lg:px-10">
      <Footer />
    </div>
  </div>
</template>
<script>
//   import Nav from '~/components/Nav.vue';

//   export default {
//     components:{
//         Nav,
//     },

//   };
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>

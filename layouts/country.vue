<template>
  <div class="subpixel-antialiased bg-auto relative">
    <div class="flex flex-col items-center">
      <div class="w-full">
        <div class="fixed z-50 top-0 left-0 right-0  w-full px-5 sm:px-5 lg:px-10">
          <Nav :bg-transparent="true" />
        </div>
      </div>
    </div>
    <slot />
    <div class="flex flex-col items-center px-5 sm:px-5 lg:px-10">
      <div class="2xl:max-w-[101rem] w-full">
        <Footer />
      </div>
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

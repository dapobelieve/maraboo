<template>
    <div class="subpixel-antialiased bg-auto relative">
      
      <div class="bg-[#BEBAFC] lg:px-[0px] min-h-screen"  
      :style="{ backgroundImage: `url('/unlock-bg.svg')` }">
        <Nav :bg-transparent="true" :btn-white="true" :btn-text-black="true"/>
        <slot />
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
  
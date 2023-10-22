<template>
    <div class="subpixel-antialiased w-full bg-auto relative bg-cover">
      <div class="flex flex-col items-center px-5 sm:px-5 mb-[5rem] lg:px-10">
        <div class="2xl:max-w-[101rem] relative w-full">
          <Nav :bg-transparent="false" />
          <div class="pt-10 md:pt-0">
            <slot />
          </div>
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

  body  {
    overflow-y:auto; /* Hide vertical scrollbar */
    overflow-x:auto; /* Hide horizontal scrollbar */
   }
  
  </style>
  
<template>
  <button
    class="h-16 rounded-full bg-primary px-8 py-2 font-medium text-white transition-colors duration-300 ease-linear hover:bg-black"
  >
    <slot />
  </button>
</template>

<!--<style>-->
<!--.button-bg::before,-->
<!--.button-bg::after {-->
<!--  content: '';-->
<!--  position: absolute;-->
<!--  width: 50%;-->
<!--  height: 100%;-->
<!--  transition: all 0.3s ease-in-out;-->
<!--}-->

<!--.button-bg:hover::before {-->
<!--  transform: scaleX(0);-->
<!--  transform-origin: left;-->
<!--}-->

<!--.button-bg:hover::after {-->
<!--  transform: scaleX(0);-->
<!--  transform-origin: right;-->
<!--}-->

<!--.button-bg::before {-->
<!--  left: 0;-->
<!--  background: var(&#45;&#45;primary-color);
}-->

<!--.button-bg::after {-->
<!--  right: 0;-->
<!--  background: var(&#45;&#45;primary-color);}-->
<!--</style>-->

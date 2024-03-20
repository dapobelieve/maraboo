<template>
  <button class="bg-primary font-bold text-white h-16 px-8 transition-colors duration-300 ease-linear hover:bg-black py-2 rounded-full">
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

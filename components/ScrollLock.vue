<template>
  <section ref="section" class="scroll-lock bord h-[100vh] w-full bg-white">
    <slot />
  </section>
</template>
<script setup>
const { $gsap } = useNuxtApp();

const section = ref(null);
onMounted(() => {
  $gsap.timeline({
    scrollTrigger: {
      trigger: section.value,
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });
});
</script>

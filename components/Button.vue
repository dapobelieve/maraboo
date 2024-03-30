<template>
  <button
    class="hover-effect relative h-14 overflow-hidden rounded-full px-8 py-2 font-medium text-neutral drop-shadow-2xl"
    :class="computedClass"
  >
    <slot />
  </button>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "outline",
  },
});

const computedClass = computed(() => {
  let classes = "";

  if (props.type === "outline") {
    classes += "border-2 border-neutral";
  } else if (props.type === "no-outline") {
  }

  return classes;
});
</script>
<style scoped lang="scss">
.hover-effect {
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 50%;
    background: #0f172a;
    transition: all 0.1s ease-in-out;
    z-index: -1;
  }

  &:hover::after {
    left: 0;
    right: 0;
  }

  &:hover {
    color: white;
  }
}
</style>

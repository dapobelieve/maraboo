<template>
  <button
    @mousemove="handleMouseMove"
    class="button relative h-14 overflow-hidden rounded-full px-8 py-2 font-medium text-neutral drop-shadow-2xl"
    :class="computedClass"
  >
    <div ref="circle" class="circle"></div>
    <span><slot /></span>
  </button>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "outline",
  },
  animate: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
  },
});

const circle = ref(null);

const computedClass = computed(() => {
  let classes = "";

  if (props.type === "outline") {
    classes = "border-2 border-neutral";
  } else if (props.type === "tint") {
    classes = "tint text-white ";
  } else if (props.type === "active") {
    classes = "bg-black text-white";
  }
  if (props.animate) {
    classes += " btn-animate";
  }
  return classes;
});

function handleMouseMove(event) {
  if (props.animate) {
    const buttonRect = event.target.getBoundingClientRect();
    circle.value.style.top = `${event.clientY - buttonRect.top}px`;
    circle.value.style.left = `${event.clientX - buttonRect.left}px`;
  }
}
</script>
<style scoped lang="scss">
.tint {
  background-color: rgba(255, 255, 255, 0.06);
}
.btn-animate {
  &:hover {
    span {
      position: relative;
      color: #ffffff;
      transition: 0.1s ease;
    }
    .circle {
      scale: 1;
      transition: scale 0.3s ease-in-out;
    }
  }
}
.button {
  cursor: pointer;
  place-items: center;
  position: relative;
}

.circle {
  position: absolute;
  width: 205%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #0f172a;
  transform: translate(-50%, -50%);
  transform-origin: 0% 0%;
  scale: 0;
  transition: scale 0.3s ease-in-out;
  pointer-events: none;
}
</style>

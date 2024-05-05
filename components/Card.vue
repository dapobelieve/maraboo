<template>
  <div
    class="relative w-full rounded p-5 lg:p-14 items-center"
    :class="[direction ? 'overflow-hidden' : '']"
  >
    <slot>Maraboo Card</slot>
    <img
      v-if="direction === 'down'"
      class="absolute bottom-0 left-0 w-full"
      src="~/assets/images/down.png"
      alt
    />
    <img
      v-else-if="direction === 'up'"
      class="absolute left-0 top-0 w-full"
      src="~/assets/images/up.png"
      alt
    />
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: "",
      // validator: (value) => ["up", "down"].includes(value),
    },
  },
};
</script>

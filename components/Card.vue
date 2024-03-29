<template>
  <div class="relative w-full rounded-[2.5rem] px-6 py-8 md:p-14">
    <slot>Maraboo Card</slot>
    <img
      v-if="direction === 'down'"
      class="absolute bottom-0 left-0 w-full"
      src="~/assets/images/down.png"
      alt=""
    />
    <img
      v-else-if="direction === 'up'"
      class="absolute left-0 top-0 w-full"
      src="~/assets/images/up.png"
      alt=""
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

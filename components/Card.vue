<template>
  <div
    class="relative w-full overflow-hidden rounded-[2.5rem] px-4 py-6 md:p-14"
  >
    <slot
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
      blanditiis consequatur est ex fugiat inventore laboriosam minus, nesciunt
      non pariatur possimus quam quis recusandae sit unde veritatis voluptatum!
      Architecto, omnis?</slot
    >
    <img
      v-if="direction === 'down'"
      class="absolute bottom-0 left-0 w-full"
      src="~/assets/images/down.png"
      alt=""
    />
    <img
      v-else-if="direction === 'up'"
      class="absolute bottom-0 left-0 w-full"
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

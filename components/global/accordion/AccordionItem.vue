<template>
  <div class="accordion-item">
    <div
      role="button"
      @click.exact="toggle"
      class="max-w-full bg-white px-8 mb-4 py-6 rounded-xl shadow-sm"
    >
      <div
        class="accordion-item-header flex justify-between items-center w-full"
      >
        <h6 class="font-bold text-xl">
          <h1 class="header">{{ item.question }}</h1>
        </h6>
        <svg
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          :class="[active ? '-rotate-180' : '']"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.16992 0.5L7.16992 5.5L12.1699 0.5L14.1699 1.5L7.16992 8.5L0.169922 1.5L2.16992 0.5Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="accordion-item-body" :class="[active ? 'active' : '']">
        <div v-html="item.answers"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["accordionState"],
  props: ["itemId", "item"],
  computed: {
    active() {
      return Number(this.accordionState.activeItem) === Number(this.itemId);
    },
  },
  methods: {
    toggle() {
      this.accordionState.activeItem = this.active ? null : this.itemId;
    },
  },
};
</script>

<style scoped lang="scss">
.accordion-item-body {
  @apply mt-8 text-lg text-gray-500;
  display: none;
  overflow: hidden;
  transition: height 70s ease-in-out;
  height: 0;
  &.active {
    height: auto;
    display: block;
  }
}
</style>

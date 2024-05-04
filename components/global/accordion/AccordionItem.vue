<template>
  <div class="accordion-item">
    <div
      @click.exact="toggle"
      class="mb-10 cursor-pointer rounded border bg-gray-100 px-5 py-4 transition-all duration-700 ease-in-out md:px-10 md:py-7"
      :class="[active ? 'border-black' : ' border-white']"
    >
      <div class="accordion-item-header flex items-center justify-between">
        <h6 class="mr-4 font-medium text-black md:text-xl">
          {{ item.question }}
        </h6>
        <svg
          width="40"
          height="41"
          class="shrink-0 transition-all duration-200"
          :class="[active ? '-rotate-45' : '']"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9997 8.37109V31.7044M8.33301 20.0378H31.6663"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        class="accordion-item-body flex flex-wrap transition-max-height duration-700 ease-in-out"
        :class="[active ? 'active' : '']"
      >
        <div class="text-justify text-black" v-html="item.answers"></div>
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

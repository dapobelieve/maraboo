<template>
  <div class="accordion-">
    <div
      @click.exact="toggle"
      class="cursor-pointer rounded border bg-gray-100 transition-all duration-700 ease-in-out p-4 md:p-8 "
      :class="[active ? 'border-neutral' : ' border-white']"
    >
      <div class="accordion-item-header flex items-center justify-between space-x-4">
        <h3 class="text-3">{{ item.question }}</h3>
        <svg
          width="32"
          height="32"
          class="shrink-0 transition-all duration-200 stroke-neutral"
          :class="[active ? '-rotate-45' : '']"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9997 8.37109V31.7044M8.33301 20.0378H31.6663"
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
        <div class="text-justify" v-html="item.answers"></div>
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

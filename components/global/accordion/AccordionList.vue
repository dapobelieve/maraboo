<template>
  <div class="accordion-list select-none">
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      accordionState: this.accordionState,
    };
  },
  data() {
    return {
      accordionState: {
        activeItem: null,
      },
    };
  },
};
</script>

<style scoped></style>

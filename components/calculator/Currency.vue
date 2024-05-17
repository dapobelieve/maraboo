<template>
  <div class="space-y-8 rounded-b-[28px] rounded-t-[8px] bg-[#FFFFFF0F] p-5">
    <h1 class="select-none text-sm font-medium uppercase text-emphasis-900">
      Currency & Payment Preferences
    </h1>
    <div class="flex w-full items-center">
      <div class="grow space-y-2">
        <div class="flex items-center space-x-3">
          <template v-if="props.currency.country?.country">
            <img alt="" class="h-8 w-8" :src="images[props.currency.country?.flag]" />
            <span class="uppercase text-emphasis-100">{{
              props.currency.country.currency
            }}</span>
          </template>
          <template v-else>
            <img alt="" src="~/assets/images/currency-dollar.svg" />
            <span class="text-emphasis-100">Select Currency</span>
          </template>
        </div>
        <div>
          <span class="space-x-2" v-if="props.currency.mode.name">
            <em class="text-positive">Paying with</em>
            <span class="text-emphasis-900">{{
              props.currency.mode.name
            }}</span>
          </span>
        </div>
      </div>
      <button
        :disabled="!config.services.length"
        class="text-sm font-bold bg-[#d0d0d038] px-3 py-1 rounded"
        @click.exact.stop="emits('step')"
      >
        Select
      </button>
    </div>
  </div>
</template>
<script setup>
import { useImages } from "~/composables/useImages";

const props = defineProps({
  currency: {
    type: Object,
    default: {
      country: {},
      mode: {},
    },
  },
  config: {
    type: Object,
  },
});
const emits = defineEmits(["step"]);

const { images } = useImages();
</script>
<style scoped lang="scss">
button {
  transition: all 0.9ms ease-in-out;
  &:disabled {
    @apply text-emphasis-200;
  }
}
</style>

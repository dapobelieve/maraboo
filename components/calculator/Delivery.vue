<template>
  <div class="space-y-8 rounded-b-[8px] rounded-t-[28px] bg-[#FFFFFF0F] p-5">
    <h1 class="uppercase text-emphasis-900">delivery information</h1>
    <div class="flex w-full items-center">
      <div class="grow space-y-2">
        <div class="flex items-center space-x-3">
          <template v-if="!props.delivery.country?.country">
            <img alt="" src="~/assets/images/world.svg" />
            <span class="text-emphasis-100">Select Country</span>
          </template>

          <template v-else>
            <img
              class="h-8 w-8"
              alt=""
              :src="images[props.delivery.country?.flag]"
            />
            <span class="capitalize text-emphasis-900">{{
              props.delivery.country.name
            }}</span>
          </template>
        </div>
        <div>
          <span class="space-x-2">
            <em class="text-warning">Delivery by</em>
            <template v-if="props.delivery.mode.name">
              <span class="font-bold capitalize text-emphasis-900">
                {{ props.delivery.mode.name }}
              </span>
            </template>
            <span v-else class="text-sm font-bold text-emphasis-100"
              >Select Delivery mode</span
            >
          </span>
        </div>
      </div>
      <button @click="emits('step')">Change</button>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
import { useImages } from "~/composables/useImages";
const props = defineProps({
  delivery: {
    type: Object,
    default: {
      country: {},
      mode: {},
    },
  },
});
const emits = defineEmits(["step"]);

const { images } = useImages();
</script>

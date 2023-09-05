<template>
  <span class="flex flex-col items-center">
    <img
      class="md:h-[4.7rem] md:w-[5.7rem] mb-2"
      :src="`${images[props.country.flag]}`"
      alt=""
    />
    <small>{{ countryName }}</small>
  </span>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  country: Object,
});

const { images } = useImages();

const countryName = computed(() => {
  return (
    props.country.name.charAt(0).toUpperCase() + props.country.name.slice(1)
  );
});
</script>

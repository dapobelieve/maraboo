<template>
  <NuxtLink :to="localePath(countryLink)" class="">
    <span class="flex flex-col items-center">
      <img
        class="w-[50px] md:h-[4.7rem] md:w-[5.7rem] mb-2 hover:-translate-y-1 duration-500 ease-in-out"
        :src="`${images[props.country.flag]}`"
        alt=""
      />
      <small>{{ countryName }}</small>
    </span>
  </NuxtLink>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from "vue";

const router = useRouter();
const props = defineProps({
  country: Object,
});


const { images } = useImages();

const countryName = computed(() => {
  return (
    props.country.name.charAt(0).toUpperCase() + props.country.name.slice(1)
  );
});

const countryLink = computed(() => {
  if (props.country.name === "canada") {
    return "/exchange/send-money-from-canada";
  } else {
    return `/exchange/send-money-from-${props.country.name.replace(
      " ",
      "-"
    )}-to-canada`.toLowerCase();
  }
});

// console.log(props.country.country)

// router.push({
//   query: props.country.country

// })
</script>

<template>
  <NuxtLink @click="navigateToCountry" class="cursor-pointer">
    <div class="flex flex-col items-start">
      <img
        class="mb-2 duration-500 ease-in-out hover:-translate-y-1"
        :src="`${flags[props.country.flag]}`"
        alt=""
      />
      <small class="text-lg">{{ countryName }}</small>
    </div>
  </NuxtLink>
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const props = defineProps({
  country: Object,
});

const { flags } = useImages();

const countryName = computed(() => {
  return (
    props.country.name.charAt(0).toUpperCase() + props.country.name.slice(1)
  );
});

const countryLink = computed(() => {
  if (props.country.name === "canada") {
    return router.currentRoute.value.path.includes("fr")
      ? "/fr/exchange/send-money-from-canada"
      : "/exchange/send-money-from-canada";
  } else {
    return router.currentRoute.value.path.includes("fr")
      ? `/fr/exchange/send-money-from-${props.country.name.replace(
          " ",
          "-"
        )}-to-canada`.toLowerCase()
      : `/exchange/send-money-from-${props.country.name.replace(
          " ",
          "-"
        )}-to-canada`.toLowerCase();
  }
});

const navigateToCountry = () => {
  router.push({
    path: countryLink.value,
    // query: {
    //   'country': props.country.country
    //   // Add any query parameters if needed
    //   // For example: queryParameterName: 'queryParameterValue'
    // },
  });

  localStorage.setItem("waemu", props.country.country);
};
</script>

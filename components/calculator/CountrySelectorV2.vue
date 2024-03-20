<template>
  <div
    class="no-scrollbar countries dynamic-enter h-[575px] space-y-4 overflow-auto"
  >
    <div>
      <h1 class="text-3 leading-9 text-emphasis-900">{{ displayText }}</h1>
    </div>
    <div
      class="western-list"
      :class="{
        invisible: visibleList !== 'both' && visibleList !== 'western',
      }"
    >
      <div class="text-4 mb-4 space-y-3 uppercase text-emphasis-100">
        WESTERN COUNTRIES
      </div>
      <ul role="listbox" class="space-y-3">
        <li
          @click.exact.stop="countrySelected(country)"
          v-for="country in state.firstCountry"
          v-if="props.config.which === 'delivery'"
          :class="[
            country.name === state.selectedCountry?.name ? 'selected' : '',
          ]"
          class="flex cursor-pointer px-3 py-3"
        >
          <a class="flex items-center">
            <img class="mr-3 h-6 w-6" :src="images[country.flag]" alt="" />
            <span class="text-2 text-emphasis-900">{{ country.name }}</span>
          </a>
          <img
            class="ml-auto hidden h-6 w-6"
            src="~/assets/images/icon-check.svg"
            alt=""
          />
        </li>
        <li
          @click.exact.stop="countrySelected(country)"
          v-for="country in state.firstCountry"
          v-else
          class="flex cursor-pointer px-3 py-3"
          :class="[
            country.name === state.selectedCountry?.name ? 'selected' : '',
          ]"
        >
          <a class="flex w-full grow items-center space-x-4">
            <img class="h-6 w-6" :src="images[country.flag]" alt="" />
            <span
              class="after:content text-2 relative uppercase text-emphasis-900 after:absolute after:right-[-10px] after:top-[13px] after:h-1 after:w-1 after:rounded-full after:bg-emphasis-200"
              >{{ country.currency }}</span
            >
            <span class="text-2 text-emphasis-100">{{ country.name }}</span>
          </a>
          <img
            class="ml-auto hidden h-6 w-6"
            src="~/assets/images/icon-check.svg"
            alt=""
          />
        </li>
      </ul>
    </div>
    <div
      class="umoa-list"
      :class="{ invisible: visibleList !== 'both' && visibleList !== 'umoa' }"
    >
      <div class="text-4 mb-4 uppercase text-emphasis-100">UMOA COUNTRIES</div>
      <ul role="listbox" class="space-y-3">
        <li
          @click.exact.stop="countrySelected(country)"
          v-for="country in state.countries.slice(1)"
          v-if="props.config.which === 'delivery'"
          class="flex cursor-pointer px-3 py-3"
          :class="[
            country.name === state.selectedCountry?.name ? 'selected' : '',
          ]"
        >
          <a class="flex w-full grow items-center">
            <img class="mr-3 h-6 w-6" :src="images[country.flag]" alt="" />
            <span class="text-2 text-emphasis-900">{{ country.name }}</span>
          </a>
          <img
            class="ml-auto hidden h-6 w-6"
            src="~/assets/images/icon-check.svg"
            alt=""
          />
        </li>
        <li
          @click.exact.stop="countrySelected(country)"
          v-for="country in state.countries.slice(1)"
          v-else
          class="flex cursor-pointer px-3 py-3"
          :class="[
            country.name === state.selectedCountry?.name ? 'selected' : '',
          ]"
        >
          <a class="flex w-full grow items-center space-x-4">
            <img class="h-6 w-6" :src="images[country.flag]" alt="" />
            <span
              class="after:content text-2 relative uppercase text-emphasis-900 after:absolute after:right-[-10px] after:top-[13px] after:h-1 after:w-1 after:rounded-full after:bg-emphasis-200"
              >{{ country.currency }}</span
            >
            <span class="text-2 text-emphasis-100">{{ country.name }}</span>
          </a>
          <img
            class="ml-auto hidden h-6 w-6"
            src="~/assets/images/icon-check.svg"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
import { useImages } from "~/composables/useImages";
const emits = defineEmits(["countrySelected"]);
const props = defineProps({
  visibleList: {
    type: String,
    default: "both",
  },
  config: {
    type: Object,
    default: "",
  },
  country: {
    type: Object,
    default: "",
  },
});

const { images } = useImages();
const state = reactive({
  firstCountry: computed(() => [state.countries[0]]),
  countries: [
    {
      name: "Canada",
      flag: "canada",
      currency: "cad",
      country: "canada",
      code: "ca",
    },
    {
      name: "Benin",
      flag: "benin",
      currency: "xof",
      country: "benin",
      code: "bj",
    },
    {
      name: "Burkina Faso",
      flag: "burkinafaso",
      currency: "xof",
      country: "burkina_faso",
      code: "bf",
    },
    {
      name: "Cote d'Ivoire",
      flag: "cotedivoire",
      currency: "xof",
      country: "cote_d_ivoire",
      code: "ci",
    },
    {
      name: "Guinea-Bissau",
      flag: "guineabissau",
      currency: "xof",
      country: "guinea_bissau",
      code: "gw",
    },
    {
      name: "Mali",
      flag: "mali",
      currency: "xof",
      country: "mali",
      code: "ml",
    },
    {
      name: "Niger",
      flag: "niger",
      currency: "xof",
      country: "niger",
      code: "ne",
    },
    {
      name: "Senegal",
      flag: "senegal",
      currency: "xof",
      country: "senegal",
      code: "sn",
    },
    {
      name: "Togo",
      flag: "togo",
      currency: "xof",
      country: "togo",
      code: "tg",
    },
  ],
  selectedCountry: null,
});

function countrySelected(country) {
  state.selectedCountry = country;
  setTimeout(() => {
    emits("countrySelected", state.selectedCountry);
  }, 500);
}

const displayText = computed(() => {
  return props.config?.which === "delivery"
    ? "Where are you sending to?"
    : "Select the currency you are sending.";
});

const countryOrCurrencyList = computed(() => {});
watch(
  () => props.country,
  (newVal) => {
    if (newVal) {
      const countryToSelect = state.countries.find(
        (country) => country.country === newVal.country
      );
      if (countryToSelect) {
        state.selectedCountry = newVal;
      }
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.selected {
  @apply rounded-[20px] bg-[#5F19F23D];
  img {
    @apply block;
  }
}

@keyframes slideInTopFastToSlow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.dynamic-enter {
  animation: slideInTopFastToSlow 300ms forwards;
}
</style>

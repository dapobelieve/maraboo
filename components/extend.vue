<template>
  <section class="extend-brand">
    <div class="container">
      <div class="content-wrap flex-col w-full space-y-32">
        <div class="w-full justify-between lg:flex items-end space-y-10">
          <h1 class="display-2 max-w-full lg:max-w-[512px]" v-html="$t('home.section7')"></h1>
          <div class="hidden lg:block">
            <img class="h-96" src="~/assets/images/globe-stand.svg" alt />
          </div>
        </div>
        <div class="flags w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          <CountryComponent
              v-for="(country, cIndex) in countries"
              :key="cIndex"
              :country="country"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup >
import {useI18n} from "vue-i18n";

const { t } = useI18n();
import {reactive} from "vue";


const countries = reactive([
  {
    name: "benin",
    flag: "benin",
    country: "benin",
  },
  {
    name: "Burkina Faso",
    flag: "burkinafaso",
    country: "burkina_faso",
  },
  {
    name: "Cote d'voire",
    flag: "cotedivoire",
    country: "cote_d_ivoire",
  },
  {
    name: "mali",
    flag: "mali",
    country: "mali",
  },
  {
    name: "togo",
    flag: "togo",
    country: "togo",
  },
  {
    name: "niger",
    flag: "niger",
    country: "niger",
  },
  {
    name: "Guinea Bissau",
    flag: "guineabissau",
    country: "guinea_bissau",
  },
  {
    name: "senegal",
    flag: "senegal",
    country: "senegal",
  },
  {
    name: "canada",
    flag: "canada",
  },
]);
</script>

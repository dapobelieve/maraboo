<template>
  <section>
    <div class="container">
      <div class="content-wrap">
        <div class="flex flex-col space-y-20 w-full">
          <div class="why-us flex w-full flex-col lg:flex-row lg:items-end justify-between">
            <div class="flex flex-col space-y-8 sub-content">
              <h1 class="display-2" v-html="$t('home.section5.what')"></h1>
              <p class="lg:max-w-md" v-html="$t('home.section5.about')"></p>
            </div>
            <div class="lg:flex hidden">
              <img alt src="~/assets/images/choose.svg" />
            </div>
          </div>
          <div class="w-full gap-10 grid grid-cols-1 lg:grid-cols-3">
            <div class="space-y-5">
              <div class="leading-[1.25]" v-html="$t('home.section5.one.top')"></div>
              <div v-html="$t('home.section5.one.bottom')"></div>
            </div>
            <div class="space-y-5">
              <div class="leading-[1.25]" v-html="$t('home.section5.two.top')"></div>
              <div v-html="$t('home.section5.two.bottom')"></div>
            </div>
            <div class="space-y-5">
              <div class="leading-[1.25]" v-html="$t('home.section5.three.top')"></div>
              <div v-html="$t('home.section5.three.bottom')"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

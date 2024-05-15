<template>
  <main>
    <section class="relative overflow-hidden">
      <div class="container lg:!pt-24 !pb-0 space-y-12">
        <div class="flex flex-col items-center">
          <div class="space-y-10 lg:space-y-20 text-center">
            <h1 class="display-1 font-medium">
              {{ $t("home.section1.intl") }}
              <span class="text-multi-color">
                {{
                $t("home.section1.umoa")
                }}
              </span>
            </h1>
            <Button class="btn-xl capitalize" animate @click="openQr()">
              {{
              $t("home.section1.send")
              }}
            </Button>
          </div>
          <div class="globe">
            <img class="w-full" src="~/assets/images/globe-intro.svg" alt />
          </div>
        </div>
      </div>
    </section>
    <TwoWay />
    <section>
      <div class="container">
        <div class="content-wrap">
          <div class="text-center lg:!pt-24">
            <h1 class="display-2 !font-normal">
              {{ $t("home.section3.left.one") }}
              <span
                class="text-multi-color"
                v-html="$t('home.section3.left.two')"
              ></span>
              , {{ $t("home.section3.left.three") }}
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="content-wrap">
          <div class="h-full w-full items-start space-y-16 lg:space-y-0 justify-between lg:flex">
            <div class="superpower space-y-10 sub-content">
              <h1 class="display-2" v-html="$t('home.section4.left.super-power')"></h1>
              <p class="text-2 max-w-sm" v-html="$t('home.section4.left.offer')"></p>
            </div>
            <div class="superpower-steps flex flex-col items-center space-y-10 max-w-md">
              <div class="rounded bg-gradient-to-r from-active to-accent-400 p-0.5 w-full">
                <div class="space-y-4 rounded bg-[#E3E1EB] p-6 lg:p-10">
                  <h1 class="display-3">{{ $t("home.section4.right.cash.top") }}</h1>
                  <p class="text-2">{{ $t("home.section4.right.cash.bottom") }}</p>
                </div>
              </div>
              <div class="rounded bg-gradient-to-r from-active to-accent-400 p-0.5 w-full">
                <div class="space-y-4 rounded bg-[#E3E1EB] p-6 lg:p-10">
                  <h1 class="display-3">{{ $t("home.section4.right.money.top") }}</h1>
                  <p class="text-2">{{ $t("home.section4.right.money.bottom") }}</p>
                </div>
              </div>
              <div class="rounded bg-gradient-to-r from-active to-accent-400 p-0.5 w-full">
                <div class="space-y-4 rounded bg-[#E3E1EB] p-6 lg:p-10">
                  <h1 class="display-3">{{ $t("home.section4.right.bank.top") }}</h1>
                  <p class="text-2">{{ $t("home.section4.right.bank.bottom") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <WhyChoose />
    <HowItWorks />
    <Extend />
    <Testimonial />
    <Faq />
    <Chat />
  </main>
</template>
<script setup>
import { useModal } from "vue-final-modal";

import {  onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import qr from "~/components/modals/qr.vue";
import cookie from "~/components/modals/cookie.vue";

const { t } = useI18n();

const show = ref(false);


const { open: openQr, close } = useModal({
  component: qr,
  attrs: {
    onConfirm() {
      close();
    },
  },
});

const { open: openCookie, close: closeCookie } = useModal({
  component: cookie,
  attrs: {
    onClose() {
      closeCookie();
    },
  },
});

function cookieSettings() {
  // openCookie();
  // let cookie = JSON.parse(localStorage.getItem("cookie"));
  // if (!cookie.decline || !cookie["accept-all"]) {
  // }
}
onMounted(() => {
  setTimeout(() => {
    cookieSettings();
  }, 5000);
});
</script>


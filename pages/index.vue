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
            <img class="w-full" src="https://res.cloudinary.com/believe/image/upload/v1715805451/maraboo/globe-intro.svg" alt />
          </div>
        </div>
      </div>
    </section>
    <TwoWay />
    <section>
      <div class="container">
        <div class="content-wrap">
          <div class="text-center lg:!pt-24"  v-html="$t('home.section3.left.body')">
          </div>
        </div>
      </div>
    </section>
    <Superpower />
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


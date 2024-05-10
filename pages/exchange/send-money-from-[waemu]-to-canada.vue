<template>
  <section class="py-6">
    <div class="bg-coloured w-full rounded">
      <div class="container">
        <div class="w-full items-start justify-between lg:flex">
            <div class="max-w-xl text-white">
              <h1 class="display-2 mb-4 ">
                Send money from
                <span class="inline-flex items-center">
                  <img
                    class="mr-2 h-6 w-6 md:h-14 md:w-14"
                    :src="images[waemuCountry?.flag]"
                    alt=""
                  />{{ waemuCountry?.name }}
                  </span>
                  to
                <span class="inline-flex items-center"
                  ><img
                    class="mr-2 h-6 w-6 md:h-14 md:w-14"
                    :src="images['canada']"
                    alt=""
                  /><span>Canada</span>
                </span>
                at the real exchange rate
              </h1>
              <p class="text-2 max-w-md text-center md:text-left">
                From local to global in real time, Maraboo Magic: Discover
                3xSavings on international money Transfers to or from WAEMU
                countries!
              </p>
            </div>
            <div class="calculator flex justify-center lg:justify-end">
              <Calculator class="lg:ml-auto" />
            </div>
          </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="content-wrap">
        <div class="w-full space-y-20">
          <div
              class="why-us relative flex w-full flex-col lg:flex-row lg:text-justify"
          >
            <div
                class="mb-8 flex flex-col items-center space-y-10 lg:mb-0 lg:block lg:flex-row lg:items-start"
            >
              <h1
                  class="display-2 font-medium"
                  v-html="$t('home.section5.what')"
              ></h1>
              <p
                  class="max-w-sm text-center leading-6 lg:text-left"
                  v-html="$t('home.section5.about')"
              ></p>
            </div>
            <div class="flex justify-center lg:ml-auto">
              <img alt="" class="h-96" src="~/assets/images/rats.png" />
            </div>
          </div>
          <div class="w-full justify-between lg:flex">
            <div class="mb-12 lg:mb-0">
              <div v-html="$t('home.section5.one.top')"></div>
              <div v-html="$t('home.section5.one.bottom')"></div>
            </div>
            <div class="mb-12 lg:mb-0">
              <div v-html="$t('home.section5.two.top')"></div>
              <div v-html="$t('home.section5.two.bottom')"></div>
            </div>
            <div class="mb-12 lg:mb-0">
              <div v-html="$t('home.section5.three.top')"></div>
              <div v-html="$t('home.section5.three.bottom')"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Extend />
  <Faq />
  <Testimonial />
  <Chat />
</template>

<script setup>
import { ModalsContainer, useModal } from "vue-final-modal";
import { useRouter } from "vue-router";

import { reactive, onMounted, onBeforeMount, ref } from "vue";
import { useI18n } from "vue-i18n";
import CountryComponent from "~/components/CountryComponent.vue";
import qr from "~/components/modals/qr.vue";
import { useRoute } from "#app";
import { useImages } from "~/composables/useImages";

const { t } = useI18n();
const { images } = useImages();
const route = useRoute();

const showModal = localStorage.getItem("show");
const show = ref(false);
const waemuCountry = ref(null);

const { open, close } = useModal({
  component: qr,
  attrs: {
    onConfirm() {
      close();
    },
  },
});

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

onMounted(() => {
  waemuCountry.value = countries.find(
    (c) => c.country === route.params.waemu.replace("-", "_")
  );
});

const steps = reactive([
  {
    step: "01",
    title: "Sign up",
    body:
      "Lorem ipsum dolor sit amet consectetur. Nunc pulvinar " +
      "nam purus nunc interdum lorem. Venenatis nisl " +
      "pulvinar urna facilisi eget vel fringilla",
  },
  {
    step: "02",
    title: "Download the App and Verify your Identity",
    body:
      "Lorem ipsum dolor sit amet consectetur. Nunc pulvinar " +
      "nam purus nunc interdum lorem. Venenatis nisl " +
      "pulvinar urna facilisi eget vel fringilla",
  },
  {
    step: "03",
    title: "Send Less",
    body: "Enjoy the lowest rates, send up to $9,900 every day",
  },
]);

</script>

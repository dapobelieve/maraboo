<template>
  <main class="text-black">
    <section>
      <div class="container flex justify-center">
        <div class="content-wrap">
          <div class="space-y-20">
            <div class="text-center">
              <h1 class="display-2">
                We're
                <span class="text-multi-color"
                  >building borderless financial systems</span
                >
                to connect West-Africans across the globe
              </h1>
            </div>
            <div
              class="items-start justify-between space-y-8 md:relative md:flex md:space-x-8"
            >
              <div class="md:max-w-xs">
                <p class="text-2 mb-10 text-center md:mb-0 md:text-left">
                  Introducing Maraboo, a West-African fintech firm offering
                  transformative financial solutions that are fair, responsible,
                  inclusive, and designed to improve the quality of life of West
                  Africans.
                </p>
              </div>
              <div class="-top-[2rem] right-0 z-10 md:absolute">
                <img alt="" class="w-full" src="~/assets/images/space.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <Card
          class="bg-coloured flex justify-center px-5 py-20 text-white md:py-32"
        >
          <div class="row space-y-12 md:max-w-5xl">
            <div>
              <h1 class="display-2 text-center">
                Our Core mission is to make payments in & out of WAEMU countries
                up to 3x cheaper!
              </h1>
            </div>
            <div class="hidden">
              <p class="text-2 max-w-xs">
                Did you know that a 10% reduction in transaction fees for
                sending money in & out of WAEMU countrycan boost the revenue of
                regional households by up to 16%?
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
    <section class="mb-10">
      <div class="container">
        <Card class="flex justify-center px-5 py-32 text-white md:px-0">
          <div
            class="content-wrap relative flex w-full justify-between space-x-12 text-black"
          >
            <div class="w-1/2 space-y-12">
              <div class="">
                <h1 class="md:display-2 display-1 text-center md:text-left">
                  We believe that remittances should be fast, low cost, and have
                  a major social impact.
                </h1>
              </div>
              <div>
                <p class="text-2 text-center md:max-w-xs md:text-left">
                  Two birds one stone - we apply the real exchange rate on all
                  of our transactions to save you money and make the UN social
                  development goal by significantly reducing remittance cost by
                  2030 a reality today!
                </p>
              </div>
            </div>
            <div class="z-10 hidden w-1/2 shrink-0 md:block">
              <img
                class="absolute -top-[18rem]"
                alt=""
                src="~/assets/images/kids.png"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
    <section style="padding: 0" class="px-4">
      <div class="md:px-10">
        <img
          class="rounded-[20px] md:rounded-[40px]"
          src="~/assets/images/box.png"
          alt=""
        />
      </div>
    </section>
    <section>
      <div class="container">
        <div class="grid grid-cols-3 gap-10">
          <div
            v-for="x in 12"
            class="member inline-flex w-fit flex-col items-start justify-start overflow-hidden"
          >
            <div
              class="mb-6 w-40 overflow-hidden rounded-b-full rounded-t-full bg-accent-200"
            >
              &nbsp;
              <img
                class="object-contain"
                src="~/assets/images/user.png"
                alt=""
              />
            </div>
            <h1>Cheick Ouedraogo</h1>
            <small>Founder - CEO</small>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import CountryComponent from "~/components/CountryComponent.vue";
import CookieConsent from "~/components/CookieConsent.vue";
import qrBg from "assets/images/unlock-bg.svg";

const { t } = useI18n();

const showModal = localStorage.getItem("show");
const show = ref(false);

const showCookieConsentModal = () => {
  if (!showModal) {
    show.value = true;
    document.body.classList.add("show-modal");
  }

  // showModal.value = true
  if (showModal) {
    show.value = false;
    document.body.classList.remove("show-modal");
  }
};

onMounted(() => {
  setTimeout(() => {
    showCookieConsentModal();
  }, 2000);
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

const half = computed(() => Math.ceil(faqs.length / 2));
</script>

<style lang="scss" scoped>
section {
  @apply px-0 md:px-20;
  .container {
    &:first-child {
      @apply py-20;
    }
  }
}
</style>

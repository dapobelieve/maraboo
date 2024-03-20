<template>
  <main class="text-black">
    <section>
      <div class="container flex justify-center ">
        <div class="row space-y-12 md:max-w-5xl">
          <div class="">
            <h1 class="display-2">We're building borderless financial systems to connect West-Africans across <br class="hidden md:block"> the globe</h1>
          </div>
          <div class="md:flex  items-start sspace-y-8 md:space-x-8 md:relative justify-between">
            <div class="md:max-w-xs">
              <p class="text-2 text-center mb-10 md:mb-0 md:text-left">
                Introducing Maraboo, a West-African fintech firm offering transformative financial solutions that are fair, responsible, inclusive, and designed to improve the quality of life of West Africans.
              </p>
            </div>
            <div class="md:absolute right-0 -top-[2rem]">
              <img alt="" class="w-full " src="~/assets/images/space.svg">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <Card class="md:py-32 py-20 bg-surface-200 px-5 justify-center flex">
          <div class="row  space-y-12 md:max-w-5xl">
            <div>
              <h1 class="display-2">Our Core mission is to make payments in & out of WAEMU countries up to 3x cheaper!</h1>
            </div>
            <div>
              <p class="max-w-xs text-2">
                Did you know that a 10% reduction in transaction fees for sending money in & out of WAEMU countrycan boost the revenue of regional households by up to 16%?
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
    <section class="hidden">
      <div class="container">
        <Card class="md:py-32 py-20 bg-surface-200 px-5 justify-center flex">
          <div class="row  space-y-12 md:max-w-5xl">
            <div>
              <h1 class="display-2">Our Core mission is to make payments in & out of WAEMU countries up to 3x cheaper!</h1>
            </div>
            <div>
              <p class="max-w-xs text-2">
                Did you know that a 10% reduction in transaction fees for sending money in & out of WAEMU countrycan boost the revenue of regional households by up to 16%?
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
    <section style="padding: 0">
      <div class="">
        <Card class="py-32 bg-accent-300 px-5 md:px-0 text-white justify-center flex">
          <div class="row flex relative w-full space-x-12 md:max-w-5xl">
            <div class="space-y-12 ">
              <div class="">
                <h1 class="display-2 text-center md:text-left">We believe that <br class="hidden md:block"> remittances should <br class="hidden md:block"> be fast, low cost, <br class="hidden md:block"> and have a major <br class="hidden md:block"> social impact.</h1>
              </div>
              <div >
                <p class="md:max-w-xs text-center md:text-left text-2">
                  Two birds one stone - we apply the real exchange rate on all of our transactions to save you money and make the UN social development goal by significantly reducing remittance cost by 2030 a reality today!
                </p>
              </div>
            </div>
            <div class="shrink-0 absolute hidden md:block -right-[15rem] -top-[23rem]">
              <img alt="" src="~/assets/images/kids.png">
            </div>
          </div>
        </Card>
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

const showModal = localStorage.getItem('show')
const show = ref(false)

const showCookieConsentModal = () => {
  if(!showModal){
    show.value = true
    document.body.classList.add('show-modal')
  }

  // showModal.value = true
  if(showModal){
    show.value = false
    document.body.classList.remove('show-modal')
  }
};

onMounted(() => {
  setTimeout(() => {
    showCookieConsentModal()
  }, 2000)

});

const faqs = reactive([
  {
    question: t("home.faq[0].question"),
    answers: t("home.faq[0].answers"),
  },
  {
    question: t("home.faq[1].question"),
    answers: t("home.faq[1].answers"),
  },
  {
    question: t("home.faq.2.question"),
    answers: t("home.faq.2.answers"),
  },
  {
    question: t("home.faq.3.question"),
    answers: t("home.faq.3.answers"),
  },
  {
    question: t("home.faq.4.question"),
    answers: t("home.faq.4.answers"),
  },
  {
    question: t("home.faq.5.question"),
    answers: t("home.faq.5.answers"),
  },
]);

const countries = reactive([
  {
    name: "benin",
    flag: "benin",
    country: "benin"
  },
  {
    name: "Burkina Faso",
    flag: "burkinafaso",
    country: "burkina_faso"
  },
  {
    name: "Cote d'voire",
    flag: "cotedivoire",
    country: "cote_d_ivoire"
  },
  {
    name: "mali",
    flag: "mali",
    country: "mali"
  },
  {
    name: "togo",
    flag: "togo",
    country: "togo"
  },
  {
    name: "niger",
    flag: "niger",
    country: "niger"
  },
  {
    name: "Guinea Bissau",
    flag: "guineabissau",
    country: "guinea_bissau"
  },
  {
    name: "senegal",
    flag: "senegal",
    country: "senegal"
  },
  {
    name: "canada",
    flag: "canada",
  },
]);

const half = computed(() => Math.ceil(faqs.length / 2))
</script>

<style lang="scss" scoped>

section {
  @apply md:px-20 px-0;
  .container {
    &:first-child {
      @apply py-20
    }
  }

}

</style>

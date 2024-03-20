<template>
  <main class="text-black">
    <section>
      <div class="container space-y-12" style="padding-bottom: 0">
        <div class="row flex flex-col items-center space-y-0 md:space-y-20">
          <div class="mb-8 text-center">
            <h1 class="md:display-3">International Transfers</h1>
            <h1 class="md:display-3 display-1 mb-10">
              Built for UMOA Countries
            </h1>
            <Button class="drop-shadow-2xl">Send Money</Button>
          </div>
          <div class="hidden overflow-hidden md:block md:h-[34rem]">
            <img class="w-full" src="~/assets/images/the-globe.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="rounded-[40px] bg-primary">
      <div class="container">
        <div class="row justify-between space-y-8 md:flex md:space-y-0">
          <div class="text-white md:max-w-xs">
            <h1 class="display-2 mb-4 text-center md:text-left">
              Two-way Corridors
            </h1>
            <p class="text-center md:text-left">
              Send money to or from any UMOA country in real time at the lowest
              rate
            </p>
          </div>
          <div class="">
            <Calculator class="md:ml-auto" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row flex justify-center">
          <div class="max-w-2xl text-center">
            <h1 class="display-1">
              Send less with <span class="text-primary">Maraboo</span>, enjoy
              the lowest rates, receive more in real time
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="items-start justify-between md:flex">
          <div class="">
            <div class="space-y-8 text-center md:text-left">
              <h1 class="display-1 capitalize">
                Your new <br />
                superpower
              </h1>
              <p class="text-2 md:max-w-xs">
                We offer the widest rage of payment and disbursements methods to
                meet all your needs
              </p>
            </div>
          </div>
          <div class="flex flex-col space-y-10">
            <div
              class="max-w-md rounded-[40px] border-2 border-surface-200 p-14"
            >
              <h1 class="display-1 mb-6">Cash</h1>
              <p class="text-2">
                Receive by cash at Ecobank ATMs or Xpress points
              </p>
            </div>
            <div
              class="max-w-md rounded-[40px] border-2 border-surface-200 p-14"
            >
              <h1 class="display-1 mb-6">Mobile Money</h1>
              <p class="text-2">Send or receive using mobile money</p>
            </div>
            <div
              class="max-w-md rounded-[40px] border-2 border-surface-200 p-14"
            >
              <h1 class="display-1 mb-6">Bank</h1>
              <p class="text-2">Send and receive from bank accounts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="space-y-20">
          <div
            class="why-us relative flex w-full flex-col md:flex-row md:text-justify"
          >
            <div
              class="flex flex-col items-center space-y-10 md:block md:flex-row md:items-start"
            >
              <h1 class="display-1">Why Choose us</h1>
              <p class="max-w-xs text-center md:text-left">
                When you send money with Maraboo you not only save your time and
                money but you a company built by native africans
              </p>
            </div>
            <div class="-top-44 right-0 flex justify-center md:absolute">
              <img alt="" src="~/assets/images/choose.svg" />
            </div>
          </div>
          <div class="w-full justify-between md:flex">
            <div class="mb-12 max-w-xs md:mb-0">
              <h1 class="display-1 mb-6">The Fastest</h1>
              <p class="text-2">We complete transfers in real time</p>
            </div>
            <div class="mb-12 max-w-xs md:mb-0">
              <h1 class="display-1 mb-6">The Cheapest</h1>
              <p class="text-2">We give you the lowest rate every time</p>
            </div>
            <div class="mb-12 max-w-xs md:mb-0">
              <h1 class="display-1 mb-6">The Most Versatile</h1>
              <p class="text-2">
                The widest range of collection and delivery options
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="flex justify-between md:grid-cols-2">
          <div class="flex w-full flex-col items-center py-2 md:w-1/2">
            <div class="md:max-w-[31rem]">
              <div class="mb-8 space-y-4">
                <h1 class="display-2 mb text-start">How it Works</h1>
                <p class="text-2 font-bold">
                  Sending money to or from UMOA is as easy <br />
                  as 1-2-3 with us.
                </p>
              </div>
              <div class="flex space-x-6">
                <div class="bar">
                  <div class="h-1/2 w-[3px] bg-slate-300"></div>
                </div>
                <div class="steps flex flex-col">
                  <div
                    v-for="step in steps"
                    class="step mb-8 flex items-start space-x-8 pb-10"
                  >
                    <div>
                      <h1 class="display-1">{{ step.step }}</h1>
                    </div>
                    <div>
                      <h1 class="display-1 mb-4">{{ step.title }}</h1>
                      <span class="text-2">
                        {{ step.body }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden w-1/2 md:block">
            <div class="flex w-full justify-center">
              <img src="~/assets/images/mobile.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="extend-brand">
      <div class="container">
        <div class="relative space-y-28">
          <div class="flex items-center justify-between">
            <h1 class="display-1 capitalize">
              Where We <br />
              Extend our <br />support
            </h1>
            <div class="absolute -top-52 right-0 hidden md:block">
              <img src="~/assets/images/globe-stand.svg" alt="" />
            </div>
          </div>
          <div class="flags flex w-full items-center">
            <div class="grid grid-cols-4 gap-10 md:w-5/6">
              <CountryComponent
                class="shrink-0"
                v-for="(country, cIndex) in countries"
                :key="cIndex"
                :country="country"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <div class="container">
        <div class="flex flex-col gap-10">
          <div class="grid gap-10 md:grid-cols-2">
            <Card class="flex flex-col bg-accent-300">
              <div class="flex grow items-center justify-center">
                <img src="~/assets/images/secure.png" alt="phone-logo" />
              </div>
              <div>
                <h1 class="display-2 mb-4">Securing Your Data Fortress!</h1>
                <p class="text-2">
                  Rest assured, your funds and private information are <br />
                  safeguarded by state-of-the-art security technology, <br />
                  compliant with both local and global regulations
                </p>
              </div>
            </Card>
            <div class="grid gap-10">
              <Card class="bg-accent-100" direction="down">
                <h1 class="display-2 mb-4">From local to global.</h1>
                <p class="text-3">
                  Seamlessly transfer up to $9,900 daily to/from WAEMU countries
                  at the Real Exchange. Your gateway to hassle-free
                  international transactions!
                </p>
              </Card>
              <Card class="bg-purple-400" direction="down">
                <p class="display-1">
                  Did you know that a 10% reduction in transaction fees for
                  sending?
                </p>
              </Card>
            </div>
          </div>
          <div class="">
            <Card class="display-1 flex justify-center bg-accent-200 shadow-md">
              <div class="flex w-full justify-between 2xl:max-w-7xl">
                <div class="flex w-1/2 flex-col space-y-36">
                  <h1 class="display-2 grow-1">
                    Real Talk <br />
                    from Our <br />
                    Customers
                  </h1>
                  <div
                    class="relative flex max-w-[9rem] items-center justify-between p-4"
                  >
                    <button
                      class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 opacity-70 shadow"
                    >
                      <span class="text-xl"
                        ><img
                          class="rotate-180"
                          src="~/assets/images/tabler-icon-chevron-right.png"
                      /></span>
                    </button>

                    <button
                      class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 opacity-70 shadow"
                    >
                      <span class="text-xl">
                        <img
                          src="~/assets/images/tabler-icon-chevron-right.png"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div class="flex w-1/2 flex-col items-center">
                  <div class="mb-8 inline-flex flex-col items-center">
                    <img class="mb-4" src="~/assets/images/customer.png" />
                    <small class="text-1">John Doe . Canada</small>
                  </div>
                  <div>
                    <p class="max-w-xs text-center text-2xl">
                      “I love that Maraboo gives me the real exchange rate. It
                      means more of my money goes to my loved ones in Togo.”
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section class="faq mb-8">
      <div class="container">
        <div class="flex flex-col items-center space-y-32">
          <h1
            class="font-heading display-2 text-center leading-snug md:text-6xl"
          >
            {{ $t("home.faq-header") }}
          </h1>
          <div class="flex w-full">
            <GlobalAccordionList class="w-full gap-10 md:flex">
              <div class="md:w-1/2">
                <GlobalAccordionItem
                  :item-id="id + 1"
                  :item="q"
                  v-for="(q, id) in faqs.slice(0, half)"
                ></GlobalAccordionItem>
              </div>
              <div class="md:w-1/2">
                <GlobalAccordionItem
                  :item-id="id + 4"
                  :item="q"
                  v-for="(q, id) in faqs.slice(half)"
                ></GlobalAccordionItem>
              </div>
            </GlobalAccordionList>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <Card class="bg-accent-200 p-8 md:p-10">
          <div class="items-center md:flex">
            <div class="mb-4 flex md:space-x-8">
              <img
                src="~/assets/images/woman.svg"
                class="hidden md:block"
                alt="woman-logo"
              />
              <div>
                <h1 class="display-1 mb-4">Still have questions?</h1>
                <p class="text-2">
                  Our agents are always ready to answer your questions.
                </p>
              </div>
            </div>
            <button
              class="ml-auto self-center rounded-full border-2 border-black px-6 py-2 font-bold"
            >
              Chat With Us
            </button>
          </div>
        </Card>
      </div>
    </section>
    <!--    <CookieConsent :show="show" v-if="show"/>-->
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
  {
    step: "04",
    title: "Receive More",
    body: "Receive in real time by cash, mobile money or bank",
  },
]);

const half = computed(() => Math.ceil(faqs.length / 2));
</script>

<style lang="scss" scoped>
section {
  @apply px-0 md:px-20;
  .container {
    &:first-child {
      @apply px-2 py-32;
    }
  }
}
* {
  //@apply border border-red-600;
}
</style>

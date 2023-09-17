<template>
  <div>
    <div
      class="bg-[#BEBAFC] min-h-screen w-full"
      :style="{ backgroundImage: `url('/unlock-bg.svg')` }"
    >
      <div class="flex flex-col items-center px-5 sm:px-5">
        <div class="2xl:max-w-[101rem] w-full">
          <Nav
            :bg-transparent="true"
            :btn-white="true"
            :btn-text-black="true"
          />
          <section class="px-4">
            <div class="flex md:inline-block mt-10"></div>
            <div class="rounded-[30px] flex py-8 justify-center">
              <div class="w-full md:space-y-0 md:flex items-start">
                <div
                  class="md:w-1/2 text-white h-full space-y-8 flex flex-col justify-between"
                >
                  <span>
                    <NuxtLink
                      to="/join-us"
                      class="inline-flex inline cursor-pointer items-center bg-[#F5F5F5] px-4 py-3 shadow transition-transform duration-700 hover:scale-105 rounded-[50px] md:px-4 md:py-3"
                    >
                      <span class="text-sm font-bold text-purple lg:text-lg">
                        FINTRAC regulated
                      </span>
                      <span class="mx-1 text-[12px] text-black md:ml-4">
                        Learn more
                      </span>
                      <img
                        class="h-3 md:ml-3"
                        src="~/assets/images/arrow-right.svg"
                        alt=""
                      />
                    </NuxtLink>
                  </span>
                  <h1 class="font-heading mb-10 text-4xl md:text-5xl">
                    Send money from {{ countryName }} to Canada at the real
                    exchange rate!
                  </h1>
                  <p class="drop-shadow-lg grow mb-8 md:mb-0">
                    From local to global in real time, Maraboo Magic: Discover
                    3x
                    <br />
                    Savings on international money Transfers to or from WAEMU
                    countries!
                  </p>
                  <div class="inline-flex mb-auto">
                    <img
                      class="md:h-56 h-32 mr-5 drop-shadow-lg"
                      src="~/assets/images/qr.svg"
                    />
                    <span class="md:mt-10 drop-shadow-lg text-lg">
                      Scan QR code to <br />
                      download the app
                    </span>
                  </div>
                </div>
                <div id="top" class="md:w-1/2">
                  <Calculator :country="waemu" class="md:ml-auto" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <div
      class="my-28 px-5 lg:px-52 flex flex-col items-center justify-center text-center"
    >
      <div class="flex flex-col items-center px-5 sm:px-5 lg:px-10">
        <div class="2xl:max-w-[101rem] w-full">
          <h1 class="mb-7 font-heading text-4xl md:text-6xl">
            {{ countryName }} to Global Destinations, with 3x the Cost
            Efficiency
          </h1>
          <p class="text leading-relaxed lg:px-12">
            Maraboo is your wallet’s new superpower for international transfers
            from any WAEMU country.
            <span class="underline"
              >Send up to $9,900 daily at the Real Exchange</span
            >
            to pay international bills, tuition, suppliers, you name it! We
            accept XOF payments by mobile money transfers or by processing your
            back card
            <!-- <br />
              {{ $t("home.section5.text-2") }} -->
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="relative bg-[url('/assets/images/angle.svg')] bg-[#F5F5F5] border-red-700 my-24 pb-12"
  >
    <div class="flex flex-col items-center px-5 sm:px-5 lg:px-10">
      <div class="2xl:max-w-[101rem] w-full">
        <div
          id="how-it-works"
          class="relative text-black flex flex-col pt-24 items-center justify-center"
        >
          <h1
            class="mb-9 md:mb-24 px-5 lg:px-52 text-center font-heading text-4xl md:text-6xl"
          >
            Send money from {{ countryName }} to Canada in three easy steps
          </h1>
          <div class="flex flex-col lg:flex-row lg:gap-9">
            <div class="w-full">
              <div class="flex flex-col text-black items-center md:block">
                <div class="mb-8 md:mb-24">
                  <div
                    class="inline-block bg-white h-[380px] w-80 rounded-[40px] shadow-lg px-6 py-10"
                  >
                    <h1 class="mb-4 text-2xl font-bold text-[#F67335]">
                      {{ $t("home.section5.how-it-works.step-1.name") }}
                    </h1>
                    <div class="inline-flex flex-col mt-6">
                      <span>&#x2022; Create account</span>
                      <span>&#x2022; Get a quote</span>
                      <span>&#x2022; Verify your identity (once)</span>
                      <span>&#x2022; Select delivery method</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full mx-auto mb-8">
              <div
                class="inline-block bg-white h-[380px] w-80 rounded-[40px] shadow-lg px-6 py-10"
              >
                <h1 class="mb-4 text-2xl font-bold text-[#F67335]">
                  {{ $t("home.section5.how-it-works.step-2.name") }}
                </h1>
                <div class="inline-flex flex-col mt-6">
                  <span>&#x2022; Enter recipients details</span>
                  <span>&#x2022; Review Transaction details</span>
                  <span
                    >&#x2022; Pay in any currency that we support (XOF or
                    CAD)</span
                  >
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="flex justify-center">
                <div
                  class="inline-block bg-white h-[380px] w-80 rounded-[40px] shadow-lg px-6 py-10"
                >
                  <h1 class="mb-4 text-2xl font-bold text-[#F67335]">
                    {{ $t("home.section5.how-it-works.step-3.name") }}
                  </h1>
                  <p class="mt-7">Your recipient receives money:</p>
                  <div class="-mt-5">
                    <div>
                      <div class="inline-flex items-center">
                        <h1 class="m-0">
                          {{
                            $t("home.section5.how-it-works.step-3.cad-in.name")
                          }}:
                        </h1>
                        <div class="flags inline-flex items-center">
                          <span>
                            <img
                              class="ml-3 h-4 mt-10"
                              src="~/assets/images/canada.svg"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                      <div class="block -mt-8">
                        <div class="ml-2 inline-flex flex-col">
                          <span
                            >&#x2022;
                            {{
                              $t(
                                "home.section5.how-it-works.step-3.cad-in.interac"
                              )
                            }}</span
                          >
                        </div>
                      </div>
                    </div>

                    <p
                      class="mt-4 mb-3"
                      v-html="$t('home.section5.how-it-works.step-3.text')"
                    ></p>
                  </div>
                </div>

                <p
                  class="mt-4 mb-3"
                  v-html="$t('home.section5.how-it-works.step-3.text')"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section
    class="mt-[3rem] px-12 md:px-2 lg:px-12 2xl:px-96 pb-12 md:mt-[7rem] md:pb-32"
  >
    <div class="flex flex-col items-center px-5 sm:px-5 lg:px-10">
      <div class="2xl:max-w-[101rem] w-full">
        <div class="md:flex gap-10">
          <div class="mb-8 w-full md:mb-0 md:w-2/4">
            <div class="mt-20">
              <div class="mb-8 font-heading md:text-left">
                <h1
                  class="max-w-[47rem] text-[32px] md:text-5xl"
                  style="line-height: 3.4rem !important"
                >
                  Download the Maraboo mobile app for quick and easy transfers!
                </h1>
              </div>
              <p
                class="text-left"
                v-html="$t('home.section1.left.center.l3')"
              ></p>
            </div>
            <div class="mt-16 hidden text-center md:block md:text-left">
              <a
                @click.stop="scrollIntoView"
                href="#top"
                class="bg-black mb-6 text-white px-6 py-4 rounded-[10px]"
              >
                Send money now
              </a>
              <div class="flex justify-between mt-10 max-w-xs">
                <a>
                  <img
                    class="md:h-12 h-4"
                    src="~/assets/images/appleStore.webp"
                  />
                </a>
                <a>
                  <img class="md:h-12" src="~/assets/images/playStore.webp" />
                </a>
              </div>
              <!--  <GlobalMore> {{ $t("home.section1.left.bottom") }} </GlobalMore>-->
            </div>
          </div>
          <div
            class="block mx-auto lg:flex items-center justify-center w-[80%] md:w-[500px]"
          >
            <img
              class="h-full w-full content-center"
              src="~/assets/images/iphone-hexagon-2.png"
            />
          </div>
          <div class="mt-16 md:hidden text-left">
            <a
              @click.stop="scrollIntoView"
              href="#top"
              class="bg-black mb-6 text-white px-6 py-4 rounded-[10px]"
            >
              Send money now
            </a>
            <div class="flex justify-start gap-5 mt-10">
              <a href="#">
                <img class="h-12" src="~/assets/images/appleStore.webp" />
              </a>
              <a href="#">
                <img class="h-12" src="~/assets/images/playStore.webp" />
              </a>
            </div>
          </div>
          <!--  <GlobalMore> {{ $t("home.section1.left.bottom") }} </GlobalMore>-->
        </div>
      </div>
    </div>
  </section>
  <section class="data-privacy py-20 px-8">
    <div class="flex items-center text-center md:text-left justify-center">
      <div
        class="max-w-5xl inline-flex md:flex-row flex-col justify-center items-center w-full"
      >
        <img src="~/assets/images/shield.png" class="mr-0 w-1/4 mb-5" />
        <span class="md:ml-36">
          <h1
            class="mb-8 font-heading text-4xl leading-snug md:text-6xl"
            v-html="$t('home.section6.how-we.name')"
          ></h1>
          <span class="max-w-[45rem] text leading-normal">
            {{ $t("home.section6.how-we.text") }}
          </span>
        </span>
      </div>
    </div>
  </section>

  <section class="mb-52 px-4 md:px-12 md:py-32">
    <div class="flex flex-col items-center px-5 sm:px-5 lg:px-10">
      <div class="2xl:max-w-[101rem] w-full">
        <div class="flex flex-col items-center">
          <h1
            class="mb-14 text-center font-heading text-4xl leading-snug md:text-6xl"
          >
            {{ $t("home.faq-header") }}
          </h1>

          <div class="w-full">
            <GlobalAccordionList>
              <GlobalAccordionItem
                :item-id="id + 1"
                :item="q"
                v-for="(q, id) in faqs"
              ></GlobalAccordionItem>
            </GlobalAccordionList>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { waemu } = useRoute().params;

//  function that looks for a lowercase letter that begins with hyphen(-) and converts the first letter and the match to uppercase
const capitalizeWords = (str) => {
  return str
    .toLowerCase()
    .replace(/(^|-)([a-z])/g, (match) => match.toUpperCase());
};

const countryName = capitalizeWords(waemu);

function scrollIntoView(e) {
  const { hash } = e.target;
  document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
}

definePageMeta({
  layout: "country",
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
</script>

<style lang="scss" scoped></style>

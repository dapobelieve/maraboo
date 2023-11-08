<template>
  <div>
    
    <div class="bg-[#BEBAFC] min-h-screen w-full" :style="{ backgroundImage: `url('/unlock-bg.svg')` }">
      <div class="flex flex-col items-center px-5 sm:px-5 lg:px-10">
        <div class="2xl:max-w-[101rem] w-full">
          <section class="px-4 mt-[7rem]">
            <div
              class="rounded-[30px] flex md:py-14 py-8 lg:px-8 justify-center"
            >
              <div class="w-full md:space-y-0 space-y-8 md:flex">
                <div class="md:w-1/2 text-white flex flex-col justify-between">
                  <div class="block mb-4 md">
                    <NuxtLink
                      to="/join-us"
                      class="inline-flex cursor-pointer items-center bg-[#F5F5F5] px-4 py-3 shadow transition-transform duration-700 hover:scale-105 rounded-[50px] md:px-4 md:py-3"
                    >
                      <span class="text-sm font-bold text-purple lg:text-lg">
                        FINTRAC {{  $t('from-waemu.section-1.regulated.name') }}
                      </span>
                      <span class="mx-1 text-[12px] text-black md:ml-4">
                        {{ $t('from-waemu.section-1.regulated.learn-more') }}
                      </span>
                      <img
                        class="h-3 md:ml-3"
                        src="~/assets/images/arrow-right.svg"
                        alt=""
                      />
                    </NuxtLink>
                  </div>
                  <h1 class="font-heading text-[32px] md:text-5xl" style="line-height: 3.4rem !important">
                    {{ $t('from-waemu.section-1.caption.left') }} {{ countryName }}  {{ $t('from-waemu.section-1.caption.right') }}
                  </h1>
                  <p v-html="$t('from-waemu.section-1.text')" class="drop-shadow-lg mb-8 md:mt-2"></p>
                  <div class="inline-flex">
                    <img class="md:h-56 h-32 mr-5 drop-shadow-lg" src="~/assets/images/qr.svg" />
                    <span v-html="$t('qr-scan')" class="md:mt-10 drop-shadow-lg text-lg">
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
            {{ countryName }}  {{ $t('from-waemu.section-2.caption') }} 
          </h1>
          <p v-html="$t('from-waemu.section-2.text')" class="text leading-relaxed lg:px-12"></p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="relative bg-[url('/assets/images/angle.svg')] bg-[#F5F5F5] border-red-700 my-24 pb-12"
  >
    <div class="flex flex-col items-center px-5 sm:px-5 lg:px-10">
      <div class="2xl:max-w-[101rem] w-full">
        <div id="how-it-works" class="relative text-black flex flex-col pt-24 items-center justify-center">
          <h1 class="mb-9 md:mb-24 px-5 lg:px-52 text-center font-heading text-4xl md:text-6xl">
            {{ $t('from-waemu.section-3.caption.left') }} {{ countryName }}  {{ $t('from-waemu.section-3.caption.right') }}
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
                    <div class="inline-flex flex-col mt-6" v-html="$t('home.section5.how-it-works.step-1.text')"></div>
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
                <div class="inline-flex flex-col mt-6" v-html="$t('home.section5.how-it-works.step-2.text')"></div>

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
                  <p class="mt-7">{{ $t("home.section5.how-it-works.step-3.one") }}</p>
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
      <div class="2xl:max-w-[80rem] w-full">
        <div class="md:flex gap-10">
          <div class="mb-8 w-full md:mb-0 md:w-2/4">
            <div class="mt-0">
              <div class="mb-8 font-heading md:text-left">
                <h1 class="max-w-[47rem] text-[32px] md:text-5xl" style="line-height: 3.4rem !important">
                  {{  $t('from-waemu.section-4.caption') }}
                </h1>
              </div>
              <p
                class="md:text-left"
                v-html="$t('home.section1.left.center.l3')"
              ></p>
            </div>
            <div class="mt-16 hidden text-center md:block md:text-left">
              <a @click.stop="scrollIntoView" href="#top" class="bg-black mb-6 text-white px-6 py-4 rounded-[10px]">
                {{ $t('send-btn') }}
              </a>
              <div class="flex justify-between mt-10 md:max-w-[18rem]">
                <a>
                  <img
                    class="md:h-12 h-4"
                    src="~/assets/images/appleStore.svg"
                  />
                </a>
                <a>
                  <img class="md:h-12" src="~/assets/images/playStore.svg" />
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
            <a @click.stop="scrollIntoView" href="#top" class="bg-black mb-6 text-white px-6 py-4 rounded-[10px]">
              {{ $t('send-btn') }}
            </a>
            <div class="flex justify-start gap-2 mt-10">
              <a href="#">
                <img class="h-12" src="~/assets/images/appleStore.svg" />
              </a>
              <a href="#">
                <img class="h-12" src="~/assets/images/playStore.svg" />
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

  <section class="mb-10 px-4 md:px-12 md:py-32">
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

// console.log(useRoute().query)
</script>

<style lang="scss" scoped></style>
<template>
  <main class="">
    <section class="md:h-[calc(100vsdh-140px)] mt-8 mb-16">
      <div class="items-end md:flex h-full">
        <div class="mb-8 w-full md:mb-0 md:w-2/4">
          <span class="flex md:inline-block">
            <NuxtLink
              :to="localePath('/join-us')"
              class="flex cursor-pointer items-center bg-[#F5F5F5] px-4 py-3 shadow transition-transform duration-700 hover:scale-105 rounded-[50px] md:px-4 md:py-3"
            >
              <span class="text-sm font-bold text-purple lg:text-lg">{{
                $t("home.section1.left.top.left")
              }}</span>
              <span class="mx-1 text-[12px] text-black md:ml-4">{{
                $t("home.section1.left.top.right")
              }}</span>
              <img
                class="h-3 md:ml-3"
                src="~/assets/images/arrow-right.svg"
                alt=""
              />
            </NuxtLink>
          </span>
          <div class="mt-12">
            <div class="mb-8 font-heading md:text-left">
              <h1 class="max-w-[47rem] text-[32px] leading-tight md:text-5xl">
                {{ $t("home.section1.left.center.l1") }}
                <span class="block">{{
                  $t("home.section1.left.center.l2")
                }}</span>
              </h1>
            </div>
            <p
              class="text-left"
              v-html="$t('home.section1.left.center.l3')"
            ></p>
          </div>
          <div class="mt-16 md:block text-left">
            <NuxtLink
              :to="localePath('/exchange/send-money-from-canada')"
              class="bg-black mb-6 text-white px-6 py-4 rounded-[10px]"
            >
              Send money now
            </NuxtLink>
            <div class="flex md:justify-between mt-10 md:max-w-[18rem]">
              <a href="#">
                <img
                  class="h-12 mr-2 md:mr-0"
                  src="~/assets/images/appleStore.svg"
                />
              </a>
              <a href="#">
                <img class="h-12" src="~/assets/images/playStore.svg" />
              </a>
            </div>
            <!--  <GlobalMore> {{ $t("home.section1.left.bottom") }} </GlobalMore>-->
          </div>
        </div>
        <div class="flex items-center justify-center md:w-2/4">
          <img
            class="people w-full 4xl:mr-0 md:mr-[calc(-50vw+98%)]"
            src="~/assets/images/people-hexago.webp"
          />
        </div>
        <!--        <div class="mt-16 md:hidden text-left">-->
        <!--          <NuxtLink-->
        <!--            to="/exchange/send-money-from-canada"-->
        <!--            class="bg-black mb-6 text-white px-6 py-4 rounded-[10px]"-->
        <!--          >-->
        <!--            Send money now-->
        <!--          </NuxtLink>-->
        <!--          <div class="flex justify-start gap-5 mt-10">-->
        <!--            <a href="#">-->
        <!--              <img class="h-12" src="~/assets/images/appleStore.svg" />-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--              <img class="h-12" src="~/assets/images/playStore.svg" />-->
        <!--            </a>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </section>
    <section class="countries py-12 md:py-32">
      <div class="md:flex w-full py-4">
        <div class="md:w-1/2 md:block hidden">
          <div class="flags max-w-xl flex flex-wrap">
            <CountryComponent
              v-for="(country, cIndex) in countries"
              :key="cIndex"
              :country="country"
            />
          </div>
        </div>
        <div class="md:w-1/2 mb-6 md:mb-0">
          <h1 class="mb-4 font-heading text-4xl md:text-6xl">
            {{ $t("home.section2.countries") }}
          </h1>
          <p class="mb-12 text-left" v-html="$t('home.section2.text')"></p>
          <NuxtLink
            :to="localePath('/exchange/send-money-from-canada')"
            class="bg-black mb-20 text-white px-6 py-4 rounded-[10px]"
          >
            Send money now
          </NuxtLink>
        </div>
        <div class="md:hidden w-full flex justify-start">
          <div class="flags w-full max-w-sm flex flex-wrap items-center mt-12">
            <CountryComponent
              class="shrink-0"
              v-for="(country, cIndex) in countries"
              :key="cIndex"
              :country="country"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 unlock md:py-36">
      <div
        class="bg-[#BEBAFC] rounded-[30px] flex justify-center border px-6 py-8 lg:px-16 lg:py-36"
        :style="{ backgroundImage: `url(${qrBg})` }"
      >
        <div class="max-w-[90rem] w-full md:space-y-0 space-y-8 md:flex">
          <div class="md:w-1/2 text-white flex flex-col justify-between">
            <div>
              <h1 class="font-heading drop-shadow-lg text-4xl mb-6 md:text-5xl">
                Unlock the World with <br class="hidden md:block" />XOF: Your
                Passport to Seamless Cross-Border Transfers.
              </h1>
              <p class="drop-shadow-lg mb-8 md:mb-0">
                From local to global in real time, Maraboo Magic: Discover 3x
                <br />
                Savings on international money Transfers to or from WAEMU
                countries!
              </p>
            </div>
            <div class="inline-flex">
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
          <div class="md:w-1/2">
            <Calculator class="md:ml-auto" />
          </div>
        </div>
      </div>
    </section>
    <section class="connecting py-12 md:py-32">
      <div class="md:flex">
        <div class="mb-4 hidden md:mb-0 md:mr-12 md:flex md:w-1/2">
          <div>
            <img
              class="h-[31rem]"
              src="~/assets/images/connecting.svg"
              alt=""
            />
          </div>
        </div>
        <div class="mb-8 md:mb-0 md:w-1/2">
          <div class="flex h-full flex-col justify-center px-4">
            <h1
              class="text-justify font-heading text-4xl leading-none mb-4 md:mb-4 md:text-left md:text-5xl"
            >
              {{ $t("home.section3.super-charge") }}
            </h1>
            <p
              class="text-justify leading-relaxed md:mb-8"
              v-html="$t('home.section3.text')"
            ></p>
          </div>
          <div class="lg:-mt-32 px-4">
            &#x2022; {{ $t("home.section3.text-2") }}.
          </div>
        </div>
        <div
          class="mb-8 flex justify-center md:mb-0 md:mr-12 md:hidden md:w-2/5"
        >
          <div>
            <img class="ml-3 h-" src="~/assets/images/connecting.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="think py-12 md:py-32">
      <div class="md:flex items-center">
        <div class="w-full md:w-3/5">
          <div class="flex h-full flex-col px-4 md:px-0 text-left">
            <h1
              class="mb-4 font-heading text-4xl md:mb-16 md:text-6xl"
              v-html="$t('home.section4.convert-currency')"
            ></h1>
            <div
              class="md mb-8 text-left text leading-relaxed md:w-[30rem]"
              v-html="$t('home.section4.text')"
            ></div>
          </div>
        </div>
        <div class="mr-12 md:mr-0 flex md:w-2/5">
          <div>
            <img class="ml-3" src="~/assets/images/think.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="fast pb-28">
      <div class="w-full justify-center rounded-t-xl bg-white pt-10">
        <div class="flex flex-col items-center justify-center text-center">
          <h1 class="mb-7 font-heading text-4xl md:text-6xl">
            {{ $t("home.section5.we-fast") }}
          </h1>
          <p class="text leading-relaxed">
            {{ $t("home.section5.text") }}
            <br />
            {{ $t("home.section5.text-2") }}
          </p>
          <div class="my-20 w-full xl:w-4/5">
            <div class="flex flex-col items-center justify-between sm:flex-row">
              <div
                class="mb-10 sm:mb-0 bg-[#F5F5F5] px-5 border lg:px-10 rounded-xl lg:w-[30%] sm:w-[32%] w-[60%] py-8 inline-flex items-center md:mb-0"
              >
                <div class="flex items-center w-full">
                  <img
                    class="h-16 mr-4"
                    src="~/assets/images/cash.svg"
                    alt=""
                  />
                  <span class="text-lg"> {{ $t("home.section5.cash") }}</span>
                </div>
              </div>
              <div
                class="mb-10 sm:mb-0 bg-[#F5F5F5] px-5 border lg:px-10 rounded-xl lg:w-[30%] sm:w-[32%] w-[60%] py-8 inline-flex items-center md:mb-0"
              >
                <div class="flex items-center w-full">
                  <img
                    class="h-16 mr-4"
                    src="~/assets/images/mobile-money.svg"
                    alt=""
                  />
                  <span class="text-lg">
                    {{ $t("home.section5.mobile-money") }}</span
                  >
                </div>
              </div>
              <div
                class="bg-[#F5F5F5] px-5 border lg:px-10 sm: rounded-xl lg:w-[30%] sm:w-[32%] w-[60%] py-8 inline-flex items-center md:mb-0"
              >
                <div class="flex items-center w-full">
                  <img
                    class="h-16 mr-4"
                    src="~/assets/images/bank.svg"
                    alt=""
                  />
                  <span class="text-lg"> {{ $t("home.section5.bank") }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative bg-[url('/assets/images/angle.svg')] bg-[#F5F5F5] rounded-[20px] border-red-700 mt-24 pb-12"
        >
          <div
            class="hands absolute bottom-0 left-0 flex h-[30rem] w-full justify-center"
          >
            <img
              class="hidden md:block"
              src="~/assets/images/image.png"
              alt=""
            />
          </div>
          <div
            id="how-it-works"
            class="relative text-black flex flex-col pt-24 rounded-20px]"
          >
            <h1 class="mb-7 text-center font-heading text-4xl md:text-6xl">
              {{ $t("home.section5.how-it-works.name") }}
            </h1>
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2">
                <div class="flex flex-col text-white items-center md:block">
                  <div class="mb-8 md:ml-[10rem] md:mb-24 lg:ml-[5rem]">
                    <div
                      class="inline-block bg-black w-80 rounded-lg px-6 py-4"
                    >
                      <h1 class="mb-4 text-lg font-bold text-[#F67335]">
                        {{ $t("home.section5.how-it-works.step-1.name") }}
                      </h1>
                      <p class="mb-4">
                        {{ $t("home.section5.how-it-works.step-1.text") }}
                      </p>
                    </div>
                  </div>
                  <div class="mb-8 md:ml-16">
                    <div
                      class="inline-block w-80 rounded-lg bg-black px-6 py-4 md:pr-10"
                    >
                      <h1 class="mb-4 text-lg font-bold text-[#F67335]">
                        {{ $t("home.section5.how-it-works.step-2.name") }}
                      </h1>
                      <div class="inline-flex flex-col">
                        <span>&#x2022; Enter recipients details</span>
                        <span>&#x2022; Review Transaction details</span>
                        <span
                          >&#x2022; Pay in any currency that we support (XOF or
                          CAD)</span
                        >
                      </div>
                      <!--                      <p-->
                      <!--                        v-html="$t('home.section5.how-it-works.step-2.text')"-->
                      <!--                      ></p>-->
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="flex justify-center">
                  <div
                    class="inline-block rounded-lg bg-black text-white md:ml-[5.5rem] px-6 py-4"
                  >
                    <h1 class="mb-4 text-lg font-bold text-[#F67335]">
                      {{ $t("home.section5.how-it-works.step-3.name") }}
                    </h1>
                    <p class="mb-3">Your recipient receives money:</p>
                    <div>
                      <div class="mb-5">
                        <div class="inline-flex items-center">
                          <h1 class="m-0">
                            {{
                              $t(
                                "home.section5.how-it-works.step-3.xof-in.name"
                              )
                            }}:
                          </h1>
                          <div class="inline-flex w-3/5 items-center">
                            <div>
                              <img
                                class="ml-3 h-4"
                                src="~/assets/images/benin.svg"
                                alt=""
                              />
                            </div>
                            <div>
                              <img
                                class="ml-3 h-4"
                                src="~/assets/images/burkinafaso.svg"
                                alt=""
                              />
                            </div>
                            <div>
                              <img
                                class="ml-3 h-4"
                                src="~/assets/images/cotedivoire.svg"
                                alt=""
                              />
                            </div>
                            <div>
                              <img
                                class="ml-3 h-4"
                                src="~/assets/images/mali.svg"
                                alt=""
                              />
                            </div>
                            <div>
                              <img
                                class="ml-3 h-4"
                                src="~/assets/images/togo.svg"
                                alt=""
                              />
                            </div>
                            <div>
                              <img
                                class="ml-3 h-4"
                                src="~/assets/images/niger.svg"
                                alt=""
                              />
                            </div>
                            <div>
                              <img
                                class="ml-3 h-4"
                                src="~/assets/images/guineabissau.svg"
                                alt=""
                              />
                            </div>

                            <div>
                              <img
                                class="ml-3 h-4"
                                src="~/assets/images/senegal.svg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div class="block">
                          <div class="ml-2 mt-2 inline-flex flex-col">
                            <span
                              >&#x2022;
                              {{
                                $t(
                                  "home.section5.how-it-works.step-3.xof-in.bank-transfer"
                                )
                              }}</span
                            >
                            <span
                              >&#x2022;
                              {{
                                $t(
                                  "home.section5.how-it-works.step-3.xof-in.instant"
                                )
                              }}</span
                            >
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="inline-flex items-center">
                          <h1 class="m-0">
                            {{
                              $t(
                                "home.section5.how-it-works.step-3.cad-in.name"
                              )
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
                        <div class="block">
                          <div class="ml-2 mt-2 inline-flex flex-col">
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
                        class="mt-3 mb-3"
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
    </section>
    <section class="data-privacy pb-28 md:py-32">
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
    <section class="faq mb-8">
      <div class="flex flex-col items-center">
        <h1
          class="mb-8 text-center font-heading text-4xl leading-snug md:text-6xl"
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
    </section>
  </main>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import CountryComponent from "~/components/CountryComponent.vue";
const { t } = useI18n();

import qrBg from "assets/images/unlock-bg.svg";

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
  },
  {
    name: "Burkina Faso",
    flag: "burkinafaso",
  },
  {
    name: "Cote d'voire",
    flag: "cotedivoire",
  },
  {
    name: "mali",
    flag: "mali",
  },
  {
    name: "togo",
    flag: "togo",
  },
  {
    name: "niger",
    flag: "niger",
  },
  {
    name: "Guinea Bissau",
    flag: "guineabissau",
  },
  {
    name: "senegal",
    flag: "senegal",
  },
  {
    name: "canada",
    flag: "canada",
  },
]);
</script>

<style lang="scss">
.flags {
  span {
    margin-right: 15px;
    margin-bottom: 40px;
  }
}

// .people {
// }
</style>

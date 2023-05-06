<template>
  <main class="container md:mx-auto px-4">
    <section class="md:mt-[7rem] mt-[3rem] pb-12 md:pb-32">
      <div class="md:flex items-center">
        <div class="w-full mb-8 md:mb-0 md:w-2/4">
          <div class="flex md:inline-block">
            <NuxtLink
              to="/join-us"
              class="px-4 shadow py-3 md:px-4 md:py-3 hover:scale-105 transition-transform duration-700 bg-white rounded md:rounded-[10px] cursor-pointer flex items-center"
            >
              <span class="font-bold text-purple lg:text-lg text-sm">{{
                $t("home.section1.left.top.left")
              }}</span>
              <span class="mx-1 md:ml-4 text-sm text-black">{{
                $t("home.section1.left.top.right")
              }}</span>
              <img
                class="md:ml-3 h-3"
                src="~/assets/images/arrow-right.svg"
                alt=""
              />
            </NuxtLink>
          </div>
          <div class="mt-20">
            <div
              class="font-heading mb-8 text-center md:text-left text-4xl md:text-5xl leading-snug"
            >
              <h1 class="max-w-[47rem]">
                {{ $t("home.section1.left.center.l1") }}
                <span
                  class="text-purple block underline underline-offset-[13px]"
                  >{{ $t("home.section1.left.center.l2") }}</span
                >
              </h1>
            </div>
            <p class="text-xl" v-html="$t('home.section1.left.center.l3')"></p>
          </div>
          <div class="mt-16 hidden md:block text-center md:text-left">
            <GlobalMore> {{ $t("home.section1.left.bottom") }} </GlobalMore>
          </div>
        </div>
        <div class="w-full flex items-center justify-center md:w-2/4">
          <Calculator class="md:ml-auto" />
        </div>
        <div class="mt-16 md:hidden text-center md:text-left">
          <GlobalMore> {{ $t("home.section1.left.bottom") }} </GlobalMore>
        </div>
      </div>
    </section>
    <section class="countries py-12 md:py-32">
      <div class="text-center">
        <h1 class="font-heading text-4xl md:text-6xl mb-4">
          {{ $t("home.section2.countries") }}
        </h1>
        <p class="text-xl" v-html="$t('home.section2.text')"></p>
        <div class="items-center flex justify-center">
          <div
            class="flags flex justify-between w-full md:w-3/5 md:justify-center mt-12 items-center"
          >
            <span>
              <img
                class="md:ml-3 h-8 md:h-12"
                src="~/assets/images/benin.svg"
                alt=""
              />
            </span>
            <span>
              <img
                class="md:ml-3 h-8 md:h-12"
                src="~/assets/images/burkinafaso.svg"
                alt=""
              />
            </span>
            <span>
              <img
                class="md:ml-3 h-8 md:h-12"
                src="~/assets/images/cotedivoire.svg"
                alt=""
              />
            </span>
            <span>
              <img
                class="md:ml-3 h-8 md:h-12"
                src="~/assets/images/mali.svg"
                alt=""
              />
            </span>
            <span>
              <img
                class="md:ml-3 h-8 md:h-12"
                src="~/assets/images/togo.svg"
                alt=""
              />
            </span>
            <span>
              <img
                class="md:ml-3 h-8 md:h-12"
                src="~/assets/images/niger.svg"
                alt=""
              />
            </span>
            <span>
              <img
                class="md:ml-3 h-8 md:h-12"
                src="~/assets/images/g-bissau.svg"
                alt=""
              />
            </span>

            <span>
              <img
                class="md:ml-3 h-8 md:h-12"
                src="~/assets/images/senegal.svg"
                alt=""
              />
            </span>
            <span class="mr-2">
              <img
                class="md:ml-3 h-8 md:h-12"
                src="~/assets/images/canada.svg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="countries py-12 md:py-32">
      <div class="md:flex">
        <div
          class="md:w-2/5 hidden mb-8 md:mb-0 md:flex justify-center md:mr-12"
        >
          <div>
            <img class="ml-3" src="~/assets/images/xxx.svg" alt="" />
          </div>
        </div>
        <div class="md:w-3/5 mb-8 md:mb-0">
          <div class="flex flex-col justify-center px-4 h-full">
            <h1
              class="font-heading md:text-left text-justify text-4xl md:text-6xl leading-none mb-8 md:mb-16"
            >
              {{ $t("home.section3.super-charge") }}
            </h1>
            <p
              class="text-xl md:mb-8 text-justify leading-relaxed"
              v-html="$t('home.section3.text')"
            ></p>
            <div class="text-xl">
              &#x2022; {{ $t("home.section3.text-2") }}.
            </div>
          </div>
        </div>
        <div
          class="md:w-2/5 md:hidden mb-8 md:mb-0 flex justify-center md:mr-12"
        >
          <div>
            <img class="ml-3" src="~/assets/images/xxx.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="countries py-12 md:py-32">
      <div class="md:flex">
        <div class="w-full md:w-3/5">
          <div class="flex text-left flex-col jusstify-center px-4 h-full">
            <h1
              class="font-heading text-4xl md:text-6xl leading-none mb-4 md:mb-16"
              v-html="$t('home.section4.convert-currency')"
            ></h1>
            <div
              class="md text-xl md:w-[30rem] text-left mb-8 leading-relaxed"
              v-html="$t('home.section4.text')"
            ></div>
          </div>
        </div>
        <div class="md:w-2/5 flex mr-12">
          <div>
            <img class="ml-3 h-96s" src="~/assets/images/convert.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="countries pb-28 md:py-32">
      <div class="w-full justify-center bg-white rounded-t-xl bg-white pt-28">
        <div class="flex flex-col items-center text-center justify-center">
          <h1 class="font-heading text-4xl md:text-6xl mb-7">
            {{ $t("home.section5.we-fast") }}
          </h1>
          <p class="leading-relaxed text-xl">
            {{ $t("home.section5.text") }}
            <br />
            {{ $t("home.section5.text-2") }}
          </p>
          <div class="w-full md:w-3/5 my-20">
            <div class="flex flex-col md:flex-row items-center justify-around">
              <div class="inline-flex mb-24 md:mb-0 flex-col items-center">
                <img
                  class="mb-4 h-16 ml-0.5"
                  src="~/assets/images/cash.svg"
                  alt=""
                />
                <span class="text-lg"> {{ $t("home.section5.cash") }}</span>
              </div>
              <div class="inline-flex mb-24 md:mb-0 flex-col items-center">
                <img
                  class="mb-4 h-16 ml-0.5"
                  src="~/assets/images/mobile-money.svg"
                  alt=""
                />
                <span class="text-lg">
                  {{ $t("home.section5.mobile-money") }}</span
                >
              </div>
              <div class="inline-flex flex-col items-center">
                <img
                  class="mb-4 h-16 ml-0.5"
                  src="~/assets/images/bank.svg"
                  alt=""
                />
                <span id="how-it-works" class="text-lg class">
                  {{ $t("home.section5.bank") }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-[url('/assets/images/pattern.svg')] relative rounded-b-xl pt-24 pb-12"
        >
          <div
            class="hands h-[30rem] absolute bottom-0 left-0 flex justify-center w-full"
          >
            <img class="" src="~/assets/images/image.png" alt="" />
          </div>
          <div id="how-it-works" class="flex relative flex-col">
            <h1
              class="font-heading text-center text-4xl md:text-6xl mb-7 text-white"
            >
              {{ $t("home.section5.how-it-works.name") }}
            </h1>
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2">
                <div class="md:block flex flex-col items-center">
                  <div class="md:ml-[10rem] lg:ml-[5rem] mb-8 md:mb-24">
                    <div
                      class="bg-white w-80 inline-block rounded-lg px-6 py-4"
                    >
                      <h1 class="font-bold text-purple text-lg mb-4">
                        {{ $t("home.section5.how-it-works.step-1.name") }}
                      </h1>
                      <p class="mb-4">
                        {{ $t("home.section5.how-it-works.step-1.text") }}
                      </p>
                    </div>
                  </div>
                  <div class="md:ml-16 mb-8">
                    <div
                      class="bg-white w-80 inline-block rounded-lg px-6 md:pr-10 py-4"
                    >
                      <h1 class="font-bold text-purple text-lg mb-4">
                        {{ $t("home.section5.how-it-works.step-2.name") }}
                      </h1>
                      <p
                        v-html="$t('home.section5.how-it-works.step-2.text')"
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="flex justify-center">
                  <div class="bg-white inline-block rounded-lg px-6 py-4">
                    <h1 class="font-bold text-lg text-purple mb-4">
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
                          <div class="flags inline-flex w-3/5 items-center">
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
                                src="~/assets/images/g-bissau.svg"
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
                          <div class="inline-flex ml-2 mt-2 flex-col">
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
                                class="ml-3 h-4"
                                src="~/assets/images/canada.svg"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div class="block">
                          <div class="inline-flex ml-2 mt-2 flex-col">
                            <span
                              >&#x2022;
                              {{
                                $t(
                                  "home.section5.how-it-works.step-3.cad-in.interface"
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
      <div class="flex flex-col items-center">
        <h1
          class="font-heading text-4xl md:text-6xl mb-8 text-center leading-snug"
          v-html="$t('home.section6.how-we.name')"
        ></h1>
        <p class="text-center text-lg max-w-[45rem] leading-normal">
          {{ $t("home.section6.how-we.text") }}
        </p>
      </div>
    </section>
    <section class="data-privacy mb-16 md:py-32">
      <div class="flex flex-col items-center">
        <h1
          class="font-heading text-4xl md:text-6xl mb-8 text-center leading-snug"
        >
          Frequently Asked Questions
        </h1>

        <div class="w-full">
          <a
            href="https://www.un.org/sustainabledevelopment/inequality/"
            target="_blank"
          ></a>
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
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

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

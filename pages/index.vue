<template>
  <main class="container mx-auto px-2">
    <section class="md:mt-[7rem] mt-[3rem]">
      <div class="md:flex">
        <div class="w-full md:w-2/4">
          <div class="inline-block">
            <div
              class="px-4 shadow py-3 md:px-5 md:py-5 hover:scale-105 transition-transform duration-700 bg-white rounded md:rounded-[10px] cursor-pointer flex items-center"
            >
              <span class="font-extrabold text-purple md:text-xl"
                >Coming soon!</span
              >
              <span class="mx-2 md:ml-4 text-black"
                >Get notified when we launch!</span
              >
              <img
                class="md:ml-3 h-4"
                src="~/assets/images/arrow-right.svg"
                alt=""
              />
            </div>
          </div>
          <div class="mt-20">
            <div
              class="font-heading text-center md:text-left text-4xl md:text-6xl leading-tight"
            >
              <h1 class="max-w-[47rem]">
                Fast transfers in & out of WAEMU countries at the
                <span class="text-purple underline underline-offset-[13px]"
                  >real exchange rate!</span
                >
              </h1>
            </div>
          </div>
          <div class="mt-16 text-center md:text-left">
            <GlobalMore> Learn more on Maraboo </GlobalMore>
          </div>
        </div>
        <div class="w-full md:w-2/4">
          <Calculator class="ml-auto" />
        </div>
      </div>
    </section>
    <section class="countries py-12 2xl:py-24">
      <div class="text-center">
        <h1 class="font-heading text-4xl md:text-6xl mb-4">
          Countries we support
        </h1>
        <p class="text-xl">
          We support 9 markets and 2 currencies to make it easier for you to
          transact <br />
          globally. We’ll be adding more markets and currencies shortly to
          better serve your needs.
        </p>
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
    <section class="countries py-12 2xl:py-24">
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
              Supercharge your cross-border purchasing power!
            </h1>
            <p class="md text-xl md:mb-8 text-justify leading-relaxed">
              Starting with Canada, you can now send up to $9,900 every 24
              <br />
              hours in & out of WAEMU countries at the real exchange rate.
              <br />
            </p>
            <div class="text-xl">
              &#x2022; Additional countries will be added shortly after launch,
              keep an eye out.
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
    <section class="countries py-12 2xl:py-24">
      <div class="md:flex">
        <div class="w-full md:w-3/5">
          <div class="flex text-left flex-col jusstify-center px-4 h-full">
            <h1
              class="font-heading text-4xl md:text-6xl leading-none mb-4 md:mb-16"
            >
              Convert one currency <br class="hidden md:block" />
              to another
            </h1>
            <div class="md text-xl md:w-[30rem] text-left mb-8 leading-relaxed">
              Easily transfer funds within and outside WAEMU countries in three
              simple steps. Our services are up to 3 times more affordable than
              the top-performing <br />
              alternatives.
            </div>
          </div>
        </div>
        <div class="md:w-2/5 flex mr-12">
          <div>
            <img class="ml-3 h-96s" src="~/assets/images/convert.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section id="how-it-works" class="countries pb-28 md:py-24">
      <div class="w-full justify-center bg-white rounded-t-xl bg-white pt-28">
        <div class="flex flex-col items-center text-center justify-center">
          <h1 class="font-heading text-4xl md:text-6xl mb-7">
            We are really fast!
          </h1>
          <p class="leading-relaxed text-xl">
            Our transfers are processed from start to finish within minutes.
            <br />
            Our disbursement options are:
          </p>
          <div class="w-full md:w-3/5 my-20">
            <div class="flex items-center justify-around">
              <div class="inline-flex flex-col items-center">
                <img
                  class="mb-4 h-16 ml-0.5"
                  src="~/assets/images/cash.svg"
                  alt=""
                />
                <span class="text-lg">Cash</span>
              </div>
              <div class="inline-flex flex-col items-center">
                <img
                  class="mb-4 h-16 ml-0.5"
                  src="~/assets/images/mobile-money.svg"
                  alt=""
                />
                <span class="text-lg">Mobile Money</span>
              </div>
              <div class="inline-flex flex-col items-center">
                <img
                  class="mb-4 h-16 ml-0.5"
                  src="~/assets/images/bank.svg"
                  alt=""
                />
                <span class="text-lg">Bank</span>
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
            <img class="" src="~/assets/images/hands.svg" alt="" />
          </div>
          <div class="flex relative flex-col">
            <h1
              class="font-heading text-center text-4xl md:text-6xl mb-7 text-white"
            >
              How it works
            </h1>
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2">
                <div class="md:block flex flex-col items-center">
                  <div class="md:ml-[10rem] mb-8 md:mb-24">
                    <div
                      class="bg-white w-80 inline-block rounded-lg px-6 py-4"
                    >
                      <h1 class="font-bold text-purple text-lg mb-4">Step 1</h1>
                      <p class="mb-4">
                        Create an account, tell us how much you want to send,
                        and where to.
                      </p>
                    </div>
                  </div>
                  <div class="md:ml-16 mb-8">
                    <div
                      class="bg-white w-80 inline-block rounded-lg px-6 md:pr-10 py-4"
                    >
                      <h1 class="font-bold text-purple text-lg mb-4">Step 2</h1>
                      <p>
                        Pay for your transaction in your <br />
                        currency of choice; i.e. XOF, CAD or <br />
                        another currency we support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="flex justify-center">
                  <div class="bg-white inline-block rounded-lg px-6 py-4">
                    <h1 class="font-bold text-lg text-purple mb-4">Step 3</h1>
                    <p class="mb-3">Your recipient receives money:</p>
                    <div>
                      <div class="mb-5">
                        <div class="inline-flex items-center">
                          <h1 class="m-0">XOF in:</h1>
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
                            <span>&#x2022; Bank transfer (up to 48h)</span>
                            <span>&#x2022; Instant cash pick up</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="inline-flex items-center">
                          <h1 class="m-0">CAD in:</h1>
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
                            <span>&#x2022; interface e-transfer(instant)</span>
                          </div>
                        </div>
                      </div>
                      <p class="mt-3 mb-3">
                        We'll be adding more countries soon, <br />
                        stay tuned.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="data-privacy pb-28 2xl:py-24">
      <div class="flex flex-col items-center">
        <h1
          class="font-heading text-4xl md:text-6xl mb-8 text-center leading-snug"
        >
          How we protect your <br />
          personal data
        </h1>
        <p class="text-center text-lg max-w-[45rem] leading-normal">
          Your funds and private information are protected by the most secure
          technology and according to local and global regulations
        </p>
      </div>
    </section>
    <section class="data-privacy mb-16">
      <div class="flex flex-col items-center">
        <h1
          class="font-heading text-4xl md:text-6xl mb-8 text-center leading-snug"
        >
          Frequently Asked Questions
        </h1>
        <div class="w-full">
          <GlobalAccordionList>
            <GlobalAccordionItem
              :item-id="x"
              v-for="x in 5"
            ></GlobalAccordionItem>
          </GlobalAccordionList>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import Calculator from "~/components/calculator/Calculator";

const { locale } = useI18n();
</script>

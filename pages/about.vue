<template>
  <main class="text-black">
    <section>
      <div class="container flex justify-center">
        <div class="space-y-20">
          <div class="text-center">
            <h1 class="display-2">
              We're
              <span class="text-multi-color"
                >building borderless <br />
                financial systems</span
              >
              to <br />
              connect West-Africans <br />
              across the globe
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
            <div class="">
              <img alt="" class="w-full" src="~/assets/images/space.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Card
        class="bg-coloured flex justify-center px-5 py-20 text-white md:py-52"
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
              Did you know that a 10% reduction in transaction fees for sending
              money in & out of WAEMU countrycan boost the revenue of regional
              households by up to 16%?
            </p>
          </div>
        </div>
      </Card>
    </section>
    <section class="remit">
      <div class="container">
        <Card class="flex justify-center px-5 py-36 text-white md:px-0">
          <div
            class="content-wrap relative flex w-full justify-between space-x-12 text-black"
          >
            <div class="remittances space-y-12">
              <h1 class="display-3 text-center md:text-left">
                We believe that remittances should be fast, low cost, and have a
                major social impact.
              </h1>
              <div>
                <p class="text-2 text-center md:text-left">
                  Two birds one stone - we apply the real exchange rate on all
                  of our transactions to save you money and make the UN social
                  development goal by significantly reducing remittance cost by
                  2030 a reality today!
                </p>
              </div>
            </div>
            <div class="kids z-10 hidden shrink-0 md:block">
              <img
                class="g-first relative -top-[18rem]"
                alt=""
                src="~/assets/images/kids.png"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
    <section class="relative bg-[url('/assets/images/bdox.svg')] bg-cover">
      <img
        class="rounded-[20px] md:rounded"
        src="~/assets/images/box.png"
        alt=""
      />
      <div class="container absolute bottom-0">
        <div class="content-wrap">
          <div class="display-2 fast w-full text-left font-medium text-white">
            We believe that <br />
            <span class="text-multi-color">remittances</span> should <br />
            be <span class="text-multi-color">fast, low cost</span>.
          </div>
        </div>
      </div>
    </section>
    <section class="hidden">
      <div class="container flex-col space-y-28">
        <div class="text-center">
          <h1 class="display-1">Meet the Team</h1>
        </div>
        <div class="grid w-full grid-cols-3 gap-10">
          <div v-for="x in 9" class="member flex justify-center">
            <div class="flex w-fit flex-col overflow-hidden">
              <div
                class="mb-6 w-40 overflow-hidden rounded-b-full rounded-t-full bg-accent-200"
              >
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
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.to(".remittances", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
      trigger: ".remit",
      scrub: 5,
    },
  });

  $gsap.to(".kids", {
    duration: 0.2,
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: ".remit",
      scrub: 3,
    },
  });
});

const { t } = useI18n();
</script>

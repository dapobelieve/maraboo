<template>
  <main class="text-black mx-4 lg:mssx-4">
    <section>
      <div class="container flex justify-center">
        <div class="lg:space-y-52 space-y-16">
          <div class="text-center">
            <h1 class="display-1" v-html="$t('about-us.name')"></h1>
          </div>
          <div class="w-full justify-around flex-col lg:flex-row items-center flex">
              <p class="text-2 md:max-w-xs leading-9 mb-8 lg:mb-0 md:mb-0 md:text-left">{{ $t("about-us.caption") }}</p>
              <img alt="" class="h-96" src="~/assets/images/space.png" />
          </div>
        </div>
      </div>
    </section>
    <section style="padding: 0">
      <Card class="bg-coloured flex items-center px-5 py-20 text-white md:py-52">
       <div class="container">
         <h1 class="display-1 text-center">{{ $t("about-us.our") }}</h1>
       </div>
      </Card>
    </section>
    <section class="remit">
      <div class="lg:container">
        <Card class="flex justify-center px-5 lg:py-36 text-white md:px-0">
          <div class="content-wrap relative flex w-full justify-between space-x-12 text-black">
            <div class="remittances space-y-12">
              <h1 class="display-3 text-center md:text-left">{{ $t("about-us.section2.caption") }}</h1>
              <div>
                <p class="text-2 text-center md:text-left">{{ $t("about-us.section2.text") }}</p>
              </div>
            </div>
            <div class="kids z-10 hidden shrink-0 md:block">
              <img class="g-first relative -top-[18rem]" alt src="~/assets/images/kids.png" />
            </div>
          </div>
        </Card>
      </div>
    </section>

    <section class="relative bg-[url('/assets/images/bdox.svg')] bg-cover" style="padding: 0">
      <img class="rounded-[20px] md:rounded" src="~/assets/images/box.png" alt />
      <div class="container absolute  bottom-0 left-0 px-4">
        <div class="content-wrap absolute lg:relative bottom-0 p-8 lgg:p-0 ">
          <div
            class="display-2 w-full text-left font-medium text-white lg:mb-20"
            v-html="$t('about-us.section2.we-believe')"
          ></div>
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
              <div class="mb-6 w-40 overflow-hidden rounded-b-full rounded-t-full bg-accent-200">
                <img class="object-contain" src="~/assets/images/user.png" alt />
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

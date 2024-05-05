<template>
  <main>
    <section class="relative overflow-hidden">
      <div class="container !pt-24 !pb-0 space-y-12">
        <div class="flex flex-col items-center">
          <div class="mb-8 space-y-20 text-center">
            <h1 class="display-1 font-medium">
              {{ $t("home.section1.intl") }}
              <span class="text-multi-color">
                {{
                $t("home.section1.umoa")
                }}
              </span>
            </h1>
            <Button class="btn-xl capitalize" animate @click="openQr">
              {{
              $t("home.section1.send")
              }}
            </Button>
          </div>
          <div class="globe">
            <img class="w-full" src="~/assets/images/globe-intro.svg" alt />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-coloured rounded">
      <div class="container">
        <div class="content-wrap">
          <div class="w-full items-start justify-between lg:flex">
            <div class="two-way space-y-10 mb-20 text-white lg:mb-0">
              <h1 class="display-2 mb-5 lg:mb-10 text-left">{{ $t("home.section2.left.one") }}</h1>
              <p class="text-left" v-html="$t('home.section2.left.two')"></p>
            </div>
            <div class="calculator flex justify-center lg:justify-end">
              <Calculator class="lg:ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="content-wrap">
          <div class="text-center">
            <h1 class="display-2">
              {{ $t("home.section3.left.one") }}
              <span
                class="text-multi-color"
                v-html="$t('home.section3.left.two')"
              ></span>
              , {{ $t("home.section3.left.three") }}
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="content-wrap">
          <div class="h-full w-full items-start space-y-16 lg:space-y-0 justify-between lg:flex">
            <div class="superpower space-y-10 sub-content">
              <h1 class="display-2" v-html="$t('home.section4.left.super-power')"></h1>
              <p class="text-2 max-w-sm" v-html="$t('home.section4.left.offer')"></p>
            </div>
            <div class="superpower-steps flex flex-col items-center space-y-10 max-w-md">
              <div class="rounded bg-gradient-to-r from-active to-accent-400 p-0.5 w-full">
                <div class="space-y-4 rounded bg-[#E3E1EB] p-10">
                  <h1 class="display-3">{{ $t("home.section4.right.cash.top") }}</h1>
                  <p class="text-1">{{ $t("home.section4.right.cash.bottom") }}</p>
                </div>
              </div>
              <div class="rounded bg-gradient-to-r from-active to-accent-400 p-0.5 w-full">
                <div class="space-y-4 rounded bg-[#E3E1EB] p-10">
                  <h1 class="display-3">{{ $t("home.section4.right.money.top") }}</h1>
                  <p class="text-1">{{ $t("home.section4.right.money.bottom") }}</p>
                </div>
              </div>
              <div class="rounded bg-gradient-to-r from-active to-accent-400 p-0.5 w-full">
                <div class="space-y-4 rounded bg-[#E3E1EB] p-10">
                  <h1 class="display-3">{{ $t("home.section4.right.bank.top") }}</h1>
                  <p class="text-1">{{ $t("home.section4.right.bank.bottom") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="content-wrap">
          <div class="flex flex-col space-y-20 w-full">
            <div class="why-us flex w-full flex-col lg:flex-row lg:items-end justify-between">
              <div class="flex flex-col space-y-8 sub-content">
                <h1 class="display-2" v-html="$t('home.section5.what')"></h1>
                <p class="lg:max-w-md" v-html="$t('home.section5.about')"></p>
              </div>
              <div class="lg:flex hidden">
                <img alt src="~/assets/images/choose.svg" />
              </div>
            </div>
            <div class="w-full gap-10 grid grid-cols-1 lg:grid-cols-3">
              <div class="space-y-5">
                <div class="leading-[1.25]" v-html="$t('home.section5.one.top')"></div>
                <div v-html="$t('home.section5.one.bottom')"></div>
              </div>
              <div class="space-y-5">
                <div class="leading-[1.25]" v-html="$t('home.section5.two.top')"></div>
                <div v-html="$t('home.section5.two.bottom')"></div>
              </div>
              <div class="space-y-5">
                <div class="leading-[1.25]" v-html="$t('home.section5.three.top')"></div>
                <div v-html="$t('home.section5.three.bottom')"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="x-section lg:h-screen">
      <div class="container">
        <div class="content-wrap">
          <div class="w-full items-start justify-between lg:flex">
            <div class="flex-col relative flex w-full">
              <div class="mb-8 space-y-10">
                <h1 class="display-2 text-start">{{ $t("home.section6.how.name") }}</h1>
                <p class="text-2" v-html="$t('home.section6.how.text')"></p>
              </div>
              <div class="flex lg:space-x-8">
                <div class="bar">
                  <div class="bg-slate h-1/2 w-[3px]"></div>
                </div>
                <!--  desktop-->
                <div class="steps hidden bg-amber-600 max-w-sm flex-col lg:flex">
                  <div
                    v-for="(step, index) in steps"
                    class="step-item mb-8 flex items-start space-x-8 px-4 pb-10 opacity-100 md:transslate-y-full lg:absolute"
                  >
                    <div>
                      <small class="font-bold text-primary">
                        {{
                        step.step
                        }}
                      </small>
                      <h1 class="display-3 mb-4">{{ step.title }}</h1>
                      <p class="text-2 leading-9">{{ step.body }}</p>
                    </div>
                  </div>
                </div>
                <!--  ipad n mobile -->
                <div class="flex max-w-sm flex-col lg:hidden">
                  <div
                    v-for="(step, index) in steps"
                    class="mb-8 flex flex-col items-start px-4 pb-10 opacity-100"
                  >
                    <div>
                      <img :src="images[index].src" alt />
                    </div>
                    <div class="space-y-4">
                      <small class="font-bold text-primary">
                        {{
                        step.step
                        }}
                      </small>
                      <h1 class="display-3 mb-4">{{ step.title }}</h1>
                      <p class="text-2 leading-9">{{ step.body }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="width: 750px" class="relative hidden px-8 w-full lg:block">
              <div class="img-step-wrapper w-full top-[46px]">
                <div v-for="(image, imgIndex) in images" :key="imgIndex" class="img-step blue">
                  <img :src="image.src" alt class />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="extend-brand">
      <div class="container">
        <div class="content-wrap !flex-col w-full space-y-32">
          <div class="justify-between items-end space-y-10 sub-content">
            <h1 class="display-2 max-w-full lg:max-w-[512px]" v-html="$t('home.section7')"></h1>
            <div class="hidden lg:block">
              <img src="~/assets/images/globe-stand.svg" alt />
            </div>
          </div>
          <div class="flags w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            <CountryComponent
              v-for="(country, cIndex) in countries"
              :key="cIndex"
              :country="country"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="testimonials !px-0 md:!px-6">
      <div class="container">
        <div class="grid grid-row-2 gap-6 lg:gap-10 w-full">
          <div class="grid grid-col-2 gap-6 lg:gap-10 lg:flex">
            <div class="gap-6 lg:gap-10 flex lg:w-3/5">
              <Card class="flex flex-col bg-accent-100 space-y-10">
                <div class="flex grow items-center justify-center">
                  <img src="~/assets/images/secure.png" alt="phone-logo" />
                </div>
                <div class="space-y-6 sub-content">
                  <h1 class="display-2">{{ $t("home.section8.secure.title") }}</h1>
                  <p class="text-2" v-html="$t('home.section8.secure.body')"></p>
                </div>
              </Card>
            </div>
            <div class="grid lg:grid-rows-2 gap-6 lg:gap-10 lg:w-2/5">
              <Card
                class="bg-accent-100 space-y-6 !justify-end flex flex-col row-span-2"
                direction="down"
              >
                <div class="sub-content space-y-6">
                  <h1 class="display-2">{{ $t("home.section8.from.title") }}</h1>
                  <p class="text-2" v-html="$t('home.section8.from.body')"></p>
                </div>
              </Card>
              <Card class="bg-accent-100 !justify-end flex flex-col" direction="up">
                <div class="sub-content space-y-6">
                  <p class="text-2">{{ $t("home.section8.did") }}</p>
                </div>
              </Card>
            </div>
          </div>

          <Card class="flex justify-center bg-neutral text-white !py-24">
            <div class="content-wrap">
              <div class="flex w-full justify-between lg:flex-row flex-col items-center space-y-14">
                <div
                  class="flex-col lg:flex lg:max-w-[416px] justify-between lg:h-full sub-content"
                >
                  <h1 class="display-2" v-html="$t('home.section9.head')"></h1>
                  <div class="relative space-x-10 lg:flex hidden">
                    <Button
                      class="btn-xl btn-circle shrink-0 rounded-full border border-surface-300"
                    >
                      <Icon
                        icon="chevron-left"
                        size="4rem"
                        class="ml-1 font-extrabold text-surface-400"
                      ></Icon>
                    </Button>
                    <Button
                      class="btn-xl btn-circle shrink-0 rounded-full border border-surface-300"
                    >
                      <Icon
                        icon="chevron-right"
                        size="4rem"
                        class="ml-2 font-extrabold text-surface-400"
                      ></Icon>
                    </Button>
                  </div>
                </div>
                <div class="flex flex-col items-center space-y-10 lg:max-w-[512px] sub-content">
                  <div class="space-y-5 inline-flex flex-col items-center">
                    <img src="~/assets/images/customer.png" alt />
                    <div class="text-2">John Doe . Canada</div>
                  </div>
                  <p class="text-center text-3">
                    “I love that Maraboo gives me the real exchange rate. It
                    means more of my money goes to my loved ones in Togo.”
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <div class="flex flex-col items-center space-y-12 lg:space-y-16">
          <h1
            class="font-heading display-2 text-center leading-snug lg:text-6xl"
          >{{ $t("home.faq-header") }}</h1>
          <div class="flex w-full">
            <GlobalAccordionList class="w-full gap-10 lg:flex">
              <div class="lg:w-1/2">
                <GlobalAccordionItem
                  :item-id="id + 1"
                  :item="q"
                  v-for="(q, id) in faqs.slice(0, half)"
                ></GlobalAccordionItem>
              </div>
              <div class="lg:w-1/2">
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
        <Card class="bg-accent-200 p-8 lg:p-10">
          <div class="items-center lg:flex">
            <div class="mb-4 flex space-x-4 lg:space-x-8">
              <img src="~/assets/images/woman.svg" class="block" alt="woman-logo" />
              <div class="pt-4">
                <h1 class="display-3 mb-4">{{ $t("home.section10.head") }}</h1>
                <p class="text-2">{{ $t("home.section10.body") }}</p>
              </div>
            </div>
            <button
              class="ml-auto w-full self-center rounded-full border-2 border-black px-6 py-2 font-medium lg:w-fit"
            >{{ $t("home.section10.chat") }}</button>
          </div>
        </Card>
      </div>
    </section>
  </main>
</template>
<script setup>
import { useModal } from "vue-final-modal";
import Scrollbar from "smooth-scrollbar";
const { $gsap } = useNuxtApp();
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reactive, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import CountryComponent from "~/components/CountryComponent.vue";
import qr from "~/components/modals/qr.vue";
import cookie from "~/components/modals/cookie.vue";

const { t } = useI18n();

const show = ref(false);

const steps = reactive([
  {
    step: t("home.section6.how.steps[0].step"),
    title: t("home.section6.how.steps[0].title"),
    body: t("home.section6.how.steps[0].body"),
  },
  {
    step: t("home.section6.how.steps[1].step"),
    title: t("home.section6.how.steps[1].title"),
    body: t("home.section6.how.steps[1].body"),
  },
  {
    step: t("home.section6.how.steps[2].step"),
    title: t("home.section6.how.steps[2].title"),
    body: t("home.section6.how.steps[2].body"),
  },
]);

const images = [
  {
    src: "https://res.cloudinary.com/believe/image/upload/v1713280088/maraboo/old/prev/1.png",
  },
  {
    src: "https://res.cloudinary.com/believe/image/upload/v1713280088/maraboo/old/prev/2.png",
  },
  {
    src: "https://res.cloudinary.com/believe/image/upload/v1713280088/maraboo/old/prev/3.png",
  },
];

const { open: openQr, close } = useModal({
  component: qr,
  attrs: {
    title: "Hello World!",
    onConfirm() {
      close();
    },
  },
});

const { open: openCookie, close: closeCookie } = useModal({
  component: cookie,
  attrs: {
    onClose() {
      closeCookie();
    },
  },
});

function cookieSettings() {
  // openCookie();
  // let cookie = JSON.parse(localStorage.getItem("cookie"));
  // if (!cookie.decline || !cookie["accept-all"]) {
  // }
}

function handleResize() {
  if (window.innerWidth < 1000) {
    $gsap.globalTimeline.clear();

    const _steps = document.querySelectorAll(".step-item");
    _steps.forEach((step) => {
      step.style.opacity = "1";
    });
    ScrollTrigger.disable();
  } else {
    ScrollTrigger.enable();
  }

  // ScrollTrigger.refresh();
}

onMounted(() => {
  initScrollTriggers();
  handleResize();
});

onMounted(() => {
  window.addEventListener("resize", handleResize);
  setTimeout(() => {
    cookieSettings();
  }, 5000);
});

function initScrollTriggers() {
  let bodyScrollBar = Scrollbar.init(document.body, {
    damping: 0.1,
    delegateTo: document,
  });

  ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
  });
  bodyScrollBar.addListener(ScrollTrigger.update);

  $gsap.set(".img-step", {
    zIndex: (i, target, targets) => {
      console.log(target)
      return targets.length - i
    },
    marginBottom: "72px"
  });
  let images = $gsap.utils.toArray(".img-step");
  images.forEach((image, i) => {
    let tl = $gsap.timeline({
      scrollTrigger: {
        trigger: ".x-section",
        scroller: ".scroller",
        start: () => "top -" + window.innerHeight * (i + 0.5),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
      },
    });

    tl.to(image, { height: 0, marginBottom: 0 });
  });

  $gsap.set(".step-item", {
    zIndex: (i, target, targets) => targets.length - i,
  });

  let steps = $gsap.utils.toArray(".step-item");

  steps.forEach((step, i) => {
    var tl = $gsap.timeline({
      scrollTrigger: {
        trigger: ".x-section",
        scroller: ".scroller",
        start: () => (i === 0 ? "top top" : "top -" + window.innerHeight * i),
        end: () =>
          i === steps.length - 1 ? "bottom bottom" : "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
      },
    });
    if (i === steps.length - 1) {
      tl.to(step, { duration: 0.13, opacity: 1, y: "50%" }); // Keep the last element visible
    } else {
      tl.to(step, { duration: 0.13, opacity: 1, y: "50%" }).to(
        step,
        { duration: 0.13, opacity: 0, y: "0%" },
        0.66
      );
    }
  });

  ScrollTrigger.create({
    trigger: ".x-section",
    scroller: ".scroller",
    start: () => "top top",
    end: () => {
      return "+=" + images.length * window.innerHeight;
    },
    scrub: true,
    pin: true,
    invalidateOnRefresh: true,
  });

  ScrollTrigger.create({
    trigger: ".calculator",
    scroller: ".scroller",
    start: () => {
      const twowaytHeight = document.querySelector(".two-way").offsetHeight;
      return `top ${twowaytHeight}px`;
    },
    end: () => {
      const target = document.querySelector(".calculator").offsetHeight;
      const twowaytHeight = document.querySelector(".two-way").offsetHeight;
      const newHeight = target - twowaytHeight;
      return `bottom ${newHeight + 85}px`;
    },
    scrub: true,
    // markers: true,
    pin: ".two-way",
    invalidateOnRefresh: true,
  });

  ScrollTrigger.create({
    trigger: ".superpower-steps",
    scroller: ".scroller",
    start: () => {
      const twowaytHeight = document.querySelector(".superpower").offsetHeight;
      return `top ${twowaytHeight}px`;
    },
    end: () => {
      const target = document.querySelector(".superpower-steps").offsetHeight;
      const twowaytHeight = document.querySelector(".superpower").offsetHeight;
      const newHeight = target - twowaytHeight;
      return `bottom ${newHeight + 170}px`;
    },
    scrub: true,
    // markers: true,
    pin: ".superpower",
    invalidateOnRefresh: true,
  });
}

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

const half = computed(() => Math.ceil(faqs.length / 2));
</script>
<style lang="scss" scoped>
.text-wrap {
  position: relative;
  overflow: hidden;
  width: 450px;
  height: 80vh;
}

.step-item {
  left: 0%;
  top: 176%;
  right: 0%;
  //bottom: 0%;
  z-index: 10;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateY(100%);
  opacity: 0;
}

.img-step-wrapper {
  height: 534px;
}
</style>

<template>
  <main>
    <section class="relative  overflow-hidden">
      <div class="container lg:!pt-24 !pb-0 space-y-12">
        <div class="flex flex-col items-center">
          <div class="space-y-10 lg:space-y-20 text-center">
            <h1 class="display-1 font-medium">
              {{ $t("home.section1.intl") }}
              <span class="text-multi-color">
                {{
                $t("home.section1.umoa")
                }}
              </span>
            </h1>
            <Button class="btn-xl capitalize" animate @click="openQr()">
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
    <section class="bg-coloured  rounded">
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
    <section class="">
      <div class="container">
        <div class="content-wrap">
          <div class="text-center lg:!pt-24">
            <h1 class="display-2 !font-normal">
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
    <section class="">
      <div class="container">
        <div class="content-wrap">
          <div class="h-full w-full items-start space-y-16 lg:space-y-0 justify-between lg:flex">
            <div class="superpower space-y-10 sub-content">
              <h1 class="display-2" v-html="$t('home.section4.left.super-power')"></h1>
              <p class="text-2 max-w-sm" v-html="$t('home.section4.left.offer')"></p>
            </div>
            <div class="superpower-steps flex flex-col items-center space-y-10 max-w-md">
              <div class="rounded bg-gradient-to-r from-active to-accent-400 p-0.5 w-full">
                <div class="space-y-4 rounded bg-[#E3E1EB] p-6 lg:p-10">
                  <h1 class="display-3">{{ $t("home.section4.right.cash.top") }}</h1>
                  <p class="text-2">{{ $t("home.section4.right.cash.bottom") }}</p>
                </div>
              </div>
              <div class="rounded bg-gradient-to-r from-active to-accent-400 p-0.5 w-full">
                <div class="space-y-4 rounded bg-[#E3E1EB] p-6 lg:p-10">
                  <h1 class="display-3">{{ $t("home.section4.right.money.top") }}</h1>
                  <p class="text-2">{{ $t("home.section4.right.money.bottom") }}</p>
                </div>
              </div>
              <div class="rounded bg-gradient-to-r from-active to-accent-400 p-0.5 w-full">
                <div class="space-y-4 rounded bg-[#E3E1EB] p-6 lg:p-10">
                  <h1 class="display-3">{{ $t("home.section4.right.bank.top") }}</h1>
                  <p class="text-2">{{ $t("home.section4.right.bank.bottom") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <WhyChoose class="" />
    <section class="x-section lg:h-screen">
      <div class="container">
        <div class="content-wrap ">
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
              <div class="img-step-wrapper w-full">
                <div v-for="(image, imgIndex) in images" :key="imgIndex" class="img-step">
                  <img :src="image.src" alt class="md:h-[700px] " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Extend class="" />
    <Faq class="" />
   <Testimonial />
    <Chat />
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
    start: () => "top -50px",
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

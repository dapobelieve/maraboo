<template>
  <section class="x-section lg:h-screen">
    <div class="container">
      <div class="content-wrap relative">
        <div class="w-full items-start justify-between lg:flex">
          <div class="flex-col overflsow-hidden relative flex h-full  w-full">
            <div class="space-y-10">
              <h1 class="display-2 text-start">{{ $t("home.section6.how.name") }}</h1>
              <p class="text-2" v-html="$t('home.section6.how.text')"></p>
            </div>
            <div class="flex grow items-end lg:space-x-8">
              <!--                <div class="bar">-->
              <!--                  <div class="bg-slate h-1/2 w-[3px]"></div>-->
              <!--                </div>-->
              <!--  desktop-->
              <div class="w-full hidden flex-col max-w-smd text-wrap lg:flex">
                <div
                    v-for="(step, index) in steps"
                    class="step-item mb-8 w-full flex items-start psx-4"
                >
                  <div class="">
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
          <div class="relative hidden w-full lg:block">
            <div class="w-full flex justify-center">
              <div class="img-step-wrapper ">
                <div v-for="(image, imgIndex) in images" :key="imgIndex" class="img-step">
                  <img :src="image.src" alt class="md:h-[700px] " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import {onMounted, reactive} from "vue";
import Scrollbar from "smooth-scrollbar";
import {ScrollTrigger} from "gsap/ScrollTrigger";
const { $gsap } = useNuxtApp();
import {useI18n} from "vue-i18n";
const { t } = useI18n();

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
    src: "https://res.cloudinary.com/believe/image/upload/v1715419809/maraboo/1.png",
  },
  {
    src: "https://res.cloudinary.com/believe/image/upload/v1715419808/maraboo/2.png",
  },
  {
    src: "https://res.cloudinary.com/believe/image/upload/v1715500736/maraboo/3.png",
  },
];

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
        // markers: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
      },
    });

    tl.to(image, { height: 0, marginBottom: 0 });
  });

  $gsap.set(".step-item", {
    zIndex: (i, target, targets) => targets.length - i,
    // top: (i) => i === 1 ? '-176px' : '0'
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
        // markers: true,
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

  const breakpoint = 1440

  const start = window.innerWidth <= breakpoint ? 'top -75px' : 'top top'


  ScrollTrigger.create({
    trigger: ".x-section",
    scroller: ".scroller",
    start: start,
    end: () => {
      return "+=" + images.length * (window.innerHeight - 200);
    },
    scrub: true,
    pin: true,
    // markers: true,
    invalidateOnRefresh: true,
    anticipatePin: true
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
      return `bottom ${newHeight + 90}px`;
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

function handleResize() {
  if (window.innerWidth < 1000) {
    // $gsap.globalTimeline.clear();

    const _steps = document.querySelectorAll(".step-item");
    _steps.forEach((step) => {
      step.style.opacity = "1";
    });
    ScrollTrigger.disable();
  } else {
    ScrollTrigger.enable();
  }

}

onMounted(() => {
  initScrollTriggers();
  handleResize();
});

onMounted(() => {
  window.addEventListener("resize", handleResize);
  setTimeout(() => {
    // cookieSettings();
  }, 5000);
});

</script>

<style lang="scss" scoped>
.text-wrap {
  //position: relative;
  overflow: hidden;
  width: 450px;
  //height: 80vh;
  background-color: red;
}

.step-item {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
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

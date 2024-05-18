<template>
  <section ref="xsection" class="x-section">
    <div class="container">
      <div class="content-wrap relative">
        <div class="w-full space-y-32">
          <div class=" flex">
            <div class="space-y-10 mb-9 lg:mb-0 flex flex-col items-center w-full">
              <h1 class="display-2 text-start">{{ $t("home.section6.how.name") }}</h1>
              <p class="text-2" v-html="$t('home.section6.how.text')"></p>
            </div>
          </div>
         <div class="space-y-12">
           <div class="bg-white p-12 justify-between h-[700px] overflow-clip rounded flex">
             <div class="max-w-lg w-full">
               <span class="font-bold text-primary">{{  steps[0].step }}</span>
               <h1 class="display-3">{{  steps[0].title }}</h1>
               <p class="text-2">{{
                   steps[0].body
                 }}</p>
             </div>
             <div class="w-full flex  justify-center">
               <div class="h-[25rem] w-[350px]">
                 <img class="drop-shadow-2xl relative top-[84px]]" alt="" :src="images[0].src">
               </div>
             </div>
           </div>
           <div class="flex lg:flex-row flex-col lg:space-x-12 space-x-0 lg:space-y-0 space-y-6 justify-between itesms-start ">
             <div class="bg-white w-full space-y-10 p-8 px-6 lg:px-12 h-[700px] overflow-clip rounded flex flex-col">
               <div class="max-w-md">
                 <span class="font-bold text-primary">{{  steps[1].step }}</span>
                 <h1 class="display-3">{{  steps[1].title }}</h1>
                 <p class="text-2">{{
                     steps[1].body
                   }}</p>
               </div>
               <div class="w-full flex justify-center">
                 <div class="h-[25rem] w-[300px]">
                   <img class="drop-shadow-2xl shadow-2xl" alt="" :src="images[1].src">
                 </div>
               </div>
             </div>
             <div class="bg-white w-full space-y-10 p-8 px-6 lg:px-12 h-[700px] overflow-clip rounded flex flex-col">
               <div class="max-w-md">
                 <span class="font-bold text-primary">{{  steps[2].step }}</span>
                 <h1 class="display-3">{{ steps[2].title }}</h1>
                 <p class="text-2">{{
                     steps[2].body
                   }}</p>
               </div>
               <div class="w-full flex justify-center">
                 <div class="h-[25rem]">
                   <img class="drop-shadow-2xl shadow-2xl" alt="" :src="images[2].src">
                 </div>
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

import {onMounted, reactive, ref} from "vue";
import Scrollbar from "smooth-scrollbar";
import {ScrollTrigger} from "gsap/ScrollTrigger";
const { $gsap } = useNuxtApp();
import {useI18n} from "vue-i18n";
const { t } = useI18n();

const imgStep = ref(null)
const stepItem = ref(null)
const xsection = ref(null)
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

  $gsap.set(imgStep.value, {
    zIndex: (i, target, targets) => {
      return targets.length - i
    },
    marginBottom: "72px"
  });
  let images = $gsap.utils.toArray(imgStep.value);

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

  $gsap.set(stepItem.value, {
    zIndex: (i, target, targets) => targets.length - i,
    // top: (i) => i === 1 ? '-176px' : '0'
  });

  let steps = $gsap.utils.toArray(stepItem.value);

  steps.forEach((step, i) => {
    var tl = $gsap.timeline({
      scrollTrigger: {
        trigger: xsection.value,
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

  const breakpoint = 1440

  const start = window.innerWidth <= breakpoint ? 'top -75px' : 'top top'


  ScrollTrigger.create({
    trigger: xsection.value,
    scroller: ".scroller",
    start: start,
    end: () => {
      return "+=" + images.length * (window.innerHeight - 200);
    },
    scrub: true,
    pin: true,
    invalidateOnRefresh: true,
    anticipatePin: true
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
    stepItems.forEach((step) => {
      step.value.style.opacity = "1";
    });
    ScrollTrigger.disable();
  } else {
    ScrollTrigger.enable();
  }

}

const isMobile = () => window.innerWidth <= 1000;

onMounted(() => {
  // if (isMobile()) {
  //   return;
  // }
  //
  // initScrollTriggers();
});

// onMounted(() => {
//   window.addEventListener("resize", handleResize);
//   setTimeout(() => {
//     // cookieSettings();
//   }, 5000);
// });

</script>

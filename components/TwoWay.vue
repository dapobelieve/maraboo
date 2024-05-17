<template>
  <section class="bg-coloured  rounded">
    <div class="container">
      <div ref="content" class="content-wrap">
        <div class="w-full items-start justify-between lg:flex">
          <div ref="twoWay" class="two-way space-y-10 mb-20 text-white lg:mb-0">
            <h1 class="display-2 mb-5 lg:mb-10 text-left">{{ $t("home.section2.left.one") }}</h1>
            <p class="text-left" v-html="$t('home.section2.left.two')"></p>
          </div>
          <div ref="calculator" class="calculator flex justify-center lg:justify-end">
            <Calculator class="lg:ml-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref} from "vue"
import {useI18n} from "vue-i18n";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

const { t } = useI18n();

const twoWay = ref(null)
const content = ref(null)
const calculator = ref(null)

const isMobile = () => window.innerWidth <= 1000;


onMounted(() => {
  // if (isMobile()) {
  //   return; // Do nothing if it's a mobile device
  // }

  // let bodyScrollBar = Scrollbar.init(document.body, {
  //   damping: 0.1,
  //   delegateTo: document,
  // });

  // ScrollTrigger.scrollerProxy(".scroller", {
  //   scrollTop(value) {
  //     if (arguments.length) {
  //       bodyScrollBar.scrollTop = value;
  //     }
  //     return bodyScrollBar.scrollTop;
  //   },
  // });
  //
  // ScrollTrigger.create({
  //   trigger: calculator.value,
  //   scroller: '.scroller',
  //   start: "top center-=100",
  //   end: "bottom center+=100",
  //   scrub: true,
  //   markers: true,
  //   pin: twoWay.value,
  //   invalidateOnRefresh: true,
  // });
  //
  // ScrollTrigger.addEventListener('refreshInit', () => bodyScrollBar.update());
  // ScrollTrigger.refresh();
})
</script>

<template>
  <main class="h-full text-black">
    <section class="relative overflow-hidden">
      <div class="container space-y-12" style="padding-bottom: 0">
        <div class="flex flex-col items-center space-y-0">
          <div class="mb-8 space-y-20 text-center">
            <h1 class="display-1 font-medium">
              {{ $t("home.section1.intl") }}
              <span class="text-multi-color">{{
                $t("home.section1.umoa")
              }}</span>
            </h1>
            <Button class="h-[5rem] capitalize" animate @click="openQr">{{
              $t("home.section1.send")
            }}</Button>
          </div>
          <div class="globe">
            <img class="w-full" src="~/assets/images/the-globe.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-coloured rounded-[40px]">
      <div class="container">
        <div class="content-wrap">
          <div class="w-full items-start justify-between md:flex">
            <div class="two-way text-white">
              <h1 class="display-2 mb-4 text-center font-medium md:text-left">
                {{ $t("home.section2.left.one") }}
              </h1>
              <p
                class="text-center md:text-left"
                v-html="$t('home.section2.left.two')"
              ></p>
            </div>
            <div class="">
              <Calculator class="md:ml-auto" />
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
              ></span
              >, {{ $t("home.section3.left.three") }}
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="content-wrap">
          <div class="h-full w-full items-start justify-between md:flex">
            <div class="superpower h-full space-y-8 text-center md:text-left">
              <h1
                class="display-2 font-medium capitalize"
                v-html="$t('home.section4.left.super-power')"
              ></h1>
              <p class="text-2" v-html="$t('home.section4.left.offer')"></p>
            </div>
            <div class="flex flex-col space-y-10">
              <div
                class="rounded-[40px] bg-gradient-to-r from-active to-accent-400 p-0.5"
              >
                <div
                  class="max-w-md space-y-7 rounded-[39px] bg-[#E3E1EB] p-14"
                >
                  <h1 class="display-3 font-medium capitalize">
                    {{ $t("home.section4.right.cash.top") }}
                  </h1>
                  <p class="text-2">
                    {{ $t("home.section4.right.cash.bottom") }}
                  </p>
                </div>
              </div>
              <div
                class="rounded-[40px] bg-gradient-to-r from-active to-accent-400 p-0.5"
              >
                <div
                  class="max-w-md space-y-7 rounded-[40px] bg-[#E3E1EB] p-14"
                >
                  <h1 class="display-3 font-medium">
                    {{ $t("home.section4.right.money.top") }}
                  </h1>
                  <p class="text-2">
                    {{ $t("home.section4.right.money.bottom") }}
                  </p>
                </div>
              </div>
              <div
                class="rounded-[40px] bg-gradient-to-r from-active to-accent-400 p-0.5"
              >
                <div
                  class="max-w-md space-y-7 rounded-[40px] bg-[#E3E1EB] p-14"
                >
                  <h1 class="display-3 font-medium">
                    {{ $t("home.section4.right.bank.top") }}
                  </h1>
                  <p class="text-2">
                    {{ $t("home.section4.right.bank.bottom") }}
                  </p>
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
          <div class="w-full space-y-20">
            <div
              class="why-us relative flex w-full flex-col md:flex-row md:text-justify"
            >
              <div
                class="flex flex-col items-center space-y-10 md:block md:flex-row md:items-start"
              >
                <h1
                  class="display-2 font-medium"
                  v-html="$t('home.section5.what')"
                ></h1>
                <p
                  class="max-w-sm text-center leading-6 md:text-left"
                  v-html="$t('home.section5.about')"
                ></p>
              </div>
              <div class="-top-44 ml-auto flex justify-center">
                <img alt="" src="~/assets/images/choose.svg" />
              </div>
            </div>
            <div class="w-full justify-between md:flex">
              <div class="mb-12 md:mb-0">
                <div v-html="$t('home.section5.one.top')"></div>
                <div v-html="$t('home.section5.one.bottom')"></div>
              </div>
              <div class="mb-12 md:mb-0">
                <div v-html="$t('home.section5.two.top')"></div>
                <div v-html="$t('home.section5.two.bottom')"></div>
              </div>
              <div class="mb-12 md:mb-0">
                <div v-html="$t('home.section5.three.top')"></div>
                <div v-html="$t('home.section5.three.bottom')"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="x-section">
      <div class="container">
        <div class="content-wrap">
          <div class="flex w-full items-start justify-between">
            <div class="relative flex w-full flex-col py-2">
              <div class="mb-8 space-y-4">
                <h1 class="display-2 mb-4 text-start">
                  {{ $t("home.section6.how.name") }}
                </h1>
                <p class="text-2" v-html="$t('home.section6.how.text')"></p>
              </div>
              <div class="flex space-x-8">
                <div class="bar">
                  <div class="bg-slate0 h-1/2 w-[3px]"></div>
                </div>
                <div class="steps flex max-w-sm flex-col border">
                  <div
                    v-for="(step, index) in steps"
                    class="step-item mb-8 flex items-start space-x-8 px-4 pb-10"
                  >
                    <div>
                      <small class="font-bold text-primary">{{
                        step.step
                      }}</small>
                      <h1 class="display-3 mb-4">{{ step.title }}</h1>
                      <p class="text-2 leading-9">
                        {{ step.body }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="width: 750px" class="img-step-wrapper">
              <div
                v-for="(image, imgIndex) in images"
                :key="imgIndex"
                class="img-step blue"
              >
                <img :src="image.src" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="extend-brand">
      <div class="container">
        <div class="content-wrap">
          <div class="w-full space-y-28">
            <div class="relative flex items-center justify-between">
              <h1 class="display-2 capitalize">
                Where We <br />
                Extend our <br />support
              </h1>
              <div class="absolute -top-52 right-0 hidden md:block">
                <img src="~/assets/images/globe-stand.svg" alt="" />
              </div>
            </div>
            <div class="flags flex w-full flex-wrap items-center gap-y-14">
              <CountryComponent
                class="w-1/4"
                v-for="(country, cIndex) in countries"
                :key="cIndex"
                :country="country"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <div class="container">
        <div class="flex flex-col gap-10">
          <div class="gap-10 md:flex">
            <div class="mb-10 flex md:mb-0 md:w-3/5">
              <Card class="flex flex-col bg-accent-100">
                <div class="flex grow items-center justify-center">
                  <img src="~/assets/images/secure.png" alt="phone-logo" />
                </div>
                <div>
                  <h1 class="display-2 mb-12">Securing Your Data Fortress!</h1>
                  <p class="text-2">
                    Rest assured, your funds and private information are <br />
                    safeguarded by state-of-the-art security technology, <br />
                    compliant with both local and global regulations
                  </p>
                </div>
              </Card>
            </div>
            <div class="grid gap-10 md:w-2/5">
              <Card class="bg-accent-100" direction="down">
                <h1 class="display-3 mb-4">From local to global.</h1>
                <p class="text-3">
                  Seamlessly transfer up to $9,900 daily to/from WAEMU countries
                  at the Real Exchange. Your gateway to hassle-free
                  international transactions!
                </p>
              </Card>
              <Card class="bg-accent-100" direction="up">
                <p class="display-3">
                  Did you know that a 10% reduction in transaction fees for
                  sending?
                </p>
              </Card>
            </div>
          </div>
          <div class="">
            <Card
              class="display-1 flex justify-center bg-neutral text-white shadow-md"
            >
              <div class="content-wrap">
                <div class="flex w-full justify-between 2xl:max-w-7xl">
                  <div class="flex w-1/2 flex-col space-y-36">
                    <h1 class="display-2 grow-1 hidden md:block">
                      Real Talk <br />
                      from Our <br />
                      Customers
                    </h1>
                    <div
                      class="relative flex max-w-[9rem] items-center justify-between p-4"
                    >
                      <button
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 opacity-70 shadow"
                      >
                        <span class="text-xl"
                          ><img
                            class="rotate-180"
                            src="~/assets/images/tabler-icon-chevron-right.png"
                        /></span>
                      </button>

                      <button
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 opacity-70 shadow"
                      >
                        <span class="text-xl">
                          <img
                            src="~/assets/images/tabler-icon-chevron-right.png"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div class="flex w-1/2 flex-col items-center">
                    <div class="mb-8 inline-flex flex-col items-center">
                      <img
                        class="mb-4"
                        src="~/assets/images/customer.png"
                        alt=""
                      />
                      <small class="text-1">John Doe . Canada</small>
                    </div>
                    <div>
                      <p class="max-w-xs text-center text-2xl">
                        “I love that Maraboo gives me the real exchange rate. It
                        means more of my money goes to my loved ones in Togo.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <div class="flex flex-col items-center space-y-32">
          <h1
            class="font-heading display-2 text-center leading-snug md:text-6xl"
          >
            {{ $t("home.faq-header") }}
          </h1>
          <div class="flex w-full">
            <GlobalAccordionList class="w-full gap-10 md:flex">
              <div class="md:w-1/2">
                <GlobalAccordionItem
                  :item-id="id + 1"
                  :item="q"
                  v-for="(q, id) in faqs.slice(0, half)"
                ></GlobalAccordionItem>
              </div>
              <div class="md:w-1/2">
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
        <Card class="bg-accent-200 p-8 md:p-10">
          <div class="items-center md:flex">
            <div class="mb-4 flex md:space-x-8">
              <img
                src="~/assets/images/woman.svg"
                class="hidden md:block"
                alt="woman-logo"
              />
              <div>
                <h1 class="display-3 mb-4">Still have questions?</h1>
                <p class="text-2">
                  Our agents are always ready to answer your questions.
                </p>
              </div>
            </div>
            <button
              class="ml-auto self-center rounded-full border-2 border-black px-6 py-2 font-medium"
            >
              Chat With Us
            </button>
          </div>
        </Card>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.text-wrap {
  position: relative;
  overflow: hidden;
  width: 450px;
  height: 80vh;
  background-color: fuchsia;
}

.step-item {
  position: absolute;
  left: 0%;
  top: 50%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  opacity: 0;
}

.img-step-wrapper {
  position: relative;
  overflow: hidden;
  height: 78vh;
}
</style>

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
    step: "01",
    title: "Sign up",
    body:
      "Lorem ipsum dolor sit amet consectetur. Nunc pulvinar " +
      "nam purus nunc interdum lorem. Venenatis nisl " +
      "pulvinar urna facilisi eget vel fringilla",
  },
  {
    step: "02",
    title: "Download the App and Verify your Identity",
    body:
      "Lorem ipsum dolor sit amet consectetur. Nunc pulvinar " +
      "nam purus nunc interdum lorem. Venenatis nisl " +
      "pulvinar urna facilisi eget vel fringilla",
  },
  {
    step: "03",
    title: "Send Less",
    body: "Enjoy the lowest rates, send up to $9,900 every day",
  },
]);

const images = [
  {
    src: "https://res.cloudinary.com/believe/image/upload/v1713280088/maraboo/mobile-1.png",
  },
  {
    src: "https://res.cloudinary.com/believe/image/upload/v1713280088/maraboo/mobile-2.png",
  },
  {
    src: "https://res.cloudinary.com/believe/image/upload/v1713280088/maraboo/mobile-3.png",
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

onMounted(() => {
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
    zIndex: (i, target, targets) => targets.length - i,
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

    tl.to(image, { height: 0 });
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
        start: () => "top -" + window.innerHeight * i,
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        // toggleClass: "bg-blue-500",
        invalidateOnRefresh: true,
      },
    });
    tl.to(step, { duration: 0.33, opacity: 1, y: "50%" }).to(
      step,
      { duration: 0.33, opacity: 0, y: "0%" },
      0.66
    );
  });

  ScrollTrigger.create({
    trigger: ".x-section",
    scroller: ".scroller",
    start: () => "top top",
    end: () => "+=" + (images.length + 1) * window.innerHeight,
    scrub: true,
    // markers: true,
    pin: true,
    invalidateOnRefresh: true,
  });

  ScrollTrigger.create({
    trigger: ".two-way",
    scroller: ".scroller",
    start: () => "top 10%",
    end: () => "bottom",
    scrub: true,
    // markers: true,
    pin: true,
    invalidateOnRefresh: true,
  });

  ScrollTrigger.create({
    trigger: ".superpower",
    scroller: ".scroller",
    start: () => "top 10%",
    end: () => "bottom  ",
    scrub: true,
    // markers: true,
    pin: true,
    invalidateOnRefresh: true,
  });
});

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

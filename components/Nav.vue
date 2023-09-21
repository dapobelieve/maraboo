<template>
  <header
    class="sticky top-0 z-20 bg-[url('/assets/images/bg-12.svg')] pt-4 bg-cover md:pdx-8 md:py-4"
  >
    <div class="" :class="navBg">
      <nav
        class="relative my-4 flex w-full select-none justify-between px-4 font-['Open_Sans'] md:mx-8 md:py-0"
        :class="isScrolled && bgTransparent ? 'text-black' : 'text-white'"
      >
        <NuxtLink :to="localePath('/')" class="flex items-center">
          <img
            class="h-8"
            :src="
              isScrolled && bgTransparent ? '/maraboo.svg' : '/maraboo-2.svg'
            "
            alt="logo"
          />
          <h1
            class="ml-1 mt-2 font-heading text-2xl font-extrabold md:text-3xl"
          >
            Maraboo
          </h1>
        </NuxtLink>
        <div class="block md:hidden">
          <div role="button" @click.stop.exact="showMobileMenu = true">
            <svg
              data-v-1956a757=""
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="rotate-0 duration-200"
            >
              <path
                data-v-1956a757=""
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>
        <div class="hidden items-center md:flex">
          <div class="mr-12">
            <NuxtLink to="/#how-it-works">
              {{ $t("home.nav.how-it-works") }}</NuxtLink
            >
          </div>

          <div
            role="button"
            @click="company = !company"
            class="group relative inline-flex cursor-pointer items-center"
          >
            <a> {{ $t("home.nav.company.name") }} </a>
            <img
              class="mt-0.5 ml-2 h-2 group-hover:-rotate-180"
              :src="
                isScrolled && bgTransparent
                  ? '/caret-down.svg'
                  : '/caret-down-white.svg'
              "
              alt=""
            />

            <div
              role="menu"
              class="absolute top-6 -right-3 hidden w-80 rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity delay-1000 duration-200 group-hover:block group-hover:opacity-100"
            >
              <NuxtLink
                :to="localePath('/about')"
                class="flex items-center px-6 py-6 text-black hover:rounded-t-lg hover:bg-gray-50"
              >
                <img class="mr-6 h-4" src="~/assets/images/about.svg" alt="" />
                <span class="text-md font-medium">{{
                  $t("home.nav.company.about-us")
                }}</span>
              </NuxtLink>
              <div
                class="flex items-center px-6 py-6 text-black hover:bg-gray-50"
              >
                <img
                  class="mr-6 h-6"
                  src="~/assets/images/contact.svg"
                  alt=""
                />
                <a
                  @click.stop="scrollIntoView"
                  href="#contact-us"
                  class="text-md font-medium"
                  >{{ $t("home.nav.company.contact-us") }}</a
                >
              </div>
              <NuxtLink
                :to="localePath('/careers')"
                class="flex items-center px-6 py-6 text-black hover:bg-gray-50"
              >
                <img
                  class="mr-6 h-5"
                  src="~/assets/images/careers.svg"
                  alt=""
                />
                <span class="text-md font-medium">{{
                  $t("home.nav.company.careers")
                }}</span>
              </NuxtLink>
              <NuxtLink
                :to="localePath('/legal')"
                class="flex items-center px-6 py-6 text-black hover:rounded-b-lg hover:bg-gray-50"
              >
                <img class="mr-6 h-6" src="~/assets/images/legal.svg" alt="" />
                <span class="text-md font-medium">{{
                  $t("home.nav.company.legal")
                }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="hidden cursor-pointer items-center md:flex">
          <div class="group relative mr-8 inline-flex items-center">
            <img
              class="mr-0.5 h-4 w-4"
              :src="
                isScrolled && bgTransparent ? '/globe.svg' : '/globe-white.svg'
              "
              alt=""
            /><a href="#" class="uppercase" @click.stop="locale = !locale">
              {{ activeLocale }}</a
            >
            <img
              class="mt-0.5 ml-1 h-2"
              :src="
                isScrolled && bgTransparent
                  ? '/caret-down.svg'
                  : '/caret-down-white.svg'
              "
              alt=""
            />
            <div
              role="menu"
              class="absolute top-6 -right-3 hidden w-40 rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity delay-1000 duration-200 group-hover:block group-hover:opacity-100"
            >
              <div
                class="flex items-center px-4 py-3 text-black hover:bg-gray-100"
              >
                <nuxt-link
                  :to="switchLocalePath('en')"
                  class="text-md w-full font-medium"
                  >English</nuxt-link
                >
              </div>
              <div
                class="flex items-center px-4 py-3 text-black hover:bg-gray-100"
              >
                <nuxt-link
                  :to="switchLocalePath('fr')"
                  class="text-md w-full font-medium"
                  >Français</nuxt-link
                >
              </div>
            </div>
          </div>
          <NuxtLink
            :to="localePath('/join-us')"
            class="rounded-lg px-6 py-3 text-sm font-black"
            :class="
              isScrolled && bgTransparent
                ? 'bg-black text-white'
                : 'bg-white text-black'
            "
          >
            {{ $t("home.nav.wait-list") }}
          </NuxtLink>
        </div>
      </nav>
    </div>
    <div
      v-show="showMobileMenu"
      class="fixed left-0 top-0 h-full w-full bg-black md:hidden py-8 px-5"
    >
      <div class="flex h-full flex-col">
        <div
          class="after:content relative mb-20 flex py-4 after:absolute after:bottom-0 after:h-[1px] after:w-full"
        >
          <div
            @click="showMobileMenu = false"
            class="flex w-full items-center justify-between px-2"
          >
            <NuxtLink to="/" class="flex items-center">
              <img
                class="h-8 md:h-16"
                src="~/assets/images/maraboo-white.svg"
                alt=""
              />
              <h1 class="ml-1 font-heading text-2xl font-extrabold">Maraboo</h1>
            </NuxtLink>
            <div
              @click.stop="locale = !locale"
              class="relative inline-flex items-center"
            >
              <img
                class="mr-0.5 h-4 w-4"
                src="~/assets/images/globe-white.svg"
                alt=""
              /><a class="text-xs text-white">
                {{ activeLocale.toUpperCase() }}</a
              >
              <img
                class="mt-0.5 ml-1 h-2"
                src="~/assets/images/caret-down-white.svg"
                alt=""
              />
              <div
                v-show="locale"
                role="menu"
                class="absolute top-8 right-3 z-10 w-24 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <div
                  class="flex items-center rounded-xl px-4 py-3 text-black hover:bg-gray-100"
                >
                  <nuxt-link
                    :to="switchLocalePath('en')"
                    class="text-md text-black w-full font-medium"
                    >English</nuxt-link
                  >
                </div>
                <div
                  class="flex items-center rounded-xl px-4 py-3 text-black hover:bg-gray-100"
                >
                  <nuxt-link
                    :to="switchLocalePath('fr')"
                    class="text-md w-full font-medium"
                    >Français</nuxt-link
                  >
                </div>
              </div>
              <div
                role="button"
                @click.stop="showMobileMenu = false"
                class="ml-5"
              >
                <img class="h-6" src="~/assets/images/close.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 text-white">
          <NuxtLink
            @click.stop="showMobileMenu = false"
            href="/#how-it-works"
            class="text-2xl"
          >
            {{ $t("home.nav.how-it-works") }}
          </NuxtLink>
          <div
            @click="mobileCompany = !mobileCompany"
            class="mt-8 flex cursor-pointer items-center justify-between"
          >
            <div class="relative">
              <h6 class="text-2xl">
                <span> {{ $t("home.nav.company.name") }} </span>
              </h6>
              <div v-show="mobileCompany" class="absolute top-12">
                <div
                  @click="showMobileMenu = false"
                  class="ml-4 text-white flex flex-col"
                >
                  <NuxtLink class="text-white" to="about">{{
                    $t("home.nav.company.about-us")
                  }}</NuxtLink>
                  <NuxtLink
                    @click="showMobileMenu = false"
                    @click.stop="scrollIntoView"
                    href="#contact-us"
                    class="mt-4"
                    >{{ $t("home.nav.company.contact-us") }}</NuxtLink
                  >
                  <NuxtLink class="mt-4 text-white" to="careers">{{
                    $t("home.nav.company.careers")
                  }}</NuxtLink>
                  <NuxtLink class="mt-4" to="legal">{{
                    $t("home.nav.company.legal")
                  }}</NuxtLink>
                </div>
              </div>
            </div>
            <img
              :class="[mobileCompany ? 'rotate-180' : '']"
              class="h-2"
              src="~/assets/images/caret-down-white.svg"
              alt=""
            />
          </div>
        </div>
        <div class="mt-auto mb-10 flex justify-center px-8">
          <NuxtLink
            @click="showMobileMenu = false"
            :to="localePath('/join-us')"
            class="w-full rounded-xl bg-white px-12 py-3 text-center text-black"
          >
            {{ $t("home.nav.wait-list") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { reactive, computed, toRefs, watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  props: {
    bgTransparent: Boolean,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
  computed: {
    navBg() {
      return [
        "flex",
        "items-center",
        "rounded-[20px]",
        this.bgTransparent ? "bg-transparent" : "bg-black",
        this.bgTransparent ? "block mx-auto 2xl:max-w-[101rem]" : "",
        this.bgTransparent && this.isScrolled
          ? "bg-white shadow-lg text-black transition-all duration-500"
          : "bg-black",
      ];
    },
  },
  setup() {
    const { locale } = useI18n();
    const state = reactive({
      showMobileMenu: false,
      company: false,
      locale: false,
      mobileCompany: false,
      activeLocale: computed(() => locale),
    });

    watch(
      () => state.showMobileMenu,
      (newVal) => {
        if (newVal) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }
    );

    function scrollIntoView(e) {
      const { hash } = e.target;
      document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
      state.showMobileMenu = false;
    }

    return {
      ...toRefs(state),
      scrollIntoView,
    };
  },
};
</script>

<style scoped>
.scrolled {
  background-color: #fff !important;
  color: #111 !important;
}
</style>

<template>
  <header
    class="bg-[url('/assets/images/bg-2.svg')] bg-cover md:py-4 bg-white relative sticky top-0 lg:px-20 z-20 lg:px-4"
  >
    <nav
      class="font-['Open_Sans'] md:container relative md:mx-auto px-2 py-4 md:py-0 select-none flex w-full justify-between"
    >
      <NuxtLink :to="localePath('/')" class="flex items-center">
        <img class="h-8 md:h-10" src="~/assets/images/maraboo.svg" alt="" />
        <h1 class="font-heading text-2xl md:text-3xl mt-2 font-extrabold">
          Maraboo
        </h1>
      </NuxtLink>
      <div class="md:hidden block">
        <div role="button" @click.stop.exact="showMobileMenu = true">
          <svg
            data-v-1956a757=""
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="duration-200 rotate-0"
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
      <div class="md:flex hidden items-center">
        <div class="mr-12">
          <a href="#how-it-works"> {{ $t("home.nav.how-it-works") }}</a>
        </div>

        <div
          role="button"
          @click="company = !company"
          class="inline-flex group relative cursor-pointer items-center"
        >
          <a> {{ $t("home.nav.company.name") }} </a>
          <img
            class="h-2 mt-0.5 group-hover:-rotate-180 ml-2"
            src="~/assets/images/caret-down.svg"
            alt=""
          />

          <div
            role="menu"
            class="absolute hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-1000 shadow-lg w-80 top-6 rounded-lg ring-opacity-5 ring-1 bg-white ring-black -right-3"
          >
            <NuxtLink
              :to="localePath('/about')"
              class="px-6 hover:bg-gray-50 py-6 flex items-center text-black"
            >
              <img class="h-4 mr-6" src="~/assets/images/about.svg" alt="" />
              <span class="text-md font-medium">{{
                $t("home.nav.company.about-us")
              }}</span>
            </NuxtLink>
            <div
              class="px-6 py-6 hover:bg-gray-50 flex items-center text-black"
            >
              <img class="h-6 mr-6" src="~/assets/images/contact.svg" alt="" />
              <a
                @click.stop="scrollIntoView"
                href="#contact-us"
                class="text-md font-medium"
                >{{ $t("home.nav.company.contact-us") }}</a
              >
            </div>
            <NuxtLink
                :to="localePath('/careers')"
              class="px-6 py-6 hover:bg-gray-50 flex items-center text-black"
            >
              <img class="h-5 mr-6" src="~/assets/images/careers.svg" alt="" />
              <span class="text-md font-medium">{{
                $t("home.nav.company.careers")
              }}</span>
            </NuxtLink>
            <NuxtLink
                :to="localePath('/legal')"
              class="px-6 hover:bg-gray-50 py-6 flex items-center text-black"
            >
              <img class="h-6 mr-6" src="~/assets/images/legal.svg" alt="" />
              <span class="text-md font-medium">{{
                $t("home.nav.company.legal")
              }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="md:flex hidden items-center cursor-pointer">
        <div class="mr-8 group relative inline-flex items-center">
          <img
            class="h-4 w-4 mr-0.5"
            src="~/assets/images/globe.svg"
            alt=""
          /><a href="#" class="uppercase" @click.stop="locale = !locale">
            {{ activeLocale }}</a
          >
          <img
            class="h-2 mt-0.5 ml-1"
            src="~/assets/images/caret-down.svg"
            alt=""
          />
          <div
            role="menu"
            class="absolute hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-1000 shadow-lg w-40 top-6 rounded-lg ring-opacity-5 ring-1 bg-white ring-black -right-3"
          >
            <div
              class="px-4 hover:bg-gray-100 py-3 flex items-center text-black"
            >
              <nuxt-link
                :to="switchLocalePath('en')"
                class="text-md w-full font-medium"
                >English</nuxt-link
              >
            </div>
            <div
              class="px-4 py-3 hover:bg-gray-100 flex items-center text-black"
            >
              <nuxt-link
                :to="switchLocalePath('fr')"
                class="text-md w-full font-medium"
                >Français</nuxt-link
              >
            </div>
          </div>
        </div>
        <div>
          <NuxtLink
            to="/join-us"
            class="px-6 py-3 bg-black font-black text-sm text-white rounded-lg"
          >
            {{ $t("home.nav.wait-list") }}
          </NuxtLink>
        </div>
      </div>
    </nav>
    <div
      v-show="showMobileMenu"
      class="fixed bg-white left-0 top-0 h-full w-full"
    >
      <div class="flex flex-col pt-3 h-full">
        <div
          class="mb-20 py-4 after:content after:absolute relative after:w-full after:h-[1px] after:bg-gray-200 after:bottom-0 flex"
        >
          <div
            @click="showMobileMenu = false"
            class="px-2 flex justify-between items-center w-full"
          >
            <NuxtLink to="/" class="flex items-center">
              <img
                class="h-8 md:h-16"
                src="~/assets/images/maraboo.svg"
                alt=""
              />
              <h1 class="font-heading text-2xl font-extrabold ml-1">Maraboo</h1>
            </NuxtLink>
            <div class="relative inline-flex items-center">
              <img
                class="h-4 w-4 mr-0.5"
                src="~/assets/images/globe.svg"
                alt=""
              /><a class="text-xs"> EN</a>
              <img
                class="h-2 mt-0.5 ml-1"
                src="~/assets/images/caret-down.svg"
                alt=""
              />
              <div
                v-show="locale"
                role="menu"
                class="absolute shadow-lg w-24 top-9 rounded-lg ring-opacity-5 ring-1 bg-white ring-black -right-3"
              >
                <div
                  class="px-4 hover:bg-gray-100 py-3 rounded-xl flex items-center text-black"
                >
                  <a href="#" class="text-md font-medium">English</a>
                </div>
                <div
                  class="px-4 py-3 rounded-xl hover:bg-gray-100 flex items-center text-black"
                >
                  <a href="#" class="text-md font-medium">Français</a>
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
        <div class="px-4">
          <NuxtLink
            @click.stop="showMobileMenu = false"
            href="/#how-it-works"
            class="hover:text-purple text-xl"
          >
            How it works
          </NuxtLink>
          <div
            @click="mobileCompany = !mobileCompany"
            class="flex mt-8 cursor-pointer justify-between items-center"
          >
            <div class="relative">
              <h6 class="text-xl hover:text-purple">Company</h6>
              <div v-show="mobileCompany" class="absolute top-12">
                <div @click="showMobileMenu = false" class="ml-4 flex flex-col">
                  <NuxtLink class="" to="about">{{
                    $t("home.nav.company.about-us")
                  }}</NuxtLink>
                  <NuxtLink
                    @click.stop="scrollIntoView"
                    href="#contact-us"
                    class="mt-4"
                    >{{ $t("home.nav.company.contact-us") }}</NuxtLink
                  >
                  <NuxtLink class="mt-4" to="careers">{{
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
              src="~/assets/images/caret-down.svg"
              alt=""
            />
          </div>
        </div>
        <div class="mt-auto mb-10 px-8 flex justify-center">
          <NuxtLink
            @click="showMobileMenu = false"
            to="/join-us"
            class="bg-black text-white text-center px-12 py-3 w-full rounded-xl"
          >
            Join the waitlist
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { reactive, computed, toRefs } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { locale } = useI18n();
    const state = reactive({
      showMobileMenu: false,
      company: false,
      locale: false,
      mobileCompany: false,
      activeLocale: computed(() => locale),
    });
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

<style scoped></style>

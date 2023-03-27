<template>
  <div
    class="subpixel-antialiased bg-auto bg-no-repeat select-none bg-cover"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <header class="md:pt-6 pt-2 px-2 container mx-auto relative z-50">
      <nav
        class="font-['Open_Sans'] py-4 md:py-0 select-none flex w-full justify-between"
      >
        <NuxtLink to="/" class="flex items-center">
          <img class="h-8 md:h-16" src="~/assets/images/maraboo.svg" alt="" />
          <h1 class="font-heading text-2xl md:text-4xl font-extrabold">
            Maraboo
          </h1>
        </NuxtLink>
        <div class="md:flex hidden items-center">
          <div class="mr-12"><a> How it works</a></div>
          <div
            role="button"
            @click="company = !company"
            class="inline-flex relative cursor-pointer items-center"
          >
            <a> Company </a>
            <img
              class="h-2 mt-0.5 ml-2"
              :class="[company ? '' : '-rotate-180']"
              src="~/assets/images/caret-down.svg"
              alt=""
            />
            <div
              v-show="company"
              role="menu"
              class="absolute shadow-lg w-56 top-9 rounded-lg ring-opacity-5 ring-1 bg-white ring-black -right-3"
            >
              <div
                class="px-4 hover:bg-gray-100 py-3 rounded-xl flex items-center text-black"
              >
                <img class="h-4 mr-6" src="~/assets/images/about.svg" alt="" />
                <NuxtLink to="/about" class="text-md font-medium"
                  >About us</NuxtLink
                >
              </div>
              <div
                class="px-4 py-3 rounded-xl hover:bg-gray-100 flex items-center text-black"
              >
                <img
                  class="h-6 mr-6"
                  src="~/assets/images/contact.svg"
                  alt=""
                />
                <a href="#" class="text-md font-medium">Contact Us</a>
              </div>
              <div
                class="px-4 py-3 rounded-xl hover:bg-gray-100 flex items-center text-black"
              >
                <img
                  class="h-5 mr-6"
                  src="~/assets/images/careers.svg"
                  alt=""
                />
                <NuxtLink to="/careers" class="text-md font-medium"
                  >Careers</NuxtLink
                >
              </div>
              <div
                class="px-4 hover:bg-gray-100 py-3 rounded-xl flex items-center text-black"
              >
                <img class="h-6 mr-6" src="~/assets/images/legal.svg" alt="" />
                <NuxtLink to="/legal" class="text-md font-medium"
                  >Legal</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex hidden items-center cursor-pointer">
          <div class="mr-8 relative inline-flex items-center">
            <img
              class="h-4 w-4 mr-0.5"
              src="~/assets/images/globe.svg"
              alt=""
            /><a href="#" @click.stop="locale = !locale"> EN</a>
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
                <a href="#" class="text-md font-medium">en-US</a>
              </div>
              <div
                class="px-4 py-3 rounded-xl hover:bg-gray-100 flex items-center text-black"
              >
                <a href="#" class="text-md font-medium">FR</a>
              </div>
            </div>
          </div>
          <div>
            <button class="px-6 py-4 bg-black font-black text-white rounded-lg">
              Join the waitlist
            </button>
          </div>
        </div>
      </nav>
    </header>
    <slot />
    <Footer />
  </div>
</template>
<script>
import bg from "assets/images/bg-2.svg";

export default {
  data() {
    return {
      image: bg,
      company: false,
      locale: false,
    };
  },
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>

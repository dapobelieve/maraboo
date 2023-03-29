<template>
  <header class="md:pt-6 pt-2 px-2 lg:container md:mx-auto relative z-50">
    <nav
      class="font-['Open_Sans'] py-4 md:py-0 select-none flex w-full justify-between"
    >
      <NuxtLink to="/" class="flex items-center">
        <img class="h-8 md:h-10" src="~/assets/images/maraboo.svg" alt="" />
        <h1 class="font-heading text-xl md:text-3xl font-extrabold">Maraboo</h1>
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
        <div class="mr-12"><a href="#how-it-works"> How it works</a></div>
        <div
          role="button"
          @click="company = !company"
          class="inline-flex relative cursor-pointer items-center"
        >
          <a> Company </a>
          <img
            class="h-2 mt-0.5 ml-2"
            :class="[company ? '-rotate-180' : '']"
            src="~/assets/images/caret-down.svg"
            alt=""
          />
          <div
            v-show="company"
            role="menu"
            class="absolute shadow-lg w-[19rem] top-9 rounded-lg ring-opacity-5 ring-1 bg-white ring-black -right-3"
          >
            <NuxtLink
              to="/about"
              class="pl-8 hover:bg-gray-50 py-6 rounded-xl flex items-center text-black"
            >
              <img class="h-4 mr-6" src="~/assets/images/about.svg" alt="" />
              <span class="text-md font-medium">About us</span>
            </NuxtLink>
            <div
              class="pl-8 py-6 rounded-xl hover:bg-gray-100 flex items-center text-black"
            >
              <img class="h-6 mr-6" src="~/assets/images/contact.svg" alt="" />
              <a href="#" class="text-md font-medium">Contact Us</a>
            </div>
            <NuxtLink
              to="/careers"
              class="pl-8 py-6 rounded-xl hover:bg-gray-100 flex items-center text-black"
            >
              <img class="h-5 mr-6" src="~/assets/images/careers.svg" alt="" />
              <span class="text-md font-medium">Careers</span>
            </NuxtLink>
            <NuxtLink
              to="/legal"
              class="pl-8 hover:bg-gray-100 py-6 rounded-xl flex items-center text-black"
            >
              <img class="h-6 mr-6" src="~/assets/images/legal.svg" alt="" />
              <span class="text-md font-medium">Legal</span>
            </NuxtLink>
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
              <a href="#" class="text-md font-medium">English</a>
            </div>
            <div
              class="px-4 py-3 rounded-xl hover:bg-gray-100 flex items-center text-black"
            >
              <a href="#" class="text-md font-medium">France</a>
            </div>
          </div>
        </div>
        <div>
          <button
            class="px-6 lg:px-4 lg:py-3 lg:text-sm py-4 bg-black font-black text-white rounded-lg"
          >
            Join the waitlist
          </button>
        </div>
      </div>
    </nav>
    <div
      v-show="showMobileMenu"
      class="fixed bg-white left-0 top-0 h-full w-full"
    >
      <div class="px-4 pt-3">
        <NuxtLink to="/" class="flex items-center">
          <img class="h-8 md:h-16" src="~/assets/images/maraboo.svg" alt="" />
          <h1 class="font-heading text-2xl md:text-4xl font-extrabold">
            Maraboo
          </h1>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      company: false,
      locale: false,
    };
  },
  methods: {
    scrollIntoView(e) {
      const { hash } = e.target;
      document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped></style>

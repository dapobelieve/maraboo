<template>
  <header>
    <div class="px-10 py-5">
      <div class="flex items-center">
        <NuxtLink :to="localePath('/')" class="flex items-center">
          <img class="mr-2" :src="'/maraboo.svg'" alt="logo" />
          <img src="~/assets/images/logo.svg" alt="" />
        </NuxtLink>
        <span class="ml-auto mt-3 inline-flex items-center space-x-6">
          <NuxtLink
            to="about"
            class="text-2 hidden font-medium text-black md:block"
            >Company</NuxtLink
          >
          <button class="rounded-full border border-surface-200 px-6 py-2.5">
            <div class="flex items-center space-x-4">
              <img src="~/assets/images/en.svg" />
              <span class="font-extrabold text-black">EN</span>
            </div>
          </button>
        </span>
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
    const route = useRoute();
    const { locale } = useI18n();
    const state = reactive({
      showMobileMenu: false,
      company: false,
      locale: false,
      mobileCompany: false,
      contact: false,
      activeLocale: computed(() => locale),
    });

    const computedHowToNav = computed(() => {
      return route.path.includes("exchange");
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
      computedHowToNav,
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

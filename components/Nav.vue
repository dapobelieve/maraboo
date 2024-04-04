<template>
  <header>
    <div class="container" style="padding-bottom: 8px; padding-top: 8px">
      <div class="flex w-full items-center">
        <NuxtLink :to="localePath('/')" class="flex items-center">
          <div>
            <img
              class="h-6 md:h-8"
              src="~/assets/images/maraboo-logo.png"
              alt=""
            />
          </div>
        </NuxtLink>
        <span class="ml-auto mt-3 inline-flex items-center space-x-6">
          <Button
            @click.stop="$router.push('/about')"
            type="no-outline"
            class="hidden md:block"
            >Company</Button
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

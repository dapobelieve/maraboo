<template>
  <header>
    <div class="flex w-full items-center px-3 md:px-3">
      <NuxtLink :to="localePath('/')" class="flex items-center">
        <div>
          <img
            class="hidden h-6 md:h-8 lg:block"
            src="~/assets/images/maraboo-logo.png"
            alt=""
          />
          <img class="h-10 lg:hidden" src="~/assets/images/logo.png" alt="" />
        </div>
      </NuxtLink>
      <span class="ml-auto mt-3 inline-flex items-center space-x-6">
        <Button
          @click.stop="$router.push(localePath('/about'));"
          animate
          type="no-outline"
          class="btn-lg hidden md:block"
          > {{ $t("home.nav.company.name") }}</Button
        >
        <LanguageSelector />
      </span>

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

    // function scrollIntoView(e) {
    //   const { hash } = e.target;
    //   document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
    //   state.showMobileMenu = false;
    // }

    return {
      ...toRefs(state),
      computedHowToNav,
      // scrollIntoView,
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

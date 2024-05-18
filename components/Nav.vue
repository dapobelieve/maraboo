<template>
  <header class="z-20 " :class="{'sticky': isSticky}">
    <div class="flex navbar w-full items-center py-2 bg-[#E3E1EB] px-6">
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
      <span class="ml-auto inline-flex items-center space-x-6">
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
      isSticky: false,
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

   function handleScroll() {
      state.isSticky = window.scrollY > 100;
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeMount(() => {
      window.removeEventListener('scroll', handleScroll);
    })

    return {
      ...toRefs(state),
      computedHowToNav,
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  transition: top 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}



.sticky {
  position: sticky;
  top: -100px;
  animation: slideDown 0.3s forwards;
  width: 100%;
  @apply lg:px-20 bg-transparent;

  .navbar {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @apply rounded-full shadow-2xl
  }
}

@keyframes slideDown {
  to {
    top: 5px;
  }
}
</style>

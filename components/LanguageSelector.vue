<template>
  <ClickOutside
    :do="
      () => {
        state.show = false;
      }
    "
  >
    <div class="relative inline-block">
      <button
        @click="state.show = !state.show"
        class="hover:drop-shadow-4xl h-14 rounded-full border-2 border-surface-200 px-4 py-1 text-black transition-all delay-150 duration-500 ease-in-out hover:border-white hover:bg-white"
      >
        <div class="flex items-center space-x-2">
          <img
            v-if="state.lang == 'en'"
            class="h-8"
            src="~/assets/images/en.png"
            alt=""
          />
          <img
            v-if="state.lang == 'fr'"
            class="h-8"
            src="~/assets/images/fr.png"
            alt=""
          />
          <span class="select-text font-extrabold">{{
            state.lang === "en" ? "EN" : "FR"
          }}</span>
          <Icon
            class="text-black"
            size="0.9rem"
            :class="[state.show ? -'rotate-180' : 'rotate-180']"
            icon="caret-down-filled"
          ></Icon>
        </div>
      </button>
      <div
        v-show="state.show"
        class="absolute right-0 z-10 mt-2 min-w-[224px] origin-top-right rounded bg-neutral shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        tabindex="-1"
      >
        <div class="h-full w-full space-y-6 p-4 text-white">
          <a
            @click.prevent="switchLang('en')"
            class="flex cursor-pointer items-center rounded-[20px] px-4 py-3 text-sm transition-all duration-700 ease-in-out"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
            :class="state.lang === 'en' ? 'bg-primary' : ''"
          >
            <img class="mr-5 h-8" src="~/assets/images/en.png" />
            <span class="font-medium">English</span>
          </a>
          <a
            @click.prevent="switchLang('fr')"
            class="flex cursor-pointer items-center rounded-[20px] px-4 py-3 text-sm transition-all duration-700 ease-in-out"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
            :class="state.lang === 'fr' ? 'bg-primary' : ''"
          >
            <img class="mr-5 h-8" src="~/assets/images/fr.png" />
            <span class="font-medium">French</span>
          </a>
        </div>
      </div>
    </div>
  </ClickOutside>
</template>switchLocalePath
<script setup lang="ts">
const router = useRoute();
const { locale, setLocale, } = useI18n();
const switchLocalePath = useSwitchLocalePath()
const state = reactive({
  show: false,
  lang: "en",
});

function switchLang(lang) {
  state.lang = lang;
  setLocale(lang);
  router.push(switchLocalePath(lang))

  setTimeout(() => {
    state.show = false;
  }, 500);
}

onMounted(() => {
  router.path.includes('fr') ? state.lang = 'fr' : state.lang = 'en'
})
</script>

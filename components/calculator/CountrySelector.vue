<template>
  <ClickOutside
    :do="
      () => {
        close();
      }
    "
  >
    <div class="ml-2 md:relative">
      <button
        v-if="selected"
        @click.stop="open = !open"
        class="inline-flex h-12 items-center pr-3"
        :disabled="disabled"
      >
        <img class="flag h-8 w-8" :src="images[selected.flag]" alt="" />
        <span class="country ml-1 uppercase text-black">
          {{ selected.currency }}
        </span>
        <span>
          <img
            class="ml-1 h-8 w-8"
            src="~/assets/images/caret-down.svg"
            alt=""
          />
        </span>
      </button>
      <div
        v-show="open"
        class="min-w-sm absolute -right-1.5 top-0 z-10 w-full max-w-lg rounded-lg drop-shadow md:w-[20rem]"
      >
        <div class="w-full rounded-lg">
          <ul role="listbox" class="px-2 pb-3 pt-6">
            <li class="mb-6 px-3">
              <a href="#search">
                <div>
                  <span>
                    <input
                      type="text"
                      v-model="quickSearch"
                      @click.stop=""
                      placeholder="Search"
                      class="h-8 w-full rounded-sm border-[0.5px] border-black px-3 text-gray-500 focus:outline-none"
                    />
                  </span>
                </div>
              </a>
            </li>
            <li class="mb-4 px-3 text-left text-xs font-normal text-gray-400">
              Western Countries
            </li>
            <li
              v-if="cad_coming_soon"
              role="option"
              class="mb-6 w-full cursor-not-allowed rounded-lg px-3 py-2 opacity-50"
            >
              <a class="flex items-center">
                <img
                  class="mr-3 h-6 w-6"
                  :src="images[firstCountry.flag]"
                  alt=""
                />
                <span
                  >{{ firstCountry.name }}
                  <span class="ml-1 text-[14px]">(Coming soon)</span></span
                >
                <span class="ml-auto uppercase">{{
                  firstCountry.currency
                }}</span>
              </a>
            </li>
            <li
              v-else
              role="option"
              @click="handleSelection(firstCountry, $event)"
              class="mb-6 w-full cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100"
            >
              <a class="flex items-center">
                <img
                  class="mr-3 h-6 w-6"
                  :src="images[firstCountry.flag]"
                  alt=""
                />
                <span>{{ firstCountry.name }}</span>
                <span class="ml-auto uppercase">{{
                  firstCountry.currency
                }}</span>
              </a>
            </li>
            <li class="mb-4 px-3 text-left text-xs font-normal text-gray-400">
              WAEMU countries
            </li>
            <li
              v-if="waemu_coming_soon"
              v-for="country in filteredCountries"
              role="option"
              tabindex="-1"
              class="w-full cursor-not-allowed rounded-lg px-3 py-2 opacity-50"
            >
              <a class="flex h-full items-center">
                <img class="mr-3 h-6 w-6" :src="images[country.flag]" alt="" />
                <span class="inline-flex items-center"
                  >{{ country.name }}
                  <span class="ml-1 text-[14px]">(Coming soon)</span>
                </span>
                <span class="ml-auto uppercase">{{ country.currency }}</span>
              </a>
            </li>
            <li
              v-else
              v-for="country in filteredCountries"
              role="option"
              tabindex="-1"
              @click="
                providers
                  ? providers.find(
                      (provider) =>
                        provider.country_name === country.name.toLowerCase()
                    )
                    ? handleSelection(country, $event)
                    : ''
                  : handleSelection(country, $event)
              "
              :class="
                providers
                  ? providers.find(
                      (provider) =>
                        provider.country_name === country.name.toLowerCase()
                    )
                    ? 'w-full cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100'
                    : 'w-full cursor-not-allowed rounded-lg px-3 py-2 opacity-50'
                  : 'w-full cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100'
              "
            >
              <a class="flex h-full items-center">
                <img class="mr-3 h-6 w-6" :src="images[country.flag]" alt="" />
                <span class="block items-center lg:inline-flex"
                  >{{ country.name }}

                  <span class="ml-1 text-[14px]">{{
                    providers
                      ? providers.find(
                          (provider) =>
                            provider.country_name === country.name.toLowerCase()
                        )
                        ? ""
                        : "(Coming Soon)"
                      : ""
                  }}</span>
                </span>
                <span class="ml-auto uppercase">{{ country.currency }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </ClickOutside>
</template>
<script>
import { reactive, computed, toRefs } from "vue";
import { useImages } from "~/composables/useImages";

export default {
  props: [
    "modelValue",
    "disabled",
    "waemu_coming_soon",
    "cad_coming_soon",
    "providers",
  ],
  setup(props, ctx) {
    const state = reactive({
      open: false,
      quickSearch: "",
      firstCountry: computed(() => state.countries[0]),
      countries: [
        {
          name: "Canada",
          flag: "canada",
          currency: "cad",
          country: "canada",
        },
        {
          name: "Benin",
          flag: "benin",
          currency: "xof",
          country: "benin",
        },
        {
          name: "Burkina Faso",
          flag: "burkinafaso",
          currency: "xof",
          country: "burkina_faso",
        },
        {
          name: "Cote d'Ivoire",
          flag: "cotedivoire",
          currency: "xof",
          country: "cote_d_ivoire",
        },
        {
          name: "Guinea-Bissau",
          flag: "guineabissau",
          currency: "xof",
          country: "guinea_bissau",
        },
        {
          name: "Mali",
          flag: "mali",
          currency: "xof",
          country: "mali",
        },
        {
          name: "Niger",
          flag: "niger",
          currency: "xof",
          country: "niger",
        },
        {
          name: "Senegal",
          flag: "senegal",
          currency: "xof",
          country: "senegal",
        },
        {
          name: "Togo",
          flag: "togo",
          currency: "xof",
          country: "togo",
        },
      ],
    });

    const { images } = useImages();

    const filteredCountries = computed(() => {
      return state.countries.slice(1).filter((row) => {
        return Object.keys(row).some((key) => {
          return (
            String(row[key])
              .toLowerCase()
              .indexOf(state.quickSearch.toLowerCase()) > -1
          );
        });
      });
    });

    function close() {
      state.open = false;
    }

    function handleSelection(data, event) {
      ctx.emit("update:modelValue", data);
      ctx.emit("emitDataToParent", data);
      event.preventDefault();
      close();
    }

    return {
      ...toRefs(state),
      images,
      handleSelection,
      filteredCountries,
      selected: computed(() => props.modelValue),
      close,
    };
  },
};
</script>

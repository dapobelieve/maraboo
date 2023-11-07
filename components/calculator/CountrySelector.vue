<template>
  <ClickOutside
    :do="
      () => {
        close();
      }
    "
  >
    <div class="md:relative ml-2">
      <button
        v-if="selected"
        @click.stop="open = !open"
        class="inline-flex h-12 pr-3 items-center"
        :disabled="disabled"
      >
        <img class="flag w-8 h-8" :src="images[selected.flag]" alt="" />
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
        class="min-w-sm max-w-lg bg-white md:w-[20rem] absolute w-full rounded-lg drop-shadow z-10 -right-1.5 top-0"
      >
        <div class="rounded-lg w-full">
          <ul role="listbox" class="pt-6 pb-3 px-2">
            <li class="mb-6 px-3">
              <a href="#search">
                <div>
                  <span>
                    <input
                      type="text"
                      v-model="quickSearch"
                      @click.stop=""
                      placeholder="Search"
                      class="w-full text-gray-500 h-8 rounded-sm border-[0.5px] border-black focus:outline-none px-3"
                    />
                  </span>
                </div>
              </a>
            </li>
            <li class="text-gray-400 px-3 mb-4 text-xs text-left font-normal">
              Western Countries
            </li>
            <li
              v-if="cad_coming_soon"
              role="option"
              class="opacity-50 cursor-not-allowed py-2 px-3 rounded-lg mb-6 w-full"
            >
              <a class="flex items-center">
                <img
                  class="h-6 w-6 mr-3"
                  :src="images[firstCountry.flag]"
                  alt=""
                />
                <span>{{ firstCountry.name }}  <span class="ml-1 text-[14px]">(Coming soon)</span></span>
                <span class="ml-auto uppercase">{{
                  firstCountry.currency
                }}</span>
              </a>
            </li>
            <li
              v-else
              role="option"
              @click="handleSelection(firstCountry, $event)"
              class="cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-lg mb-6 w-full"
            >
              <a class="flex items-center">
                <img
                  class="h-6 w-6 mr-3"
                  :src="images[firstCountry.flag]"
                  alt=""
                />
                <span>{{ firstCountry.name }}</span>
                <span class="ml-auto uppercase">{{
                  firstCountry.currency
                }}</span>
              </a>
            </li>
            <li class="text-gray-400 px-3 mb-4 text-xs text-left font-normal">
              WAEMU countries
            </li>
            <li
              v-if="waemu_coming_soon"
              v-for="country in filteredCountries"
              role="option"
              tabindex="-1"
              class="opacity-50 cursor-not-allowed py-2 px-3 rounded-lg w-full"
            >
              <a class="flex h-full items-center">
                <img class="h-6 w-6 mr-3" :src="images[country.flag]" alt="" />
                <span class="inline-flex items-center"
                  >{{ country.name }}  <span class="ml-1 text-[14px]">(Coming soon)</span>
               
                </span>
                <span class="ml-auto uppercase">{{ country.currency }}</span>
              </a>
            </li>
            <li
             v-else
              v-for="country in filteredCountries"
              role="option"
              tabindex="-1"
              @click="handleSelection(country, $event)"
              :class="providers ? providers.find(provider => provider.country_name ===  country.name.toLowerCase()) ? 'cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-lg w-full' : 'opacity-50 cursor-not-allowed py-2 px-3 rounded-lg w-full' : 'cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-lg w-full'"
            >
              <a class="flex h-full items-center">
                <img class="h-6 w-6 mr-3" :src="images[country.flag]" alt="" />
                <span class="inline-flex items-center"
                  >{{ country.name }}

                  <span class="ml-1 text-[14px]">{{ providers ? providers.find(provider => provider.country_name ===  country.name.toLowerCase()) ? "" : "(Coming Soon)" : "" }}</span>
               
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
  props: ["modelValue", "disabled", "waemu_coming_soon", "cad_coming_soon", "providers"],
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
          country: "canada"
        },
        {
          name: "Benin",
          flag: "benin",
          currency: "xof",
          country: "benin"
        },
        {
          name: "Burkina Faso",
          flag: "burkinafaso",
          currency: "xof",
          country: "burkina_faso"
        },
        {
          name: "Cote d'Ivoire",
          flag: "cotedivoire",
          currency: "xof",
          country: "cote_d_ivoire"
        },
        {
          name: "Guinea-Bissau",
          flag: "guineabissau",
          currency: "xof",
          country: "guinea_bissau"
        },
        {
          name: "Mali",
          flag: "mali",
          currency: "xof",
          country: "mali"
        },
        {
          name: "Niger",
          flag: "niger",
          currency: "xof",
          country: "niger"
        },
        {
          name: "Senegal",
          flag: "senegal",
          currency: "xof",
          country: "senegal"
        },
        {
          name: "Togo",
          flag: "togo",
          currency: "xof",
          country: "togo"
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

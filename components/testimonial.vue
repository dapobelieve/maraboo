<template>
  <section class="testimonials !px-0 md:!px-6">
    <div class="container">
      <div class="grid grid-row-2 gap-6 lg:gap-10 w-full">
        <div class="grid grid-col-2 gap-6 lg:gap-10 lg:flex">
          <div class="gap-6 lg:gap-10 flex lg:w-3/5">
            <Card class="flex flex-col bg-accent-100 space-y-10">
              <div class="flex grow items-center justify-center">
                <img src="~/assets/images/secure.png" alt="phone-logo" />
              </div>
              <div class="space-y-6 sub-content">
                <h1 class="display-2">{{ $t("home.section8.secure.title") }}</h1>
                <p class="text-2" v-html="$t('home.section8.secure.body')"></p>
              </div>
            </Card>
          </div>
          <div class="grid lg:grid-rows-2 gap-6 lg:gap-10 lg:w-2/5">
            <Card
                class="bg-accent-100 space-y-6 !justify-end flex flex-col row-span-2"
                direction="down"
            >
              <div class="sub-content space-y-6">
                <h1 class="display-2">{{ $t("home.section8.from.title") }}</h1>
                <p class="text-2" v-html="$t('home.section8.from.body')"></p>
              </div>
            </Card>
            <Card class="bg-accent-100 !justify-end flex flex-col" direction="up">
              <div class="sub-content space-y-6">
                <p class="text-2">{{ $t("home.section8.did") }}</p>
              </div>
            </Card>
          </div>
        </div>

        <Card class="flex justify-center bg-neutral text-white !py-24">
          <div class="content-wrap">
            <div class="flex w-full justify-between lg:flex-row flex-col items-center space-y-14">
              <div
                  class="flex-col lg:flex lg:max-w-[416px] justify-between lg:h-full sub-content"
              >
                <h1 class="display-2" v-html="$t('home.section9.head')"></h1>
                <div class="relative space-x-10 lg:flex hidden">
                  <Button
                      class="btn-xl btn-circle shrink-0 rounded-full border border-surface-300"
                  >
                    <Icon
                        icon="chevron-left"
                        size="4rem"
                        class="ml-1 font-extrabold text-surface-400"
                    ></Icon>
                  </Button>
                  <Button
                      class="btn-xl btn-circle shrink-0 rounded-full border border-surface-300"
                  >
                    <Icon
                        icon="chevron-right"
                        size="4rem"
                        class="ml-2 font-extrabold text-surface-400"
                    ></Icon>
                  </Button>
                </div>
              </div>
              <div class="flex flex-col items-center space-y-10 lg:max-w-[512px] sub-content">
                <div class="space-y-5 inline-flex flex-col items-center">
                  <img src="~/assets/images/customer.png" alt />
                  <div class="text-2">John Doe . Canada</div>
                </div>
                <p class="text-center text-3">
                  “I love that Maraboo gives me the real exchange rate. It
                  means more of my money goes to my loved ones in Togo.”
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n();

</script>

<template>
  <section>
    <div class="container">
      <Card class="bg-accent-200 p-8 lg:p-10">
        <div class="items-center lg:flex">
          <div class="mb-4 flex space-x-4 lg:space-x-8">
            <img src="~/assets/images/woman.svg" class="block" alt="woman-logo" />
            <div class="pt-4">
              <h1 class="display-3 mb-4">{{ $t("home.section10.head") }}</h1>
              <p class="text-2">{{ $t("home.section10.body") }}</p>
            </div>
          </div>
          <button
              class="ml-auto w-full self-center rounded-full border-2 border-black px-6 py-2 font-medium lg:w-fit"
          >{{ $t("home.section10.chat") }}</button>
        </div>
      </Card>
    </div>
  </section>
</template>

<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

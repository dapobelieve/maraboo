<template>
  <section class="bg-coloured  rounded">
    <div class="container">
      <div ref="content" class="content-wrap">
        <div class="w-full items-start justify-between lg:flex">
          <div ref="twoWay" class="two-way lg:max-w-lg space-y-10 mb-20 text-white lg:mb-0">
            <h1 class="display-2 mb-5 lg:mb-10 text-left">{{ $t("home.section2.left.one") }}</h1>
            <p class="text-left" v-html="$t('home.section2.left.two')"></p>
          </div>
          <div ref="calculator" class="calculator flex justify-center lg:justify-end">
            <Calculator class="lg:ml-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref} from "vue"


const twoWay = ref(null)
const content = ref(null)
const calculator = ref(null)

</script>

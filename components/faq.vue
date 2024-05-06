<template>
  <section class="faq">
    <div class="container">
      <div class="flex flex-col items-center space-y-12 lg:space-y-16">
        <h1
            class="font-heading display-2 text-center leading-snug lg:text-6xl"
        >{{ $t("home.faq-header") }}</h1>
        <div class="flex w-full">
          <GlobalAccordionList class="w-full gap-10 lg:flex">
            <div class="lg:w-1/2 space-y-8">
              <GlobalAccordionItem
                  :item-id="id + 1"
                  :item="q"
                  v-for="(q, id) in faqs.slice(0, half)"
              ></GlobalAccordionItem>
            </div>
            <div class="lg:w-1/2 space-y-8">
              <GlobalAccordionItem
                  :item-id="id + 4"
                  :item="q"
                  v-for="(q, id) in faqs.slice(half)"
              ></GlobalAccordionItem>
            </div>
          </GlobalAccordionList>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n();
import {reactive} from "vue";

const faqs = reactive([
  {
    question: t("home.faq[0].question"),
    answers: t("home.faq[0].answers"),
  },
  {
    question: t("home.faq[1].question"),
    answers: t("home.faq[1].answers"),
  },
  {
    question: t("home.faq.2.question"),
    answers: t("home.faq.2.answers"),
  },
  {
    question: t("home.faq.3.question"),
    answers: t("home.faq.3.answers"),
  },
  {
    question: t("home.faq.4.question"),
    answers: t("home.faq.4.answers"),
  },
  {
    question: t("home.faq.5.question"),
    answers: t("home.faq.5.answers"),
  },
]);



const half = computed(() => Math.ceil(faqs.length / 2));
</script>

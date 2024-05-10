<template>
  <section class="testimonials border-red-500">
    <div class="container">
      <div class="content-wrap">
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

          <!--  Testimonials-->
          <Card class="flex justify-center bg-neutral overflow-hidden text-white !py-24">
            <div class="flex w-full justify-between lg:flex-row flex-col items-center space-y-16 lg:space-y-0 space-x-8">
                <div
                    class="flex-col lg:flex lg:max-w-[416px] justify-between space-y-16 lg:h-full sub-content"
                >
                  <h1 class="display-2 text-center lg:text-left" v-html="$t('home.section9.head')"></h1>
                  <div class="relative space-x-10 lg:flex hidden">
                    <Button
                        class="btn-xl swiper-btn-left btn-circle shrink-0 rounded-full border border-surface-300"
                    >
                      <Icon
                          icon="chevron-left"
                          size="4rem"
                          class="ml-1 font-extrabold text-surface-400"
                      ></Icon>
                    </Button>
                    <Button
                        class="btn-xl swiper-btn-right btn-circle shrink-0 rounded-full border border-surface-300"
                    >
                      <Icon
                          icon="chevron-right"
                          size="4rem"
                          class="ml-2 font-extrabold text-surface-400"
                      ></Icon>
                    </Button>
                  </div>
                </div>
                <div class="flex dswiper flex-col items-center space-y-10 sub-content">
                  <swiper
                      :slides-per-view="'auto'"
                      :modules="modules"
                      slide-next-class=".btn-right"
                      loop
                      :navigation="navs"
                      :pagination="{ clickable: true }"
                      @swiper="onSwiper"
                      class="hidden">
                    <swiper-slide v-for="(x, index) in 3" class="w-full">
                      <div class="flex flex-col items-center space-y-10 w-full sub-content">
                        <img src="~/assets/images/customer.png" alt />
                        <div class="text-2">John Doe {{index+1}} . Canada</div>

                      <p class="text-center max-w-s text-3">
                        “I love that Maraboo gives me the real exchange rate. It
                        means more of my money goes to my loved ones in Togo.”
                      </p>
                      </div>
                    </swiper-slide>
                  </swiper>

                  <!--   mobile-->
                  <div class="relative space-x-10 lg:lg:hidden block">
                    <Button
                        class="btn-xl swiper-btn-left btn-circle shrink-0 rounded-full border border-surface-300"
                    >
                      <Icon
                          icon="chevron-left"
                          size="4rem"
                          class="ml-1 font-extrabold text-surface-400"
                      ></Icon>
                    </Button>
                    <Button
                        class="btn-xl swiper-btn-right btn-circle shrink-0 rounded-full border border-surface-300"
                    >
                      <Icon
                          icon="chevron-right"
                          size="4rem"
                          class="ml-2 font-extrabold text-surface-400"
                      ></Icon>
                    </Button>
                  </div>
                </div>
              </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.swiper-pagination {

}

.swiper {
  position: static;
}


.dswiper  .swiper-slide {
  width: 100%;
  flex-shrink: 0;
  display: block;
  height: 100%;
  max-height: 100%;
}

:deep(.swiper-pagination-bullet-active) {
  background: white !important;
}

:deep(.swiper-pagination-bullet) {
  background: whitesmoke !important;
}

@media screen and (max-width: 768px) {
  :deep(.swiper-pagination) {
    bottom: 185px !important;
  }
}

:deep(.swiper-pagination) {
  bottom: 100px !important;
  left: 270px;
}



</style>
<script setup>

import {Swiper, SwiperSlide} from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useI18n} from "vue-i18n";

const navs = {
  nextEl: '.swiper-btn-right',
  prevEl: '.swiper-btn-left',
}

const modules = reactive([
  Navigation,
    Pagination
])
const onSwiper = (swiper) => {
  // console.log(swiper);
};


const { t } = useI18n();

</script>

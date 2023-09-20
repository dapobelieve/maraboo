<template>
  <div
    class="bg-gradient-to-r from-[#BDB9FB] mt-40 py-6 pb-24 px-5 flex space-y-16 flex-col items-center justify-center to-[#A8B8FA]"
  >
    <div
      class="container -mt-[9rem] md:px-16 h-full px-7 py-14 md:py-12 flex bg-black text-white rounded-3xl md:rounded-[40px] md:max-w-5xl w-full"
    >
      <div class="lg:flex items-center justify-around h-full w-full gap-10">
        <div class="mb-6 lg:mb-0 lg:w-[50%]">
          <h1
            class="text-3xl lg:text-5xl font-heading text-center lg:text-left mb-4"
          >
            {{ $t('wait-list.join') }}
          </h1>
          <p class="text-center lg:text-left leading-6 lg:text-xl">
            {{ $t('wait-list.up-to-date') }}
          </p>
        </div>
        <div class="flex text-xs lg:w-[50%]">
          <input
            :placeholder="$t('wait-list.mail')"
            class="lg:text-xl h-12 flex-grow w-full px-4 rounded rounded-e-none text-black focus-within:outline-0 border-0"
          />
          <button
            class="lg:text-xl px-4 flex-shrink-0 py-2 bg-purple text-white rounded rounded-s-none"
          >
            {{ $t('wait-list.notify') }}
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center px-2 md:px-0 items-center flex-col">
      <h1 v-html="$t('wait-list.download-title')" class="font-heading mb-6 text-center text-white text-4xl md:text-5xl">
       
      </h1>
      <div class="flex justify-between gap-2 max-w-xs">
        <a href="#">
          <img class="h-12" src="~/assets/images/appleStore-white.svg" />
        </a>
        <a href="#">
          <img class="h-12" src="~/assets/images/playStore-white.svg" />
        </a>
      </div>
    </div>
  </div>
  <footer class="px-5 sm:px-5 lg:px-10">
    <div class="md:py-16 py-6">
      <div
        class="md:flex md:flex-row md:justify-between after:content after:w-full after:bottom-[-20px] md:after:bottom-[-40px] after:h-[1px] after:absolute relative after:bg-[#5C5C5C] items-start mb-16 md:mb-20"
      >
        <div class="text-center md:text-left md:w-[33%] mb-10 maraboo md:mb-0">
          <div class="inline-flex mb-10 items-center">
            <img class="h-7" src="~/assets/images/maraboo.svg" alt="" />
            <h1
              class="ml-1 mt-2 font-heading text-2xl font-extrabold md:text-3xl"
            >
              Maraboo
            </h1>
          </div>
          <p v-html="$t('footer.logo-caption')" class="text-center md:text-left">
          </p>
        </div>
        <div class="text-center md:text-left contact-us mb-8 md:mb-0 md:w-96">
          <h1 class="text-2xl md:text-4xl font-heading font-bold mb-4">
            {{ $t("footer.contact") }}
          </h1>
          <div class="mb-3">
            <span class="font-bold mr-2">{{ $t("footer.email") }}:</span>
            <a
              href="mailto: enquiries@mara.boo?subject=Feedback&body=Hello"
              target="_blank"
              >enquiries@mara.boo</a
            >
          </div>
          <div class="leading-7">
            <strong> Canada </strong> - 169 ENTERPRISE BLVD. <br />(YSPACE SUITE
            300) Markham, ON,
            <br />
            CANADA L6G-0E7 <br />
            <strong id="contact-us">Cote D’ivoire</strong> - 25 BP 663 Abidjan
            25
          </div>
        </div>
        <div class="socials text-center mt-10 md:mt-0">
          <h1 class="text-2xl md:text-4xl font-heading font-bold mb-4">
            {{ $t("footer.socials") }}
          </h1>
          <div class="socials mb-8 inline-flex justify-between">
            <a
              class="mr-4"
              target="_blank"
              href="https://www.linkedin.com/company/grandmaraboo/people/?viewAsMember=true"
            >
              <img class="" src="~/assets/images/linkedin.svg" alt="linkedin" />
            </a>
            <a
              class="mr-4"
              target="_blank"
              href="https://twitter.com/Grandmaraboo"
            >
              <img class="" src="~/assets/images/twitter.svg" alt="twitter" />
            </a>
            <a
              class="mr-3"
              target="_blank"
              href="https://www.instagram.com/grand.maraboo/"
            >
              <img class="" src="~/assets/images/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="leading text-center md:text-left text-[#848484] mt-8 mb-5">
        <h6 class="mb-10">
          {{ $t('footer.registered') }}
          <strong>M23345406</strong>
        </h6>
        <span
          class="w-full md:hidden flex md:items-center md:mb-0 justify-around"
        >
          <a href="" class="block md:mb-0">{{ $t("footer.privacy") }}</a>
          <a href="">{{ $t("footer.terms") }}</a>
        </span>

        <!--        <p class="mb-2">-->
        <!--          Lorem ipsum dolor sit amet consectetur. Diam turpis eu pretium ut vel-->
        <!--          risus. Tellus tempor pretium tincidunt in a eu viverra. Ultrices-->
        <!--          adipiscing est sit ante tortor pellentesque nulla fames nibh. Gravida-->
        <!--          urna suspendisse et odio laoreet lorem. Bibendum cursus elit convallis-->
        <!--          leo quisque. Pretium in tellus vitae risus maecenas posuere. Morbi-->
        <!--          morbi massa leo tortor cras eget massa.-->
        <!--        </p>-->
      </div>

      <div
        class="my-10 w-full text-[#848484] text-center md:flex flex-col justify-center md:flex-row md:justify-between"
      >
        <span class="md:mb-0">
          Grand Maraboo Technologies Limited
          <span class="block md:inline-block">
            &#169; 2023 All rights reserved
          </span>
        </span>

        <span
          class="md:flex hidden md:items-center gap-10 md:mb-0 justify-around"
        >
          <a href="" class="block md:mb-0">{{ $t("footer.privacy") }}</a>
          <a href="">{{ $t("footer.terms") }}</a>
        </span>

        <h6 class="md:hidden mt-6">
          {{ $t("footer.made-by") }}
        </h6>

        <span class="hidden md:block font-bold">
          {{ $t("footer.made-by") }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped></style>

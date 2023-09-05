<template>
  <div
    class="bg-gradient-to-r from-[#BDB9FB] py-6 pb-24 flex space-y-16 flex-col items-center justify-center to-[#A8B8FA]"
  >
    <div
      class="container md:-mt-[9rem] px-16 md:py-12 flex bg-black text-white rounded-[40px] h-56 md:max-w-5xl w-full border border-green-500"
    >
      <div class="flex items-center justify-around w-full">
        <div>
          <h1 class="text-4xl font-heading mb-4">Join our waitlist!</h1>
          <p class="text-left">
            To stay up to date with our development, and to learn how you <br />
            can get the most out of Maraboo’s platform for international <br />
            transfers.
          </p>
        </div>
        <div class="flex">
          <input
            placeholder="Please enter your email"
            class="h-10 px-4 rounded hover:outline-0 border-0 w-full"
          />
          <button
            class="px-4 flex-shrink-0 h py-2 bg-purple text-white rounded"
          >
            Join the waiting list
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center flex-col">
      <h1
        class="font-heading mb-16 text-center text-white text-4xl md:text-5xl"
        style="line-height: 3.4rem !important"
      >
        Download the App <br />
        for Money Transfers Beyond <br />
        Borders!
      </h1>
      <div class="flex justify-between max-w-xs">
        <a href="#">
          <img class="md:h-12 mr-6" src="~/assets/images/appleStore.webp" />
        </a>
        <a href="#">
          <img class="md:h-12" src="~/assets/images/playStore.webp" />
        </a>
      </div>
    </div>
  </div>
  <footer class="px-2">
    <div class="container mx-auto md:py-16 py-6 px-2">
      <div
        class="flex md:flex-row md:justify-between after:content after:w-full after:bottom-[-67px] after:h-[1px] after:absolute relative after:bg-[#D1D1D1] md:items-centedr items-start mb-32"
      >
        <div class="mb-10 md:mb-0">
          <div class="inline-flex mb-5 items-center">
            <img class="h-10" src="~/assets/images/maraboo.svg" alt="" />
            <h1
              class="ml-1 mt-2 font-heading text-2xl font-extrabold md:text-3xl"
            >
              Maraboo
            </h1>
          </div>
          <p class="text-left max-w-md">
            A West-African fintech firm offering transformative <br />
            financial solutions that are fair, responsible, inclusive, and
            <br />
            designed to improve the quality of life of West Africans.
          </p>
        </div>
        <div class="contact-us">
          <h1 class="text-3xl font-bold mb-4">{{ $t("footer.contact") }}</h1>
          <div class="mb-3">
            <span class="font-bold mr-3">{{ $t("footer.email") }}:</span>
            <a
              href="mailto: enquiries@mara.boo?subject=Feedback&body=Hello"
              target="_blank"
              >enquiries@mara.boo</a
            >
          </div>
          <div>
            Canada - 169 ENTERPRISE BLVD. (YSPACE SUITE 300) MARKHAM, ON, CANADA
            L6G-0E7 Cote D’ivoire - 25 BP 663 Abidjan 25
          </div>
          <div class="mb-3">
            <!--              <span class="font-bold mr-3">{{ $t("footer.phone") }}:</span>-->
            <!--              <a href="tel:+16136178447">+1600000000</a>-->
          </div>
        </div>
        <div class="flex"></div>
        <div>
          <h1 class="text-xl font-bold mb-4 text-center">
            {{ $t("footer.socials") }}
          </h1>
          <div class="socials mb-8 inline-flex justify-between">
            <a
              class="mr-4"
              target="_blank"
              href="https://www.linkedin.com/company/grandmaraboo/people/?viewAsMember=true"
            >
              <img class="" src="~/assets/images/linkedin.svg" alt="" />
            </a>
            <a
              class="mr-4"
              target="_blank"
              href="https://twitter.com/Grandmaraboo"
            >
              <img class="" src="~/assets/images/twitter.svg" alt="" />
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
      <div class="leading-relaxed text-[#5C5C5C] mt-8 mb-5">
        <h6 class="md:hidden font-bold mb-6">
          {{ $t("footer.made-by") }}
        </h6>
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
        class="w-full text-[#5C5C5C] md:flex flex-col justify-center md:flex-row justify-between"
      >
        <span class="mb-8 md:mb-0">
          Grand Maraboo Technologies Limited
          <span> &#169;2023 All rights reserved </span>
        </span>
        <span
          class="max-w-[15rem] w-full md:inline-flex flex md:items-center md:mb-0 justify-between"
        >
          <a class="block md:mb-0">{{ $t("footer.privacy") }}</a>
          <a>{{ $t("footer.terms") }}</a>
        </span>
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

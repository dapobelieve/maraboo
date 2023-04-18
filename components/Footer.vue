<template>
  <footer class="bg-black text-white px-2">
    <div class="container mx-auto md:py-16 py-6">
      <div
        class="flex flex-col md:flex-row md:justify-between after:content after:w-full after:bottom-[-67px] after:h-[1px] after:absolute relative after:bg-[#D1D1D1] md:items-centedr items-start mb-32"
      >
        <div class="mb-10 md:mb-0">
          <img class="h-10" src="~/assets/images/maraboo-white.svg" alt="" />
        </div>

        <div class="others flex">
          <div id="contact-us">
            <h1 class="text-xl font-bold mb-4">Contact Us</h1>

            <div class="mb-3">
              <span class="font-bold mr-3">Email:</span>
              <a
                href="mailto: enquiries@mara.boo?subject=Feedback&body=Hello"
                target="_blank"
                >enquiries@mara.boo</a
              >
            </div>
            <div class="mb-3">
              <span class="font-bold mr-3">Phone:</span>
              <a href="tel:+16136178447">+16136178447</a>
            </div>
          </div>
        </div>
        <div class="others inline-flex grow-0">
          <div>
            <h1 class="text-xl font-bold mb-4">Address</h1>
            <p>186 brambling way <br />Ottawa Ontario K2J5V6.</p>
          </div>
        </div>
        <div>
          <h1 class="text-xl font-bold mb-4">Socials</h1>
          <div class="socials mb-8 inline-flex justify-between">
            <a class="mr-2" href="#">
              <img class="" src="~/assets/images/linkedin.svg" alt="" />
            </a>
            <a
              class="mr-2"
              target="_blank"
              href="https://twitter.com/Grandmaraboo"
            >
              <img class="" src="~/assets/images/twitter.svg" alt="" />
            </a>
            <a
              class="mr-2"
              target="_blank"
              href="https://www.instagram.com/grand.maraboo/"
            >
              <img class="" src="~/assets/images/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="leading-relaxed text-[#5C5C5C] mt-8 mb-5">
        <h6 class="md:hidden font-bold text-white mb-6">
          Made in WAEMU by Africans
        </h6>
        <!--        <p class="mb-2">-->
        <!--          Lorem ipsum dolor sit amet consectetur. Diam turpis eu pretium ut vel-->
        <!--          risus. Tellus tempor pretium tincidunt in a eu viverra. Ultrices-->
        <!--          adipiscing est sit ante tortor pellentesque nulla fames nibh. Gravida-->
        <!--          urna suspendisse et odio laoreet lorem. Bibendum cursus elit convallis-->
        <!--          leo quisque. Pretium in tellus vitae risus maecenas posuere. Morbi-->
        <!--          morbi massa leo tortor cras eget massa.-->
        <!--        </p>-->
        <p>
          Etiam sem in scelerisque diam vulputate. Gravida dolor mi dictumst
          nisi vitae suspendisse. Ultrices quam etiam viverra at. Massa
          adipiscing mi lectus pellentesque. Vel eleifend suspendisse purus sit
          at erat et. Nulla vestibulum nam curabitur aliquam id non. Facilisi
          amet amet eu nulla orci turpis in. Pretium interdum ipsum mollis neque
          risus purus. Malesuada nulla lectus non.
        </p>
      </div>

      <div
        class="w-full text-[#5C5C5C] md:flex flex-col justify-center md:flex-row justify-between"
      >
        <span class="mb-8 md:mb-0">
          Grand Maraboo Technologies Limited
          <span> &#169;2023 All rights reserved </span>
        </span>
        <span
          class="max-w-[15rem] text-white w-full md:inline-flex flex md:items-center md:mb-0 justify-between"
        >
          <a class="block md:mb-0">Privacy Policy</a>
          <a>Terms of Service</a>
        </span>
        <span class="hidden md:block text-white font-bold">
          Made in WAEMU by Africans
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped></style>

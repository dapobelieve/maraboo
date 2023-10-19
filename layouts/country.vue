<template>
  <div class="subpixel-antialiased bg-auto relative">
    <div class="flex flex-col items-center">
      <div class="w-full">
        <div class="fixed z-50 top-0 left-0 right-0  w-full px-5 sm:px-5 lg:px-10">
          <Nav :bg-transparent="true" />
        </div>
      </div>
    </div>
    <slot />
    <Footer />
  </div>
</template>
<style lang="scss">
html {
  scroll-behavior: smooth;
}

.show-modal  {
  overflow-y:auto; /* Hide vertical scrollbar */
  overflow-x:auto; /* Hide horizontal scrollbar */
}
</style>

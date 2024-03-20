<template>
  <div class="inline-flex items-center">
    <button
      class="inline-block mr-6 shadow-sm shadow-black flex justify-center items-center rounded-full w-20 bg-black h-20"
    >
      <svg
        width="25"
        height="18"
        viewBox="0 0 25 18"
        fill="none"
        class="rotate-90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9278 17.5157C14.6067 17.1928 14.4526 16.8027 14.4655 16.3453C14.4783 15.8879 14.6458 15.4978 14.9679 15.1749L19.5024 10.6143H1.60514C1.15035 10.6143 0.768865 10.4594 0.460679 10.1494C0.152494 9.83946 -0.00106454 9.45632 5.55409e-06 9C5.55409e-06 8.5426 0.154099 8.15892 0.462284 7.84897C0.77047 7.53901 1.15142 7.38457 1.60514 7.38565H19.5024L14.9278 2.78475C14.6067 2.46188 14.4462 2.07821 14.4462 1.63372C14.4462 1.18924 14.6067 0.806098 14.9278 0.484304C15.2488 0.161435 15.6303 0 16.0722 0C16.5142 0 16.8951 0.161435 17.2151 0.484304L24.5586 7.86996C24.7191 8.03139 24.833 8.20628 24.9005 8.39462C24.9679 8.58296 25.001 8.78475 25 9C25 9.21525 24.9663 9.41704 24.8988 9.60538C24.8314 9.79372 24.718 9.96861 24.5586 10.13L17.1749 17.5561C16.8807 17.852 16.5131 18 16.0722 18C15.6313 18 15.2499 17.8386 14.9278 17.5157Z"
          fill="white"
        />
      </svg>
    </button>
    <div class="font-bold">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
button {
  animation: bounce 3000ms infinite;
  animation-timing-function: ease;
}
</style>

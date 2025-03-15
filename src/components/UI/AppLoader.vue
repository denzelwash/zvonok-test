<template>
  <div class="loader">
    <div class="loader__figure"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(32, 121, 177, 0.5);
  z-index: 5000;
  backdrop-filter: blur(10px);
  &__figure {
    width: 100px;
    height: 100px;
    border: 4px solid #fff;
    border-bottom-color: #2079b1;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    @media (max-width: $lg) {
      width: 60px;
      height: 60px;
    }
    @media (max-width: $sm) {
      width: 28px;
      height: 28px;
    }
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

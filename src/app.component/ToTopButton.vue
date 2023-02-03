<template>
  <div @click="toTop">
    <img class="button-totop" src="../assets/icon/to-top.png" alt="Top" />
  </div>
</template>

<script>
export default {
  methods: {
    toTop() {
      // eslint-disable-next-line no-undef
      gsap.to(window, 0.1, {
        scrollTo: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  position: fixed;
  right: 18px;
  bottom: 105px;
  width: 50px;
}
</style>

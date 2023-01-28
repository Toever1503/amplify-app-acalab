<template>
  <div :style="{ width: width + 'px' }" class="button-nextpage">
    <router-link class="link-nextpage" :to="nextPage">{{ text }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    width: Number,
    nextPage: String,
  },
};
</script>
<style lang="scss" scoped>
.button-nextpage {
  height: 48px;
  background-color: #4b52ff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  padding: 0;

  .link-nextpage {
    display: block;
    text-decoration: none;
    color: #fff;
  }
}
</style>

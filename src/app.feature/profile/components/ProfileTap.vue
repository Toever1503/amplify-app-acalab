<template>
  <div class="tap-profile">
    <button
      v-for="(item, index) in items"
      :key="item"
      :class="{ active: tapNumber === index + 1 }"
      class="tap-item"
      @click="clickTap(index)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "교과 영역",
        "진로 영역",
        "자율 활동",
        "동아리 활동",
        "출결 및 행동특성",
        "2024 입시 정복✨",
      ],
    };
  },
  props: {
    tapNumber: Number,
  },
  methods: {
    clickTap(index) {
      const clickedTapNumber = index + 1;
      this.$emit("clickTap", clickedTapNumber);
    },
  },
};
</script>
<style lang="scss" scoped>
.tap-profile {
  width: 100%;
  display: flex;
  .tap-item {
    background-color: #fff;
    width: calc(100% / 6);
    height: 48px;
    border-style: none;
    border-bottom: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9;
    font-size: 18px;
    font-weight: 400;
    color: #666;
    &.active {
      color: #000;
      font-weight: 600;
      border-bottom: 3px solid #888cff;
    }
  }
}
</style>

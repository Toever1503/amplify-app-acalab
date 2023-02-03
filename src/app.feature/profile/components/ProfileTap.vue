<template>
  <div class="tap-profile">
    <button
      v-for="(item, index) in items"
      :key="item"
      :class="{ active: index + 1 === tapNumber }"
      class="tap-item"
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
};
</script>
<style lang="scss" scoped>
.tap-profile {
  display: flex;
  .tap-item {
    background-color: #fff;
    width: 150px;
    height: 48px;
    border-style: none;
    border-bottom: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9;
    color: #666;
    &.active {
      color: #000;
      font-weight: 600;
    }
  }
}
</style>

<template>
  <div class="step-bar">
    <div
      v-for="step in steps"
      :key="step"
      :class="{ active: stepNumber === step }"
      class="step-btn"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  props: {
    stepNumber: Number,
  },
};
</script>
<style lang="scss">
.step-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  .step-btn {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #d9d9d9;
    &.active {
      background-color: #2871fa;
    }
  }
}
</style>

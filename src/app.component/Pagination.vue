<template>
  <div class="pagination">
    <div class="prev">
      <div class="btn-prev">
        <RouterLink
          :to="prePage"
          v-if="!preButtonHover"
          @mouseover="preButtonOver"
          class="btn-prev:none"
        >
          <img src="/icon/btn-arrow.png" alt="이전으로" />
        </RouterLink>
        <RouterLink
          :to="prePage"
          v-if="preButtonHover"
          @mouseleave="preButtonLeave"
          class="btn-prev:hover"
        >
          <img src="/icon/btn-arrow-hover.png" alt="이전으로" />
        </RouterLink>
      </div>
      <span>이전으로</span>
    </div>
    <div class="next">
      <span>완료하셨나요?</span>
      <div class="btn-next">
        <RouterLink
          :to="nextPage"
          v-if="nextButtonHover"
          @mouseover="nextButtonOver"
          class="btn-prev:none"
        >
          <img src="/icon/btn-arrow.png" alt="다음으로" />
        </RouterLink>
        <RouterLink
          :to="nextPage"
          v-if="!nextButtonHover"
          @mouseleave="nextButtonLeave"
          class="btn-prev:hover"
        >
          <img src="/icon/btn-arrow-hover.png" alt="다음으로" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preButtonHover: false,
      nextButtonHover: false,
    };
  },
  props: {
    prePage: String,
    nextPage: String,
  },
  methods: {
    preButtonOver() {
      this.preButtonHover = !this.preButtonHover;
    },
    preButtonLeave() {
      this.preButtonHover = !this.preButtonHover;
    },
    nextButtonOver() {
      this.nextButtonHover = !this.nextButtonHover;
    },
    nextButtonLeave() {
      this.nextButtonHover = !this.nextButtonHover;
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  height: 61px;
  width: 1280px;
  position: absolute;
  top: 830px;
  left: 0;
  display: flex;
  span {
    font-size: 30px;
    line-height: 45px;
  }

  .prev {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: left;
    .btn-prev {
      margin-right: 20px;
      transform: rotate(180deg);
      cursor: pointer;
    }
  }
  .next {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: right;
    .btn-next {
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>

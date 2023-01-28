<template>
  <div class="pagination">
    <div class="prev">
      <div class="btn-prev">
        <RouterLink
          :to="prePage"
          v-if="preHere"
          @mouseover="preOver"
          class="btn-prev:none"
        >
          <img src="../assets/icon/btn-arrow.png" alt="none" />
        </RouterLink>
        <RouterLink
          :to="prePage"
          v-if="!preHere"
          @mouseleave="preLeave"
          class="btn-prev:hover"
        >
          <img src="../assets/icon/btn-arrow-hover.png" alt="none" />
        </RouterLink>
      </div>
      <span>이전으로</span>
    </div>
    <div class="next">
      <span>완료하셨나요?</span>
      <div class="btn-next">
        <RouterLink
          :to="nextPage"
          v-if="nextHere"
          @mouseover="nextOver"
          class="btn-prev:none"
        >
          <img src="../assets/icon/btn-arrow.png" alt="none" />
        </RouterLink>
        <RouterLink
          :to="nextPage"
          v-if="!nextHere"
          @mouseleave="nextLeave"
          class="btn-prev:hover"
        >
          <img src="../assets/icon/btn-arrow-hover.png" alt="none" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preHere: true,
      nextHere: true,
    };
  },
  props: {
    prePage: String,
    nextPage: String,
  },
  methods: {
    preOver() {
      this.preHere = !this.preHere;
    },
    preLeave() {
      this.preHere = !this.preHere;
    },
    nextOver() {
      this.nextHere = !this.nextHere;
    },
    nextLeave() {
      this.nextHere = !this.nextHere;
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

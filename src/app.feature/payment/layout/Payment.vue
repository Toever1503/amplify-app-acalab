<template>
<Header />
<TextView class="heading32" text="열람권 결제하기" color="#231D4F"/>
<div class="description-box">
  <div class="description-row" v-for="description in descriptions" :key="description">
    <img src="/icon/check-green.png" alt="체크">
    <TextView class="body16" :text="description" color="#1A1A1A" style="line-height: 150%;"/>
  </div>
</div>
<div class="whole-page">

</div>
</template>
<script>
import Header from "~/app.component/Header.vue";
import TextView from "~/app.component/TextView.vue";

export default {
  data() {
    return {
      descriptions: ["현재 자녀에게 가장 잘 맞는 합격생 프로필", "목표대학/목표학과에 합격한 선배의 내신과 세특", "서울대 출신 입시 컨설턴트들의 생생한 코멘트"]
    }
  },
  components: { Header,TextView },
};
</script>
<style lang="scss">
.whole-page {
  width: 100%;
  height: 740px;
  background: linear-gradient(180deg, #FFFFFF 0%, #FBF8FF 33.33%, #F0E4FF 77.6%, #E1ECFF 100%);
  .description-box {
    display: flex;
    gap: 12px;
    .description-row {
      display: flex;
      flex-direction: column;
      gap: 50px;
      img {
        width: 24px;
      }
    }
  }
}
</style>

<template>
  <Header />
  <div class="whole-page">
    <div class="content-container">
      <div class="top-container">
        <TextView class="heading32" text="열람권 결제하기" color="#231D4F" />
        <div class="description-box">
          <div
            class="description-row"
            v-for="description in descriptions"
            :key="description"
          >
            <img src="/icon/check-green.png" alt="체크" />
            <TextView
              class="body16"
              :text="description"
              color="#1A1A1A"
              style="line-height: 150%"
            />
          </div>
        </div>
      </div>
      <PackageItemBox />
      <div class="alert-text">
        <TextView
          class="body12"
          text="* 구매한 생기부는 구매일로부터 1년(365일) 동안 열람 가능합니다."
        />
        <TextView
          class="body12"
          text="* 미사용 열람권은 7일 이내에 환불신청을 할 수 있습니다."
        />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "~/app.component/Header.vue";
import TextView from "~/app.component/TextView.vue";
import PackageItemBox from "../components/PackageItemBox.vue";

export default {
  data() {
    return {
      descriptions: [
        "현재 자녀에게 가장 잘 맞는 합격생 프로필",
        "목표대학/목표학과에 합격한 선배의 내신과 세특",
        "서울대 출신 입시 컨설턴트들의 생생한 코멘트",
      ],
    };
  },
  components: { Header, TextView, PackageItemBox },
};
</script>
<style lang="scss">
.whole-page {
  width: 100%;
  height: 740px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #fbf8ff 33.33%,
    #f0e4ff 77.6%,
    #e1ecff 100%
  );
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 75%;
    min-width: 816px;
    max-width: 1080px;
    .top-container {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .description-box {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .description-row {
          display: flex;
          gap: 12px;
          img {
            width: 24px;
          }
        }
      }
    }
    .alert-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
}
</style>

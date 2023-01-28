<template>
  <div class="common-container">
    <h1>합격생 프로필</h1>
    <div class="common-info">
      <img
        src="../../../assets/icon/profileimg-yennie.png"
        alt="프로필 이미지"
      />
      <div class="common-middlebox">
        <div class="text-container">
          <div class="badge-box">
            <img src="../../../assets/icon/verif1.png" alt="본인인증 뱃지" />
            <img src="../../../assets/icon/verif2.png" alt="합격인증 뱃지" />
          </div>
          <TextView class="heading28" text="송예은" />
          <TextView class="strong16" text="서울대학교 경영학과 19학번" />
        </div>
        <TextView
          class="body16"
          text="저는 바보로서 서울대에 합격했습니다. 어떻게 했는지 궁금하지 않으세요?"
          style="line-height: 120%"
          :width="384"
          color="#4F4F4F"
        />
        <div class="box-purple">구매 완료!🎉</div>
      </div>
      <div class="common-lastbox">
        <p>경북 | 자사고&ensp;<span>졸업</span></p>
        <p>지원 대학</p>
        <div class="univs-box">
          <div v-for="univ in unives" :key="univ" class="univ-icon">
            {{ univ }}
          </div>
        </div>
      </div>
    </div>
    <div class="common-analyze">
      <TextView
        class="strong18"
        color="#2219e2"
        text="[총평]"
        style="margin-bottom: 8px"
      />
      <TextView
        class="body18"
        text="2024 대입부터 대입 평가요소는 크게 학업역량, 진로역량, 공동체 역량으로 나뉘어요."
        style="font-weight: 400"
      />
      <TextView
        class="body18"
        text="그·생에서는 이 세가지 기준점으로 합격생의 생기부를 분석해보았어요."
        style="font-weight: 400"
      />
      <TextView
        class="body18"
        text="해당 합격생은 전체평균 2.67로 1학년때부터 3학년 때까지 2등급과 3등급 사이에서 안정적인 내신 평균등급 추이를 보이고 있어요. 합격 대학교의 평균 등급컷과 비슷한 수준의 등급대를 보이는 것으로 보아, 합격에 학업에 대한 정량적인 평가가 유의미하게 반영이 되었다기 보단, 관련 과목과 기타 비교과활동에서 생명 및 화학 분야의 탁월성이 더 크게 반영되었을 확률이 높아요. 또한, 과목별 세특 및 행특, 게다가 창체 활동에서까지 거의 전 영역에서 학우들에게 솔선수범을 보이고, 도움을 주는 모습이 매번 드러나 학업, 진로, 공동체 삼박자가 모두 완벽히 들어맞는 생기부라고 할 수 있죠!"
        style="font-weight: 400"
      />
    </div>
  </div>
</template>

<script>
import TextView from "~/components/TextView.vue";

export default {
  components: {
    TextView,
  },
  data() {
    return {
      unives: ["서울대", "연세대", "고려대", "서강대", "성균관대", "한양대"],
    };
  },
};
</script>

<style lang="scss" scoped>
.common-container {
  width: 900px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h1 {
    color: #2219e2;
    font-size: 36px;
    line-height: 54px;
    font-weight: 600;
    margin: 0;
  }
  .common-info {
    display: flex;
    gap: 28px;
    justify-content: center;
    align-items: center;
    padding: 24px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    .common-middlebox {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .text-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .badge-box {
          display: flex;
          gap: 8px;
        }
      }
      .box-purple {
        background-color: #6815cd;
        width: 16rem;
        height: 3rem;
        border-radius: 10px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
    .common-lastbox {
      width: 176px;
      display: flex;
      flex-direction: column;
      margin: 0 16px;
      p {
        font-size: 20px;
        line-height: 150%;
        font-weight: 600;
        margin-bottom: 24px;
        &:nth-child(2) {
          margin-bottom: 0;
        }
        span {
          font-size: 18px;
          font-weight: 400;
        }
      }
      .univs-box {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        .univ-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: antiquewhite;
        }
      }
    }
  }
  .common-analyze {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    .body18:nth-child(3) {
      margin-bottom: 27px;
    }
  }
}
</style>

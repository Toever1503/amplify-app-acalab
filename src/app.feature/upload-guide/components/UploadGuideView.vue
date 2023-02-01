<template>
  <div class="section" :style="cssVariable">
    <div class="content-container">
      <TextView
        class="heading32 text-title"
        :text="`생기부 다운로드 방법 (${osType})`"
        color="#000"
      />
      <div
        class="body-container"
        :class="{
          gap104: (stepNumber === 5 || stepNumber === 6) && osType === 'mac',
          gap172: stepNumber === 7 && osType === 'mac',
        }"
      >
        <div class="text-container">
          <TextView
            class="heading32 text-step"
            :text="`Step${stepNumber}.`"
            color="#000"
          />
          <p class="text-guide" v-bind:innerHTML="guideText"></p>
          <a
            v-if="stepNumber === 1 && osType === 'mac'"
            href="https://www.gov.kr/nlogin/?Mcode=10003"
            target="_blank"
            role="button"
          >
            <img
              src="/icon/btn-jungboo24.png"
              alt="정부24 바로가기"
              class="img img-jungboo24"
            />
          </a>
          <a
            v-if="stepNumber === 1 && osType === 'windows'"
            href="https://www.neis.go.kr/pas_mms_nv99_001.do"
            target="_blank"
            role="button"
          >
            <img
              src="/icon/btn-nice.png"
              alt="나이스 바로가기"
              class="img img-nice"
            />
          </a>
          <div v-if="stepNumber === 1" class="text-alert">
            <span class="text-red">⚠️ 주의</span><br />
            <span class="meditext-gray"
              >• 꼭! 크롬이나 마이크로소프트 엣지를 사용해주세요.</span
            ><br />
            &ensp;&nbsp;<span class="lighttext-gray"
              >Internet Explorer로는 이용이 불가합니다.</span
            >
          </div>
          <TextView
            v-if="stepNumber === 4 && osType === 'windows'"
            class="body18"
            text="• 음성바코드 출력여부 '아니오'"
          />
          <TextView
            v-if="stepNumber === 4 && osType === 'windows'"
            class="body18"
            text="• 주민등록 표시여부 '생년월일'"
          />
        </div>
        <img
          :src="`/provider_site/${osType}/step${stepNumber}.png`"
          alt="step별이미지"
        />
        <UploadGuidePagination :stepNumber="stepNumber" />
      </div>
    </div>
    <div class="scroll-icon">
      <img src="/icon/chevron_down-gray.png" alt="스크롤 하기" />
    </div>
  </div>
</template>
<script>
import TextView from "../../../app.component/TextView.vue";
import UploadGuidePagination from "./UploadGuidePagination.vue";

export default {
  computed: {
    cssVariable() {
      return {
        "background-color": this.stepNumber % 2 === 1 ? "#f8f8ff" : "#fff",
      };
    },
  },
  components: {
    TextView,
    UploadGuidePagination,
  },
  props: {
    osType: String,
    guideText: String,
    stepNumber: Number,
  },
};
</script>
<style lang="scss">
.section {
  width: 100%;
  height: 100vh;
  background-color: var(background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .content-container {
    display: flex;
    gap: 6.25rem;
    flex-direction: column;
    align-items: flex-start;
    .body-container {
      display: flex;
      gap: 4rem;
      &.gap104 {
        gap: 6.5rem;
      }
      &.gap172 {
        gap: 10.75rem;
      }
      .text-container {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 8px;
        .text-guide {
          display: inline-block;
          width: 27.5rem;
          font-size: 1.5rem;
          line-height: 2.25rem;
          font-weight: 400;
          margin-bottom: 32px;
          .text-nb {
            color: #4b52ff;
          }
          .text-pp {
            color: #6815cd;
          }
        }
        a {
          width: 180px;
          img {
            width: 100%;
          }
        }

        .text-alert {
          display: inline-block;
          font-size: 0.75rem;
          line-height: 1.125rem;
          color: gray;
          .text-red {
            color: #ff001f;
          }
        }
      }
    }
  }
  .scroll-icon {
    position: absolute;
    bottom: 100px;
  }
}
.text-title {
  border-bottom: 4px solid #888cff;
}
</style>

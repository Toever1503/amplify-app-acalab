<template>
  <div class="overallreview-box">
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
    <TextView class="body18" :text="overallReview" style="font-weight: 400" />
  </div>
</template>
<script>
import TextView from "../../../app.component/TextView.vue";
import profileAnalyzedData from "../data/profileAnalyzedData";

export default {
  components: {
    TextView,
  },
  data() {
    const { overallReview } = profileAnalyzedData;

    return {
      overallReview,
    };
  },
};
</script>

<style lang="scss" scoped>
.overallreview-box {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  .body18:nth-child(3) {
    margin-bottom: 27px;
  }
}
</style>

<template>
  <div class="header-container">
    <img src="/icon/profileimg-yennie.png" alt="프로필 이미지" />
    <div class="header-middlebox">
      <div class="name-container">
        <div class="badge-box">
          <img src="/icon/verif1.png" alt="본인인증 뱃지" />
          <img src="/icon/verif2.png" alt="합격인증 뱃지" />
        </div>
        <TextView class="heading28" :text="nickName" />
        <TextView class="strong16" :text="enrolledUniversity" />
      </div>
      <TextView
        class="body16"
        :text="selfIntroduction"
        style="line-height: 120%"
        :width="384"
        color="#4F4F4F"
      />
      <div class="box-purple">구매 완료!🎉</div>
    </div>
    <div class="header-lastbox">
      <p>{{ region }} | {{ highschoolType }}&ensp;<span>졸업</span></p>
      <p>지원 대학</p>
      <div class="univs-box">
        <div
          v-for="univ in acceptedUniversitys"
          :key="univ"
          class="univ-icon accepted"
        >
          {{ univ }}
        </div>
        <div
          v-for="univ in rejectedUniversitys"
          :key="univ"
          class="univ-icon rejected"
        >
          {{ univ }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextView from "../../../app.component/TextView.vue";
import profileHeaderData from "../data/profileHeaderData";

export default {
  components: {
    TextView,
  },
  data() {
    const {
      nickName,
      enrolledUniversity,
      selfIntroduction,
      region,
      rejectedUniversitys,
      acceptedUniversitys,
      highschoolType,
    } = profileHeaderData;
    return {
      nickName,
      enrolledUniversity,
      selfIntroduction,
      region,
      rejectedUniversitys,
      acceptedUniversitys,
      highschoolType,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  gap: 28px;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  .header-middlebox {
    width: calc(384% / 9);
    display: flex;
    flex-direction: column;
    gap: 24px;
    .name-container {
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
  .header-lastbox {
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
        margin-bottom: 8px;
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
        &.accepted {
          background-color: antiquewhite;
        }
        &.rejected {
          background-color: gray;
        }
      }
    }
  }
}
</style>

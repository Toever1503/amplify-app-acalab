<template>
  <Header />
  <div class="common-container">
    <h1>합격생 프로필</h1>
    <ProfileHeaderView />
    <ProfileOverallReviewView />
  </div>
  <ProfileTap />
</template>

<script>
import Header from "../../../app.component/Header.vue";
import ProfileHeaderView from "../components/ProfileHeaderView.vue";
import ProfileOverallReviewView from "../components/ProfileOverallReviewView.vue";
import ProfileTap from "../components/ProfileTap.vue";

export default {
  components: {
    Header,
    ProfileHeaderView,
    ProfileTap,
    ProfileOverallReviewView,
  },
};
</script>
<style lang="scss">
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
}
</style>

<template>
  <Header />
  <div class="commoninfo-container">
    <h1>합격생 프로필</h1>
    <ProfileHeaderView />
    <ProfileOverallReviewView />
  </div>
  <div class="schoolrecord-container">
    <ProfileTap @clickTap="changeComponents" :tapNumber="tapNumber" />
    <component :is="currentTab" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Header from "../../../app.component/Header.vue";
import ProfileHeaderView from "../components/ProfileHeaderView.vue";
import ProfileOverallReviewView from "../components/ProfileOverallReviewView.vue";
import ProfileTap from "../components/ProfileTap.vue";

export default {
  data() {
    return {
      tapNumber: 1,
      tap: "ProfileCourseWorkView",
      // taps: ["ProfileCourseWorkView", "ProfileHopeCareerView"],
    };
  },
  components: {
    Header,
    ProfileHeaderView,
    ProfileTap,
    ProfileOverallReviewView,
  },
  computed: {
    currentTab() {
      return defineAsyncComponent(() =>
        import(`../components/${this.tap}.vue`)
      );
    },
  },
  methods: {
    changeComponents(clickedTapNumber) {
      this.tapNumber = clickedTapNumber;
    },
  },
};
</script>
<style lang="scss">
.commoninfo-container {
  max-width: 900px;
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
.schoolrecord-container {
  max-width: 900px;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="tab-profile">
    <button
      v-for="tab in tabs"
      :key="tab.tabText"
      :class="{ active: this.$store.state.profile.profileTab === tab.tabName }"
      class="tab-item"
      @click="changeCurrentTab(tab)"
    >
      {{ tab.tabText }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { tabName: "ProfileCourseWorkView", tabText: "교과 영역" },
        { tabName: "ProfileHopeCareerView", tabText: "진로 영역" },
        { tabName: "ProfileAutonomousActView", tabText: "자율 활동" },
        { tabName: "ProfileClubActView", tabText: "동아리 활동" },
        {
          tabName: "ProfileAttendanceAndBehaviorView",
          tabText: "출결 및 행동특성",
        },
        { tabName: "Profile2024TrendView", tabText: "2024 입시 정복✨" },
      ],
    };
  },
  methods: {
    changeCurrentTab(CurrentTab) {
      this.$store.commit("profile/changeCurrentTab", CurrentTab);
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-profile {
  width: 100%;
  display: flex;
  .tab-item {
    background-color: #fff;
    width: calc(100% / 6);
    height: 48px;
    border-style: none;
    border-bottom: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9;
    font-size: 18px;
    font-weight: 400;
    color: #666;
    &.active {
      color: #000;
      font-weight: 600;
      border-bottom: 3px solid #888cff;
    }
  }
}
</style>

<template>
  <Header />
  <div class="commoninfo-container">
    <h1>합격생 프로필</h1>
    <ProfileHeaderView />
    <ProfileOverallReviewView />
  </div>
  <div class="schoolrecord-container">
    <ProfileTab />
    <component :is="currentTab" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Header from "../../../app.component/Header.vue";
import ProfileHeaderView from "../components/ProfileHeaderView.vue";
import ProfileOverallReviewView from "../components/ProfileOverallReviewView.vue";
import ProfileTab from "../components/ProfileTab.vue";

export default {
  components: {
    Header,
    ProfileHeaderView,
    ProfileTab,
    ProfileOverallReviewView,
  },
  computed: {
    currentTab() {
      const currentComponent = this.$store.state.profile.profileTab;
      return defineAsyncComponent(() =>
        import(`../components/${currentComponent}.vue`)
      );
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

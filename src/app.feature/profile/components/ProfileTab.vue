<template>
  <div class="tab-profile">
    <button
      v-for="{ tabName, tabText } in tabItems"
      :key="tabText"
      :class="{ active: this.$store.state.profile.profileTab === tabName }"
      class="tab-item"
      @click="changeCurrentTab(tabName)"
    >
      {{ tabText }}
    </button>
  </div>
</template>

<script>
import profileTabItemData from "../data/profileTabItemData";

export default {
  data() {
    const tabItems = profileTabItemData;
    return {
      tabItems,
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

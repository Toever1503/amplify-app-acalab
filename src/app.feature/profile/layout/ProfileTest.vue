<template>
  <!-- <Header /> -->
  <!-- FIXME: change the header component name -->
  <ProfileCommonView />
  <ProfileTap />
</template>

<script>
// import Header from "~/components/Header.vue";
import ProfileCommonView from "../components/ProfileCommonView.vue";
import ProfileTap from "../components/ProfileTap.vue";

export default {
  components: {
    // Header,
    ProfileCommonView,
    ProfileTap,
  },
};
</script>

<template>
  <!-- <Header :style="styleObject" /> -->
  <!-- FIXME: use another name instead of header -->
  <div class="whole-page">
    <UploadGuideView
      v-for="step in steps"
      v-bind:key="step.step"
      :os-type="step.type"
      :guide-text="step.description"
      :step-number="step.step"
    ></UploadGuideView>
    <ToTopButton />
  </div>
  <UploadGuideFileUpload />
</template>
<script>
// import Header from "../../../app.component/Header.vue";  // FIXME: change the name of the component
import dummy from "../utils/uploadguide-data";
import UploadGuideView from "../components/UploadGuideView.vue";
import ToTopButton from "../../../app.component/ToTopButton.vue";
import UploadGuideFileUpload from "../components/UploadGuideFileUpload.vue";

export default {
  data() {
    return {
      steps: dummy("Windows"),
      styleObject: {
        position: "fixed",
      },
    };
  },
  components: {
    // Header,
    UploadGuideView,
    ToTopButton,
    UploadGuideFileUpload,
  },
};
</script>

<style lang="scss">
.whole-page {
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  .section {
    scroll-snap-align: start;
  }
}
</style>

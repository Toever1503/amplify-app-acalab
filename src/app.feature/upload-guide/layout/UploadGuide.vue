<template>
  <Header :style="styleObject" />
  <div class="whole-page">
    <UploadGuideView
      v-for="step in steps"
      v-bind:key="step.step"
      :os-type="step.type"
      :guide-text="step.description"
      :step-number="step.step"
    ></UploadGuideView>
  </div>
  <UploadGuideFileUpload />
</template>
<script>
import Header from "../../../app.component/Header.vue";
import uploadguideData from "../data/uploadguideData";
import UploadGuideView from "../components/UploadGuideView.vue";
import UploadGuideFileUpload from "../components/UploadGuideFileUpload.vue";

export default {
  data() {
    return {
      steps: uploadguideData("Windows"),
      styleObject: {
        position: "fixed",
      },
    };
  },
  components: {
    Header,
    UploadGuideView,
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

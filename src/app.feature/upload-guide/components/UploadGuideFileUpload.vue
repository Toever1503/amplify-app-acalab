<template>
  <div class="section">
    <div class="content-container">
      <div class="box-title">
        <TextView class="heading32" text="마지막으로," />
        <TextView class="heading32" text="다운받은 생기부를 업로드 해주세요!" />
      </div>
      <Dropzone @drop.prevent="drop" @change="selectedFile"></Dropzone>
      <div class="file-info" v-if="!!name">File : {{ dropzoneFile.name }}</div>
      <div class="box-text">
        <TextView class="heading24" text="잠깐!" />
        <div class="text-alert">
          <TextView
            class="body16"
            text="• 암호 해제가 되어 있나요?"
            color="#666"
            style="line-height: 120%"
          />
          <TextView
            class="body16"
            text="• 스캔본, 이미지 파일 안돼요. 꼭! PDF 파일로 업로드 해주세요."
            color="#666"
            style="line-height: 120%"
          />
        </div>
      </div>
      <PageButton
        class="button"
        text="업로드 완료하기"
        nextPage="/"
        :width="176"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TextView from "../../../app.component/TextView.vue";
import PageButton from "../../../app.component/PageButton.vue";
import Dropzone from "../../../app.component/Dropzone.vue";

export default {
  components: { TextView, PageButton, Dropzone },
  setup() {
    const dropzoneFile = ref("");

    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };

    return { dropzoneFile, drop, selectedFile };
  },
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .content-container {
    display: flex;
    gap: 1em;
    flex-direction: column;

    .box-title {
      display: flex;
      flex-direction: column;
    }
    .box-text {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      .text-alert {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>

<template>
  <div
    @dragenter.prevent="toggleAcitve"
    @dragleave.prevent="toggleAcitve"
    @drop.prevent="toggleAcitve"
    @dragover.prevent
    :class="{ 'active-dropzone': active }"
    class="dropzone"
  >
    <span>드래그하여 파일을 업로드하세요!</span>
    <span>또는</span>
    <label for="dropzoneFile">파일 선택</label>
    <input type="file" name="" id="dropzoneFile" class="dropzoneFile" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(false);
    const toggleAcitve = () => {
      active.value = !active.value;
    };
    return { active, toggleAcitve };
  },
};
</script>

<style lang="scss" scoped>
.dropzone {
  width: 720px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed #4b52ff;
  transition: 0.3s ease all;
  label {
    padding: 8px 12px;
    background-color: #4b52ff;
    transition: 0.3s ease all;
    color: #fff;
    border-radius: 5px;
  }
  #dropzoneFile {
    display: none;
  }
}
.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #888cff;
  label {
    background-color: #fff;
    color: #4b52ff;
  }
}
</style>

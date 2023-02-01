<template>
  <div class="input-row">
    <img emit src="/icon/delete-gray.png" alt="delete" @click="imgClick" />
    <VueMultiselect
      class="input-univ"
      v-model="valueUniv"
      :options="sourceUniv"
      placeholder="대학교를 입력해주세요!"
      :show-labels="false"
      @select="selectMajor"
    />
    <VueMultiselect
      class="input-major"
      v-model="valueMajor"
      :options="sourceMajor"
      placeholder="학과를 골라주세요!"
    />
    <VueMultiselect
      class="input-type"
      v-model="valueType"
      :options="sourceType"
      placeholder="전형을 골라주세요!"
    />
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";

export default {
  components: { VueMultiselect },
  data() {
    return {
      valueUniv: null,
      valueMajor: null,
      valueType: null,
      sourceUniv: ["1", "2", "3", "4"],
      sourceMajor: [],
      sourceMajor1: ["A", "B"],
      sourceMajor2: ["C", "D"],
      sourceType: [],
      sourceType1: ["a"],
      sourceType2: ["b"],
      sourceType3: ["c"],
      sourceType4: ["d"],
    };
  },
  props: {
    order: Number,
  },
  methods: {
    imgClick() {
      this.$emit("imgClick", this.order);
    },
  },
  updated() {
    if (this.valueUniv === "1") {
      this.sourceMajor = this.sourceMajor1;
    } else if (this.valueUniv === null) {
      this.sourceMajor = [];
    }
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css">
.input-univ {
  height: 20px;
}
</style>

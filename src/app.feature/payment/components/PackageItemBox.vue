<template>
  <div class="packages-box">
    <PackageItem
      v-for="{
        name,
        count,
        perPrice,
        discountPercent,
        totalDiscountPrice,
        totalUndiscountPrice,
      } in PackageListData"
      :key="name"
      class="package-box"
      :name="name"
      :count="count"
      :perPrice="perPrice"
      :discountPercent="discountPercent"
      :totalDiscountPrice="totalDiscountPrice"
      :totalUndiscountPrice="totalUndiscountPrice"
    >
    </PackageItem>
  </div>
</template>
<script>
import PackageItem from "./PackageItem.vue";
import PackageListData from "../data/PackageListData";

export default {
  data() {
    return {
      PackageListData,
    };
  },
  components: {
    PackageItem,
  },
  methods: {},
};
</script>
<style lang="scss">
.packages-box {
  width: 100%;
  min-width: 816px;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
}
</style>

<template>
<Header />
<div class="whole-page">

</div>
</template>
<script>
import Header from "~/app.component/Header.vue";
import TextView from "~/app.component/TextView.vue";

export default {
  components: { Header },
};
</script>
<style lang="scss" scoped>
.whole-page {
  width: 100%;
  height: 740px;
  background: linear-gradient(180deg, #FFFFFF 0%, #FBF8FF 33.33%, #F0E4FF 77.6%, #E1ECFF 100%);
}
</style>

<template>
  <p class="text" v-bind:style="{ color: color, width: width + 'px' }">
    {{ text }}
  </p>
</template>
<script>
export default {
  props: {
    text: String,
    color: String,
    width: Number,
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
.heading32 {
  display: inline-block;
  font-size: 2rem;
  line-height: 130%;
  font-weight: 700;
}
.heading28 {
  display: inline-block;
  font-size: 1.75rem;
  line-height: 130%;
  font-weight: 600;
}
.heading24 {
  display: inline-block;
  font-size: 1.5rem;
  line-height: 150%;
  font-weight: 600;
}
.strong18 {
  display: inline-block;
  font-size: 1.125rem;
  line-height: 150%;
  font-weight: 600;
}
.body18 {
  display: inline-block;
  font-size: 1.125rem;
  line-height: 150%;
  font-weight: 500;
}
.strong16 {
  display: inline-block;
  font-size: 1rem;
  line-height: 150%;
  font-weight: 600;
}
.body16 {
  display: inline-block;
  font-size: 1rem;
  line-height: 180%;
  font-weight: 400;
}
.body12 {
  display: inline-block;
  font-size: 0.75rem;
  line-height: 150%;
  font-weight: 400;
}
</style>

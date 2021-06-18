<template>
  <div>
    <footer class="header">
      <p class="text-m">made for fun. not commercial</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";
footer {
  width: 100%;
  height: 100px;
  background-color: $light-gray;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: $beige;
  }
}
@media (max-width: 768px) {
  footer {
    height: 54px;
  }
}
</style>

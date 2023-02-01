<template>
  <footer>
    <div class="logo">
      <img src="/header_logo_color.png" alt="로고" />
    </div>
    <address class="address">
      <div class="company-name">그들의 생기부</div>
      사업자 상호명: 아카랩 | 사업자 등록번호: 618-21-64339 | 대표: 이상연
      <br />
      사업장 소재지: 서울특별시 서초구 강남대로 369, 12층 15호(서초동,
      에이플러스에셋타워)
    </address>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  height: 200px;
  background-color: #f8f8f8;
  border-top: 1px solid #d7d7d7;
  .logo {
    margin-top: 40px;
    margin-left: 100px;
  }
  .address {
    padding-top: 50px;
    padding-left: 50px;
    color: #000;
    font-size: 13px;
    font-style: normal;
    line-height: 20px;
    padding-bottom: 50px;
    .company-name {
      color: #000;
      display: block;
      padding-bottom: 16px;
      font-size: 20px;
    }
  }
}
</style>

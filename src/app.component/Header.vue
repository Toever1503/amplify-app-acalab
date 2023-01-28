<template>
  <header>
    <div class="container">
      <Logo />
      <div class="nav">
        <div v-for="nav in navigations" v-bind:key="nav.name" class="nav__item">
          <RouterLink :to="nav.href" class="nav__link">
            {{ nav.name }}
          </RouterLink>
        </div>
      </div>
      <div class="box-login">
        <img src="../assets/icon/person-gray.png" alt="로그인" />
        <RouterLink class="link-login" to="/login"
          >로그인 | 회원 가입</RouterLink
        >
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      navigations: [
        {
          name: "왜 그들의 생기부 인가요?",
          href: "/1",
        },
        {
          name: "내게 맞는 합격생 찾기",
          href: "/2",
        },
        {
          name: "생기부 활용 가이드",
          href: "/3",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$gap: 5rem;
header {
  height: 80px;
  width: 100%;
  background: #fff;
  overflow: visible;
  border-bottom: 2px solid #888cff;
  z-index: 2;
  .container {
    height: 100%;
    display: flex; //추가적으로 반응형에 따른 조정이 필요
    align-items: center;
    justify-content: center;
    gap: $gap;
    .nav {
      height: 100%;
      display: flex;
      flex-wrap: nowrap; //추가적으로 반응형에 따른 조정이 필요
      justify-content: center;
      align-items: center;
      gap: $gap;
      .nav__item {
        text-align: center;
        width: 11rem;
        height: 1.5rem;
        .nav__link {
          color: #000;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          text-decoration: none; //자동으로 8,15가 되어있어서 일단 초기화, 피그마는 160인데 너무 큰듯 왜다르지?
        }
      }
    }
    .box-login {
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: center;
      .link-login {
        color: #828282;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }
}
</style>

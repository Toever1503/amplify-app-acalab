<template>
    <section class="test">

                <div v-on:click="kakaoLoginBtn">카카오 로그인</div>
                <div v-on:click="kakaoSignupBtn">카카오 회원가입 & 로그인</div>

    </section>
</template>
  
  <script>
 import { API } from "aws-amplify"; 
  export default {
    name: "test",
    async created() {
        if (window.Kakao) {
            const kakaoJSKey = '9792e35a0f009c91bb45069d78ce0eb4';
            window.Kakao.init(kakaoJSKey);
            console.log('kakao sdk initialized!!');
        } else {
             console.log('kakao sdk is not initialized!!');
         }
    },
  methods: {
    async kakaoSignupBtn() {
        const kakaoLoginOnSuccess = authObj => {
              let apiName = 'kakaologin'; // replace this with your api name.
              let path = '/items/kakao'; //replace this with the path you have configured on your API
              let myInit = {
                body: authObj, // replace this with attributes you need
              };
              API.post(apiName, path, myInit)
                .then(response => {
                  console.log('API.post response', response);
                })
                .catch(error => {
                  console.log('API error', error);
                });
            }
            window.Kakao.Auth.login({
              success: kakaoLoginOnSuccess,
              fail: function(err) {
                console.log('login failure!', err);
              },
            });
    },
    kakaoLoginBtn:function(){

      if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
          url: '/v1/user/unlink',
          success: function (response) {
            console.log(response)
          },
          fail: function (error) {
            console.log(error)
          },
        })
        window.Kakao.Auth.setAccessToken(undefined)
      }


      window.Kakao.Auth.login({
        success: function () {
          window.Kakao.API.request({
            url: '/v2/user/me',
            data: {
              property_keys: ["kakao_account.email"]
            },
            success: async function (response) {
              console.log(response);
            },
            fail: function (error) {
              console.log(error)
            },
          })
        },
        fail: function (error) {
          console.log(error)
        },
      })
    }
  }
}
  </script>
  
  <style scoped>
    .test{ display:flex; justify-content: center; align-items: center; height:100vh; }
    div{ width: 200px; height:40px; background-color:#fdd101; color:white; display:flex; align-items: center; justify-content: center; cursor:pointer; }
  </style>
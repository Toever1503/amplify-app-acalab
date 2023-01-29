<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useAuthStore } from '@/stores';
</script>

<template>
    <div class="card m-3">
        <h4 class="card-header">Login</h4>
        <div class="card-body">
          
            <div class="kakao" v-on:click="kakaoLoginBtn">카카오 로그인</div>
               
        </div>
    </div>
</template>


<script>
import { API } from "aws-amplify"; 
import { router } from '@/router'

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

      //if (token.access != null) { 
      //  this.$router.push({name: 'Profile'}).catch(() => {}); 
      //}
    },
  methods: {
  
    kakaoLoginBtn:function(){

      if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
          url: '/v1/user/unlink',
          success: function (response){
            console.log('연결끊기')
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
              console.log('로그인 성공');

              const authStore = useAuthStore();
              const { id, kakao_account } = response;
              await authStore.login(kakao_account);

              console.log(response);
              //router.push({ name: 'about'}); 
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
  .kakao { width: 200px; height:40px; background-color:#fdd101; color:white; display:flex; align-items: center; justify-content: center; cursor:pointer; }
</style>
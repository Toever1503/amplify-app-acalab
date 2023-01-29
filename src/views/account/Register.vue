<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useUsersStore, useAlertStore } from '@/stores';
import { router } from '@/router';
</script>

<template>
    <div class="card m-3">
        <h4 class="card-header">Register</h4>
        <div class="card-body">
          
            <div class="kakao" v-on:click="kakaoSignupBtn">카카오 회원가입</div>
               
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
   
  }
}
</script>
<style scoped>
  .kakao { width: 200px; height:40px; background-color:#fdd101; color:white; display:flex; align-items: center; justify-content: center; cursor:pointer; }
</style>
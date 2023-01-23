
<template>

    <div id="app">
       <h1>Member App</h1>
       <input type="text" v-model="nick" placeholder="Member nickname" />
       <input type="text" v-model="password" placeholder="Member password" />
       <input type="text" v-model="email" placeholder="Member email" />
       <input type="text" v-model="introLine" placeholder="Member introduction" />
       <input type="text" v-model="bankAccount" placeholder="No of bank account" />
       <button v-on:click="createMember">Create Member</button>
       <div v-for="item in members" :key="item.id">
         <h3>{{ item.nick }}</h3>
         <p>{{ item.introLine }}</p>
       </div>
     </div>



</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import { API } from 'aws-amplify';
import { createMember} from '../graphql/mutations';
import { listMembers} from '../graphql/queries';

export default {
name: 'App',
async created() {
this.getMembers();
},
data() {
return {
 nick : '',
 introLine: '',
 password: '',
 bankAccount : '',
 email: '',
 members: []
};
},
methods: {
async createMember() {
 const { nick, introLine, bankAccount, password, email } = this;
 if (!nick || !bankAccount || !password || !email) return;
 const member = { nick, introLine, bankAccount, password, email };
 this.members = [...this.members, member];
 await API.graphql({
   query: createMember,
   variables: { input: member}
 });
 this.nick = '';
 this.introLine = '';
 this.password = '';
 this.bankAccount = '';
 this.email = '';
},
async getMembers() {
 const members = await API.graphql({
   query: listMembers
 });
 this.members = members.data.listMembers.items;
}
}
};
</script>

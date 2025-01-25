<template>
     <div class="h-full w-full flex flex-col justify-end items-center">
          <div class="bg-black text-white nuke-text-body-02 lg:max-w-[40%] xs:w-full flex flex-col justify-center items-start
     px-64px py-32px gap-32px nuke-transition-productive-standard-fast-02 transition-all
">
               <h1 class="nuke-text-heading-04">> Signup</h1>
               <form @submit.prevent="handleSignup" class="flex flex-col justify-between gap-32px w-full">
                    <Input label="Email" id="email" type="email" v-model="email" required />
                    <Input label="Password" id="password" type="password" v-model="password" required />
                    <Input label="Confirm Password" id="confirmPassword" type="password" v-model="confirmPassword" required />
                    <NeutralButton type="submit">
                         Signup
                    </NeutralButton>
               </form>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../components/form-components/Input.vue';
import NeutralButton from "../../components/form-components/NeutralButton.vue";
import { signup } from '../../api/authentication';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleSignup = async () => {
     if (password.value !== confirmPassword.value) {
          alert('Passwords do not match');
          return;
     }

     try {
          const response = await signup(email.value, password.value);
          console.log('Signup successful:', response);
          // Handle successful signup (e.g., redirect to login page)
     } catch (error) {
          console.error('Signup failed:', error);
          alert('Signup failed. Please try again.');
     }
};
</script>

<style scoped lang="scss">

</style>
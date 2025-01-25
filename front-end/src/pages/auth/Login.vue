<template>
     <div class="h-full w-full flex flex-col justify-end items-center">
          <div class="bg-black text-white nuke-text-body-02 lg:max-w-[40%] xs:w-full flex flex-col justify-center items-start
     px-64px py-32px gap-32px
">
               <h1 class="nuke-text-heading-04">> Login</h1>
               <form @submit.prevent="handleLogin" class="flex flex-col justify-between gap-32px w-full">
                    <Input label="Email" id="email" type="email" v-model="email" required />
                    <Input label="Password" id="password" type="password" v-model="password" required />
                    <NeutralButton type="submit">
                         Login
                    </NeutralButton>
               </form>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../components/form-components/Input.vue';
import NeutralButton from "../../components/form-components/NeutralButton.vue";
import { login } from '../../api/authentication';

const email = ref('');
const password = ref('');

const handleLogin = async () => {
     try {
          const response = await login(email.value, password.value);
          console.log('Login successful:', response);
          // Handle successful login (e.g., redirect to dashboard)
     } catch (error) {
          console.error('Login failed:', error);
          alert('Login failed. Please try again.');
     }
};
</script>

<style scoped lang="scss">

</style>
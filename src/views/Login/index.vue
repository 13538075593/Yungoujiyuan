<template>
  <div class="login-container w-full h-full">
    <div class="form-box h-full bg-white pl-40 pr-40">
      <div class="form-header text-center fs-32 bold mb-50">{{ $t('login.formHead') }}</div>
      <el-form :model="ruleForm" label-position="top">
        <el-form-item :label="$t('login.accountInputLabel')" prop="account">
          <el-input type="text" v-model="ruleForm.account" prefix-icon="User" />
        </el-form-item>
        <el-form-item :label="$t('login.passwordInputLabel')" prop="password">
          <el-input type="password" v-model="ruleForm.password" prefix-icon="Lock" />
        </el-form-item>
        <div>
          <el-button class="w-full" type="primary" size="large" @click="handleLogin">{{ $t('common.button.confirm') }}</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const ruleForm = reactive({
  account: '',
  password: '',
});



const form = ref({
  username: '',
  password: ''
})

const handleLogin = () => {
  console.log('登录信息:', form.value)
  router.push('/')
}
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #d7d7d7;
  
  .form-box {
    width: 450px;
    margin: 0 0 0 auto;
    padding-top: 20vh;
    
  }
}
</style>
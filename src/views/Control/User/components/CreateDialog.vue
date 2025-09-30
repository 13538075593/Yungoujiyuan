<template>
  <div>
    <el-dialog
      v-model="visible"
      :title="$t('control.user.createUser')"
      top="10vh"
      width="350px"
      draggable
    >
      <div class="form-box">
        <el-form :model="ruleForm" label-position="top">
          <el-form-item :label="$t('control.user.nameLabel')" prop="siteName">
            <el-input v-model="ruleForm.siteName" type="text" clearable :placeholder="$t('common.pleaseInput')" />
          </el-form-item>
          <el-form-item :label="$t('control.user.accountLabel')" prop="siteName">
            <el-input v-model="ruleForm.siteName" type="text" clearable :placeholder="$t('common.pleaseInput')">
              <template #prepend>superx-</template>
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('control.user.passwordLabel')" prop="siteName">
            <el-input v-model="ruleForm.siteName" type="password" clearable :placeholder="$t('common.pleaseInput')" />
          </el-form-item>
          <el-form-item :label="$t('control.user.role')" prop="siteName">
            <el-select v-model="ruleForm.siteName" type="text" :placeholder="$t('common.pleaseInput')" filterable clearable>
              <el-option label="选项A" value="1" />
              <el-option label="选项B" value="2" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <div class="text-center">
          <el-button @click="visible = false">{{ $t('common.button.cancel') }}</el-button>
          <el-button type="primary" @click="submitForm">{{ $t('common.button.confirm') }}</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick } from 'vue';

const visible = ref(false);
const ruleForm = reactive({
  siteName: '',
  code: '',
  radio1: '1',
  topUpChannel: [],
});


const submitForm = () => {
}

const show = (data: any) => {
  visible.value = true;
  nextTick(() => {
    console.log(data);
  });
}

defineExpose({
  show
})
</script>

<style lang="scss" scoped>
.form-box {
  max-height: 600px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
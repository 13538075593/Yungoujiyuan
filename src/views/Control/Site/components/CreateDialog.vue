<template>
  <div>
    <el-dialog
      v-model="visible"
      :title="$t('control.site.createSite')"
      top="10vh"
      width="680px"
      draggable
    >
      <div class="form-box">
        <el-form :model="ruleForm" label-position="top">
          <!-- 基本信息 -->
          <el-row :gutter="40">
            <el-col :span="24">
              <div class="part-title">{{ $t('control.site.baseInfomation') }}</div>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('control.site.siteName')" prop="siteName">
                <el-input v-model="ruleForm.siteName" type="text" clearable :placeholder="$t('common.pleaseInput')" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('control.site.code')" prop="code">
                <el-input v-model="ruleForm.code" type="text" clearable :placeholder="$t('common.pleaseInput')" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item :label="$t('control.site.siteLogo')" prop="code">
                <el-upload
                  class="avatar-uploader"
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('control.site.outsource')" prop="code">
                <el-radio-group v-model="ruleForm.radio1">
                  <el-radio value="2">{{ $t('common.no') }}</el-radio>
                  <el-radio value="1">{{ $t('common.yes') }}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('control.site.is2fa')" prop="code">
                <el-radio-group v-model="ruleForm.radio1">
                  <el-radio value="2">{{ $t('common.no') }}</el-radio>
                  <el-radio value="1">{{ $t('common.yes') }}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
    
          <!-- 站点管理员信息 -->
          <el-row class="mt-20" :gutter="40">
            <el-col :span="24">
              <div class="part-title">{{ $t('control.site.siteManageInfomation') }}</div>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('control.site.siteManageName')" prop="siteName">
                <el-input v-model="ruleForm.siteName" type="text" :placeholder="$t('common.pleaseInput')" clearable />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('control.site.siteManageAccount')" prop="code">
                <el-input v-model="ruleForm.code" type="text" :placeholder="$t('common.pleaseInput')" clearable />
              </el-form-item>
            </el-col>
          </el-row>

          <!-- 游戏配置 -->
          <el-row class="mt-20" :gutter="40">
            <el-col :span="24">
              <div class="part-title">{{ $t('control.site.gameConfiguration') }}</div>
            </el-col>
            <el-col :span="24">
              <el-form-item :label="$t('control.site.pleaseSelectVenues')" prop="siteName">
                <el-table :data="venueList" border>
                  <el-table-column type="selection" width="50" align="center" />
                  <el-table-column :label="$t('control.site.venueName')" prop="name" />
                  <el-table-column :label="$t('control.site.venueRates')">
                    <template #default="{ row }">
                      <el-input-number v-model="row.rate" :max="99.9" :precision="1">
                        <template #suffix>%</template>
                      </el-input-number>
                    </template>
                  </el-table-column>
                </el-table>
              </el-form-item>
            </el-col>
          </el-row>

          <!-- 财务配置 -->
          <el-row class="mt-20" :gutter="40">
            <el-col :span="24">
              <div class="part-title">{{ $t('control.site.financialConfiguration') }}</div>
            </el-col>
            <el-col :span="24">
              <el-form-item :label="$t('control.site.topUpChannel')" prop="siteName">
                <el-checkbox-group v-model="ruleForm.topUpChannel">
                  <el-checkbox label="渠道 A" value="Value A" />
                  <el-checkbox label="渠道 B" value="Value B" />
                </el-checkbox-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item :label="$t('control.site.availableCurrencies')" prop="siteName">
                <el-checkbox-group v-model="ruleForm.topUpChannel">
                  <el-checkbox label="USDT" value="Value A" />
                  <el-checkbox label="INR" value="Value B" />
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-row>

          <!-- 商务信息 -->
          <el-row class="mt-20" :gutter="40">
            <el-col :span="24">
              <div class="part-title">{{ $t('control.site.businessInformation') }}</div>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('control.site.contactPerson')" prop="siteName">
                <el-input v-model="ruleForm.siteName" type="text" :placeholder="$t('common.pleaseInput')" clearable />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('control.site.contactTelegram')" prop="code">
                <el-input v-model="ruleForm.code" type="text" :placeholder="$t('common.pleaseInput')" clearable />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('control.site.contactGroupNumber')" prop="code">
                <el-input v-model="ruleForm.code" type="text" :placeholder="$t('common.pleaseInput')" clearable />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <template #footer>
        <div class="text-center">
          <el-button @click="visible = false">{{ $t('common.button.cancel') }}</el-button>
          <el-button type="primary" @click="showPass">{{ $t('common.button.confirm') }}</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 开设站点成功后显示账号、密码 -->
    <ShowPassDialog ref="showPassDialogRef" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick, useTemplateRef } from 'vue';
import type { UploadProps } from 'element-plus';
import ShowPassDialog from "./ShowPassDialog.vue";

const showPassDialogRef = useTemplateRef('showPassDialogRef');
const visible = ref(false);
const ruleForm = reactive({
  siteName: '',
  code: '',
  radio1: '1',
  topUpChannel: [],
});
const venueList = ref([
  {
    id: 1,
    name: 'PG',
    rate: 20,
  }
])

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    // ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    // ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}


const show = (data: any) => {
  visible.value = true;
  nextTick(() => {
    console.log(data);
  });
}

// 弹出账号、密码
const showPass = () => {
  showPassDialogRef.value?.show(1);
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
  .part-title {
    color: var(--el-color-primary);
    font-size: 16px;
    position: relative;
    padding-left: 10px;
    line-height: 20px;
    margin-bottom: 20px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 2px;
      bottom: 2px;
      width: 3px;
      background-color: var(--el-color-primary);
    }
  }
}
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>
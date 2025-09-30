<template>
  <div>
    <el-dialog
      v-model="visible"
      :title="$t('control.venue.editDialogTitle')"
      top="10vh"
      width="800px"
      draggable
    >
      <el-form :model="ruleForm" label-position="top">
        <el-form-item class="w-300" :label="$t('control.venue.venueRates')" prop="siteName">
          <el-input-number
            class="w-full"
            v-model="ruleForm.rates"
            :min="0.1"
            :max="99.9"
            :precision="1"
            :placeholder="$t('control.venue.venueRatesPlaceholder')"
          >
            <template #suffix>%</template>
          </el-input-number>
        </el-form-item>
        <el-form-item :label="$t('control.venue.icon')" prop="siteName">
          <div>
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
            <div class="fs-12">点击上传图片，格式为JPG,PNG</div>
          </div>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" border max-height="300px">
        <el-table-column :label="$t('control.venue.gameName')" prop="gameName" />
        <el-table-column :label="$t('control.venue.gameID')" prop="gameId" />
        <el-table-column :label="$t('control.venue.adaptTerminal')" prop="adaptTerminal" />
        <el-table-column :label="$t('control.venue.gameGenre')" prop="gameGenre" />
        <el-table-column :label="$t('common.status')" prop="status" />
        <el-table-column :label="$t('common.operation')" width="180">
          <template #default>
            <el-button type="primary" link>{{ $t('common.button.disabled') }}</el-button>
            <el-button type="primary" link>{{ $t('common.button.enable') }}</el-button>
            <el-button type="primary" link>{{ $t('common.button.safeguard') }}</el-button>
          </template>
        </el-table-column>
      </el-table>

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
import type { UploadProps } from 'element-plus';

const visible = ref(true);
const ruleForm = reactive({
  rates: 10,
  siteName: '',
  code: '',
  radio1: '1',
  topUpChannel: [],
});

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
const tableData = ref([
  {
    gameName: 'xxxx',
    gameId: 'aa',
    adaptTerminal: 'PC,android,ios,h5',
    gameGenre: 'slots',
    status: 1
  }
]);


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

<style>
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}
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
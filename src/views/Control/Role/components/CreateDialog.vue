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
          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item :label="$t('control.role.roleName')" prop="siteName">
                <el-input v-model="ruleForm.siteName" type="text" clearable :placeholder="$t('common.pleaseInput')" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('control.role.roleID')" prop="code">
                <el-input v-model="ruleForm.code" type="text" clearable :placeholder="$t('common.pleaseInput')" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item :label="$t('control.role.menuPermission')" prop="code">
                <el-tree
                  ref="treeRef"
                  style="width: 100%;"
                  :data="treeData"
                  show-checkbox
                  node-key="id"
                  :props="defaultProps"
                />
              </el-form-item>
            </el-col>
          </el-row>
    
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
import { reactive, ref, nextTick, useTemplateRef } from 'vue';

const treeRef = useTemplateRef('treeRef');
const visible = ref(true);
const ruleForm = reactive({
  siteName: '',
  code: '',
  radio1: '1',
  topUpChannel: [],
});
const defaultProps = {
  children: 'children',
  label: 'label',
}
const treeData = [
  {
    id: 1,
    label: '会员',
    children: [
      {
        id: 4,
        label: '会员管理',
        children: [
          {
            id: 10,
            label: '查看',
          },
          {
            id: 11,
            label: '编辑',
          },
          {
            id: 12,
            label: '审批',
          },
          {
            id: 13,
            label: '管控',
          },
        ],
      },
    ],
  },
];

const submitForm = () => {
  const chedkedNodes = treeRef.value?.getCheckedKeys();
  console.log(chedkedNodes)
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
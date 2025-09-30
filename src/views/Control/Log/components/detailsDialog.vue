<template>
  <div>
    <el-dialog
      v-model="visible"
      :title="$t('control.log.detailsDialogTitle')"
      top="10vh"
      width="800px"
      draggable
    >
      <el-descriptions :column="2" border>
        <el-descriptions-item :label="$t('control.log.operationTimeConditionLabel')">2025-11-11 08:00:00</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.nameOfAffiliatedSite')">XXXXX</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.siteCode')">XXXXX</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.userNameConditionLabel')">XXXXX</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.userAccount')">XXXXX</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.ip')">192.168.101.86</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.ipCity')">广东省深圳市</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.deviceNumber')">1234567890</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.operationObject')">1234567890</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.operationID')">1234567890</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.operationTypeConditionLabel')">编辑</el-descriptions-item>
        <el-descriptions-item :label="$t('control.log.operationResultConditionLabel')">成功</el-descriptions-item>
      </el-descriptions>
      <div class="mt-20">
        <div>{{ $t('control.log.failMessage') }}</div>
        <div class="border-box">404</div>
      </div>
      <div class="mt-20">
        <div>{{ $t('control.log.requestPayload') }}</div>
        <pre class="border-box">{a:1, pn:1}</pre>
      </div>

      <template #footer>
        <div class="text-center">
          <el-button @click="visible = false">{{ $t('common.button.cancel') }}</el-button>
          <el-button type="primary" @click="visible = false">{{ $t('common.button.confirm') }}</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick } from 'vue';

const visible = ref(false);


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
.border-box {
  border: 1px solid var(--el-border-color-lighter);
  padding: 5px 10px;
  min-height: 80px;
  max-height: 200px;
  overflow: auto;
}
</style>

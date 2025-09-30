<template>
  <div>
    <el-dialog
      v-model="visible"
      :title="$t('control.user.whiteListDialogTitle')"
      top="10vh"
      width="500px"
      draggable
    >
      <div class="mb-10">
        <el-button type="primary" @click="add">新增</el-button>
      </div>
      <el-table :data="tableData" border height="400px">
        <el-table-column label="白名单类型">
          <template #default="{ row }">
            <el-select v-model="row.type">
              <el-option label="设备号" :value="1" />
              <el-option label="IP" :value="2" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="值">
          <template #default="{ row }">
            <el-input v-model="row.value" clearable />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="80">
          <template #default="{ row }">
            <el-button type="danger" link icon="Remove" />
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

const visible = ref(true);
const tableData = ref([
  { type: 1, value: '' },
  { type: 2, value: '' },
]);

const add = () => {
  tableData.value.push({
    type: 1,
    value: ''
  });
}
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

</style>
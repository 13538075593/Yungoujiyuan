<template>
  <div class="h-full flex-column">
    <el-form class="search-box" ref="searchFormRef" :model="searchForm" label-position="top">
      <el-row :gutter="30">
        <el-col :span="4">
          <el-form-item :label="$t('control.venue.venueNameConditionLabel')" prop="site">
            <el-input v-model="searchForm.site" :placeholder="$t('control.venue.venueNameConditionPlaceholder')" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item :label="$t('control.venue.venueStatusCondotionLabel')" prop="site">
            <el-select v-model="searchForm.site" :placeholder="$t('common.pleaseSelect')" clearable filterable>
              <el-option :label="$t('common.button.enable')"  :value="1" />
              <el-option :label="$t('common.button.disabled')"  :value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <div class="query-button">
            <el-button type="primary" :disabled="tableLoading" @click="getTableData">{{ $t('common.button.query') }}</el-button>
            <el-button :disabled="tableLoading" @click="resetTableData">{{ $t('common.button.reset') }}</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <div class="table-box flex-1 flex-column" v-loading="tableLoading">
      <div class="table flex-1 ovh">
        <el-table :data="tableData" border height="100%">
          <el-table-column type="index" :label="$t('common.indexNumber')" width="55" align="center" />
          <el-table-column :label="$t('control.venue.venueNameConditionLabel')" prop="siteName" />
          <el-table-column :label="$t('control.venue.icon')" prop="host" />
          <el-table-column :label="$t('control.venue.allGameCount')" prop="host" />
          <el-table-column :label="$t('control.venue.enableGameCount')" prop="host" />
          <el-table-column :label="$t('control.venue.connectionTime')" prop="host" />
          <el-table-column :label="$t('control.venue.venueRates')" prop="host" />

          <el-table-column :label="$t('common.updater')" prop="host" />
          <el-table-column :label="$t('common.updateTime')" prop="host" />
          <el-table-column :label="$t('control.venue.venueStatus')" prop="host" />
          <el-table-column :label="$t('common.operation')" width="180">
            <template #default>
              <el-button type="primary" link>{{ $t('common.button.disabled') }}</el-button>
              <el-button type="primary" link>{{ $t('common.button.enable') }}</el-button>
              <el-button type="primary" link @click="editDialogRef?.show(1)">{{ $t('common.button.edit') }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="table-pagination-box">
        <Pagination
        v-model:current-page="pn"
        v-model:page-size="ps"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <!-- 编辑弹窗 -->
    <EditDialog ref="editDialogRef" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useTemplateRef } from 'vue';
import EditDialog from './components/EditDialog.vue';
// import { useRouter } from 'vue-router';

const searchFormRef = useTemplateRef('searchFormRef');
const editDialogRef = useTemplateRef('editDialogRef');

const searchForm = reactive({
  operationDate: [],
  site: '',
  outsource: '2'
});

const tableData = ref<any>(Array.from({ length: 20 }).map((_, i) => ({
  id: 1,
  code: '001',
  siteName: 'SuperX',
  host: 'www.baidu.com',
  outsource: '1',
  masterName: '张三',
  manageAccount: 'SuperX-110',
  updateTime: '2025-09-29',
  updater: '-',
  status: 1,
})));

const ps = ref(100);
const pn = ref(1);
const total = ref(1000);
const tableLoading = ref(false);
const handleSizeChange = (size: number) => {
  console.log(size, ps.value);
}
const handleCurrentChange = (page: number) => {
  console.log(page);
}
const getTableData = () => {
  if (tableLoading.value) {
    return;
  }
  tableLoading.value = true;

  setTimeout(() => {
    tableLoading.value = false;
  }, 1000)
}
const resetTableData = () => {
  pn.value = 1;
  searchFormRef.value?.resetFields();
  getTableData();
}


// const router = useRouter();
// const to = (path: string) => {
//   router.push({
//     path: path
//   });
// }
</script>
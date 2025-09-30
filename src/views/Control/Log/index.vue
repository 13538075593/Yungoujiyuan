<template>
  <div class="h-full flex-column">
    <el-form class="search-box" ref="searchFormRef" :model="searchForm" label-position="top">
      <el-row :gutter="30">
        <el-col :span="4">
          <el-form-item :label="$t('control.log.operationTimeConditionLabel')" prop="site">
            <el-date-picker
              v-model="searchForm.operationDate"
              type="daterange"
              :range-separator="$t('common.to')"
              :start-placeholder="$t('common.startDate')"
              :end-placeholder="$t('common.endDate')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item :label="$t('control.log.userNameConditionLabel')" prop="site">
            <el-input v-model="searchForm.site" :placeholder="$t('control.log.userNameConditionPlaceholder')" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item :label="$t('control.log.siteConditionLabel')" prop="site">
            <el-input v-model="searchForm.site" :placeholder="$t('control.log.siteConditionPlaceholder')" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item :label="$t('control.log.operationTypeConditionLabel')" prop="site">
            <el-select v-model="searchForm.site" :placeholder="$t('common.pleaseSelect')" clearable filterable>
              <el-option :label="$t('common.button.edit')"  :value="1" />
              <el-option :label="$t('common.button.del')"  :value="2" />
              <el-option :label="$t('common.button.control')"  :value="3" />
              <el-option :label="$t('common.button.login')"  :value="4" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item :label="$t('control.log.operationResultConditionLabel')" prop="site">
            <el-select v-model="searchForm.site" :placeholder="$t('common.pleaseSelect')" clearable filterable>
              <el-option :label="$t('common.success')"  :value="1" />
              <el-option :label="$t('common.fail')"  :value="2" />
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
          <el-table-column :label="$t('control.log.operationTimeConditionLabel')" prop="siteName" />
          <el-table-column :label="$t('control.log.userNameConditionLabel')" prop="host" />
          <el-table-column :label="$t('control.log.nameOfAffiliatedSite')" prop="host" />
          <el-table-column :label="$t('control.log.operationObject')" prop="host" />
          <el-table-column :label="$t('control.log.operationTypeConditionLabel')" prop="host" />
          <el-table-column :label="$t('control.log.operationResultConditionLabel')" prop="host" />
          <el-table-column :label="$t('control.log.failMessage')" prop="host" />
          <el-table-column :label="$t('control.log.ip')" prop="host" />
          <el-table-column :label="$t('control.log.ipCity')" prop="host" />
          <el-table-column :label="$t('control.log.deviceNumber')" prop="host" />
          <el-table-column :label="$t('common.operation')" width="80">
            <template #default>
              <el-button type="primary" link @click="detailsDialogRef?.show(1)">{{ $t('common.button.detail') }}</el-button>
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

    <!-- 白名单弹窗 -->
    <DetailsDialog ref="detailsDialogRef" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useTemplateRef } from 'vue';
import DetailsDialog from './components/detailsDialog.vue';
// import { useRouter } from 'vue-router';

const searchFormRef = useTemplateRef('searchFormRef');
const detailsDialogRef = useTemplateRef('detailsDialogRef');

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
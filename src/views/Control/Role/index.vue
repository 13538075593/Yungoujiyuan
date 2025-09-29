<template>
  <div class="h-full flex-column">
    <el-form class="search-box" ref="searchFormRef" :model="searchForm" label-position="top">
      <el-row :gutter="30">
        <el-col :span="4">
          <el-form-item :label="$t('control.role.roleConditionLabel')" prop="site">
            <el-input
              type="text"
              v-model="searchForm.site"
              :placeholder="$t('control.role.roleConditionPlaceholder')"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <div class="query-button">
            <el-button type="primary" :disabled="tableLoading" @click="getTableData">{{ $t('common.button.query') }}</el-button>
            <el-button :disabled="tableLoading" @click="resetTableData">{{ $t('common.button.reset') }}</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <div class="btns-row">
      <el-button type="primary" @click="createDialogRef?.show(1)">{{ $t('common.button.create') }}</el-button>
    </div>

    <div class="table-box flex-1 flex-column" v-loading="tableLoading">
      <div class="table flex-1 ovh">
        <el-table :data="tableData" border height="100%">
          <el-table-column type="index" :label="$t('common.indexNumber')" width="55" align="center" />
          <el-table-column :label="$t('control.role.roleName')" prop="siteName" />
          <el-table-column :label="$t('control.role.roleID')" prop="host" />
          <el-table-column :label="$t('common.updateTime')" prop="updateTime" />
          <el-table-column :label="$t('common.updater')" prop="updater" />
          <el-table-column :label="$t('common.status')" prop="code" />
          <el-table-column :label="$t('common.operation')" width="250">
            <template #default>
              <el-button type="primary" link >编辑</el-button>
              <el-button type="primary" link>开启</el-button>
              <!-- <el-button type="primary" link>停用</el-button> -->
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

    <!-- 新增、编辑弹窗 -->
    <CreateDialog ref="createDialogRef" />

    <!-- 重置密码后展示密码的弹窗 -->
    <!-- <ShowPassDialog ref="showPassDialogRef" /> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useTemplateRef } from 'vue';
import CreateDialog from './components/CreateDialog.vue';
// import ShowPassDialog from "./components/ShowPassDialog.vue";
// import { useRouter } from 'vue-router';

const searchFormRef = useTemplateRef('searchFormRef');
const createDialogRef = useTemplateRef('createDialogRef');
// const showPassDialogRef = useTemplateRef('showPassDialogRef');

const searchForm = reactive({
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
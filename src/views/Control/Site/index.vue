<template>
  <div class="h-full flex-column">
    <el-form class="search-box" :model="searchForm" label-position="top">
      <el-row :gutter="30">
        <el-col :span="4">
          <el-form-item :label="$t('common.site')" prop="site">
            <el-input
              type="text"
              v-model="searchForm.site"
              :placeholder="$t('control.site.siteConditionPlaceholder')"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item :label="$t('control.site.outsource')" prop="outsource">
            <el-select v-model="searchForm.outsource">
              <el-option :label="$t('common.all')" value="2" />
              <el-option :label="$t('common.yes')" value="1" />
              <el-option :label="$t('common.no')" value="0" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div class="btns-row">
      <el-button type="primary" @click="createDialogRef?.show(1)">{{ $t('control.site.button.create') }}</el-button>
    </div>

    <div class="table-box flex-1 flex-column">
      <div class="table flex-1 ovh">
        <el-table :data="tableData" border height="100%">
          <el-table-column type="index" :label="$t('common.indexNumber')" width="55" align="center" />
          <el-table-column :label="$t('control.site.code')" prop="code" />
          <el-table-column :label="$t('control.site.siteName')" prop="siteName" />
          <el-table-column :label="$t('control.site.host')" prop="host" />
          <el-table-column :label="$t('control.site.outsource')" prop="outsource" />
          <el-table-column :label="$t('control.site.masterName')" prop="masterName" />
          <el-table-column :label="$t('control.site.manageAccount')" prop="manageAccount" />
          <el-table-column :label="$t('common.updateTime')" prop="updateTime" />
          <el-table-column :label="$t('common.updater')" prop="updater" />
          <el-table-column :label="$t('common.status')" prop="code" />
          <el-table-column :label="$t('common.operation')" width="250">
            <template #default="{ row }">
              <el-button type="primary" link @click="createDialogRef?.show(1)">编辑</el-button>
              <el-button type="primary" link @click="resetPassword">重置密码</el-button>
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
    <ShowPassDialog ref="showPassDialogRef" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useTemplateRef } from 'vue';
import CreateDialog from './components/CreateDialog.vue';
import ShowPassDialog from "./components/ShowPassDialog.vue";
import { useRouter } from 'vue-router';

const createDialogRef = useTemplateRef('createDialogRef');
const showPassDialogRef = useTemplateRef('showPassDialogRef');

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
const handleSizeChange = (size: number) => {
  console.log(size, ps.value);
}
const handleCurrentChange = (page: number) => {
  console.log(page);
}
const resetPassword = () => {
  showPassDialogRef.value?.show(1);
}

const router = useRouter();

const to = (path: string) => {
  router.push({
    path: path
  });
}
</script>
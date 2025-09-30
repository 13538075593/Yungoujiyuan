<template>
  <div class="h-full flex-column">
    <el-form class="search-box" ref="searchFormRef" :model="searchForm" label-position="top">
      <el-row :gutter="30">
        <el-col :span="4">
          <el-form-item :label="$t('control.menu.menuConditionLabel')" prop="keyword">
            <el-input
              v-model="searchForm.keyword"
              :placeholder="$t('control.menu.menuConditionPlaceholder')"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item :label="$t('control.menu.statusConditionLabel')" prop="status">
            <el-select v-model="searchForm.status" :placeholder="$t('common.all')" clearable filterable>
              <el-option :label="$t('common.all')" :value="''" />
              <el-option :label="$t('common.button.enable')" :value="1" />
              <el-option :label="$t('common.button.disabled')" :value="0" />
            </el-select>
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
      <el-button type="primary" @click="handleCreate">{{ $t('common.button.create') }}</el-button>
    </div>

    <div class="table-box flex-1 flex-column" v-loading="tableLoading">
      <div class="table flex-1 ovh">
        <el-table :data="tableData" border height="100%">
          <el-table-column type="index" :label="$t('common.indexNumber')" width="55" align="center" />
          <el-table-column :label="$t('control.menu.menuName')" prop="name" />
          <el-table-column :label="$t('control.menu.menuPath')" prop="path" />
          <el-table-column :label="$t('control.menu.permissionCode')" prop="permission" />
          <el-table-column :label="$t('control.menu.menuType')" prop="type" />
          <el-table-column :label="$t('control.menu.sort')" prop="sort" width="100" />
          <el-table-column :label="$t('control.menu.parentMenu')" prop="parentName" />
          <el-table-column :label="$t('common.status')" prop="status" width="100" />
          <el-table-column :label="$t('common.updateTime')" prop="updateTime" />
          <el-table-column :label="$t('common.updater')" prop="updater" />
          <el-table-column :label="$t('common.operation')" width="260">
            <template #default="{ row }">
              <el-button type="primary" link @click="handleEdit(row)">{{ $t('common.button.edit') }}</el-button>
              <el-button type="primary" link>{{ $t('common.button.enable') }}</el-button>
              <el-button type="primary" link>{{ $t('common.button.disabled') }}</el-button>
              <el-button type="danger" link>{{ $t('common.button.del') }}</el-button>
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
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useTemplateRef } from 'vue';
import CreateDialog from './components/CreateDialog.vue';
import { post } from '../../../api';

const searchFormRef = useTemplateRef('searchFormRef');
const createDialogRef = useTemplateRef('createDialogRef');

const searchForm = reactive({
  keyword: '',
  status: '' as '' | 0 | 1
});

const tableData = ref<any>([
  {
    id: 1,
    name: '菜单管理',
    path: '/control/menu',
    permission: 'control:menu:list',
    type: '菜单',
    sort: 1,
    parentName: '-',
    status: '启用',
    updateTime: '2025-09-29',
    updater: 'admin'
  },
  {
    id: 2,
    name: '角色管理',
    path: '/control/role',
    permission: 'control:role:list',
    type: '菜单',
    sort: 2,
    parentName: '-',
    status: '启用',
    updateTime: '2025-09-29',
    updater: 'admin'
  },
  {
    id: 3,
    name: '新增按钮',
    path: '/control/menu/create',
    permission: 'control:menu:create',
    type: '按钮',
    sort: 10,
    parentName: '菜单管理',
    status: '停用',
    updateTime: '2025-09-29',
    updater: 'admin'
  }
]);

const ps = ref(20);
const pn = ref(1);
const total = ref(200);
const tableLoading = ref(false);

const handleSizeChange = (size: number) => {
  console.log('size change', size);
};
const handleCurrentChange = (page: number) => {
  console.log('page change', page);
};
const getTableData = async () => {
  if (tableLoading.value) return;
  tableLoading.value = true;
  try {
    // 模拟请求，展示 post 方法用法
    const res: any = await post('/control/menu/list', {
      pageNo: pn.value,
      pageSize: ps.value,
      keyword: searchForm.keyword,
      status: searchForm.status,
    });
    // 假设后端返回 { list: [], total: number }
    if (res && Array.isArray(res.list)) {
      tableData.value = res.list;
      total.value = Number(res.total || 0);
    } else {
      // 无真实接口时，使用原有示例数据
    }
  } catch (e) {
    // 忽略错误，仅用于演示
  } finally {
    tableLoading.value = false;
  }
};
const resetTableData = () => {
  pn.value = 1;
  searchFormRef.value?.resetFields();
  getTableData();
};

const handleEdit = (row: any) => {
  (createDialogRef.value as any)?.show({ mode: 'edit', record: row });
};

const handleCreate = () => {
  (createDialogRef.value as any)?.show({ mode: 'create' });
};
</script>
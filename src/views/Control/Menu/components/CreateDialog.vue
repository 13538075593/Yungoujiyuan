<template>
  <div>
    <el-dialog
      v-model="visible"
      :title="dialogTitle"
      top="10vh"
      width="720px"
      draggable
    >
      <el-form :model="form" label-position="top">
        <el-row :gutter="40">
          <el-col :span="12">
            <el-form-item :label="$t('control.menu.menuName')" prop="name">
              <el-input v-model="form.name" :placeholder="$t('common.pleaseInput')" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('control.menu.menuPath')" prop="path">
              <el-input v-model="form.path" :placeholder="$t('common.pleaseInput')" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('control.menu.permissionCode')" prop="permission">
              <el-input v-model="form.permission" :placeholder="$t('common.pleaseInput')" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('control.menu.menuType')" prop="type">
              <el-select v-model="form.type" :placeholder="$t('common.pleaseSelect')" class="w-full">
                <el-option label="菜单" value="菜单" />
                <el-option label="按钮" value="按钮" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('control.menu.sort')" prop="sort">
              <el-input-number v-model="form.sort" :min="0" class="w-full" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('control.menu.parentMenu')" prop="parentId">
              <el-tree-select
                v-model="form.parentId"
                :data="menuTree"
                :render-after-expand="false"
                check-strictly
                default-expand-all
                :props="{ value: 'id', label: 'label', children: 'children' }"
                :placeholder="$t('common.pleaseSelect')"
                class="w-full"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('common.status')" prop="status">
              <el-switch v-model="form.status" :active-text="$t('common.button.enable')" :inactive-text="$t('common.button.disabled')" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <template #footer>
        <div class="text-center">
          <el-button @click="visible = false">{{ $t('common.button.cancel') }}</el-button>
          <el-button type="primary" @click="submit">{{ $t('common.button.confirm') }}</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, nextTick } from 'vue';

type Mode = 'create' | 'edit';

const visible = ref(false);
const mode = ref<Mode>('create');
const form = reactive({
  id: undefined as number | undefined,
  name: '',
  path: '',
  permission: '',
  type: '菜单',
  sort: 0,
  parentId: undefined as number | undefined,
  status: true
});

const menuTree = ref([
  { id: 0, label: '根节点', children: [] },
  { id: 1, label: '菜单管理', children: [{ id: 3, label: '新增按钮' }] },
  { id: 2, label: '角色管理', children: [] }
]);

const dialogTitle = computed(() => mode.value === 'create' ? '新增菜单' : '编辑菜单');

const submit = () => {
  // 在这里发起接口请求
  console.log('submit', mode.value, { ...form });
  visible.value = false;
};

const show = (payload?: { mode?: Mode; record?: any }) => {
  mode.value = payload?.mode || 'create';
  if (payload?.record && mode.value === 'edit') {
    const r = payload.record;
    form.id = r.id;
    form.name = r.name;
    form.path = r.path;
    form.permission = r.permission;
    form.type = r.type;
    form.sort = r.sort;
    form.parentId = r.parentId || undefined;
    form.status = r.status === '启用' || r.status === 1;
  } else {
    form.id = undefined;
    form.name = '';
    form.path = '';
    form.permission = '';
    form.type = '菜单';
    form.sort = 0;
    form.parentId = undefined;
    form.status = true;
  }
  nextTick(() => (visible.value = true));
};

defineExpose({ show });
</script>

<style scoped>
</style>



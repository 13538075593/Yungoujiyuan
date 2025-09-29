<template>
  <el-dialog
    v-model="visible"
    :title="$t('control.site.accountAndPassword')"
    width="400px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <div>{{ $t('control.site.siteName') }}: xxx</div>
    <div class="mt-5">{{ $t('control.site.manageAccount2') }}: xxx</div>
    <div class="mt-5">{{ $t('control.site.managePassword') }}: xxx</div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue';

const visible = ref(false);
const show = (data: any) => {
  visible.value = true;
  nextTick(() => {
    console.log(data);
  });
}

defineExpose({
  show
});
</script>

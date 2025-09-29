<template>
  <el-pagination
    :page-sizes="sizes"
    :total="400"
    :background="true"
    layout="total, prev, pager, next, jumper, sizes"
  />
</template>

<script lang="ts" setup>
const sizes = [20, 50, 100];
</script>
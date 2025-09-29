<template>
  <div class="layout w-full h-full display-flex">
    <div class="layout-left">
      <div class="logo color-white fs-20 bold">Logo</div>
      <LeftMenu />
    </div>

    <div class="layout-right flex-1">
      <div class="layout-right-header display-flex color-white">
        <div class="menu-btn flex-middle h-full flex-1 fs-18 pl-20 pr-20">
          <span class="nowrap curp" @click="to('/vip/list')">会员</span>
          <span class="nowrap curp">游戏</span>
          <span class="nowrap curp">资金</span>
          <span class="nowrap curp">数据</span>
          <span class="nowrap curp">运营</span>
          <span class="nowrap curp">风控</span>
          <span class="nowrap curp">推广</span>
          <span class="nowrap curp active">站点</span>
          <span class="nowrap curp" @click="to('/control/site')">总控</span>
        </div>
        <div class="user-info flex-middle h-full">
          <span>用户名</span>
          <span>退出</span>
        </div>
      </div>
      <div class="layout-right-body ova pl-20 pr-20 pt-20 pb-20">
        <div class="w-full h-full ova">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LeftMenu from './components/LeftMenu.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const to = (path: string) => {
  router.push({
    path: path
  });
}
</script>

<style lang="scss" scoped>
.layout {
  .layout-left {
    .logo {
      height: 55px;
      line-height: 55px;
      text-align: center;
      background-color: #3389FE;
      border-right: 1px solid #fff;
    }
  }
  .layout-right {
    overflow: hidden;
    $headerHeight: 55px;
    .layout-right-header {
      height: $headerHeight;
      background-color: #3389FE;
      .menu-btn {
        span + span { margin-left: 50px; }
        span.active { text-decoration: underline; }
      }
    }
    .layout-right-body {
      background-color: #f6f9f8;
      height: calc(100% - $headerHeight);
    }
  }
}

</style>
<template>
  <div class='error flex'>
    <p class='col-8 flex align-c'>
      <button active='scale-90 transform' class='col-5 errorbtn flex just-c align-c' @click='back'>
        404 👉 Go Home
      </button>
    </p>
    <p class='col-4 flex align-c'>
      <img alt='' class='logo' src='../../assets/image/404.svg'>
    </p>
  </div>
</template>

<script setup>
import router from '../../router';

const back = async () => {
  router.push('/login');
};
</script>

<style lang='less' scoped>
.error{
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  background:#f8f8f8;
  background:url('../../assets/image/login-bg2.png') no-repeat !important;
  z-index:9;

  [class*='col-']{
    background:transparent !important;
  }

}

.row{
  align-items:center;
}

.logo{
  max-height:200px;
}

.errorbtn{
  float:right;
  box-sizing:border-box;
  max-height:60px;
  font-size:20px;
  padding:12px 20px;
  margin:0 auto;
  --tw-shadow-color:8, 145, 178;
  --tw-shadow:0 4px 6px -1px rgba(var(--tw-shadow-color), 0.1),
  0 2px 4px -1px rgba(var(--tw-shadow-color), 0.06);
  box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-shadow);
  color:#FFFFFF !important;

  &:hover{
    box-shadow:0 0 10px 0 #00a0e9;
  }
}
</style>
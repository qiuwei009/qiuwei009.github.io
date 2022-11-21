<template>
  <div class='webLabel'>
    <Suspense>
      <template #default>
        <asyncCom></asyncCom>
      </template>
      <template #fallback>
        <div>
          loging... </div>
      </template>
    </Suspense>
  </div>
</template>

<script name='/webLabel' setup>


</script>

<style lang='less' scoped>
.webLabel{
  width:100%;
  height:100%;
}
</style>

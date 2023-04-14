<template>
  <div class="w-100-p h-100-p login flex justify-center items-center overflow-h">
    <div class="login-form">
      <h2 class="font-s-30 mb-10">登录</h2>
      <div class="styled-input">
        <input type="text" name="username" v-model="state.username" autofocus required=""/>
        <label class="font-w-6">Username</label>
        <span></span>
      </div>
      <div class="styled-input">
        <input type="password" name="password" v-model="state.password" required="">
        <label class="font-w-6">Password</label>
        <span></span>
      </div>
      <div class="flex justify-between items-center w-100-p p-0 white">
          <span class="flex justify-between items-center">
            <input type="checkbox" id="brand" value="" class="mr-5 cursor">
            <label for="brand" class="cursor"><span></span> Remember me ?</label>
          </span>
        <a href="#" class="white">Forgot password?</a>
      </div>
      <input type="submit" class="sub" value="Sign In" @click="state.login">
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {useUserStore} from "@/stores/user";

let state = reactive({
  username: "admin",
  password: "123456",
  login() {
     useUserStore().login({username: state.username, password: state.password})
  }
});
</script>

<style scoped lang="less">
.login{
  background:url('../../assets/img/base/login2.jpg') no-repeat;
  background-size: cover;
  .login-form{
    background: linear-gradient(to right, #B0C9CB, #5E4056);
    padding: 20px 50px 30px 50px;
    width: 500px;
    color: #ffffff;
    border-radius: 10px;
    box-shadow: 7px 7px 17px 5px rgba(0, 0, 0, 0.2);

    .styled-input{
      position: relative;
      input{
        position: relative;
        border: none;
        outline: none;
        box-shadow: 0 0 10px 5px #583D4E;
        background-color: transparent;
        width: 100%;
        height: 35px;
        margin: 20px 0;
        text-indent: 10px;
        color: #ffffff;

        &:focus+label{
          top: -10px;
          left: 0;
        }
        &:valid+label{
          top: -10px;
          left: 0;
        }
      }
      label{
        position: absolute;
        top: 25px;
        left: 10px;
        transition: all .5s;
        z-index: 1;
      }
    }

    .sub{
      width: 100%;
      height: 35px;
      margin-top: 20px;
      background-color: #583D4E;
      color: white;
      cursor: pointer;
    }
  }
}
</style>

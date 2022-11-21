<template>
  <div class='login flex align-c just-c'>
    <div class='back'>
      <div class='login-title1'>
        Blog博客管理系统 </div>
      <div class='login-form '>
        <form action='/login' class='form' method='post'>
          <p class=' darkcolor' style='padding-top: 20px;'>
            <el-input id='account' v-model='login.account' placeholder='请输入账号...' type='text'>
              <template #prefix>
                <i class='iconfont icon-RectangleCopy2'></i>
              </template>
            </el-input>
          </p>
          <p class='darkcolor'>
            <el-input id='password' v-model='login.password' :type="login.type ? 'text' : 'password'" placeholder='请输入密码...' style='margin: 0;'>
              <template #prefix>
                <i class='iconfont icon-RectangleCopy29'></i>
              </template>
              <template #suffix>
                <i class='iconfont icon-RectangleCopy8 cursor' @click='login.type = !login.type'></i>
              </template>
            </el-input>
          </p>
          <p class='darkcolor' style='border-radius: 0 0 5px 5px;'>
            <el-button class='submit' style='background: rgba(31,45,61,0.5);' @click='login.submit()'>
              <span style='color: #ccc;'>登录</span>
            </el-button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ElMessage} from 'element-plus';
import {useRouter} from 'vue-router';
import commonStore from '../../pinia/commonStore';
import {get, post} from '../../utils/request';

const store = commonStore();

const route = useRouter();
const modules = import.meta.glob('../../views/**/*.vue');
const login = reactive({
  account: 'qw',
  password: '123456',
  type: false,
  async submit() {
    if (!this.account || !this.password) {
      ElMessage.error('请填写账号或密码!');
      return;
    }
    let res = await post('/oauth', {
      account: this.account,
      password: this.password,
      forceLogin: 1
    });
    if (res.code === 200) {
      sessionStorage.setItem('SYSTEM_USER', JSON.stringify(res));
      sessionStorage.setItem('SYSTEM_TOKEN', JSON.stringify(res.access_token));
      this.getRouters();
    } else {
      ElMessage.error(res.msg);
    }
  },
  async getRouters() {
    let res = await get('/getRouters');
    if (res.code === 200) {
      res.data.sort((a, b) => {
        return a['id'] - b['id'];
      });
      sessionStorage.setItem('SYSTEM_MENUS', JSON.stringify(res.data));
      store.addRouter(res.data);
      route.push('/home');
      window.removeEventListener('keydown', login.keydown);
    }
  },
  keydown(e) {
    if (e.keyCode === 13) {
      login.submit();
    }
  }
});
onMounted(() => {
  let isDark = JSON.parse(sessionStorage.getItem('SYSTEM_ISDARK'));
  sessionStorage.clear();
  sessionStorage.setItem('SYSTEM_ISDARK', JSON.stringify(isDark));
  window.addEventListener('keydown', login.keydown);
});

onActivated(() => {
  window.addEventListener('keydown', login.keydown);
});
</script>

<style lang='less' scoped>
.login{
  position:fixed;
  width:100vw;
  height:100vh;
  z-index:9;
  left:0;
  top:0;
  overflow:hidden;
  background:url('../../assets/image/webPagesImage/99230581_p0.png') no-repeat;
  background-size:cover;
  //&:after {
  //  display: block;
  //  content: "";
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  width: 100%;
  //  height: 100%;
  //  background: rgba(201, 225, 253, 0.1);
  //  /* 模糊大小就是靠的blur这个函数中的数值大小 */
  //  backdrop-filter: blur(6px);
  //  z-index: -1;
  //  border: none;
  //  border-radius: 20px;
  //  box-shadow: 5px 5px 8px 5px rgba(0, 0, 0, 0.4);
  //}

  .back{
    position:relative;
    width:100vw;
    height:100vh;
    background:transparent;
    padding:20px;
    box-sizing:border-box;

    &:after{
      display:none;
    }
  }

  .login-title1{
    font-size:30px;
    font-weight:bold;
    color:#fff;
    padding:25vh 40px 30px;
    line-height:60px;
    text-align:center;
    user-select:none;
  }

  .login-form{
    padding:0 !important;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    border-top:none;
    margin:auto;

    .login-title{
      height:60px;
      line-height:60px;
      text-align:center;
      font-size:20px;
      position:relative;
      font-weight:bold;
      background:linear-gradient(to right, #387dff, #7d52ff);
      -webkit-background-clip:text;
      color:transparent !important;
    }

    .form{
      border-radius:0 0 5px 5px;
      overflow:hidden;
      position:relative;

      p{
        box-sizing:border-box;
        padding:15px;
        background:transparent !important;

        :deep(.el-input__inner){
          height:40px;
          text-indent:3px;
          color:#cccccc;
          outline:none;
          border:none;
          background:rgba(0, 0, 0, 0.5) !important;
          box-shadow:0 0 5px 5px rgba(0, 84, 194, 0.46);

          &:hover{
            box-shadow:0 0 5px 5px rgba(0, 84, 194, 1);
          }
        }

        :deep(.el-input__wrapper){
          height:40px;
          text-indent:3px;
          color:#cccccc;
          background:rgba(0, 0, 0, 0.5) !important;
          //box-shadow: 0 0 0 1px rgba(204, 204, 204, 0.51) inset;
          //border-radius: 0;

          &:hover{
            box-shadow:0 0 0 1px #0a5fcd inset;
          }
        }

        :deep(.el-input__prefix){
          top:5px;
          left:10px;
        }

        :deep(.el-input__suffix){
          top:5px;
          right:10px;
        }

        button{
          width:100%;
          height:40px;
          margin:0 0 10px;
          //border-radius: 20px;
          border:none;
          box-shadow:0 0 5px 5px rgba(0, 84, 194, 0.46);
          //box-shadow: 0 0 8px 0 #00a0e9;
          background:#0f6fb8 !important;

          span{
            font-size:20px;
          }

          &:hover{
            box-shadow:0 0 5px 5px rgba(0, 84, 194, 1);
          }
        }

        i{
          font-size:16px;
          font-style:normal;
        }
      }
    }
  }

  .col-8{
    height:10%;
    background:transparent !important;
  }

  .col-4{
    height:90%;
    background:transparent !important;
  }

  @media only screen and (min-width:703px){
    .col-8{
      height:100%;
    }

    .col-4{
      height:100%;
    }

    .back{
      width:900px;
      height:450px;
      //background: url("../../assets/image/login-bg.png") no-repeat center;
      background-size:100%;

      &:after{
        display:block;
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(201, 225, 253, 0.1);
        /* 模糊大小就是靠的blur这个函数中的数值大小 */
        backdrop-filter:blur(6px);
        z-index:-1;
        border:none;
        border-radius:20px;
        box-shadow:5px 5px 8px 5px rgba(0, 0, 0, 0.4);
      }

      .login-title1{
        font-size:40px;
        padding:60px 40px 20px;
      }

      .login-form{
        width:380px;
      }
    }
  }

  @keyframes slider{
    0%{
      transform:translateX(0);
    }
    100%{
      transform:translateX(-100%);
    }
  }

  .itemList{
    width:100vw;
    min-width:1369px;
    position:fixed;
    font-size:0;
    top:120px;
    left:0;
    display:flex;
    animation:slider 10s linear infinite;
  }

  .item{
    width:100%;
    height:150px;
    margin:0;
    padding:0;

    img{
      width:calc(100vw + 3px);
      min-width:1371px;
      margin:0;
      padding:0;
    }
  }

  @keyframes sliderfadein{
    0%{
      left:1000px;
    }
    100%{
      left:0;
    }
  }

  .title{
    position:fixed;
    top:15%;
    left:30px;
    font-size:30px;
    color:#ffffff;
    height:100px;
    width:700px;
    margin:0 20px;
  }

  .logintitle{
    font-size:50px;
    color:#ffffff;
    margin-top:30px;
    font-weight:bold;
    width:700px;
    position:absolute;
    animation:sliderfadein 0.5s linear;
  }
}

.logo{
  max-height:300px;
}

.submit{
  margin:10px auto;
  color:#2e3141;
}

:deep(.mc[data-v-06e6160c]){
  display:none;
}
</style>

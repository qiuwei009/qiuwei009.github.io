<template>
  <div v-show='menus.showMenus' :class="menus.isShow?(menus.isOpen?'showAlise':'shrinkAlise'):'hideAlise'" class='Alise' @click='menus.showChild($event,1)' @mouseleave='menus.showChild($event,1)'>
    <el-scrollbar ref='scrollbar' :class="menus.isShow?(menus.scrollWidth || menus.isOpen?'showScroll':'shrinkScroll'):'hideAlise'" :native='false' :noresize='false' style='transition: all 0.3s;'>
      <div v-for='(row,i) in menus.list' :key='i' class='menuItem' @click.stop='menus.showChild($event,0,row.id)' @mouseenter.stop='menus.showChild($event,0,row.id)'>
        <button v-if="row.menuType === 'M'" :class='{active: menus.active === row.id || (menus.activePrve === row.id && !menus.isOpen)}' class='menuItemBtn'>
          <i :class='row.icon' class='iconfont titIcon'></i> {{ row.name }}
          <i :class="menus.active === row.id?'activeIcon':'activeIconDown'" class='iconfont Icon icon-RectangleCopy14'></i>
        </button>
        <button v-if="row.menuType === 'C'" :class='{active: menus.active === row.id || (menus.activePrve === row.id && !menus.isOpen)}' class='menuItemBtn'>
          <router-link :to='row.router'>
            <i :class='row.icon' class='iconfont titIcon'></i> {{ row.name }}
          </router-link>
        </button>
        <div :class='{active: (menus.active === row.id && menus.isOpen) || (menus.activePrve === row.id && !menus.isOpen) }' class='menuItemChild'>
          <router-link v-for='row_child in row.children' :key='row_child.name' :to='row_child.router' @click.stop='menus.showChild($event,0,row.id)'>
            {{ row_child.name }}
          </router-link>
        </div>
      </div>
    </el-scrollbar>
  </div>
  <div v-if='menus.isShow' class='mc' @click.stop='menus.changeShow'></div>
</template>

<script setup>
import {useRouter} from 'vue-router';

const props = defineProps({
  data: Object,
  default: () => {
    return {
      list: [],
      isOpen: true,
      isShow: false,
      showMenus: false
    };
  }
});
const emit = defineEmits(['handleShow']);
const route = useRouter();
const menus = reactive({
  //菜单列表
  // list: props.data.list.filter(i => i.status === "0"),
  list: props.data.list || JSON.parse(sessionStorage.getItem('SYSTEM_MENUS')),
  //是否显示菜单
  showMenus: props.data.showMenus,
  //收缩状态
  isOpen: props.data.isOpen,
  //展开状态
  isShow: props.data.isShow,
  //是否滚动
  scrollWidth: false,
  //展开状态激活
  active: JSON.parse(sessionStorage.getItem('active')) || 10000,
  //离开恢复当前路由激活
  activeOld: JSON.parse(sessionStorage.getItem('active')) || 10000,
  //收缩状态激活
  activePrve: NaN,
  // 激活状态
  isActive(id) {
    this.active = id;
    this.activeOld = id;
  },
  //防抖节流
  now: new Date().getTime(),
  last: new Date().getTime(),
  //移入显示菜单
  showChild(e, type, id) {
    menus.now = new Date().getTime();
    if (menus.now - menus.last > 0 || menus.now - menus.last === 0) {
      menus.last = new Date().getTime();
      if (menus.isOpen) { // 展开
        switch (type) {
          case 0:
            this.active = id;
            this.activePrve = id;
            break;
          case 1:
            this.active = this.activeOld;
            this.activePrve = this.activeOld;
            break;
        }
      } else { // 收缩
        switch (type) {
          case 0:   // 展开
            this.activePrve = id;
            menus.scrollWidth = true;
            $(e.currentTarget).find('.menuItemChild').addClass('active').fadeIn(300);
            break;
          case 1:   // 收起
            this.activePrve = NaN;
            menus.scrollWidth = false;
            // $(e.currentTarget).find(".menuItemChild").addClass("active").fadeOut(300);
            break;
        }
      }
    }
  },
  //蒙层点击关闭菜单
  changeShow() {
    emit('handleShow', !menus.isShow);
  }
});
watch(() => props.data.list, () => {
  menus.list = props.data.list;
});
watch(() => props.data.isOpen, () => {
  menus.isOpen = props.data.isOpen;
});
watch(() => props.data.isShow, () => {
  menus.isShow = props.data.isShow;
});
watch(() => props.data.showMenus, () => {
  menus.showMenus = props.data.showMenus;
});

// 路由监听
watch(() => route.currentRoute.value.path, (path) => {
      if (path === '/login' || path === '/404') {
        menus.active = 10000;
      } else {
        // 监听路由改变菜单激活
        menus.list.forEach((i) => {
          if (i.router === path) {
            menus.isActive(i.id);
            sessionStorage.setItem('active', JSON.stringify(i.id));
          }
          if (i.children && i.children.length > 0) {
            i.children.forEach((j) => {
              if (j.router === path) {
                menus.isActive(i.id);
                sessionStorage.setItem('active', JSON.stringify(i.id));
              }
            });
          }
        });
      }
    }
);
</script>

<style lang='less' scoped>
.Alise{
  position:fixed;
  height:100%;
  background:#2e3141;
  transition:all 0.3s;
  z-index:999;

  .showScroll{
    width:180px;
    background:transparent;
  }

  .shrinkScroll{
    width:50px;
    background:transparent;
  }

  .menuItem{
    display:none;
  }
}

.showAlise{
  width:180px;

  .menuItem{
    position:relative;
    overflow:hidden;
    display:block;

    .menuItemBtn{
      position:relative;
      width:100%;
      height:50px;
      line-height:50px;
      font-size:15px;
      color:#ccc;
      text-align:left;
      text-indent:19px;
      border:none;
      outline:none;
      background:#2e3141;
      //      box-shadow:0 0 1px 0 rgba(89, 89, 89, 0.5) inset;
      white-space:nowrap;
      cursor:pointer;
      transition:all 0.3s;
      margin:0;
      padding:0;
      overflow:hidden;

      i{
        font-size:20px;
        vertical-align:middle;
      }

      a{
        position:relative;
        display:block;
        cursor:pointer;
        text-align:left;
        text-decoration:none;
        color:#ccc;
        border:none;
        outline:none;
        font-size:15px;
        transition:all 0.3s;
        white-space:nowrap;
        right:0;
        height:50px;
        width:100%;
        text-indent:18px;

        &:hover{
          color:#0080ff !important;

          &:after{
            //display: none;
            content:' ';
            display:block;
            width:3px;
            height:50px !important;
            background:#0080ff;
            position:absolute;
            right:1px !important;
            top:0;
            z-index:1;
          }

          i{
            color:#0080ff !important;
          }
        }

        &.router-link-exact-active{
          color:#0080ff !important;
          position:relative;
          transition:all 0.3s;

          i{
            color:#0080ff !important;
          }

          &:after{
            content:' ';
            display:block;
            width:3px;
            height:50px !important;
            background:#0080ff;
            position:absolute;
            right:1px !important;
            top:0;
            z-index:1;
          }

          &:before{
            content:' ';
            display:block;
            width:100%;
            height:100%;
            position:absolute;
            left:0;
            top:0;
            z-index:1;
            background:linear-gradient(to right,
            transparent,
            rgba(52, 120, 248, 0.3));
            box-shadow:none;
            animation:title-bottom 0.5s;
          }

          @keyframes title-bottom{
            0%{
              width:0;
              opacity:0;
            }

            100%{
              width:100%;
              opacity:0.9;
            }
          }
        }
      }

      .Icon{
        position:absolute;
        right:0;
        color:rgba(255, 255, 255, 0.3);
        z-index:1;
        transition:all 0.3s;
        transform-origin:70% 50%;
      }

      .activeIcon{
        transform:rotate(180deg);
      }

      .activeIconDown{
        transform:rotate(90deg);
      }
    }

    .menuItemBtn.active,
    .menuItemBtn:hover{
      color:#0080ff !important;

      i{
        color:#0080ff !important;
      }
    }

    a{
      position:relative;
      display:block;
      width:100%;
      height:0;
      line-height:50px;
      font-size:12px;
      text-align:left;
      text-indent:47px;
      text-decoration:none;
      color:#ccc;
      cursor:pointer;
      border:none;
      outline:none;
      box-shadow:0 0 1px 0 rgba(89, 89, 89, 0.5) inset;
      transition:height 0.3s;
      overflow:hidden;

      &:hover{
        color:#ccc !important;
        height:50px !important;
        background:@themeNightBese !important;

        &:after{
          content:' ';
          display:block;
          width:3px;
          height:50px !important;
          background:#0080ff;
          position:absolute;
          right:0;
          top:0;
          z-index:3;
        }

        i{
          color:#ccc !important;
        }
      }

      &.router-link-exact-active{
        color:#ccc !important;
        position:relative;
        transition:all 0.3s;

        i{
          color:#ccc;
        }

        &:after{
          content:' ';
          display:block;
          width:3px;
          height:50px !important;
          background:#0080ff;
          position:absolute;
          right:0;
          top:0;
          z-index:1;
        }

        &:before{
          content:' ';
          display:block;
          width:100%;
          height:50px !important;
          position:absolute;
          left:0;
          top:0;
          z-index:1;
          background:linear-gradient(to right,
          transparent,
          rgba(52, 120, 248, 0.3));
          box-shadow:none;
          animation:title-bottom 0.5s;
        }

        @keyframes title-bottom{
          0%{
            width:0;
            opacity:0;
          }

          100%{
            width:100%;
            opacity:0.9;
          }
        }
      }

      i{
        width:1em;
        //margin-right: 5px;
      }
    }

    .active{
      a{
        display:block !important;
        height:50px !important;
      }
    }

    .menuItemChild{
      position:relative;
      width:100%;
      background:#1d1e28;

      a{
        background:#1d1e28;
      }
    }
  }
}

.hideAlise{
  width:0;
}

.shrinkAlise{
  width:50px;
  transition:all 0.3s;

  .menuItem{
    position:relative;
    width:50px;
    display:block;
    transition:all 0.3s;

    .active{
      a{
        display:block !important;
        height:50px !important;
        overflow:hidden;
      }
    }

    .menuItemChild{
      width:110px;
      display:none;
      position:absolute;
      top:0;
      left:55px;
      z-index:9;
      box-shadow:5px 5px 4px 0 #000;
      overflow:hidden;
      transition:all 0.3s;

      a{
        position:relative;
        display:block;
        color:#ccc;
        cursor:pointer;
        text-align:left;
        text-indent:10px;
        text-decoration:none;
        width:100%;
        border:none;
        outline:none;
        font-size:12px;
        height:0;
        background:#1d1e28;
        line-height:50px;
        transition:height 0.3s;
        box-shadow:0 0 1px 0 rgba(98, 96, 96, 0.9) inset;
        overflow:hidden;

        &:hover{
          color:#ccc !important;
          height:50px !important;
          background:@themeNightDeep;

          &:after{
            content:' ';
            display:block;
            width:3px;
            height:50px !important;
            position:absolute;
            background-color:#0080ff;
            right:0;
            top:0;
            z-index:3;
          }

          i{
            color:#ccc !important;
          }
        }

        &.router-link-exact-active{
          color:#ccc !important;
          position:relative;
          transition:all 0.3s;

          i{
            color:#ccc;
          }

          &:after{
            content:' ';
            display:block;
            width:3px;
            height:50px !important;
            position:absolute;
            background-color:#0080ff;
            right:0;
            top:0;
            z-index:3;
          }

          &:before{
            content:' ';
            display:block;
            width:100%;
            height:50px !important;
            position:absolute;
            left:0;
            top:0;
            z-index:1;
            background:linear-gradient(to right,
            transparent,
            rgba(52, 120, 248, 0.3));
            box-shadow:none;
            animation:title-bottom 0.5s;
          }

          @keyframes title-bottom{
            0%{
              width:0;
              opacity:0;
            }

            100%{
              width:100%;
              opacity:0.9;
            }
          }
        }

        i{
          width:1em;
          //margin-right: 5px;
        }
      }
    }

    .menuItemBtn{
      width:50px;
      height:50px;
      line-height:50px;
      overflow:hidden;
      border:none;
      outline:none;
      background:#2e3141;
      transition:all 0.3s;

      a{
        position:absolute;
        top:0;
        right:0;
        height:50px;
        width:100%;
        overflow:hidden;
        //&:after {
        //  display: none !important;
        //}
      }

      .active{
        position:absolute;
        top:0;
        left:50px;
        box-shadow:inset 0 0 5px 1px #0a5fcd !important;
      }

      .iconfont{
        box-sizing:border-box;
        padding:5px;
        background:rgba(0, 0, 0, 0.4);
        color:#ffffff;

        &:hover{
          box-shadow:inset 0 0 5px 1px #0a5fcd !important;
        }
      }

      :deep(.titIcon){
        font-size:25px !important;
      }
    }

    .menuItemBtn.active,
    .menuItemBtn:hover{
      &:after{
        content:' ';
        display:block;
        width:3px;
        height:100%;
        background:#0080ff;
        position:absolute;
        left:0;
        top:0;
        z-index:1;
      }

      i{
        box-shadow:inset 0px 0px 5px 1px #0a5fcd !important;
      }
    }

    .Icon{
      display:none;
    }
  }
}

:deep(.el-scrollbar){
  padding:0;
}

:deep(.el-scrollbar__bar){
  left:0;
  width:3px;
  height:2px;
}

:deep(.el-scrollbar__bar.is-vertical){
  width:3px;
  height:2px;
}

.mc{
  position:absolute;
  width:100vw;
  height:100vh;
  background:rgba(51, 55, 72, 0.5);
  top:0;
  left:0;
  z-index:998;
}

.dark{
  .Alise{

    background:@themeNightDeep;

    .menuItemBtn{
      background:@themeNightDeep !important;
      color:#ccc;
    }

    .menuItemChild{
      a{
        background:@themeNight;
      }
    }
  }
}

@media only screen and (min-width:1000px){
  .Alise{
    position:relative;
  }

  .mc{
    display:none;
  }
}
</style>



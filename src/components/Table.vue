<template>
  <div :class='state.list.name' class='table flex column' @mouseenter='state.addEvent' @mouseleave='state.removeEvent'>
    <div v-if='state.show' class='tableHeaderBox'>
      <el-scrollbar ref='scrollHeader' @scroll='state.handleScrollH'>
        <div class='tableHeader flex just-b nowrap'>
          <slot :item='state.list.rows' name='selectAll'></slot>
          <div v-if='state.list.expor' class='flex just-c align-c' style='flex: 0 0 25px;'></div>
          <div v-if='state.list.select.open' class='flex just-c' style='flex: 0 0 25px;'>
            <i :class="state.list.select.selectAll?'icon-circleyuanquan':'icon-circle2yuanquan'" class='iconfont cursor selectIcon' @click="state.handleSelectionChange('all')"></i>
          </div>
          <div class='flex just-c align-c' style='flex: 0 0 60px;'>
            <span>序号</span>
          </div>
          <div v-for='(item,i) in state.list.header' :key='i' :style='`flex: 1 0 ${item.width}`'>
            <span class='omit2'>{{ item.name }}</span>
            <p v-if='item.rang' class='flex align-c column just-c' style='height: 50px;'>
              <i :style="state.rangAct === 0?'':''" class='iconfont cursor iconfontHoverColor icon-RectangleCopy14' title='升序' @click='state.rang(1,item.key)'></i>
              <i :style="state.rangAct === 1?'':''" class='iconfont cursor iconfontHoverColor icon-RectangleCopy10' title='降序' @click='state.rang(0,item.key)'></i>
            </p>
          </div>
          <slot name='rightTitle'></slot>
          <div class='flex just-c align-c omit' style='flex: 0 0 10px;'></div>
        </div>
      </el-scrollbar>
    </div>
    <img v-if='state.list.rows.length === 0' alt='' class='empty' src='../assets/image/noData.svg'>
    <div class='tableContent'>
      <el-scrollbar ref='scrollTable' :class="state.list.name+'ScrollTable'" :native='false' :noresize='false' tag='div' @scroll='state.handleScrollT'>
        <div v-for='(item, index) in state.list.rows' :key='index' :class="item.show && item.children?'activeChild':'',item.projects?'parent':''" class='li'>
          <div class='li_item flex just-b align-c nowrap' @click.stop='state.showEvent(item,index,$event)'>
            <slot :item='item' name='selectBtn'></slot>
            <div v-if='state.list.expor' class='flex just-c align-c' style='flex: 0 0 25px;'>
              <i :class="item.show ? 'activeIcon2':'activeIconDown2'" :style="item.children && item.children.length||item.projects && item.projects.length > 0?'display: inline-block;':'display: none;'" class='iconfont Icon icon-RectangleCopy14'></i>
            </div>
            <div v-if='state.list.select.open' class='flex just-c align-c' style='flex: 0 0 25px;'>
              <i :class="state.list.select.selectId.includes(item[state.list.select.id]) ?'icon-circleyuanquan':'icon-circle2yuanquan'" class='iconfont cursor selectIcon' @click='state.handleSelectionChange(item)'></i>
            </div>
            <div class='flex just-c align-c omit' style='flex: 0 0 60px;'>
              {{ item.i_num || '-' }} </div>
            <div v-for='(i) in state.list.header' :key='i.key' :style="`color:${i.selectColor?i.selectColor[item[i.key]]:''};flex: 1 0 ${i.width}`" :title='item[i.key]' class='flex align-c wrap'>
              <p v-if='!i.fun' :style="`color:${i.selectColor?i.selectColor[item[i.key]]:''};`" class='omit2'>
                {{ i.select && i.select[item[i.key]] ? i.select[item[i.key]].label : item[i.key] ? item[i.key] : '-' }} </p>
              <p v-else :style="`color:${i.selectColor?i.selectColor[item[i.key]]:''};`" class='omit2' @click='state.handlespan(item[i.key])'>
                {{
                  i.select && i.select[item[i.key]] ? i.select[item[i.key]].label : item[i.key] ? item[i.key] : '-'
                }} </p>
            </div>
            <slot :item='item' name='rightBtn'></slot>
            <div class='flex just-c align-c omit' style='flex: 0 0 10px;'></div>
          </div>
          <div v-if='item.show' class='childPP'>
            <Table v-if='item.projects&&item.projects.length>0' :header='state.list.header' :list='{
                              header: state.list.header,
                              rows: item.projects,
                              page: state.list.select.page,
                              size:  state.list.select.size,
                              total: item.projects.length,
                              currentPage: state.list.select.currentPage,
                              select: {
                                  open: state.list.select.open, // 是否开启多项选中
                                  selectAll: state.list.select.selectAll, //全选
                                  isIndeterminate: state.list.select.isIndeterminate,// 中间状态
                                  selectId: state.list.select.selectId // 选中ID
                              },
                              expor: state.list.expor
                            }' :show='false' @handleLi='state.handleLi'>
              <template v-slot:selectAll>
                <slot :item='state.list.rows' name='selectAll'></slot>
              </template>
              <template v-slot:selectBtn='{item}'>
                <slot :item='item' name='selectBtn'></slot>
              </template>
              <template v-slot:rightTitle>
                <slot name='rightTitle'></slot>
              </template>
              <template v-slot:rightBtn='{item}'>
                <slot :item='item' name='rightBtn'></slot>
              </template>
            </Table>
          </div>
          <div v-if='item.show' class='childEE'>
            <Table v-if='item.children&&item.children.length>0' :header='state.list.header' :list='{
                              header: state.list.header,
                              rows: item.children,
                              page: state.list.page,
                              size:  state.list.size,
                              total: item.children.length,
                              currentPage: state.list.select.currentPage,
                              select: {
                                  open: state.list.select.open, // 是否开启多项选中
                                  selectAll: state.list.select.selectAll, //全选
                                  isIndeterminate: state.list.select.isIndeterminate,// 中间状态
                                  selectId: state.list.select.selectId // 选中ID
                              },
                              expor: state.list.expor
                            }' :show='false' @handleLi='state.handleLi'>
              <template v-slot:selectAll>
                <slot :item='state.list.rows' name='selectAll'></slot>
              </template>
              <template v-slot:selectBtn='{item}'>
                <slot :item='item' name='selectBtn'></slot>
              </template>
              <template v-slot:rightTitle>
                <slot name='rightTitle'></slot>
              </template>
              <template v-slot:rightBtn='{item}'>
                <slot :item='item' name='rightBtn'></slot>
              </template>
            </Table>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div v-if='state.show' class='tableBottom flex just-b align-c'>
      <div>
        <slot :item='state.list.rows' name='bottomBtn'></slot>
      </div>
      <el-pagination :current-page='state.list.page' :page-size='state.list.size' :total='state.list.total' layout='total,prev, pager, next' @current-change='state.handleCurrentChange'/>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  //表
  list: {
    type: Object,
    default() {
      return {
        name: 'role',
        header: [],
        rows: [
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00',
            children: [
              {
                i_num: 1,
                device: 136.1,
                level: 1.1,
                main: 'pm2.5',
                value: 123,
                address: 49.3,
                timeS: '2021-01-04 00:00:00'
              },
              {
                i_num: 1,
                device: 136.1,
                level: 1.1,
                main: 'pm2.5',
                value: 123,
                address: 49.3,
                timeS: '2021-01-04 00:00:00'
              },
              {
                i_num: 1,
                device: 136.1,
                level: 1.1,
                main: 'pm2.5',
                value: 123,
                address: 49.3,
                timeS: '2021-01-04 00:00:00'
              }
            ]
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00',
            children: [
              {
                i_num: 1,
                device: 136.1,
                level: 1.1,
                main: 'pm2.5',
                value: 123,
                address: 49.3,
                timeS: '2021-01-04 00:00:00'
              },
              {
                i_num: 1,
                device: 136.1,
                level: 1.1,
                main: 'pm2.5',
                value: 123,
                address: 49.3,
                timeS: '2021-01-04 00:00:00'
              },
              {
                i_num: 1,
                device: 136.1,
                level: 1.1,
                main: 'pm2.5',
                value: 123,
                address: 49.3,
                timeS: '2021-01-04 00:00:00'
              }
            ]
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          },
          {
            i_num: 1,
            device: 136.1,
            level: 1.1,
            main: 'pm2.5',
            value: 123,
            address: 49.3,
            timeS: '2021-01-04 00:00:00'
          }
        ],
        page: 1,
        size: 20,
        total: 100,
        currentPage: 1,
        select: {
          id: 'id',
          open: true, // 是否开启多项选中
          selectAll: false, //全选
          isIndeterminate: false, // 中间状态
          selectId: [] // 选中ID
        },
        expor: false,
        ischildren: false
      };
    }
  },
  //判断子集列表
  show: {
    type: Boolean,
    default() {
      return true;
    }
  },
  fun: {
    type: Boolean,
    default() {
      return true;
    }
  }
});
const emit = defineEmits();
const scrollHeader = ref(null);
const scrollTable = ref(null);
const state = reactive({
  list: props.list,
  show: props.show,
  handlespan(i) {
    emit('handlespan', i);
  },
  // active: -1,
  //点击显示子级菜单
  showEvent(i, index, e) {
    i['show'] = !i['show'];
    $('.activeLi').removeClass('activeLi');
    $(e.currentTarget).parent().addClass('activeLi');
    // this.active = index

    if (!i.projects) {
      emit('handleLi', i);
    }
  },
  handleLi(i) {
    if (!i.projects) {
      emit('handleLi', i);
    }
  },
  handleCurrentChange(val) {
    $(`.${state.list.name} .el-scrollbar__wrap`).animate(
        {scrollTop: 0,scrollLeft:0},
        200
    );
    state.handleScrollH({scrollLeft: 0});
    state.handleScrollT({scrollLeft: 0});
    state.list.select.selectId = [];
    state.list.select.selectAll = false;
    emit('handleCurrentChange', {
      name: state.list.name,
      page: val
    });
  },
  handleSelectionChange(val) {
    this.list.select.selectAll = !this.list.select.selectAll;
    if (val === 'all') {
      this.list.select.selectId = [];
      if (this.list.select.selectAll) {
        this.list.rows.forEach((item) => {
          item.select = true;
          this.list.select.selectId.push(item[state.list.select.id]);
        });
      } else {
        this.list.rows.forEach((item) => {
          item.select = false;
        });
      }
    } else {
      if (!this.list.select.selectId.includes(val.id)) {
        this.list.rows.forEach((item) => {
          if (val.id === item[state.list.select.id]) {
            this.list.select.selectId.push(item[state.list.select.id]);
          }
        });
      } else {
        let index = this.list.select.selectId.indexOf(val.id);
        this.list.select.selectId.splice(index, 1);
      }

      if (this.list.select.selectId.length > 0) {
        this.list.isIndeterminate = true;
        this.list.select.selectAll = false;
      }
      if (this.list.select.selectId.length === 0) {
        this.list.isIndeterminate = false;
        this.list.select.selectAll = false;
      }
      if (this.list.select.selectId.length === this.list.rows.length) {
        this.list.select.selectAll = true;
      }
    }
    this.list.select.selectId = [...new Set(this.list.select.selectId)];
    emit('selectId', this.list.select.selectId);
  },
  rangAct: 1,
  rang(type, key) {
    let keyArr = [
      'operTime',
      'accessTime',
      'time',
      'avgDate',
      'createTime'
    ];
    let arr = state.list.rows;
    this.rangAct = type;

    if (keyArr.includes(key)) {
      if (type) {
        // 升序
        arr.sort((a, b) => {
          return new Date(a[key]).getTime() - new Date(b[key]).getTime();
        });
      } else {
        // 降序
        arr.sort((a, b) => {
          return new Date(b[key]).getTime() - new Date(a[key]).getTime();
        });
      }
    } else {
      if (type) {
        // 升序
        arr.sort((a, b) => {
          return a[key] - b[key];
        });
      } else {
        // 降序
        arr.sort((a, b) => {
          return b[key] - a[key];
        });
      }
    }

    //必须设置一个排序函数 a-b升序  b-a降序
    // for (let i = 0; i < arr.length; i++) {
    //   for (let j = 0; j < arr.length - i; j++) {
    //     ///相邻两个比较，小的去前面
    //     if (arr[j][key] > arr[j + 1][key]) {
    //       let temp = arr[j];
    //       arr[j] = arr[j + 1];
    //       arr[j + 1] = temp;
    //     }
    //   }
    // }

    state.list.rows = arr;
  },
  handleScrollH(val) {
    // scrollTable.value.setScrollLeft(val.scrollLeft);
  },
  handleScrollT(val) {
    scrollHeader.value.setScrollLeft(val.scrollLeft);
  },
  left: 0,
  leftMax: 0,
  scrollFunc(e) {
    if (state.list.ischildren) {
      return false;
    }
    e = e || window.event;
    if (e.wheelDelta) {
      //判断浏览器IE，谷歌滑轮事件
      if (e.wheelDelta > 0) {
        //当滑轮向上滚动时
        if (state.left > 0) state.left -= 50;
        scrollTable.value.setScrollLeft(state.left);
      }
      if (e.wheelDelta < 0) {
        //当滑轮向下滚动时
        if (state.left < state.leftMax) state.left += 50;
        else state.left = state.leftMax;
        scrollTable.value.setScrollLeft(state.left);
      }
    } else if (e.detail) {
      //Firefox滑轮事件
      if (e.detail > 0) {
        //当滑轮向上滚动时
        if (state.left > 0) state.left -= 50;
        scrollTable.value.setScrollLeft(state.left);
        // $(`.scrollMenus .el-scrollbar__wrap`).animate({'scrollLeft': menus.left}, 0)
      }
      if (e.detail < 0) {
        //当滑轮向下滚动时
        if (state.left < state.leftMax) state.left += 50;
        else state.left = state.leftMax;
        scrollTable.value.setScrollLeft(state.left);
      }
    }
  },
  addEvent() {
    if (state.list.ischildren) {
      return false;
    }
    const dom = document.querySelector(`.${state.list.name}ScrollTable`);
    if (dom.addEventListener) {
      //火狐使用DOMMouseScroll绑定
      dom.addEventListener('DOMMouseScroll', state.scrollFunc, true);
    }
    //其他浏览器直接绑定滚动事件
    dom.onmousewheel = state.scrollFunc;
  },
  removeEvent() {
    if (state.list.ischildren) {
      return false;
    }
    // 鼠标事件销毁
    const dom = document.querySelector(`.${state.list.name}ScrollTable`);
    if (dom.addEventListener) {
      //火狐使用DOMMouseScroll绑定
      dom.removeEventListener('DOMMouseScroll', state.scrollFunc, true);
    }
    dom.onmousewheel = null;
  }
});
//数据变化监听
watch(props, () => {
  props.list.rows.forEach((item, i) => {
    item['i_num'] =
        props.list.page * props.list.size - props.list.size + i + 1;
  });
  state.list = props.list;
  state.leftMax = 0;
  state.list.header.forEach((i) => {
    state.leftMax += Number(i.width.split('px')[0]);
  });
});
onMounted(() => {
  // if(props.list.rows.length > 0){
  //   props.list.rows.forEach((item, i) => {
  //     item["i_num"] = props.list.page * props.list.size - props.list.size + i + 1;
  //   });
  // }
  state.list = props.list;
});
</script>

<style lang='less' scoped>
.table{
  width:100%;
  height:100%;
  position:relative;
  cursor:pointer;

  .tableHeaderBox{
    width:100%;
    background-image:linear-gradient(to right, #f4f8ff, #fff, #f4f8ff);

    :deep(.el-scrollbar__bar.is-horizontal){
      height:0;
    }

    :deep(.tableHeader){
      box-sizing:border-box;

      & > div{
        height:50px;
        box-sizing:border-box;
        padding-left:10px;
        font-weight:bold;

        span{
          font-weight:bold;
        }

        &:nth-child(1){
          justify-content:center;
        }

        // &:nth-child(2) {
        //   justify-content: center;
        // }
      }

      & > div,
      & > span{
        height:50px;
        display:flex;
        align-items:center;
      }

      .iconfontHoverColor{
        display:block;
        height:14px;
        width:14px;
        line-height:14px;
        font-size:14px;
        font-weight:bold;
        text-align:center;
        border-radius:10px;

        &:hover{
          background:rgba(10, 95, 205, 0.28);
        }
      }
    }
  }

  .tableContent{
    width:100%;
    overflow:hidden;
    display:flex;
    flex-flow:column;
    flex:1;

    .li{
      position:relative;
      line-height:45px;

      &:nth-child(2n - 1){
        :deep(.li_item){
          background-color:#fff;

          div{
            background-color:#fff;
          }
        }
      }

      :deep(.li_item){
        display:flex;
        align-items:center;

        &:hover > div{
          border-bottom:1px solid #1e8b56 !important;
        }

        .omit2{
          line-height:20px;
          box-sizing:border-box;
          padding-right:10px;
        }

        & > div{
          line-height:45px;
          min-height:46px;
          box-sizing:border-box;
          padding-left:10px;
          border-bottom:1px solid transparent;
        }
      }

      .Icon{
        position:absolute;
        font-size:25px;
        transition:all 0.3s;
      }

      .activeIcon2{
        transform:rotate(180deg);
      }

      .activeIconDown2{
        transform:rotate(90deg);
      }
    }

    :deep(.activeLi){
      .li_item{
        & > div{
          border-bottom:1px solid #1e8b56;
          //box-shadow:  0 0 1px 0 #1e8b56 inset;
        }
      }
    }

    :deep(.parent){
      position:relative;

      & > .li_item{
        background-image:linear-gradient(to right, #819eff, #2d99f1);
        color:#fff !important;

        div,
        p,
        span,
        i,
        em{
          color:#fff !important;
          background:transparent !important;
        }
      }
    }

    :deep(.el-scrollbar){
      padding:0;
    }

    //:deep(.childEE) {
    //  :deep(.el-scrollbar) {
    //    padding: 0 5px;
    //  }
    //}
  }

  .tableBottom{
    background-image:linear-gradient(to right, #f4f8ff, #fff, #f4f8ff);
    line-height:40px;
    box-sizing:border-box;

    :deep(.el-pager li){
      background:transparent;
    }

    :deep(.el-pagination button){
      background:transparent;
    }
  }

  .empty{
    height:30%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    z-index:3;
  }

  :deep(.iconfont){
    user-select:none;
    font-size:18px;
  }
}

.dark{
  .table{
    *{
      color:#ccc;
    }

    background:@themeNight;

    .tableHeaderBox{
      background-image:linear-gradient(to right,
      @themeNightDeep,
      @themeNightBese,
      @themeNightDeep);
    }

    .tableHeader{
      background:transparent;

      :deep(span){
        color:#ffffff !important;
      }

      :deep(div){
        color:#ffffff !important;
      }
    }

    .tableBottom{
      background-image:linear-gradient(to right,
      @themeNightDeep,
      @themeNight,
      @themeNightDeep);
      color:#fff;

      span{
        color:#ffffff;
      }
    }

    .tableContent{
      .li{
        .lidiv{
          background-color:rgba(16, 39, 75, 0.91);
        }
      }

      .li:nth-child(2n - 1){
        :deep(.li_item){
          background-color:@themeNightBese;

          div{
            background-color:@themeNightBese;
          }
        }
      }

      :deep(.parent){
        position:relative;

        & > .li_item{
          background-image:linear-gradient(to right, #819eff, #2d99f1);
          color:#fff !important;

          div,
          p,
          span,
          i,
          em{
            color:#fff !important;
            background:transparent !important;
          }
        }
      }
    }

    .childCard{
      border:none;

      .tableContent{
        .li{
          background-color:rgba(0, 0, 0, 0.5);
        }

        .li:nth-child(2n - 1){
          background-color:rgba(0, 0, 0, 0.2);
        }
      }
    }

    .empty{
      height:30%;
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
      z-index:3;
    }
  }
}
</style>




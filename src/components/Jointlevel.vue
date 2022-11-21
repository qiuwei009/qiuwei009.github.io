<template>
  <div class='Jointlevel flex-c'>
    <div v-if='!state.data.single && !state.data.noAll'>
      <i :class="state.data.checkId.length === state.num?'icon-circleyuanquan':'icon-circle2yuanquan'" class='iconfont cursor ' @click='state.all()'>全选</i>
    </div>
    <div :class="state.data.column?'flex column':'flex wrap child'">
      <div v-for='i in state.data.list' :class="i[state.data.child]&&i[state.data.child].length?'line':''" class='li'>
        <i :class="state.data.checkId.includes(i[state.data.value])?'icon-circleyuanquan':'icon-circle2yuanquan'" :style="state.data.checkLevelOpen && i.level && i.level !== state.data.checkLevel?'color:#ccc;text-decoration: line-through;':''" class='iconfont cursor omit child-line' @click='state.one(i)'>{{ i[state.data.key] }}</i>
        <p v-if='i[state.data.child]' :class="state.data.column2?'flex column ':'flex wrap'" class='childP' style='padding-left: 20px;'>
          <Jointlevel :data='{
              name: state.data.name,
              list: i[state.data.child],
              checkId: state.data.checkId,//  选中项
              checkLevel: state.data.checkLevel,
              checkLevelOpen: state.data.checkLevelOpen,
              key: state.data.key,
              value: state.data.value,
              child: state.data.child,
              column: state.data.column2, //  true 纵向排列
              column2: state.data.column2, //  true 纵向排列
              single: state.data.single, //  true 单选
              noAll: state.data.noAll || true, //false 显示全选 true 不显示
          }' @checkId='state.childOne'></Jointlevel>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted, reactive, watch} from 'vue';

export default defineComponent({
  name: 'Jointlevel',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          name: '',
          list: [],
          checkId: [],//  选中项
          checkLevel: null,
          checkLevelOpen: false,
          key: 'name',
          value: 'id',
          child: 'children',
          column: true, //  true 纵向排列
          column2: true, //  true 纵向排列
          single: false, //  true 单选
          noAll: false //false 显示全选 true 不显示
        };
      }
    }
  },

  setup(props, {emit}) {
    const state = reactive({
      data: {
        name: '',
        list: [],
        checkId: [],//  选中项
        checkLevel: null,
        checkLevelOpen: false,
        key: 'name',
        value: 'id',
        child: 'children',
        column: true, //  true 纵向排列
        column2: true, //  true 纵向排列
        single: false, //  true 单选
        noAll: false //false 显示全选 true 不显示
      },
      num: null,
      allArray: [],
      getAll(list) {
        list.forEach(i => {
          state.allArray.push(i[state.data.value]);
          if (i[state.data.child]) {
            // i[state.data.child].forEach(j => {
            //   if (state.data.checkId.includes(j[state.data.value])) state.data.checkId.push(i[state.data.value])
            // })
            state.getAll(i[state.data.child]);
          }
        });
      },
      all(type) {
        state.getAll(state.data.list);
        state.data.checkId = [...new Set([...state.data.checkId])];
        state.getNum();
        if (type) {
          state.data.checkId = [...new Set([...state.allArray])];
        } else {
          if (state.data.checkId.length === state.num) {
            state.data.checkId = [];
          } else {
            state.data.checkId = [...new Set([...state.allArray])];
          }
        }

        emit('checkId', {
          name: state.data.name,
          checkId: state.data.checkId
        });
      },
      getNum() {
        let num = props.data.list.length;
        props.data.list.forEach(i => {
          if (i[state.data.child]) {
            num += i[state.data.child].length;
            i[state.data.child].forEach(j => {
              if (j[state.data.child]) {
                num += j[state.data.child].length;
                j[state.data.child].forEach(k => {
                  if (k[state.data.child]) {
                    num += k[state.data.child].length;
                  }
                });
              }
            });
          }
        });
        state.num = num;
      },
      checkChildAll(list, row) {
        list.forEach(i => {
          if (i[state.data.value] === row[state.data.value]) {
            // 一级
            state.data.checkId.push(row[state.data.value]);
            if (i[state.data.child] && i[state.data.child].length) {
              i[state.data.child].forEach(j => {
                // 二级
                state.data.checkId.push(j[state.data.value]);
                if (j[state.data.child] && j[state.data.child].length) {
                  j[state.data.child].forEach(k => {
                    // 三级
                    state.data.checkId.push(k[state.data.value]);
                    if (k[state.data.child] && k[state.data.child].length) {
                      k[state.data.child].forEach(l => {
                        // 四级
                        state.data.checkId.push(l[state.data.value]);
                      });
                    }
                  });
                }
              });
            }
          }
        });
        state.getAll(state.data.list);
        state.data.checkId = [...new Set([...state.data.checkId])];
      },
      removeChildAll(list, row) {
        list.forEach(i => {
          if (i[state.data.value] === row[state.data.value]) {
            let index = state.data.checkId.indexOf(i[state.data.value]);
            if (index !== -1) state.data.checkId.splice(index, 1);
            if (i[state.data.child] && i[state.data.child].length) {
              i[state.data.child].forEach(j => {
                let index = state.data.checkId.indexOf(j[state.data.value]);
                if (index !== -1) state.data.checkId.splice(index, 1);
                this.removeChildAll(i[state.data.child], j);
              });
            }
          }
          if (i[state.data.child] && i[state.data.child].length) {
            i[state.data.child].forEach(j => {
              if (j[state.data.value] === row[state.data.value]) {
                let index = state.data.checkId.indexOf(j[state.data.value]);
                if (index !== -1) state.data.checkId.splice(index, 1);
                this.removeChildAll(i[state.data.child], j);
              } else {
                this.removeChildAll(i[state.data.child], row);
              }
            });
          }
        });
      },
      one(i) {
        if (state.data.checkLevelOpen && i.level && i.level !== state.data.checkLevel) {
          return false;
        }
        state.getNum();
        if (state.data.single) {
          state.data.checkId = [i[state.data.value]];
        } else {
          if (!state.data.checkId.includes(i[state.data.value])) {
            this.checkChildAll(state.data.list, i);
          } else {
            this.removeChildAll(state.data.list, i);
          }
          state.getEE(state.data.list);
        }

        state.data.checkId = [...new Set([...state.data.checkId])];
        emit('checkId', {
          name: state.data.name,
          checkId: state.data.checkId
        });
      },
      childOne(arr) {
        state.getNum();
        if (state.data.single) {
          state.data.checkId = arr.checkId;
        } else {
          state.getAll(state.data.list);
          state.getEE(state.data.list);
        }
        state.data.checkId = [...new Set([...state.data.checkId])];
        emit('checkId', {
          name: state.data.name,
          checkId: state.data.checkId
        });
      },
      getEE(list, row) {
        list.forEach(i => {
          if (i[state.data.child]) {
            i[state.data.child].forEach(j => {
              if (state.data.checkId.includes(j[state.data.value])) {
                if (!state.data.checkId.includes(i[state.data.value])) state.data.checkId.push(i[state.data.value]);
                if (row) state.data.checkId.push(row[state.data.value]);
                if (j[state.data.child]) state.getEE(j[state.data.child], j);
              }
            });
          }
        });
      }
    });
    watch(props, () => {
      state.data = props.data;
      state.getNum();
      console.log(state.data.checkId.length, state.num);
    });

    onMounted(() => {
      state.data = props.data;
      state.getNum();
    });
    return {
      state
    };
  }
});
</script>

<style lang='less' scoped>
.Jointlevel{
  position:relative;
  user-select:none;


  i{
    color:#2e3141;
    margin:0 5px;

    &:before{
      margin:0 5px;
    }
  }

  .line{
    position:relative;

    &:after{
      content:' ';
      position:absolute;
      top:20px;
      left:17px;
      width:11px;
      border-left:1px solid #ccc;
      height:calc(100% - 33px);
    }
  }

  .childP{
    .Jointlevel{
      border-left:none !important;
    }

    .child-line{
      position:relative;

      &:after{
        content:' ';
        position:absolute;
        top:8px;
        left:-8px;
        border-bottom:1px solid #ccc;
        width:13px;
        height:0 !important;
      }
    }
  }

  .li{
    min-width:80px;
  }

  .li:last-child i:after{
    //display: none;
    height:138%;
  }

  div, p{
    line-height:25px;
  }

  .icon-circleyuanquan{
    //background: #00a0e9;
    &:before{
      color:#387DFF;
    }
  }
}
</style>

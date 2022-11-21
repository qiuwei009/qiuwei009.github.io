<template>
  <div class='Tree flex-c'>
    <div v-if='!state.data.single && !state.data.noAll' class='li'>
      <i :class="state.data.checkId.length === state.num?'icon-circleyuanquan':'icon-circle2yuanquan'" class='iconfont cursor ' @click='state.all()'>全选</i>
    </div>
    <div :class="state.data.column?'flex column':'flex wrap child'">
      <div v-for='i in state.data.list' :class="i[state.data.child]&&i[state.data.child].length?'line':''" class='li'>
        <i :class="state.data.checkId.includes(i[state.data.value])?'icon-circleyuanquan':'icon-circle2yuanquan'" :style="state.data.checkLevelOpen && i.level && i.level !== state.data.checkLevel?'color:#ccc;text-decoration: line-through;':''" class='iconfont cursor omit child-line' @click='state.one(i)'>{{ i[state.data.key] }}</i>
        <p v-if='i[state.data.child]' :class="state.data.column2?'flex column ':'flex wrap'" class='childTreeLine'>
          <Tree :data='{
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
          }' @checkId='state.childOne'></Tree>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        name: '',
        list: [
          {
            'id': 3401111,
            'organizationId': null,
            'parentId': 0,
            'level': 1,
            'name': '武侯区',
            'alias': '武侯区',
            'description': '武侯区',
            'centrePoint': '104.030344,30.645797',
            'boundary': '',
            'createTime': null,
            'status': null,
            'stations': [
              {
                'id': 3694,
                'gridId': 3401,
                'organizationId': null,
                'address': '成都市成华区成致路6号',
                'type': 5,
                'name': '方测科技',
                'alias': '方测科技',
                'adminPhone': null,
                'lng': '104.165475',
                'lat': '30.681352',
                'status': 0,
                'createTime': null,
                'nationId': 0,
                'stationDevices': null,
                'value': -1
              }
            ],
            'children': [
              {
                'id': 358,
                'organizationId': null,
                'parentId': 3402,
                'level': 2,
                'name': '二级区域',
                'alias': '二级区域',
                'description': '二级区域',
                'centrePoint': '104.082659,30.59228',
                'boundary': '',
                'createTime': null,
                'status': null,
                'stations': [
                  {
                    'id': 3695,
                    'gridId': 3581,
                    'organizationId': null,
                    'address': '测试站点',
                    'type': 1,
                    'name': '测试站点',
                    'alias': '测试站点',
                    'adminPhone': null,
                    'lng': '104.15613',
                    'lat': '30.580753',
                    'status': 0,
                    'createTime': null,
                    'nationId': 0,
                    'stationDevices': null,
                    'value': -1
                  }
                ],
                'children': [
                  {
                    'id': 340,
                    'organizationId': null,
                    'parentId': 0,
                    'level': 1,
                    'name': '武侯区',
                    'alias': '武侯区',
                    'description': '武侯区',
                    'centrePoint': '104.030344,30.645797',
                    'boundary': '',
                    'createTime': null,
                    'status': null,
                    'stations': [
                      {
                        'id': 36941,
                        'gridId': 340,
                        'organizationId': null,
                        'address': '成都市成华区成致路6号',
                        'type': 5,
                        'name': '方测科技',
                        'alias': '方测科技',
                        'adminPhone': null,
                        'lng': '104.165475',
                        'lat': '30.681352',
                        'status': 0,
                        'createTime': null,
                        'nationId': 0,
                        'stationDevices': null,
                        'value': -1
                      }
                    ],
                    'children': [
                      {
                        'id': 3582,
                        'organizationId': null,
                        'parentId': 340,
                        'level': 2,
                        'name': '二级区域',
                        'alias': '二级区域',
                        'description': '二级区域',
                        'centrePoint': '104.082659,30.59228',
                        'boundary': '',
                        'createTime': null,
                        'status': null,
                        'stations': [
                          {
                            'id': 3695,
                            'gridId': 3583,
                            'organizationId': null,
                            'address': '测试站点',
                            'type': 1,
                            'name': '测试站点',
                            'alias': '测试站点',
                            'adminPhone': null,
                            'lng': '104.15613',
                            'lat': '30.580753',
                            'status': 0,
                            'createTime': null,
                            'nationId': 0,
                            'stationDevices': null,
                            'value': -1
                          }
                        ],
                        'children': null
                      }
                    ]
                  },
                  {
                    'id': 3572,
                    'organizationId': null,
                    'parentId': 0,
                    'level': 1,
                    'name': '金牛区',
                    'alias': '金牛区',
                    'description': '金牛区',
                    'centrePoint': '104.130038,30.621238',
                    'boundary': '103.97622924819592,30.695071847145982;103.98309570327399,30.540843093513303;104.35388427749274,30.53256334756999;104.3023858644068,30.70510887061997;103.97622924819592,30.69389095222147;',
                    'createTime': null,
                    'status': null,
                    'stations': [],
                    'children': null
                  }
                ]
              }
            ]
          },
          {
            'id': 357,
            'organizationId': null,
            'parentId': 0,
            'level': 1,
            'name': '金牛区',
            'alias': '金牛区',
            'description': '金牛区',
            'centrePoint': '104.130038,30.621238',
            'boundary': '103.97622924819592,30.695071847145982;103.98309570327399,30.540843093513303;104.35388427749274,30.53256334756999;104.3023858644068,30.70510887061997;103.97622924819592,30.69389095222147;',
            'createTime': null,
            'status': null,
            'stations': [],
            'children': [
              {
                'id': 3584,
                'organizationId': null,
                'parentId': 340,
                'level': 2,
                'name': '二级区域',
                'alias': '二级区域',
                'description': '二级区域',
                'centrePoint': '104.082659,30.59228',
                'boundary': '',
                'createTime': null,
                'status': null,
                'stations': [
                  {
                    'id': 3695,
                    'gridId': 3585,
                    'organizationId': null,
                    'address': '测试站点',
                    'type': 1,
                    'name': '测试站点',
                    'alias': '测试站点',
                    'adminPhone': null,
                    'lng': '104.15613',
                    'lat': '30.580753',
                    'status': 0,
                    'createTime': null,
                    'nationId': 0,
                    'stationDevices': null,
                    'value': -1
                  }
                ],
                'children': [
                  {
                    'id': 34011,
                    'organizationId': null,
                    'parentId': 0,
                    'level': 1,
                    'name': '武侯区',
                    'alias': '武侯区',
                    'description': '武侯区',
                    'centrePoint': '104.030344,30.645797',
                    'boundary': '',
                    'createTime': null,
                    'status': null,
                    'stations': [
                      {
                        'id': 36942,
                        'gridId': 340,
                        'organizationId': null,
                        'address': '成都市成华区成致路6号',
                        'type': 5,
                        'name': '方测科技',
                        'alias': '方测科技',
                        'adminPhone': null,
                        'lng': '104.165475',
                        'lat': '30.681352',
                        'status': 0,
                        'createTime': null,
                        'nationId': 0,
                        'stationDevices': null,
                        'value': -1
                      }
                    ],
                    'children': [
                      {
                        'id': 3587,
                        'organizationId': null,
                        'parentId': 340,
                        'level': 2,
                        'name': '二级区域',
                        'alias': '二级区域',
                        'description': '二级区域',
                        'centrePoint': '104.082659,30.59228',
                        'boundary': '',
                        'createTime': null,
                        'status': null,
                        'stations': [
                          {
                            'id': 3695,
                            'gridId': 3588,
                            'organizationId': null,
                            'address': '测试站点',
                            'type': 1,
                            'name': '测试站点',
                            'alias': '测试站点',
                            'adminPhone': null,
                            'lng': '104.15613',
                            'lat': '30.580753',
                            'status': 0,
                            'createTime': null,
                            'nationId': 0,
                            'stationDevices': null,
                            'value': -1
                          }
                        ],
                        'children': null
                      }
                    ]
                  },
                  {
                    'id': 3571,
                    'organizationId': null,
                    'parentId': 0,
                    'level': 1,
                    'name': '金牛区',
                    'alias': '金牛区',
                    'description': '金牛区',
                    'centrePoint': '104.130038,30.621238',
                    'boundary': '103.97622924819592,30.695071847145982;103.98309570327399,30.540843093513303;104.35388427749274,30.53256334756999;104.3023858644068,30.70510887061997;103.97622924819592,30.69389095222147;',
                    'createTime': null,
                    'status': null,
                    'stations': [],
                    'children': null
                  }
                ]
              }
            ]
          }
        ],
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
});
const emit = defineEmits();
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
});

onMounted(() => {
  state.data = props.data;
  state.getNum();
});
</script>

<style lang='less' scoped>
.Tree{
  position:relative;
  user-select:none;

  i{
    display:inline-block;
    min-width:120px;
    color:#2e3141;
    border-radius:15px;

    &:hover{
      background:#00a0e9;
      color:#fff !important;

      &:before{
        color:#fff;
      }
    }

    &:before{
      margin:0 5px 0 10px;
    }
  }


  .li{
    min-width:80px;
    line-height:25px;
  }

  // 线
  .line{
    position:relative;

    &:after{
      content:' ';
      position:absolute;
      top:20px;
      left:17.5px;
      width:0;
      border-left:1px dashed #ccc;
      height:calc(100% - 39px);
    }

  }

  // 子组件线
  .childTreeLine{
    padding-left:18px;

    .child-line{
      position:relative;

      &:after{
        content:' ';
        position:absolute;
        top:12.5px;
        left:-8px;
        border-bottom:1px dashed #ccc;
        width:17px;
        height:0 !important;
      }
    }
  }

  // 选中
  .icon-circleyuanquan{
    color:#3AA0F6 !important;

    &:before{
      color:#387DFF;
    }
  }
}

.dark{
  .Tree{
    i{
      color:#cccccc;
    }
  }
}
</style>

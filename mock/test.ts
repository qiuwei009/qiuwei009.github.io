import {MockMethod} from 'vite-plugin-mock'
// import * as fs from "fs";
export default [//登录
    {
        url: '/oauth', method: 'post', response: ({query}) => {
            return {
                "msg": "登录成功",
                "code": 200,
                access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInNlcnZlciJdLCJleHAiOjE2NTA4MDQzMDMsImF1dGhvcml0aWVzIjpbIio6KjoqIiwiYWRtaW4iXSwianRpIjoiNjk0ZWI2MjUtOTJiNS00NjJjLThlNDEtMjc4Y2FiODQ2MDAzIiwiY2xpZW50X2lkIjoic2NsdyIsInVzZXJuYW1lIjoiYWRtaW4ifQ.BP2OHpKm0wjz5f_P-hyA8egW4XViru_zA7DWAOyGnzU",
                expires_in: 35980,
                jti: "694eb625-92b5-462c-8e41-278cab846003",
                refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInNlcnZlciJdLCJhdGkiOiI2OTRlYjYyNS05MmI1LTQ2MmMtOGU0MS0yNzhjYWI4NDYwMDMiLCJleHAiOjE2NTA4NDAzMDMsImF1dGhvcml0aWVzIjpbIio6KjoqIiwiYWRtaW4iXSwianRpIjoiOTM1NjZkMzEtZDZkMi00ZmE4LTllMjgtNjU5MmVlOGFjMDVmIiwiY2xpZW50X2lkIjoic2NsdyIsInVzZXJuYW1lIjoiYWRtaW4ifQ.JevuSxV21Vn7r0lLiHujbAOTIKhLFaKtp1ErOqzNcII",
                scope: "server",
                token_type: "bearer",
                user_id: 1,
                username: "admin",
                name: "qiuwei",
            }
        },
    }, {
        url: '/getRouters', method: 'get', response: ({query}) => {
            return {
                "msg": "操作成功", "code": 200, "data": [{
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 0,
                    "name": "MAP首页",
                    "parentName": null,
                    "parentId": 5,
                    "orderNum": "0",
                    "router": "/home",
                    "component": null,
                    "menuType": "C",
                    "status": "0",
                    "perms": "",
                    "icon": 'icon-RectangleCopy132',
                    "children": null,
                    "keepalive": true
                },{
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 1,
                    "name": "GAME2",
                    "parentName": null,
                    "parentId": 5,
                    "orderNum": "0",
                    "router": "/game2",
                    "component": null,
                    "menuType": "C",
                    "status": "0",
                    "perms": "",
                    "icon": 'icon-RectangleCopy132',
                    "children": null,
                    "keepalive": true
                },{
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 1,
                    "name": "GAME",
                    "parentName": null,
                    "parentId": 5,
                    "orderNum": "0",
                    "router": "/game",
                    "component": null,
                    "menuType": "C",
                    "status": "0",
                    "perms": "",
                    "icon": 'icon-RectangleCopy132',
                    "children": null,
                    "keepalive": true
                }, {
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 2,
                    "name": "board",
                    "parentName": null,
                    "parentId": 5,
                    "orderNum": "0",
                    "router": "/board",
                    "component": null,
                    "menuType": "C",
                    "status": "0",
                    "perms": "",
                    "icon": 'icon-RectangleCopy132',
                    "children": null,
                    "keepalive": true
                }, {
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 3,
                    "name": "report",
                    "parentName": null,
                    "parentId": 5,
                    "orderNum": "0",
                    "router": "/report",
                    "component": null,
                    "menuType": "C",
                    "status": "0",
                    "perms": "",
                    "icon": 'icon-RectangleCopy132',
                    "children": null,
                    "keepalive": true
                }, {
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 10000,
                    "name": "首页",
                    "parentName": null,
                    "parentId": 5,
                    "orderNum": "0",
                    "router": "/webHome",
                    "component": null,
                    "menuType": "C",
                    "status": "0",
                    "perms": "",
                    "icon": 'icon-RectangleCopy132',
                    "children": null,
                    "keepalive": true
                }, {
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 20000,
                    "name": "分类目录",
                    "parentName": null,
                    "parentId": 5,
                    "orderNum": "1",
                    "router": "/webCatalogue",
                    "component": null,
                    "menuType": "C",
                    "status": "0",
                    "perms": "",
                    "icon": 'icon-RectangleCopy44',
                    "children": null,
                    "keepalive": true
                }, {
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 30000,
                    "name": "文章",
                    "parentName": null,
                    "parentId": 5,
                    "orderNum": "2",
                    "router": "/webWord",
                    "component": null,
                    "menuType": "C",
                    "status": "0",
                    "perms": "",
                    "icon": 'icon-RectangleCopy223',
                    "children": null,
                    "keepalive": true
                }, {
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 40000,
                    "name": "标签",
                    "parentName": null,
                    "parentId": 5,
                    "orderNum": "3",
                    "router": "/webLabel",
                    "component": null,
                    "menuType": "C",
                    "status": "0",
                    "perms": "",
                    "icon": 'icon-RectangleCopy2',
                    "children": null,
                    "keepalive": true
                }, {
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 50000,
                    "name": "友情链接",
                    "parentName": null,
                    "parentId": 5,
                    "orderNum": "4",
                    "router": "/webFriendship",
                    "component": null,
                    "menuType": "C",
                    "status": "0",
                    "perms": "",
                    "icon": 'icon-RectangleCopy37',
                    "children": null,
                    "keepalive": true
                }, {
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 60000,
                    "name": "数据管理",
                    "parentName": null,
                    "parentId": 0,
                    "orderNum": "4",
                    "router": "/dataManage",
                    "component": null,
                    "menuType": "M",
                    "status": "0",
                    "perms": "",
                    "icon": "icon-RectangleCopy212",
                    "children": [{
                        "searchValue": null,
                        "createTime": null,
                        "updateTime": null,
                        "id": 600,
                        "name": "分类目录",
                        "parentName": null,
                        "parentId": 5,
                        "orderNum": "3",
                        "router": "/catalogue",
                        "component": null,
                        "menuType": "C",
                        "status": "0",
                        "perms": "",
                        "icon": null,
                        "children": null,
                        "keepalive": false
                    }, {
                        "searchValue": null,
                        "createTime": null,
                        "updateTime": null,
                        "id": 601,
                        "name": "文章",
                        "parentName": null,
                        "parentId": 5,
                        "orderNum": "3",
                        "router": "/word",
                        "component": null,
                        "menuType": "C",
                        "status": "0",
                        "perms": "",
                        "icon": null,
                        "children": null,
                        "keepalive": false
                    }, {
                        "searchValue": null,
                        "createTime": null,
                        "updateTime": null,
                        "id": 602,
                        "name": "标签",
                        "parentName": null,
                        "parentId": 5,
                        "orderNum": "3",
                        "router": "/label",
                        "component": null,
                        "menuType": "C",
                        "status": "0",
                        "perms": "",
                        "icon": null,
                        "children": null,
                        "keepalive": false
                    }, {
                        "searchValue": null,
                        "createTime": null,
                        "updateTime": null,
                        "id": 603,
                        "name": "友情链接",
                        "parentName": null,
                        "parentId": 5,
                        "orderNum": "3",
                        "router": "/friendship",
                        "component": null,
                        "menuType": "C",
                        "status": "0",
                        "perms": "",
                        "icon": null,
                        "children": null,
                        "keepalive": false
                    },],
                    "keepalive": true
                }, {
                    "searchValue": null,
                    "createTime": null,
                    "updateTime": null,
                    "id": 70000,
                    "name": "系统管理",
                    "parentName": null,
                    "parentId": 0,
                    "orderNum": "2",
                    "router": "/system",
                    "component": null,
                    "menuType": "M",
                    "status": "0",
                    "perms": "",
                    "icon": "icon-RectangleCopy16",
                    "children": [{
                        "searchValue": null,
                        "createTime": null,
                        "updateTime": null,
                        "id": 300,
                        "name": "角色用户",
                        "parentName": null,
                        "parentId": 3,
                        "orderNum": "1",
                        "router": "/role",
                        "component": null,
                        "menuType": "C",
                        "status": "0",
                        "perms": "system:user:list",
                        "icon": null,
                        "children": null,
                        "keepalive": false
                    },],
                    "keepalive": true
                }]
            }
        },
    },

    // home
    {
        url: '/dataManage/home', method: 'get', response: ({query}) => {
            return {
                status: 200, data: {
                    data: [{
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        'author': '奥斯特洛夫斯基',
                        "code": "Administrator",
                        'introduction': '这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。'
                    }, {
                        "id": 2,
                        "title": "名人传",
                        'author': '罗曼罗兰',
                        "code": "Administrator",
                        'introduction': '这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。'
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        'author': '加西亚·马尔克斯',
                        "code": "Administrator",
                        'introduction': '《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。\n' + '\n' + '作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。'
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        'author': '路遥',
                        "code": "Administrator",
                        'introduction': '在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。\n' + '\n' + '这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。'
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        'author': '洪应明',
                        "code": "Administrator",
                        'introduction': '《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。'
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        'author': '罗姆·大卫·塞林',
                        "code": "Administrator",
                        'introduction': '《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。'
                    }, {
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        'author': '奥斯特洛夫斯基',
                        "code": "Administrator",
                        'introduction': '这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。'
                    }, {
                        "id": 2,
                        "title": "名人传",
                        'author': '罗曼罗兰',
                        "code": "Administrator",
                        'introduction': '这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。'
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        'author': '加西亚·马尔克斯',
                        "code": "Administrator",
                        'introduction': '《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。\n' + '\n' + '作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。'
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        'author': '路遥',
                        "code": "Administrator",
                        'introduction': '在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。\n' + '\n' + '这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。'
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        'author': '洪应明',
                        "code": "Administrator",
                        'introduction': '《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。'
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        'author': '罗姆·大卫·塞林',
                        "code": "Administrator",
                        'introduction': '《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。'
                    }, {
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        'author': '奥斯特洛夫斯基',
                        "code": "Administrator",
                        'introduction': '这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。'
                    }, {
                        "id": 2,
                        "title": "名人传",
                        'author': '罗曼罗兰',
                        "code": "Administrator",
                        'introduction': '这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。'
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        'author': '加西亚·马尔克斯',
                        "code": "Administrator",
                        'introduction': '《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。\n' + '\n' + '作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。'
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        'author': '路遥',
                        "code": "Administrator",
                        'introduction': '在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。\n' + '\n' + '这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。'
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        'author': '洪应明',
                        "code": "Administrator",
                        'introduction': '《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。'
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        'author': '罗姆·大卫·塞林',
                        "code": "Administrator",
                        'introduction': '《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。'
                    },], total: 2
                }
            }
        },
    }, {
        url: '/dataManage/home', method: 'post', response: ({query}) => {
            return {
                status: 200, msg: '新增成功'
            }
        },
    }, {
        url: '/dataManage/home', method: 'put', response: ({query}) => {
            return {
                status: 200, msg: '修改成功'
            }
        },
    }, {
        url: '/dataManage/home', method: 'delect', response: ({query}) => {
            return {
                status: 200, msg: '删除成功'
            }
        },
    },

    // 分类
    {
        url: '/dataManage/catalogue', method: 'get', response: ({query}) => {
            // let data = fs.readFileSync('./mock/catalogue.json','utf8');
            // return JSON.parse(data)
            return {
                "status": 200, "data": {
                    "data": [{
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        "author": "奥斯特洛夫斯基",
                        "code": "0",
                        "introduction": "这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。"
                    }, {
                        "id": 2,
                        "title": "名人传",
                        "author": "罗曼罗兰",
                        "code": "1",
                        "introduction": "这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。"
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        "author": "加西亚·马尔克斯",
                        "code": "2",
                        "introduction": "《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。"
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        "author": "路遥",
                        "code": "Administrator",
                        "introduction": "在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。"
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        "author": "洪应明",
                        "code": "Administrator",
                        "introduction": "《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。"
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        "author": "罗姆·大卫·塞林",
                        "code": "Administrator",
                        "introduction": "《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。"
                    }, {
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        "author": "奥斯特洛夫斯基",
                        "code": "Administrator",
                        "introduction": "这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。"
                    }, {
                        "id": 2,
                        "title": "名人传",
                        "author": "罗曼罗兰",
                        "code": "Administrator",
                        "introduction": "这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。"
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        "author": "加西亚·马尔克斯",
                        "code": "Administrator",
                        "introduction": "《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。"
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        "author": "路遥",
                        "code": "Administrator",
                        "introduction": "在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。"
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        "author": "洪应明",
                        "code": "Administrator",
                        "introduction": "《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。"
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        "author": "罗姆·大卫·塞林",
                        "code": "Administrator",
                        "introduction": "《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。"
                    }, {
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        "author": "奥斯特洛夫斯基",
                        "code": "Administrator",
                        "introduction": "这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。"
                    }, {
                        "id": 2,
                        "title": "名人传",
                        "author": "罗曼罗兰",
                        "code": "Administrator",
                        "introduction": "这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。"
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        "author": "加西亚·马尔克斯",
                        "code": "Administrator",
                        "introduction": "《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。"
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        "author": "路遥",
                        "code": "Administrator",
                        "introduction": "在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。"
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        "author": "洪应明",
                        "code": "Administrator",
                        "introduction": "《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。"
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        "author": "罗姆·大卫·塞林",
                        "code": "Administrator",
                        "introduction": "《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。"
                    }, {
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        "author": "奥斯特洛夫斯基",
                        "code": "Administrator",
                        "introduction": "这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。"
                    }, {
                        "id": 2,
                        "title": "名人传",
                        "author": "罗曼罗兰",
                        "code": "Administrator",
                        "introduction": "这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。"
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        "author": "加西亚·马尔克斯",
                        "code": "Administrator",
                        "introduction": "《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。"
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        "author": "路遥",
                        "code": "Administrator",
                        "introduction": "在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。"
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        "author": "洪应明",
                        "code": "Administrator",
                        "introduction": "《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。"
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        "author": "罗姆·大卫·塞林",
                        "code": "Administrator",
                        "introduction": "《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。"
                    }, {
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        "author": "奥斯特洛夫斯基",
                        "code": "Administrator",
                        "introduction": "这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。"
                    }, {
                        "id": 2,
                        "title": "名人传",
                        "author": "罗曼罗兰",
                        "code": "Administrator",
                        "introduction": "这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。"
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        "author": "加西亚·马尔克斯",
                        "code": "Administrator",
                        "introduction": "《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。"
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        "author": "路遥",
                        "code": "Administrator",
                        "introduction": "在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。"
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        "author": "洪应明",
                        "code": "Administrator",
                        "introduction": "《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。"
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        "author": "罗姆·大卫·塞林",
                        "code": "Administrator",
                        "introduction": "《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。"
                    }, {
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        "author": "奥斯特洛夫斯基",
                        "code": "Administrator",
                        "introduction": "这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。"
                    }, {
                        "id": 2,
                        "title": "名人传",
                        "author": "罗曼罗兰",
                        "code": "Administrator",
                        "introduction": "这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。"
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        "author": "加西亚·马尔克斯",
                        "code": "Administrator",
                        "introduction": "《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。"
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        "author": "路遥",
                        "code": "Administrator",
                        "introduction": "在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。"
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        "author": "洪应明",
                        "code": "Administrator",
                        "introduction": "《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。"
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        "author": "罗姆·大卫·塞林",
                        "code": "Administrator",
                        "introduction": "《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。"
                    }, {
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        "author": "奥斯特洛夫斯基",
                        "code": "Administrator",
                        "introduction": "这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。"
                    }, {
                        "id": 2,
                        "title": "名人传",
                        "author": "罗曼罗兰",
                        "code": "Administrator",
                        "introduction": "这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。"
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        "author": "加西亚·马尔克斯",
                        "code": "Administrator",
                        "introduction": "《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。"
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        "author": "路遥",
                        "code": "Administrator",
                        "introduction": "在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。"
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        "author": "洪应明",
                        "code": "Administrator",
                        "introduction": "《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。"
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        "author": "罗姆·大卫·塞林",
                        "code": "Administrator",
                        "introduction": "《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。"
                    }, {
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        "author": "奥斯特洛夫斯基",
                        "code": "Administrator",
                        "introduction": "这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。"
                    }, {
                        "id": 2,
                        "title": "名人传",
                        "author": "罗曼罗兰",
                        "code": "Administrator",
                        "introduction": "这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。"
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        "author": "加西亚·马尔克斯",
                        "code": "Administrator",
                        "introduction": "《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。"
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        "author": "路遥",
                        "code": "Administrator",
                        "introduction": "在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。"
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        "author": "洪应明",
                        "code": "Administrator",
                        "introduction": "《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。"
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        "author": "罗姆·大卫·塞林",
                        "code": "Administrator",
                        "introduction": "《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。"
                    },], "total": 42, "time": "2022-08-01"
                }
            }
        },
    }, {
        url: '/dataManage/catalogue/dict', method: 'get', response: ({query}) => {
            return {
                status: '200', data: {
                    Administrator: '123', Administrator2: 333
                }
            }
        },
    }, {
        url: '/dataManage/catalogue', method: 'post', response: ({query}) => {
            // let data = fs.readFileSync('./mock/catalogue.json','utf8');
            return {
                status: 200, msg: '新增成功'
            }
        },
    }, {
        url: '/dataManage/catalogue', method: 'put', response: ({query}) => {
            return {
                status: 200, msg: '修改成功'
            }
        },
    }, {
        url: '/dataManage/catalogue', method: 'delect', response: ({query}) => {
            return {
                status: 200, msg: '删除成功'
            }
        },
    },

    // 友情链接
    {
        url: '/dataManage/friendship', method: 'get', response: ({query}) => {
            return {
                status: 200, data: {
                    data: [{
                        "id": 1,
                        "title": "成都市环境空气质量精准化管控平台",
                        'author': 'qw',
                        "code": "Administrator",
                        'introduction': 'http://203.57.238.132:1500/login'
                    }, {
                        "id": 2,
                        "title": "Blog云管理",
                        'author': 'qw',
                        "code": "Administrator",
                        'introduction': 'http://119.3.27.196/login'
                    }], total: 2
                }
            }
        },
    }, {
        url: '/dataManage/friendship', method: 'post', response: ({query}) => {
            return {
                status: 200, msg: '新增成功'
            }
        },
    }, {
        url: '/dataManage/friendship', method: 'put', response: ({query}) => {
            return {
                status: 200, msg: '修改成功'
            }
        },
    }, {
        url: '/dataManage/friendship', method: 'delect', response: ({query}) => {
            return {
                status: 200, msg: '删除成功'
            }
        },
    },

    // 标签
    {
        url: '/dataManage/label', method: 'get', response: ({query}) => {
            return {
                status: 200, data: {
                    data: [{
                        "id": 1,
                        "title": "成都市环境空气质量精准化管控平台",
                        'author': 'qw',
                        "code": "Administrator",
                        'introduction': 'http://203.57.238.132:1500/login'
                    }, {
                        "id": 2,
                        "title": "Blog云管理",
                        'author': 'qw',
                        "code": "Administrator",
                        'introduction': 'http://119.3.27.196/login'
                    }], total: 2
                }
            }
        },
    }, {
        url: '/dataManage/label', method: 'post', response: ({query}) => {
            return {
                status: 200, msg: '新增成功'
            }
        },
    }, {
        url: '/dataManage/label', method: 'put', response: ({query}) => {
            return {
                status: 200, msg: '修改成功'
            }
        },
    }, {
        url: '/dataManage/label', method: 'delect', response: ({query}) => {
            return {
                status: 200, msg: '删除成功'
            }
        },
    },

    // 文章
    {
        url: '/dataManage/word', method: 'get', response: ({query}) => {
            return {
                status: 200, data: {
                    data: [{
                        "id": 1,
                        "title": "钢铁是怎样炼成的",
                        'author': '奥斯特洛夫斯基',
                        "code": "Administrator",
                        'introduction': '这本书讲述了保尔柯察金的大无畏精神、钢铁一般的意志，激励我们要为理想而努力奋斗。'
                    }, {
                        "id": 2,
                        "title": "名人传",
                        'author': '罗曼罗兰',
                        "code": "Administrator",
                        'introduction': '这本书包含了《贝多芬传》、《米开朗琪罗传》和《托尔斯泰传》。贝多芬、米开朗琪罗、托尔斯泰，这三个人物虽然是不同的领域，但是他们都是通过坚持不懈的奋斗、历尽苦难，依靠坚强的意志而成为不同领域的泰山北斗。'
                    }, {
                        "id": 3,
                        "title": "百年孤独",
                        'author': '加西亚·马尔克斯',
                        "code": "Administrator",
                        'introduction': '《百年孤独》，是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是其代表作，也是拉丁美洲魔幻现实主义文学的代表作，被誉为“再现拉丁美洲历史社会图景的鸿篇巨著”。\n' + '\n' + '作品描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪重要的经典文学巨著之一。'
                    }, {
                        "id": 4,
                        "title": "平凡的世界",
                        'author': '路遥',
                        "code": "Administrator",
                        'introduction': '在这本书里，你总能找到相似的自己。没有什么奇迹，没有什么一举成名，没有什么一夜暴富。它讲述的是最平凡的人和最平凡的现实。\n' + '\n' + '这本书可以让你沉淀下来，看清现实，会让你以一颗最坚韧地心，去拼搏，去奋斗，去经受挫折，去经受苦难，去面对未来。'
                    }, {
                        "id": 5,
                        "title": "菜根谭",
                        'author': '洪应明',
                        "code": "Administrator",
                        'introduction': '《菜根谭》是明朝还初道人洪应明收集编著的儒家经典，是一部论述修养、人生、处世、出世的语录集。 [1]  其文字简炼明隽，兼采雅俗，言辞中流露出山林意趣，渗透着万物一体的世界观。开出的处世之方偏重心态和人事，悟虚妄真实之理，指出贫富、尊卑、穷达因为心念使善恶、祸福相互转换，告诫世人及时转念，戒贪少欲，取中庸之道。著作前后内容和深度有所不同，反映出了不同的阅历和境界。'
                    }, {
                        "id": 6,
                        "title": "麦田里的守望者",
                        'author': '罗姆·大卫·塞林',
                        "code": "Administrator",
                        'introduction': '《麦田里的守望者》是美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说，首次出版于1951年。塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内，并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界。'
                    },], total: 2
                }
            }
        },
    }, {
        url: '/dataManage/word', method: 'post', response: ({query}) => {
            return {
                status: 200, msg: '新增成功'
            }
        },
    }, {
        url: '/dataManage/word', method: 'put', response: ({query}) => {
            return {
                status: 200, msg: '修改成功'
            }
        },
    }, {
        url: '/dataManage/word', method: 'delect', response: ({query}) => {
            return {
                status: 200, msg: '删除成功'
            }
        },
    },

    // 角色
    {
        url: '/system/roleManage', method: 'get', response: ({query}) => {
            return {
                status: 200, data: {
                    data: [{
                        "id": 1, "role": "超级管理员", "code": "Administrator", 'introduction': '超级管理员简介(introduction)。'
                    }, {
                        "id": 2, "role": "管理员", "code": "numor", 'introduction': '管理员简介(introduction)。'
                    },], total: 2
                }
            }
        },
    }, {
        url: '/system/roleManage', method: 'post', response: ({query}) => {
            return {
                status: 200, msg: '新增成功'
            }
        },
    }, {
        url: '/system/roleManage', method: 'put', response: ({query}) => {
            return {
                status: 200, msg: '修改成功'
            }
        },
    }, {
        url: '/system/roleManage', method: 'delect', response: ({query}) => {
            return {
                status: 200, msg: '删除成功'
            }
        },
    },

    // 用户
    {
        url: '/system/userManage', method: 'get', response: ({query}) => {
            return {
                status: 200, data: {
                    data: [{
                        "id": 1, "name": "邱伟", "code": "Administrator", 'introduction': '超级管理员简介(introduction)。'
                    }, {
                        "id": 2, "name": "杨华勇", "code": "numor", 'introduction': '管理员简介(introduction)。'
                    },], total: 2
                }
            }
        },
    }, {
        url: '/system/userManage', method: 'post', response: ({query}) => {
            return {
                status: 200, msg: '新增成功'
            }
        },
    }, {
        url: '/system/userManage', method: 'put', response: ({query}) => {
            return {
                status: 200, msg: '修改成功'
            }
        },
    }, {
        url: '/system/userManage', method: 'delect', response: ({query}) => {
            return {
                status: 200, msg: '删除成功'
            }
        },
    },

    // 用户group
    {
        url: '/system/userManage/group', method: 'get', response: ({query}) => {
            return {
                status: 200, data: {
                    data: [{
                        "id": 1, "name": "邱伟", "code": "Administrator", 'introduction': '超级管理员简介(introduction)。'
                    }, {
                        "id": 2, "name": "杨华勇", "code": "numor", 'introduction': '管理员简介(introduction)。'
                    },], total: 2
                }
            }
        },
    }, {
        url: '/system/userManage/group', method: 'post', response: ({query}) => {
            return {
                status: 200, msg: '新增成功'
            }
        },
    }, {
        url: '/system/userManage/group', method: 'put', response: ({query}) => {
            return {
                status: 200, msg: '修改成功'
            }
        },
    }, {
        url: '/system/userManage/group', method: 'delect', response: ({query}) => {
            return {
                status: 200, msg: '删除成功'
            }
        },
    },

    // 字典
    {
        url: '/sys_normal_disable', method: 'get', response: ({query}) => {
            return {
                status: 200, data: {
                    data: [{
                        label: 'label0', value: '0', elTagType: 'elTagType', elTagClass: 'elTagClass'
                    }, {
                        label: 'label1', value: '1', elTagType: 'elTagType', elTagClass: 'elTagClass'
                    }, {
                        label: 'label2', value: '2', elTagType: 'elTagType', elTagClass: 'elTagClass'
                    },], total: 3
                }
            }
        },
    }, {
        url: '/sys_user_sex', method: 'get', response: ({query}) => {
            return {
                status: 200, data: {
                    data: [{
                        label: '女', value: '0', elTagType: 'elTagType', elTagClass: 'elTagClass'
                    }, {
                        label: '男', value: '1', elTagType: 'elTagType', elTagClass: 'elTagClass'
                    }], total: 2
                }
            }
        },
    },


    {
        url: '/aialarm/list', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": {
                    "total": 92, "rows": [{
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 14:18:24",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28536,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/jfiLgX16614082590300.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6c8e3eb2a9328e31ee5086dba9e9f1e09eea1d2e75a214db762b41dca99ba5ff",
                        "scenePhotoExt": "jfiLgX16614082590300.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AZ9552",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 14:13:21",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28533,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/pmdkvh16614079558140.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=da2ae3eb7cc224ffd48106522d96828063dfdc2040423949a38573567b483d9a",
                        "scenePhotoExt": "pmdkvh16614079558140.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AX8763",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 14:13:13",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28532,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/UfNxfX16614079473260.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6799559d21cc74d5ee570d8b78a53775cee526b140617f1b4bc32b0b841e174e",
                        "scenePhotoExt": "UfNxfX16614079473260.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AZ1736",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:49:50",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28523,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/jWSNEQ16614065450930.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8068955acd5bd03c30f87685f48a3fe11c525d4c7978f1bef8e75cb28c84aa03",
                        "scenePhotoExt": "jWSNEQ16614065450930.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AX5653",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:48:51",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28522,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/HSuYZv16614064862550.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b54c99eb74adac662a89e03a9b06fb9dd1197d66576bd391c6200939c897096b",
                        "scenePhotoExt": "HSuYZv16614064862550.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AY2587",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:40:11",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28518,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/VcwhIR16614059662780.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4c77ff904b63555008387dffc2f92965f89894192c12583f7b4f3f6d64685df3",
                        "scenePhotoExt": "VcwhIR16614059662780.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川ADE323",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:40:07",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28517,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/FenvDd16614059615890.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=338830fb16e52db3762d688c5dfb821f4575f4169833ac561908543fdc1b732d",
                        "scenePhotoExt": "FenvDd16614059615890.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AW6587",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:38:44",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28516,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/pqjgWB16614058788140.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fc5896dd4a970629303a365cf9d09c99027ac81ad949cfcb1f8efe71a42dc42f",
                        "scenePhotoExt": "pqjgWB16614058788140.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AZ6725",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:31:30",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28511,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/QhnISB16614054452920.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fbe4be1659a414ac9b2da69eb80725d761ac8468e52054e32c61b94843323697",
                        "scenePhotoExt": "QhnISB16614054452920.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AAB189",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:30:06",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28510,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/AFbXFj16614053605830.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3a911c098d622b7d00bd84ba9164b5bb5ad5e3544b88cd63b4a40d0b3f074142",
                        "scenePhotoExt": "AFbXFj16614053605830.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川ACV171",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:30:00",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28509,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/BYNITo16614053551970.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=343eb6f67fcd62a220a6c71fb8c2f6fcd823d2afc607c9e60f9d3af104cce94b",
                        "scenePhotoExt": "BYNITo16614053551970.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AZ1716",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:29:53",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28508,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/UCKqfA16614053480830.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4f1bfa353c123dfac5ce083b55a03b68e37529bbbaa7b6875a1c39d75cfda7a0",
                        "scenePhotoExt": "UCKqfA16614053480830.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CoveredWithTarpaulin",
                        "typenamech": "篷布未覆盖",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AAS817",
                        "bodycleanliness": "60%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:28:11",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28503,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/zQEYEs16614052465040.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c6ebf98040d9924ea1e081fadee2cef13029fcfc8d5962de51cc7211a7abece6",
                        "scenePhotoExt": "zQEYEs16614052465040.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AAA982",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:18:17",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28498,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/HccEVQ16614046520410.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7fd87014ff5925a526de1579cd1362dffd599caa3e2e91c5fd73dbf47107a555",
                        "scenePhotoExt": "HccEVQ16614046520410.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川ADK729",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 13:05:11",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28493,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/xLAMMX16614038663160.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ed46b93b60ab63409f51db5501d3e9e79e6546a58c17b2177815b174610fe021",
                        "scenePhotoExt": "xLAMMX16614038663160.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AAK875",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 12:59:59",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28489,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/bbXFoP16614035543970.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8450c67fc0174e404ac64e2bb9715fb6089ad2ca96f461e803033da128e5da90",
                        "scenePhotoExt": "bbXFoP16614035543970.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川ADJ622",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 12:55:04",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28486,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/IJrOOX16614032593290.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e1b3dcbdc006e6322b7253cb20f8a89c5fa66e4408acfa6d1ef6e9717559d134",
                        "scenePhotoExt": "IJrOOX16614032593290.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AX9920",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 12:53:32",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28484,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/hfGMvm16614031669610.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b06269ab54d686581a7930a01319dec3c91f6d8083d18129cdfd2794a2c0f0ae",
                        "scenePhotoExt": "hfGMvm16614031669610.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川AX5963",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 12:51:45",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28481,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/qIhNMq16614030605840.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bfd13a60056a3424d130ba942504b6d1d2f43bc15df211e9646d057cbf456315",
                        "scenePhotoExt": "qIhNMq16614030605840.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川ADJ917",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }, {
                        "searchValue": null,
                        "createBy": null,
                        "createTime": "2022-08-25 12:51:42",
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "params": {},
                        "id": 28480,
                        "code": null,
                        "scenePhoto": "http://203.57.238.132:9000/aipicture/Wdovdi16614030575810.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220825T062457Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=729613cc7936eb0ddcd43f088d6a612ac6d80811e64a3d3c9d3d09256cdcc189",
                        "scenePhotoExt": "Wdovdi16614030575810.jpg",
                        "videoUrl": null,
                        "videoUrlExt": null,
                        "rects": "[]",
                        "number": "0",
                        "status": 0,
                        "typenameen": "CarDirty",
                        "typenamech": "车身洁净不达标",
                        "deviceid": "241346",
                        "devicename": "AIBOX029a066856a994467c",
                        "regionid": 0,
                        "regionname": "",
                        "carnumber": "川ACP507",
                        "bodycleanliness": "20%",
                        "alarmType": "TransportingSlagCar",
                        "pushfactory": "成都九晨科技",
                        "stationName": "道路AI"
                    }]
                }
            }
        },
    }, {
        url: '/alarm/report/fire', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": []
            }
        },
    }, {
        url: '/alarm/report/dust', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": {
                    "pm25": ["0", 15.3, 37.52, 31.95, 24.82, 20.14, 14.01, 15.48, 26.32, 14.04, 12.48, 12.43, 43.22, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
                    "pm10": ["0", 26.17, 65.98, 53.57, 39.97, 37.82, 28.24, 25.04, 45, 25.49, 27.37, 27.27, 77.35, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
                    "time": ["2022-08-25 00:00:00", "2022-08-25 01:00:00", "2022-08-25 02:00:00", "2022-08-25 03:00:00", "2022-08-25 04:00:00", "2022-08-25 05:00:00", "2022-08-25 06:00:00", "2022-08-25 07:00:00", "2022-08-25 08:00:00", "2022-08-25 09:00:00", "2022-08-25 10:00:00", "2022-08-25 11:00:00", "2022-08-25 12:00:00", "2022-08-25 13:00:00", "2022-08-25 14:00:00", "2022-08-25 15:00:00", "2022-08-25 16:00:00", "2022-08-25 17:00:00", "2022-08-25 18:00:00", "2022-08-25 19:00:00", "2022-08-25 20:00:00", "2022-08-25 21:00:00", "2022-08-25 22:00:00"]
                }
            }
        },
    }, {
        url: '/alarm/report/station/pm', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": [{
                    "pm25Ratio": 0.06,
                    "pm10Up": 41.07,
                    "pm10Ratio": 0.09,
                    "pm25": 25.43,
                    "pm10": 44.94,
                    "name": "123",
                    "deviceid": "03510030226987",
                    "pm25Up": 23.91,
                    "stationid": 25
                }, {
                    "pm25Ratio": 0.53,
                    "pm10Up": 29.32,
                    "pm10Ratio": 0.36,
                    "pm25": 21.84,
                    "pm10": 39.89,
                    "name": "测试",
                    "deviceid": "1440-0028-sclw-6505",
                    "pm25Up": 14.26,
                    "stationid": 16
                }]
            }
        },
    }, {
        url: '/alarm/report/station/aqi', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": [{
                    "aqi": 39.29, "name": "123", "online": 0.58, "deviceid": "03510030226987", "stationid": 25
                }, {
                    "aqi": 40.14, "name": "测试", "online": 0.58, "deviceid": "1440-0028-sclw-6505", "stationid": 16
                }]
            }
        },
    }, {
        url: '/alarm/report/all', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": {
                    "trafficFlow": 360,
                    "pm25": 23.63,
                    "normalCar": 0.54,
                    "pm10": 42.42,
                    "fire": 0,
                    "SlagFallingFromSlagTruck": 0,
                    "CoveredWithTarpaulin": 8,
                    "CarDirty": 84
                }
            }
        },
    }, {
        url: '/alarm/report/alarm/dust', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": {
                    "times": ["2022-08-25 00:00:00", "2022-08-25 01:00:00", "2022-08-25 02:00:00", "2022-08-25 03:00:00", "2022-08-25 04:00:00", "2022-08-25 05:00:00", "2022-08-25 06:00:00", "2022-08-25 07:00:00", "2022-08-25 08:00:00", "2022-08-25 09:00:00", "2022-08-25 10:00:00", "2022-08-25 11:00:00", "2022-08-25 12:00:00", "2022-08-25 13:00:00", "2022-08-25 14:00:00", "2022-08-25 15:00:00", "2022-08-25 16:00:00", "2022-08-25 17:00:00", "2022-08-25 18:00:00", "2022-08-25 19:00:00", "2022-08-25 20:00:00", "2022-08-25 21:00:00", "2022-08-25 22:00:00"],
                    "nums": ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
                }
            }
        },
    }, {
        url: '/alarm/report/station', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": [{
                    "address": "测试",
                    "lng": 104.258838,
                    "regionid": 0,
                    "name": "测试",
                    "aqi": 48,
                    "nationid": 0,
                    "aliasS": "46它634t",
                    "id": 16,
                    "type": 3,
                    "aliasD": "123",
                    "deviceid": "1440-0028-sclw-6505",
                    "lat": 30.651826
                }, {
                    "address": "123",
                    "lng": 104.180175,
                    "regionid": 16,
                    "name": "123",
                    "aqi": 6,
                    "nationid": 0,
                    "aliasS": "12",
                    "id": 25,
                    "type": 3,
                    "aliasD": "1234",
                    "deviceid": "03510030226987",
                    "lat": 30.645049
                }, {
                    "address": "多元1",
                    "lng": 104.089543,
                    "regionid": 16,
                    "name": "高空一",
                    "nationid": 0,
                    "aliasS": "高空一",
                    "id": 27,
                    "type": 7,
                    "aliasD": "K04305583",
                    "deviceid": "K04305583",
                    "lat": 30.654286
                }, {
                    "address": "多元",
                    "lng": 104.197385,
                    "regionid": 15,
                    "name": "高空二",
                    "nationid": 0,
                    "aliasS": "高空二",
                    "id": 28,
                    "type": 7,
                    "aliasD": "K04305582",
                    "deviceid": "K04305582",
                    "lat": 30.652728
                }, {
                    "address": "123",
                    "lng": 104.063951,
                    "regionid": 15,
                    "name": "高空三",
                    "nationid": 0,
                    "aliasS": "高空三",
                    "id": 29,
                    "type": 7,
                    "aliasD": "K04305581",
                    "deviceid": "K04305581",
                    "lat": 30.648593
                }, {
                    "address": "123",
                    "lng": 104.140175,
                    "regionid": 16,
                    "name": "高空四",
                    "nationid": 0,
                    "aliasS": "高空四",
                    "id": 30,
                    "type": 7,
                    "aliasD": "K04305580",
                    "deviceid": "K04305580",
                    "lat": 30.645049
                }, {
                    "address": "123",
                    "lng": 104.010175,
                    "regionid": 16,
                    "name": "道路AI",
                    "nationid": 0,
                    "aliasS": "道路AI",
                    "id": 31,
                    "type": 6,
                    "aliasD": "241346",
                    "deviceid": "241346",
                    "lat": 30.645049
                }]
            }
        },
    }, {
        url: '/alarm/report/video', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": []
            }
        },
    }, {
        url: '/alarm/report/cart', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": {
                    "aqi": 39.71, "SlagFallingFromSlagTruck": 0, "CoveredWithTarpaulin": 8, "CarDirty": 85
                }
            }
        },
    }, {
        url: '/alarm/report/fire', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": []
            }
        },
    }, {
        url: '/alarm/report/cart/time', method: 'post', response: ({query}) => {
            return {
                "code": 200, "msg": "success", "data": {
                    "date": ["2022-08-25 00:00:00", "2022-08-25 01:00:00", "2022-08-25 02:00:00", "2022-08-25 03:00:00", "2022-08-25 04:00:00", "2022-08-25 05:00:00", "2022-08-25 06:00:00", "2022-08-25 07:00:00", "2022-08-25 08:00:00", "2022-08-25 09:00:00", "2022-08-25 10:00:00", "2022-08-25 11:00:00", "2022-08-25 12:00:00", "2022-08-25 13:00:00", "2022-08-25 14:00:00", "2022-08-25 15:00:00", "2022-08-25 16:00:00", "2022-08-25 17:00:00", "2022-08-25 18:00:00", "2022-08-25 19:00:00", "2022-08-25 20:00:00", "2022-08-25 21:00:00", "2022-08-25 22:00:00", "2022-08-25 23:00:00"],
                    "篷布未覆盖": [0, 1, 0, 0, 0, 0, 0, 2, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    "车身洁净不达标": [0, 11, 4, 0, 0, 0, 0, 3, 5, 14, 14, 18, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    "车辆掉渣": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            }
        },
    },

] as MockMethod[]
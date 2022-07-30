import{r as y}from"./element-plus.9dccbbcf.js";import{_ as g}from"./index.5f0a35a5.js";import{V as v,v as x,x as w,c,a as l,P as n,M as d,J as b,a1 as M,u as i,F as f,o as m,Z as r,R as u,K as k}from"./@vue.807b2975.js";import"./dayjs.af8763dd.js";import"./axios.1257cc19.js";import"./lodash-es.5d194466.js";import"./@vueuse.3d68ca19.js";import"./@element-plus.5dd6b289.js";import"./async-validator.5d25c98b.js";import"./@popperjs.7a88ba6a.js";import"./@ctrl.2e36ce53.js";import"./vue-router.203fc809.js";import"./pinia.e364e968.js";import"./vue-demi.b3a9cad9.js";/* empty css                    */import"./amfe-flexible.30f45bbf.js";import"./jquery.310f556f.js";import"./lodash.19b22f64.js";import"./vite-plugin-mock.c101b59b.js";import"./mockjs.c44c5d1b.js";import"./path-to-regexp.3eda823b.js";class p{constructor(t,h,e,o,a,s){this.w=t,this.h=h,this.body=[1,2,3,4],this.time=null,this.next=4,this.direction=3,this.fruit=[Math.round(Math.random()*t*h),Math.round(Math.random()*t*h),Math.round(Math.random()*t*h),Math.round(Math.random()*t*h),Math.round(Math.random()*t*h),Math.round(Math.random()*t*h)],this.over=0,this.v=100,this.falg=0,this.control(e,o,a,s)}loopTime(t){this.time=setTimeout(()=>{if(clearTimeout(this.time),this.time=null,this.rule(),this.over===1)return this.loopTime(t)},t)}rule(){this.direction===1?this.next--:this.direction===3?this.next++:this.direction===2?this.next-=this.w:this.direction===4&&(this.next+=this.w);let t=this.fruit.indexOf(this.next);t>-1&&(this.body.unshift(this.body[0]),this.fruit.splice(t,1),this.fruit.push(Math.round(Math.random()*this.w*this.h))),this.next<0?this.direction===2&&(this.next+=this.w*this.h):this.next>this.w*this.h&&this.direction===4&&(this.next-=this.w*this.h),this.body.shift(),this.body.push(this.next),this.body.length>10&&(this.time&&clearTimeout(this.time),this.over=4,y({title:"\u606D\u559C",message:"\u606D\u559C\u4F60\u901A\u5173\u6210\u529F!",type:"success"})),this.body.length%5===0&&this.v-25>0&&this.falg!==this.body.length&&(this.v-=25,this.falg=this.body.length)}start(){this.over=1,this.loopTime(this.v)}suspend(){this.over=2,this.time&&clearTimeout(this.time)}reload(){this.time&&clearTimeout(this.time),this.body=[1,2,3,4],this.time=null,this.next=4,this.direction=3,this.fruit=[Math.round(Math.random()*this.w*this.h),Math.round(Math.random()*this.w*this.h),Math.round(Math.random()*this.w*this.h)],this.over=0,this.v=100}changev(t){t?this.v+=25:this.v-25>0&&(this.v-=25),this.start()}control(t,h,e,o){window.addEventListener("keydown",a=>{a.keyCode==t?this.direction=1:a.keyCode==h?this.direction=2:a.keyCode==e?this.direction=3:a.keyCode==o&&(this.direction=4)})}destroy(){this.body=[],this.time&&clearTimeout(this.time),this.time=null}}const C={class:"game animate__animated animate__fadeInUp"},T={class:"content"},$={class:"flex nowrap"},B=r("\u5F00\u59CB"),j=r("\u6682\u505C"),E=r("\u91CD\u65B0\u5F00\u59CB"),D={id:"gameBox"},I={class:"content flex just-b"},N={class:"flex just-c align-c"},V=r("up"),z={class:"flex just-c align-c"},L=r("left"),F=r("right"),U={class:"flex just-c align-c"},H=r("down"),J={class:"flex just-c align-c"},K=r("up"),O={class:"flex just-c align-c"},P=r("left"),R=r("right"),S={class:"flex just-c align-c"},W=r("down"),Z={setup(_){const t=v({w:60,h:30,it:{body:[1,2,3],w:0,h:0,time:null,next:0,direction:0,fruit:[7,8,9],over:0,v:0,destroy(){},start(){},suspend(){},changev(){}},it2:{body:[1,2,3,4],w:0,h:0,time:null,next:0,direction:0,fruit:[7,8,9],over:0,v:0,destroy(){},start(){},suspend(){},changev(){}},status:["\u672A\u5F00\u59CB","\u6E38\u620F\u4E2D","\u6682\u505C","\u7ED3\u675F","\u901A\u5173"],init(){t.w=Math.floor(document.getElementById("gameBox").offsetWidth/20),t.h=Math.floor(document.getElementById("gameBox").offsetHeight/20),t.it=new p(t.w,t.h,37,38,39,40),t.it2=new p(t.w,t.h,65,87,68,83)},start(h){h?(t.it.start(),t.it2.start()):(t.it.suspend(),t.it2.suspend())},reset(){t.it.reload(),t.it2.reload()},now:new Date().getTime(),last:new Date().getTime()});return x(()=>{t.init(),window.addEventListener("resize",()=>{t.now=new Date().getTime(),(t.now-t.last>100||t.now-t.last===0)&&(t.last=new Date().getTime(),t.init())})}),w(()=>{console.log("\u9500\u6BC1"),t.it.destroy(),t.it2.destroy()}),(h,e)=>{const o=f("el-button"),a=f("el-scrollbar");return m(),c("div",C,[l("div",T,[n(a,{native:!1,noresize:!1,tag:"div"},{default:d(()=>[l("div",$,[n(o,{type:"success",onClick:e[0]||(e[0]=s=>i(t).start(1))},{default:d(()=>[B]),_:1}),n(o,{type:"danger",onClick:e[1]||(e[1]=s=>i(t).start(0))},{default:d(()=>[j]),_:1}),n(o,{type:"warning",onClick:i(t).reset},{default:d(()=>[E]),_:1},8,["onClick"]),n(o,{type:"danger"},{default:d(()=>[r("\u866B1\u901F\u5EA6: "+u(i(t).it.v),1)]),_:1}),n(o,{type:"danger"},{default:d(()=>[r("\u866B2\u901F\u5EA6: "+u(i(t).it2.v),1)]),_:1}),n(o,{round:"",type:"success"},{default:d(()=>[r("\u866B1\u5206\u6570: "+u(i(t).it.body.length*10),1)]),_:1}),n(o,{round:"",type:"success"},{default:d(()=>[r("\u866B2\u5206\u6570: "+u(i(t).it2.body.length*10),1)]),_:1})])]),_:1})]),l("div",D,[(m(!0),c(b,null,M(i(t).w*i(t).h,s=>(m(),c("span",{key:s,class:k([{it:i(t).it.body.includes(s)||i(t).it.fruit.includes(s),itf:i(t).it.body[0]===s,ith:i(t).it.body[i(t).it.body.length-1]===s,it2:i(t).it2.body.includes(s)||i(t).it2.fruit.includes(s),it2f:i(t).it2.body[0]===s,it2h:i(t).it2.body[i(t).it2.body.length-1]===s},"block"])},null,2))),128))]),l("div",I,[l("div",null,[l("p",N,[n(o,{type:"success",onClick:e[2]||(e[2]=s=>i(t).it.direction=2),style:{width:"80px"}},{default:d(()=>[V]),_:1})]),l("p",z,[n(o,{type:"primary",onClick:e[3]||(e[3]=s=>i(t).it.direction=1),style:{width:"80px"}},{default:d(()=>[L]),_:1}),n(o,{type:"warning",onClick:e[4]||(e[4]=s=>i(t).it.direction=3),style:{width:"80px"}},{default:d(()=>[F]),_:1})]),l("p",U,[n(o,{type:"danger",onClick:e[5]||(e[5]=s=>i(t).it.direction=4),style:{width:"80px"}},{default:d(()=>[H]),_:1})])]),l("div",null,[l("p",J,[n(o,{type:"success",onClick:e[6]||(e[6]=s=>i(t).it2.direction=2),style:{width:"80px"}},{default:d(()=>[K]),_:1})]),l("p",O,[n(o,{type:"primary",onClick:e[7]||(e[7]=s=>i(t).it2.direction=1),style:{width:"80px"}},{default:d(()=>[P]),_:1}),n(o,{type:"warning",onClick:e[8]||(e[8]=s=>i(t).it2.direction=3),style:{width:"80px"}},{default:d(()=>[R]),_:1})]),l("p",S,[n(o,{type:"danger",onClick:e[9]||(e[9]=s=>i(t).it2.direction=4),style:{width:"80px"}},{default:d(()=>[W]),_:1})])])])])}}};var pt=g(Z,[["__scopeId","data-v-081896dc"]]);export{pt as default};

import{r as g}from"./element-plus.9dccbbcf.js";import{_ as v}from"./index.b6c0f539.js";import{V as b,v as w,x,c as f,a as u,P as i,M as s,J as M,a1 as k,u as e,F as _,o as p,Z as n,R as c,K as T,ap as C,aq as B}from"./@vue.807b2975.js";import"./dayjs.af8763dd.js";import"./axios.1257cc19.js";import"./lodash-es.5d194466.js";import"./@vueuse.3d68ca19.js";import"./@element-plus.5dd6b289.js";import"./async-validator.5d25c98b.js";import"./@popperjs.7a88ba6a.js";import"./@ctrl.2e36ce53.js";import"./vue-router.203fc809.js";import"./pinia.e364e968.js";import"./vue-demi.b3a9cad9.js";/* empty css                    */import"./amfe-flexible.30f45bbf.js";import"./jquery.310f556f.js";import"./lodash.19b22f64.js";class y{constructor(t,h,d,a,o,m){this.w=t,this.h=h,this.body=[1,2,3,4],this.time=null,this.next=4,this.direction=3,this.fruit=[Math.round(Math.random()*t*h),Math.round(Math.random()*t*h),Math.round(Math.random()*t*h),Math.round(Math.random()*t*h),Math.round(Math.random()*t*h),Math.round(Math.random()*t*h)],this.over=0,this.v=100,this.falg=0,this.control(d,a,o,m)}loopTime(t){this.time=setTimeout(()=>{if(clearTimeout(this.time),this.time=null,this.rule(),this.over===1)return this.loopTime(t)},t)}rule(){this.direction===1?this.next--:this.direction===3?this.next++:this.direction===2?this.next-=this.w:this.direction===4&&(this.next+=this.w);let t=this.fruit.indexOf(this.next);t>-1&&(this.body.unshift(this.body[0]),this.fruit.splice(t,1),this.fruit.push(Math.round(Math.random()*this.w*this.h))),this.next<0?this.direction===2&&(this.next+=this.w*this.h):this.next>this.w*this.h&&this.direction===4&&(this.next-=this.w*this.h),this.body.shift(),this.body.push(this.next),this.body.length>10&&(this.time&&clearTimeout(this.time),this.over=4,g({title:"\u606D\u559C",message:"\u606D\u559C\u4F60\u901A\u5173\u6210\u529F!",type:"success"})),this.body.length%5===0&&this.v-25>0&&this.falg!==this.body.length&&(this.v-=25,this.falg=this.body.length)}start(){this.over=1,this.loopTime(this.v)}suspend(){this.over=2,this.time&&clearTimeout(this.time)}reload(){this.time&&clearTimeout(this.time),this.body=[1,2,3,4],this.time=null,this.next=4,this.direction=3,this.fruit=[Math.round(Math.random()*this.w*this.h),Math.round(Math.random()*this.w*this.h),Math.round(Math.random()*this.w*this.h)],this.over=0,this.v=100}changev(t){t?this.v+=25:this.v-25>0&&(this.v-=25),this.start()}control(t,h,d,a){window.addEventListener("keydown",o=>{o.keyCode==t?this.direction=1:o.keyCode==h?this.direction=2:o.keyCode==d?this.direction=3:o.keyCode==a&&(this.direction=4)})}destroy(){this.body=[],this.time&&clearTimeout(this.time),this.time=null}}const E=l=>(C("data-v-125b2455"),l=l(),B(),l),I={class:"game"},D=n("\u9996\u9875"),N=n("\u5206\u7C7B\u76EE\u5F55"),L=n("\u6587\u7AE0"),S=n("\u6807\u7B7E"),V=n("\u53CB\u60C5\u94FE\u63A5"),z=n("\u6E38\u620F"),F=n("login"),H={class:"content"},W={class:"flex nowrap"},$=E(()=>u("a",{href:"/"},"\u8FD4\u56DE\u767B\u5F55\u9875!",-1)),q=n("\u5F00\u59CB"),J=n("\u6682\u505C"),K=n("\u91CD\u65B0\u5F00\u59CB"),O={id:"gameBox"},P={setup(l){const t=b({w:60,h:30,it:{body:[1,2,3],w:0,h:0,time:null,next:0,direction:0,fruit:[7,8,9],over:0,v:0,destroy(){},start(){},suspend(){},changev(){}},it2:{body:[1,2,3,4],w:0,h:0,time:null,next:0,direction:0,fruit:[7,8,9],over:0,v:0,destroy(){},start(){},suspend(){},changev(){}},status:["\u672A\u5F00\u59CB","\u6E38\u620F\u4E2D","\u6682\u505C","\u7ED3\u675F","\u901A\u5173"],init(){t.w=Math.floor(document.getElementById("gameBox").offsetWidth/20),t.h=Math.floor(document.getElementById("gameBox").offsetHeight/20),t.it=new y(t.w,t.h,37,38,39,40),t.it2=new y(t.w,t.h,65,87,68,83)},start(h){h?(t.it.start(),t.it2.start()):(t.it.suspend(),t.it2.suspend())},reset(){t.it.reload(),t.it2.reload()},now:new Date().getTime(),last:new Date().getTime()});return w(()=>{t.init(),window.addEventListener("resize",()=>{t.now=new Date().getTime(),(t.now-t.last>100||t.now-t.last===0)&&(t.last=new Date().getTime(),t.init())})}),x(()=>{console.log("\u9500\u6BC1"),t.it.destroy(),t.it2.destroy()}),(h,d)=>{const a=_("router-link"),o=_("el-button"),m=_("el-scrollbar");return p(),f("div",I,[u("header",null,[i(a,{to:"/webHome"},{default:s(()=>[D]),_:1}),i(a,{to:"/webCatalogue"},{default:s(()=>[N]),_:1}),i(a,{to:"/webWord"},{default:s(()=>[L]),_:1}),i(a,{to:"/webLabel"},{default:s(()=>[S]),_:1}),i(a,{to:"/webFriendship"},{default:s(()=>[V]),_:1}),i(a,{to:"/game"},{default:s(()=>[z]),_:1}),i(a,{className:"fr animate__animated animate__bounce",to:"/login"},{default:s(()=>[F]),_:1})]),u("div",H,[i(m,{native:!1,noresize:!1,tag:"div"},{default:s(()=>[u("div",W,[i(o,{type:"success"},{default:s(()=>[$]),_:1}),i(o,{type:"success",onClick:d[0]||(d[0]=r=>e(t).start(1))},{default:s(()=>[q]),_:1}),i(o,{type:"danger",onClick:d[1]||(d[1]=r=>e(t).start(0))},{default:s(()=>[J]),_:1}),i(o,{type:"warning",onClick:e(t).reset},{default:s(()=>[K]),_:1},8,["onClick"]),i(o,{type:"danger"},{default:s(()=>[n("\u866B1\u901F\u5EA6: "+c(e(t).it.v),1)]),_:1}),i(o,{type:"danger"},{default:s(()=>[n("\u866B2\u901F\u5EA6: "+c(e(t).it2.v),1)]),_:1}),i(o,{round:"",type:"success"},{default:s(()=>[n("\u866B1\u5206\u6570: "+c(e(t).it.body.length*10),1)]),_:1}),i(o,{round:"",type:"success"},{default:s(()=>[n("\u866B2\u5206\u6570: "+c(e(t).it2.body.length*10),1)]),_:1})])]),_:1})]),u("div",O,[(p(!0),f(M,null,k(e(t).w*e(t).h,r=>(p(),f("span",{key:r,class:T([{it:e(t).it.body.includes(r)||e(t).it.fruit.includes(r),itf:e(t).it.body[0]===r,ith:e(t).it.body[e(t).it.body.length-1]===r,it2:e(t).it2.body.includes(r)||e(t).it2.fruit.includes(r),it2f:e(t).it2.body[0]===r,it2h:e(t).it2.body[e(t).it2.body.length-1]===r},"block"])},null,2))),128))])])}}};var dt=v(P,[["__scopeId","data-v-125b2455"]]);export{dt as default};

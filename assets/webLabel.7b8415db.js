import{_,b as u}from"./index.b6c0f539.js";import{g as h}from"./request.ccb8ef36.js";import{V as f,v as w,c,a as s,J as g,a1 as v,u as n,P as x,M as m,o as d,K as b,R as o}from"./@vue.807b2975.js";import"./vue-router.203fc809.js";import"./pinia.e364e968.js";import"./vue-demi.b3a9cad9.js";import"./element-plus.9dccbbcf.js";import"./dayjs.af8763dd.js";import"./axios.1257cc19.js";import"./lodash-es.5d194466.js";import"./@vueuse.3d68ca19.js";import"./@element-plus.5dd6b289.js";import"./async-validator.5d25c98b.js";import"./@popperjs.7a88ba6a.js";import"./@ctrl.2e36ce53.js";/* empty css                    */import"./amfe-flexible.30f45bbf.js";import"./jquery.310f556f.js";import"./lodash.19b22f64.js";import"./qs.cbfe7bae.js";import"./side-channel.ed271cce.js";import"./get-intrinsic.1675b33e.js";import"./has-symbols.caae0f97.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.0b5a4f26.js";import"./object-inspect.5a656981.js";const L={className:"webLabel"},y={id:"webLabel",className:"main scroll"},k={className:"main-content"},I=["onClick"],B={class:"title"},C={class:"author"},E={class:"introduction omit4"},N={class:"select condition"},z={class:"text"},D={setup(S){let r=new Date;const e=f({list:{name:"roleList",header:[{name:"\u4E66\u540D",width:"200px",key:"title",color:"#9495a9"},{name:"\u4F5C\u8005",width:"100px",key:"author",color:"#9495a9"},{name:"\u4E66\u76EE\u7F16\u7801",width:"100px",key:"code",color:"#9495a9"},{name:"\u7B80\u4ECB",width:"500px",key:"introduction",color:"#9495a9"}],rows:[],page:1,size:20,total:1,currentPage:1,active:0,select:{open:!1,selectAll:!1,id:"",selectId:[]}},async getList(i){i==="search"&&(this.list.page=1);let a=await h("/dataManage/catalogue",{page:this.list.page,size:this.list.size});a.status&&(this.list.rows=a.data.data,this.list.total=a.data.total)},animateScroll(){let i=document.querySelectorAll(".animated"),a=window.document.body.clientHeight+100;i.forEach(t=>{t.getBoundingClientRect().top<a?t.classList.add("animate__fadeInUp"):t.classList.remove("animate__fadeInUp")});let l=new Date().getTime();(l-r>10||l-r===0)&&(r=new Date().getTime())},info:{show:!1,name:"textInfo",w:"100%",title:"\u8BE6\u60C5",text:""},show(i){e.info.show=!0,e.info.title=i.title,e.info.text=i.introduction},hide(){e.info.show=!1}});return w(()=>{e.getList(null),document.getElementById("webLabel").addEventListener("scroll",i=>{e.animateScroll()})}),(i,a)=>{const l=u;return d(),c("div",L,[s("div",y,[s("div",k,[(d(!0),c(g,null,v(n(e).list.rows,(t,p)=>(d(),c("div",{class:b([p<10?"animate__fadeInUp":"","card main-item animated animate__animated"]),onClick:M=>n(e).show(t)},[s("p",B,o(t.title),1),s("p",C,o(t.author),1),s("p",E,o(t.introduction)+o(t.introduction)+o(t.introduction)+o(t.introduction)+o(t.introduction),1)],10,I))),256))])]),x(l,{info:n(e).info,onHide:a[0]||(a[0]=t=>n(e).hide())},{title:m(()=>[s("span",N,o(n(e).info.title),1)]),main:m(()=>[s("div",z,o(n(e).info.text),1)]),page:m(()=>[]),_:1},8,["info"])])}}};var lt=_(D,[["__scopeId","data-v-2756f3e8"]]);export{lt as default};

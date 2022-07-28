var x=Object.defineProperty,S=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var T=(e,a,t)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a||(a={}))P.call(a,t)&&T(e,t,a[t]);if(k)for(var t of k(a))N.call(a,t)&&T(e,t,a[t]);return e},f=(e,a)=>S(e,L(a));import{b as O}from"./axios.1257cc19.js";import{l as g}from"./qs.cbfe7bae.js";import{u as B}from"./index.b6c0f539.js";import{a as s,E as w}from"./element-plus.9dccbbcf.js";const n=B();let D="/",h=new Date().getTime(),b=new Date().getTime(),c=null,u=0;const i=O.create({baseURL:D,timeout:15e3});i.interceptors.request.use(e=>{e.method==="get"&&(e.data=!0);let a=JSON.parse(window.sessionStorage.getItem("SYSTEM_TOKEN"))||"";if(a)if(e.headers.Authorization=a,e.method==="get"){let t=e.params;e.params=f(y({},t),{token:a})}else e.data=g.stringify(f(y({},g.parse(e.data)),{token:a}));return e},e=>Promise.reject(e));i.interceptors.response.use(e=>{switch(h=new Date().getTime(),h-b>2e3||h-b===0?(b=new Date().getTime(),c=setTimeout(()=>{n.setLoading(!1)},1e3)):(c&&clearTimeout(c),c=setTimeout(()=>{n.setLoading(!1)},1e3)),e.data.code){case 400:e.data.message="\u8BF7\u6C42\u9519\u8BEF(400)",s({duration:1e3,type:"error",message:e.data.msg});break;case 401:u++,u===1&&w.confirm("\u60A8\u7684\u767B\u5F55\u9A8C\u8BC1\u5DF2\u5931\u6548,\u4E3A\u4FDD\u8BC1\u5B89\u5168,\u8BF7\u91CD\u65B0\u767B\u5F55!","\u767B\u5F55\u9A8C\u8BC1\u5DF2\u5931\u6548\u672A\u6388\u6743(401)",{confirmButtonText:"\u9000\u51FA",cancelButtonText:"\u53D6\u6D88",type:"success"}).then(()=>{location.href="/login"}).catch(()=>{location.href="/login"});break;case 403:e.data.message="\u62D2\u7EDD\u8BBF\u95EE(403)",s({duration:1e3,type:"error",message:e.data.msg});break;case 404:e.data.message="\u8BF7\u6C42\u51FA\u9519(404)",s({duration:1e3,type:"error",message:e.data.msg});break;case 408:e.data.message="\u8BF7\u6C42\u8D85\u65F6(408)",s({duration:1e3,type:"error",message:e.data.msg});break;case 500:e.data.message="\u670D\u52A1\u5668\u9519\u8BEF(500)",s({duration:1e3,type:"error",message:e.data.msg});break;case 501:e.data.message="\u670D\u52A1\u672A\u5B9E\u73B0(501)",s({duration:1e3,type:"error",message:e.data.msg});break;case 502:e.data.message="\u7F51\u7EDC\u9519\u8BEF(502)",s({duration:1e3,type:"error",message:e.data.msg});break;case 503:e.data.message="\u670D\u52A1\u4E0D\u53EF\u7528(503)",s({duration:1e3,type:"error",message:e.data.msg});break;case 504:e.data.message="\u7F51\u7EDC\u8D85\u65F6(504)",s({duration:1e3,type:"error",message:e.data.msg});break;case 505:e.data.message="HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)",s({duration:1e3,type:"error",message:e.data.msg});break}return e},e=>{switch(e.code){case 400:response.data.message="\u8BF7\u6C42\u9519\u8BEF(400)",s({duration:1e3,type:"error",message:response.data.msg});break;case 401:u++,u===1&&w.confirm("\u60A8\u7684\u767B\u5F55\u9A8C\u8BC1\u5DF2\u5931\u6548,\u4E3A\u4FDD\u8BC1\u5B89\u5168,\u8BF7\u91CD\u65B0\u767B\u5F55!","\u767B\u5F55\u9A8C\u8BC1\u5DF2\u5931\u6548\u672A\u6388\u6743(401)",{confirmButtonText:"\u9000\u51FA",cancelButtonText:"\u53D6\u6D88",type:"success"}).then(()=>{location.href="/login"}).catch(()=>{location.href="/login"});break;case 403:response.data.message="\u62D2\u7EDD\u8BBF\u95EE(403)",s({duration:1e3,type:"error",message:response.data.msg});break;case 404:response.data.message="\u8BF7\u6C42\u51FA\u9519(404)",s({duration:1e3,type:"error",message:response.data.msg});break;case 408:response.data.message="\u8BF7\u6C42\u8D85\u65F6(408)",s({duration:1e3,type:"error",message:response.data.msg});break;case 500:response.data.message="\u670D\u52A1\u5668\u9519\u8BEF(500)",s({duration:1e3,type:"error",message:response.data.msg});break;case 501:response.data.message="\u670D\u52A1\u672A\u5B9E\u73B0(501)",s({duration:1e3,type:"error",message:response.data.msg});break;case 502:response.data.message="\u7F51\u7EDC\u9519\u8BEF(502)",s({duration:1e3,type:"error",message:response.data.msg});break;case 503:response.data.message="\u670D\u52A1\u4E0D\u53EF\u7528(503)",s({duration:1e3,type:"error",message:response.data.msg});break;case 504:response.data.message="\u7F51\u7EDC\u8D85\u65F6(504)",s({duration:1e3,type:"error",message:response.data.msg});break;case 505:response.data.message="HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)",s({duration:1e3,type:"error",message:response.data.msg});break}return n.setLoading(!1),Promise.reject(e)});const p={"Content-Type":"application/json"},l={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},H=(e,a={},t=!1,o=!0)=>new Promise((d,m)=>{o&&n.setLoading(!0),i.post(e,t?JSON.stringify(a):g.stringify(a),{headers:t?p:l}).then(r=>{d(r.data)}).catch(r=>{m(r.data)})}),I=(e,a={},t=!1,o=!0)=>new Promise((d,m)=>{o&&n.setLoading(!0),i.get(e,t?JSON.stringify(a):{params:a},{headers:t?p:l}).then(r=>{d(r.data)}).catch(r=>{m(r.data)})}),U=(e,a={},t=!1,o=!0)=>new Promise((d,m)=>{o&&n.setLoading(!0),i.put(e,t?JSON.stringify(a):g.stringify(a),{headers:t?p:l}).then(r=>{d(r.data)}).catch(r=>{m(r.data)})}),q=(e,a={},t=!1,o=!0)=>new Promise((d,m)=>{o&&n.setLoading(!0),i.delete(e,t?{params:a}:g.stringify(a),{headers:t?p:l}).then(r=>{d(r.data)}).catch(r=>{m(r.data)})});export{U as a,q as d,I as g,H as p};

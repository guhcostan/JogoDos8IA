(function(r){function e(e){for(var n,i,s=e[0],u=e[1],c=e[2],f=0,p=[];f<s.length;f++)i=s[f],t[i]&&p.push(t[i][0]),t[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(r[n]=u[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var r,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var u=o[s];0!==t[u]&&(n=!1)}n&&(a.splice(e--,1),r=i(i.s=o[0]))}return r}var n={},t={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=r,i.c=n,i.d=function(r,e,o){i.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:o})},i.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,e){if(1&e&&(r=i(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)i.d(o,n,function(e){return r[e]}.bind(null,n));return o},i.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return i.d(e,"a",e),e},i.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),o()})({0:function(r,e,o){r.exports=o("56d7")},"56d7":function(r,e,o){"use strict";o.r(e);var n=o("2b0e"),t=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{attrs:{id:"app"}},[r.melhorJogada.numeroJogadas?o("p",[r._v("Numero de passos: "+r._s(r.melhorJogada.numeroJogadas-1))]):o("p",[r._v("Carregando ...")]),r.melhorJogada.numeroJogadas?o("p",[r._v("Passo: "+r._s(r.matriz.numero))]):r._e(),o("div",{staticClass:"jogo"},r._l(r.matriz,function(e){return o("div",{staticClass:"linha"},r._l(e,function(e){return o("div",{staticClass:"bloco",class:{player:0===e}},[o("p",[r._v(r._s(e))])])}),0)}),0)])},a=[];function i(r,e){return"esquerda"===r&&"direita"===e.movimento||("direita"===r&&"esquerda"===e.movimento||("topo"===r&&"baixo"===e.movimento||"baixo"===r&&"topo"===e.movimento))}class s{static StartIa(){const r=1e3;function e(r){var o=Math.floor(9*Math.random());return r.includes(o)?e(r):(r.push(o),o)}var o=new Array(3);function n(){var r=[],o=new Array(3);o[0]=new Array(3),o[1]=new Array(3),o[2]=new Array(3),o[0][0]=e(r),o[0][1]=e(r),o[0][2]=e(r),o[1][0]=e(r),o[1][1]=e(r),o[1][2]=e(r),o[2][0]=e(r),o[2][1]=e(r),o[2][2]=e(r);var t=p(JSON.parse(JSON.stringify(o)));return t>5e3?n():o}o[0]=new Array(3),o[1]=new Array(3),o[2]=new Array(3),o[1][1]=0,o[0][0]=1,o[0][1]=2,o[0][2]=3,o[1][2]=4,o[2][2]=5,o[2][1]=6,o[2][0]=7,o[1][0]=8;var t=n();function a(r,e){var o,n;for(o=0;o<r.length;++o)for(n=0;n<r[o].length;++n)if(r[o][n]===e)return{xPosition:o,yPosition:n};return"erro"}function s(r,e,o){var n=[];return r[e+1]&&r[e+1][o]&&n.push({movimento:"baixo",score:0}),r[e]&&r[e][o+1]&&n.push({movimento:"direita",score:0}),r[e-1]&&r[e-1][o]&&n.push({movimento:"topo",score:0}),r[e]&&r[e][o-1]&&n.push({movimento:"esquerda",score:0}),n}function u(r,e){for(var o=0,n=0;n<r.length;++n)for(var t=0;t<r[n].length;++t){var{xPosition:i,yPosition:s}=a(e,r[n][t]),u=n-i>0?n-i:-1*(n-i),c=t-s>0?t-s:-1*(t-s),l=u+c;o+=l}return o}function c(r,e,n,t){var c=JSON.parse(JSON.stringify(r)),{xPosition:f,yPosition:p}=a(c,0),d=s(c,f,p),m=d[Math.floor(Math.random()*d.length)];while(i(e,m))m=d[Math.floor(Math.random()*d.length)];for(var v=0;v<d.length;++v){var h=l(d[v].movimento,JSON.parse(JSON.stringify(c)));d[v].score=u(h,o)}for(var g=0;g<d.length;++g)d[g].score<m.score&&d[g].movimento!==n&&t>d[g].score&&!i(e,d[g])&&(m=d[g]);return m.movimento}function l(r,e){var o,{xPosition:n,yPosition:t}=a(e,0);switch(r){case"baixo":e[n+1][t]&&(o=e[n+1][t],e[n+1][t]=e[n][t],e[n][t]=o);break;case"esquerda":e[n][t-1]&&(o=e[n][t-1],e[n][t-1]=e[n][t],e[n][t]=o);break;case"topo":e[n-1][t]&&(o=e[n-1][t],e[n-1][t]=e[n][t],e[n][t]=o);break;case"direita":e[n][t+1]&&(o=e[n][t+1],e[n][t+1]=e[n][t],e[n][t]=o);break}return e}async function f(r){var e=0,n=[],t="",a="";while(u(r,o)){var i=c(r,a,t,u(r,o));if(t=a,a=i,l(i,r),n.push(JSON.parse(JSON.stringify(r))),e++,e>5e3)break}return{passos:e,jogadas:n}}function p(r){var e=0,n="",t="";while(u(r,o)){var a=c(r,t,n,u(r,o));if(n=t,t=a,l(a,r),e++,e>5e3)break}return e}function d(r){return new Promise(e=>{setTimeout(()=>{var o=f(r);e(o)},1)})}for(var m=[],v=0;v<r;v++)m[v]=d(JSON.parse(JSON.stringify(t)));return Promise.all(m).then(function(r){for(var e=r[0],o=0;o<r.length;o++)e.passos>r[o].passos&&(e=r[o]);for(var n=0;n<e.jogadas.length;n++);return{matriz:t,numeroJogadas:e.jogadas.length,jogadas:e.jogadas}})}}var u={name:"app",data:function(){return{matriz:[],melhorJogada:{numeroJogadas:null,jogadas:[],matrizInicial:[]}}},mounted(){var r=this;s.StartIa().then(async function(e){r.melhorJogada=e;for(var o=0;o<r.melhorJogada.numeroJogadas;o++)r.matriz=r.melhorJogada.jogadas[o],r.matriz.numero=o,await r.sleep(1e3)})},methods:{sleep(r){return new Promise(e=>setTimeout(e,r))}}},c=u,l=(o("5c0b"),o("2877")),f=Object(l["a"])(c,t,a,!1,null,null,null),p=f.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(r){return r(p)}}).$mount("#app")},"5c0b":function(r,e,o){"use strict";var n=o("5e27"),t=o.n(n);t.a},"5e27":function(r,e,o){}});
//# sourceMappingURL=app.32a2118c.js.map
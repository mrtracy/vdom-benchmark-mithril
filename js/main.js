!function e(t,n,r){function o(i,l){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!l&&s)return s(i,!0);if(a)return a(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";function r(e){var t,n,o=[];for(t=0;t<e.length;t++)n=e[t],o.push(null!==n.children?{tag:"div",attrs:{key:n.key},children:r(n.children)}:{tag:"span",attrs:{key:n.key},children:n.key.toString()});return o}function o(e,t,n){this.container=e,this.a=t,this.b=n}var a=e("vdom-benchmark-base"),i=e("mithril"),l="mithril",s="0.2.0";o.prototype.setUp=function(){},o.prototype.tearDown=function(){i.render(this.container,"",!0)},o.prototype.render=function(){i.render(this.container,{tag:"div",children:r(this.a)})},o.prototype.update=function(){i.render(this.container,{tag:"div",children:r(this.b)})},document.addEventListener("DOMContentLoaded",function(e){a(l,s,o)},!1)},{mithril:2,"vdom-benchmark-base":5}],2:[function(e,t,n){var r=function o(e,t){function n(e){S=e.document,j=e.location,M=e.cancelAnimationFrame||e.clearTimeout,A=e.requestAnimationFrame||e.setTimeout}function r(){var e,t=[].slice.call(arguments),n=!(null==t[1]||B.call(t[1])!==I||"tag"in t[1]||"view"in t[1]||"subtree"in t[1]),r=n?t[1]:{},o="class"in r?"class":"className",a={tag:"div",attrs:{}},i=[];if(B.call(t[0])!=D)throw new Error("selector in m(selector, attrs, children) should be a string");for(;e=U.exec(t[0]);)if(""===e[1]&&e[2])a.tag=e[2];else if("#"===e[1])a.attrs.id=e[2];else if("."===e[1])i.push(e[2]);else if("["===e[3][0]){var l=$.exec(e[3]);a.attrs[l[1]]=l[3]||(l[2]?"":!0)}var s=t.slice(n?2:1);a.children=1===s.length&&B.call(s[0])===R?s[0]:s;for(var u in r)r.hasOwnProperty(u)&&(u===o&&null!=r[u]&&""!==r[u]?(i.push(r[u]),a.attrs[u]=""):a.attrs[u]=r[u]);return i.length>0&&(a.attrs[o]=i.join(" ")),a}function a(e,n,o,u,d,f,h,p,m,g,v){try{(null==d||null==d.toString())&&(d="")}catch(y){d=""}if("retain"===d.subtree)return f;var w=B.call(f),x=B.call(d);if(null==f||w!==x){if(null!=f)if(o&&o.nodes){var b=p-u,C=b+(x===R?d:f.nodes).length;s(o.nodes.slice(b,C),o.slice(b,C))}else f.nodes&&s(f.nodes,f);f=new d.constructor,f.tag&&(f={}),f.nodes=[]}if(x===R){for(var E=0,k=d.length;k>E;E++)B.call(d[E])===R&&(d=d.concat.apply([],d),E--,k=d.length);for(var N=[],_=f.length===d.length,T=0,O=1,j=2,A=3,M={},U=!1,E=0;E<f.length;E++)f[E]&&f[E].attrs&&null!=f[E].attrs.key&&(U=!0,M[f[E].attrs.key]={action:O,index:E});for(var $=0,E=0,k=d.length;k>E;E++)if(d[E]&&d[E].attrs&&null!=d[E].attrs.key){for(var F=0,k=d.length;k>F;F++)d[F]&&d[F].attrs&&null==d[F].attrs.key&&(d[F].attrs.key="__mithril__"+$++);break}if(U){var H=!1;if(d.length!=f.length)H=!0;else for(var J,K,E=0;J=f[E],K=d[E];E++)if(J.attrs&&K.attrs&&J.attrs.key!=K.attrs.key){H=!0;break}if(H){for(var E=0,k=d.length;k>E;E++)if(d[E]&&d[E].attrs&&null!=d[E].attrs.key){var G=d[E].attrs.key;M[G]=M[G]?{action:A,index:E,from:M[G].index,element:f.nodes[M[G].index]||S.createElement("div")}:{action:j,index:E}}var P=[];for(var V in M)P.push(M[V]);var Q=P.sort(i),Y=new Array(f.length);Y.nodes=f.nodes.slice();for(var W,E=0;W=Q[E];E++){if(W.action===O&&(s(f[W.index].nodes,f[W.index]),Y.splice(W.index,1)),W.action===j){var X=S.createElement("div");X.key=d[W.index].attrs.key,e.insertBefore(X,e.childNodes[W.index]||null),Y.splice(W.index,0,{attrs:{key:d[W.index].attrs.key},nodes:[X]}),Y.nodes[W.index]=X}W.action===A&&(e.childNodes[W.index]!==W.element&&null!==W.element&&e.insertBefore(W.element,e.childNodes[W.index]||null),Y[W.index]=f[W.from],Y.nodes[W.index]=W.element)}f=Y}}for(var E=0,Z=0,k=d.length;k>E;E++){var te=a(e,n,f,p,d[E],f[Z],h,p+T||T,m,g,v);te!==t&&(te.nodes.intact||(_=!1),T+=te.$trusted?(te.match(/<[^\/]|\>\s*[^<]/g)||[0]).length:B.call(te)===R?te.length:1,f[Z++]=te)}if(!_){for(var E=0,k=d.length;k>E;E++)null!=f[E]&&N.push.apply(N,f[E].nodes);for(var ne,E=0;ne=f.nodes[E];E++)null!=ne.parentNode&&N.indexOf(ne)<0&&s([ne],[f[E]]);d.length<f.length&&(f.length=d.length),f.nodes=N}}else if(null!=d&&x===I){for(var oe=[],ae=[];d.view;){var ie=d.view.$original||d.view,le="diff"==r.redraw.strategy()&&f.views?f.views.indexOf(ie):-1,se=le>-1?f.controllers[le]:new(d.controller||z),G=d&&d.attrs&&d.attrs.key;if(d=0==re||f&&f.controllers&&f.controllers.indexOf(se)>-1?d.view(se):{tag:"placeholder"},"retain"===d.subtree)return f;G&&(d.attrs||(d.attrs={}),d.attrs.key=G),se.onunload&&ee.push({controller:se,handler:se.onunload}),oe.push(ie),ae.push(se)}if(!d.tag&&ae.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");d.attrs||(d.attrs={}),f.attrs||(f.attrs={});var ue=Object.keys(d.attrs),ce=ue.length>("key"in d.attrs?1:0);if((d.tag!=f.tag||ue.sort().join()!=Object.keys(f.attrs).sort().join()||d.attrs.id!=f.attrs.id||d.attrs.key!=f.attrs.key||"all"==r.redraw.strategy()&&(!f.configContext||f.configContext.retain!==!0)||"diff"==r.redraw.strategy()&&f.configContext&&f.configContext.retain===!1)&&(f.nodes.length&&s(f.nodes),f.configContext&&typeof f.configContext.onunload===L&&f.configContext.onunload(),f.controllers))for(var se,E=0;se=f.controllers[E];E++)typeof se.onunload===L&&se.onunload({preventDefault:z});if(B.call(d.tag)!=D)return;var ne,de=0===f.nodes.length;if(d.attrs.xmlns?g=d.attrs.xmlns:"svg"===d.tag?g="http://www.w3.org/2000/svg":"math"===d.tag&&(g="http://www.w3.org/1998/Math/MathML"),de){if(ne=d.attrs.is?g===t?S.createElement(d.tag,d.attrs.is):S.createElementNS(g,d.tag,d.attrs.is):g===t?S.createElement(d.tag):S.createElementNS(g,d.tag),f={tag:d.tag,attrs:ce?l(ne,d.tag,d.attrs,{},g):d.attrs,children:null!=d.children&&d.children.length>0?a(ne,d.tag,t,t,d.children,f.children,!0,0,d.attrs.contenteditable?ne:m,g,v):d.children,nodes:[ne]},ae.length){f.views=oe,f.controllers=ae;for(var se,E=0;se=ae[E];E++)if(se.onunload&&se.onunload.$old&&(se.onunload=se.onunload.$old),re&&se.onunload){var fe=se.onunload;se.onunload=z,se.onunload.$old=fe}}f.children&&!f.children.nodes&&(f.children.nodes=[]),"select"===d.tag&&"value"in d.attrs&&l(ne,d.tag,{value:d.attrs.value},{},g),e.insertBefore(ne,e.childNodes[p]||null)}else ne=f.nodes[0],ce&&l(ne,d.tag,d.attrs,f.attrs,g),f.children=a(ne,d.tag,t,t,d.children,f.children,!1,0,d.attrs.contenteditable?ne:m,g,v),f.nodes.intact=!0,ae.length&&(f.views=oe,f.controllers=ae),h===!0&&null!=ne&&e.insertBefore(ne,e.childNodes[p]||null);if(typeof d.attrs.config===L){var he=f.configContext=f.configContext||{},pe=function(e,t){return function(){return e.attrs.config.apply(e,t)}};v.push(pe(d,[ne,!de,he,f]))}}else if(typeof d!=L){var N;0===f.nodes.length?(d.$trusted?N=c(e,p,d):(N=[S.createTextNode(d)],e.nodeName.match(q)||e.insertBefore(N[0],e.childNodes[p]||null)),f="string number boolean".indexOf(typeof d)>-1?new d.constructor(d):d,f.nodes=N):f.valueOf()!==d.valueOf()||h===!0?(N=f.nodes,m&&m===S.activeElement||(d.$trusted?(s(N,f),N=c(e,p,d)):"textarea"===n?e.value=d:m?m.innerHTML=d:((1===N[0].nodeType||N.length>1)&&(s(f.nodes,f),N=[S.createTextNode(d)]),e.insertBefore(N[0],e.childNodes[p]||null),N[0].nodeValue=d)),f=new d.constructor(d),f.nodes=N):f.nodes.intact=!0}return f}function i(e,t){return e.action-t.action||e.index-t.index}function l(e,t,n,r,o){for(var a in n){var i=n[a],l=r[a];if(a in r&&l===i)"value"===a&&"input"===t&&e.value!=i&&(e.value=i);else{r[a]=i;try{if("config"===a||"key"==a)continue;if(typeof i===L&&0===a.indexOf("on"))e[a]=d(i,e);else if("style"===a&&null!=i&&B.call(i)===I){for(var s in i)(null==l||l[s]!==i[s])&&(e.style[s]=i[s]);for(var s in l)s in i||(e.style[s]="")}else null!=o?"href"===a?e.setAttributeNS("http://www.w3.org/1999/xlink","href",i):"className"===a?e.setAttribute("class",i):e.setAttribute(a,i):a in e&&"list"!==a&&"style"!==a&&"form"!==a&&"type"!==a&&"width"!==a&&"height"!==a?("input"!==t||e[a]!==i)&&(e[a]=i):e.setAttribute(a,i)}catch(u){if(u.message.indexOf("Invalid argument")<0)throw u}}}return r}function s(e,t){for(var n=e.length-1;n>-1;n--)if(e[n]&&e[n].parentNode){try{e[n].parentNode.removeChild(e[n])}catch(r){}t=[].concat(t),t[n]&&u(t[n])}0!=e.length&&(e.length=0)}function u(e){if(e.configContext&&typeof e.configContext.onunload===L&&(e.configContext.onunload(),e.configContext.onunload=null),e.controllers)for(var t,n=0;t=e.controllers[n];n++)typeof t.onunload===L&&t.onunload({preventDefault:z});if(e.children)if(B.call(e.children)===R)for(var r,n=0;r=e.children[n];n++)u(r);else e.children.tag&&u(e.children)}function c(e,t,n){var r=e.childNodes[t];if(r){var o=1!=r.nodeType,a=S.createElement("span");o?(e.insertBefore(a,r||null),a.insertAdjacentHTML("beforebegin",n),e.removeChild(a)):r.insertAdjacentHTML("beforebegin",n)}else e.insertAdjacentHTML("beforeend",n);for(var i=[];e.childNodes[t]!==r;)i.push(e.childNodes[t]),t++;return i}function d(e,t){return function(n){n=n||event,r.redraw.strategy("diff"),r.startComputation();try{return e.call(t,n)}finally{oe()}}}function f(e){var t=J.indexOf(e);return 0>t?J.push(e)-1:t}function h(e){var t=function(){return arguments.length&&(e=arguments[0]),e};return t.toJSON=function(){return e},t}function p(e,t){var n=function(){return(e.controller||z).apply(this,t)||this},r=function(n){return arguments.length>1&&(t=t.concat([].slice.call(arguments,1))),e.view.apply(e,t?[n].concat(t):[n])};r.$original=e.view;var o={controller:n,view:r};return t[0]&&null!=t[0].key&&(o.attrs={key:t[0].key}),o}function m(){X&&(X(),X=null);for(var e,t=0;e=P[t];t++)if(Q[t]){var n=V[t].controller&&V[t].controller.$$args?[Q[t]].concat(V[t].controller.$$args):[Q[t]];r.render(e,V[t].view?V[t].view(Q[t],n):"")}Z&&(Z(),Z=null),Y=null,W=new Date,r.redraw.strategy("diff")}function g(e){return e.slice(le[r.route.mode].length)}function v(e,t,n){ae={};var o=n.indexOf("?");-1!==o&&(ae=b(n.substr(o+1,n.length)),n=n.substr(0,o));var a=Object.keys(t),i=a.indexOf(n);if(-1!==i)return r.mount(e,t[a[i]]),!0;for(var l in t){if(l===n)return r.mount(e,t[l]),!0;var s=new RegExp("^"+l.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(s.test(n))return n.replace(s,function(){for(var n=l.match(/:[^\/]+/g)||[],o=[].slice.call(arguments,1,-2),a=0,i=n.length;i>a;a++)ae[n[a].replace(/:|\./g,"")]=decodeURIComponent(o[a]);r.mount(e,t[l])}),!0}}function y(e){if(e=e||event,!e.ctrlKey&&!e.metaKey&&2!==e.which){e.preventDefault?e.preventDefault():e.returnValue=!1;for(var t=e.currentTarget||e.srcElement,n="pathname"===r.route.mode&&t.search?b(t.search.slice(1)):{};t&&"A"!=t.nodeName.toUpperCase();)t=t.parentNode;r.route(t[r.route.mode].slice(le[r.route.mode].length),n)}}function w(){"hash"!=r.route.mode&&j.hash?j.hash=j.hash:e.scrollTo(0,0)}function x(e,n){var r={},o=[];for(var a in e){var i=n?n+"["+a+"]":a,l=e[a],s=B.call(l),u=null===l?encodeURIComponent(i):s===I?x(l,i):s===R?l.reduce(function(e,t){return r[i]||(r[i]={}),r[i][t]?e:(r[i][t]=!0,e.concat(encodeURIComponent(i)+"="+encodeURIComponent(t)))},[]).join("&"):encodeURIComponent(i)+"="+encodeURIComponent(l);l!==t&&o.push(u)}return o.join("&")}function b(e){"?"===e.charAt(0)&&(e=e.substring(1));for(var t=e.split("&"),n={},r=0,o=t.length;o>r;r++){var a=t[r].split("="),i=decodeURIComponent(a[0]),l=2==a.length?decodeURIComponent(a[1]):null;null!=n[i]?(B.call(n[i])!==R&&(n[i]=[n[i]]),n[i].push(l)):n[i]=l}return n}function C(e){var n=f(e);s(e.childNodes,K[n]),K[n]=t}function E(e,t){var n=r.prop(t);return e.then(n),n.then=function(n,r){return E(e.then(n,r),t)},n}function k(e,t){function n(e){d=e||u,h.map(function(e){d===s&&e.resolve(f)||e.reject(f)})}function o(e,t,n,o){if((null!=f&&B.call(f)===I||typeof f===L)&&typeof e===L)try{var a=0;e.call(f,function(e){a++||(f=e,t())},function(e){a++||(f=e,n())})}catch(i){r.deferred.onerror(i),f=i,n()}else o()}function a(){var u;try{u=f&&f.then}catch(h){return r.deferred.onerror(h),f=h,d=l,a()}o(u,function(){d=i,a()},function(){d=l,a()},function(){try{d===i&&typeof e===L?f=e(f):d===l&&"function"==typeof t&&(f=t(f),d=i)}catch(a){return r.deferred.onerror(a),f=a,n()}f===c?(f=TypeError(),n()):o(u,function(){n(s)},n,function(){n(d===i&&s)})})}var i=1,l=2,s=3,u=4,c=this,d=0,f=0,h=[];c.promise={},c.resolve=function(e){return d||(f=e,d=i,a()),this},c.reject=function(e){return d||(f=e,d=l,a()),this},c.promise.then=function(e,t){var n=new k(e,t);return d===s?n.resolve(f):d===u?n.reject(f):h.push(n),n.promise}}function N(e){return e}function _(n){if(!n.dataType||"jsonp"!==n.dataType.toLowerCase()){var r=new e.XMLHttpRequest;if(r.open(n.method,n.url,!0,n.user,n.password),r.onreadystatechange=function(){4===r.readyState&&(r.status>=200&&r.status<300?n.onload({type:"load",target:r}):n.onerror({type:"error",target:r}))},n.serialize===JSON.stringify&&n.data&&"GET"!==n.method&&r.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.deserialize===JSON.parse&&r.setRequestHeader("Accept","application/json, text/*"),typeof n.config===L){var o=n.config(r,n);null!=o&&(r=o)}var a="GET"!==n.method&&n.data?n.data:"";if(a&&B.call(a)!=D&&a.constructor!=e.FormData)throw"Request data should be either be a string or FormData. Check the `serialize` option in `m.request`";return r.send(a),r}var i="mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),l=S.createElement("script");e[i]=function(r){l.parentNode.removeChild(l),n.onload({type:"load",target:{responseText:r}}),e[i]=t},l.onerror=function(r){return l.parentNode.removeChild(l),n.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),e[i]=t,!1},l.onload=function(e){return!1},l.src=n.url+(n.url.indexOf("?")>0?"&":"?")+(n.callbackKey?n.callbackKey:"callback")+"="+i+"&"+x(n.data||{}),S.body.appendChild(l)}function T(e,t,n){if("GET"===e.method&&"jsonp"!=e.dataType){var r=e.url.indexOf("?")<0?"?":"&",o=x(t);e.url=e.url+(o?r+o:"")}else e.data=n(t);return e}function O(e,t){var n=e.match(/:[a-z]\w+/gi);if(n&&t)for(var r=0;r<n.length;r++){var o=n[r].slice(1);e=e.replace(n[r],t[o]),delete t[o]}return e}var S,j,A,M,I="[object Object]",R="[object Array]",D="[object String]",L="function",B={}.toString,U=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g,$=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/,q=/^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/,z=function(){};n(e);var F,H={appendChild:function(e){F===t&&(F=S.createElement("html")),S.documentElement&&S.documentElement!==e?S.replaceChild(e,S.documentElement):S.appendChild(e),this.childNodes=S.childNodes},insertBefore:function(e){this.appendChild(e)},childNodes:[]},J=[],K={};r.render=function(e,n,r){var o=[];if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var i=f(e),l=e===S,u=l||e===S.documentElement?H:e;l&&"html"!=n.tag&&(n={tag:"html",attrs:{},children:n}),K[i]===t&&s(u.childNodes),r===!0&&C(e),K[i]=a(u,null,t,t,n,K[i],!1,0,null,t,o);for(var c=0,d=o.length;d>c;c++)o[c]()},r.trust=function(e){return e=new String(e),e.$trusted=!0,e},r.prop=function(e){return(null!=e&&B.call(e)===I||typeof e===L)&&typeof e.then===L?E(e):h(e)};var G,P=[],V=[],Q=[],Y=null,W=0,X=null,Z=null,ee=[],te=16;r.component=function(e){return p(e,[].slice.call(arguments,1))},r.mount=r.module=function(e,t){if(!e)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var n=P.indexOf(e);0>n&&(n=P.length);for(var o,a=!1,i={preventDefault:function(){a=!0,X=Z=null}},l=0;o=ee[l];l++)o.handler.call(o.controller,i),o.controller.onunload=null;if(a)for(var o,l=0;o=ee[l];l++)o.controller.onunload=o.handler;else ee=[];if(Q[n]&&typeof Q[n].onunload===L&&Q[n].onunload(i),!a){r.redraw.strategy("all"),r.startComputation(),P[n]=e,arguments.length>2&&(t=subcomponent(t,[].slice.call(arguments,2)));var s=G=t=t||{controller:function(){}},u=t.controller||z,c=new u;return s===G&&(Q[n]=c,V[n]=t),oe(),Q[n]}};var ne=!1;r.redraw=function(t){ne||(ne=!0,Y&&t!==!0?(A===e.requestAnimationFrame||new Date-W>te)&&(Y>0&&M(Y),Y=A(m,te)):(m(),Y=A(function(){Y=null},te)),ne=!1)},r.redraw.strategy=r.prop();var re=0;r.startComputation=function(){re++},r.endComputation=function(){re=Math.max(re-1,0),0===re&&r.redraw()};var oe=function(){"none"==r.redraw.strategy()?(re--,r.redraw.strategy("diff")):r.endComputation()};r.withAttr=function(e,t){return function(n){n=n||event;var r=n.currentTarget||this;t(e in r?r[e]:r.getAttribute(e))}};var ae,ie,le={pathname:"",hash:"#",search:"?"},se=z,ue=!1;return r.route=function(){if(0===arguments.length)return ie;if(3===arguments.length&&B.call(arguments[1])===D){var t=arguments[0],n=arguments[1],o=arguments[2];se=function(e){var a=ie=g(e);if(!v(t,o,a)){if(ue)throw new Error("Ensure the default route matches one of the routes defined in m.route");ue=!0,r.route(n,!0),ue=!1}};var a="hash"===r.route.mode?"onhashchange":"onpopstate";e[a]=function(){var e=j[r.route.mode];"pathname"===r.route.mode&&(e+=j.search),ie!=g(e)&&se(e)},X=w,e[a]()}else if(arguments[0].addEventListener||arguments[0].attachEvent){var i=arguments[0],l=(arguments[1],arguments[2],arguments[3]);i.href=("pathname"!==r.route.mode?j.pathname:"")+le[r.route.mode]+l.attrs.href,i.addEventListener?(i.removeEventListener("click",y),i.addEventListener("click",y)):(i.detachEvent("onclick",y),i.attachEvent("onclick",y))}else if(B.call(arguments[0])===D){var s=ie;ie=arguments[0];var u=arguments[1]||{},c=ie.indexOf("?"),d=c>-1?b(ie.slice(c+1)):{};for(var f in u)d[f]=u[f];var h=x(d),p=c>-1?ie.slice(0,c):ie;h&&(ie=p+(-1===p.indexOf("?")?"?":"&")+h);var m=(3===arguments.length?arguments[2]:arguments[1])===!0||s===arguments[0];e.history.pushState?(X=w,Z=function(){e.history[m?"replaceState":"pushState"](null,S.title,le[r.route.mode]+ie)},se(le[r.route.mode]+ie)):(j[r.route.mode]=ie,se(le[r.route.mode]+ie))}},r.route.param=function(e){if(!ae)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return ae[e]},r.route.mode="search",r.route.buildQueryString=x,r.route.parseQueryString=b,r.deferred=function(){var e=new k;return e.promise=E(e.promise),e},r.deferred.onerror=function(e){if("[object Error]"===B.call(e)&&!e.constructor.toString().match(/ Error/))throw e},r.sync=function(e){function t(e,t){return function(r){return i[e]=r,t||(n="reject"),0===--a&&(o.promise(i),o[n](i)),r}}var n="resolve",o=r.deferred(),a=e.length,i=new Array(a);if(e.length>0)for(var l=0;l<e.length;l++)e[l].then(t(l,!0),t(l,!1));else o.resolve([]);return o.promise},r.request=function(e){e.background!==!0&&r.startComputation();var t=new k,n=e.dataType&&"jsonp"===e.dataType.toLowerCase(),o=e.serialize=n?N:e.serialize||JSON.stringify,a=e.deserialize=n?N:e.deserialize||JSON.parse,i=n?function(e){return e.responseText}:e.extract||function(e){return 0===e.responseText.length&&a===JSON.parse?null:e.responseText};return e.method=(e.method||"GET").toUpperCase(),e.url=O(e.url,e.data),e=T(e,e.data,o),e.onload=e.onerror=function(n){try{n=n||event;var o=("load"===n.type?e.unwrapSuccess:e.unwrapError)||N,l=o(a(i(n.target,e)),n.target);if("load"===n.type)if(B.call(l)===R&&e.type)for(var s=0;s<l.length;s++)l[s]=new e.type(l[s]);else e.type&&(l=new e.type(l));t["load"===n.type?"resolve":"reject"](l)}catch(n){r.deferred.onerror(n),t.reject(n)}e.background!==!0&&r.endComputation()},_(e),t.promise=E(t.promise,e.initialValue),t.promise},r.deps=function(t){return n(e=t||e),e},r.deps.factory=o,r}("undefined"!=typeof window?window:{});"undefined"!=typeof t&&null!==t&&t.exports?t.exports=r:"function"==typeof define&&define.amd&&define(function(){return r})},{}],3:[function(e,t,n){"use strict";function r(){this.running=!1,this.impl=null,this.tests=null,this.reportCallback=null,this.container=document.createElement("div"),this._runButton=document.getElementById("RunButton"),this._iterationsElement=document.getElementById("Iterations"),this._reportElement=document.createElement("pre"),document.body.appendChild(this.container),document.body.appendChild(this._reportElement);var e=this;this._runButton.addEventListener("click",function(t){if(t.preventDefault(),!e.running){var n=parseInt(e._iterationsElement.value);0>=n&&(n=10),e.run(n)}},!1),this.ready(!0)}var o=e("./executor");r.prototype.ready=function(e){this._runButton.disabled=e?"":"true"},r.prototype.run=function(e){var t=this;this.running=!0,this.ready(!1),new o(t.impl,t.container,t.tests,1,function(){new o(t.impl,t.container,t.tests,e,function(e){t._reportElement.textContent=JSON.stringify(e,null," "),t.running=!1,t.ready(!0),null!=t.reportCallback&&t.reportCallback(e)}).start()}).start()},t.exports=r},{"./executor":4}],4:[function(e,t,n){"use strict";function r(e,t,n,r,o,a){void 0===a&&(a=null),this.impl=e,this.container=t,this.tests=n,this.iterations=r,this.cb=o,this.iterCb=a,this._currentTest=0,this._currentIter=0,this._renderSamples=[],this._updateSamples=[],this._result=[],this._tasksCount=n.length*r,this._iter=this.iter.bind(this)}r.prototype.start=function(){this._iter()},r.prototype.finished=function(){this.cb(this._result)},r.prototype.progress=function(){if(0===this._currentTest&&0===this._currentIter)return 0;var e=this.tests;return(this._currentTest*e.length+this._currentIter)/(e.length*this.iterataions)},r.prototype.iter=function(){null!=this.iterCb&&this.iterCb(this);var e=this.tests;if(this._currentTest<e.length){var t=e[this._currentTest];if(this._currentIter<this.iterations){var n,r,o,a;n=new this.impl(this.container,t.data.a,t.data.b),n.setUp(),r=window.performance.now(),n.render(),o=window.performance.now()-r,r=window.performance.now(),n.update(),a=window.performance.now()-r,n.tearDown(),this._renderSamples.push(o),this._updateSamples.push(a),this._currentIter++}else this._result.push({name:t.name+" render()",data:this._renderSamples.slice(0)}),this._result.push({name:t.name+" update()",data:this._updateSamples.slice(0)}),this._currentTest++,this._currentIter=0,this._renderSamples=[],this._updateSamples=[];setTimeout(this._iter,0)}else this.finished()},t.exports=r},{}],5:[function(e,t,n){"use strict";function r(e,t){var n=document.createElement("script");n.src=e,n.onload=function(){l.tests=window.benchmarkTests(),l.ready(!0)},document.head.appendChild(n)}function o(e,t,n,r){window.addEventListener("message",function(o){var a=o.data,i=a.type;"tests"===i?(l.tests=a.data,l.reportCallback=function(o){e.postMessage({type:"report",data:{name:t,version:n,samples:o},id:r},"*")},l.ready(!0),e.postMessage({type:"ready",data:null,id:r},"*")):"run"===i&&l.run(a.data.iterations)},!1),e.postMessage({type:"init",data:null,id:r},"*")}function a(e,t,n){var a=function(e){if(""==e)return{};for(var t={},n=0;n<e.length;++n){var r=e[n].split("=",2);t[r[0]]=1==r.length?"":decodeURIComponent(r[1].replace(/\+/g," "))}return t}(window.location.search.substr(1).split("&"));void 0!==a.name&&(e=a.name),void 0!==a.version&&(t=a.version);var i,s=a.type;if("iframe"===s)i=a.id,void 0===i&&(i=null),o(window.parent,e,t,i);else if("window"===s)null!=window.opener?(i=a.id,void 0===i&&(i=null),o(window.opener,e,t,i)):console.log("Failed to initialize: opener window is NULL");else{var u=a.data;void 0!==u?r(u):console.log("Failed to initialize: cannot load tests data")}l.impl=n}var i=e("./benchmark"),l=new i;if("undefined"==typeof window.performance&&(window.performance={}),!window.performance.now){var s=Date.now();performance.timing&&performance.timing.navigationStart&&(s=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-s}}t.exports=a},{"./benchmark":3}]},{},[1]);
//# sourceMappingURL=main.js.map
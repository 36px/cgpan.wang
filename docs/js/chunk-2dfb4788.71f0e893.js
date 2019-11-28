(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dfb4788"],{3815:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("MainFrame",[[s("MyView")]],2)],1)},i=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"root"},[s("h1",[t._v("忘记密码")]),s("el-steps",{attrs:{active:t.display.current,"finish-status":"success"}},[s("el-step",{attrs:{title:"填写 Email 地址"}}),s("el-step",{attrs:{title:"验证 Email "}}),s("el-step",{attrs:{title:"设置新密码"}}),s("el-step",{attrs:{title:"完成"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.display.current==t.display.email,expression:"display.current==display.email"}],staticClass:"step-box"},[s("h2",[t._v("填写 Email 地址")]),s("el-input",{staticClass:"input-box",attrs:{placeholder:"Email 地址"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("el-button",{staticClass:"next-btn",attrs:{type:"primary"},on:{click:t.nextForInputEmail}},[t._v("下一步")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.display.current==t.display.verify,expression:"display.current==display.verify"}],staticClass:"step-box"},[s("h2",[t._v("验证 Email")]),s("el-input",{staticClass:"input-box",attrs:{placeholder:"验证码"},model:{value:t.vericode,callback:function(e){t.vericode=e},expression:"vericode"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-message"},on:{click:t.onClickRequestSendMail},slot:"append"},[t._v(t._s(t.verifyCodeButtonText))])],1),s("el-button",{staticClass:"next-btn",attrs:{type:"primary"},on:{click:t.nextForVerifyEmail}},[t._v("下一步")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.display.current==t.display.password,expression:"display.current==display.password"}],staticClass:"step-box"},[s("h2",[t._v("设置新密码")]),s("el-input",{staticClass:"input-box",attrs:{placeholder:"输入：新密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("el-input",{staticClass:"input-box",attrs:{placeholder:"重复：新密码",type:"password"},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),s("el-button",{staticClass:"next-btn",attrs:{type:"primary"},on:{click:t.nextForSetupPassword}},[t._v("提交")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.display.current==t.display.success,expression:"display.current==display.success"}],staticClass:"step-box"},[s("h2",[t._v("成功")]),s("p",[t._v("恭喜！你已经成功设置新密码。")]),s("el-button",{staticClass:"next-btn",attrs:{type:"primary"},on:{click:t.nextForOK}},[t._v("立即登录")])],1)],1)},o=[],h=s("6c27").sha256,n={name:"SignUpView",data(){return{email:"",vericode:"",password:"",password2:"",active:0,verifyCodeButtonText:"获取验证码",verifyCodeTimeout:0,form:{email:"",token:"",code:"",password:""},display:{current:0,email:0,verify:1,password:2,success:3}}},methods:{nextForInputEmail(){this.form.email=this.email,this.display.current++},nextForVerifyEmail(){this.form.code=this.vericode;var t=this,e=e=>{t.display.current++},s=e=>{t.showError(e)};this.requestVerifyVcode(e,s)},nextForSetupPassword(){var t=this.verifyAndHashPassword(this.password,this.password2);if(null!=t){this.form.password=t;var e=this,s=t=>{e.display.current++},r=t=>{e.showError(t)};this.requestResetPassword(s,r)}},nextForOK(){this.$router.push("/login")},onClickRequestSendMail(){if(!(this.verifyCodeTimeout>0)){var t=this;this.verifyCodeTimeout=60,this.verifyCodeButtonText="";var e=()=>{var s=t.verifyCodeTimeout;s>0?(t.verifyCodeButtonText=s+"秒后重试",setTimeout(e,1e3)):t.verifyCodeButtonText="获取验证码",t.verifyCodeTimeout=s-1};this.requestSendMail(),e()}},verifyAndHashPassword(t,e){if(t!=e)return this.$message("密码不相等。"),null;if(t.length<4)return this.$message("请输入有效的密码。"),null;var s=t;return s=h(s),s=h(s),s},requestResetPassword(t,e){var s=this.form.code,r=this.form.email,i=this.form.password,a=this.form.token,o="ResetPassword",h=null,n={auth:{name:r,secret:i},verifyEmail:{email:r,token:a,code:s}};this.$store.dispatch("rest/post",{type:o,id:h,data:n,on_ok:t,on_error:e})},requestVerifyVcode(t,e){var s=this.form.code,r=this.form.email,i=this.form.token,a="VerifyEmail",o=i,h={verifyEmail:{email:r,token:i,code:s}};this.$store.dispatch("rest/put",{type:a,id:o,data:h,on_ok:t,on_error:e})},requestSendMail(t,e){var s=this,r="",i="",a=this.form.email,o="VerifyEmail",h=null,n={verifyEmail:{email:a,token:i,code:r}};t=this.handleEvent(t,t=>{var e=t.verifyEmail.token;s.form.token=e}),this.$store.dispatch("rest/post",{type:o,id:h,data:n,on_ok:t,on_error:e})},handleEvent(t,e){var s=s=>{null!=e&&e(s),null!=t&&t(s)};return s},showError(t){this.$message("Error")}}},l=n,c=(s("e1a4"),s("2877")),u=Object(c["a"])(l,a,o,!1,null,"1cc1ce7e",null),p=u.exports,d={name:"ForgetPassword",components:{MyView:p}},_=d,f=Object(c["a"])(_,r,i,!1,null,null,null);e["default"]=f.exports},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},"6c27":function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,e){return function(s){return new Sha256(e,!0).update(s)[t]()}},createMethod=function(t){var e=createOutputMethod("hex",t);NODE_JS&&(e=nodeWrap(e,t)),e.create=function(){return new Sha256(t)},e.update=function(t){return e.create().update(t)};for(var s=0;s<OUTPUT_TYPES.length;++s){var r=OUTPUT_TYPES[s];e[r]=createOutputMethod(r,t)}return e},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if("string"===typeof t)return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(null===t||void 0===t)throw new Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,e){return function(s,r){return new HmacSha256(s,e,!0).update(r)[t]()}},createHmacMethod=function(t){var e=createHmacOutputMethod("hex",t);e.create=function(e){return new HmacSha256(e,t)},e.update=function(t,s){return e.create(t).update(s)};for(var s=0;s<OUTPUT_TYPES.length;++s){var r=OUTPUT_TYPES[s];e[r]=createHmacOutputMethod(r,t)}return e};function Sha256(t,e){e?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function HmacSha256(t,e,s){var r,i=typeof t;if("string"===i){var a,o=[],h=t.length,n=0;for(r=0;r<h;++r)a=t.charCodeAt(r),a<128?o[n++]=a:a<2048?(o[n++]=192|a>>6,o[n++]=128|63&a):a<55296||a>=57344?(o[n++]=224|a>>12,o[n++]=128|a>>6&63,o[n++]=128|63&a):(a=65536+((1023&a)<<10|1023&t.charCodeAt(++r)),o[n++]=240|a>>18,o[n++]=128|a>>12&63,o[n++]=128|a>>6&63,o[n++]=128|63&a);t=o}else{if("object"!==i)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw new Error(ERROR)}t.length>64&&(t=new Sha256(e,!0).update(t).array());var l=[],c=[];for(r=0;r<64;++r){var u=t[r]||0;l[r]=92^u,c[r]=54^u}Sha256.call(this,e,s),this.update(c),this.oKeyPad=l,this.inner=!0,this.sharedMemory=s}Sha256.prototype.update=function(t){if(!this.finalized){var e,s=typeof t;if("string"!==s){if("object"!==s)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw new Error(ERROR);e=!0}var r,i,a=0,o=t.length,h=this.blocks;while(a<o){if(this.hashed&&(this.hashed=!1,h[0]=this.block,h[16]=h[1]=h[2]=h[3]=h[4]=h[5]=h[6]=h[7]=h[8]=h[9]=h[10]=h[11]=h[12]=h[13]=h[14]=h[15]=0),e)for(i=this.start;a<o&&i<64;++a)h[i>>2]|=t[a]<<SHIFT[3&i++];else for(i=this.start;a<o&&i<64;++a)r=t.charCodeAt(a),r<128?h[i>>2]|=r<<SHIFT[3&i++]:r<2048?(h[i>>2]|=(192|r>>6)<<SHIFT[3&i++],h[i>>2]|=(128|63&r)<<SHIFT[3&i++]):r<55296||r>=57344?(h[i>>2]|=(224|r>>12)<<SHIFT[3&i++],h[i>>2]|=(128|r>>6&63)<<SHIFT[3&i++],h[i>>2]|=(128|63&r)<<SHIFT[3&i++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++a)),h[i>>2]|=(240|r>>18)<<SHIFT[3&i++],h[i>>2]|=(128|r>>12&63)<<SHIFT[3&i++],h[i>>2]|=(128|r>>6&63)<<SHIFT[3&i++],h[i>>2]|=(128|63&r)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=h[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=EXTRA[3&e],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t,e,s,r,i,a,o,h,n,l,c,u=this.h0,p=this.h1,d=this.h2,_=this.h3,f=this.h4,H=this.h5,E=this.h6,S=this.h7,y=this.blocks;for(t=16;t<64;++t)i=y[t-15],e=(i>>>7|i<<25)^(i>>>18|i<<14)^i>>>3,i=y[t-2],s=(i>>>17|i<<15)^(i>>>19|i<<13)^i>>>10,y[t]=y[t-16]+e+y[t-7]+s<<0;for(c=p&d,t=0;t<64;t+=4)this.first?(this.is224?(h=300032,i=y[0]-1413257819,S=i-150054599<<0,_=i+24177077<<0):(h=704751109,i=y[0]-210244248,S=i-1521486534<<0,_=i+143694565<<0),this.first=!1):(e=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),s=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7),h=u&p,r=h^u&d^c,o=f&H^~f&E,i=S+s+o+K[t]+y[t],a=e+r,S=_+i<<0,_=i+a<<0),e=(_>>>2|_<<30)^(_>>>13|_<<19)^(_>>>22|_<<10),s=(S>>>6|S<<26)^(S>>>11|S<<21)^(S>>>25|S<<7),n=_&u,r=n^_&p^h,o=S&f^~S&H,i=E+s+o+K[t+1]+y[t+1],a=e+r,E=d+i<<0,d=i+a<<0,e=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),s=(E>>>6|E<<26)^(E>>>11|E<<21)^(E>>>25|E<<7),l=d&_,r=l^d&u^n,o=E&S^~E&f,i=H+s+o+K[t+2]+y[t+2],a=e+r,H=p+i<<0,p=i+a<<0,e=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),s=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7),c=p&d,r=c^p&_^l,o=H&E^~H&S,i=f+s+o+K[t+3]+y[t+3],a=e+r,f=u+i<<0,u=i+a<<0;this.h0=this.h0+u<<0,this.h1=this.h1+p<<0,this.h2=this.h2+d<<0,this.h3=this.h3+_<<0,this.h4=this.h4+f<<0,this.h5=this.h5+H<<0,this.h6=this.h6+E<<0,this.h7=this.h7+S<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,r=this.h3,i=this.h4,a=this.h5,o=this.h6,h=this.h7,n=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o];return this.is224||(n+=HEX_CHARS[h>>28&15]+HEX_CHARS[h>>24&15]+HEX_CHARS[h>>20&15]+HEX_CHARS[h>>16&15]+HEX_CHARS[h>>12&15]+HEX_CHARS[h>>8&15]+HEX_CHARS[h>>4&15]+HEX_CHARS[15&h]),n},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,r=this.h3,i=this.h4,a=this.h5,o=this.h6,h=this.h7,n=[t>>24&255,t>>16&255,t>>8&255,255&t,e>>24&255,e>>16&255,e>>8&255,255&e,s>>24&255,s>>16&255,s>>8&255,255&s,r>>24&255,r>>16&255,r>>8&255,255&r,i>>24&255,i>>16&255,i>>8&255,255&i,a>>24&255,a>>16&255,a>>8&255,255&a,o>>24&255,o>>16&255,o>>8&255,255&o];return this.is224||n.push(h>>24&255,h>>16&255,h>>8&255,255&h),n},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("f28c"),__webpack_require__("c8ba"))},e1a4:function(t,e,s){"use strict";var r=s("e7b3"),i=s.n(r);i.a},e7b3:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2dfb4788.71f0e893.js.map
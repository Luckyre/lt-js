!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){"use strict";function n(e,r){var t=e.split(";");return t=t.map(function(e){return o(e,r)})}function o(e,r){var t=e.split(","),n=[];return n[0]=t[1],r&&(t[2]=f(t[2])),"借"===t[0]?(n[1]=t[2],n[2]=""):(n[1]="",n[2]=t[2]),n}function i(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map(function(e,t){return e.question_answer=n(e.question_answer,r),e.question_total=a(e.question_answer,r),e}),e}function a(e){for(var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=[0,0],n=0;n<e.length;n++)r?(t[0]+=m(e[n][1]),t[1]+=m(e[n][2])):(t[0]+=+e[n][1],t[1]+=+e[n][2]);return f(t[0]),r?t.map(function(e){return f(e)}):t}function u(e,r){var t={isCorrect:!1,errInfos:null};if(s(e,r)){var n=e.map(function(e,t,n){var o={trIdx:t,isCorrect:!0,isUniqe:!0,errArray:[]};e[1]&&e[2]&&(o.isUniqe=!1);var i=l(e,r);return-1!==i?e.forEach(function(e,t){!(e==r[i][t])&&o.errArray.push(t)}):o.errArray=[0,1,2],o.isUniqe&&!o.errArray.length||(o.isCorrect=!1),o});t.isCorrect=!n.filter(function(e){return 1!=e.isCorrect}).length,t.errInfos=n}else t.isCorrect=!1,t.errInfos="itemError";return t}function l(e,r){var t=void 0;return r.some(function(r,n){var o=e[0]===r[0];return o&&(t=n),o})?t:-1}function c(e,r){var t=[!0,!0];return e[0]!=r[0]&&(t[0]=!1),e[1]!=r[1]&&(t[1]=!1),{isCorrect:!t.filter(function(e){return 1!=e}).length,totalRes:t}}function s(e,r){return e.length===r.length}function f(e){return(0,d.default)(e).format("0,0[.]00")}function m(e){return(0,d.default)(e).value()}Object.defineProperty(r,"__esModule",{value:!0});var h=t(1),d=function(e){return e&&e.__esModule?e:{default:e}}(h),p=function(e){function r(e){e.forEach(function(e,n){e.child?r(e.child):t.push(e)})}var t=[];return r(e),t},b={transferQuestsArray:i,calTotal:a,moneyFormat:f,moneyUnFormat:m,flattenSort:p,checkAnswer:u,checkTotal:c};r.default=b},function(e,r,t){var n,o;/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
!function(i,a){n=a,void 0!==(o="function"==typeof n?n.call(r,t,r,e):n)&&(e.exports=o)}(0,function(){function e(e,r){this._input=e,this._value=r}var r,t,n={},o={},i={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},a={currentLocale:i.currentLocale,zeroFormat:i.zeroFormat,nullFormat:i.nullFormat,defaultFormat:i.defaultFormat,scalePercentBy100:i.scalePercentBy100};return r=function(o){var i,u,l,c;if(r.isNumeral(o))i=o.value();else if(0===o||void 0===o)i=0;else if(null===o||t.isNaN(o))i=null;else if("string"==typeof o)if(a.zeroFormat&&o===a.zeroFormat)i=0;else if(a.nullFormat&&o===a.nullFormat||!o.replace(/[^0-9]+/g,"").length)i=null;else{for(u in n)if((c="function"==typeof n[u].regexps.unformat?n[u].regexps.unformat():n[u].regexps.unformat)&&o.match(c)){l=n[u].unformat;break}l=l||r._.stringToNumber,i=l(o)}else i=Number(o)||null;return new e(o,i)},r.version="2.0.6",r.isNumeral=function(r){return r instanceof e},r._=t={numberToFormat:function(e,t,n){var i,a,u,l,c,s,f,m=o[r.options.currentLocale],h=!1,d=!1,p=0,b="",g="",v=!1;if(e=e||0,a=Math.abs(e),r._.includes(t,"(")?(h=!0,t=t.replace(/[\(|\)]/g,"")):(r._.includes(t,"+")||r._.includes(t,"-"))&&(c=r._.includes(t,"+")?t.indexOf("+"):e<0?t.indexOf("-"):-1,t=t.replace(/[\+|\-]/g,"")),r._.includes(t,"a")&&(i=t.match(/a(k|m|b|t)?/),i=!!i&&i[1],r._.includes(t," a")&&(b=" "),t=t.replace(new RegExp(b+"a[kmbt]?"),""),a>=1e12&&!i||"t"===i?(b+=m.abbreviations.trillion,e/=1e12):a<1e12&&a>=1e9&&!i||"b"===i?(b+=m.abbreviations.billion,e/=1e9):a<1e9&&a>=1e6&&!i||"m"===i?(b+=m.abbreviations.million,e/=1e6):(a<1e6&&a>=1e3&&!i||"k"===i)&&(b+=m.abbreviations.thousand,e/=1e3)),r._.includes(t,"[.]")&&(d=!0,t=t.replace("[.]",".")),u=e.toString().split(".")[0],l=t.split(".")[1],s=t.indexOf(","),p=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,l?(r._.includes(l,"[")?(l=l.replace("]",""),l=l.split("["),g=r._.toFixed(e,l[0].length+l[1].length,n,l[1].length)):g=r._.toFixed(e,l.length,n),u=g.split(".")[0],g=r._.includes(g,".")?m.delimiters.decimal+g.split(".")[1]:"",d&&0===Number(g.slice(1))&&(g="")):u=r._.toFixed(e,0,n),b&&!i&&Number(u)>=1e3&&b!==m.abbreviations.trillion)switch(u=String(Number(u)/1e3),b){case m.abbreviations.thousand:b=m.abbreviations.million;break;case m.abbreviations.million:b=m.abbreviations.billion;break;case m.abbreviations.billion:b=m.abbreviations.trillion}if(r._.includes(u,"-")&&(u=u.slice(1),v=!0),u.length<p)for(var _=p-u.length;_>0;_--)u="0"+u;return s>-1&&(u=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===t.indexOf(".")&&(u=""),f=u+g+(b||""),h?f=(h&&v?"(":"")+f+(h&&v?")":""):c>=0?f=0===c?(v?"-":"+")+f:f+(v?"-":"+"):v&&(f="-"+f),f},stringToNumber:function(e){var r,t,n,i=o[a.currentLocale],u=e,l={thousand:3,million:6,billion:9,trillion:12};if(a.zeroFormat&&e===a.zeroFormat)t=0;else if(a.nullFormat&&e===a.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{t=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,"."));for(r in l)if(n=new RegExp("[^a-zA-Z]"+i.abbreviations[r]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),u.match(n)){t*=Math.pow(10,l[r]);break}t*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),t*=Number(e)}return t},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,r){return-1!==e.indexOf(r)},insert:function(e,r,t){return e.slice(0,t)+r+e.slice(t)},reduce:function(e,r){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var t,n=Object(e),o=n.length>>>0,i=0;if(3===arguments.length)t=arguments[2];else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");t=n[i++]}for(;i<o;i++)i in n&&(t=r(t,n[i],i,n));return t},multiplier:function(e){var r=e.toString().split(".");return r.length<2?1:Math.pow(10,r[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(e,r){var n=t.multiplier(r);return e>n?e:n},1)},toFixed:function(e,r,t,n){var o,i,a,u,l=e.toString().split("."),c=r-(n||0);return o=2===l.length?Math.min(Math.max(l[1].length,c),r):c,a=Math.pow(10,o),u=(t(e+"e+"+o)/a).toFixed(o),n>r-o&&(i=new RegExp("\\.?0{1,"+(n-(r-o))+"}$"),u=u.replace(i,"")),u}},r.options=a,r.formats=n,r.locales=o,r.locale=function(e){return e&&(a.currentLocale=e.toLowerCase()),a.currentLocale},r.localeData=function(e){if(!e)return o[a.currentLocale];if(e=e.toLowerCase(),!o[e])throw new Error("Unknown locale : "+e);return o[e]},r.reset=function(){for(var e in i)a[e]=i[e]},r.zeroFormat=function(e){a.zeroFormat="string"==typeof e?e:null},r.nullFormat=function(e){a.nullFormat="string"==typeof e?e:null},r.defaultFormat=function(e){a.defaultFormat="string"==typeof e?e:"0.0"},r.register=function(e,r,t){if(r=r.toLowerCase(),this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=t,t},r.validate=function(e,t){var n,o,i,a,u,l,c,s;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),e=e.trim(),e.match(/^\d+$/))return!0;if(""===e)return!1;try{c=r.localeData(t)}catch(e){c=r.localeData(r.locale())}return i=c.currency.symbol,u=c.abbreviations,n=c.delimiters.decimal,o="."===c.delimiters.thousands?"\\.":c.delimiters.thousands,(null===(s=e.match(/^[^\d]+/))||(e=e.substr(1),s[0]===i))&&((null===(s=e.match(/[^\d]+$/))||(e=e.slice(0,-1),s[0]===u.thousand||s[0]===u.million||s[0]===u.billion||s[0]===u.trillion))&&(l=new RegExp(o+"{2}"),!e.match(/[^\d.,]/g)&&(a=e.split(n),!(a.length>2)&&(a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(l):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(l)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(l)&&!!a[1].match(/^\d+$/)))))},r.fn=e.prototype={clone:function(){return r(this)},format:function(e,t){var o,i,u,l=this._value,c=e||a.defaultFormat;if(t=t||Math.round,0===l&&null!==a.zeroFormat)i=a.zeroFormat;else if(null===l&&null!==a.nullFormat)i=a.nullFormat;else{for(o in n)if(c.match(n[o].regexps.format)){u=n[o].format;break}u=u||r._.numberToFormat,i=u(l,c,t)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){function r(e,r,t,o){return e+Math.round(n*r)}var n=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],r,0)/n,this},subtract:function(e){function r(e,r,t,o){return e-Math.round(n*r)}var n=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],r,Math.round(this._value*n))/n,this},multiply:function(e){function r(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)*Math.round(r*i)/Math.round(i*i)}return this._value=t.reduce([this._value,e],r,1),this},divide:function(e){function r(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)/Math.round(r*i)}return this._value=t.reduce([this._value,e],r),this},difference:function(e){return Math.abs(r(this._value).subtract(e).value())}},r.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var r=e%10;return 1==~~(e%100/10)?"th":1===r?"st":2===r?"nd":3===r?"rd":"th"},currency:{symbol:"$"}}),function(){r.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,t,n){var o,i=r._.includes(t," BPS")?" ":"";return e*=1e4,t=t.replace(/\s?BPS/,""),o=r._.numberToFormat(e,t,n),r._.includes(o,")")?(o=o.split(""),o.splice(-1,0,i+"BPS"),o=o.join("")):o=o+i+"BPS",o},unformat:function(e){return+(1e-4*r._.stringToNumber(e)).toFixed(15)}})}(),function(){var e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},t={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=e.suffixes.concat(t.suffixes.filter(function(r){return e.suffixes.indexOf(r)<0})),o=n.join("|");o="("+o.replace("B","B(?!PS)")+")",r.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(o)},format:function(n,o,i){var a,u,l,c=r._.includes(o,"ib")?t:e,s=r._.includes(o," b")||r._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),a=0;a<=c.suffixes.length;a++)if(u=Math.pow(c.base,a),l=Math.pow(c.base,a+1),null===n||0===n||n>=u&&n<l){s+=c.suffixes[a],u>0&&(n/=u);break}return r._.numberToFormat(n,o,i)+s},unformat:function(n){var o,i,a=r._.stringToNumber(n);if(a){for(o=e.suffixes.length-1;o>=0;o--){if(r._.includes(n,e.suffixes[o])){i=Math.pow(e.base,o);break}if(r._.includes(n,t.suffixes[o])){i=Math.pow(t.base,o);break}}a*=i||1}return a}})}(),function(){r.register("format","currency",{regexps:{format:/(\$)/},format:function(e,t,n){var o,i,a=r.locales[r.options.currentLocale],u={before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(t=t.replace(/\s?\$\s?/,""),o=r._.numberToFormat(e,t,n),e>=0?(u.before=u.before.replace(/[\-\(]/,""),u.after=u.after.replace(/[\-\)]/,"")):e<0&&!r._.includes(u.before,"-")&&!r._.includes(u.before,"(")&&(u.before="-"+u.before),i=0;i<u.before.length;i++)switch(u.before[i]){case"$":o=r._.insert(o,a.currency.symbol,i);break;case" ":o=r._.insert(o," ",i+a.currency.symbol.length-1)}for(i=u.after.length-1;i>=0;i--)switch(u.after[i]){case"$":o=i===u.after.length-1?o+a.currency.symbol:r._.insert(o,a.currency.symbol,-(u.after.length-(1+i)));break;case" ":o=i===u.after.length-1?o+" ":r._.insert(o," ",-(u.after.length-(1+i)+a.currency.symbol.length-1))}return o}})}(),function(){r.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,t,n){var o="number"!=typeof e||r._.isNaN(e)?"0e+0":e.toExponential(),i=o.split("e");return t=t.replace(/e[\+|\-]{1}0/,""),r._.numberToFormat(Number(i[0]),t,n)+"e"+i[1]},unformat:function(e){function t(e,t,n,o){var i=r._.correctionFactor(e,t);return e*i*(t*i)/(i*i)}var n=r._.includes(e,"e+")?e.split("e+"):e.split("e-"),o=Number(n[0]),i=Number(n[1]);return i=r._.includes(e,"e-")?i*=-1:i,r._.reduce([o,Math.pow(10,i)],t,1)}})}(),function(){r.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,t,n){var o=r.locales[r.options.currentLocale],i=r._.includes(t," o")?" ":"";return t=t.replace(/\s?o/,""),i+=o.ordinal(e),r._.numberToFormat(e,t,n)+i}})}(),function(){r.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,t,n){var o,i=r._.includes(t," %")?" ":"";return r.options.scalePercentBy100&&(e*=100),t=t.replace(/\s?\%/,""),o=r._.numberToFormat(e,t,n),r._.includes(o,")")?(o=o.split(""),o.splice(-1,0,i+"%"),o=o.join("")):o=o+i+"%",o},unformat:function(e){var t=r._.stringToNumber(e);return r.options.scalePercentBy100?.01*t:t}})}(),function(){r.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,r,t){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)},unformat:function(e){var r=e.split(":"),t=0;return 3===r.length?(t+=60*Number(r[0])*60,t+=60*Number(r[1]),t+=Number(r[2])):2===r.length&&(t+=60*Number(r[0]),t+=Number(r[1])),Number(t)}})}(),r})}])});
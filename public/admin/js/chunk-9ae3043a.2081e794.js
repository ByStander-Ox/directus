(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ae3043a"],{1022:function(e,t,n){},"1d18":function(e,t,n){"use strict";var l=n("1022"),i=n.n(l);i.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},f835:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{staticClass:"select",attrs:{id:e.name,disabled:e.readonly,multiple:""},on:{change:function(t){return e.updateValue(t.target.options)}}},[e.options.placeholder?n("option",{attrs:{value:"",disabled:e.required}},[e._v("\n    "+e._s(e.options.placeholder)+"\n  ")]):e._e(),e._l(e.choices,function(t,l){return n("option",{key:l,domProps:{value:l,selected:e.value&&e.value.includes(l)}},[e._v("\n    "+e._s(t)+"\n  ")])})],2)},i=[],o=(n("28a5"),n("5df3"),n("1c4c"),n("8db2")),u=n.n(o),a={mixins:[u.a],computed:{choices:function(){var e=this.options.choices;return e?("string"===typeof this.options.choices&&(e=JSON.parse(this.options.choices)),e):{}}},methods:{updateValue:function(e){var t=Array.from(e).filter(function(e){return e.selected&&Boolean(e.value)}).map(function(e){return e.value}).join();t&&this.options.wrapWithDelimiter&&(t=",".concat(t,",")),t=t.split(","),this.$emit("input",t)}}},r=a,s=(n("1d18"),n("2877")),c=Object(s["a"])(r,l,i,!1,null,"18932b7e",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-9ae3043a.2081e794.js.map
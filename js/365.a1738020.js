"use strict";(self["webpackChunknvs"]=self["webpackChunknvs"]||[]).push([[365],{1365:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});var r=n(9007),t=function(){var e=this,a=e._self._c;return a("div",[a("form",[a(r.Z,{directives:[{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],attrs:{name:"cep",id:"cep",placeholder:"Digite seu cep"},on:{keyup:e.preencherCep},model:{value:e.cep,callback:function(a){e.cep=a},expression:"cep"}}),a(r.Z,{attrs:{name:"rua",id:"rua",placeholder:"Rua"},model:{value:e.rua,callback:function(a){e.rua=a},expression:"rua"}})],1)])},s=[],u=n(9669),c=n.n(u),l={name:"ViaCep",data(){return{cep:"",rua:"",response:null}},methods:{getCep(e){return c().get(`https://viacep.com.br/ws/${e}/json/`)},preencherCep(){const e=this.cep.replace(/\D/g,"");8===e.length&&this.getCep(e).then((e=>{console.log(e),this.rua=e.data.logradouro}))}}},p=l,o=n(1001),i=(0,o.Z)(p,t,s,!1,null,null,null),h=i.exports}}]);
//# sourceMappingURL=365.a1738020.js.map
"use strict";(self.webpackChunkprojeto_loja_online=self.webpackChunkprojeto_loja_online||[]).push([[899],{1899:(v,d,a)=>{a.r(d),a.d(d,{CarrinhoModule:()=>x});var l=a(6814),p=a(33),t=a(9468),h=a(8594),c=a(95);function m(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"li",9)(1,"div",10)(2,"h2",11),t._uU(3),t.qZA(),t.TgZ(4,"p",12),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8,"Quantidade "),t.TgZ(9,"input",13),t.NdJ("ngModelChange",function(e){const u=t.CHM(o).$implicit;return t.KtG(u.quantidade=e)})("change",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.calcularTotal())}),t.qZA()()(),t.TgZ(10,"button",14),t.NdJ("click",function(){const s=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.removeProdutoCarrinho(s.id))}),t._uU(11,"Remover"),t.qZA()()}if(2&n){const o=i.$implicit;t.xp6(3),t.Oqu(o.nome),t.xp6(2),t.hij("",t.xi3(6,3,o.preco,"BRL")," "),t.xp6(4),t.Q6J("ngModel",o.quantidade)}}function C(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div")(1,"ul",4),t.YNc(2,m,12,6,"li",5),t.qZA(),t.TgZ(3,"div",6)(4,"p",7),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"button",8),t.NdJ("click",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.comprar())}),t._uU(8,"Finalizar Compra"),t.qZA()()()}if(2&n){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.itensCarrinho),t.xp6(3),t.hij("Total ",t.xi3(6,2,o.total,"BRL"),"")}}function g(n,i){1&n&&t._uU(0,"Nenhum produto no carrinho")}const _=[{path:"",component:(()=>{var n;class i{constructor(r,e){this.carrinhoService=r,this.router=e,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calcularTotal()}calcularTotal(){this.total=this.itensCarrinho.reduce((r,e)=>r+e.preco*e.quantidade,0)}removeProdutoCarrinho(r){this.itensCarrinho=this.itensCarrinho.filter(e=>e.id!==r),this.carrinhoService.removerProdutoCarrinho(r)}comprar(){alert("Parabens, voc\xea realizou sua compra"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return(n=i).\u0275fac=function(r){return new(r||n)(t.Y36(h.e),t.Y36(p.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-carrinho"]],decls:6,vars:2,consts:[[1,"cart-container"],[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[1,"cart-items"],["class","cart-item",4,"ngFor","ngForOf"],[1,"cart-total"],[1,"cart-total-text"],[1,"cart-checkout-button",3,"click"],[1,"cart-item"],[1,"cart-item-info"],[1,"cart-item-title"],[1,"cart-item-price"],["type","number",3,"ngModel","ngModelChange","change"],[1,"cart-item-remove-button",3,"click"]],template:function(r,e){if(1&r&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Carrinho de Compras"),t.qZA(),t.YNc(3,C,9,5,"div",2),t.qZA(),t.YNc(4,g,1,0,"ng-template",null,3,t.W1O)),2&r){const s=t.MAs(5);t.xp6(3),t.Q6J("ngIf",e.itensCarrinho.length>0)("ngIfElse",s)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On,l.H9],styles:[".cart-container[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:5px;box-shadow:0 2px 4px #0000001a;padding:20px;height:80vh}.cart-title[_ngcontent-%COMP%]{font-size:24px;margin:0 0 20px;color:#333}.cart-items[_ngcontent-%COMP%]{list-style:none;padding:0}.cart-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid #ddd}.cart-item-info[_ngcontent-%COMP%]{flex:1;margin-right:20px}.cart-item-title[_ngcontent-%COMP%]{font-size:18px;margin:0;color:#333}.cart-item-price[_ngcontent-%COMP%]{font-size:16px;margin:5px 0;color:#007bff}.cart-item-quantity[_ngcontent-%COMP%]{font-size:16px;margin:5px 0;color:#777}.cart-item-remove-button[_ngcontent-%COMP%]{background-color:red;color:#fff;border:none;padding:5px 10px;font-size:16px;cursor:pointer;border-radius:5px}.cart-item-remove-button[_ngcontent-%COMP%]:hover{background-color:#d00}.cart-total[_ngcontent-%COMP%]{margin-top:20px;text-align:right}.cart-total-text[_ngcontent-%COMP%]{font-size:18px;margin:0;color:#333}.cart-checkout-button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;font-size:18px;cursor:pointer;border-radius:5px;transition:background-color .3s ease}.cart-checkout-button[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]}),i})()}];let f=(()=>{var n;class i{}return(n=i).\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(_),p.Bz]}),i})(),x=(()=>{var n;class i{}return(n=i).\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,f,c.u5]}),i})()}}]);
import{a as _}from"./chunk-H4JZ5QFH.js";import{Aa as C,Ba as H,Ea as b,Fa as U,Ga as $,Q as h,T as P,Ta as J,U as F,Ua as B,V as L,Va as w,W as R,Wa as K,Xa as v,a as j,bb as Q,cb as M,db as W,eb as V,fb as X,ga as I,hb as Y,ja as l,jb as Z,ka as f,kb as ee,lb as te,ma as O,mb as re,nb as oe,oa as s,ob as ne,pb as ie,qa as g,qb as ae,ra as n,rb as N,sa as a,ta as c,u as q,ua as E,wa as m,xa as x,y as z,ya as G,za as u}from"./chunk-XCIHP3OE.js";import{e as S}from"./chunk-VXZPRRN5.js";function de(i,o){if(i&1&&(n(0,"span",12),u(1),a()),i&2){let d=x();l(1),C(d.renderProduct==null?null:d.renderProduct.formulacion)}}var le=(()=>{let o=class o{constructor(t){this.supaBase=t,this.booleanOutput=new O,this.toggleForm=!1}ngOnInit(){}getProductId(t){this.supaBase.getProductById(t),this.booleanOutput.emit()}};o.\u0275fac=function(r){return new(r||o)(f(_))},o.\u0275cmp=h({type:o,selectors:[["app-card-product"]],inputs:{renderProduct:"renderProduct"},outputs:{booleanOutput:"booleanOutput"},standalone:!0,features:[b],decls:17,vars:8,consts:[[1,"max-w-sm","rounded","overflow-hidden","shadow-xl","p-2","relative"],["alt","Sunset in the mountains",1,"w-full","aspect-square","object-cover","rounded-sm",3,"src"],[1,"min-h-[120px]"],[1,"px-6","pt-4"],[1,"font-bold","text-xl","mb-2"],[1,"px-6","pb-1"],[1,"inline-block","bg-green-400","rounded-full","px-3","py-1","text-white","font-semibold","text-sm","mr-2","mb-2"],["class","inline-block bg-green-400 rounded-full px-3 py-1 text-white font-semibold text-sm  mr-2 ",4,"ngIf"],[1,"flex","justify-between","items-center"],[1,"flex","px-4","py-1","mb-2","ml-2","bg-green-400","text-white","font-semibold","rounded-lg","hover:bg-green-500",3,"click"],[1,"absolute","top-8","right-3","flex","text-base","items-center","bg-green-400","rounded-full","px-3","py-1","text-white","font-semibold"],[1,"p-2","flex","ms-2","w-2","h-2","rounded-full","bg-green-400",3,"ngClass"],[1,"inline-block","bg-green-400","rounded-full","px-3","py-1","text-white","font-semibold","text-sm","mr-2"]],template:function(r,e){r&1&&(n(0,"div",0),c(1,"img",1),n(2,"div",2)(3,"div",3)(4,"div",4),u(5),a()(),n(6,"div",5)(7,"span",6),u(8),U(9,"date"),a(),g(10,de,2,1,"span",7),a()(),n(11,"div",8)(12,"button",9),m("click",function(){return e.getProductId((e.renderProduct==null?null:e.renderProduct.id)||0)}),u(13,"Editar"),a()(),n(14,"p",10),u(15),c(16,"span",11),a()()),r&2&&(l(1),s("src",e.renderProduct!=null&&e.renderProduct.img?e.renderProduct==null?null:e.renderProduct.img:"../../../assets/img/placeholder.png",I),l(4),C(e.renderProduct==null?null:e.renderProduct.name),l(3),C($(9,6,e.renderProduct==null?null:e.renderProduct.created_at)),l(2),s("ngIf",(e.renderProduct==null?null:e.renderProduct.formulacion)!==""),l(5),H(" ",e.renderProduct!=null&&e.renderProduct.is_active_substance?"Sustancia activa":"Sin sustancia activa"," "),l(1),G("ngClass",e.renderProduct!=null&&e.renderProduct.is_active_substance?"bg-green-500":"bg-red-500"))},dependencies:[v,J,w,K]});let i=o;return i})();function me(i,o){i&1&&(n(0,"div",18),u(1," Name is required. "),a())}var se=(()=>{let o=class o{constructor(t,r){this.formBuilder=t,this.supaBase=r,this.booleanOutput=new O,this.productForm=this.formBuilder.group({id:[this.renderProduct?.id],name:[this.renderProduct?.name,[W.required]],formulacion:[this.renderProduct?.formulacion],img:[this.renderProduct?.img],is_active_substance:[this.renderProduct?.is_active_substance]})}toggleModal(){this.booleanOutput.emit()}ngOnInit(){this.supaBase.editProduct.subscribe(t=>{t&&(this.renderProduct=t,this.updateFormValues())})}onImageSelected(t){return S(this,null,function*(){let r=t.target;if(r.files&&r.files.length>0){let e=r.files[0],p=new FileReader;yield new Promise((y,ce)=>{p.onload=k=>{this.productForm.get("img")?.setValue(k.target.result),y()},p.onerror=k=>{ce(k)},p.readAsDataURL(e)})}})}onSubmit(){if(this.productForm.valid){let t=this.productForm.value;console.log(t.id),this.supaBase.updateProduct(t)}}updateFormValues(){this.productForm.patchValue({id:this.renderProduct?.id,name:this.renderProduct?.name,formulacion:this.renderProduct?.formulacion,img:this.renderProduct?.img,is_active_substance:this.renderProduct?.is_active_substance})}};o.\u0275fac=function(r){return new(r||o)(f(ie),f(_))},o.\u0275cmp=h({type:o,selectors:[["app-form-product"]],outputs:{booleanOutput:"booleanOutput"},standalone:!0,features:[b],decls:25,vars:6,consts:[[1,"bg-slate-800","p-6","rounded-md","shadow-lg"],[1,"p-2","group","flex","ms-auto","items-center","text-white","hover:bg-green-500","rounded-lg","iner",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"h-5","w-5","inline","ml-2","group-hover:text-red-500"],["fill-rule","evenodd","d","M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586l4.293-4.293z","clip-rule","evenodd"],[3,"formGroup","ngSubmit"],[1,"relative","z-0","w-full","mb-6","group"],["type","text","formControlName","name","id","name","name","floating_name","placeholder"," ","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-white","bg-transparent","border-0","border-b-2","border-green-400","appearance-none","focus:outline-none","focus:ring-0","focus:text-green-500","peer",3,"ngModel"],["for","name",1,"peer-focus:font-medium","absolute","text-sm","text-white","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-green-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["class","text-red-600",4,"ngIf"],["formControlName","formulacion","type","text","id","formulacion","name","floating_formulacion","placeholder"," ","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-white","bg-transparent","border-0","border-b-2","border-green-400","appearance-none","focus:outline-none","focus:ring-0","focus:text-green-500","peer",3,"ngModel"],["for","formulacion",1,"peer-focus:font-medium","absolute","text-sm","text-white","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-green-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["type","file","id","img","formControlName","img",1,"text-white","rounded-lg","bg-green-400","hover:bg-green-500",3,"change"],[1,"flex","mt-2","w-[400px]","h-[309px]"],["alt","",1,"w-full","aspect-square","object-cover",3,"src"],[1,"relative","z-0","mb-3","mt-3","group"],["formControlName","is_active_substance","type","checkbox","id","is_active_substance","name","is_active_substance","required","",1,"block","py-2.5","px-0","text-base","rounded-full","text-green-500","bg-transparent","border-0","border-b-2","border-green-400","appearance-none","focus:outline-none","focus:ring-0","focus:text-green-500","peer",3,"ngModel"],["for","is_active_substance",1,"peer-focus:font-medium","absolute","text-lg","text-white","duration-300","transform","-translate-y-6","scale-75","left-8","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-green-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-11"],["type","submit",1,"text-white","p-2","px-4","rounded-lg","bg-green-400","hover:bg-green-500"],[1,"text-red-600"]],template:function(r,e){if(r&1&&(n(0,"div",0)(1,"button",1),m("click",function(){return e.toggleModal()}),u(2," Cerrar formulario "),L(),n(3,"svg",2),c(4,"path",3),a()(),R(),n(5,"form",4),m("ngSubmit",function(){return e.onSubmit()}),n(6,"div",5),c(7,"input",6),n(8,"label",7),u(9,"Name"),a()(),g(10,me,2,0,"div",8),n(11,"div",5),c(12,"input",9),n(13,"label",10),u(14,"Formulacion"),a()(),n(15,"div")(16,"input",11),m("change",function(y){return e.onImageSelected(y)}),a()(),n(17,"div",12),c(18,"img",13),a(),n(19,"div",14),c(20,"input",15),n(21,"label",16),u(22,"\xBFEs sustancia Activa ?"),a()(),n(23,"button",17),u(24,"Submit"),a()()()),r&2){let p,y;l(5),s("formGroup",e.productForm),l(2),s("ngModel",e.renderProduct==null?null:e.renderProduct.name),l(3),s("ngIf",e.productForm==null||(p=e.productForm.get("name"))==null?null:p.hasError("required")),l(2),s("ngModel",e.renderProduct==null?null:e.renderProduct.formulacion),l(6),s("src",(y=e.productForm.get("img"))==null?null:y.value,I),l(2),s("ngModel",e.renderProduct==null?null:e.renderProduct.is_active_substance)}},dependencies:[v,w,N,Z,M,Q,V,X,oe,ne,te,re,ae]});let i=o;return i})();function fe(i,o){if(i&1){let d=E();n(0,"li",6),m("click",function(){let e=P(d).$implicit,p=x();return F(p.getProducts(e.category||""))}),u(1),a()}if(i&2){let d=o.$implicit;l(1),C(d.category)}}var ue=(()=>{let o=class o{constructor(t){this.supaBase=t,this.searcherCategory=new Y(""),this.categories=null,this.searcherCategory.valueChanges.pipe(q(600),z()).subscribe(r=>{let e=r||"";r==""?this.getAllCategory():this.getCategoryByName(e)})}ngOnInit(){this.getAllCategory()}getProducts(t){this.supaBase.fetchByCategory(t)}getAllCategory(){return S(this,null,function*(){try{this.categories=yield this.supaBase.fetchAllCategories()}catch(t){console.log("Error al cargar categor\xEDas",t)}})}getCategoryByName(t){return S(this,null,function*(){try{this.categories=yield this.supaBase.fetchCategoryByName(t)}catch(r){console.log("Error al cargar categor\xEDas",r)}})}};o.\u0275fac=function(r){return new(r||o)(f(_))},o.\u0275cmp=h({type:o,selectors:[["app-category-explore"]],standalone:!0,features:[b],decls:10,vars:2,consts:[[1,"flex","flex-col","mr-10"],[1,"p"],["type","search","placeholder","Buscar categorias",3,"formControl"],[1,"flex","mt-4","flex-col","gap-2"],[3,"click",4,"ngFor","ngForOf"],[1,"p-3","mt-1","bg-green-400","text-white","font-semibold","rounded-lg","hover:bg-green-500"],[3,"click"]],template:function(r,e){r&1&&(n(0,"div",0)(1,"div",1),c(2,"input",2),a(),n(3,"div")(4,"h5"),u(5,"Categorias"),a()(),n(6,"ul",3),g(7,fe,2,1,"li",4),a(),n(8,"button",5),u(9,"Add Category"),a()()),r&2&&(l(2),s("formControl",e.searcherCategory),l(5),s("ngForOf",e.categories))},dependencies:[v,B,N,M,V,ee]});let i=o;return i})();function ge(i,o){if(i&1){let d=E();n(0,"app-card-product",4),m("booleanOutput",function(r){P(d);let e=x();return F(e.handleBooleanValue(r))}),a()}if(i&2){let d=o.$implicit;s("renderProduct",d)}}function he(i,o){if(i&1){let d=E();n(0,"div",5)(1,"app-form-product",6),m("booleanOutput",function(r){P(d);let e=x();return F(e.handleBooleanValue(r))}),a()()}}var ze=(()=>{let o=class o{constructor(t){this.supaBase=t,this.productsSubscription=new j,this.toggleForm=!1}ngOnInit(){this.supaBase.fetchAllProducts(),this.productsSubscription=this.supaBase.products.subscribe(t=>{this.products=t,console.log(this.products)})}ngOnDestroy(){this.productsSubscription&&this.productsSubscription.unsubscribe()}handleBooleanValue(t){this.toggleForm=!this.toggleForm,console.log("Valor booleano recibido:",t)}};o.\u0275fac=function(r){return new(r||o)(f(_))},o.\u0275cmp=h({type:o,selectors:[["app-home"]],standalone:!0,features:[b],decls:5,vars:2,consts:[[1,"flex","mt-20","w-full","px-10"],[1,"grid","gap-4","md:grid-cols-2","min-[1210px]:grid-cols-3","min-[1501px]:grid-cols-4","grid-rows-1","mb-auto"],[3,"renderProduct","booleanOutput",4,"ngFor","ngForOf"],["class","fixed inset-0 z-10 bg-slate-400/50 h-full w-full flex justify-center items-center ",4,"ngIf"],[3,"renderProduct","booleanOutput"],[1,"fixed","inset-0","z-10","bg-slate-400/50","h-full","w-full","flex","justify-center","items-center"],[3,"booleanOutput"]],template:function(r,e){r&1&&(n(0,"div",0),c(1,"app-category-explore"),n(2,"div",1),g(3,ge,1,1,"app-card-product",2),a(),g(4,he,2,0,"div",3),a()),r&2&&(l(3),s("ngForOf",e.products),l(1),s("ngIf",e.toggleForm))},dependencies:[v,B,w,le,se,ue]});let i=o;return i})();export{ze as HomeComponent};

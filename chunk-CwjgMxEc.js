import{$ as Ov,$t as fG,B as MD,Cn as mS,En as oT,Ft as ba,I as Kd,J as OS,N as Jd,O as IS,Q as Ot,Tn as oS,Wt as di,Yt as en,at as RN,bt as XC,dt as Vd,er as xv,gt as Wd,jt as _v,kn as p,l as Cv,lt as Ua,nt as Pp,or as zS,pn as ja,qn as vv,qt as eb,r as $t,rn as go,t as $T,tr as yH,tt as Pc,u as D,un as iS,ut as V,v as Ev,vn as kp,wn as nr,xt as Xd,zt as cC}from"./chunk-CX-RQlj0.js";import{$ as ln,D as Ds,G as Sn,J as Ze,L as wt,M as Vi,N as Ze$1,O as Je,U as Nn,W as On,X as he$1,Z as j,at as wn,dt as Ei,it as w,j as Ti,k as Ms,nt as tn,ot as wt$1,st as yt,yt as xi}from"./main-YXBBUFCI.js";import{n as Pe$1,t as Be}from"./chunk-ZFIPsVlZ.js";var Se=[`determinateSpinner`];function ye(t,m){if(t&1&&(kp(),ba(0,`svg`,11),ja(1,`circle`,12),Wd()),t&2){let e=mS();di(`viewBox`,e._viewBox()),cC(),xv(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),di(`r`,e._circleRadius())}}var xe=new D(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:_e})});var _e=100;var Ce=10;var he=(()=>{class t{_elementRef=p(Ot);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=p(xe),r=RN(),a=this._elementRef.nativeElement;this._noopAnimations=r===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&r===`reduced-motion`&&a.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=_e;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Ce)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(r){return new(r||t)};static ɵcmp=Vd({type:t,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(r,a){if(r&1&&_v(Se,5),r&2){let f;Kd(f=Xd())&&(a._determinateCircle=f.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(r,a){r&2&&(di(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,a.mode===`determinate`?a.value:null)(`mode`,a.mode),OS(`mat-`+a.color),xv(`width`,a.diameter,`px`)(`height`,a.diameter,`px`)(`--%NS%mat-progress-spinner-size`,a.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,a.diameter+`px`),Ov(`_mat-animation-noopable`,a._noopAnimations)(`mdc-circular-progress--indeterminate`,a.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,yH],diameter:[2,`diameter`,`diameter`,yH],strokeWidth:[2,`strokeWidth`,`strokeWidth`,yH]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(r,a){if(r&1&&(vv(0,ye,2,8,`ng-template`,null,0,oT),ba(2,`div`,2,1),kp(),ba(4,`svg`,3),ja(5,`circle`,4),Wd()(),Pp(),ba(6,`div`,5)(7,`div`,6)(8,`div`,7),Cv(9,8),Wd(),ba(10,`div`,9),Cv(11,8),Wd(),ba(12,`div`,10),Cv(13,8),Wd()()()),r&2){let f=IS(1);cC(4),di(`viewBox`,a._viewBox()),cC(),xv(`stroke-dasharray`,a._strokeCircumference(),`px`)(`stroke-dashoffset`,a._strokeDashOffset(),`px`)(`stroke-width`,a._circleStrokeWidth(),`%`),di(`r`,a._circleRadius()),cC(4),Ev(`ngTemplateOutlet`,f),cC(2),Ev(`ngTemplateOutlet`,f),cC(2),Ev(`ngTemplateOutlet`,f)}},dependencies:[$T],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return t})();var ve=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=nr({type:t});static ɵinj=en({imports:[fG]})}return t})();function Ee(t,m){t&1&&(ba(0,`mat-error`),zS(1,`Please enter your name (2+ characters).`),Wd())}function ke(t,m){if(t&1&&(ba(0,`mat-form-field`,10)(1,`mat-label`),zS(2,`Full name`),Wd(),ja(3,`input`,18),XC(),oS(4,Ee,2,0,`mat-error`),Wd()),t&2){let e=mS();cC(3),eb(),cC(),iS(e.form.controls.name.invalid&&e.form.controls.name.touched?4:-1)}}function Ne(t,m){t&1&&(ba(0,`mat-error`),zS(1,`Enter a valid email address.`),Wd())}function Te(t,m){t&1&&(ba(0,`mat-error`),zS(1,`Password must be at least 8 characters.`),Wd())}function Pe(t,m){t&1&&(ba(0,`mat-form-field`,10)(1,`mat-label`),zS(2,`Role`),Wd(),ba(3,`mat-select`,19)(4,`mat-option`,20),zS(5,`Owner`),Wd(),ba(6,`mat-option`,21),zS(7,`Installer`),Wd(),ba(8,`mat-option`,22),zS(9,`Viewer`),Wd()(),XC(),Wd()),t&2&&(cC(3),eb())}function Ie(t,m){t&1&&(ba(0,`p`,13),zS(1),Wd()),t&2&&(cC(),Jd(` `,m,` `))}function Re(t,m){t&1&&ja(0,`mat-spinner`,15)}function Le(t,m){if(t&1&&zS(0),t&2)Jd(` `,mS().mode()===`login`?`Sign in`:`Create account`,` `)}var we=class t{auth=p(MD);api=p(Pc);router=p($t);mode=V(`login`);pending=V(!1);form=new w({name:new j(``,{nonNullable:!0,validators:[he$1.required,he$1.minLength(2)]}),email:new j(``,{nonNullable:!0,validators:[he$1.required,he$1.email]}),password:new j(``,{nonNullable:!0,validators:[he$1.required,he$1.minLength(8)]}),role:new j(`viewer`,{nonNullable:!0})});formError=this.auth.formError;switchMode(){this.mode.set(this.mode()===`login`?`register`:`login`),this.auth.formError.set(null)}async submit(){if(this.pending()||(this.form.markAllAsTouched(),!this.form.valid))return;let{name:m,email:e,password:r,role:a}=this.form.getRawValue();this.pending.set(!0),this.auth.formError.set(null);try{this.mode()===`register`&&await go(this.api.register({name:m,email:e,password:r,role:a})),await this.auth.login(e,r),await this.enter()}catch{}finally{this.pending.set(!1)}}async enter(){await this.router.navigateByUrl(`/dashboard`)}static ɵfac=function(e){return new(e||t)};static ɵcmp=Vd({type:t,selectors:[[`app-login`]],decls:45,vars:11,consts:[[1,`sw-login-page`],[1,`w-full`,`max-w-md`],[1,`mb-6`,`flex`,`items-center`,`gap-3`],[`aria-hidden`,`true`,1,`grid`,`h-11`,`w-11`,`place-items-center`,`rounded-xl`,`bg-[var(--sw-brand)]`,`text-white`],[`fontSet`,`material-icons`],[1,`text-xl`,`font-semibold`,`text-[var(--sw-text)]`],[1,`text-sm`,`text-[var(--sw-muted)]`],[`novalidate`,``,1,`sw-card`,`flex`,`flex-col`,`gap-4`,`p-8`,3,`ngSubmit`,`formGroup`],[1,`text-lg`,`font-semibold`,`text-[var(--sw-text)]`],[1,`mt-1`,`text-sm`,`text-[var(--sw-muted)]`],[`appearance`,`outline`,1,`w-full`],[`matInput`,``,`formControlName`,`email`,`type`,`email`,`autocomplete`,`email`],[`matInput`,``,`formControlName`,`password`,`type`,`password`,`autocomplete`,`current-password`],[`role`,`alert`,1,`rounded-md`,`bg-[var(--sw-danger)]/10`,`px-3`,`py-2`,`text-sm`,`text-[var(--sw-danger)]`],[`mat-flat-button`,``,`color`,`primary`,`type`,`submit`,`data-testid`,`submit`,1,`w-full`,3,`disabled`],[`diameter`,`18`,`aria-label`,`Signing in`],[`mat-button`,``,`type`,`button`,1,`w-full`,3,`click`],[1,`mt-4`,`text-center`,`text-xs`,`text-[var(--sw-muted)]`],[`matInput`,``,`formControlName`,`name`,`autocomplete`,`name`],[`formControlName`,`role`],[`value`,`owner`],[`value`,`installer`],[`value`,`viewer`]],template:function(e,r){if(e&1&&(ba(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`span`,3)(4,`mat-icon`,4),zS(5,`solar_power`),Wd()(),ba(6,`div`)(7,`h1`,5),zS(8,`SolarWatch`),Wd(),ba(9,`p`,6),zS(10,`Solar & battery monitoring console`),Wd()()(),ba(11,`form`,7),Ua(`ngSubmit`,function(){return r.submit()}),ba(12,`header`)(13,`h2`,8),zS(14),Wd(),ba(15,`p`,9),zS(16),Wd()(),oS(17,ke,5,1,`mat-form-field`,10),ba(18,`mat-form-field`,10)(19,`mat-label`),zS(20,`Email`),Wd(),ja(21,`input`,11),XC(),oS(22,Ne,2,0,`mat-error`),Wd(),ba(23,`mat-form-field`,10)(24,`mat-label`),zS(25,`Password`),Wd(),ja(26,`input`,12),XC(),oS(27,Te,2,0,`mat-error`),Wd(),oS(28,Pe,10,0,`mat-form-field`,10),oS(29,Ie,2,1,`p`,13),ba(30,`button`,14),oS(31,Re,1,0,`mat-spinner`,15)(32,Le,1,1),Wd(),ba(33,`button`,16),Ua(`click`,function(){return r.switchMode()}),zS(34),Wd()(),ba(35,`p`,17),zS(36,` Demo accounts — `),ba(37,`code`),zS(38,`owner@ · tech@ · viewer@`),Wd(),zS(39,` at `),ba(40,`code`),zS(41,`solarwatch.io`),Wd(),zS(42,`, password `),ba(43,`code`),zS(44,`Solarwatch!2026`),Wd()()()()),e&2){let a;cC(11),Ev(`formGroup`,r.form),cC(3),Jd(` `,r.mode()===`login`?`Sign in`:`Create an account`,` `),cC(2),Jd(` `,r.mode()===`login`?`Welcome back — monitor your sites in real time.`:`Register to get started.`,` `),cC(),iS(r.mode()===`register`?17:-1),cC(4),eb(),cC(),iS(r.form.controls.email.invalid&&r.form.controls.email.touched?22:-1),cC(4),eb(),cC(),iS(r.form.controls.password.invalid&&r.form.controls.password.touched?27:-1),cC(),iS(r.mode()===`register`?28:-1),cC(),iS((a=r.formError())?29:-1,a),cC(),Ev(`disabled`,r.pending()||r.form.invalid),cC(),iS(r.pending()?31:32),cC(3),Jd(` `,r.mode()===`login`?`New here? Create an account`:`Already have an account? Sign in`,` `)}},dependencies:[On,Nn,Ze,wn,Sn,tn,ln,Ei,xi,Vi,wt,Ze$1,Ti,yt,wt$1,Be,Pe$1,ve,he,Ds,Ms,Je],styles:[`.sw-login-page[_ngcontent-%COMP%]{min-height:100vh;display:grid;place-items:center;padding:2rem 1rem;background:radial-gradient(60rem 30rem at 80% -10%,rgb(21 101 192 / .15),transparent 60%),radial-gradient(40rem 24rem at 0% 110%,rgb(255 179 0 / .1),transparent 60%),linear-gradient(180deg,var(--%NS%sw-surface) 0%,var(--%NS%sw-bg) 100%)}@media(max-width:480px){.sw-login-page[_ngcontent-%COMP%]{align-items:start;padding-top:3rem}}`]})};export{we as LoginComponent};
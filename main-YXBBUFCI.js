import{$ as Ov,$n as x_,$t as fG,A as Ip,An as pE,At as _$2,B as MD,Bn as s_,Bt as cE,C as Ga$1,Cn as mS,Ct as Xn$2,Dt as Yc,En as oT,F as K$3,Fn as qr$1,Ft as ba$1,G as ND,Gn as v$2,Gt as dn$3,H as Me$4,Hn as st$3,Ht as da$1,I as Kd,In as re$1,It as be$3,J as OS,Jn as wS,Jt as eh,K as Ne$3,Kn as vd,Kt as eT,L as Ke$4,Ln as rr$2,Lt as bn$2,M as Jc,Mn as pv,Mt as aE,N as Jd,Nn as qd,Nt as aS,O as IS,On as or$1,Ot as Z$6,P as Jn$2,Pn as qf,Pt as b$1,Q as Ot$5,Qn as x,Qt as fE,R as Kn$1,Rn as sE,Rt as bv,S as Ft$4,Sn as mN,St as Xe$3,T as He$4,Tn as oS,Tt as Y$4,U as Ms$2,Ut as de$3,V as MN,Vn as se,Vt as cl,W as Mv,Wn as uE,Wt as di$1,X as Oc,Xn as wp,Xt as eu,Y as O_,Yn as wo$2,Yt as en$4,Z as Od,Zn as wv,Zt as ew,_ as Et$5,_n as kc,_t as Wg,a as AN,an as hE,ar as z$4,at as RN,b as FD,bn as m$2,c as Bv,cn as he$3,ct as Tv,d as DH,dn as ic,dt as Vd,en as fn$2,er as xv,et as P$2,f as DS,fn as j$2,ft as Vr$1,g as Eo$1,gn as k_,gt as Wd,h as Ee$4,hn as k$2,ht as Wa$1,in as gv,ir as yv,it as Qr$1,jn as pi$1,jt as _v,k as Io$1,kn as p,kt as Zd,ln as iE,lt as Ua$1,m as EH,mn as jt$1,mt as W$1,n as $o$1,nn as gf,nr as yS,o as Ae$2,on as hN,or as zS,ot as SN,p as De$4,pn as ja$1,q as Nv,qn as vv,r as $t$2,rn as go,rr as yo$1,rt as Qc,s as Ba$1,sn as hS,sr as za$1,st as TG,t as $T,tn as gH,tr as yH,tt as Pc,u as D$2,un as iS,ut as V$3,v as Ev,vn as kp,vt as Wv,w as Gb,wn as nr$2,wt as Xs$1,x as Fc,xn as mH,xt as Xd,y as F$2,yn as ll,yt as X$3,z as Lt$4,zn as sS,zt as cC}from"./chunk-CX-RQlj0.js";function V$2(n){return n.buttons===0||n.detail===0}function K$2(n){let a=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var Et$4;function ue$1(){if(Et$4==null){let n=typeof document<`u`?document.head:null;Et$4=!!(n&&(n.createShadowRoot||n.attachShadow))}return Et$4}function wt$4(n){if(ue$1()){let a=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function g$1(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var W;function be$2(){if(W==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>W=!0}))}finally{W=W||!1}return W}function B$1(n){return be$2()?n:!!n.capture}function At$4(n,a=0){return pe$2(n)?Number(n):arguments.length===2?a:0}function pe$2(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function S$1(n){return n instanceof Ot$5?n.nativeElement:n}var fe$2=new D$2(`cdk-input-modality-detector-options`);var he$2={ignoreKeys:[18,17,224,91,16]};var ve$1=650;var It$4={passive:!0,capture:!0};var _e$4=(()=>{class n{_platform=p(ND);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new he$3(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=g$1(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<ve$1||(this._modality.next(V$2(t)?`keyboard`:`mouse`),this._mostRecentTarget=g$1(t))};_onTouchstart=t=>{if(K$2(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=g$1(t)};constructor(){let t=p(se),e=p(Z$6),o=p(fe$2,{optional:!0});if(this._options=m$2(m$2({},he$2),o),this.modalityDetected=this._modality.pipe(eu(1)),this.modalityChanged=this.modalityDetected.pipe(uE()),this._platform.isBrowser){let i=p(Kn$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,`keydown`,this._onKeydown,It$4),i.listen(e,`mousedown`,this._onMousedown,It$4),i.listen(e,`touchstart`,this._onTouchstart,It$4)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();var Z$5=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(Z$5||{});var ge$3=new D$2(`cdk-focus-monitor-default-options`);var ct$2=B$1({passive:!0,capture:!0});var Tt$4=(()=>{class n{_ngZone=p(se);_platform=p(ND);_inputModalityDetector=p(_e$4);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=p(Z$6);_stopInputModalityDetector=new z$4;constructor(){let t=p(ge$3,{optional:!0});this._detectionMode=t?.detectionMode||Z$5.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=g$1(t);for(let o=e;o;o=o.parentElement)t.type===`focus`?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=S$1(t);if(!this._platform.isBrowser||o.nodeType!==1)return k$2();let i=wt$4(o)||this._document,s=this._elementInfo.get(o);if(s)return e&&(s.checkChildren=!0),s.subject;let c={checkChildren:e,subject:new z$4,rootNode:i};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=S$1(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let i=S$1(t);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([c,A])=>this._originChanged(c,e,A)):(this._setOrigin(e),typeof i.focus==`function`&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===Z$5.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===Z$5.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?ve$1:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),i=g$1(t);!o||!o.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,ct$2),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,ct$2)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(bn$2(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,ct$2),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,ct$2),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&e.push([i,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let i=t.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();var dt$3=new WeakMap;var w$2=(()=>{class n{_appRef;_injector=p(be$3);_environmentInjector=p(X$3);load(t){let e=this._appRef=this._appRef||this._injector.get(rr$2),o=dt$3.get(e);o||(o={loaders:new Set,refs:[]},dt$3.set(e,o),e.onDestroy(()=>{dt$3.get(e)?.refs.forEach(i=>i.destroy()),dt$3.delete(e)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(EH(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();var lt$3=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=Vd({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})();var mt$2;function Ye$2(){if(mt$2===void 0&&(mt$2=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{mt$2=n.trustedTypes.createPolicy(`angular#components`,{createHTML:a=>a})}catch(a){console.error(a)}}return mt$2}function Xe$2(n){return Ye$2()?.createHTML(n)||n}function ye$2(n,a,t){n.innerHTML=Xe$2(t.sanitize(Y$4.HTML,a)||``)}function qe$2(n){if(n.type===`characterData`&&n.target instanceof Comment)return!0;if(n.type===`childList`){for(let a=0;a<n.addedNodes.length;a++)if(!(n.addedNodes[a]instanceof Comment))return!1;for(let a=0;a<n.removedNodes.length;a++)if(!(n.removedNodes[a]instanceof Comment))return!1;return!0}return!1}var Ne$2=(()=>{class n{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();var Se=(()=>{class n{_mutationObserverFactory=p(Ne$2);_observedElements=new Map;_ngZone=p(se);ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=S$1(t);return new x(o=>{let s=this._observeElement(e).pipe(F$2(c=>c.filter(A=>!qe$2(A))),Me$4(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{o.next(c)})});return()=>{s.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new z$4,o=this._mutationObserverFactory.create(i=>e.next(i));o&&o.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:o,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:o}=this._observedElements.get(t);e&&e.disconnect(),o.complete(),this._observedElements.delete(t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();var ha$1=(()=>{class n{_contentObserver=p(Se);_elementRef=p(Ot$5);event=new de$3;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=At$4(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(Yc(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(e){return new(e||n)};static ɵdir=Ft$4({type:n,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,Wa$1],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return n})();var xe=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=nr$2({type:n});static ɵinj=en$4({providers:[Ne$2]})}return n})();var Ie$1=(()=>{class n{_platform=p(ND);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return Je$4(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=Qe$2(cn$1(t));if(e&&(Ee$3(e)===-1||!this.isVisible(e)))return!1;let o=t.nodeName.toLowerCase(),i=Ee$3(t);return t.hasAttribute(`contenteditable`)?i!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!rn$3(t)?!1:o===`audio`?t.hasAttribute(`controls`)?i!==-1:!1:o===`video`?i===-1?!1:i!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,e){return sn$3(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();function Qe$2(n){try{return n.frameElement}catch{return null}}function Je$4(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function tn$3(n){let a=n.nodeName.toLowerCase();return a===`input`||a===`select`||a===`button`||a===`textarea`}function en$3(n){return an$3(n)&&n.type==`hidden`}function nn$3(n){return on$3(n)&&n.hasAttribute(`href`)}function an$3(n){return n.nodeName.toLowerCase()==`input`}function on$3(n){return n.nodeName.toLowerCase()==`a`}function Te(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let a=n.getAttribute(`tabindex`);return!!(a&&!isNaN(parseInt(a,10)))}function Ee$3(n){if(!Te(n))return null;let a=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(a)?-1:a}function rn$3(n){let a=n.nodeName.toLowerCase(),t=a===`input`&&n.type;return t===`text`||t===`password`||a===`select`||a===`textarea`}function sn$3(n){return en$3(n)?!1:tn$3(n)||nn$3(n)||n.hasAttribute(`contenteditable`)||Te(n)}function cn$1(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var ut$3=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(a){this._enabled=a,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_enabled=!0;constructor(a,t,e,o,i=!1,s){this._element=a,this._checker=t,this._ngZone=e,this._document=o,this._injector=s,i||this.attachAnchors()}destroy(){let a=this._startAnchor,t=this._endAnchor;a&&(a.removeEventListener(`focus`,this.startAnchorListener),a.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(a)))})}focusFirstTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(a)))})}focusLastTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(a)))})}_getRegionBoundary(a){let t=this._element.querySelectorAll(`[cdk-focus-region-${a}], [cdkFocusRegion${a}], [cdk-focus-${a}]`);return a==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(a){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(a),!!e}return t.focus(a),!0}return this.focusFirstTabbableElement(a)}focusFirstTabbableElement(a){let t=this._getRegionBoundary(`start`);return t&&t.focus(a),!!t}focusLastTabbableElement(a){let t=this._getRegionBoundary(`end`);return t&&t.focus(a),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let e=0;e<t.length;e++){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(o)return o}return null}_getLastTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let e=t.length-1;e>=0;e--){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(o)return o}return null}_createAnchor(){let a=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,a),a.classList.add(`cdk-visually-hidden`),a.classList.add(`cdk-focus-trap-anchor`),a.setAttribute(`aria-hidden`,`true`),a}_toggleAnchorTabIndex(a,t){a?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(a){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_executeOnStable(a){vd(a,{injector:this._injector})}};var dn$2=(()=>{class n{_checker=p(Ie$1);_ngZone=p(se);_document=p(Z$6);_injector=p(be$3);constructor(){p(w$2).load(lt$3)}create(t,e=!1){return new ut$3(t,this._checker,this._ngZone,this._document,e,this._injector)}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();var Me$3=new D$2(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var De$3=new D$2(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var mn$2=0;var ln$3=(()=>{class n{_ngZone=p(se);_defaultOptions=p(De$3,{optional:!0});_liveElement;_document=p(Z$6);_sanitizer=p(k_);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=p(Me$3,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let o=this._defaultOptions,i,s;return e.length===1&&typeof e[0]==`number`?s=e[0]:[i,s]=e,this.clear(),clearTimeout(this._previousTimeout),i||(i=o&&o.politeness?o.politeness:`polite`),s==null&&o&&(s=o.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:ye$2(this._liveElement,t,this._sanitizer),typeof s==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,e=this._document.getElementsByClassName(t),o=this._document.createElement(`div`);for(let i=0;i<e.length;i++)e[i].remove();return o.classList.add(t),o.classList.add(`cdk-visually-hidden`),o.setAttribute(`aria-atomic`,`true`),o.setAttribute(`aria-live`,`polite`),o.id=`cdk-live-announcer-${mn$2++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<e.length;o++){let i=e[o],s=i.getAttribute(`aria-owns`);s?s.indexOf(t)===-1&&i.setAttribute(`aria-owns`,s+` `+t):i.setAttribute(`aria-owns`,t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();var k$1=(function(n){return n[n.NONE=0]=`NONE`,n[n.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,n[n.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,n})(k$1||{});var we=`cdk-high-contrast-black-on-white`;var Ae$1=`cdk-high-contrast-white-on-black`;var Mt$4=`cdk-high-contrast-active`;var ke$1=(()=>{class n{_platform=p(ND);_hasCheckedHighContrastMode=!1;_document=p(Z$6);_breakpointSubscription;constructor(){this._breakpointSubscription=p(MN).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return k$1.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,i=(o&&o.backgroundColor||``).replace(/ /g,``);switch(t.remove(),i){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return k$1.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return k$1.BLACK_ON_WHITE}return k$1.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Mt$4,we,Ae$1),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===k$1.BLACK_ON_WHITE?t.add(Mt$4,we):e===k$1.WHITE_ON_BLACK&&t.add(Mt$4,Ae$1)}}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();var un$2=(()=>{class n{constructor(){p(ke$1)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(e){return new(e||n)};static ɵmod=nr$2({type:n});static ɵinj=en$4({imports:[xe]})}return n})();var bn$1=200;var bt$2=class{_letterKeyStream=new z$4;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new z$4;selectedItem=this._selectedItem;constructor(a,t){let e=typeof t?.debounceInterval==`number`?t.debounceInterval:bn$1;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(a),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(a){this._selectedItemIndex=a}setItems(a){this._items=a}handleKey(a){let t=a.keyCode;a.key&&a.key.length===1?this._letterKeyStream.next(a.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(a){this._letterKeyStream.pipe(He$4(t=>this._pressedLetters.push(t)),Yc(a),Me$4(()=>this._pressedLetters.length>0),F$2(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let o=(this._selectedItemIndex+e)%this._items.length,i=this._items[o];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function Ce$1(n,...a){return a.length?a.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var U$1=class{_items;_activeItemIndex=V$3(-1);_activeItem=V$3(null);_wrap=!1;_typeaheadSubscription=re$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=a=>a.disabled;constructor(a,t){this._items=a,a instanceof da$1?this._itemChangesSubscription=a.changes.subscribe(e=>this._itemsChanged(e.toArray())):Xs$1(a)&&(this._effectRef=ll(()=>this._itemsChanged(a()),{injector:t}))}tabOut=new z$4;change=new z$4;skipPredicate(a){return this._skipPredicateFn=a,this}withWrap(a=!0){return this._wrap=a,this}withVerticalOrientation(a=!0){return this._vertical=a,this}withHorizontalOrientation(a){return this._horizontal=a,this}withAllowedModifierKeys(a){return this._allowedModifierKeys=a,this}withTypeAhead(a=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new bt$2(t,{debounceInterval:typeof a==`number`?a:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(a=!0){return this._homeAndEnd=a,this}withPageUpDown(a=!0,t=10){return this._pageUpAndDown={enabled:a,delta:t},this}setActiveItem(a){let t=this._activeItem();this.updateActiveItem(a),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(a){let t=a.keyCode,o=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(i=>!a[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(i<s?i:s-1,-1);break}else return;default:(o||Ce$1(a,`shiftKey`))&&this._typeahead?.handleKey(a);return}this._typeahead?.reset(),a.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(a){let t=this._getItemsArray(),e=typeof a==`number`?a:t.indexOf(a),o=t[e];this._activeItem.set(o??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(a){this._wrap?this._setActiveInWrapMode(a):this._setActiveInDefaultMode(a)}_setActiveInWrapMode(a){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let o=(this._activeItemIndex()+a*e+t.length)%t.length,i=t[o];if(!this._skipPredicateFn(i)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(a){this._setActiveItemByIndex(this._activeItemIndex()+a,a)}_setActiveItemByIndex(a,t){let e=this._getItemsArray();if(e[a]){for(;this._skipPredicateFn(e[a]);)if(a+=t,!e[a])return;this.setActiveItem(a)}}_getItemsArray(){return Xs$1(this._items)?this._items():this._items instanceof da$1?this._items.toArray():this._items}_itemsChanged(a){this._typeahead?.setItems(a);let t=this._activeItem();if(t){let e=a.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Dt$4=class extends U$1{setActiveItem(a){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(a),this.activeItem&&this.activeItem.setActiveStyles()}};var kt$4=class extends U$1{_origin=`program`;setFocusOrigin(a){return this._origin=a,this}setActiveItem(a){super.setActiveItem(a),this.activeItem&&this.activeItem.focus(this._origin)}};var Fe$3=new Map;var Ct$3=class n{_appId=p($o$1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,t=!1){this._appId!==`ng`&&(a+=this._appId);let e=Fe$3.get(a);return e===void 0?e=0:e++,Fe$3.set(a,e),`${a}${t?n._infix+`-`:``}${e}`}static ɵfac=function(t){return new(t||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})};var Re$1=` `;function pn$2(n,a,t){let e=ft$2(n,a);t=t.trim(),!e.some(o=>o.trim()===t)&&(e.push(t),n.setAttribute(a,e.join(Re$1)))}function fn$1(n,a,t){let e=ft$2(n,a);t=t.trim();let o=e.filter(i=>i!==t);o.length?n.setAttribute(a,o.join(Re$1)):n.removeAttribute(a)}function ft$2(n,a){return n.getAttribute(a)?.match(/\S+/g)??[]}var Le$3=`cdk-describedby-message`;var pt$3=`cdk-describedby-host`;var Ot$4=0;var vo$1=(()=>{class n{_platform=p(ND);_document=p(Z$6);_messageRegistry=new Map;_messagesContainer=null;_id=`${Ot$4++}`;constructor(){p(w$2).load(lt$3),this._id=p($o$1)+`-`+Ot$4++}describe(t,e,o){if(!this._canBeDescribed(t,e))return;let i=Ft$3(e,o);typeof e!=`string`?(Oe(e,this._id),this._messageRegistry.set(i,{messageElement:e,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(e,o),this._isElementDescribedByMessage(t,i)||this._addMessageReference(t,i)}removeDescription(t,e,o){if(!e||!this._isElementNode(t))return;let i=Ft$3(e,o);if(this._isElementDescribedByMessage(t,i)&&this._removeMessageReference(t,i),typeof e==`string`){let s=this._messageRegistry.get(i);s&&s.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${pt$3}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(pt$3);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let o=this._document.createElement(`div`);Oe(o,this._id),o.textContent=t,e&&o.setAttribute(`role`,e),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Ft$3(t,e),{messageElement:o,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let i=0;i<e.length;i++)e[i].remove();let o=this._document.createElement(`div`);o.style.visibility=`hidden`,o.classList.add(t),o.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||o.setAttribute(`platform`,`server`),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(t){let e=ft$2(t,`aria-describedby`).filter(o=>o.indexOf(Le$3)!=0);t.setAttribute(`aria-describedby`,e.join(` `))}_addMessageReference(t,e){let o=this._messageRegistry.get(e);pn$2(t,`aria-describedby`,o.messageElement.id),t.setAttribute(pt$3,this._id),o.referenceCount++}_removeMessageReference(t,e){let o=this._messageRegistry.get(e);o.referenceCount--,fn$1(t,`aria-describedby`,o.messageElement.id),t.removeAttribute(pt$3)}_isElementDescribedByMessage(t,e){let o=ft$2(t,`aria-describedby`),i=this._messageRegistry.get(e),s=i&&i.messageElement.id;return!!s&&o.indexOf(s)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e==`object`)return!0;let o=e==null?``:`${e}`.trim(),i=t.getAttribute(`aria-label`);return o?!i||i.trim()!==o:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();function Ft$3(n,a){return typeof n==`string`?`${a||``}/${n}`:n}function Oe(n,a){n.id||(n.id=`${Le$3}-${a}-${Ot$4++}`)}var G$3=(function(n){return n[n.NORMAL=0]=`NORMAL`,n[n.NEGATED=1]=`NEGATED`,n[n.INVERTED=2]=`INVERTED`,n})(G$3||{});var ht$3;var O$2;function wo$1(){if(O$2==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return O$2=!1,O$2;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)O$2=!0;else{let n=Element.prototype.scrollTo;n?O$2=!/\{\s*\[native code\]\s*\}/.test(n.toString()):O$2=!1}}return O$2}function Ao$1(){if(typeof document!=`object`||!document)return G$3.NORMAL;if(ht$3==null){let n=document.createElement(`div`),a=n.style;n.dir=`rtl`,a.width=`1px`,a.overflow=`auto`,a.visibility=`hidden`,a.pointerEvents=`none`,a.position=`absolute`;let t=document.createElement(`div`),e=t.style;e.width=`2px`,e.height=`1px`,n.appendChild(t),document.body.appendChild(n),ht$3=G$3.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,ht$3=n.scrollLeft===0?G$3.NEGATED:G$3.INVERTED),n.remove()}return ht$3}function To$1(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var z$3;var Pe$2=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function ko$1(){if(z$3)return z$3;if(typeof document!=`object`||!document)return z$3=new Set(Pe$2),z$3;let n=document.createElement(`input`);return z$3=new Set(Pe$2.filter(a=>(n.setAttribute(`type`,a),n.type===a))),z$3}function Lo$1(n){return n==null?``:typeof n==`string`?n:`${n}px`}function Bo$1(n){return n!=null&&`${n}`!=`false`}var f$1=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(f$1||{});var Rt$3=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=f$1.HIDDEN;constructor(a,t,e,o=!1){this._renderer=a,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var Be$2=B$1({passive:!0,capture:!0});var Lt$3=class{_events=new Map;addHandler(a,t,e,o){let i=this._events.get(t);if(i){let s=i.get(e);s?s.add(o):i.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Be$2)})}removeHandler(a,t,e){let o=this._events.get(a);if(!o)return;let i=o.get(t);i&&(i.delete(e),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,Be$2)))}_delegateEventHandler=a=>{let t=g$1(a);t&&this._events.get(a.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(i=>i.handleEvent(a))})}};var $$2={enterDuration:225,exitDuration:150};var hn$2=800;var Ue$3=B$1({passive:!0,capture:!0});var ze$2=[`mousedown`,`touchstart`];var je$2=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var vn$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=Vd({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})();var Y$3=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Lt$3;constructor(a,t,e,o,i){this._target=a,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=S$1(e)),i&&i.get(w$2).load(vn$1)}fadeInRipple(a,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=m$2(m$2({},$$2),e.animation);e.centered&&(a=o.left+o.width/2,t=o.top+o.height/2);let s=e.radius||_n$2(a,t,o),c=a-o.left,A=t-o.top,C=i.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${c-s}px`,u.style.top=`${A-s}px`,u.style.height=`${s*2}px`,u.style.width=`${s*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${C}ms`,this._containerElement.appendChild(u);let jt=window.getComputedStyle(u),$e=jt.transitionProperty,Ht=jt.transitionDuration,_t=$e===`none`||Ht===`0s`||Ht===`0s, 0s`||o.width===0&&o.height===0,F=new Rt$3(this,u,e,_t);u.style.transform=`scale3d(1, 1, 1)`,F.state=f$1.FADING_IN,e.persistent||(this._mostRecentTransientRipple=F);let X=null;return!_t&&(C||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Vt=()=>{X&&(X.fallbackTimer=null),clearTimeout(Kt),this._finishRippleTransition(F)},gt=()=>this._destroyRipple(F),Kt=setTimeout(gt,C+100);u.addEventListener(`transitionend`,Vt),u.addEventListener(`transitioncancel`,gt),X={onTransitionEnd:Vt,onTransitionCancel:gt,fallbackTimer:Kt}}),this._activeRipples.set(F,X),(_t||!C)&&this._finishRippleTransition(F),F}fadeOutRipple(a){if(a.state===f$1.FADING_OUT||a.state===f$1.HIDDEN)return;let t=a.element,e=m$2(m$2({},$$2),a.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,a.state=f$1.FADING_OUT,(a._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=S$1(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ze$2.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(a){a.type===`mousedown`?this._onMousedown(a):a.type===`touchstart`?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{je$2.forEach(t=>{this._triggerElement.addEventListener(t,this,Ue$3)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===f$1.FADING_IN?this._startFadeOutTransition(a):a.state===f$1.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:e}=a.config;a.state=f$1.VISIBLE,!e&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=f$1.HIDDEN,t!==null&&(a.element.removeEventListener(`transitionend`,t.onTransitionEnd),a.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=V$2(a),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+hn$2;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!K$2(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===f$1.VISIBLE||a.config.terminateOnPointerUp&&a.state===f$1.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(ze$2.forEach(t=>n._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(je$2.forEach(t=>a.removeEventListener(t,this,Ue$3)),this._pointerUpEventsRegistered=!1))}};function _n$2(n,a,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),o=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(e*e+o*o)}var Pt$2=new D$2(`mat-ripple-global-options`);var qo$1=(()=>{class n{_elementRef=p(Ot$5);_animationsDisabled=TG();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=p(se),e=p(ND),o=p(Pt$2,{optional:!0}),i=p(be$3);this._globalOptions=o||{},this._rippleRenderer=new Y$3(this,t,this._elementRef,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:m$2(m$2(m$2({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,m$2(m$2({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,m$2(m$2({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||n)};static ɵdir=Ft$4({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,o){e&2&&Ov(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var gn$2={capture:!0};var yn$1=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Bt$2=`mat-ripple-loader-uninitialized`;var Ut$1=`mat-ripple-loader-class-name`;var He$3=`mat-ripple-loader-centered`;var vt$2=`mat-ripple-loader-disabled`;var Ve$2=(()=>{class n{_document=p(Z$6);_animationsDisabled=TG();_globalRippleOptions=p(Pt$2,{optional:!0});_platform=p(ND);_ngZone=p(se);_injector=p(be$3);_eventCleanups;_hosts=new Map;constructor(){let t=p(Kn$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>yn$1.map(e=>t.listen(this._document,e,this._onInteraction,gn$2)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Bt$2,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(Ut$1))&&t.setAttribute(Ut$1,e.className||``),e.centered&&t.setAttribute(He$3,``),e.disabled&&t.setAttribute(vt$2,``)}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(vt$2,``):t.removeAttribute(vt$2)}_onInteraction=t=>{let e=g$1(t);if(e instanceof HTMLElement){let o=e.closest(`[${Bt$2}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(Ut$1)),t.append(e);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??$$2.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??$$2.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(vt$2),rippleConfig:{centered:t.hasAttribute(He$3),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},A=new Y$3(c,this._ngZone,e,this._platform,this._injector),C=!c.rippleDisabled;C&&A.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:A,hasSetUpEvents:C}),t.removeAttribute(Bt$2)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();var Ke$3=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=Vd({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var Nn$2=[`*`,[[``,`progressIndicator`,``]]];var Sn$2=[`*`,`[progressIndicator]`];function xn$1(n,a){n&1&&(qd(0,`div`,1),DS(1,1),Zd())}var En$1=new D$2(`MAT_BUTTON_CONFIG`);function We$2(n){return n==null?void 0:yH(n)}var zt$2=(()=>{class n{_elementRef=p(Ot$5);_ngZone=p(se);_animationsDisabled=TG();_config=p(En$1,{optional:!0});_focusMonitor=p(Tt$4);_cleanupClick;_renderer=p(Xn$2);_rippleLoader=p(Ve$2);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Ga$1(!1,{transform:Wa$1});constructor(){p(w$2).load(Ke$3);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||n)};static ɵdir=Ft$4({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,o){e&2&&(di$1(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),OS(o.color?`mat-`+o.color:``),Ov(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Wa$1],disabled:[2,`disabled`,`disabled`,Wa$1],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,Wa$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Wa$1],tabIndex:[2,`tabIndex`,`tabIndex`,We$2],_tabindex:[2,`tabindex`,`_tabindex`,We$2],showProgress:[1,`showProgress`]}})}return n})();var wn$2=(()=>{class n extends zt$2{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||n)};static ɵcmp=Vd({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[gv],ngContentSelectors:Sn$2,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(e,o){e&1&&(yS(Nn$2),wv(0,`span`,0),DS(1),oS(2,xn$1,2,0,`div`,1),wv(3,`span`,2)(4,`span`,3)),e&2&&(cC(2),iS(o.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();var Ze$4=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=nr$2({type:n});static ɵinj=en$4({imports:[fG]})}return n})();var An$1=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var In$2=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function Tn$1(n,a){n&1&&(qd(0,`div`,2),DS(1,3),Zd())}var Ge$2=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var xi=(()=>{class n extends zt$2{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Mn$1(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?Ge$2.get(this._appearance):null,i=Ge$2.get(t);o&&e.remove(...o),e.add(...i),this._appearance=t}static ɵfac=function(e){return new(e||n)};static ɵcmp=Vd({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[gv],ngContentSelectors:In$2,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(e,o){e&1&&(yS(An$1),wv(0,`span`,0),DS(1),qd(2,`span`,1),DS(3,1),Zd(),DS(4,2),oS(5,Tn$1,2,0,`div`,2),wv(6,`span`,3)(7,`span`,4)),e&2&&(Ov(`mdc-button__ripple`,!o._isFab)(`mdc-fab__ripple`,o._isFab),cC(5),iS(o.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function Mn$1(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var Ei$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=nr$2({type:n});static ɵinj=en$4({imports:[Ze$4,fG]})}return n})();function V$1(i){return Error(`Unable to find icon with the name "${i}"`)}function X$2(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function q$2(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Y$2(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var a$1=class{url;svgText;options;svgElement=null;constructor(l,t,e){this.url=l,this.svgText=t,this.options=e}};var K$1=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace(``,t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace(``,t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new a$1(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let r=this._sanitizer.sanitize(Y$4.HTML,n);if(!r)throw Y$2(n);let s=Xe$2(r);return this._addSvgIconConfig(t,e,new a$1(``,s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new a$1(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(Y$4.HTML,e);if(!o)throw Y$2(e);let r=Xe$2(o);return this._addSvgIconSetConfig(t,new a$1(``,r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(Y$4.RESOURCE_URL,t);if(!e)throw q$2(t);let n=this._cachedIconsByUrl.get(e);return n?k$2(C$1(n)):this._loadSvgIconFromConfig(new a$1(t,null)).pipe(He$4(o=>this._cachedIconsByUrl.set(e,o)),F$2(o=>C$1(o)))}getNamedSvgIcon(t,e=``){let n=J$3(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):yo$1(V$1(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?k$2(C$1(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(F$2(e=>C$1(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return k$2(n);return iE(e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Ke$4(s=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(Y$4.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(f)),k$2(null)})))).pipe(F$2(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw V$1(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(r,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(He$4(e=>t.svgText=e),F$2(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?k$2(null):this._fetchIcon(t).pipe(He$4(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),n);let s=this._svgElementFromString(Xe$2(`<svg></svg>`));return s.appendChild(r),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let n=e.querySelector(`svg`);if(!n)throw Error(`<svg> tag not found`);return n}_toSvgElement(t){let e=this._svgElementFromString(Xe$2(`<svg></svg>`)),n=t.attributes;for(let o=0;o<n.length;o++){let{name:r,value:s}=n[o];r!==`id`&&e.setAttribute(r,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw X$2();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(Y$4.RESOURCE_URL,e);if(!r)throw q$2(e);let s=this._inProgressUrlFetches.get(r);if(s)return s;let h=this._httpClient.get(r,{responseType:`text`,withCredentials:o}).pipe(F$2(f=>Xe$2(f)),wo$2(()=>this._inProgressUrlFetches.delete(r)),Jc());return this._inProgressUrlFetches.set(r,h),h}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(J$3(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return Z$4(o)?new a$1(o.url,null,o.options):new a$1(o,null)}}static ɵfac=function(e){return new(e||i)(b$1(ic,8),b$1(k_),b$1(Z$6,8),b$1(Xe$3))};static ɵprov=_$2({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();function C$1(i){return i.cloneNode(!0)}function J$3(i,l){return i+`:`+l}function Z$4(i){return!!(i.url&&i.options)}var tt$4=[`*`];var et$4=new D$2(`MAT_ICON_DEFAULT_OPTIONS`);var nt$3=new D$2(`mat-icon-location`,{providedIn:`root`,factory:()=>{let i=p(Z$6),l=i?i.location:null;return{getPathname:()=>l?l.pathname+l.search:``}}});var G$2=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var ot$3=G$2.map(i=>`[${i}]`).join(`, `);var rt$3=/^url\(['"]?#(.*?)['"]?\)$/;var wt$3=(()=>{class i{_elementRef=p(Ot$5);_iconRegistry=p(K$1);_location=p(nt$3);_errorHandler=p(Xe$3);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=re$1.EMPTY;constructor(){let t=p(new za$1(`aria-hidden`),{optional:!0}),e=p(et$4,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()===`svg`)&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(r=>{o.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ot$3),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)G$2.forEach(r=>{let s=e[o],h=s.getAttribute(r),f=h?h.match(rt$3):null;if(f){let p=n.get(s);p||(p=[],n.set(s,p)),p.push({name:r,value:f[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(Ne$3(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Vd({type:i,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(e,n){e&2&&(di$1(`data-mat-icon-type`,n._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,n._svgName||n.fontIcon)(`data-mat-icon-namespace`,n._svgNamespace||n.fontSet)(`fontIcon`,n._usingFontIcon()?n.fontIcon:null),OS(n.color?`mat-`+n.color:``),Ov(`mat-icon-inline`,n.inline)(`mat-icon-no-color`,n.color!==`primary`&&n.color!==`accent`&&n.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,Wa$1],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:tt$4,decls:1,vars:0,template:function(e,n){e&1&&(yS(),DS(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return i})();var yt$3=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=nr$2({type:i});static ɵinj=en$4({imports:[fG]})}return i})();var $e$1=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(i){return new(i||n)(Ee$4(Xn$2),Ee$4(Ot$5))};static ɵdir=Ft$4({type:n})}return n})();var ze$1=(()=>{class n extends $e$1{static ɵfac=(()=>{let e;return function(r){return(e||(e=Wg(n)))(r||n)}})();static ɵdir=Ft$4({type:n,features:[gv]})}return n})();var ee$1=new D$2(``);var Vt$1={provide:ee$1,useExisting:Ms$2(()=>Ze$3),multi:!0};function Dt$3(){let n=jt$1()?jt$1().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var At$3=new D$2(``);var Ze$3=(()=>{class n extends $e$1{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode??=!Dt$3()}writeValue(e){let i=e??``;this.setProperty(`value`,i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(i){return new(i||n)(Ee$4(Xn$2),Ee$4(Ot$5),Ee$4(At$3,8))};static ɵdir=Ft$4({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&Ua$1(`input`,function(a){return r._handleInput(a.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Wv([Vt$1]),gv]})}return n})();function ve(n){return n==null||ye$1(n)===0}function ye$1(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var A$2=new D$2(``);var te$1=new D$2(``);var Mt$3=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var he$1=class{static min(t){return Qe$1(t)}static max(t){return Xe$1(t)}static required(t){return Ye$1(t)}static requiredTrue(t){return Et$3(t)}static email(t){return Ft$2(t)}static minLength(t){return wt$2(t)}static maxLength(t){return St$2(t)}static pattern(t){return xt$2(t)}static nullValidator(t){return $$1()}static compose(t){return it$2(t)}static composeAsync(t){return rt$2(t)}};function Qe$1(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function Xe$1(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function Ye$1(n){return ve(n.value)?{required:!0}:null}function Et$3(n){return n.value===!0?null:{required:!0}}function Ft$2(n){return ve(n.value)||Mt$3.test(n.value)?null:{email:!0}}function wt$2(n){return t=>{let e=t.value?.length??ye$1(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function St$2(n){return t=>{let e=t.value?.length??ye$1(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function xt$2(n){if(!n)return $$1;let t,e;return typeof n==`string`?(e=``,n.charAt(0)!==`^`&&(e+=`^`),e+=n,n.charAt(n.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(ve(i.value))return null;let r=i.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function $$1(n){return null}function Ke$2(n){return n!=null}function Je$3(n){return qr$1(n)?K$3(n):n}function et$3(n){let t={};return n.forEach(e=>{t=e!=null?m$2(m$2({},t),e):t}),Object.keys(t).length===0?null:t}function tt$3(n,t){return t.map(e=>e(n))}function Nt$3(n){return!n.validate}function nt$2(n){return n.map(t=>Nt$3(t)?t:e=>t.validate(e))}function it$2(n){if(!n)return null;let t=n.filter(Ke$2);return t.length==0?null:function(e){return et$3(tt$3(e,t))}}function Ce(n){return n!=null?it$2(nt$2(n)):null}function rt$2(n){if(!n)return null;let t=n.filter(Ke$2);return t.length==0?null:function(e){return iE(tt$3(e,t).map(Je$3)).pipe(F$2(et$3))}}function be$1(n){return n!=null?rt$2(nt$2(n)):null}function je$1(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function ot$2(n){return n._rawValidators}function st$2(n){return n._rawAsyncValidators}function fe$1(n){return n?Array.isArray(n)?n:[n]:[]}function z$2(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ge$1(n,t){let e=fe$1(t);return fe$1(n).forEach(r=>{z$2(e,r)||e.push(r)}),e}function Be$1(n,t){return fe$1(t).filter(e=>!z$2(n,e))}var Z$3=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Ce(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=be$1(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var m$1=class extends Z$3{name;get formDirective(){return null}get path(){return null}};var I$1=`VALID`;var q$1=`INVALID`;var M$2=`PENDING`;var O$1=`DISABLED`;var _$1=class{};var Q$1=class extends _$1{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var P$1=class extends _$1{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var T$1=class extends _$1{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var E$1=class extends _$1{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var X$1=class extends _$1{source;constructor(t){super(),this.source=t}};var D$1=class extends _$1{source;constructor(t){super(),this.source=t}};function Ve$1(n){return(ne(n)?n.validators:n)||null}function kt$3(n){return Array.isArray(n)?Ce(n):n||null}function De$2(n,t){return(ne(t)?t.asyncValidators:n)||null}function It$3(n){return Array.isArray(n)?be$1(n):n||null}function ne(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function at$2(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new v$2(1e3,``);if(!ut$2(i,e))throw new v$2(1001,``)}function lt$2(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new v$2(-1002,``)})}var F$1=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=V$3(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return W$1(this.statusReactive)}set status(t){W$1(()=>this.statusReactive.set(t))}_status=Et$5(()=>this.statusReactive());statusReactive=V$3(void 0);get valid(){return this.status===I$1}get invalid(){return this.status===q$1}get pending(){return this.status===M$2}get disabled(){return this.status===O$1}get enabled(){return this.status!==O$1}errors;get pristine(){return W$1(this.pristineReactive)}set pristine(t){W$1(()=>this.pristineReactive.set(t))}_pristine=Et$5(()=>this.pristineReactive());pristineReactive=V$3(!0);get dirty(){return!this.pristine}get touched(){return W$1(this.touchedReactive)}set touched(t){W$1(()=>this.touchedReactive.set(t))}_touched=Et$5(()=>this.touchedReactive());touchedReactive=V$3(!1);get untouched(){return!this.touched}_events=new z$4;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Ge$1(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ge$1(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Be$1(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Be$1(t,this._rawAsyncValidators))}hasValidator(t){return z$2(this._rawValidators,t)}hasAsyncValidator(t){return z$2(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(P$2(m$2({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new T$1(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new T$1(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(P$2(m$2({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new P$1(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new P$1(!0,i))}markAsPending(t={}){this.status=M$2;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new E$1(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(P$2(m$2({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=O$1,this.errors=null,this._forEachChild(r=>{r.disable(P$2(m$2({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Q$1(this.value,i)),this._events.next(new E$1(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(P$2(m$2({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=I$1,this._forEachChild(i=>{i.enable(P$2(m$2({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(P$2(m$2({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I$1||this.status===M$2)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Q$1(this.value,e)),this._events.next(new E$1(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(P$2(m$2({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O$1:I$1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=M$2,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=Je$3(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new E$1(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new de$3,this.statusChanges=new de$3}_calculateStatus(){return this._allControlsDisabled()?O$1:this.errors?q$1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M$2)?M$2:this._anyControlsHaveStatus(q$1)?q$1:I$1}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new P$1(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new T$1(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){ne(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=kt$3(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=It$3(this._rawAsyncValidators)}_updateHasRequiredValidator(){W$1(()=>this._hasRequired.set(this.hasValidator(he$1.required)))}};function ut$2(n,t){return Object.hasOwn(n,t)}function Ot$3(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function Rt$2(n,t,e,i){switch(e){case`name`:n.setAttribute(t,e,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(t,e,``):n.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(t,e,i.toString()):n.removeAttribute(t,e);break}}var pe$1=class{kind;context;control;message;constructor({kind:t,context:e,control:i}){this.kind=t,this.context=e,this.control=i}};function ct$1(n){return typeof n==`number`?n:parseFloat(n)}var Ae=(()=>{class n{_validator=$$1;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):$$1,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=Ft$4({type:n,features:[dn$3]})}return n})();var Pt$1={provide:A$2,useExisting:Ms$2(()=>Tt$3),multi:!0};var Tt$3=(()=>{class n extends Ae{max;inputName=`max`;normalizeInput=e=>ct$1(e);createValidator=e=>Xe$1(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=Wg(n)))(r||n)}})();static ɵdir=Ft$4({type:n,selectors:[[`input`,`type`,`number`,`max`,``,`formControlName`,``],[`input`,`type`,`number`,`max`,``,`formControl`,``],[`input`,`type`,`number`,`max`,``,`ngModel`,``]],hostVars:1,hostBindings:function(i,r){i&2&&di$1(`max`,r._enabled?r.max:null)},inputs:{max:`max`},standalone:!1,features:[Wv([Pt$1]),gv]})}return n})();var jt={provide:A$2,useExisting:Ms$2(()=>Gt),multi:!0};var Gt=(()=>{class n extends Ae{min;inputName=`min`;normalizeInput=e=>ct$1(e);createValidator=e=>Qe$1(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=Wg(n)))(r||n)}})();static ɵdir=Ft$4({type:n,selectors:[[`input`,`type`,`number`,`min`,``,`formControlName`,``],[`input`,`type`,`number`,`min`,``,`formControl`,``],[`input`,`type`,`number`,`min`,``,`ngModel`,``]],hostVars:1,hostBindings:function(i,r){i&2&&di$1(`min`,r._enabled?r.min:null)},inputs:{min:`min`},standalone:!1,features:[Wv([jt]),gv]})}return n})();var Bt$1={provide:A$2,useExisting:Ms$2(()=>dt$2),multi:!0};var dt$2=(()=>{class n extends Ae{required;inputName=`required`;normalizeInput=Wa$1;createValidator=e=>Ye$1;enabled(e){return e}static ɵfac=(()=>{let e;return function(r){return(e||(e=Wg(n)))(r||n)}})();static ɵdir=Ft$4({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&di$1(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[Wv([Bt$1]),gv]})}return n})();var Ut=new D$2(``);var G$1=new D$2(``,{factory:()=>ie$1});var ie$1=`always`;function ht$2(n,t){return[...t.path,n]}function me$1(n,t,e=ie$1){Me$2(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e===`always`)&&t.valueAccessor.setDisabledState?.(n.disabled),Lt$2(n,t),qt$1(n,t),Wt(n,t),Ht(n,t)}function Ue$2(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),K(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Y$1(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Ht(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Me$2(n,t){let e=ot$2(n);t.validator!==null?n.setValidators(je$1(e,t.validator)):typeof e==`function`&&n.setValidators([e]);let i=st$2(n);t.asyncValidator!==null?n.setAsyncValidators(je$1(i,t.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Y$1(t._rawValidators,r),Y$1(t._rawAsyncValidators,r)}function K(n,t){let e=!1;if(n!==null){if(t.validator!==null){let r=ot$2(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let r=st$2(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let i=()=>{};return Y$1(t._rawValidators,i),Y$1(t._rawAsyncValidators,i),e}function Lt$2(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&ft$1(n,t)})}function Wt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&ft$1(n,t),n.updateOn!==`submit`&&n.markAsTouched()})}function ft$1(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function qt$1(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function pt$2(n,t){Me$2(n,t)}function $t$1(n,t){return K(n,t)}function mt$1(n,t){if(!Object.hasOwn(n,`model`))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function zt$1(n){return Object.getPrototypeOf(n.constructor)===ze$1}function gt$2(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn===`submit`&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Zt$1(n,t){if(!t)return null;let e,i,r;return t.forEach(o=>{o.constructor===Ze$3?e=o:zt$1(o)?i=o:r=o}),r||i||e||null}function Qt(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var _t$2={provide:Ut,useFactory:()=>{let n=p(v$1,{self:!0});return{setParseErrors:t=>{n.setParseErrorSource(t)},set onReset(t){n.onReset=t}}}};var v$1=class extends Z$3{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof D$1&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Zt$1(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,e,i){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(De$4)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(pi$1);if(!this.control||!t)return;let e=t.markForCheck.bind(t);this.subscription=new re$1,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof D$1&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),t.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Ot$3(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof dt$2))}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,t.setCustomControlModelInput(i.value)),this.bindControlProperty(t,r,`touched`,i.touched),this.bindControlProperty(t,r,`dirty`,i.dirty),this.bindControlProperty(t,r,`valid`,i.valid),this.bindControlProperty(t,r,`invalid`,i.invalid),this.bindControlProperty(t,r,`pending`,i.pending),this.bindControlProperty(t,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(t,r,`required`,this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);t.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,i,r){if(e[i]===r)return;e[i]=r;let o=t.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i===`disabled`||i===`required`)&&this.renderer&&Rt$2(this.renderer,t.nativeElement,i,r)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([i,r])=>new pe$1({context:r,kind:i,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,i=Et$5(()=>{let r=t();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),ll(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var J$2=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var wn$1=(()=>{class n extends J$2{constructor(e){super(e)}static ɵfac=function(i){return new(i||n)(Ee$4(v$1,2))};static ɵdir=Ft$4({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&Ov(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[gv]})}return n})();var Sn$1=(()=>{class n extends J$2{constructor(e){super(e)}static ɵfac=function(i){return new(i||n)(Ee$4(m$1,10))};static ɵdir=Ft$4({type:n,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(i,r){i&2&&Ov(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)(`ng-submitted`,r.isSubmitted)},standalone:!1,features:[gv]})}return n})();var w$1=class extends F$1{constructor(t,e,i){super(Ve$1(e),De$2(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let i=this._find(t);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){let r=this._find(t);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){W$1(()=>{lt$2(this,!0,t),Object.keys(t).forEach(i=>{at$2(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this._find(i);r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,P$2(m$2({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new D$1(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return ut$2(this.controls,t)?this.controls[t]:null}};var ge$2=class extends w$1{};var Xt$1={provide:m$1,useExisting:Ms$2(()=>Yt)};var R$1=Promise.resolve();var Yt=(()=>{class n extends m$1{callSetDisabledState;get submitted(){return W$1(this.submittedReactive)}_submitted=Et$5(()=>this.submittedReactive());submittedReactive=V$3(!1);_directives=new Set;form;ngSubmit=new de$3;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new w$1({},Ce(e),be$1(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){R$1.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){R$1.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){R$1.then(()=>{let i=this._findContainer(e.path),r=new w$1({});pt$2(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){R$1.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){R$1.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),gt$2(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new X$1(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(i){return new(i||n)(Ee$4(A$2,10),Ee$4(te$1,10),Ee$4(G$1,8))};static ɵdir=Ft$4({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,r){i&1&&Ua$1(`submit`,function(a){return r.onSubmit(a)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Wv([Xt$1]),gv]})}return n})();function He$2(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Le$2(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var j$1=class extends F$1{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(Ve$1(e),De$2(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ne(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Le$2(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){W$1(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new D$1(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){He$2(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){He$2(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Le$2(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Kt=n=>n instanceof j$1;var Jt$1=(()=>{class n extends m$1{callSetDisabledState;get submitted(){return W$1(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Et$5(()=>this._submittedReactive());_submittedReactive=V$3(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(K(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Ue$2(e.control||null,e,!1),Qt(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,gt$2(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new X$1(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Ue$2(i||null,e),Kt(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);pt$2(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&$t$1(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Me$2(this.form,this),this._oldForm&&K(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(i){return new(i||n)(Ee$4(A$2,10),Ee$4(te$1,10),Ee$4(G$1,8))};static ɵdir=Ft$4({type:n,features:[gv,dn$3]})}return n})();var en$2={provide:m$1,useExisting:Ms$2(()=>tn$2)};var tn$2=(()=>{class n extends Jt$1{form=null;ngSubmit=new de$3;get control(){return this.form}static ɵfac=(()=>{let e;return function(r){return(e||(e=Wg(n)))(r||n)}})();static ɵdir=Ft$4({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(i,r){i&1&&Ua$1(`submit`,function(a){return r.onSubmit(a)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Wv([en$2]),gv]})}return n})();var nn$2={provide:v$1,useExisting:Ms$2(()=>rn$2)};var We$1=Promise.resolve();var rn$2=(()=>{class n extends v$1{_changeDetectorRef;callSetDisabledState;control=new j$1;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new de$3;constructor(e,i,r,o,a,re,oe,Ct){super(oe,Ct,o),this._changeDetectorRef=a,this.callSetDisabledState=re,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),mt$1(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,me$1(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,me$1(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){We$1.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&Wa$1(i);We$1.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ht$2(e,this._parent):[e]}static ɵfac=function(i){return new(i||n)(Ee$4(m$1,9),Ee$4(A$2,10),Ee$4(te$1,10),Ee$4(ee$1,10),Ee$4(pi$1,8),Ee$4(G$1,8),Ee$4(be$3,8),Ee$4(Xn$2,8))};static ɵdir=Ft$4({type:n,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[Wv([nn$2,_t$2]),gv,dn$3,Gb(null)]})}return n})();var Nn$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Ft$4({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return n})();var on$2={provide:ee$1,useExisting:Ms$2(()=>sn$2),multi:!0};var sn$2=(()=>{class n extends ze$1{writeValue(e){let i=e??``;this.setProperty(`value`,i)}registerOnChange(e){this.onChange=i=>{e(i==``?null:parseFloat(i))}}static ɵfac=(()=>{let e;return function(r){return(e||(e=Wg(n)))(r||n)}})();static ɵdir=Ft$4({type:n,selectors:[[`input`,`type`,`number`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(i,r){i&1&&Ua$1(`input`,function(a){return r.onChange(a.target.value)})(`blur`,function(){return r.onTouched()})},standalone:!1,features:[Wv([on$2]),gv]})}return n})();var _e$3=class extends F$1{constructor(t,e,i){super(Ve$1(e),De$2(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){Array.isArray(t)?t.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,i={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(t,e={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,i={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){W$1(()=>{lt$2(this,!1,t),t.forEach((i,r)=>{at$2(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(t.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((i,r)=>{i.reset(t[r],P$2(m$2({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new D$1(this))}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,i)=>{t(e,i)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};var vt$1=new D$2(``);var an$2={provide:v$1,useExisting:Ms$2(()=>ln$2)};var ln$2=(()=>{class n extends v$1{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new de$3;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a,re,oe){super(oe,re,o),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(e,i){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,me$1(e,this,i))}ngOnChanges(e){this._added||this._setUpControl(),mt$1(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return ht$2(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static ɵfac=function(i){return new(i||n)(Ee$4(m$1,13),Ee$4(A$2,10),Ee$4(te$1,10),Ee$4(ee$1,10),Ee$4(vt$1,8),Ee$4(Xn$2,8),Ee$4(be$3,8))};static ɵdir=Ft$4({type:n,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[Wv([an$2,_t$2]),gv,dn$3,Gb(null)]})}return n})();var yt$2=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=nr$2({type:n});static ɵinj=en$4({})}return n})();function qe$1(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var kn$1=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),o={};return qe$1(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new w$1(r,o)}record(e,i=null){return new ge$2(this._reduceControls(e),i)}control(e,i,r){let o={};return this.useNonNullable?(qe$1(i)?o=i:(o.validators=i,o.asyncValidators=r),new j$1(e,P$2(m$2({},o),{nonNullable:!0}))):new j$1(e,i,r)}array(e,i,r){return new _e$3(e.map(a=>this._createControl(a)),i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof j$1)return e;if(e instanceof F$1)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(i,r,o)}else return this.control(e)}static ɵfac=function(i){return new(i||n)};static ɵprov=j$2({token:n,factory:n.ɵfac})}return n})();var In$1=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:G$1,useValue:e.callSetDisabledState??ie$1}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=nr$2({type:n});static ɵinj=en$4({imports:[yt$2]})}return n})();var On$1=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:vt$1,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:G$1,useValue:e.callSetDisabledState??ie$1}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=nr$2({type:n});static ɵinj=en$4({imports:[yt$2]})}return n})();var Ee$2=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new z$4;bulk={select:t=>this._select(t),deselect:t=>this._deselect(t),setSelection:t=>this._setSelection(t)};constructor(t=!1,e,i=!0,r){this._multiple=t,this._emitChanges=i,this.compareWith=r,e&&e.length&&(t?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){return this._select(t)}deselect(...t){return this._deselect(t)}setSelection(...t){return this._setSelection(t)}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_select(t){this._verifyValueAssignment(t),t.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(t){this._verifyValueAssignment(t),t.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(t){this._verifyValueAssignment(t);let e=this.selected,i=new Set(t.map(o=>this._getConcreteValue(o)));t.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(t,i))return i;return t}else return t}};var Ln$1=(()=>{class n{_animationsDisabled=TG();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(i){return new(i||n)};static ɵcmp=Vd({type:n,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(i,r){i&2&&Ov(`mat-pseudo-checkbox-indeterminate`,r.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,r.state===`checked`)(`mat-pseudo-checkbox-disabled`,r.disabled)(`mat-pseudo-checkbox-minimal`,r.appearance===`minimal`)(`mat-pseudo-checkbox-full`,r.appearance===`full`)(`_mat-animation-noopable`,r._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var yt$1=class{_box;_destroyed=new z$4;_resizeSubject=new z$4;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new x(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Me$4(e=>e.some(t=>t.target===i)),hE({bufferSize:1,refCount:!0}),bn$2(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Si=(()=>{class r{_cleanupErrorListener;_observers=new Map;_ngZone=p(se);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||`content-box`;return this._observers.has(n)||this._observers.set(n,new yt$1(n)),this._observers.get(n).observe(e)}static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();var hn$1=[`notch`];var mn$1=[`*`];var wi=[`iconPrefixContainer`];var Ci=[`textPrefixContainer`];var Oi$1=[`iconSuffixContainer`];var Ni=[`textSuffixContainer`];var un$1=[`textField`];var pn$1=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var _n$1=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function gn$1(r,i){r&1&&ja$1(0,`span`,21)}function vn(r,i){if(r&1&&(ba$1(0,`label`,20),DS(1,1),oS(2,gn$1,1,0,`span`,21),Wd()),r&2){let e=mS(2);Ev(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),di$1(`for`,e._control.disableAutomaticLabeling?null:e._control.id),cC(2),iS(!e.hideRequiredMarker&&e._control.required?2:-1)}}function bn(r,i){if(r&1&&oS(0,vn,3,5,`label`,20),r&2)iS(mS()._hasFloatingLabel()?0:-1)}function yn(r,i){r&1&&ja$1(0,`div`,7)}function xn(r,i){}function Sn(r,i){if(r&1&&vv(0,xn,0,0,`ng-template`,13),r&2){mS(2);Ev(`ngTemplateOutlet`,IS(1))}}function wn(r,i){if(r&1&&(ba$1(0,`div`,9),oS(1,Sn,1,1,null,13),Wd()),r&2){let e=mS();Ev(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),cC(),iS(e._forceDisplayInfixLabel()?-1:1)}}function Cn(r,i){r&1&&(ba$1(0,`div`,10,2),DS(2,2),Wd())}function On(r,i){r&1&&(ba$1(0,`div`,11,3),DS(2,3),Wd())}function Nn(r,i){}function Rn(r,i){if(r&1&&vv(0,Nn,0,0,`ng-template`,13),r&2){mS();Ev(`ngTemplateOutlet`,IS(1))}}function kn(r,i){r&1&&(ba$1(0,`div`,14,4),DS(2,4),Wd())}function En(r,i){r&1&&(ba$1(0,`div`,15,5),DS(2,5),Wd())}function Mn(r,i){r&1&&ja$1(0,`div`,16)}function Dn(r,i){r&1&&(ba$1(0,`div`,18),DS(1,6),Wd())}function Fn(r,i){if(r&1&&(ba$1(0,`mat-hint`,22),zS(1),Wd()),r&2){let e=mS(2);Ev(`id`,e._hintLabelId),cC(),Bv(e.hintLabel)}}function Pn(r,i){if(r&1&&(ba$1(0,`div`,19),oS(1,Fn,2,2,`mat-hint`,22),DS(2,7),ja$1(3,`div`,23),DS(4,8),Wd()),r&2){let e=mS();cC(),iS(e.hintLabel?1:-1)}}var Ze$2=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵdir=Ft$4({type:r,selectors:[[`mat-label`]]})}return r})();var Pi=new D$2(`MatError`);var Ti=(()=>{class r{id=p(Ct$3).getId(`mat-mdc-error-`);static ɵfac=function(t){return new(t||r)};static ɵdir=Ft$4({type:r,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(t,n){t&2&&bv(`id`,n.id)},inputs:{id:`id`},features:[Wv([{provide:Pi,useExisting:r}])]})}return r})();var Ke$1=(()=>{class r{align=`start`;id=p(Ct$3).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||r)};static ɵdir=Ft$4({type:r,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,n){t&2&&(bv(`id`,n.id),di$1(`align`,null),Ov(`mat-mdc-form-field-hint-end`,n.align===`end`))},inputs:{align:`align`,id:`id`}})}return r})();var Tn=new D$2(`MatPrefix`);var An=new D$2(`MatSuffix`);var Ai=new D$2(`FloatingLabelParent`);var Ri$1=(()=>{class r{_elementRef=p(Ot$5);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=p(Si);_ngZone=p(se);_parent=p(Ai);_resizeSubscription=new re$1;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return In(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||r)};static ɵdir=Ft$4({type:r,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,n){t&2&&Ov(`mdc-floating-label--float-above`,n.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return r})();function In(r){let i=r;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var ki=`mdc-line-ripple--active`;var Ue$1=`mdc-line-ripple--deactivating`;var Ei=(()=>{class r{_elementRef=p(Ot$5);_cleanupTransitionEnd;constructor(){let e=p(se),t=p(Xn$2);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ue$1),e.add(ki)}deactivate(){this._elementRef.nativeElement.classList.add(Ue$1)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(Ue$1);e.propertyName===`opacity`&&n&&t.remove(ki,Ue$1)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||r)};static ɵdir=Ft$4({type:r,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return r})();var Mi=(()=>{class r{_elementRef=p(Ot$5);_ngZone=p(se);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||r)};static ɵcmp=Vd({type:r,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(t,n){if(t&1&&_v(hn$1,5),t&2){let o;Kd(o=Xd())&&(n._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(t,n){t&2&&Ov(`mdc-notched-outline--notched`,n.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:mn$1,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(t,n){t&1&&(yS(),wv(0,`div`,1),qd(1,`div`,2,0),DS(3),Zd(),wv(4,`div`,3))},encapsulation:2})}return r})();var xt$1=(()=>{class r{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||r)};static ɵdir=Ft$4({type:r})}return r})();var St$1=new D$2(`MatFormField`);var Ln=new D$2(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Di=`fill`;var Vn=`auto`;var Fi$1=`fixed`;var zn$1=`translateY(-50%)`;var wt$1=(()=>{class r{_elementRef=p(Ot$5);_changeDetectorRef=p(pi$1);_platform=p(ND);_idGenerator=p(Ct$3);_ngZone=p(se);_defaults=p(Ln,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=gH(`iconPrefixContainer`);_textPrefixContainerSignal=gH(`textPrefixContainer`);_iconSuffixContainerSignal=gH(`iconSuffixContainer`);_textSuffixContainerSignal=gH(`textSuffixContainer`);_prefixSuffixContainers=Et$5(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=mH(Ze$2);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Bo$1(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Vn}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Di;this._appearanceSignal.set(t)}_appearanceSignal=V$3(Di);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Fi$1}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Fi$1}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new z$4;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=TG();constructor(){let e=this._defaults,t=p(SN);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ll(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Et$5(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,n=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Io$1([void 0,void 0]),F$2(()=>[t.errorState,t.userAriaDescribedBy]),fE(),Me$4(([[o,a],[l,d]])=>o!==l||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(bn$2(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),sE(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){DH({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Et$5(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(l=>l.align===`start`):null,a=this._hintChildren?this._hintChildren.find(l=>l.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,n;if(t){let o=this._describedByIds||e;n=e.concat(t.filter(a=>a&&!o.includes(a)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,d=n?.getBoundingClientRect().width??0,h=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${zn$1} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+l}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+l+d+h]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||r)};static ɵcmp=Vd({type:r,selectors:[[`mat-form-field`]],contentQueries:function(t,n,o){if(t&1&&(Mv(o,n._labelChild,Ze$2,5),Ba$1(o,xt$1,5)(o,Tn,5)(o,An,5)(o,Pi,5)(o,Ke$1,5)),t&2){wS();let a;Kd(a=Xd())&&(n._formFieldControl=a.first),Kd(a=Xd())&&(n._prefixChildren=a),Kd(a=Xd())&&(n._suffixChildren=a),Kd(a=Xd())&&(n._errorChildren=a),Kd(a=Xd())&&(n._hintChildren=a)}},viewQuery:function(t,n){if(t&1&&(Nv(n._iconPrefixContainerSignal,wi,5)(n._textPrefixContainerSignal,Ci,5)(n._iconSuffixContainerSignal,Oi$1,5)(n._textSuffixContainerSignal,Ni,5),_v(un$1,5)(wi,5)(Ci,5)(Oi$1,5)(Ni,5)(Ri$1,5)(Mi,5)(Ei,5)),t&2){wS(4);let o;Kd(o=Xd())&&(n._textField=o.first),Kd(o=Xd())&&(n._iconPrefixContainer=o.first),Kd(o=Xd())&&(n._textPrefixContainer=o.first),Kd(o=Xd())&&(n._iconSuffixContainer=o.first),Kd(o=Xd())&&(n._textSuffixContainer=o.first),Kd(o=Xd())&&(n._floatingLabel=o.first),Kd(o=Xd())&&(n._notchedOutline=o.first),Kd(o=Xd())&&(n._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(t,n){t&2&&Ov(`mat-mdc-form-field-label-always-float`,n._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,n._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,n._hasIconSuffix)(`mat-form-field-invalid`,n._control.errorState)(`mat-form-field-disabled`,n._control.disabled)(`mat-form-field-autofilled`,n._control.autofilled)(`mat-form-field-appearance-fill`,n.appearance==`fill`)(`mat-form-field-appearance-outline`,n.appearance==`outline`)(`mat-form-field-hide-placeholder`,n._hasFloatingLabel()&&!n._shouldLabelFloat())(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`ng-untouched`,n._shouldForward(`untouched`))(`ng-touched`,n._shouldForward(`touched`))(`ng-pristine`,n._shouldForward(`pristine`))(`ng-dirty`,n._shouldForward(`dirty`))(`ng-valid`,n._shouldForward(`valid`))(`ng-invalid`,n._shouldForward(`invalid`))(`ng-pending`,n._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Wv([{provide:St$1,useExisting:r},{provide:Ai,useExisting:r}])],ngContentSelectors:_n$1,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(t,n){if(t&1&&(yS(pn$1),vv(0,bn,1,1,`ng-template`,null,0,oT),ba$1(2,`div`,6,1),Ua$1(`click`,function(a){return n._control.onContainerClick(a)}),oS(4,yn,1,0,`div`,7),ba$1(5,`div`,8),oS(6,wn,2,2,`div`,9),oS(7,Cn,3,0,`div`,10),oS(8,On,3,0,`div`,11),ba$1(9,`div`,12),oS(10,Rn,1,1,null,13),DS(11),Wd(),oS(12,kn,3,0,`div`,14),oS(13,En,3,0,`div`,15),Wd(),oS(14,Mn,1,0,`div`,16),Wd(),ba$1(15,`div`,17),oS(16,Dn,2,0,`div`,18)(17,Pn,5,1,`div`,19),Wd()),t&2){let o;cC(2),Ov(`mdc-text-field--filled`,!n._hasOutline())(`mdc-text-field--outlined`,n._hasOutline())(`mdc-text-field--no-label`,!n._hasFloatingLabel())(`mdc-text-field--disabled`,n._control.disabled)(`mdc-text-field--invalid`,n._control.errorState),cC(2),iS(!n._hasOutline()&&!n._control.disabled?4:-1),cC(2),iS(n._hasOutline()?6:-1),cC(),iS(n._hasIconPrefix?7:-1),cC(),iS(n._hasTextPrefix?8:-1),cC(2),iS(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),cC(2),iS(n._hasTextSuffix?12:-1),cC(),iS(n._hasIconSuffix?13:-1),cC(),iS(n._hasOutline()?-1:14),cC(),Ov(`mat-mdc-form-field-subscript-dynamic-size`,n.subscriptSizing===`dynamic`);let a=n._getSubscriptMessageType();cC(),iS((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[Ri$1,Mi,$T,Ei,Ke$1],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return r})();var Bn=[`text`];var Wn$1=[[[`mat-icon`]],`*`];var jn$1=[`mat-icon`,`*`];function Hn$1(r,i){if(r&1&&ja$1(0,`mat-pseudo-checkbox`,1),r&2){let e=mS();Ev(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function Yn$1(r,i){if(r&1&&ja$1(0,`mat-pseudo-checkbox`,3),r&2)Ev(`disabled`,mS().disabled)}function Xn$1(r,i){if(r&1&&(ba$1(0,`span`,4),zS(1),Wd()),r&2){let e=mS();cC(),Jd(`(`,e.group.label,`)`)}}var Ot$2=new D$2(`MAT_OPTION_PARENT_COMPONENT`);var Nt$2=new D$2(`MatOptgroup`);var Ct$2=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}};var Je$2=(()=>{class r{_element=p(Ot$5);_changeDetectorRef=p(pi$1);_parent=p(Ot$2,{optional:!0});group=p(Nt$2,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=p(Ct$3).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=V$3(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new de$3;_text;_stateChanges=new z$4;constructor(){let e=p(w$2);e.load(Ke$3),e.load(lt$3),this._signalDisableRipple=!!this._parent&&Xs$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus==`function`&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ce$1(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ct$2(this,e))}static ɵfac=function(t){return new(t||r)};static ɵcmp=Vd({type:r,selectors:[[`mat-option`]],viewQuery:function(t,n){if(t&1&&_v(Bn,7),t&2){let o;Kd(o=Xd())&&(n._text=o.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,n){t&1&&Ua$1(`click`,function(){return n._selectViaInteraction()})(`keydown`,function(a){return n._handleKeydown(a)}),t&2&&(bv(`id`,n.id),di$1(`aria-selected`,n.selected)(`aria-disabled`,n.disabled.toString()),Ov(`mdc-list-item--selected`,n.selected)(`mat-mdc-option-multiple`,n.multiple)(`mat-mdc-option-active`,n.active)(`mdc-list-item--disabled`,n.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,Wa$1]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:jn$1,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,n){t&1&&(yS(Wn$1),oS(0,Hn$1,1,2,`mat-pseudo-checkbox`,1),DS(1),ba$1(2,`span`,2,0),DS(4,1),Wd(),oS(5,Yn$1,1,1,`mat-pseudo-checkbox`,3),oS(6,Xn$1,2,1,`span`,4),ja$1(7,`div`,5)),t&2&&(iS(n.multiple?0:-1),cC(5),iS(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),cC(),iS(n.group&&n.group._inert?6:-1),cC(),Ev(`matRippleTrigger`,n._getHostElement())(`matRippleDisabled`,n.disabled||n.disableRipple))},dependencies:[Ln$1,qo$1],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return r})();function Ii(r,i,e){if(e.length){let t=i.toArray(),n=e.toArray(),o=0;for(let a=0;a<r+1;a++)t[a].group&&t[a].group===n[o]&&o++;return o}return 0}function Li$1(r,i,e,t){return r<e?r:r+i>e+t?Math.max(0,r-t+i):e}var Vi$1=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=nr$2({type:r});static ɵinj=en$4({imports:[xe,wt$1,fG]})}return r})();var Qn$1=20;var Re=(()=>{class r{_ngZone=p(se);_platform=p(ND);_renderer=p(Kn$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new z$4;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Qn$1){return this._platform.isBrowser?new x(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(aE(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):k$2()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Me$4(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let n=S$1(t),o=e.getElementRef().nativeElement;do if(n==o)return!0;while(n=n.parentElement);return!1}static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();var Jn$1=(()=>{class r{elementRef=p(Ot$5);scrollDispatcher=p(Re);ngZone=p(se);dir=p(SN,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new z$4;_renderer=p(Xn$2);_cleanupScroll;_elementScrolled=new z$4;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,n=this.dir&&this.dir.value==`rtl`;e.left??=n?e.end:e.start,e.right??=n?e.start:e.end,e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),n&&Ao$1()!=G$3.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Ao$1()==G$3.INVERTED?e.left=e.right:Ao$1()==G$3.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;wo$1()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t=`left`,n=`right`,o=this.elementRef.nativeElement;if(e==`top`)return o.scrollTop;if(e==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value==`rtl`;return e==`start`?e=a?n:t:e==`end`&&(e=a?t:n),a&&Ao$1()==G$3.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Ao$1()==G$3.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(t){return new(t||r)};static ɵdir=Ft$4({type:r,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return r})();var er$1=20;var re=(()=>{class r{_platform=p(ND);_listeners;_viewportSize=null;_change=new z$4;_document=p(Z$6);constructor(){let e=p(se),t=p(Kn$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=o=>this._change.next(o);this._listeners=[t.listen(`window`,`resize`,n),t.listen(`window`,`orientationchange`,n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,o=n.getBoundingClientRect();return{top:-o.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,left:-o.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0}}change(e=er$1){return e>0?this._change.pipe(aE(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();var Ne$1=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=nr$2({type:r});static ɵinj=en$4({})}return r})();var Rt$1=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=nr$2({type:r});static ɵinj=en$4({imports:[fG,Ne$1,fG,Ne$1]})}return r})();var ke=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var kt$2=class extends ke{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,n,o,a){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=o||null,this.directives=a||null}};var Ee$1=class extends ke{templateRef;viewContainerRef;context;injector;constructor(i,e,t,n){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var Et$2=class extends ke{element;constructor(i){super(),this.element=i instanceof Ot$5?i.nativeElement:i}};var Mt$2=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof kt$2)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Ee$1)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Et$2)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var et$2=class extends Mt$2{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,n=t.get(Jn$2,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=i.injector||this._defaultInjector||be$3.NULL,o=n.get(X$3,t.injector);e=EH(i.component,{elementInjector:n,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var zi$1=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=nr$2({type:r});static ɵinj=en$4({})}return r})();var Bi$1=wo$1();function Ui$1(r){return new tt$2(r.get(re),r.get(Z$6))}var tt$2=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=Lo$1(-this._previousScrollPosition.left),i.style.top=Lo$1(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,n=e.style,o=t.scrollBehavior||``,a=n.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),Bi$1&&(t.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Bi$1&&(t.scrollBehavior=o,n.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Zi$1(r,i){return new it$1(r.get(Re),r.get(se),r.get(re),i)}var it$1=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,n){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Me$4(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Me$1=class{enable(){}disable(){}attach(){}};function Ft$1(r,i){return i.some(e=>{let t=r.bottom<e.top,n=r.top>e.bottom,o=r.right<e.left,a=r.left>e.right;return t||n||o||a})}function Wi$1(r,i){return i.some(e=>{let t=r.top<e.top,n=r.bottom>e.bottom,o=r.left<e.left,a=r.right>e.right;return t||n||o||a})}function Fe$2(r,i){return new nt$1(r.get(Re),r.get(re),r.get(se),i)}var nt$1=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,n){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();Ft$1(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Ki$1=(()=>{class r{_injector=p(be$3);noop=()=>new Me$1;close=e=>Zi$1(this._injector,e);block=()=>Ui$1(this._injector);reposition=e=>Fe$2(this._injector,e);static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();var De$1=class{positionStrategy;scrollStrategy=new Me$1;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var rt$1=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var $i$1=(()=>{class r{_attachedOverlays=[];_document=p(Z$6);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();var Qi$1=(()=>{class r extends $i$1{_ngZone=p(se);_renderer=p(Kn$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let o=t[n];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();var Ji$1=(()=>{class r extends $i$1{_platform=p(ND);_ngZone=p(se);_renderer=p(Kn$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,`pointerdown`,this._pointerDownListener,n),o.listen(t,`click`,this._clickListener,n),o.listen(t,`auxclick`,this._clickListener,n),o.listen(t,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=g$1(e)};_clickListener=e=>{let t=g$1(e),n=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let l=o[a],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,d))){if(ji$1(l.overlayElement,t)||ji$1(l.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>d.next(e)):d.next(e)}}};static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();function ji$1(r,i){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=i;for(;t;){if(t===r)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var en$1=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵcmp=Vd({type:r,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return r})();var tn$1=(()=>{class r{_platform=p(ND);_containerElement;_document=p(Z$6);_styleLoader=p(w$2);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||To$1()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<n.length;o++)n[o].remove()}let t=this._document.createElement(`div`);t.classList.add(e),To$1()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(en$1)}static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();var Pt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,n){this._renderer=e,this._ngZone=t,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Tt$2(r){return r&&r.nodeType===1}var Dt$2=new Set;var ot$1=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new z$4;_attachments=new z$4;_detachments=new z$4;_positionStrategy;_scrollStrategy;_locationChanges=re$1.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new z$4;_outsidePointerEvents=new z$4;_afterNextRenderRef;constructor(i,e,t,n,o,a,l,d,h,c=!1,f,k){this._portalOutlet=i,this._host=e,this._pane=t,this._config=n,this._ngZone=o,this._keyboardDispatcher=a,this._document=l,this._location=d,this._outsideClickDispatcher=h,this._animationsDisabled=c,this._injector=f,this._renderer=k,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Dt$2.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=vd(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),Dt$2.delete(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Dt$2.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=m$2(m$2({},this._config),i),this._updateElementSize()}setDirection(i){this._config=P$2(m$2({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Lo$1(this._config.width),i.height=Lo$1(this._config.height),i.minWidth=Lo$1(this._config.minWidth),i.minHeight=Lo$1(this._config.minHeight),i.maxWidth=Lo$1(this._config.maxWidth),i.maxHeight=Lo$1(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Tt$2(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Pt(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let n=eh(e||[]).filter(o=>!!o);n.length&&(t?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=vd(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var Hi$1=`cdk-overlay-connected-position-bounding-box`;var tr$1=/([A-Za-z%]+)$/;function At$2(r,i){return new at$1(i,r.get(re),r.get(Z$6),r.get(ND),r.get(tn$1))}var at$1=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new z$4;_resizeSubscription=re$1.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,n,o){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Hi$1),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,o=[],a;for(let l of this._preferredPositions){let d=this._getOriginPoint(i,n,l),h=this._getOverlayPoint(d,e,l),c=this._getOverlayFit(h,e,t,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(c,h,t)){o.push({position:l,origin:d,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!a||a.overlayFit.visibleArea<c.visibleArea)&&(a={overlayFit:c,overlayPoint:h,originPoint:d,position:l,overlayRect:e})}if(o.length){let l=null,d=-1;for(let h of o){let c=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);c>d&&(d=c,l=h)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&de$2(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Hi$1),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Ot$5?this._origin.nativeElement:Tt$2(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let n;if(t.originX==`center`)n=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;n=t.originX==`start`?a:l}e.left<0&&(n-=e.left);let o;return t.originY==`center`?o=i.top+i.height/2:o=t.originY==`top`?i.top:i.bottom,e.top<0&&(o-=e.top),{x:n,y:o}}_getOverlayPoint(i,e,t){let n;t.overlayX==`center`?n=-e.width/2:t.overlayX===`start`?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let o;return t.overlayY==`center`?o=-e.height/2:o=t.overlayY==`top`?0:-e.height,{x:i.x+n,y:i.y+o}}_getOverlayFit(i,e,t,n){let o=Xi$1(e),{x:a,y:l}=i,d=this._getOffset(n,`x`),h=this._getOffset(n,`y`);d&&(a+=d),h&&(l+=h);let c=0-a,f=a+o.width-t.width,k=0-l,P=l+o.height-t.height,E=this._subtractOverflows(o.width,c,f),V=this._subtractOverflows(o.height,k,P),Bt=E*V;return{visibleArea:Bt,isCompletelyWithinViewport:o.width*o.height===Bt,fitsInViewportVertically:V===o.height,fitsInViewportHorizontally:E==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,o=t.right-e.x,a=Yi$1(this._overlayRef.getConfig().minHeight),l=Yi$1(this._overlayRef.getConfig().minWidth),d=i.fitsInViewportVertically||a!=null&&a<=n,h=i.fitsInViewportHorizontally||l!=null&&l<=o;return d&&h}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=Xi$1(e),o=this._viewportRect,a=Math.max(i.x+n.width-o.width,0),l=Math.max(i.y+n.height-o.height,0),d=Math.max(o.top-t.top-i.y,0),h=Math.max(o.left-t.left-i.x,0),c=0,f=0;return n.width<=o.width?c=h||-a:c=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,n.height<=o.height?f=d||-l:f=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:c,y:f},{x:i.x+c,y:i.y+f}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!ir$1(this._lastScrollVisibility,t)){let n=new rt$1(i,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=i.overlayY;i.overlayX===`center`?t=`center`:this._isRtl()?t=i.overlayX===`start`?`right`:`left`:t=i.overlayX===`start`?`left`:`right`;for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,n=this._isRtl(),o,a,l;if(e.overlayY===`top`)a=i.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)l=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-l+this._getViewportMarginTop();else{let P=Math.min(t.bottom-i.y+t.top,i.y),E=this._lastBoundingBoxSize.height;o=P*2,a=i.y-P,o>E&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-E/2)}let d=e.overlayX===`start`&&!n||e.overlayX===`end`&&n,h=e.overlayX===`end`&&!n||e.overlayX===`start`&&n,c,f,k;if(h)k=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=i.x-this._getViewportMarginStart();else if(d)f=i.x,c=t.right-i.x-this._getViewportMarginEnd();else{let P=Math.min(t.right-i.x+t.left,i.x),E=this._lastBoundingBoxSize.width;c=P*2,f=i.x-P,c>E&&!this._isInitialRender&&!this._growAfterOpen&&(f=i.x-E/2)}return{top:a,left:f,bottom:l,right:k,width:c,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;n.width=Lo$1(t.width),n.height=Lo$1(t.height),n.top=Lo$1(t.top)||`auto`,n.bottom=Lo$1(t.bottom)||`auto`,n.left=Lo$1(t.left)||`auto`,n.right=Lo$1(t.right)||`auto`,e.overlayX===`center`?n.alignItems=`center`:n.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(n.maxHeight=Lo$1(o)),a&&(n.maxWidth=Lo$1(a))}this._lastBoundingBoxSize=t,de$2(this._boundingBox.style,n)}_resetBoundingBoxStyles(){de$2(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){de$2(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,e){let t={},n=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(n){let c=this._viewportRuler.getViewportScrollPosition();de$2(t,this._getExactOverlayY(e,i,c)),de$2(t,this._getExactOverlayX(e,i,c))}else t.position=`static`;let l=``,d=this._getOffset(e,`x`),h=this._getOffset(e,`y`);d&&(l+=`translateX(${d}px) `),h&&(l+=`translateY(${h}px)`),t.transform=l.trim(),a.maxHeight&&(n?t.maxHeight=Lo$1(a.maxHeight):o&&(t.maxHeight=``)),a.maxWidth&&(n?t.maxWidth=Lo$1(a.maxWidth):o&&(t.maxWidth=``)),de$2(this._pane.style,t)}_getExactOverlayY(i,e,t){let n={top:``,bottom:``},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else n.top=Lo$1(o.y);return n}_getExactOverlayX(i,e,t){let n={left:``,right:``},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX===`end`?`left`:`right`:a=i.overlayX===`end`?`right`:`left`,a===`right`)n.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else n.left=Lo$1(o.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Wi$1(i,t),isOriginOutsideView:Ft$1(i,t),isOverlayClipped:Wi$1(e,t),isOverlayOutsideView:Ft$1(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,n)=>t-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&eh(i).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof Ot$5)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();i&&(e.style.display=`block`);let t=e.getBoundingClientRect();return i&&(e.style.display=``),t}};function de$2(r,i){for(let e in i)i.hasOwnProperty(e)&&(r[e]=i[e]);return r}function Yi$1(r){if(typeof r!=`number`&&r!=null){let[i,e]=r.split(tr$1);return!e||e===`px`?parseFloat(i):null}return r||null}function Xi$1(r){return{top:Math.floor(r.top),right:Math.floor(r.right),bottom:Math.floor(r.bottom),left:Math.floor(r.left),width:Math.floor(r.width),height:Math.floor(r.height)}}function ir$1(r,i){return r===i?!0:r.isOriginClipped===i.isOriginClipped&&r.isOriginOutsideView===i.isOriginOutsideView&&r.isOverlayClipped===i.isOverlayClipped&&r.isOverlayOutsideView===i.isOverlayOutsideView}var qi$1=`cdk-global-overlay-wrapper`;function nn$1(r){return new st$1}var st$1=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(qi$1),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:n,height:o,maxWidth:a,maxHeight:l}=this._overlayRef.getConfig(),d=(n===`100%`||n===`100vw`)&&(!a||a===`100%`||a===`100vw`),h=(o===`100%`||o===`100vh`)&&(!l||l===`100%`||l===`100vh`),c=this._xPosition,f=this._xOffset,k=this._overlayRef.getConfig().direction===`rtl`,P=``,E=``,V=``;d?V=`flex-start`:c===`center`?(V=`center`,k?E=f:P=f):k?c===`left`||c===`end`?(V=`flex-end`,P=f):(c===`right`||c===`start`)&&(V=`flex-start`,E=f):c===`left`||c===`start`?(V=`flex-start`,P=f):(c===`right`||c===`end`)&&(V=`flex-end`,E=f),i.position=this._cssPosition,i.marginLeft=d?`0`:P,i.marginTop=h?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=d?`0`:E,e.justifyContent=V,e.alignItems=h?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(qi$1),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var rn$1=(()=>{class r{_injector=p(be$3);global(){return nn$1()}flexibleConnectedTo(e){return At$2(this._injector,e)}static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();var Pe$1=new D$2(`OVERLAY_DEFAULT_CONFIG`);function It$2(r,i){r.get(w$2).load(en$1);let e=r.get(tn$1),t=r.get(Z$6),n=r.get(Ct$3),o=r.get(rr$2),a=r.get(SN),l=r.get(Xn$2,null,{optional:!0})||r.get(Kn$1).createRenderer(null,null),d=new De$1(i),h=r.get(Pe$1,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||a.value,!t.body||!(`showPopover`in t.body)?d.usePopover=!1:d.usePopover=i?.usePopover??h;let c=t.createElement(`div`),f=t.createElement(`div`);c.id=n.getId(`cdk-overlay-`),c.classList.add(`cdk-overlay-pane`),f.appendChild(c),d.usePopover&&(f.setAttribute(`popover`,`manual`),f.classList.add(`cdk-overlay-popover`));let k=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Tt$2(k)?k.after(f):k?.type===`parent`?k.element.appendChild(f):e.getContainerElement().appendChild(f),new ot$1(new et$2(c,o,r),f,c,d,r.get(se),r.get(Qi$1),t,r.get(Qr$1),r.get(Ji$1),i?.disableAnimations??r.get(cl,null,{optional:!0})===`NoopAnimations`,r.get(X$3),l)}var on$1=(()=>{class r{scrollStrategies=p(Ki$1);_positionBuilder=p(rn$1);_injector=p(be$3);create(e){return It$2(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();var nr$1=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var rr$1=new D$2(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let r=p(be$3);return()=>Fe$2(r)}});var _e$2=(()=>{class r{elementRef=p(Ot$5);static ɵfac=function(t){return new(t||r)};static ɵdir=Ft$4({type:r,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return r})();var an$1=new D$2(`cdk-connected-overlay-default-config`);var lt$1=(()=>{class r{_dir=p(SN,{optional:!0});_injector=p(be$3);_overlayRef;_templatePortal;_backdropSubscription=re$1.EMPTY;_attachSubscription=re$1.EMPTY;_detachSubscription=re$1.EMPTY;_positionSubscription=re$1.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=p(rr$1);_ngZone=p(se);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new de$3;positionChange=new de$3;attach=new de$3;detach=new de$3;overlayKeydown=new de$3;overlayOutsideClick=new de$3;constructor(){let e=p(Vr$1),t=p(fn$2),n=p(an$1,{optional:!0}),o=p(Pe$1,{optional:!0});this.usePopover=o?.usePopover===!1?null:`global`,this._templatePortal=new Ee$1(e,t),this.scrollStrategy=this._scrollStrategyFactory(),n&&this._assignConfig(n)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=nr$1);let e=this._overlayRef=It$2(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ce$1(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let n=this._getOriginElement(),o=g$1(t);(!n||n!==o&&!n.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new De$1({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(n=>({originX:n.originX,originY:n.originY,overlayX:n.overlayX,overlayY:n.overlayY,offsetX:n.offsetX||this.offsetX,offsetY:n.offsetY||this.offsetY,panelClass:n.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=At$2(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof _e$2?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof _e$2?this.origin.elementRef.nativeElement:this.origin instanceof Ot$5?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(pE(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(t){return new(t||r)};static ɵdir=Ft$4({type:r,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,Wa$1],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,Wa$1],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,Wa$1],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,Wa$1],push:[2,`cdkConnectedOverlayPush`,`push`,Wa$1],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,Wa$1],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,Wa$1],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[dn$3]})}return r})();var Lt$1=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=nr$2({type:r});static ɵinj=en$4({providers:[on$1],imports:[fG,zi$1,Rt$1,Rt$1]})}return r})();var sn$1=new D$2(``);var ln$1=(()=>{class r{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),n=e().touched();return t&&n}static ɵfac=function(t){return new(t||r)};static ɵprov=j$2({token:r,factory:r.ɵfac})}return r})();var dt$1=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,t,n,o){this._defaultMatcher=i,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=o,e?Xs$1(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return i?.isErrorState(t,e)??!1}};var dn$1=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=nr$2({type:r});static ɵinj=en$4({imports:[fG]})}return r})();var Vt=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=nr$2({type:r});static ɵinj=en$4({imports:[Ze$4,dn$1,Je$2,fG]})}return r})();var lr$1=[`trigger`];var dr$1=[`panel`];var cr$1=[[[`mat-select-trigger`]],`*`];var fr$1=[`mat-select-trigger`,`*`];function hr$1(r,i){if(r&1&&(ba$1(0,`span`,4),zS(1),Wd()),r&2){let e=mS();cC(),Bv(e.placeholder)}}function mr$1(r,i){r&1&&DS(0)}function ur$1(r,i){if(r&1&&(ba$1(0,`span`,11),zS(1),Wd()),r&2){let e=mS(2);cC(),Bv(e.triggerValue)}}function pr$1(r,i){if(r&1&&(ba$1(0,`span`,5),oS(1,mr$1,1,0)(2,ur$1,2,1,`span`,11),Wd()),r&2){let e=mS();cC(),iS(e.customTrigger?1:2)}}function _r$1(r,i){if(r&1){let e=hS();ba$1(0,`div`,12,1),Ua$1(`keydown`,function(n){wp(e);return Ip(mS()._handleKeydown(n))}),DS(2,1),Wd()}if(r&2){let e=mS();OS(e.panelClass),Ov(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),di$1(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var gr$1=new D$2(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let r=p(be$3);return()=>Fe$2(r)}});var vr$1=new D$2(`MAT_SELECT_CONFIG`);var br$1=new D$2(`MatSelectTrigger`);var zt=class{source;value;constructor(i,e){this.source=i,this.value=e}};var Ms$1=(()=>{class r{_viewportRuler=p(re);_changeDetectorRef=p(pi$1);_elementRef=p(Ot$5);_dir=p(SN,{optional:!0});_idGenerator=p(Ct$3);_renderer=p(Xn$2);_parentFormField=p(St$1,{optional:!0});ngControl=p(v$1,{self:!0,optional:!0});_liveAnnouncer=p(ln$3);_defaultOptions=p(vr$1,{optional:!0});_animationsDisabled=TG();_popoverLocation;_initialized=new z$4;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,o=Ii(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?n.scrollTop=0:n.scrollTop=Li$1(a.offsetTop,a.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new zt(this,e)}_scrollStrategyFactory=p(gr$1);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new z$4;_errorStateTracker;stateChanges=new z$4;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=V$3(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(he$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Eo$1(()=>{let e=this.options;return e?e.changes.pipe(Io$1(e),Ae$2(()=>sE(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ae$2(()=>this.optionSelectionChanges))});openedChange=new de$3;_openedStream=this.openedChange.pipe(Me$4(e=>e),F$2(()=>{}));_closedStream=this.openedChange.pipe(Me$4(e=>!e),F$2(()=>{}));selectionChange=new de$3;valueChange=new de$3;constructor(){let e=p(ln$1),t=p(Yt,{optional:!0}),n=p(tn$2,{optional:!0}),o=p(new za$1(`tabindex`),{optional:!0}),a=p(Pe$1,{optional:!0}),l=p(sn$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new dt$1(e,l||this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Ee$2(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(bn$2(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(bn$2(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Io$1(null),bn$2(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute(`aria-labelledby`,e):n.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ne$3(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!Ce$1(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;a.onKeydown(e);let d=this.selected;d&&l!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,o=n===40||n===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(n===13||n===32)&&t.activeItem&&!Ce$1(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(l?d.select():d.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ce$1(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof _e$2?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Dt$4(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=sE(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(bn$2(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),sE(...this.options.map(t=>t._stateChanges)).pipe(bn$2(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=g$1(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||r)};static ɵcmp=Vd({type:r,selectors:[[`mat-select`]],contentQueries:function(t,n,o){if(t&1&&Ba$1(o,br$1,5)(o,Je$2,5)(o,Nt$2,5),t&2){let a;Kd(a=Xd())&&(n.customTrigger=a.first),Kd(a=Xd())&&(n.options=a),Kd(a=Xd())&&(n.optionGroups=a)}},viewQuery:function(t,n){if(t&1&&_v(lr$1,5)(dr$1,5)(lt$1,5),t&2){let o;Kd(o=Xd())&&(n.trigger=o.first),Kd(o=Xd())&&(n.panel=o.first),Kd(o=Xd())&&(n._overlayDir=o.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,n){t&1&&Ua$1(`keydown`,function(a){return n._handleKeydown(a)})(`focus`,function(){return n._onFocus()})(`blur`,function(){return n._onBlur()}),t&2&&(di$1(`id`,n.id)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n.panelOpen?n.id+`-panel`:null)(`aria-expanded`,n.panelOpen)(`aria-label`,n.ariaLabel||null)(`aria-required`,n.required.toString())(`aria-disabled`,n.disabled.toString())(`aria-invalid`,n.errorState)(`aria-activedescendant`,n._getAriaActiveDescendant()),Ov(`mat-mdc-select-disabled`,n.disabled)(`mat-mdc-select-invalid`,n.errorState)(`mat-mdc-select-required`,n.required)(`mat-mdc-select-empty`,n.empty)(`mat-mdc-select-multiple`,n.multiple)(`mat-select-open`,n.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Wa$1],disableRipple:[2,`disableRipple`,`disableRipple`,Wa$1],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:yH(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Wa$1],placeholder:`placeholder`,required:[2,`required`,`required`,Wa$1],multiple:[2,`multiple`,`multiple`,Wa$1],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Wa$1],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,yH],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Wa$1]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Wv([{provide:xt$1,useExisting:r},{provide:Ot$2,useExisting:r}]),dn$3],ngContentSelectors:fr$1,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,n){if(t&1&&(yS(cr$1),ba$1(0,`div`,2,0),Ua$1(`click`,function(){return n.open()}),ba$1(3,`div`,3),oS(4,hr$1,2,1,`span`,4)(5,pr$1,3,1,`span`,5),Wd(),ba$1(6,`div`,6)(7,`div`,7),kp(),ba$1(8,`svg`,8),ja$1(9,`path`,9),Wd()()()(),vv(10,_r$1,3,16,`ng-template`,10),Ua$1(`detach`,function(){return n.close()})(`backdropClick`,function(){return n.close()})(`overlayKeydown`,function(a){return n._handleOverlayKeydown(a)})),t&2){let o=IS(1);cC(3),di$1(`id`,n._valueId),cC(),iS(n.empty?4:5),cC(6),Ev(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,n._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,n._scrollStrategy)(`cdkConnectedOverlayOrigin`,n._preferredOverlayOrigin||o)(`cdkConnectedOverlayPositions`,n._positions)(`cdkConnectedOverlayWidth`,n._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,n._popoverLocation)}},dependencies:[_e$2,lt$1],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return r})();var Ds$1=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=nr$2({type:r});static ɵinj=en$4({imports:[Lt$1,Vt,fG,Ne$1,Vi$1,Vt]})}return r})();var d=Object.create(null);d.open=`0`;d.close=`1`;d.ping=`2`;d.pong=`3`;d.message=`4`;d.upgrade=`5`;d.noop=`6`;var B=Object.create(null);Object.keys(d).forEach(r=>{B[d[r]]=r});var L$1={type:`error`,data:`parser error`};var Le$1=typeof Blob==`function`||typeof Blob<`u`&&Object.prototype.toString.call(Blob)===`[object BlobConstructor]`;var Ie=typeof ArrayBuffer==`function`;var Pe=r=>typeof ArrayBuffer.isView==`function`?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer;var I=({type:r,data:e},t,n)=>Le$1&&e instanceof Blob?t?n(e):Ne(e,n):Ie&&(e instanceof ArrayBuffer||Pe(e))?t?n(e):Ne(new Blob([e]),n):n(d[r]+(e||``));var Ne=(r,e)=>{let t=new FileReader;return t.onload=function(){let n=t.result.split(`,`)[1];e(`b`+(n||``))},t.readAsDataURL(r)};function Be(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}var ie;function De(r,e){if(Le$1&&r.data instanceof Blob)return r.data.arrayBuffer().then(Be).then(e);if(Ie&&(r.data instanceof ArrayBuffer||Pe(r.data)))return e(Be(r.data));I(r,!1,t=>{ie||(ie=new TextEncoder),e(ie.encode(t))})}var qe=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;var P=typeof Uint8Array>`u`?[]:new Uint8Array(256);for(let r=0;r<qe.length;r++)P[qe.charCodeAt(r)]=r;var Me=r=>{let e=r.length*.75,t=r.length,n,s=0,i,o,c,h;r[r.length-1]===`=`&&(e--,r[r.length-2]===`=`&&e--);let m=new ArrayBuffer(e),p=new Uint8Array(m);for(n=0;n<t;n+=4)i=P[r.charCodeAt(n)],o=P[r.charCodeAt(n+1)],c=P[r.charCodeAt(n+2)],h=P[r.charCodeAt(n+3)],p[s++]=i<<2|o>>4,p[s++]=(o&15)<<4|c>>2,p[s++]=(c&3)<<6|h&63;return m};var lt=typeof ArrayBuffer==`function`;var D=(r,e)=>{if(typeof r!=`string`)return{type:`message`,data:Fe$1(r,e)};let t=r.charAt(0);return t===`b`?{type:`message`,data:pt$1(r.substring(1),e)}:B[t]?r.length>1?{type:B[t],data:r.substring(1)}:{type:B[t]}:L$1};var pt$1=(r,e)=>{if(lt)return Fe$1(Me(r),e);else return{base64:!0,data:r}};var Fe$1=(r,e)=>e===`blob`?r instanceof Blob?r:new Blob([r]):r instanceof ArrayBuffer?r:r.buffer;var Ve=``;var Ue=(r,e)=>{let t=r.length,n=new Array(t),s=0;r.forEach((i,o)=>{I(i,!1,c=>{n[o]=c,++s===t&&e(n.join(Ve))})})};var He$1=(r,e)=>{let t=r.split(Ve),n=[];for(let s=0;s<t.length;s++){let i=D(t[s],e);if(n.push(i),i.type===`error`)break}return n};function Ke(){return new TransformStream({transform(r,e){De(r,t=>{let n=t.length,s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);let i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{s=new Uint8Array(9);let i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}r.data&&typeof r.data!=`string`&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}var oe;function Y(r){return r.reduce((e,t)=>e+t.length,0)}function $(r,e){if(r[0].length===e)return r.shift();let t=new Uint8Array(e),n=0;for(let s=0;s<e;s++)t[s]=r[0][n++],n===r[0].length&&(r.shift(),n=0);return r.length&&n<r[0].length&&(r[0]=r[0].slice(n)),t}function We(r,e){oe||(oe=new TextDecoder);let t=[],n=0,s=-1,i=!1;return new TransformStream({transform(o,c){for(t.push(o);;){if(n===0){if(Y(t)<1)break;let h=$(t,1);i=(h[0]&128)===128,s=h[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(Y(t)<2)break;let h=$(t,2);s=new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),n=3}else if(n===2){if(Y(t)<8)break;let h=$(t,8),m=new DataView(h.buffer,h.byteOffset,h.length),p=m.getUint32(0);if(p>Math.pow(2,21)-1){c.enqueue(L$1);break}s=p*Math.pow(2,32)+m.getUint32(4),n=3}else{if(Y(t)<s)break;let h=$(t,s);c.enqueue(D(i?h:oe.decode(h),e)),n=0}if(s===0||s>r){c.enqueue(L$1);break}}}})}var ae=4;function u(r){if(r)return dt(r)}function dt(r){for(var e in u.prototype)r[e]=u.prototype[e];return r}u.prototype.on=u.prototype.addEventListener=function(r,e){return this._callbacks=this._callbacks||{},(this._callbacks[`$`+r]=this._callbacks[`$`+r]||[]).push(e),this};u.prototype.once=function(r,e){function t(){this.off(r,t),e.apply(this,arguments)}return t.fn=e,this.on(r,t),this};u.prototype.off=u.prototype.removeListener=u.prototype.removeAllListeners=u.prototype.removeEventListener=function(r,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks[`$`+r];if(!t)return this;if(arguments.length==1)return delete this._callbacks[`$`+r],this;for(var n,s=0;s<t.length;s++)if(n=t[s],n===e||n.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks[`$`+r],this};u.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks[`$`+r],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,s=t.length;n<s;++n)t[n].apply(this,e)}return this};u.prototype.emitReserved=u.prototype.emit;u.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks[`$`+r]||[]};u.prototype.hasListeners=function(r){return!!this.listeners(r).length};var g=typeof Promise==`function`&&typeof Promise.resolve==`function`?e=>Promise.resolve().then(e):(e,t)=>t(e,0);var f=typeof self<`u`?self:typeof window<`u`?window:Function(`return this`)();var Ye=`arraybuffer`;function z$1(r,...e){return e.reduce((t,n)=>(r.hasOwnProperty(n)&&(t[n]=r[n]),t),{})}var mt=f.setTimeout;var yt=f.clearTimeout;function _(r,e){e.useNativeTimers?(r.setTimeoutFn=mt.bind(f),r.clearTimeoutFn=yt.bind(f)):(r.setTimeoutFn=f.setTimeout.bind(f),r.clearTimeoutFn=f.clearTimeout.bind(f))}var gt$1=1.33;function $e(r){return typeof r==`string`?_t$1(r):Math.ceil((r.byteLength||r.size)*gt$1)}function _t$1(r){let e=0,t=0;for(let n=0,s=r.length;n<s;n++)e=r.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function J$1(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function ze(r){let e=``;for(let t in r)r.hasOwnProperty(t)&&(e.length&&(e+=`&`),e+=encodeURIComponent(t)+`=`+encodeURIComponent(r[t]));return e}function Je$1(r){let e={},t=r.split(`&`);for(let n=0,s=t.length;n<s;n++){let i=t[n].split(`=`);e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}var X=class extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type=`TransportError`}};var b=class extends u{constructor(e){super(),this.writable=!1,_(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved(`error`,new X(e,t,n)),this}open(){return this.readyState=`opening`,this.doOpen(),this}close(){return(this.readyState===`opening`||this.readyState===`open`)&&(this.doClose(),this.onClose()),this}send(e){this.readyState===`open`&&this.write(e)}onOpen(){this.readyState=`open`,this.writable=!0,super.emitReserved(`open`)}onData(e){let t=D(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved(`packet`,e)}onClose(e){this.readyState=`closed`,super.emitReserved(`close`,e)}pause(e){}createUri(e,t={}){return e+`://`+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){let e=this.opts.hostname;return e.indexOf(`:`)===-1?e:`[`+e+`]`}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?`:`+this.opts.port:``}_query(e){let t=ze(e);return t.length?`?`+t:``}};var q=class extends b{constructor(){super(...arguments),this._polling=!1}get name(){return`polling`}doOpen(){this._poll()}pause(e){this.readyState=`pausing`;let t=()=>{this.readyState=`paused`,e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once(`pollComplete`,function(){--n||t()})),this.writable||(n++,this.once(`drain`,function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved(`poll`)}onData(e){let t=n=>{if(this.readyState===`opening`&&n.type===`open`&&this.onOpen(),n.type===`close`)return this.onClose({description:`transport closed by the server`}),!1;this.onPacket(n)};He$1(e,this.socket.binaryType).forEach(t),this.readyState!==`closed`&&(this._polling=!1,this.emitReserved(`pollComplete`),this.readyState===`open`&&this._poll())}doClose(){let e=()=>{this.write([{type:`close`}])};this.readyState===`open`?e():this.once(`open`,e)}write(e){this.writable=!1,Ue(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved(`drain`)})})}uri(){let e=this.opts.secure?`https`:`http`,t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=J$1()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}};var Xe=!1;try{Xe=typeof XMLHttpRequest<`u`&&`withCredentials`in new XMLHttpRequest}catch{}var je=Xe;function bt$1(){}var ce=class extends q{constructor(e){if(super(e),typeof location<`u`){let t=location.protocol===`https:`,n=location.port;n||(n=t?`443`:`80`),this.xd=typeof location<`u`&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){let n=this.request({method:`POST`,data:e});n.on(`success`,t),n.on(`error`,(s,i)=>{this.onError(`xhr post error`,s,i)})}doPoll(){let e=this.request();e.on(`data`,this.onData.bind(this)),e.on(`error`,(t,n)=>{this.onError(`xhr poll error`,t,n)}),this.pollXhr=e}};var j=(()=>{class r extends u{constructor(t,n,s){super(),this.createRequest=t,_(this,s),this._opts=s,this._method=s.method||`GET`,this._uri=n,this._data=s.data!==void 0?s.data:null,this._create()}_create(){var t;let n=z$1(this._opts,`agent`,`pfx`,`key`,`passphrase`,`cert`,`ca`,`ciphers`,`rejectUnauthorized`,`autoUnref`);n.xdomain=!!this._opts.xd;let s=this._xhr=this.createRequest(n);try{s.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&s.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method===`POST`)try{s.setRequestHeader(`Content-type`,`text/plain;charset=UTF-8`)}catch{}try{s.setRequestHeader(`Accept`,`*/*`)}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(s),`withCredentials`in s&&(s.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(s.timeout=this._opts.requestTimeout),s.onreadystatechange=()=>{var i;s.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(s.getResponseHeader(`set-cookie`))),s.readyState===4&&(s.status===200||s.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof s.status==`number`?s.status:0)},0))},s.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<`u`&&(this._index=r.requestsCount++,r.requests[this._index]=this)}_onError(t){this.emitReserved(`error`,t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>`u`||this._xhr===null)){if(this._xhr.onreadystatechange=bt$1,t)try{this._xhr.abort()}catch{}typeof document<`u`&&delete r.requests[this._index],this._xhr=null}}_onLoad(){let t=this._xhr.responseText;t!==null&&(this.emitReserved(`data`,t),this.emitReserved(`success`),this._cleanup())}abort(){this._cleanup()}}return r.requestsCount=0,r.requests={},r})();if(typeof document<`u`){if(typeof attachEvent==`function`)attachEvent(`onunload`,Qe);else if(typeof addEventListener==`function`){let r=`onpagehide`in f?`pagehide`:`unload`;addEventListener(r,Qe,!1)}}function Qe(){for(let r in j.requests)j.requests.hasOwnProperty(r)&&j.requests[r].abort()}var vt=(function(){let r=Ge({xdomain:!1});return r&&r.responseType!==null})();var w=class extends ce{constructor(e){super(e);let t=e&&e.forceBase64;this.supportsBinary=vt&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new j(Ge,this.uri(),e)}};function Ge(r){let e=r.xdomain;try{if(typeof XMLHttpRequest<`u`&&(!e||je))return new XMLHttpRequest}catch{}if(!e)try{return new f[[`Active`].concat(`Object`).join(`X`)](`Microsoft.XMLHTTP`)}catch{}}var Ze$1=typeof navigator<`u`&&typeof navigator.product==`string`&&navigator.product.toLowerCase()===`reactnative`;var ue=class extends b{get name(){return`websocket`}doOpen(){let e=this.uri(),t=this.opts.protocols,n=Ze$1?{}:z$1(this.opts,`agent`,`perMessageDeflate`,`pfx`,`key`,`passphrase`,`cert`,`ca`,`ciphers`,`rejectUnauthorized`,`localAddress`,`protocolVersion`,`origin`,`maxPayload`,`family`,`checkServerIdentity`);this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(s){return this.emitReserved(`error`,s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:`websocket connection closed`,context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError(`websocket error`,e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let n=e[t],s=t===e.length-1;I(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}s&&g(()=>{this.writable=!0,this.emitReserved(`drain`)},this.setTimeoutFn)})}}doClose(){typeof this.ws<`u`&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){let e=this.opts.secure?`wss`:`ws`,t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=J$1()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}};var he=f.WebSocket||f.MozWebSocket;var E=class extends ue{createSocket(e,t,n){return Ze$1?new he(e,t,n):t?new he(e,t):new he(e)}doWrite(e,t){this.ws.send(t)}};var S=class extends b{get name(){return`webtransport`}doOpen(){try{this._transport=new WebTransport(this.createUri(`https`),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved(`error`,e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError(`webtransport error`,e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{let t=We(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),s=Ke();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();let i=()=>{n.read().then(({done:c,value:h})=>{c||(this.onPacket(h),i())}).catch(c=>{})};i();let o={type:`open`};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let n=e[t],s=t===e.length-1;this._writer.write(n).then(()=>{s&&g(()=>{this.writable=!0,this.emitReserved(`drain`)},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}};var fe={websocket:E,webtransport:S,polling:w};var wt=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var Et$1=[`source`,`protocol`,`authority`,`userInfo`,`user`,`password`,`host`,`port`,`relative`,`path`,`directory`,`file`,`query`,`anchor`];function A$1(r){if(r.length>8e3)throw`URI too long`;let e=r,t=r.indexOf(`[`),n=r.indexOf(`]`);t!=-1&&n!=-1&&(r=r.substring(0,t)+r.substring(t,n).replace(/:/g,`;`)+r.substring(n,r.length));let s=wt.exec(r||``),i={},o=14;for(;o--;)i[Et$1[o]]=s[o]||``;return t!=-1&&n!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,`:`),i.authority=i.authority.replace(`[`,``).replace(`]`,``).replace(/;/g,`:`),i.ipv6uri=!0),i.pathNames=Tt$1(i,i.path),i.queryKey=kt$1(i,i.query),i}function Tt$1(r,e){let n=e.replace(/\/{2,9}/g,`/`).split(`/`);return(e.slice(0,1)==`/`||e.length===0)&&n.splice(0,1),e.slice(-1)==`/`&&n.splice(n.length-1,1),n}function kt$1(r,e){let t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,i){s&&(t[s]=i)}),t}var le=typeof addEventListener==`function`&&typeof removeEventListener==`function`;var Q=[];le&&addEventListener(`offline`,()=>{Q.forEach(r=>r())},!1);var G=(()=>{class r extends u{constructor(t,n){if(super(),this.binaryType=Ye,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=Infinity,t&&typeof t==`object`&&(n=t,t=null),t){let s=A$1(t);n.hostname=s.host,n.secure=s.protocol===`https`||s.protocol===`wss`,n.port=s.port,s.query&&(n.query=s.query)}else n.host&&(n.hostname=A$1(n.host).host);_(this,n),this.secure=n.secure!=null?n.secure:typeof location<`u`&&location.protocol===`https:`,n.hostname&&!n.port&&(n.port=this.secure?`443`:`80`),this.hostname=n.hostname||(typeof location<`u`?location.hostname:`localhost`),this.port=n.port||(typeof location<`u`&&location.port?location.port:this.secure?`443`:`80`),this.transports=[],this._transportsByName={},n.transports.forEach(s=>{let i=s.prototype.name;this.transports.push(i),this._transportsByName[i]=s}),this.opts=Object.assign({path:`/engine.io`,agent:!1,withCredentials:!1,upgrade:!0,timestampParam:`t`,rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,``)+(this.opts.addTrailingSlash?`/`:``),typeof this.opts.query==`string`&&(this.opts.query=Je$1(this.opts.query)),le&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener(`beforeunload`,this._beforeunloadEventListener,!1)),this.hostname!==`localhost`&&(this._offlineEventListener=()=>{this._onClose(`transport close`,{description:`network connection lost`})},Q.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){let n=Object.assign({},this.opts.query);n.EIO=ae,n.transport=t,this.id&&(n.sid=this.id);let s=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](s)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved(`error`,`No transports available`)},0);return}let t=this.opts.rememberUpgrade&&r.priorWebsocketSuccess&&this.transports.indexOf(`websocket`)!==-1?`websocket`:this.transports[0];this.readyState=`opening`;let n=this.createTransport(t);n.open(),this.setTransport(n)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on(`drain`,this._onDrain.bind(this)).on(`packet`,this._onPacket.bind(this)).on(`error`,this._onError.bind(this)).on(`close`,n=>this._onClose(`transport close`,n))}onOpen(){this.readyState=`open`,r.priorWebsocketSuccess=this.transport.name===`websocket`,this.emitReserved(`open`),this.flush()}_onPacket(t){if(this.readyState===`opening`||this.readyState===`open`||this.readyState===`closing`)switch(this.emitReserved(`packet`,t),this.emitReserved(`heartbeat`),t.type){case`open`:this.onHandshake(JSON.parse(t.data));break;case`ping`:this._sendPacket(`pong`),this.emitReserved(`ping`),this.emitReserved(`pong`),this._resetPingTimeout();break;case`error`:let n=new Error(`server error`);n.code=t.data,this._onError(n);break;case`message`:this.emitReserved(`data`,t.data),this.emitReserved(`message`,t.data);break}}onHandshake(t){this.emitReserved(`handshake`,t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!==`closed`&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);let t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose(`ping timeout`)},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved(`drain`):this.flush()}flush(){if(this.readyState!==`closed`&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved(`flush`)}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name===`polling`&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let s=0;s<this.writeBuffer.length;s++){let i=this.writeBuffer[s].data;if(i&&(n+=$e(i)),s>0&&n>this._maxPayload)return this.writeBuffer.slice(0,s);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;let t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,g(()=>{this._onClose(`ping timeout`)},this.setTimeoutFn)),t}write(t,n,s){return this._sendPacket(`message`,t,n,s),this}send(t,n,s){return this._sendPacket(`message`,t,n,s),this}_sendPacket(t,n,s,i){if(typeof n==`function`&&(i=n,n=void 0),typeof s==`function`&&(i=s,s=null),this.readyState===`closing`||this.readyState===`closed`)return;s=s||{},s.compress=s.compress!==!1;let o={type:t,data:n,options:s};this.emitReserved(`packetCreate`,o),this.writeBuffer.push(o),i&&this.once(`flush`,i),this.flush()}close(){let t=()=>{this._onClose(`forced close`),this.transport.close()},n=()=>{this.off(`upgrade`,n),this.off(`upgradeError`,n),t()},s=()=>{this.once(`upgrade`,n),this.once(`upgradeError`,n)};return(this.readyState===`opening`||this.readyState===`open`)&&(this.readyState=`closing`,this.writeBuffer.length?this.once(`drain`,()=>{this.upgrading?s():t()}):this.upgrading?s():t()),this}_onError(t){if(r.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState===`opening`)return this.transports.shift(),this._open();this.emitReserved(`error`,t),this._onClose(`transport error`,t)}_onClose(t,n){if(this.readyState===`opening`||this.readyState===`open`||this.readyState===`closing`){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners(`close`),this.transport.close(),this.transport.removeAllListeners(),le&&(this._beforeunloadEventListener&&removeEventListener(`beforeunload`,this._beforeunloadEventListener,!1),this._offlineEventListener)){let s=Q.indexOf(this._offlineEventListener);s!==-1&&Q.splice(s,1)}this.readyState=`closed`,this.id=null,this.emitReserved(`close`,t,n),this.writeBuffer=[],this._prevBufferLen=0}}}return r.protocol=ae,r})();var Z$2=class extends G{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState===`open`&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;G.priorWebsocketSuccess=!1;let s=()=>{n||(t.send([{type:`ping`,data:`probe`}]),t.once(`packet`,v=>{if(!n)if(v.type===`pong`&&v.data===`probe`){if(this.upgrading=!0,this.emitReserved(`upgrading`,t),!t)return;G.priorWebsocketSuccess=t.name===`websocket`,this.transport.pause(()=>{n||this.readyState!==`closed`&&(p(),this.setTransport(t),t.send([{type:`upgrade`}]),this.emitReserved(`upgrade`,t),t=null,this.upgrading=!1,this.flush())})}else{let N=new Error(`probe error`);N.transport=t.name,this.emitReserved(`upgradeError`,N)}}))};function i(){n||(n=!0,p(),t.close(),t=null)}let o=v=>{let N=new Error(`probe error: `+v);N.transport=t.name,i(),this.emitReserved(`upgradeError`,N)};function c(){o(`transport closed`)}function h(){o(`socket closed`)}function m(v){t&&v.name!==t.name&&i()}let p=()=>{t.removeListener(`open`,s),t.removeListener(`error`,o),t.removeListener(`close`,c),this.off(`close`,h),this.off(`upgrading`,m)};t.once(`open`,s),t.once(`error`,o),t.once(`close`,c),this.once(`close`,h),this.once(`upgrading`,m),this._upgrades.indexOf(`webtransport`)!==-1&&e!==`webtransport`?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){let t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};var R=class extends Z$2{constructor(e,t={}){let n=typeof e==`object`,s=n?m$2({},e):m$2({},t);(!s.transports||s.transports&&typeof s.transports[0]==`string`)&&(s.transports=(s.transports||[`polling`,`websocket`,`webtransport`]).map(i=>fe[i]).filter(i=>!!i)),super(n?s:e,s)}};R.protocol;function et$1(r,e=``,t){let n=r;t=t||typeof location<`u`&&location,r??=t.protocol+`//`+t.host,typeof r==`string`&&(r.charAt(0)===`/`&&(r.charAt(1)===`/`?r=t.protocol+r:r=t.host+r),/^(https?|wss?):\/\//.test(r)||(typeof t<`u`?r=t.protocol+`//`+r:r=`https://`+r),n=A$1(r)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port=`80`:/^(http|ws)s$/.test(n.protocol)&&(n.port=`443`)),n.path=n.path||`/`;let i=n.host.indexOf(`:`)!==-1?`[`+n.host+`]`:n.host;return n.id=n.protocol+`://`+i+`:`+n.port+e,n.href=n.protocol+`://`+i+(t&&t.port===n.port?``:`:`+n.port),n}var ge$1={};AN(ge$1,{Decoder:()=>me,Encoder:()=>de$1,PacketType:()=>a,isPacketValid:()=>Lt,protocol:()=>it});var St=typeof ArrayBuffer==`function`;var At$1=r=>typeof ArrayBuffer.isView==`function`?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer;var tt$1=Object.prototype.toString;var Rt=typeof Blob==`function`||typeof Blob<`u`&&tt$1.call(Blob)===`[object BlobConstructor]`;var Ct$1=typeof File==`function`||typeof File<`u`&&tt$1.call(File)===`[object FileConstructor]`;function F(r){return St&&(r instanceof ArrayBuffer||At$1(r))||Rt&&r instanceof Blob||Ct$1&&r instanceof File}function M$1(r,e){if(!r||typeof r!=`object`)return!1;if(Array.isArray(r)){for(let t=0,n=r.length;t<n;t++)if(M$1(r[t]))return!0;return!1}if(F(r))return!0;if(r.toJSON&&typeof r.toJSON==`function`&&arguments.length===1)return M$1(r.toJSON(),!0);for(let t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&M$1(r[t]))return!0;return!1}function rt(r){let e=[],t=r.data,n=r;return n.data=ee(t,e),n.attachments=e.length,{packet:n,buffers:e}}function ee(r,e,t){if(!r)return r;if(F(r)){let n={_placeholder:!0,num:e.length};return e.push(r),n}else if(Array.isArray(r)){let n=new Array(r.length);for(let s=0;s<r.length;s++)n[s]=ee(r[s],e);return n}else if(typeof r==`object`&&!(r instanceof Date)){if(r.toJSON&&typeof r.toJSON==`function`&&!t)return ee(r.toJSON(),e,!0);let n={};for(let s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=ee(r[s],e));return n}return r}function nt(r,e){return r.data=pe(r.data,e),delete r.attachments,r}function pe(r,e){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num==`number`&&r.num>=0&&r.num<e.length)return e[r.num];throw new Error(`illegal attachments`)}else if(Array.isArray(r))for(let t=0;t<r.length;t++)r[t]=pe(r[t],e);else if(typeof r==`object`)for(let t in r)Object.prototype.hasOwnProperty.call(r,t)&&(r[t]=pe(r[t],e));return r}var st=[`connect`,`connect_error`,`disconnect`,`disconnecting`,`newListener`,`removeListener`];var it=5;var a=(function(r){return r[r.CONNECT=0]=`CONNECT`,r[r.DISCONNECT=1]=`DISCONNECT`,r[r.EVENT=2]=`EVENT`,r[r.ACK=3]=`ACK`,r[r.CONNECT_ERROR=4]=`CONNECT_ERROR`,r[r.BINARY_EVENT=5]=`BINARY_EVENT`,r[r.BINARY_ACK=6]=`BINARY_ACK`,r})(a||{});var de$1=class{constructor(e){this.replacer=e}encode(e){return(e.type===a.EVENT||e.type===a.ACK)&&M$1(e)?this.encodeAsBinary({type:e.type===a.EVENT?a.BINARY_EVENT:a.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=``+e.type;return(e.type===a.BINARY_EVENT||e.type===a.BINARY_ACK)&&(t+=e.attachments+`-`),e.nsp&&e.nsp!==`/`&&(t+=e.nsp+`,`),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){let t=rt(e),n=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(n),s}};var me=class r extends u{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e==`function`?{reviver:e}:e)}add(e){let t;if(typeof e==`string`){if(this.reconstructor)throw new Error(`got plaintext data when reconstructing a packet`);t=this.decodeString(e);let n=t.type===a.BINARY_EVENT;n||t.type===a.BINARY_ACK?(t.type=n?a.EVENT:a.ACK,this.reconstructor=new ye(t)):super.emitReserved(`decoded`,t)}else if(F(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved(`decoded`,t));else throw new Error(`got binary data when not reconstructing a packet`);else throw new Error(`Unknown type: `+e)}decodeString(e){let t=0,n={type:Number(e.charAt(0))};if(a[n.type]===void 0)throw new Error(`unknown packet type `+n.type);if(n.type===a.BINARY_EVENT||n.type===a.BINARY_ACK){let i=t+1;for(;e.charAt(++t)!==`-`&&t!=e.length;);let o=e.substring(i,t);if(o!=Number(o)||e.charAt(t)!==`-`)throw new Error(`Illegal attachments`);let c=Number(o);if(!ot(c)||c<1)throw new Error(`Illegal attachments`);if(c>this.opts.maxAttachments)throw new Error(`too many attachments`);n.attachments=c}if(e.charAt(t+1)===`/`){let i=t+1;for(;++t&&!(e.charAt(t)===`,`||t===e.length););n.nsp=e.substring(i,t)}else n.nsp=`/`;let s=e.charAt(t+1);if(s!==``&&Number(s)==s){let i=t+1;for(;++t;){let o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(i,t+1))}if(e.charAt(++t)){let i=this.tryParse(e.substr(t));if(r.isPayloadValid(n.type,i))n.data=i;else throw new Error(`invalid payload`)}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case a.CONNECT:return te(t);case a.DISCONNECT:return t===void 0;case a.CONNECT_ERROR:return typeof t==`string`||te(t);case a.EVENT:case a.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]==`number`||typeof t[0]==`string`&&st.indexOf(t[0])===-1);case a.ACK:case a.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}};var ye=class{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){let t=nt(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function Ot$1(r){return typeof r==`string`}var ot=Number.isInteger||function(r){return typeof r==`number`&&isFinite(r)&&Math.floor(r)===r};function Nt$1(r){return r===void 0||ot(r)}function te(r){return Object.prototype.toString.call(r)===`[object Object]`}function Bt(r,e){switch(r){case a.CONNECT:return e===void 0||te(e);case a.DISCONNECT:return e===void 0;case a.EVENT:return Array.isArray(e)&&(typeof e[0]==`number`||typeof e[0]==`string`&&st.indexOf(e[0])===-1);case a.ACK:return Array.isArray(e);case a.CONNECT_ERROR:return typeof e==`string`||te(e);default:return!1}}function Lt(r){return Ot$1(r.nsp)&&Nt$1(r.id)&&Bt(r.type,r.data)}function l(r,e,t){return r.on(e,t),function(){r.off(e,t)}}var It$1=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});var C=class extends u{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let e=this.io;this.subs=[l(e,`open`,this.onopen.bind(this)),l(e,`packet`,this.onpacket.bind(this)),l(e,`error`,this.onerror.bind(this)),l(e,`close`,this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState===`open`&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift(`message`),this.emit.apply(this,e),this}emit(e,...t){var n,s,i;if(It$1.hasOwnProperty(e))throw new Error(`"`+e.toString()+`" is a reserved event name`);if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;let o={type:a.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]==`function`){let p=this.ids++,v=t.pop();this._registerAckCallback(p,v),o.id=p}let c=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,h=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!c||(h?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var n;let s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}let i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);t.call(this,new Error(`operation has timed out`))},s),o=(...c)=>{this.io.clearTimeoutFn(i),t.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((n,s)=>{let i=(o,c)=>o?s(o):n(c);i.withError=!0,t.push(i),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]==`function`&&(t=e.pop());let n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...i)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;let t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth==`function`?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:a.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved(`connect_error`,e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved(`disconnect`,e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){let n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error(`socket has been disconnected`))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case a.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved(`connect_error`,new Error(`It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)`));break;case a.EVENT:case a.BINARY_EVENT:this.onevent(e);break;case a.ACK:case a.BINARY_ACK:this.onack(e);break;case a.DISCONNECT:this.ondisconnect();break;case a.CONNECT_ERROR:this.destroy();let n=new Error(e.data.message);n.data=e.data.data,this.emitReserved(`connect_error`,n);break}}onevent(e){let t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){let t=this._anyListeners.slice();for(let n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]==`string`&&(this._lastOffset=e[e.length-1])}ack(e){let t=this,n=!1;return function(...s){n||(n=!0,t.packet({type:a.ACK,id:e,data:s}))}}onack(e){let t=this.acks[e.id];typeof t==`function`&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved(`connect`)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose(`io server disconnect`)}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:a.DISCONNECT}),this.destroy(),this.connected&&this.onclose(`io client disconnect`),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){let t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){let t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let t=this._anyOutgoingListeners.slice();for(let n of t)n.apply(this,e.data)}}};function T(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}T.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*r);r=(Math.floor(e*10)&1)==0?r-t:r+t}return Math.min(r,this.max)|0};T.prototype.reset=function(){this.attempts=0};T.prototype.setMin=function(r){this.ms=r};T.prototype.setMax=function(r){this.max=r};T.prototype.setJitter=function(r){this.jitter=r};var O=class extends u{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e==`object`&&(t=e,e=void 0),t=t||{},t.path=t.path||`/socket.io`,this.opts=t,_(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||Infinity),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new T({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState=`closed`,this.uri=e;let s=t.parser||ge$1;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf(`open`))return this;this.engine=new R(this.uri,this.opts);let t=this.engine,n=this;this._readyState=`opening`,this.skipReconnect=!1;let s=l(t,`open`,function(){n.onopen(),e&&e()}),i=c=>{this.cleanup(),this._readyState=`closed`,this.emitReserved(`error`,c),e?e(c):this.maybeReconnectOnOpen()},o=l(t,`error`,i);if(this._timeout!==!1){let c=this._timeout,h=this.setTimeoutFn(()=>{s(),i(new Error(`timeout`)),t.close()},c);this.opts.autoUnref&&h.unref(),this.subs.push(()=>{this.clearTimeoutFn(h)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState=`open`,this.emitReserved(`open`);let e=this.engine;this.subs.push(l(e,`ping`,this.onping.bind(this)),l(e,`data`,this.ondata.bind(this)),l(e,`error`,this.onerror.bind(this)),l(e,`close`,this.onclose.bind(this)),l(this.decoder,`decoded`,this.ondecoded.bind(this)))}onping(){this.emitReserved(`ping`)}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose(`parse error`,t)}}ondecoded(e){g(()=>{this.emitReserved(`packet`,e)},this.setTimeoutFn)}onerror(e){this.emitReserved(`error`,e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new C(this,e,t),this.nsps[e]=n),n}_destroy(e){let t=Object.keys(this.nsps);for(let n of t)if(this.nsps[n].active)return;this._close()}_packet(e){let t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose(`forced close`)}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState=`closed`,this.emitReserved(`close`,e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved(`reconnect_failed`),this._reconnecting=!1;else{let t=this.backoff.duration();this._reconnecting=!0;let n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved(`reconnect_attempt`,e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved(`reconnect_error`,s)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){let e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved(`reconnect`,e)}};var V={};function U(r,e){typeof r==`object`&&(e=r,r=void 0),e=e||{};let t=et$1(r,e.path||`/socket.io`),n=t.source,s=t.id,i=t.path,o=V[s]&&i in V[s].nsps,c=e.forceNew||e[`force new connection`]||e.multiplex===!1||o,h;return c?h=new O(n,e):(V[s]||(V[s]=new O(n,e)),h=V[s]),t.query&&!e.query&&(e.query=t.queryKey),h.socket(t.path,e)}Object.assign(U,{Manager:O,Socket:C,io:U,connect:U});var H={inverterTelemetry:`telemetry:inverter`,batteryTelemetry:`telemetry:battery`,meterTelemetry:`telemetry:meter`,alertCreated:`alert:new`};var at={joinSite:`site:join`,leaveSite:`site:leave`};var ct=3e4;var Dt$1=5e3;var qt=50;var ht$1=class r{auth=p(MD);status=V$3(`disconnected`);activeSiteId=V$3(null);inverters=V$3({});batteries=V$3({});meter=V$3(null);alerts=V$3([]);lastMessageAt=V$3(null);nowTicker=V$3(Date.now());isLive=Et$5(()=>{let e=this.lastMessageAt();return e!==null&&this.nowTicker()-e<ct});socket=null;watchdogId=null;constructor(){ll(()=>{let e=this.auth.accessToken(),t=this.activeSiteId();e&&t?this.openSocketIfNeeded(e):e||this.teardown()})}selectSite(e){this.activeSiteId.set(e),this.socket&&this.socket.connected&&this.joinRoom(e)}inverter(e){return this.inverters()[e]}battery(e){return this.batteries()[e]}disconnectAll(){this.teardown()}openSocketIfNeeded(e){if(this.socket)return;let t=U(kc.socketUrl,{auth:{token:e},transports:[`websocket`,`polling`],reconnection:!0,reconnectionAttempts:Infinity,reconnectionDelay:3e3,reconnectionDelayMax:3e4,randomizationFactor:.5});this.socket=t,t.on(`connect`,()=>{this.status.set(`connected`),this.startWatchdog();let n=this.activeSiteId();n&&this.joinRoom(n)}),t.on(`disconnect`,()=>{this.status.set(`disconnected`),this.lastMessageAt.set(null)}),t.io.on(`reconnect_attempt`,()=>this.status.set(`connecting`)),t.io.on(`reconnect_failed`,()=>this.status.set(`error`)),t.on(H.inverterTelemetry,n=>{this.inverters.update(s=>P$2(m$2({},s),{[n.inverterId]:n})),this.touch()}),t.on(H.batteryTelemetry,n=>{this.batteries.update(s=>P$2(m$2({},s),{[n.batteryId]:n})),this.touch()}),t.on(H.meterTelemetry,n=>{this.meter.set(n),this.touch()}),t.on(H.alertCreated,n=>{this.alerts.update(s=>[n,...s].slice(0,qt)),this.touch()})}joinRoom(e){let t=this.socket;t&&t.emit(at.joinSite,e,n=>{n&&!n.ok&&this.status.set(`error`)})}touch(){this.lastMessageAt.set(Date.now()),this.nowTicker.set(Date.now())}startWatchdog(){this.watchdogId||(this.watchdogId=setInterval(()=>{this.nowTicker.set(Date.now());let e=this.lastMessageAt();this.status()===`connected`&&e!==null&&Date.now()-e>=ct&&this.status.set(`stale`)},Dt$1))}teardown(){this.watchdogId&&(clearInterval(this.watchdogId),this.watchdogId=null),this.socket?.removeAllListeners(),this.socket?.disconnect(),this.socket=null,this.status.set(`disconnected`),this.lastMessageAt.set(null),this.inverters.set({}),this.batteries.set({}),this.meter.set(null),this.alerts.set([])}static ɵfac=function(t){return new(t||r)};static ɵprov=_$2({token:r,factory:r.ɵfac,providedIn:`root`})};function Un(r,e=Date.now()){return r?e-new Date(r).getTime()>3e4:!0}var k=r=>new Intl.NumberFormat(`en-US`,{maximumFractionDigits:r,minimumFractionDigits:0});function Hn(r){return`${k(2).format(r)} kW`}function Kn(r){return`${k(1).format(r)} kWh`}function Wn(r){return`${k(1).format(r)} V`}function Yn(r){return`${k(1).format(r)} A`}function $n(r){return`${k(2).format(r)} Hz`}function zn(r){return`${k(0).format(r)}%`}function Jn(r){return`${k(1).format(r)} \xB0C`}function Mt$1(r){return r?new Date(r).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}):`—`}function Ft(r){return new Date(r).toLocaleDateString([],{month:`short`,day:`numeric`,year:`numeric`})}function Xn(r){return`${Ft(r)} \xB7 ${Mt$1(r)}`}var jn={production:`Producing`,standby:`Standby`,offline:`Offline`,charging:`Charging`,fault:`Fault`};var Qn={idle:`Idle`,charging:`Charging`,discharging:`Discharging`};var Gn={good:`Good`,fair:`Fair`,poor:`Poor`};var Zn={critical:`Critical`,warning:`Warning`,info:`Info`};var es={critical:`bad`,warning:`warn`,info:`ok`};function ts(r){switch(r){case`fault`:return`bad`;case`offline`:return`warn`;case`production`:case`charging`:return`ok`;case`standby`:return`idle`}}function rs(r){return r.health===`poor`||r.telemetry&&r.telemetry.temperatureC>45?`bad`:r.status===`discharging`||r.health===`fair`?`warn`:`ok`}function ns(r,e=20){return r<=0?`bad`:r<e?`warn`:`ok`}var ss={healthy:`Healthy`,degraded:`Degraded`,fault:`Fault`};var is={healthy:`ok`,degraded:`warn`,fault:`bad`};var _e$1={ok:`var(--sw-ok)`,warn:`var(--sw-warn)`,bad:`var(--sw-danger)`,idle:`var(--sw-muted)`};var ut$1=class r{tone=Ga$1.required();label=Ga$1.required();text=Ga$1.required();TONE_COLOR=_e$1;dotColor=()=>_e$1[this.tone()];static ɵfac=function(t){return new(t||r)};static ɵcmp=Vd({type:r,selectors:[[`sw-status-dot`]],inputs:{tone:[1,`tone`],label:[1,`label`],text:[1,`text`]},decls:4,vars:7,consts:[[`role`,`status`,1,`inline-flex`,`items-center`,`gap-1.5`],[`aria-hidden`,`true`,1,`inline-block`,`h-2.5`,`w-2.5`,`rounded-full`],[1,`text-sm`,`font-medium`]],template:function(t,n){t&1&&(qd(0,`span`,0),wv(1,`span`,1),qd(2,`span`,2),zS(3),Zd()()),t&2&&(di$1(`aria-label`,n.label())(`data-tone`,n.tone()),cC(),xv(`background`,n.dotColor()),cC(),xv(`color`,n.TONE_COLOR[n.tone()]),cC(),Bv(n.text()))},encapsulation:2})};var m=class s{api=p(Pc);realtime=p(ht$1);sites=V$3([]);selectedSiteId=V$3(null);loading=V$3(!1);error=V$3(null);selectedSite=Et$5(()=>{let e=this.selectedSiteId();return e?this.sites().find(t=>t._id===e)??null:null});async refresh(){this.loading.set(!0),this.error.set(null);try{let{sites:e}=await go(this.api.listSites());this.sites.set(e);let t=this.selectedSiteId(),l=t!==null&&e.some(u=>u._id===t)?t:e[0]?._id??null;l&&this.select(l)}catch(e){this.error.set(e instanceof Error?e.message:`Failed to load sites`)}finally{this.loading.set(!1)}}select(e){this.selectedSiteId.set(e),this.realtime.selectSite(e)}static ɵfac=function(t){return new(t||s)};static ɵprov=_$2({token:s,factory:s.ɵfac,providedIn:`root`})};function z(n,d){n&1&&wv(0,`div`,2)}var A=new D$2(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var L=(()=>{class n{_elementRef=p(Ot$5);_ngZone=p(se);_changeDetectorRef=p(pi$1);_renderer=p(Xn$2);_cleanupTransitionEnd;constructor(){let r=RN(),e=p(A,{optional:!0});this._isNoopAnimation=r===`di-disabled`,r===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),this.mode=e.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(r){this._color=r}_color;_defaultColor=`primary`;get value(){return this._value}set value(r){this._value=M(r||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(r){this._bufferValue=M(r||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new de$3;get mode(){return this._mode}set mode(r){this._mode=r,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=r=>{this.animationEnd.observers.length===0||!r.target||!r.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(e){return new(e||n)};static ɵcmp=Vd({type:n,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(e,a){e&2&&(di$1(`aria-valuenow`,a._isIndeterminate()?null:a.value)(`mode`,a.mode),OS(`mat-`+a.color),Ov(`_mat-animation-noopable`,a._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!a._isNoopAnimation)(`mdc-linear-progress--indeterminate`,a._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,yH],bufferValue:[2,`bufferValue`,`bufferValue`,yH],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(e,a){e&1&&(qd(0,`div`,0),wv(1,`div`,1),oS(2,z,1,0,`div`,2),Zd(),qd(3,`div`,3),wv(4,`span`,4),Zd(),qd(5,`div`,5),wv(6,`span`,4),Zd()),e&2&&(cC(),xv(`flex-basis`,a._getBufferBarFlexBasis()),cC(),iS(a.mode===`buffer`?2:-1),cC(),xv(`transform`,a._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return n})();function M(n,d=0,r=100){return Math.max(d,Math.min(r,n))}var Z$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=nr$2({type:n});static ɵinj=en$4({imports:[fG]})}return n})();var v=(function(s){return s[s.State=0]=`State`,s[s.Transition=1]=`Transition`,s[s.Sequence=2]=`Sequence`,s[s.Group=3]=`Group`,s[s.Animate=4]=`Animate`,s[s.Keyframes=5]=`Keyframes`,s[s.Style=6]=`Style`,s[s.Trigger=7]=`Trigger`,s[s.Reference=8]=`Reference`,s[s.AnimateChild=9]=`AnimateChild`,s[s.AnimateRef=10]=`AnimateRef`,s[s.Query=11]=`Query`,s[s.Stagger=12]=`Stagger`,s})(v||{});var _e=`*`;function ws(s,i=null){return{type:v.Sequence,steps:s,options:i}}function Oi(s){return{type:v.Style,styles:s,offset:null}}var Le=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(i=0,e=0){this.totalTime=i+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let e=i==`start`?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}};var ht=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(i){this.players=i;let e=0,t=0,n=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++e==r&&this._onFinish()}),o.onDestroy(()=>{++t==r&&this._onDestroy()}),o.onStart(()=>{++n==r&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let e=i*this.totalTime;this.players.forEach(t=>{let n=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(n)})}getPosition(){let i=this.players.reduce((e,t)=>e===null||t.totalTime>e.totalTime?t:e,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let e=i==`start`?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}};var kt=`!`;function Ss(s){return new v$2(3e3,!1)}function Kr(){return new v$2(3100,!1)}function qr(){return new v$2(3101,!1)}function Gr(s){return new v$2(3001,!1)}function Ur(s){return new v$2(3003,!1)}function Wr(s){return new v$2(3004,!1)}function xs(s,i){return new v$2(3005,!1)}function Es(){return new v$2(3006,!1)}function Ts(){return new v$2(3007,!1)}function Ms(s,i){return new v$2(3008,!1)}function Ns(s){return new v$2(3002,!1)}function Cs(s,i,e,t,n){return new v$2(3010,!1)}function Ds(){return new v$2(3011,!1)}function As(){return new v$2(3012,!1)}function Ps(){return new v$2(3200,!1)}function Is(){return new v$2(3202,!1)}function Os(){return new v$2(3013,!1)}function Rs(s){return new v$2(3014,!1)}function Ls(s){return new v$2(3015,!1)}function Fs(s){return new v$2(3016,!1)}function zs(s,i){return new v$2(3404,!1)}function Yr(s){return new v$2(3502,!1)}function Bs(s){return new v$2(3503,!1)}function js(){return new v$2(3300,!1)}function Vs(s){return new v$2(3504,!1)}function Qs(s){return new v$2(3301,!1)}function Hs(s,i){return new v$2(3302,!1)}function Ks(s){return new v$2(3303,!1)}function qs(s,i){return new v$2(3400,!1)}function Gs(s){return new v$2(3401,!1)}function Us(s){return new v$2(3402,!1)}function Ws(s,i){return new v$2(3505,!1)}function Fe(s){switch(s.length){case 0:return new Le;case 1:return s[0];default:return new ht(s)}}function zi(s,i,e=new Map,t=new Map){let n=[],r=[],o=-1,a=null;if(i.forEach(l=>{let c=l.get(`offset`),m=c==o,h=m&&a||new Map;l.forEach((y,g)=>{let p=g,b=y;if(g!==`offset`)switch(p=s.normalizePropertyName(p,n),b){case kt:b=e.get(g);break;case _e:b=t.get(g);break;default:b=s.normalizeStyleValue(g,p,b,n);break}h.set(p,b)}),m||r.push(h),a=h,o=c}),n.length)throw Yr(n);return r}function $t(s,i,e,t){switch(i){case`start`:s.onStart(()=>t(e&&Ri(e,`start`,s)));break;case`done`:s.onDone(()=>t(e&&Ri(e,`done`,s)));break;case`destroy`:s.onDestroy(()=>t(e&&Ri(e,`destroy`,s)));break}}function Ri(s,i,e){let t=e.totalTime,n=!!e.disabled,r=Xt(s.element,s.triggerName,s.fromState,s.toState,i||s.phaseName,t??s.totalTime,n),o=s._data;return o!=null&&(r._data=o),r}function Xt(s,i,e,t,n=``,r=0,o){return{element:s,triggerName:i,fromState:e,toState:t,phaseName:n,totalTime:r,disabled:!!o}}function Z(s,i,e){let t=s.get(i);return t||s.set(i,t=e),t}function Bi(s){let i=s.indexOf(`:`);return[s.substring(1,i),s.slice(i+1)]}var $r=typeof document>`u`?null:document.documentElement;function Zt(s){let i=s.parentNode||s.host||null;return i===$r?null:i}function Xr(s){return s.substring(1,6)==`ebkit`}var Ze=null;var ks=!1;function Ys(s){Ze||(Ze=Zr()||{},ks=Ze.style?`WebkitAppearance`in Ze.style:!1);let i=!0;return Ze.style&&!Xr(s)&&(i=s in Ze.style,!i&&ks&&(i=`Webkit`+s.charAt(0).toUpperCase()+s.slice(1)in Ze.style)),i}function Zr(){return typeof document<`u`?document.body:null}function ji(s,i){for(;i;){if(i===s)return!0;i=Zt(i)}return!1}function Vi(s,i,e){if(e)return Array.from(s.querySelectorAll(i));let t=s.querySelector(i);return t?[t]:[]}var Jr=1e3;var Qi=`{{`;var eo=`}}`;var Hi=`ng-enter`;var Jt=`ng-leave`;var xt=`ng-trigger`;var Et=`.ng-trigger`;var Ki=`ng-animating`;var ei=`.ng-animating`;function Ee(s){if(typeof s==`number`)return s;let i=s.match(/^(-?[\.\d]+)(m?s)/);return!i||i.length<2?0:Li(parseFloat(i[1]),i[2])}function Li(s,i){return i===`s`?s*Jr:s}function Tt(s,i,e){return typeof s==`object`&&s!==null&&Object.hasOwn(s,`duration`)?s:io(s,i,e)}var to=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function io(s,i,e){let t,n=0,r=``;if(typeof s==`string`){let o=s.match(to);if(o===null)return i.push(Ss(s)),{duration:0,delay:0,easing:``};t=Li(parseFloat(o[1]),o[2]);let a=o[3];a!=null&&(n=Li(parseFloat(a),o[4]));let l=o[5];l&&(r=l)}else t=s;if(!e){let o=!1,a=i.length;t<0&&(i.push(Kr()),o=!0),n<0&&(i.push(qr()),o=!0),o&&i.splice(a,0,Ss(s))}return{duration:t,delay:n,easing:r}}function $s(s){return s.length?s[0]instanceof Map?s:s.map(i=>new Map(Object.entries(i))):[]}function ge(s,i,e){i.forEach((t,n)=>{let r=ti(n);e&&!e.has(n)&&e.set(n,s.style[r]),s.style[r]=t})}function He(s,i){i.forEach((e,t)=>{let n=ti(t);s.style[n]=``})}function ut(s){return Array.isArray(s)?s.length==1?s[0]:ws(s):s}function Xs(s,i,e){let t=i.params||{},n=qi(s);n.length&&n.forEach(r=>{Object.hasOwn(t,r)||e.push(Gr(r))})}var Fi=new RegExp(`${Qi}\\s*(.+?)\\s*${eo}`,`g`);function qi(s){let i=[];if(typeof s==`string`){let e;for(;e=Fi.exec(s);)i.push(e[1]);Fi.lastIndex=0}return i}function pt(s,i,e){let t=`${s}`,n=t.replace(Fi,(r,o)=>{let a=i[o];return a??(e.push(Ur(o)),a=``),a.toString()});return n==t?s:n}var no=/-+([a-z0-9])/g;function ti(s){return s.replace(no,(...i)=>i[1].toUpperCase())}function Zs(s,i){return s===0||i===0}function Js(s,i,e){if(e.size&&i.length){let t=i[0],n=[];if(e.forEach((r,o)=>{t.has(o)||n.push(o),t.set(o,r)}),n.length)for(let r=1;r<i.length;r++){let o=i[r];n.forEach(a=>o.set(a,ii(s,a)))}}return i}function J(s,i,e){switch(i.type){case v.Trigger:return s.visitTrigger(i,e);case v.State:return s.visitState(i,e);case v.Transition:return s.visitTransition(i,e);case v.Sequence:return s.visitSequence(i,e);case v.Group:return s.visitGroup(i,e);case v.Animate:return s.visitAnimate(i,e);case v.Keyframes:return s.visitKeyframes(i,e);case v.Style:return s.visitStyle(i,e);case v.Reference:return s.visitReference(i,e);case v.AnimateChild:return s.visitAnimateChild(i,e);case v.AnimateRef:return s.visitAnimateRef(i,e);case v.Query:return s.visitQuery(i,e);case v.Stagger:return s.visitStagger(i,e);default:throw Wr(i.type)}}function ii(s,i){return window.getComputedStyle(s)[i]}var cn=(()=>{class s{validateStyleProperty(e){return Ys(e)}containsElement(e,t){return ji(e,t)}getParentElement(e){return Zt(e)}query(e,t,n){return Vi(e,t,n)}computeStyle(e,t,n){return n||``}animate(e,t,n,r,o,a=[],l){return new Le(n,r)}static ɵfac=function(t){return new(t||s)};static ɵprov=_$2({token:s,factory:s.ɵfac})}return s})();var et=class{static NOOP=new cn};var tt=class{};var so=new Set([`width`,`height`,`minWidth`,`minHeight`,`maxWidth`,`maxHeight`,`left`,`top`,`bottom`,`right`,`fontSize`,`outlineWidth`,`outlineOffset`,`paddingTop`,`paddingLeft`,`paddingBottom`,`paddingRight`,`marginTop`,`marginLeft`,`marginBottom`,`marginRight`,`borderRadius`,`borderWidth`,`borderTopWidth`,`borderLeftWidth`,`borderRightWidth`,`borderBottomWidth`,`textIndent`,`perspective`]);var ai=class extends tt{normalizePropertyName(i,e){return ti(i)}normalizeStyleValue(i,e,t,n){let r=``,o=t.toString().trim();if(so.has(e)&&t!==0&&t!==`0`)if(typeof t==`number`)r=`px`;else{let a=t.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&n.push(xs(i,t))}return o+r}};var li=`*`;function ro(s,i){let e=[];return typeof s==`string`?s.split(/\s*,\s*/).forEach(t=>oo(t,e,i)):e.push(s),e}function oo(s,i,e){if(s[0]==`:`){let l=ao(s,e);if(typeof l==`function`){i.push(l);return}s=l}let t=s.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(t==null||t.length<4)return e.push(Ls(s)),i;let n=t[1],r=t[2],o=t[3];i.push(er(n,o));let a=n==li&&o==li;r[0]==`<`&&!a&&i.push(er(o,n))}function ao(s,i){switch(s){case`:enter`:return`void => *`;case`:leave`:return`* => void`;case`:increment`:return(e,t)=>parseFloat(t)>parseFloat(e);case`:decrement`:return(e,t)=>parseFloat(t)<parseFloat(e);default:return i.push(Fs(s)),`* => *`}}var ni=new Set([`true`,`1`]);var si=new Set([`false`,`0`]);function er(s,i){let e=ni.has(s)||si.has(s),t=ni.has(i)||si.has(i);return(n,r)=>{let o=s==li||s==n,a=i==li||i==r;return!o&&e&&typeof n==`boolean`&&(o=n?ni.has(s):si.has(s)),!a&&t&&typeof r==`boolean`&&(a=r?ni.has(i):si.has(i)),o&&a}}var dr=`:self`;var lo=new RegExp(`s*${dr}s*,?`,`g`);function mr(s,i,e,t){return new Xi(s).build(i,e,t)}var tr=``;var Xi=class{_driver;constructor(i){this._driver=i}build(i,e,t){let n=new Zi(e);return this._resetContextStyleTimingState(n),J(this,ut(i),n)}_resetContextStyleTimingState(i){i.currentQuerySelector=tr,i.collectedStyles=new Map,i.collectedStyles.set(tr,new Map),i.currentTime=0}visitTrigger(i,e){let t=e.queryCount=0,n=e.depCount=0,r=[],o=[];return i.name.charAt(0)==`@`&&e.errors.push(Es()),i.definitions.forEach(a=>{if(this._resetContextStyleTimingState(e),a.type==v.State){let l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(m=>{l.name=m,r.push(this.visitState(l,e))}),l.name=c}else if(a.type==v.Transition){let l=this.visitTransition(a,e);t+=l.queryCount,n+=l.depCount,o.push(l)}else e.errors.push(Ts())}),{type:v.Trigger,name:i.name,states:r,transitions:o,queryCount:t,depCount:n,options:null}}visitState(i,e){let t=this.visitStyle(i.styles,e),n=i.options&&i.options.params||null;if(t.containsDynamicStyles){let r=new Set,o=n||{};t.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{qi(l).forEach(c=>{Object.hasOwn(o,c)||r.add(c)})})}),r.size&&e.errors.push(Ms(i.name,[...r.values()]))}return{type:v.State,name:i.name,style:t,options:n?{params:n}:null}}visitTransition(i,e){e.queryCount=0,e.depCount=0;let t=J(this,ut(i.animation),e),n=ro(i.expr,e.errors);return{type:v.Transition,matchers:n,animation:t,queryCount:e.queryCount,depCount:e.depCount,options:Je(i.options)}}visitSequence(i,e){return{type:v.Sequence,steps:i.steps.map(t=>J(this,t,e)),options:Je(i.options)}}visitGroup(i,e){let t=e.currentTime,n=0,r=i.steps.map(o=>{e.currentTime=t;let a=J(this,o,e);return n=Math.max(n,e.currentTime),a});return e.currentTime=n,{type:v.Group,steps:r,options:Je(i.options)}}visitAnimate(i,e){let t=uo(i.timings,e.errors);e.currentAnimateTimings=t;let n,r=i.styles?i.styles:Oi({});if(r.type==v.Keyframes)n=this.visitKeyframes(r,e);else{let o=i.styles,a=!1;if(!o){a=!0;let c={};t.easing&&(c.easing=t.easing),o=Oi(c)}e.currentTime+=t.duration+t.delay;let l=this.visitStyle(o,e);l.isEmptyStep=a,n=l}return e.currentAnimateTimings=null,{type:v.Animate,timings:t,style:n,options:null}}visitStyle(i,e){let t=this._makeStyleAst(i,e);return this._validateStyleAst(t,e),t}_makeStyleAst(i,e){let t=[],n=Array.isArray(i.styles)?i.styles:[i.styles];for(let a of n)typeof a==`string`?a===_e?t.push(a):e.errors.push(Ns(a)):t.push(new Map(Object.entries(a)));let r=!1,o=null;return t.forEach(a=>{if(a instanceof Map&&(a.has(`easing`)&&(o=a.get(`easing`),a.delete(`easing`)),!r)){for(let l of a.values())if(l.toString().indexOf(Qi)>=0){r=!0;break}}}),{type:v.Style,styles:t,easing:o,offset:i.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(i,e){let t=e.currentAnimateTimings,n=e.currentTime,r=e.currentTime;t&&r>0&&(r-=t.duration+t.delay),i.styles.forEach(o=>{typeof o!=`string`&&o.forEach((a,l)=>{let c=e.collectedStyles.get(e.currentQuerySelector),m=c.get(l),h=!0;m&&(r!=n&&r>=m.startTime&&n<=m.endTime&&(e.errors.push(Cs(l,m.startTime,m.endTime,r,n)),h=!1),r=m.startTime),h&&c.set(l,{startTime:r,endTime:n}),e.options&&Xs(a,e.options,e.errors)})})}visitKeyframes(i,e){let t={type:v.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(Ds()),t;let n=1,r=0,o=[],a=!1,l=!1,c=0,m=i.steps.map(O=>{let R=this._makeStyleAst(O,e),K=R.offset!=null?R.offset:ho(R.styles),B=0;return K!=null&&(r++,B=R.offset=K),l=l||B<0||B>1,a=a||B<c,c=B,o.push(B),R});l&&e.errors.push(As()),a&&e.errors.push(Ps());let h=i.steps.length,y=0;r>0&&r<h?e.errors.push(Is()):r==0&&(y=n/(h-1));let g=h-1,p=e.currentTime,b=e.currentAnimateTimings,T=b.duration;return m.forEach((O,R)=>{let K=y>0?R==g?1:y*R:o[R],B=K*T;e.currentTime=p+b.delay+B,b.duration=B,this._validateStyleAst(O,e),O.offset=K,t.styles.push(O)}),t}visitReference(i,e){return{type:v.Reference,animation:J(this,ut(i.animation),e),options:Je(i.options)}}visitAnimateChild(i,e){return e.depCount++,{type:v.AnimateChild,options:Je(i.options)}}visitAnimateRef(i,e){return{type:v.AnimateRef,animation:this.visitReference(i.animation,e),options:Je(i.options)}}visitQuery(i,e){let t=e.currentQuerySelector,n=i.options||{};e.queryCount++,e.currentQuery=i;let[r,o]=co(i.selector);e.currentQuerySelector=t.length?t+` `+r:r,Z(e.collectedStyles,e.currentQuerySelector,new Map);let a=J(this,ut(i.animation),e);return e.currentQuery=null,e.currentQuerySelector=t,{type:v.Query,selector:r,limit:n.limit||0,optional:!!n.optional,includeSelf:o,animation:a,originalSelector:i.selector,options:Je(i.options)}}visitStagger(i,e){e.currentQuery||e.errors.push(Os());let t=i.timings===`full`?{duration:0,delay:0,easing:`full`}:Tt(i.timings,e.errors,!0);return{type:v.Stagger,animation:J(this,ut(i.animation),e),timings:t,options:null}}};function co(s){let i=!!s.split(/\s*,\s*/).find(e=>e==dr);return i&&(s=s.replace(lo,``)),s=s.replace(/@\*/g,Et).replace(/@\w+/g,e=>Et+`-`+e.slice(1)).replace(/:animating/g,ei),[s,i]}function mo(s){return s?m$2({},s):null}var Zi=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(i){this.errors=i}};function ho(s){if(typeof s==`string`)return null;let i=null;if(Array.isArray(s))s.forEach(e=>{if(e instanceof Map&&e.has(`offset`)){let t=e;i=parseFloat(t.get(`offset`)),t.delete(`offset`)}});else if(s instanceof Map&&s.has(`offset`)){let e=s;i=parseFloat(e.get(`offset`)),e.delete(`offset`)}return i}function uo(s,i){if(typeof s==`object`&&s!==null&&Object.hasOwn(s,`duration`))return s;if(typeof s==`number`){let r=Tt(s,i).duration;return Gi(r,0,``)}let e=s;if(e.split(/\s+/).some(r=>r.charAt(0)==`{`&&r.charAt(1)==`{`)){let r=Gi(0,0,``);return r.dynamic=!0,r.strValue=e,r}let n=Tt(e,i);return Gi(n.duration,n.delay,n.easing)}function Je(s){return s?(s=m$2({},s),s.params&&(s.params=mo(s.params))):s={},s}function Gi(s,i,e){return{duration:s,delay:i,easing:e}}function dn(s,i,e,t,n,r,o=null,a=!1){return{type:1,element:s,keyframes:i,preStyleProps:e,postStyleProps:t,duration:n,delay:r,totalTime:n+r,easing:o,subTimeline:a}}var Nt=class{_map=new Map;get(i){return this._map.get(i)||[]}append(i,e){let t=this._map.get(i);t||this._map.set(i,t=[]),t.push(...e)}has(i){return this._map.has(i)}clear(){this._map.clear()}};var po=1;var _o=new RegExp(`:enter`,`g`);var bo=new RegExp(`:leave`,`g`);function hr(s,i,e,t,n,r=new Map,o=new Map,a,l,c=[]){return new Ji().buildKeyframes(s,i,e,t,n,r,o,a,l,c)}var Ji=class{buildKeyframes(i,e,t,n,r,o,a,l,c,m=[]){c=c||new Nt;let h=new en(i,e,c,n,r,m,[]);h.options=l;let y=l.delay?Ee(l.delay):0;h.currentTimeline.delayNextStep(y),h.currentTimeline.setStyles([o],null,h.errors,l),J(this,t,h);let g=h.timelines.filter(p=>p.containsAnimation());if(g.length&&a.size){let p;for(let b=g.length-1;b>=0;b--){let T=g[b];if(T.element===e){p=T;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([a],null,h.errors,l)}return g.length?g.map(p=>p.buildKeyframes()):[dn(e,[],[],[],0,y,``,!1)]}visitTrigger(i,e){}visitState(i,e){}visitTransition(i,e){}visitAnimateChild(i,e){let t=e.subInstructions.get(e.element);if(t){let n=e.createSubContext(i.options),r=e.currentTimeline.currentTime,o=this._visitSubInstructions(t,n,n.options);r!=o&&e.transformIntoNewTimeline(o)}e.previousNode=i}visitAnimateRef(i,e){let t=e.createSubContext(i.options);t.transformIntoNewTimeline(),this._applyAnimationRefDelays([i.options,i.animation.options],e,t),this.visitReference(i.animation,t),e.transformIntoNewTimeline(t.currentTimeline.currentTime),e.previousNode=i}_applyAnimationRefDelays(i,e,t){for(let n of i){let r=n?.delay;if(r){let o=typeof r==`number`?r:Ee(pt(r,n?.params??{},e.errors));t.delayNextStep(o)}}}_visitSubInstructions(i,e,t){let r=e.currentTimeline.currentTime,o=t.duration!=null?Ee(t.duration):null,a=t.delay!=null?Ee(t.delay):null;return o!==0&&i.forEach(l=>{let c=e.appendInstructionToTimeline(l,o,a);r=Math.max(r,c.duration+c.delay)}),r}visitReference(i,e){e.updateOptions(i.options,!0),J(this,i.animation,e),e.previousNode=i}visitSequence(i,e){let t=e.subContextCount,n=e,r=i.options;if(r&&(r.params||r.delay)&&(n=e.createSubContext(r),n.transformIntoNewTimeline(),r.delay!=null)){n.previousNode.type==v.Style&&(n.currentTimeline.snapshotCurrentStyles(),n.previousNode=ci);let o=Ee(r.delay);n.delayNextStep(o)}i.steps.length&&(i.steps.forEach(o=>J(this,o,n)),n.currentTimeline.applyStylesToKeyframe(),n.subContextCount>t&&n.transformIntoNewTimeline()),e.previousNode=i}visitGroup(i,e){let t=[],n=e.currentTimeline.currentTime,r=i.options&&i.options.delay?Ee(i.options.delay):0;i.steps.forEach(o=>{let a=e.createSubContext(i.options);r&&a.delayNextStep(r),J(this,o,a),n=Math.max(n,a.currentTimeline.currentTime),t.push(a.currentTimeline)}),t.forEach(o=>e.currentTimeline.mergeTimelineCollectedStyles(o)),e.transformIntoNewTimeline(n),e.previousNode=i}_visitTiming(i,e){if(i.dynamic){let t=i.strValue;return Tt(e.params?pt(t,e.params,e.errors):t,e.errors)}else return{duration:i.duration,delay:i.delay,easing:i.easing}}visitAnimate(i,e){let t=e.currentAnimateTimings=this._visitTiming(i.timings,e),n=e.currentTimeline;t.delay&&(e.incrementTime(t.delay),n.snapshotCurrentStyles());let r=i.style;r.type==v.Keyframes?this.visitKeyframes(r,e):(e.incrementTime(t.duration),this.visitStyle(r,e),n.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=i}visitStyle(i,e){let t=e.currentTimeline,n=e.currentAnimateTimings;!n&&t.hasCurrentStyleProperties()&&t.forwardFrame();let r=n&&n.easing||i.easing;i.isEmptyStep?t.applyEmptyStep(r):t.setStyles(i.styles,r,e.errors,e.options),e.previousNode=i}visitKeyframes(i,e){let t=e.currentAnimateTimings,n=e.currentTimeline.duration,r=t.duration,a=e.createSubContext().currentTimeline;a.easing=t.easing,i.styles.forEach(l=>{let c=l.offset||0;a.forwardTime(c*r),a.setStyles(l.styles,l.easing,e.errors,e.options),a.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(a),e.transformIntoNewTimeline(n+r),e.previousNode=i}visitQuery(i,e){let t=e.currentTimeline.currentTime,n=i.options||{},r=n.delay?Ee(n.delay):0;r&&(e.previousNode.type===v.Style||t==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=ci);let o=t,a=e.invokeQuery(i.selector,i.originalSelector,i.limit,i.includeSelf,!!n.optional,e.errors);e.currentQueryTotal=a.length;let l=null;a.forEach((c,m)=>{e.currentQueryIndex=m;let h=e.createSubContext(i.options,c);r&&h.delayNextStep(r),c===e.element&&(l=h.currentTimeline),J(this,i.animation,h),h.currentTimeline.applyStylesToKeyframe();let y=h.currentTimeline.currentTime;o=Math.max(o,y)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(o),l&&(e.currentTimeline.mergeTimelineCollectedStyles(l),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=i}visitStagger(i,e){let t=e.parentContext,n=e.currentTimeline,r=i.timings,o=Math.abs(r.duration),a=o*(e.currentQueryTotal-1),l=o*e.currentQueryIndex;switch(r.duration<0?`reverse`:r.easing){case`reverse`:l=a-l;break;case`full`:l=t.currentStaggerTime;break}let m=e.currentTimeline;l&&m.delayNextStep(l);let h=m.currentTime;J(this,i.animation,e),e.previousNode=i,t.currentStaggerTime=n.currentTime-h+(n.startTime-t.currentTimeline.startTime)}};var ci={};var en=class s{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=ci;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(i,e,t,n,r,o,a,l){this._driver=i,this.element=e,this.subInstructions=t,this._enterClassName=n,this._leaveClassName=r,this.errors=o,this.timelines=a,this.currentTimeline=l||new di(this._driver,e,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(i,e){if(!i)return;let t=i,n=this.options;t.duration!=null&&(n.duration=Ee(t.duration)),t.delay!=null&&(n.delay=Ee(t.delay));let r=t.params;if(r){let o=n.params;o||(o=this.options.params={}),Object.keys(r).forEach(a=>{(!e||!Object.hasOwn(o,a))&&(o[a]=pt(r[a],o,this.errors))})}}_copyOptions(){let i={};if(this.options){let e=this.options.params;if(e){let t=i.params={};Object.keys(e).forEach(n=>{t[n]=e[n]})}}return i}createSubContext(i=null,e,t){let n=e||this.element,r=new s(this._driver,n,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(n,t||0));return r.previousNode=this.previousNode,r.currentAnimateTimings=this.currentAnimateTimings,r.options=this._copyOptions(),r.updateOptions(i),r.currentQueryIndex=this.currentQueryIndex,r.currentQueryTotal=this.currentQueryTotal,r.parentContext=this,this.subContextCount++,r}transformIntoNewTimeline(i){return this.previousNode=ci,this.currentTimeline=this.currentTimeline.fork(this.element,i),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(i,e,t){let n={duration:e??i.duration,delay:this.currentTimeline.currentTime+(t??0)+i.delay,easing:``},r=new tn(this._driver,i.element,i.keyframes,i.preStyleProps,i.postStyleProps,n,i.stretchStartingKeyframe);return this.timelines.push(r),n}incrementTime(i){this.currentTimeline.forwardTime(this.currentTimeline.duration+i)}delayNextStep(i){i>0&&this.currentTimeline.delayNextStep(i)}invokeQuery(i,e,t,n,r,o){let a=[];if(n&&a.push(this.element),i.length>0){i=i.replace(_o,`.`+this._enterClassName),i=i.replace(bo,`.`+this._leaveClassName);let l=t!=1,c=this._driver.query(this.element,i,l);t!==0&&(c=t<0?c.slice(c.length+t,c.length):c.slice(0,t)),a.push(...c)}return!r&&a.length==0&&o.push(Rs(e)),a}};var di=class s{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(i,e,t,n){this._driver=i,this.element=e,this.startTime=t,this._elementTimelineStylesLookup=n,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(i){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+i),e&&this.snapshotCurrentStyles()):this.startTime+=i}fork(i,e){return this.applyStylesToKeyframe(),new s(this._driver,i,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=po,this._loadKeyframe()}forwardTime(i){this.applyStylesToKeyframe(),this.duration=i,this._loadKeyframe()}_updateStyle(i,e){this._localTimelineStyles.set(i,e),this._globalTimelineStyles.set(i,e),this._styleSummary.set(i,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(i){i&&this._previousKeyframe.set(`easing`,i);for(let[e,t]of this._globalTimelineStyles)this._backFill.set(e,t||_e),this._currentKeyframe.set(e,_e);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(i,e,t,n){e&&this._previousKeyframe.set(`easing`,e);let r=n&&n.params||{},o=yo(i,this._globalTimelineStyles);for(let[a,l]of o){let c=pt(l,r,t);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??_e),this._updateStyle(a,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((i,e)=>{this._currentKeyframe.set(e,i)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((i,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,i)}))}snapshotCurrentStyles(){for(let[i,e]of this._localTimelineStyles)this._pendingStyles.set(i,e),this._updateStyle(i,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let i=[];for(let e in this._currentKeyframe)i.push(e);return i}mergeTimelineCollectedStyles(i){i._styleSummary.forEach((e,t)=>{let n=this._styleSummary.get(t);(!n||e.time>n.time)&&this._updateStyle(t,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let i=new Set,e=new Set,t=this._keyframes.size===1&&this.duration===0,n=[];this._keyframes.forEach((a,l)=>{let c=new Map([...this._backFill,...a]);c.forEach((m,h)=>{m===kt?i.add(h):m===_e&&e.add(h)}),t||c.set(`offset`,l/this.duration),n.push(c)});let r=[...i.values()],o=[...e.values()];if(t){let a=n[0],l=new Map(a);a.set(`offset`,0),l.set(`offset`,1),n=[a,l]}return dn(this.element,n,r,o,this.duration,this.startTime,this.easing,!1)}};var tn=class extends di{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(i,e,t,n,r,o,a=!1){super(i,e,o.delay),this.keyframes=t,this.preStyleProps=n,this.postStyleProps=r,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let i=this.keyframes,{delay:e,duration:t,easing:n}=this.timings;if(this._stretchStartingKeyframe&&e){let r=[],o=t+e,a=e/o,l=new Map(i[0]);l.set(`offset`,0),r.push(l);let c=new Map(i[0]);c.set(`offset`,ir(a)),r.push(c);let m=i.length-1;for(let h=1;h<=m;h++){let y=new Map(i[h]),g=y.get(`offset`),p=e+g*t;y.set(`offset`,ir(p/o)),r.push(y)}t=o,e=0,n=``,i=r}return dn(this.element,i,this.preStyleProps,this.postStyleProps,t,e,n,!0)}};function ir(s,i=3){let e=Math.pow(10,i-1);return Math.round(s*e)/e}function yo(s,i){let e=new Map,t;return s.forEach(n=>{if(n===`*`){t??=i.keys();for(let r of t)e.set(r,_e)}else for(let[r,o]of n)e.set(r,o)}),e}function nr(s,i,e,t,n,r,o,a,l,c,m,h,y){return{type:0,element:s,triggerName:i,isRemovalTransition:n,fromState:e,fromStyles:r,toState:t,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:m,totalTime:h,errors:y}}var Ui={};var mi=class{_triggerName;ast;_stateStyles;constructor(i,e,t){this._triggerName=i,this.ast=e,this._stateStyles=t}match(i,e,t,n){return vo(this.ast.matchers,i,e,t,n)}buildStyles(i,e,t){let n=this._stateStyles.get(`*`);return i!==void 0&&(n=this._stateStyles.get(i?.toString())||n),n?n.buildStyles(e,t):new Map}build(i,e,t,n,r,o,a,l,c,m){let h=[],y=this.ast.options&&this.ast.options.params||Ui,g=a&&a.params||Ui,p=this.buildStyles(t,g,h),b=l&&l.params||Ui,T=this.buildStyles(n,b,h),O=new Set,R=new Map,K=new Map,B=n===`void`,it={params:ur(b,y),delay:this.ast.options?.delay},ye=m?[]:hr(i,e,this.ast.animation,r,o,p,T,it,c,h),q=0;return ye.forEach(Y=>{q=Math.max(Y.duration+Y.delay,q)}),h.length?nr(e,this._triggerName,t,n,B,p,T,[],[],R,K,q,h):(ye.forEach(Y=>{let Ke=Y.element,nt=Z(R,Ke,new Set);Y.preStyleProps.forEach(qe=>nt.add(qe));let bn=Z(K,Ke,new Set);Y.postStyleProps.forEach(qe=>bn.add(qe)),Ke!==e&&O.add(Ke)}),nr(e,this._triggerName,t,n,B,p,T,ye,[...O.values()],R,K,q))}};function vo(s,i,e,t,n){return s.some(r=>r(i,e,t,n))}function ur(s,i){let e=m$2({},i);return Object.entries(s).forEach(([t,n])=>{n!=null&&(e[t]=n)}),e}var nn=class{styles;defaultParams;normalizer;constructor(i,e,t){this.styles=i,this.defaultParams=e,this.normalizer=t}buildStyles(i,e){let t=new Map,n=ur(i,this.defaultParams);return this.styles.styles.forEach(r=>{typeof r!=`string`&&r.forEach((o,a)=>{o&&(o=pt(o,n,e));let l=this.normalizer.normalizePropertyName(a,e);o=this.normalizer.normalizeStyleValue(a,l,o,e),t.set(a,o)})}),t}};function wo(s,i,e){return new sn(s,i,e)}var sn=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(i,e,t){this.name=i,this.ast=e,this._normalizer=t,e.states.forEach(n=>{let r=n.options&&n.options.params||{};this.states.set(n.name,new nn(n.style,r,t))}),sr(this.states,`true`,`1`),sr(this.states,`false`,`0`),e.transitions.forEach(n=>{this.transitionFactories.push(new mi(i,n,this.states))}),this.fallbackTransition=So(i,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(i,e,t,n){return this.transitionFactories.find(o=>o.match(i,e,t,n))||null}matchStyles(i,e,t){return this.fallbackTransition.buildStyles(i,e,t)}};function So(s,i,e){let t=[(o,a)=>!0],n={type:v.Sequence,steps:[],options:null};return new mi(s,{type:v.Transition,animation:n,matchers:t,options:null,queryCount:0,depCount:0},i)}function sr(s,i,e){s.has(i)?s.has(e)||s.set(e,s.get(i)):s.has(e)&&s.set(i,s.get(e))}var ko=new Nt;var rn=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(i,e,t){this.bodyNode=i,this._driver=e,this._normalizer=t}register(i,e){let t=[],r=mr(this._driver,e,t,[]);if(t.length)throw Bs(t);this._animations.set(i,r)}_buildPlayer(i,e,t){let n=i.element,r=zi(this._normalizer,i.keyframes,e,t);return this._driver.animate(n,r,i.duration,i.delay,i.easing,[],!0)}create(i,e,t={}){let n=[],r=this._animations.get(i),o,a=new Map;if(r?(o=hr(this._driver,e,r,Hi,Jt,new Map,new Map,t,ko,n),o.forEach(m=>{let h=Z(a,m.element,new Map);m.postStyleProps.forEach(y=>h.set(y,null))})):(n.push(js()),o=[]),n.length)throw Vs(n);a.forEach((m,h)=>{m.forEach((y,g)=>{m.set(g,this._driver.computeStyle(h,g,_e))})});let c=Fe(o.map(m=>{let h=a.get(m.element);return this._buildPlayer(m,new Map,h)}));return this._playersById.set(i,c),c.onDestroy(()=>this.destroy(i)),this.players.push(c),c}destroy(i){let e=this._getPlayer(i);e.destroy(),this._playersById.delete(i);let t=this.players.indexOf(e);t>=0&&this.players.splice(t,1)}_getPlayer(i){let e=this._playersById.get(i);if(!e)throw Qs(i);return e}listen(i,e,t,n){let r=Xt(e,``,``,``);return $t(this._getPlayer(i),t,r,n),()=>{}}command(i,e,t,n){if(t==`register`){this.register(i,n[0]);return}if(t==`create`){let o=n[0]||{};this.create(i,e,o);return}let r=this._getPlayer(i);switch(t){case`play`:r.play();break;case`pause`:r.pause();break;case`reset`:r.reset();break;case`restart`:r.restart();break;case`finish`:r.finish();break;case`init`:r.init();break;case`setPosition`:r.setPosition(parseFloat(n[0]));break;case`destroy`:this.destroy(i);break}}};var rr=`ng-animate-queued`;var xo=`.ng-animate-queued`;var Wi=`ng-animate-disabled`;var Eo=`.ng-animate-disabled`;var To=`ng-star-inserted`;var Mo=`.ng-star-inserted`;var No=[];var pr={namespaceId:``,setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1};var Co={namespaceId:``,setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};var be=`__ng_removed`;var Ct=class{namespaceId;value;options;get params(){return this.options.params}constructor(i,e=``){this.namespaceId=e;let t=i&&Object.hasOwn(i,`value`),n=t?i.value:i;if(this.value=Ao(n),t){let r=i,{value:o}=r,a=FD(r,[`value`]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(i){let e=i.params;if(e){let t=this.options.params;Object.keys(e).forEach(n=>{t[n]??(t[n]=e[n])})}}};var Mt=`void`;var Yi=new Ct(Mt);var on=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(i,e,t){this.id=i,this.hostElement=e,this._engine=t,this._hostClassName=`ng-tns-`+i,de(e,this._hostClassName)}listen(i,e,t,n){if(!this._triggers.has(e))throw Hs(t,e);if(t==null||t.length==0)throw Ks(e);if(!Po(t))throw qs(t,e);let r=Z(this._elementListeners,i,[]),o={name:e,phase:t,callback:n};r.push(o);let a=Z(this._engine.statesByElement,i,new Map);return a.has(e)||(de(i,xt),de(i,xt+`-`+e),a.set(e,Yi)),()=>{this._engine.afterFlush(()=>{let l=r.indexOf(o);l>=0&&r.splice(l,1),this._triggers.has(e)||a.delete(e)})}}register(i,e){return this._triggers.has(i)?!1:(this._triggers.set(i,e),!0)}_getTrigger(i){let e=this._triggers.get(i);if(!e)throw Gs(i);return e}trigger(i,e,t,n=!0){let r=this._getTrigger(e),o=new Dt(this.id,e,i),a=this._engine.statesByElement.get(i);a||(de(i,xt),de(i,xt+`-`+e),this._engine.statesByElement.set(i,a=new Map));let l=a.get(e),c=new Ct(t,this.id);if(!(t&&Object.hasOwn(t,`value`))&&l&&c.absorbOptions(l.options),a.set(e,c),l||(l=Yi),!(c.value===Mt)&&l.value===c.value){if(!Ro(l.params,c.params)){let b=[],T=r.matchStyles(l.value,l.params,b),O=r.matchStyles(c.value,c.params,b);b.length?this._engine.reportError(b):this._engine.afterFlush(()=>{He(i,T),ge(i,O)})}return}let y=Z(this._engine.playersByElement,i,[]);y.forEach(b=>{b.namespaceId==this.id&&b.triggerName==e&&b.queued&&b.destroy()});let g=r.matchTransition(l.value,c.value,i,c.params),p=!1;if(!g){if(!n)return;g=r.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:i,triggerName:e,transition:g,fromState:l,toState:c,player:o,isFallbackTransition:p}),p||(de(i,rr),o.onStart(()=>{ft(i,rr)})),o.onDone(()=>{let b=this.players.indexOf(o);b>=0&&this.players.splice(b,1);let T=this._engine.playersByElement.get(i);if(T){let O=T.indexOf(o);O>=0&&T.splice(O,1)}}),this.players.push(o),y.push(o),o}deregister(i){this._triggers.delete(i),this._engine.statesByElement.forEach(e=>e.delete(i)),this._elementListeners.forEach((e,t)=>{this._elementListeners.set(t,e.filter(n=>n.name!=i))})}clearElementCache(i){this._engine.statesByElement.delete(i),this._elementListeners.delete(i);let e=this._engine.playersByElement.get(i);e&&(e.forEach(t=>t.destroy()),this._engine.playersByElement.delete(i))}_signalRemovalForInnerTriggers(i,e){let t=this._engine.driver.query(i,Et,!0);t.forEach(n=>{if(n[be])return;let r=this._engine.fetchNamespacesByElement(n);r.size?r.forEach(o=>o.triggerLeaveAnimation(n,e,!1,!0)):this.clearElementCache(n)}),this._engine.afterFlushAnimationsDone(()=>t.forEach(n=>this.clearElementCache(n)))}triggerLeaveAnimation(i,e,t,n){let r=this._engine.statesByElement.get(i),o=new Map;if(r){let a=[];if(r.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){let m=this.trigger(i,c,Mt,n);m&&a.push(m)}}),a.length)return this._engine.markElementAsRemoved(this.id,i,!0,e,o),t&&Fe(a).onDone(()=>this._engine.processLeaveNode(i)),!0}return!1}prepareLeaveAnimationListeners(i){let e=this._elementListeners.get(i),t=this._engine.statesByElement.get(i);if(e&&t){let n=new Set;e.forEach(r=>{let o=r.name;if(n.has(o))return;n.add(o);let l=this._triggers.get(o).fallbackTransition,c=t.get(o)||Yi,m=new Ct(Mt),h=new Dt(this.id,o,i);this._engine.totalQueuedPlayers++,this._queue.push({element:i,triggerName:o,transition:l,fromState:c,toState:m,player:h,isFallbackTransition:!0})})}}removeNode(i,e){let t=this._engine;if(i.childElementCount&&this._signalRemovalForInnerTriggers(i,e),this.triggerLeaveAnimation(i,e,!0))return;let n=!1;if(t.totalAnimations){let r=t.players.length?t.playersByQueriedElement.get(i):[];if(r&&r.length)n=!0;else{let o=i;for(;o=o.parentNode;)if(t.statesByElement.get(o)){n=!0;break}}}if(this.prepareLeaveAnimationListeners(i),n)t.markElementAsRemoved(this.id,i,!1,e);else{let r=i[be];(!r||r===pr)&&(t.afterFlush(()=>this.clearElementCache(i)),t.destroyInnerAnimations(i),t._onRemovalComplete(i,e))}}insertNode(i,e){de(i,this._hostClassName)}drainQueuedTransitions(i){let e=[];return this._queue.forEach(t=>{let n=t.player;if(n.destroyed)return;let r=t.element,o=this._elementListeners.get(r);o&&o.forEach(a=>{if(a.name==t.triggerName){let l=Xt(r,t.triggerName,t.fromState.value,t.toState.value);l._data=i,$t(t.player,a.phase,l,a.callback)}}),n.markedForDestroy?this._engine.afterFlush(()=>{n.destroy()}):e.push(t)}),this._queue=[],e.sort((t,n)=>{let r=t.transition.ast.depCount,o=n.transition.ast.depCount;return r==0||o==0?r-o:this._engine.driver.containsElement(t.element,n.element)?1:-1})}destroy(i){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,i)}};var an=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(i,e)=>{};_onRemovalComplete(i,e){this.onRemovalComplete(i,e)}constructor(i,e,t){this.bodyNode=i,this.driver=e,this._normalizer=t}get queuedPlayers(){let i=[];return this._namespaceList.forEach(e=>{e.players.forEach(t=>{t.queued&&i.push(t)})}),i}createNamespace(i,e){let t=new on(i,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(t,e):(this.newHostElements.set(e,t),this.collectEnterElement(e)),this._namespaceLookup[i]=t}_balanceNamespaceList(i,e){let t=this._namespaceList,n=this.namespacesByHostElement;if(t.length-1>=0){let o=!1,a=this.driver.getParentElement(e);for(;a;){let l=n.get(a);if(l){let c=t.indexOf(l);t.splice(c+1,0,i),o=!0;break}a=this.driver.getParentElement(a)}o||t.unshift(i)}else t.push(i);return n.set(e,i),i}register(i,e){let t=this._namespaceLookup[i];return t||(t=this.createNamespace(i,e)),t}registerTrigger(i,e,t){let n=this._namespaceLookup[i];n&&n.register(e,t)&&this.totalAnimations++}destroy(i,e){i&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let t=this._fetchNamespace(i);this.namespacesByHostElement.delete(t.hostElement);let n=this._namespaceList.indexOf(t);n>=0&&this._namespaceList.splice(n,1),t.destroy(e),delete this._namespaceLookup[i]}))}_fetchNamespace(i){return this._namespaceLookup[i]}fetchNamespacesByElement(i){let e=new Set,t=this.statesByElement.get(i);if(t){for(let n of t.values())if(n.namespaceId){let r=this._fetchNamespace(n.namespaceId);r&&e.add(r)}}return e}trigger(i,e,t,n){if(ri(e)){let r=this._fetchNamespace(i);if(r)return r.trigger(e,t,n),!0}return!1}insertNode(i,e,t,n){if(!ri(e))return;let r=e[be];if(r&&r.setForRemoval){r.setForRemoval=!1,r.setForMove=!0;let o=this.collectedLeaveElements.indexOf(e);o>=0&&this.collectedLeaveElements.splice(o,1)}if(i){let o=this._fetchNamespace(i);o&&o.insertNode(e,t)}n&&this.collectEnterElement(e)}collectEnterElement(i){this.collectedEnterElements.push(i)}markElementAsDisabled(i,e){e?this.disabledNodes.has(i)||(this.disabledNodes.add(i),de(i,Wi)):this.disabledNodes.has(i)&&(this.disabledNodes.delete(i),ft(i,Wi))}removeNode(i,e,t){if(ri(e)){let n=i?this._fetchNamespace(i):null;n?n.removeNode(e,t):this.markElementAsRemoved(i,e,!1,t);let r=this.namespacesByHostElement.get(e);r&&r.id!==i&&r.removeNode(e,t)}else this._onRemovalComplete(e,t)}markElementAsRemoved(i,e,t,n,r){this.collectedLeaveElements.push(e),e[be]={namespaceId:i,setForRemoval:n,hasAnimation:t,removedBeforeQueried:!1,previousTriggersValues:r}}listen(i,e,t,n,r){return ri(e)?this._fetchNamespace(i).listen(e,t,n,r):()=>{}}_buildInstruction(i,e,t,n,r){return i.transition.build(this.driver,i.element,i.fromState.value,i.toState.value,t,n,i.fromState.options,i.toState.options,e,r)}destroyInnerAnimations(i){let e=this.driver.query(i,Et,!0);e.forEach(t=>this.destroyActiveAnimationsForElement(t)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(i,ei,!0),e.forEach(t=>this.finishActiveQueriedAnimationOnElement(t)))}destroyActiveAnimationsForElement(i){let e=this.playersByElement.get(i);e&&e.forEach(t=>{t.queued?t.markedForDestroy=!0:t.destroy()})}finishActiveQueriedAnimationOnElement(i){let e=this.playersByQueriedElement.get(i);e&&e.forEach(t=>t.finish())}whenRenderingDone(){return new Promise(i=>{if(this.players.length)return Fe(this.players).onDone(()=>i());i()})}processLeaveNode(i){let e=i[be];if(e&&e.setForRemoval){if(i[be]=pr,e.namespaceId){this.destroyInnerAnimations(i);let t=this._fetchNamespace(e.namespaceId);t&&t.clearElementCache(i)}this._onRemovalComplete(i,e.setForRemoval)}i.classList?.contains(Wi)&&this.markElementAsDisabled(i,!1),this.driver.query(i,Eo,!0).forEach(t=>{this.markElementAsDisabled(t,!1)})}flush(i=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((t,n)=>this._balanceNamespaceList(t,n)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let t=0;t<this.collectedEnterElements.length;t++){let n=this.collectedEnterElements[t];de(n,To)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let t=[];try{e=this._flushAnimations(t,i)}finally{for(let n=0;n<t.length;n++)t[n]()}}else for(let t=0;t<this.collectedLeaveElements.length;t++){let n=this.collectedLeaveElements[t];this.processLeaveNode(n)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(t=>t()),this._flushFns=[],this._whenQuietFns.length){let t=this._whenQuietFns;this._whenQuietFns=[],e.length?Fe(e).onDone(()=>{t.forEach(n=>n())}):t.forEach(n=>n())}}reportError(i){throw Us(i)}_flushAnimations(i,e){let t=new Nt,n=[],r=new Map,o=[],a=new Map,l=new Map,c=new Map,m=new Set;this.disabledNodes.forEach(u=>{m.add(u);let f=this.driver.query(u,xo,!0);for(let _=0;_<f.length;_++)m.add(f[_])});let h=this.bodyNode,y=Array.from(this.statesByElement.keys()),g=lr(y,this.collectedEnterElements),p=new Map,b=0;g.forEach((u,f)=>{let _=Hi+b++;p.set(f,_),u.forEach(S=>de(S,_))});let T=[],O=new Set,R=new Set;for(let u=0;u<this.collectedLeaveElements.length;u++){let f=this.collectedLeaveElements[u],_=f[be];_&&_.setForRemoval&&(T.push(f),O.add(f),_.hasAnimation?this.driver.query(f,Mo,!0).forEach(S=>O.add(S)):R.add(f))}let K=new Map,B=lr(y,Array.from(O));B.forEach((u,f)=>{let _=Jt+b++;K.set(f,_),u.forEach(S=>de(S,_))}),i.push(()=>{g.forEach((u,f)=>{let _=p.get(f);u.forEach(S=>ft(S,_))}),B.forEach((u,f)=>{let _=K.get(f);u.forEach(S=>ft(S,_))}),T.forEach(u=>{this.processLeaveNode(u)})});let it=[],ye=[];for(let u=this._namespaceList.length-1;u>=0;u--)this._namespaceList[u].drainQueuedTransitions(e).forEach(_=>{let S=_.player,L=_.element;if(it.push(S),this.collectedEnterElements.length){let j=L[be];if(j&&j.setForMove){if(j.previousTriggersValues&&j.previousTriggersValues.has(_.triggerName)){let Ge=j.previousTriggersValues.get(_.triggerName),ne=this.statesByElement.get(_.element);if(ne&&ne.has(_.triggerName)){let Rt=ne.get(_.triggerName);Rt.value=Ge,ne.set(_.triggerName,Rt)}}S.destroy();return}}let ve=!h||!this.driver.containsElement(h,L),ee=K.get(L),ze=p.get(L),D=this._buildInstruction(_,t,ze,ee,ve);if(D.errors&&D.errors.length){ye.push(D);return}if(ve){S.onStart(()=>He(L,D.fromStyles)),S.onDestroy(()=>ge(L,D.toStyles)),n.push(S);return}if(_.isFallbackTransition){S.onStart(()=>He(L,D.fromStyles)),S.onDestroy(()=>ge(L,D.toStyles)),n.push(S);return}let wn=[];D.timelines.forEach(j=>{j.stretchStartingKeyframe=!0,this.disabledNodes.has(j.element)||wn.push(j)}),D.timelines=wn,t.append(L,D.timelines);let Hr={instruction:D,player:S,element:L};o.push(Hr),D.queriedElements.forEach(j=>Z(a,j,[]).push(S)),D.preStyleProps.forEach((j,Ge)=>{if(j.size){let ne=l.get(Ge);ne||l.set(Ge,ne=new Set),j.forEach((Rt,Si)=>ne.add(Si))}}),D.postStyleProps.forEach((j,Ge)=>{let ne=c.get(Ge);ne||c.set(Ge,ne=new Set),j.forEach((Rt,Si)=>ne.add(Si))})});if(ye.length){let u=[];ye.forEach(f=>{u.push(Ws(f.triggerName,f.errors))}),it.forEach(f=>f.destroy()),this.reportError(u)}let q=new Map,Y=new Map;o.forEach(u=>{let f=u.element;t.has(f)&&(Y.set(f,f),this._beforeAnimationBuild(u.player.namespaceId,u.instruction,q))}),n.forEach(u=>{let f=u.element;this._getPreviousPlayers(f,!1,u.namespaceId,u.triggerName,null).forEach(S=>{Z(q,f,[]).push(S),S.destroy()})});let Ke=T.filter(u=>cr(u,l,c)),nt=new Map;ar(nt,this.driver,R,c,_e).forEach(u=>{cr(u,l,c)&&Ke.push(u)});let qe=new Map;g.forEach((u,f)=>{ar(qe,this.driver,new Set(u),l,kt)}),Ke.forEach(u=>{let f=nt.get(u),_=qe.get(u);nt.set(u,new Map([...f?.entries()??[],..._?.entries()??[]]))});let wi=[],yn=[],vn={};o.forEach(u=>{let{element:f,player:_,instruction:S}=u;if(t.has(f)){if(m.has(f)){_.onDestroy(()=>ge(f,S.toStyles)),_.disabled=!0,_.overrideTotalTime(S.totalTime),n.push(_);return}let L=vn;if(Y.size>1){let ee=f,ze=[];for(;ee=ee.parentNode;){let D=Y.get(ee);if(D){L=D;break}ze.push(ee)}ze.forEach(D=>Y.set(D,L))}let ve=this._buildAnimation(_.namespaceId,S,q,r,qe,nt);if(_.setRealPlayer(ve),L===vn)wi.push(_);else{let ee=this.playersByElement.get(L);ee&&ee.length&&(_.parentPlayer=Fe(ee)),n.push(_)}}else He(f,S.fromStyles),_.onDestroy(()=>ge(f,S.toStyles)),yn.push(_),m.has(f)&&n.push(_)}),yn.forEach(u=>{let f=r.get(u.element);if(f&&f.length){let _=Fe(f);u.setRealPlayer(_)}}),n.forEach(u=>{u.parentPlayer?u.syncPlayerEvents(u.parentPlayer):u.destroy()});for(let u=0;u<T.length;u++){let f=T[u],_=f[be];if(ft(f,Jt),_&&_.hasAnimation)continue;let S=[];if(a.size){let ve=a.get(f);ve&&ve.length&&S.push(...ve);let ee=this.driver.query(f,ei,!0);for(let ze=0;ze<ee.length;ze++){let D=a.get(ee[ze]);D&&D.length&&S.push(...D)}}let L=S.filter(ve=>!ve.destroyed);L.length?Io(this,f,L):this.processLeaveNode(f)}return T.length=0,wi.forEach(u=>{this.players.push(u),u.onDone(()=>{u.destroy();let f=this.players.indexOf(u);this.players.splice(f,1)}),u.play()}),wi}afterFlush(i){this._flushFns.push(i)}afterFlushAnimationsDone(i){this._whenQuietFns.push(i)}_getPreviousPlayers(i,e,t,n,r){let o=[];if(e){let a=this.playersByQueriedElement.get(i);a&&(o=a)}else{let a=this.playersByElement.get(i);if(a){let l=!r||r==Mt;a.forEach(c=>{c.queued||!l&&c.triggerName!=n||o.push(c)})}}return(t||n)&&(o=o.filter(a=>!(t&&t!=a.namespaceId||n&&n!=a.triggerName))),o}_beforeAnimationBuild(i,e,t){let n=e.triggerName,r=e.element,o=e.isRemovalTransition?void 0:i,a=e.isRemovalTransition?void 0:n;for(let l of e.timelines){let c=l.element,m=c!==r,h=Z(t,c,[]);this._getPreviousPlayers(c,m,o,a,e.toState).forEach(g=>{let p=g.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),g.destroy(),h.push(g)})}He(r,e.fromStyles)}_buildAnimation(i,e,t,n,r,o){let a=e.triggerName,l=e.element,c=[],m=new Set,h=new Set,y=e.timelines.map(p=>{let b=p.element;m.add(b);let T=b[be];if(T&&T.removedBeforeQueried)return new Le(p.duration,p.delay);let O=b!==l,R=Oo((t.get(b)||No).map(q=>q.getRealPlayer())).filter(q=>{let Y=q;return Y.element?Y.element===b:!1}),K=r.get(b),B=o.get(b),it=zi(this._normalizer,p.keyframes,K,B),ye=this._buildPlayer(p,it,R);if(p.subTimeline&&n&&h.add(b),O){let q=new Dt(i,a,b);q.setRealPlayer(ye),c.push(q)}return ye});c.forEach(p=>{Z(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>Do(this.playersByQueriedElement,p.element,p))}),m.forEach(p=>de(p,Ki));let g=Fe(y);return g.onDestroy(()=>{m.forEach(p=>ft(p,Ki)),ge(l,e.toStyles)}),h.forEach(p=>{Z(n,p,[]).push(g)}),g}_buildPlayer(i,e,t){return e.length>0?this.driver.animate(i.element,e,i.duration,i.delay,i.easing,t):new Le(i.duration,i.delay)}};var Dt=class{namespaceId;triggerName;element;_player=new Le;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(i,e,t){this.namespaceId=i,this.triggerName=e,this.element=t}setRealPlayer(i){this._containsRealPlayer||(this._player=i,this._queuedCallbacks.forEach((e,t)=>{e.forEach(n=>$t(i,t,void 0,n))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(i.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(i){this.totalTime=i}syncPlayerEvents(i){let e=this._player;e.triggerCallback&&i.onStart(()=>e.triggerCallback(`start`)),i.onDone(()=>this.finish()),i.onDestroy(()=>this.destroy())}_queueEvent(i,e){Z(this._queuedCallbacks,i,[]).push(e)}onDone(i){this.queued&&this._queueEvent(`done`,i),this._player.onDone(i)}onStart(i){this.queued&&this._queueEvent(`start`,i),this._player.onStart(i)}onDestroy(i){this.queued&&this._queueEvent(`destroy`,i),this._player.onDestroy(i)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(i){this.queued||this._player.setPosition(i)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(i){let e=this._player;e.triggerCallback&&e.triggerCallback(i)}};function Do(s,i,e){let t=s.get(i);if(t){if(t.length){let n=t.indexOf(e);t.splice(n,1)}t.length==0&&s.delete(i)}return t}function Ao(s){return s??null}function ri(s){return s&&s.nodeType===1}function Po(s){return s==`start`||s==`done`}function or(s,i){let e=s.style.display;return s.style.display=i??`none`,e}function ar(s,i,e,t,n){let r=[];e.forEach(l=>r.push(or(l)));let o=[];t.forEach((l,c)=>{let m=new Map;l.forEach(h=>{let y=i.computeStyle(c,h,n);m.set(h,y),(!y||y.length==0)&&(c[be]=Co,o.push(c))}),s.set(c,m)});let a=0;return e.forEach(l=>or(l,r[a++])),o}function lr(s,i){let e=new Map;if(s.forEach(a=>e.set(a,[])),i.length==0)return e;let t=1,n=new Set(i),r=new Map;function o(a){if(!a)return t;let l=r.get(a);if(l)return l;let c=a.parentNode;return e.has(c)?l=c:n.has(c)?l=t:l=o(c),r.set(a,l),l}return i.forEach(a=>{let l=o(a);l!==t&&e.get(l).push(a)}),e}function de(s,i){s.classList?.add(i)}function ft(s,i){s.classList?.remove(i)}function Io(s,i,e){Fe(e).onDone(()=>s.processLeaveNode(i))}function Oo(s){let i=[];return fr(s,i),i}function fr(s,i){for(let e=0;e<s.length;e++){let t=s[e];t instanceof ht?fr(t.players,i):i.push(t)}}function Ro(s,i){let e=Object.keys(s),t=Object.keys(i);if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n];if(!Object.hasOwn(i,r)||s[r]!==i[r])return!1}return!0}function cr(s,i,e){let t=e.get(s);if(!t)return!1;let n=i.get(s);return n?t.forEach(r=>n.add(r)):i.set(s,t),e.delete(s),!0}var _t=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(i,e)=>{};constructor(i,e,t){this._driver=e,this._normalizer=t,this._transitionEngine=new an(i.body,e,t),this._timelineEngine=new rn(i.body,e,t),this._transitionEngine.onRemovalComplete=(n,r)=>this.onRemovalComplete(n,r)}registerTrigger(i,e,t,n,r){let o=i+`-`+n,a=this._triggerCache[o];if(!a){let l=[],m=mr(this._driver,r,l,[]);if(l.length)throw zs(n,l);a=wo(n,m,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(e,n,a)}register(i,e){this._transitionEngine.register(i,e)}destroy(i,e){this._transitionEngine.destroy(i,e)}onInsert(i,e,t,n){this._transitionEngine.insertNode(i,e,t,n)}onRemove(i,e,t){this._transitionEngine.removeNode(i,e,t)}disableAnimations(i,e){this._transitionEngine.markElementAsDisabled(i,e)}process(i,e,t,n){if(t.charAt(0)==`@`){let[r,o]=Bi(t),a=n;this._timelineEngine.command(r,e,o,a)}else this._transitionEngine.trigger(i,e,t,n)}listen(i,e,t,n,r){if(t.charAt(0)==`@`){let[o,a]=Bi(t);return this._timelineEngine.listen(o,e,a,r)}return this._transitionEngine.listen(i,e,t,n,r)}flush(i=-1){this._transitionEngine.flush(i)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(i){this._transitionEngine.afterFlushAnimationsDone(i)}};function Lo(s,i){let e=null,t=null;return Array.isArray(i)&&i.length?(e=$i(i[0]),i.length>1&&(t=$i(i[i.length-1]))):i instanceof Map&&(e=$i(i)),e||t?new Fo(s,e,t):null}var Fo=(()=>{class s{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,t,n){this._element=e,this._startStyles=t,this._endStyles=n;let r=s.initialStylesByElement.get(e);r||s.initialStylesByElement.set(e,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&ge(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(ge(this._element,this._initialStyles),this._endStyles&&(ge(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(s.initialStylesByElement.delete(this._element),this._startStyles&&(He(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(He(this._element,this._endStyles),this._endStyles=null),ge(this._element,this._initialStyles),this._state=3)}}return s})();function $i(s){let i=null;return s.forEach((e,t)=>{zo(t)&&(i=i||new Map,i.set(t,e))}),i}function zo(s){return s===`display`||s===`position`}var hi=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(i,e,t,n){this.element=i,this.keyframes=e,this.options=t,this._specialStyles=n,this._duration=t.duration,this._delay=t.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let i=this.keyframes,e=this._triggerWebAnimation(this.element,i,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=i.length?i[i.length-1]:new Map;let t=()=>this._onFinish();return e.addEventListener(`finish`,t),this.onDestroy(()=>{e.removeEventListener(`finish`,t)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(i){let e=[];return i.forEach(t=>{e.push(Object.fromEntries(t))}),e}_triggerWebAnimation(i,e,t){let n=this._convertKeyframesToObject(e);try{return i.animate(n,t)}catch{return null}}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}play(){let i=this._buildPlayer();i&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),i.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}setPosition(i){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=i*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let i=new Map;this.hasStarted()&&this._finalKeyframe.forEach((t,n)=>{n!==`offset`&&i.set(n,this._finished?t:ii(this.element,n))}),this.currentSnapshot=i}triggerCallback(i){let e=i===`start`?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}};var ui=class{validateStyleProperty(i){return!0}validateAnimatableStyleProperty(i){return!0}containsElement(i,e){return ji(i,e)}getParentElement(i){return Zt(i)}query(i,e,t){return Vi(i,e,t)}computeStyle(i,e,t){return ii(i,e)}animate(i,e,t,n,r,o=[]){let l={duration:t,delay:n,fill:n==0?`both`:`forwards`};r&&(l.easing=r);let c=new Map,m=o.filter(g=>g instanceof hi);Zs(t,n)&&m.forEach(g=>{g.currentSnapshot.forEach((p,b)=>c.set(b,p))});let h=$s(e).map(g=>new Map(g));h=Js(i,h,c);let y=Lo(i,h);return new hi(i,h,l,y)}};var oi=`@`;var _r=`@.disabled`;var pi=class{namespaceId;delegate;engine;_onDestroy;ɵtype=0;constructor(i,e,t,n){this.namespaceId=i,this.delegate=e,this.engine=t,this._onDestroy=n}get data(){return this.delegate.data}destroyNode(i){this.delegate.destroyNode?.(i)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}appendChild(i,e){this.delegate.appendChild(i,e),this.engine.onInsert(this.namespaceId,e,i,!1)}insertBefore(i,e,t,n=!0){this.delegate.insertBefore(i,e,t),this.engine.onInsert(this.namespaceId,e,i,n)}removeChild(i,e,t,n){if(n){this.delegate.removeChild(i,e,t,n);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,n){this.delegate.setAttribute(i,e,t,n)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,n){this.delegate.setStyle(i,e,t,n)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){e.charAt(0)==oi&&e==_r?this.disableAnimations(i,!!t):this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,n){return this.delegate.listen(i,e,t,n)}disableAnimations(i,e){this.engine.disableAnimations(i,e)}};var ln=class extends pi{factory;constructor(i,e,t,n,r){super(e,t,n,r),this.factory=i,this.namespaceId=e}setProperty(i,e,t){e.charAt(0)==oi?e.charAt(1)==`.`&&e==_r?(t=t===void 0?!0:!!t,this.disableAnimations(i,t)):this.engine.process(this.namespaceId,i,e.slice(1),t):this.delegate.setProperty(i,e,t)}listen(i,e,t,n){if(e.charAt(0)==oi){let r=Bo(i),o=e.slice(1),a=``;return o.charAt(0)!=oi&&([o,a]=jo(o)),this.engine.listen(this.namespaceId,r,o,a,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,t,l)})}return this.delegate.listen(i,e,t,n)}};function Bo(s){switch(s){case`body`:return document.body;case`document`:return document;case`window`:return window;default:return s}}function jo(s){let i=s.indexOf(`.`);return[s.substring(0,i),s.slice(i+1)]}var fi=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(i,e,t){this.delegate=i,this.engine=e,this._zone=t,e.onRemovalComplete=(n,r)=>{r?.removeChild(null,n)}}createRenderer(i,e){let n=this.delegate.createRenderer(i,e);if(!i||!e?.data?.animation){let c=this._rendererCache,m=c.get(n);if(!m){let h=()=>c.delete(n);m=new pi(``,n,this.engine,h),c.set(n,m)}return m}let r=e.id,o=e.id+`-`+this._currentId;this._currentId++,this.engine.register(o,i);let a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(r,o,i,c.name,c)};return e.data.animation.forEach(a),new ln(this,o,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(i,e,t){if(i>=0&&i<this._microtaskId){this._zone.run(()=>e(t));return}let n=this._animationCallbacksBuffer;n.length==0&&queueMicrotask(()=>{this._zone.run(()=>{n.forEach(r=>{let[o,a]=r;o(a)}),this._animationCallbacksBuffer=[]})}),n.push([e,t])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(i){this.engine.flush(),this.delegate.componentReplaced?.(i)}};var Qo=(()=>{class s extends _t{constructor(e,t,n){super(e,t,n)}ngOnDestroy(){this.flush()}static ɵfac=function(t){return new(t||s)(b$1(Z$6),b$1(et),b$1(tt))};static ɵprov=_$2({token:s,factory:s.ɵfac})}return s})();function Ho(){return new ai}function Ko(){return new fi(p(gf),p(_t),p(se))}var gr=[{provide:tt,useFactory:Ho},{provide:_t,useClass:Qo},{provide:Kn$1,useFactory:Ko}];[...gr];var qo=[{provide:et,useFactory:()=>new ui},{provide:cl,useFactory:()=>`BrowserAnimations`},...gr];function br(){return Lt$4(`NgEagerAnimations`),[...qo]}var yr=()=>{let s=p(MD),i=p($t$2);return s.isAuthenticated()?!0:i.createUrlTree([`/login`])};function vr(s){return()=>{let i=p(MD),e=p($t$2);return i.isAuthenticated()?i.requiresRole(s)?!0:e.createUrlTree([`/dashboard`]):e.createUrlTree([`/login`])}}var gi=[`*`];var Go=[`content`];var wr=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`];var Sr=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function Uo(s,i){if(s&1){let e=hS();ba$1(0,`div`,1),Ua$1(`click`,function(){wp(e);return Ip(mS()._onBackdropClicked())}),Wd()}if(s&2)Ov(`mat-drawer-shown`,mS()._isShowingBackdrop())}function Wo(s,i){s&1&&(ba$1(0,`mat-drawer-content`),DS(1,2),Wd())}function Yo(s,i){if(s&1){let e=hS();ba$1(0,`div`,1),Ua$1(`click`,function(){wp(e);return Ip(mS()._onBackdropClicked())}),Wd()}if(s&2)Ov(`mat-drawer-shown`,mS()._isShowingBackdrop())}function $o(s,i){s&1&&(ba$1(0,`mat-sidenav-content`),DS(1,2),Wd())}var Xo=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Zo=new D$2(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var un=new D$2(`MAT_DRAWER_CONTAINER`);var At=(()=>{class s extends Jn$1{_platform=p(ND);_changeDetectorRef=p(pi$1);_element=p(Ot$5);_ngZone=p(se);_isInert=!1;_container=p(hn);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(cE(50),Ne$3(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute(`inert`,`true`):t.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!==`over`&&e.opened||t!=null&&t.mode!==`over`&&t.opened}static ɵfac=(()=>{let e;return function(n){return(e||(e=Wg(s)))(n||s)}})();static ɵcmp=Vd({type:s,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(t,n){t&2&&(xv(`margin-left`,n._container._contentMargins.left,`px`)(`margin-right`,n._container._contentMargins.right,`px`),Ov(`mat-drawer-content-hidden`,n._shouldBeHidden()))},features:[Wv([{provide:Jn$1,useExisting:s}]),gv],ngContentSelectors:gi,decls:1,vars:0,template:function(t,n){t&1&&(yS(),DS(0))},encapsulation:2})}return s})();var mn=(()=>{class s{_elementRef=p(Ot$5);_focusTrapFactory=p(dn$2);_focusMonitor=p(Tt$4);_platform=p(ND);_ngZone=p(se);_renderer=p(Xn$2);_interactivityChecker=p(Ie$1);_doc=p(Z$6);_isAnimating=!1;_container=p(un,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Bo$1(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=Bo$1(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Bo$1(e))}_opened=V$3(!1);_openedVia=null;_animationStarted=new z$4;_animationEnd=new z$4;openedChange=new de$3(!0);_openedStream=this.openedChange.pipe(Me$4(e=>e),F$2(()=>{}));openedStart=this._animationStarted.pipe(Me$4(()=>this.opened),Qc(void 0));_closedStream=this.openedChange.pipe(Me$4(e=>!e),F$2(()=>{}));closedStart=this._animationStarted.pipe(Me$4(()=>!this.opened),Qc(void 0));_destroyed=new z$4;onPositionChanged=new de$3;_content;_modeChanged=new z$4;_injector=p(be$3);_changeDetectorRef=p(pi$1);constructor(){this.openedChange.pipe(bn$2(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,`keydown`,n=>{n.keyCode===27&&!this.disableClose&&!Ce$1(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,`transitionend`,this._handleTransitionEvent),e.listen(t,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),n.removeAttribute(`tabindex`)},o=this._renderer.listen(n,`blur`,r),a=this._renderer.listen(n,`mousedown`,r)})),n.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:vd(()=>{let t=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(t)&&typeof e.focus==`function`&&e.focus(t)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(Ne$3(1)).subscribe(o=>r(o?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(t){return new(t||s)};static ɵcmp=Vd({type:s,selectors:[[`mat-drawer`]],viewQuery:function(t,n){if(t&1&&_v(Go,5),t&2){let r;Kd(r=Xd())&&(n._content=r.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(t,n){t&2&&(di$1(`align`,null)(`tabIndex`,n.mode!==`side`?`-1`:null),xv(`visibility`,!n._container&&!n.opened?`hidden`:null),Ov(`mat-drawer-end`,n.position===`end`)(`mat-drawer-over`,n.mode===`over`)(`mat-drawer-push`,n.mode===`push`)(`mat-drawer-side`,n.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:gi,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(t,n){t&1&&(yS(),ba$1(0,`div`,1,0),DS(2),Wd())},dependencies:[Jn$1],encapsulation:2})}return s})();var hn=(()=>{class s{_dir=p(SN,{optional:!0});_element=p(Ot$5);_ngZone=p(se);_changeDetectorRef=p(pi$1);_animationDisabled=TG();_transitionsEnabled=!1;_allDrawers;_drawers=new da$1;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Bo$1(e)}_autosize=p(Zo);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Bo$1(e)}_backdropOverride=null;backdropClick=new de$3;_start=null;_end=null;_left=null;_right=null;_destroyed=new z$4;_doCheckSubject=new z$4;_contentMargins={left:null,right:null};_contentMarginChanges=new z$4;get scrollable(){return this._userContent||this._content}_injector=p(be$3);constructor(){let e=p(ND),t=p(re);this._dir?.change.pipe(bn$2(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(bn$2(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Io$1(this._allDrawers),bn$2(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Io$1(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Yc(10),bn$2(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode==`side`)t+=this._right._getWidth();else if(this._right.mode==`push`){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(bn$2(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(bn$2(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(bn$2(this._drawers.changes)).subscribe(()=>{vd({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(bn$2(sE(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n=`mat-drawer-container-has-open`;e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(t){return new(t||s)};static ɵcmp=Vd({type:s,selectors:[[`mat-drawer-container`]],contentQueries:function(t,n,r){if(t&1&&Ba$1(r,At,5)(r,mn,5),t&2){let o;Kd(o=Xd())&&(n._content=o.first),Kd(o=Xd())&&(n._allDrawers=o)}},viewQuery:function(t,n){if(t&1&&_v(At,5),t&2){let r;Kd(r=Xd())&&(n._userContent=r.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(t,n){t&2&&Ov(`mat-drawer-container-explicit-backdrop`,n._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[Wv([{provide:un,useExisting:s}])],ngContentSelectors:Sr,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(t,n){t&1&&(yS(wr),oS(0,Uo,1,2,`div`,0),DS(1),DS(2,1),oS(3,Wo,2,0,`mat-drawer-content`)),t&2&&(iS(n.hasBackdrop?0:-1),cC(3),iS(n._content?-1:3))},dependencies:[At],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return s})();var _i=(()=>{class s extends At{static ɵfac=(()=>{let e;return function(n){return(e||(e=Wg(s)))(n||s)}})();static ɵcmp=Vd({type:s,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[Wv([{provide:Jn$1,useExisting:s},{provide:At,useExisting:s}]),gv],ngContentSelectors:gi,decls:1,vars:0,template:function(t,n){t&1&&(yS(),DS(0))},encapsulation:2})}return s})();var pn=(()=>{class s extends mn{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Bo$1(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=At$4(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=At$4(e)}_fixedBottomGap=0;static ɵfac=(()=>{let e;return function(n){return(e||(e=Wg(s)))(n||s)}})();static ɵcmp=Vd({type:s,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(t,n){t&2&&(di$1(`tabIndex`,n.mode!==`side`?`-1`:null)(`align`,null),xv(`top`,n.fixedInViewport?n.fixedTopGap:null,`px`)(`bottom`,n.fixedInViewport?n.fixedBottomGap:null,`px`),Ov(`mat-drawer-end`,n.position===`end`)(`mat-drawer-over`,n.mode===`over`)(`mat-drawer-push`,n.mode===`push`)(`mat-drawer-side`,n.mode===`side`)(`mat-sidenav-fixed`,n.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[Wv([{provide:mn,useExisting:s}]),gv],ngContentSelectors:gi,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(t,n){t&1&&(yS(),ba$1(0,`div`,1,0),DS(2),Wd())},dependencies:[Jn$1],encapsulation:2})}return s})();var kr=(()=>{class s extends hn{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let e;return function(n){return(e||(e=Wg(s)))(n||s)}})();static ɵcmp=Vd({type:s,selectors:[[`mat-sidenav-container`]],contentQueries:function(t,n,r){if(t&1&&Ba$1(r,_i,5)(r,pn,5),t&2){let o;Kd(o=Xd())&&(n._content=o.first),Kd(o=Xd())&&(n._allDrawers=o)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(t,n){t&2&&Ov(`mat-drawer-container-explicit-backdrop`,n._backdropOverride)},exportAs:[`matSidenavContainer`],features:[Wv([{provide:un,useExisting:s},{provide:hn,useExisting:s}]),gv],ngContentSelectors:Sr,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(t,n){t&1&&(yS(wr),oS(0,Yo,1,2,`div`,0),DS(1),DS(2,1),oS(3,$o,2,0,`mat-sidenav-content`)),t&2&&(iS(n.hasBackdrop?0:-1),cC(3),iS(n._content?-1:3))},dependencies:[_i],styles:[Xo],encapsulation:2})}return s})();var xr=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=nr$2({type:s});static ɵinj=en$4({imports:[Ne$1,fG,Ne$1]})}return s})();var ea=[`*`,[[`mat-toolbar-row`]]];var ta=[`*`,`mat-toolbar-row`];var ia=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵdir=Ft$4({type:s,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return s})();var Er=(()=>{class s{_elementRef=p(Ot$5);_platform=p(ND);_document=p(Z$6);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(t){return new(t||s)};static ɵcmp=Vd({type:s,selectors:[[`mat-toolbar`]],contentQueries:function(t,n,r){if(t&1&&Ba$1(r,ia,5),t&2){let o;Kd(o=Xd())&&(n._toolbarRows=o)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(t,n){t&2&&(OS(n.color?`mat-`+n.color:``),Ov(`mat-toolbar-multiple-rows`,n._toolbarRows.length>0)(`mat-toolbar-single-row`,n._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:ta,decls:2,vars:0,template:function(t,n){t&1&&(yS(ea),DS(0),DS(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return s})();var Tr=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=nr$2({type:s});static ɵinj=en$4({imports:[fG]})}return s})();var la=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var ca=[`mat-icon, [matMenuItemIcon]`,`*`];function da(s,i){s&1&&(kp(),ba$1(0,`svg`,2),ja$1(1,`polygon`,3),Wd())}var ma=[`*`];function ha(s,i){if(s&1){let e=hS();qd(0,`div`,0),Tv(`click`,function(){wp(e);return Ip(mS().closed.emit(`click`))})(`animationstart`,function(n){wp(e);return Ip(mS()._onAnimationStart(n.animationName))})(`animationend`,function(n){wp(e);return Ip(mS()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){wp(e);return Ip(mS()._onAnimationDone(n.animationName))}),qd(1,`div`,1),DS(2),Zd()()}if(s&2){let e=mS();OS(e._classList),Ov(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),bv(`id`,e.panelId),di$1(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var _n=new D$2(`MAT_MENU_PANEL`);var It=(()=>{class s{_elementRef=p(Ot$5);_document=p(Z$6);_focusMonitor=p(Tt$4);_parentMenu=p(_n,{optional:!0});_changeDetectorRef=p(pi$1);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new z$4;_focused=new z$4;_highlighted=!1;_triggersSubmenu=!1;constructor(){p(w$2).load(Ke$3),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||s)};static ɵcmp=Vd({type:s,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&Ua$1(`click`,function(o){return n._checkDisabled(o)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(di$1(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),Ov(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Wa$1],disableRipple:[2,`disableRipple`,`disableRipple`,Wa$1]},exportAs:[`matMenuItem`],ngContentSelectors:ca,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(yS(la),DS(0),ba$1(1,`span`,0),DS(2,1),Wd(),ja$1(3,`div`,1),oS(4,da,2,0,`:svg:svg`,2)),t&2&&(cC(3),Ev(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),cC(),iS(n._triggersSubmenu?4:-1))},dependencies:[qo$1],encapsulation:2})}return s})();var ua=new D$2(`MatMenuContent`);var pa=new D$2(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var fn=`_mat-menu-enter`;var bi=`_mat-menu-exit`;var bt=(()=>{class s{_elementRef=p(Ot$5);_changeDetectorRef=p(pi$1);_injector=p(be$3);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=TG();_allItems;_directDescendantItems=new da$1;_classList={};_panelAnimationState=`void`;_animationDone=new z$4;_isAnimating=V$3(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=m$2({},this._classList);t&&t.length&&t.split(` `).forEach(r=>{n[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(r=>{n[r]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new de$3;close=this.closed;panelId=p(Ct$3).getId(`mat-menu-panel-`);constructor(){let e=p(pa);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new kt$4(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Io$1(this._directDescendantItems),Ae$2(e=>sE(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Io$1(this._directDescendantItems),Ae$2(t=>sE(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Ce$1(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=vd(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=P$2(m$2({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===bi;(t||e===fn)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===fn||e===bi)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(bi),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?fn:bi)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Io$1(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||s)};static ɵcmp=Vd({type:s,selectors:[[`mat-menu`]],contentQueries:function(t,n,r){if(t&1&&Ba$1(r,ua,5)(r,It,5)(r,It,4),t&2){let o;Kd(o=Xd())&&(n.lazyContent=o.first),Kd(o=Xd())&&(n._allItems=o),Kd(o=Xd())&&(n.items=o)}},viewQuery:function(t,n){if(t&1&&_v(Vr$1,5),t&2){let r;Kd(r=Xd())&&(n.templateRef=r.first)}},hostVars:3,hostBindings:function(t,n){t&2&&di$1(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Wa$1],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:Wa$1(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[Wv([{provide:_n,useExisting:s}])],ngContentSelectors:ma,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(yS(),yv(0,ha,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return s})();var fa=new D$2(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let s=p(be$3);return()=>Fe$2(s)}});var gt=new WeakMap;var _a=(()=>{class s{_canHaveBackdrop;_element=p(Ot$5);_viewContainerRef=p(fn$2);_menuItemInstance=p(It,{optional:!0,self:!0});_dir=p(SN,{optional:!0});_focusMonitor=p(Tt$4);_ngZone=p(se);_injector=p(be$3);_scrollStrategy=p(fa);_changeDetectorRef=p(pi$1);_animationsDisabled=TG();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=re$1.EMPTY;_menuCloseSubscription=re$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=p(_n,{optional:!0});this._parentMaterialMenu=t instanceof bt?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&gt.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=gt.get(t);gt.set(t,this),n&&n!==this&&n._closeMenu();let r=this._createOverlay(t),o=r.getConfig(),a=o.positionStrategy;this._setPosition(t,a),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof bt&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(bn$2(t.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof bt&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Ne$3(1)).subscribe(()=>{t.detach(),gt.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&gt.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=It$2(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof bt&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new De$1({positionStrategy:At$2(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let r=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(r,o)})})}_setPosition(e,t){let[n,r]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,a]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,c]=[o,a],[m,h]=[n,r],y=0;if(this._triggersSubmenu()){if(h=n=e.xPosition===`before`?`start`:`end`,r=m=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let g=this._parentMaterialMenu.items.first;this._parentInnerPadding=g?g._getHostElement().offsetTop:0}y=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=o===`top`?`bottom`:`top`,c=a===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:m,overlayY:o,offsetY:y},{originX:r,originY:l,overlayX:h,overlayY:o,offsetY:y},{originX:n,originY:c,overlayX:m,overlayY:a,offsetY:-y},{originX:r,originY:c,overlayX:h,overlayY:a,offsetY:-y}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return sE(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:k$2(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Me$4(o=>this._menuOpen&&o!==this._menuItemInstance)):k$2(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ee$1(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return gt.get(e)===this}_triggerIsAriaDisabled(){return Wa$1(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){Od()};static ɵdir=Ft$4({type:s})}return s})();var Cr=(()=>{class s extends _a{_cleanupTouchstart;_hoverSubscription=re$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new de$3;onMenuOpen=this.menuOpened;menuClosed=new de$3;onMenuClose=this.menuClosed;constructor(){super(!0);let e=p(Xn$2);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{K$2(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){V$2(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||s)};static ɵdir=Ft$4({type:s,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Ua$1(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),t&2&&di$1(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[gv]})}return s})();var Dr=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=nr$2({type:s});static ɵinj=en$4({imports:[Ze$4,Lt$1,fG,Ne$1]})}return s})();var Ar=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=nr$2({type:s});static ɵinj=en$4({imports:[fG]})}return s})();var ba=[`unscopedContent`];var ya=[`text`];var va=[[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]],[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[``,`matListItemMeta`,``]],[[`mat-divider`]]];var wa=[`[matListItemAvatar],[matListItemIcon]`,`[matListItemTitle]`,`[matListItemLine]`,`*`,`[matListItemMeta]`,`mat-divider`];var Sa=new D$2(`ListOption`);var ka=(()=>{class s{_elementRef=p(Ot$5);static ɵfac=function(t){return new(t||s)};static ɵdir=Ft$4({type:s,selectors:[[``,`matListItemTitle`,``]],hostAttrs:[1,`mat-mdc-list-item-title`,`mdc-list-item__primary-text`]})}return s})();var xa=(()=>{class s{_elementRef=p(Ot$5);static ɵfac=function(t){return new(t||s)};static ɵdir=Ft$4({type:s,selectors:[[``,`matListItemLine`,``]],hostAttrs:[1,`mat-mdc-list-item-line`,`mdc-list-item__secondary-text`]})}return s})();var Ea=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵdir=Ft$4({type:s,selectors:[[``,`matListItemMeta`,``]],hostAttrs:[1,`mat-mdc-list-item-meta`,`mdc-list-item__end`]})}return s})();var Pr=(()=>{class s{_listOption=p(Sa,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()===`after`}static ɵfac=function(t){return new(t||s)};static ɵdir=Ft$4({type:s,hostVars:4,hostBindings:function(t,n){t&2&&Ov(`mdc-list-item__start`,n._isAlignedAtStart())(`mdc-list-item__end`,!n._isAlignedAtStart())}})}return s})();var Ta=(()=>{class s extends Pr{static ɵfac=(()=>{let e;return function(n){return(e||(e=Wg(s)))(n||s)}})();static ɵdir=Ft$4({type:s,selectors:[[``,`matListItemAvatar`,``]],hostAttrs:[1,`mat-mdc-list-item-avatar`],features:[gv]})}return s})();var Ma=(()=>{class s extends Pr{static ɵfac=(()=>{let e;return function(n){return(e||(e=Wg(s)))(n||s)}})();static ɵdir=Ft$4({type:s,selectors:[[``,`matListItemIcon`,``]],hostAttrs:[1,`mat-mdc-list-item-icon`],features:[gv]})}return s})();var Na=new D$2(`MAT_LIST_CONFIG`);var Ca=(()=>{class s{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Bo$1(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Bo$1(e))}_disabled=V$3(!1);_defaultOptions=p(Na,{optional:!0});static ɵfac=function(t){return new(t||s)};static ɵdir=Ft$4({type:s,hostVars:1,hostBindings:function(t,n){t&2&&di$1(`aria-disabled`,n.disabled)},inputs:{disableRipple:`disableRipple`,disabled:`disabled`}})}return s})();var Da=(()=>{class s{_elementRef=p(Ot$5);_ngZone=p(se);_listBase=p(Ca,{optional:!0});_platform=p(ND);_hostElement;_isButtonElement;_noopAnimations=TG();_avatars;_icons;set lines(e){this._explicitLines=At$4(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Bo$1(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Bo$1(e))}_disabled=V$3(!1);_subscriptions=new re$1;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){p(w$2).load(Ke$3);let e=p(Pt$2,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()===`button`,this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute(`type`)&&this._hostElement.setAttribute(`type`,`button`)}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add(`mat-mdc-list-item-interactive`),this._rippleRenderer=new Y$3(this,this._ngZone,this._hostElement,this._platform,p(be$3)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(sE(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle(`mat-mdc-list-item-single-line`,t<=1),this._hostElement.classList.toggle(`mdc-list-item--with-one-line`,t<=1),this._hostElement.classList.toggle(`mdc-list-item--with-two-lines`,t===2),this._hostElement.classList.toggle(`mdc-list-item--with-three-lines`,t===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&t===1;n.classList.toggle(`mdc-list-item__primary-text`,r),n.classList.toggle(`mdc-list-item__secondary-text`,!r)}else n.classList.remove(`mdc-list-item__primary-text`),n.classList.remove(`mdc-list-item__secondary-text`)}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static ɵfac=function(t){return new(t||s)};static ɵdir=Ft$4({type:s,contentQueries:function(t,n,r){if(t&1&&Ba$1(r,Ta,4)(r,Ma,4),t&2){let o;Kd(o=Xd())&&(n._avatars=o),Kd(o=Xd())&&(n._icons=o)}},hostVars:4,hostBindings:function(t,n){t&2&&(di$1(`aria-disabled`,n.disabled)(`disabled`,n._isButtonElement&&n.disabled||null),Ov(`mdc-list-item--disabled`,n.disabled))},inputs:{lines:`lines`,disableRipple:`disableRipple`,disabled:`disabled`}})}return s})();var Ir=(()=>{class s extends Da{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Bo$1(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName===`A`&&this._activated?`page`:null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Wg(s)))(n||s)}})();static ɵcmp=Vd({type:s,selectors:[[`mat-list-item`],[`a`,`mat-list-item`,``],[`button`,`mat-list-item`,``]],contentQueries:function(t,n,r){if(t&1&&Ba$1(r,xa,5)(r,ka,5)(r,Ea,5),t&2){let o;Kd(o=Xd())&&(n._lines=o),Kd(o=Xd())&&(n._titles=o),Kd(o=Xd())&&(n._meta=o)}},viewQuery:function(t,n){if(t&1&&_v(ba,5)(ya,5),t&2){let r;Kd(r=Xd())&&(n._unscopedContent=r.first),Kd(r=Xd())&&(n._itemText=r.first)}},hostAttrs:[1,`mat-mdc-list-item`,`mdc-list-item`],hostVars:13,hostBindings:function(t,n){t&2&&(di$1(`aria-current`,n._getAriaCurrent()),Ov(`mdc-list-item--activated`,n.activated)(`mdc-list-item--with-leading-avatar`,n._avatars.length!==0)(`mdc-list-item--with-leading-icon`,n._icons.length!==0)(`mdc-list-item--with-trailing-meta`,n._meta.length!==0)(`mat-mdc-list-item-both-leading-and-trailing`,n._hasBothLeadingAndTrailing())(`_mat-animation-noopable`,n._noopAnimations))},inputs:{activated:`activated`},exportAs:[`matListItem`],features:[gv],ngContentSelectors:wa,decls:10,vars:0,consts:[[`unscopedContent`,``],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mat-focus-indicator`]],template:function(t,n){t&1&&(yS(va),DS(0),ba$1(1,`span`,1),DS(2,1),DS(3,2),ba$1(4,`span`,2,0),Ua$1(`cdkObserveContent`,function(){return n._updateItemLines(!0)}),DS(6,3),Wd()(),DS(7,4),DS(8,5),ja$1(9,`div`,3))},dependencies:[ha$1],encapsulation:2})}return s})();var Or=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=nr$2({type:s});static ɵinj=en$4({imports:[xe,Ze$4,dn$1,fG,Ar]})}return s})();var Pa=[`tooltip`];var Ia=20;var Oa=new D$2(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let s=p(be$3);return()=>Fe$2(s,{scrollThrottle:Ia})}});var Ra=new D$2(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Rr=`tooltip-panel`;var La={passive:!0};var Fa=8;var za=8;var Ba=24;var ja=200;var gn=(()=>{class s{_elementRef=p(Ot$5);_ngZone=p(se);_platform=p(ND);_ariaDescriber=p(vo$1);_focusMonitor=p(Tt$4);_dir=p(SN);_injector=p(be$3);_viewContainerRef=p(fn$2);_mediaMatcher=p(Fc);_document=p(Z$6);_renderer=p(Xn$2);_animationsDisabled=TG();_defaultOptions=p(Ra,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Lr;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Bo$1(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Bo$1(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=At$4(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=At$4(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new z$4;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Fa}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(bn$2(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new kt$2(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=n.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(bn$2(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof Ot$5)return this._overlayRef;this._detach()}let t=this._injector.get(Re).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${Rr}`,r=At$2(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return r.positionChanges.pipe(bn$2(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=It$2(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(Oa)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(bn$2(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(bn$2(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(bn$2(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(bn$2(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(m$2(m$2({},n.main),r.main)),this._addOffset(m$2(m$2({},n.fallback),r.fallback))])}_addOffset(e){let t=za,n=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=n?-t:t:e.originX===`end`&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`||t==`below`?n={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={originX:`end`,originY:`center`});let{x:r,y:o}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:r,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`?n={overlayX:`center`,overlayY:`bottom`}:t==`below`?n={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={overlayX:`start`,overlayY:`center`});let{x:r,y:o}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:r,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),vd(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:r}=e,o;if(t===`center`?this._dir&&this._dir.value===`rtl`?o=n===`end`?`left`:`right`:o=n===`start`?`left`:`right`:o=t===`bottom`&&r===`top`?`above`:`below`,o!==this._currentPosition){let a=this._overlayRef;if(a){let l=`${this._cssClassPrefix}-${Rr}-`;a.removePanelClass(l+this._currentPosition),a.addPanelClass(l+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,La))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,n=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(n.webkitUserDrag=`none`),n.touchAction=`none`,n.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||vd({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!Ce$1(e):!0;static ɵfac=function(t){return new(t||s)};static ɵdir=Ft$4({type:s,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,n){t&2&&Ov(`mat-mdc-tooltip-disabled`,n.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return s})();var Lr=(()=>{class s{_changeDetectorRef=p(pi$1);_elementRef=p(Ot$5);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=TG();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new z$4;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Ba&&e.width>=ja}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:n),t.classList.add(e?n:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let o=getComputedStyle(t);(o.getPropertyValue(`animation-duration`)===`0s`||o.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||s)};static ɵcmp=Vd({type:s,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,n){if(t&1&&_v(Pa,7),t&2){let r;Kd(r=Xd())&&(n._tooltip=r.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,n){t&1&&Ua$1(`mouseleave`,function(o){return n._handleMouseLeave(o)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,n){t&1&&(qd(0,`div`,1,0),Tv(`animationend`,function(o){return n._handleAnimationEnd(o)}),qd(2,`div`,2),zS(3),Zd()()),t&2&&(OS(n.tooltipClass),Ov(`mdc-tooltip--multiline`,n._isMultiline),cC(3),Bv(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return s})();var Fr=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=nr$2({type:s});static ɵinj=en$4({imports:[un$2,Lt$1,fG,Ne$1]})}return s})();var Ha=s=>({exact:s});var Ka=(s,i)=>i.path;var qa=(s,i)=>i._id;function Ga(s,i){if(s&1&&(ba$1(0,`a`,14)(1,`mat-icon`,28),zS(2),Wd(),ba$1(3,`span`),zS(4),Wd()()),s&2){let e=i.$implicit;Ev(`routerLink`,e.path)(`routerLinkActiveOptions`,eT(4,Ha,e.path===`/dashboard`)),cC(2),Bv(e.icon),cC(2),Bv(e.label)}}function Ua(s,i){if(s&1&&(ba$1(0,`div`,6)(1,`span`,29),zS(2),Wd(),ba$1(3,`div`,30)(4,`p`,31),zS(5),Wd(),ba$1(6,`p`,32),zS(7),Wd()()()),s&2){let e=i;cC(2),Jd(` `,(e.name||e.email).slice(0,1),` `),cC(3),Bv(e.name||e.email),cC(2),Bv(e.role)}}function Wa(s,i){if(s&1&&(ba$1(0,`mat-option`,34),zS(1),Wd()),s&2){let e=i.$implicit;Ev(`value`,e._id),cC(),Bv(e.name)}}function Ya(s,i){if(s&1){let e=hS();ba$1(0,`mat-select`,33),Ua$1(`selectionChange`,function(n){wp(e);return Ip(mS().onSiteChange(n.value))}),sS(1,Wa,2,2,`mat-option`,34,qa),Wd()}if(s&2){let e=mS();Ev(`value`,e.selectedSiteId()),cC(),aS(e.sitesList())}}var Ot=[`owner`,`installer`,`viewer`];var zr=[{path:`login`,loadComponent:()=>import(`./chunk-CwjgMxEc.js`).then(s=>s.LoginComponent)},{path:``,component:class s{router=p($t$2);auth=p(MD);sites=p(m);realtime=p(ht$1);ngOnInit(){this.sites.refresh()}navItems=[{path:`/dashboard`,label:`Dashboard`,icon:`dashboard`,roles:Ot},{path:`/inverters`,label:`Inverters`,icon:`solar_power`,roles:Ot},{path:`/batteries`,label:`Batteries`,icon:`battery_charging_full`,roles:Ot},{path:`/analytics`,label:`Analytics`,icon:`insights`,roles:Ot},{path:`/alerts`,label:`Alerts`,icon:`notification_important`,roles:Ot},{path:`/sites`,label:`Site management`,icon:`business`,roles:[`owner`,`installer`]}];visibleNav=Et$5(()=>{let i=this.auth.role();return this.navItems.filter(e=>e.roles.includes(i??`viewer`))});currentTitle=V$3(`Dashboard`);selectedSiteId=Et$5(()=>this.sites.selectedSiteId());sitesList=Et$5(()=>this.sites.sites());statusText=Et$5(()=>{switch(this.realtime.status()){case`connected`:return this.realtime.isLive()?`Live`:`Recovering…`;case`stale`:return`Stale`;case`connecting`:return`Connecting…`;case`error`:return`Connection error`;default:return`Offline`}});statusTone=Et$5(()=>{switch(this.realtime.status()){case`connected`:return this.realtime.isLive()?`ok`:`warn`;case`stale`:return`warn`;case`connecting`:return`idle`;default:return`bad`}});statusLabel=Et$5(()=>`Live sensor data: ${this.statusText()}`);constructor(){this.router.events.pipe(Me$4(i=>i instanceof st$3)).subscribe(i=>{let e=this.navItems.find(t=>i.url.startsWith(t.path));this.currentTitle.set(e?.label??`SolarWatch`)})}onSiteChange(i){this.sites.select(i)}logout(){this.auth.logout()}static ɵfac=function(e){return new(e||s)};static ɵcmp=Vd({type:s,selectors:[[`app-shell`]],decls:45,vars:10,consts:[[`drawer`,``],[`userMenu`,`matMenu`],[1,`sw-shell`,`h-full`],[`mode`,`push`,`data-testid`,`sidenav`,1,`sw-sidenav`],[1,`flex`,`flex-col`,`h-full`],[1,`sw-brand`],[1,`flex`,`items-center`,`gap-3`],[`aria-hidden`,`true`,1,`grid`,`h-9`,`w-9`,`place-items-center`,`rounded-lg`,`bg-[var(--sw-brand)]`,`text-white`],[`fontSet`,`material-icons`],[1,`leading-tight`],[1,`text-sm`,`font-semibold`,`text-[var(--sw-text)]`],[1,`text-xs`,`text-[var(--sw-muted)]`],[`mat-icon-button`,``,`aria-label`,`Close menu`,1,`sw-close-btn`,3,`click`],[`aria-label`,`Primary`,1,`sw-nav`],[`mat-list-item`,``,`routerLinkActive`,`active`,1,`sw-nav-link`,3,`routerLink`,`routerLinkActiveOptions`],[1,`mt-auto`,`p-4`],[1,`flex`,`flex-col`],[`color`,`primary`,1,`sw-toolbar`],[`mat-icon-button`,``,`aria-label`,`Toggle navigation menu`,`matTooltip`,`Menu`,1,`sw-menu-button`,3,`click`],[`fontSet`,`material-icons`,1,`sw-menu-icon`],[1,`text-base`,`font-semibold`],[1,`sw-toolbar-spacer`],[1,`flex`,`items-center`,`gap-2`,`rounded-full`,`px-3`,`py-1.5`,`text-xs`,`font-medium`],[3,`tone`,`label`,`text`],[`aria-label`,`Select site`,1,`sw-site-select`,3,`value`],[`mat-icon-button`,``,`aria-label`,`Account menu`,3,`mat-menu-trigger-for`],[`mat-menu-item`,``,3,`click`],[1,`flex-1`,`overflow-auto`,`p-6`],[`fontSet`,`material-icons`,`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`grid`,`h-9`,`w-9`,`place-items-center`,`rounded-full`,`bg-[var(--sw-surface-2)]`,`text-sm`,`font-medium`,`uppercase`],[1,`min-w-0`,`leading-tight`],[1,`truncate`,`text-sm`,`font-medium`,`text-[var(--sw-text)]`],[1,`text-xs`,`capitalize`,`text-[var(--sw-muted)]`],[`aria-label`,`Select site`,1,`sw-site-select`,3,`selectionChange`,`value`],[3,`value`]],template:function(e,t){if(e&1){let n=hS();ba$1(0,`mat-sidenav-container`,2)(1,`mat-sidenav`,3,0)(3,`div`,4)(4,`div`,5)(5,`div`,6)(6,`span`,7)(7,`mat-icon`,8),zS(8,`solar_power`),Wd()(),ba$1(9,`div`,9)(10,`p`,10),zS(11,`SolarWatch`),Wd(),ba$1(12,`p`,11),zS(13,`Monitoring console`),Wd()()(),ba$1(14,`button`,12),Ua$1(`click`,function(){wp(n);return Ip(IS(2).close())}),ba$1(15,`mat-icon`,8),zS(16,`close`),Wd()()(),ba$1(17,`nav`,13),sS(18,Ga,5,6,`a`,14,Ka),Wd(),ba$1(20,`div`,15),oS(21,Ua,8,3,`div`,6),Wd()()(),ba$1(22,`mat-sidenav-content`,16)(23,`mat-toolbar`,17)(24,`button`,18),Ua$1(`click`,function(){wp(n);return Ip(IS(2).toggle())}),ba$1(25,`mat-icon`,19),zS(26,`menu`),Wd()(),ba$1(27,`h1`,20),zS(28),Wd(),ja$1(29,`div`,21),ba$1(30,`div`,22),ja$1(31,`sw-status-dot`,23),Wd(),oS(32,Ya,3,1,`mat-select`,24),ba$1(33,`button`,25)(34,`mat-icon`,8),zS(35,`account_circle`),Wd()(),ba$1(36,`mat-menu`,null,1)(38,`button`,26),Ua$1(`click`,function(){return t.logout()}),ba$1(39,`mat-icon`,8),zS(40,`logout`),Wd(),ba$1(41,`span`),zS(42,`Sign out`),Wd()()()(),ba$1(43,`div`,27),ja$1(44,`router-outlet`),Wd()()()}if(e&2){let n,r=IS(37);cC(18),aS(t.visibleNav()),cC(3),iS((n=t.auth.user())?21:-1,n),cC(7),Bv(t.currentTitle()),cC(2),xv(`background`,t.statusTone()===`ok`?`rgb(0 200 83 / 0.12)`:`rgb(0 0 0 / 0.08)`),cC(),Ev(`tone`,t.statusTone())(`label`,t.statusLabel())(`text`,t.statusText()),di$1(`aria-label`,t.statusLabel()),cC(),iS(t.sites.sites().length>0?32:-1),cC(),Ev(`mat-menu-trigger-for`,r)}},dependencies:[qf,Oc,hN,xr,pn,kr,_i,Tr,Er,yt$3,wt$3,Ei$1,wn$2,Dr,bt,It,Cr,Ds$1,Ms$1,Je$2,Or,Ir,Fr,gn,Z$1,ut$1],styles:[`[_nghost-%COMP%]{display:block;height:100%}.sw-shell[_ngcontent-%COMP%]{height:100vh}.sw-sidenav[_ngcontent-%COMP%]{width:264px;background:var(--%NS%sw-surface);border-right:1px solid var(--%NS%sw-border)}.sw-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:1rem 1.25rem;border-bottom:1px solid var(--%NS%sw-border)}.sw-nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding:.75rem}.sw-nav-link[_ngcontent-%COMP%]{border-radius:.5rem;color:var(--%NS%sw-muted);font-size:.875rem;transition:background-color .15s ease,color .15s ease}.sw-nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.75rem;color:currentColor}.sw-nav-link[_ngcontent-%COMP%]:hover{background:var(--%NS%sw-surface-2)}.sw-nav-link.active[_ngcontent-%COMP%]{background:#1565c01a;color:var(--%NS%sw-brand);font-weight:600}.sw-close-btn[_ngcontent-%COMP%]{margin-left:auto;color:var(--%NS%sw-muted);transition:color .15s ease,background-color .15s ease}.sw-close-btn[_ngcontent-%COMP%]:hover{color:var(--%NS%sw-text);background:var(--%NS%sw-surface-2)}.sw-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;border-bottom:1px solid var(--%NS%sw-border);background:var(--%NS%sw-surface);color:var(--%NS%sw-text)}.sw-toolbar.mat-primary[_ngcontent-%COMP%]{background:var(--%NS%sw-surface)}.sw-menu-button[_ngcontent-%COMP%]{flex-shrink:0;border:1px solid var(--%NS%sw-border);border-radius:.5rem;background:var(--%NS%sw-surface);color:var(--%NS%sw-brand);box-shadow:var(--%NS%sw-shadow);transition:border-color .15s ease,background-color .15s ease,transform .15s ease}.sw-menu-button[_ngcontent-%COMP%]:hover{border-color:var(--%NS%sw-brand);background:#3f51b514}.sw-menu-button[_ngcontent-%COMP%]:active{transform:scale(.95)}.sw-menu-button[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%sw-brand);outline-offset:2px}.sw-menu-icon[_ngcontent-%COMP%]{color:var(--%NS%sw-brand);font-weight:700}.sw-toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.sw-site-select[_ngcontent-%COMP%]{min-width:11rem;font-size:.875rem}`]})},canActivate:[yr],children:[{path:``,redirectTo:`dashboard`,pathMatch:`full`},{path:`dashboard`,loadComponent:()=>import(`./chunk-CyWVnE8k.js`).then(s=>s.DashboardComponent)},{path:`inverters`,loadComponent:()=>import(`./chunk-1AbyQ-oN.js`).then(s=>s.InverterListComponent)},{path:`inverters/:inverterId`,loadComponent:()=>import(`./chunk-2isGY0PL.js`).then(s=>s.InverterDetailComponent)},{path:`batteries`,loadComponent:()=>import(`./chunk-sHs-ce0D.js`).then(s=>s.BatteryListComponent)},{path:`batteries/:batteryId`,loadComponent:()=>import(`./chunk-DF4C1xcS.js`).then(s=>s.BatteryDetailComponent)},{path:`analytics`,loadComponent:()=>import(`./chunk-CeImLw1L.js`).then(s=>s.AnalyticsComponent)},{path:`alerts`,loadComponent:()=>import(`./chunk-CEdyEtC6.js`).then(s=>s.AlertsComponent)},{path:`sites`,loadComponent:()=>import(`./chunk-f1xswv71.js`).then(s=>s.SitesComponent),canActivate:[vr([`owner`,`installer`])],data:{title:`Site management`}}]},{path:`**`,redirectTo:`dashboard`}];var $a=`/auth/refresh`;var Xa=`/auth/login`;var Vr=(s,i)=>{let e=p(MD),t=e.accessToken(),n=t?Br(s,t):s;return i(n).pipe(Ke$4(r=>{let o=r,a=s.url.includes($a)||s.url.includes(Xa),l=n.headers.has(`Authorization`);return o.status===401&&l&&!a?K$3(e.refreshNow()).pipe(Ae$2(c=>{if(!c)return jr(e);let m=e.accessToken();return i(m?Br(n,m):n)}),Ke$4(()=>jr(e))):yo$1(()=>r)}))};function Br(s,i){return s.clone({setHeaders:{Authorization:`Bearer ${i}`}})}function jr(s){return s.logout(),yo$1(()=>new or$1({status:401,statusText:`Session expired`}))}var Qr={providers:[ew(),br(),mN(zr),x_(O_([Vr])),pv(()=>p(MD).initialize())]};s_(class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=Vd({type:s,selectors:[[`app-root`]],decls:1,vars:0,template:function(e,t){e&1&&ja$1(0,`router-outlet`)},dependencies:[qf],styles:[`[_nghost-%COMP%]{display:block;min-height:100vh}`]})},Qr).catch(s=>console.error(s));export{ln$2 as $,St$1 as A,Gt as B,ss as C,Ds$1 as D,zn as E,ln$1 as F,Sn$1 as G,Ln$1 as H,sn$1 as I,Ze$3 as J,Tt$3 as K,wt$1 as L,Vi$1 as M,Ze$2 as N,Je$2 as O,dt$1 as P,kn$1 as Q,xt$1 as R,rs as S,ut$1 as T,Nn$1 as U,In$1 as V,On$1 as W,he$1 as X,ee$1 as Y,j$1 as Z,es as _,qo$1 as _t,Gn as a,wn$1 as at,jn as b,Kn as c,Bo$1 as ct,Un as d,Ei$1 as dt,rn$2 as et,Wn as f,Ke$3 as ft,_e$1 as g,ko$1 as gt,Zn as h,Ze$4 as ht,$n as i,w$1 as it,Ti as j,Ms$1 as k,Mt$1 as l,Ce$1 as lt,Yn as m,Tt$4 as mt,Z$1 as n,tn$2 as nt,Hn as o,wt$3 as ot,Xn as p,S$1 as pt,Yt as q,m as r,v$1 as rt,Jn as s,yt$3 as st,L as t,sn$2 as tt,Qn as u,Ct$3 as ut,ht$1 as v,w$2 as vt,ts as w,ns as x,is as y,xi as yt,Ee$2 as z};
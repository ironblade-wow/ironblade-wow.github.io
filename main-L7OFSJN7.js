import{$ as zt,$a as Dt,$b as _e,A as Di,B as Cn,Bb as yt,C as J,Ca as pe,D as Oi,Da as Ht,Db as Bn,Dc as Zt,E as Sn,Ea as Nn,Eb as Ui,Ec as ir,F as Be,Fa as Pn,Fb as k,G as bt,Gb as $n,Gc as ji,H as Li,Ha as Un,Hb as Qe,Ia as Pi,Ib as Fi,J as Rn,Ja as x,Jb as Ze,Ka as nt,L as me,La as L,M as tt,Ma as st,Mc as nr,N as P,Nb as xt,Nc as rr,Oa as Fn,Ob as Gt,P as O,Pa as jn,Q as M,Qa as zn,Qc as or,R as In,Rc as ar,S as jt,Sa as Z,Sb as Hn,Sc as sr,T as et,Ta as Vt,Tb as Ke,Tc as cr,U as Mn,Ua as qt,Uc as lr,V as y,Vb as Vn,Vc as dr,W as ht,Wb as qn,Wc as mr,X as d,Xb as Wn,Y as En,Yb as Gn,Z as wt,Za as C,_ as Q,_a as T,_b as kt,a as h,aa as Bt,ac as Qn,b as z,bc as Zn,c as Ft,d as _n,da as At,dc as Qt,e as bn,ea as ut,f as A,fa as Ni,g as q,ga as An,gb as fe,gc as Kn,ha as it,hc as Yn,ia as Tt,ib as ct,ic as Xn,ja as $e,jc as Jn,k as W,ka as He,kb as Wt,l as G,la as Tn,lb as j,m as p,ma as w,mb as b,mc as tr,n as Fe,nb as pt,o as Ti,ob as ge,p as wn,pb as S,q as _,qa as he,qb as R,qc as er,r as yn,ra as at,rc as lt,s as _t,sa as Dn,t as xn,ta as U,tc as B,u as je,ua as F,ub as qe,v as kn,va as On,vb as We,w as ze,wa as $t,wb as E,wc as Ye,x as X,xa as Ln,xb as Ge,ya as Ve,yb as ve,z as de,za as ue}from"./chunk-Z4XMEZ4P.js";var u="primary",De=Symbol("RouteTitle"),Vi=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let t=this.params[r];return Array.isArray(t)?t[0]:t}return null}getAll(r){if(this.has(r)){let t=this.params[r];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Lt(i){return new Vi(i)}function zi(i,r,t){for(let e=0;e<i.length;e++){let n=i[e],o=r[e];if(n[0]===":")t[n.substring(1)]=o;else if(n!==o.path)return!1}return!0}function br(i,r,t){let e=t.path.split("/"),n=e.indexOf("**");if(n===-1){if(e.length>i.length||t.pathMatch==="full"&&(r.hasChildren()||e.length<i.length))return null;let s={},l=i.slice(0,e.length);return zi(e,l,s)?{consumed:l,posParams:s}:null}if(n!==e.lastIndexOf("**"))return null;let o=e.slice(0,n),a=e.slice(n+1);if(o.length+a.length>i.length||t.pathMatch==="full"&&r.hasChildren()&&t.path!=="**")return null;let c={};return!zi(o,i.slice(0,o.length),c)||!zi(a,i.slice(i.length-a.length),c)?null:{consumed:i,posParams:c}}function ni(i){return new Promise((r,t)=>{i.pipe(bt()).subscribe({next:e=>r(e),error:e=>t(e)})})}function To(i,r){if(i.length!==r.length)return!1;for(let t=0;t<i.length;++t)if(!dt(i[t],r[t]))return!1;return!0}function dt(i,r){let t=i?qi(i):void 0,e=r?qi(r):void 0;if(!t||!e||t.length!=e.length)return!1;let n;for(let o=0;o<t.length;o++)if(n=t[o],!wr(i[n],r[n]))return!1;return!0}function qi(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function wr(i,r){if(Array.isArray(i)&&Array.isArray(r)){if(i.length!==r.length)return!1;let t=[...i].sort(),e=[...r].sort();return t.every((n,o)=>e[o]===n)}else return i===r}function Do(i){return i.length>0?i[i.length-1]:null}function Ut(i){return Ti(i)?i:Pn(i)?G(Promise.resolve(i)):p(i)}function yr(i){return Ti(i)?ni(i):Promise.resolve(i)}var Oo={exact:Cr,subset:Sr},xr={exact:Lo,subset:No,ignored:()=>!0},kr={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Wi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function hr(i,r,t){return Oo[t.paths](i.root,r.root,t.matrixParams)&&xr[t.queryParams](i.queryParams,r.queryParams)&&!(t.fragment==="exact"&&i.fragment!==r.fragment)}function Lo(i,r){return dt(i,r)}function Cr(i,r,t){if(!Ot(i.segments,r.segments)||!ti(i.segments,r.segments,t)||i.numberOfChildren!==r.numberOfChildren)return!1;for(let e in r.children)if(!i.children[e]||!Cr(i.children[e],r.children[e],t))return!1;return!0}function No(i,r){return Object.keys(r).length<=Object.keys(i).length&&Object.keys(r).every(t=>wr(i[t],r[t]))}function Sr(i,r,t){return Rr(i,r,r.segments,t)}function Rr(i,r,t,e){if(i.segments.length>t.length){let n=i.segments.slice(0,t.length);return!(!Ot(n,t)||r.hasChildren()||!ti(n,t,e))}else if(i.segments.length===t.length){if(!Ot(i.segments,t)||!ti(i.segments,t,e))return!1;for(let n in r.children)if(!i.children[n]||!Sr(i.children[n],r.children[n],e))return!1;return!0}else{let n=t.slice(0,i.segments.length),o=t.slice(i.segments.length);return!Ot(i.segments,n)||!ti(i.segments,n,e)||!i.children[u]?!1:Rr(i.children[u],r,o,e)}}function ti(i,r,t){return r.every((e,n)=>xr[t](i[n].parameters,e.parameters))}var H=class{root;queryParams;fragment;_queryParamMap;constructor(r=new g([],{}),t={},e=null){this.root=r,this.queryParams=t,this.fragment=e}get queryParamMap(){return this._queryParamMap??=Lt(this.queryParams),this._queryParamMap}toString(){return Fo.serialize(this)}},g=class{segments;children;parent=null;constructor(r,t){this.segments=r,this.children=t,Object.values(t).forEach(e=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ei(this)}},Ct=class{path;parameters;_parameterMap;constructor(r,t){this.path=r,this.parameters=t}get parameterMap(){return this._parameterMap??=Lt(this.parameters),this._parameterMap}toString(){return Mr(this)}};function Po(i,r){return Ot(i,r)&&i.every((t,e)=>dt(t.parameters,r[e].parameters))}function Ot(i,r){return i.length!==r.length?!1:i.every((t,e)=>t.path===r[e].path)}function Uo(i,r){let t=[];return Object.entries(i.children).forEach(([e,n])=>{e===u&&(t=t.concat(r(n,e)))}),Object.entries(i.children).forEach(([e,n])=>{e!==u&&(t=t.concat(r(n,e)))}),t}var re=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:()=>new St})}return i})(),St=class{parse(r){let t=new Qi(r);return new H(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(r){let t=`/${be(r.root,!0)}`,e=Bo(r.queryParams),n=typeof r.fragment=="string"?`#${jo(r.fragment)}`:"";return`${t}${e}${n}`}},Fo=new St;function ei(i){return i.segments.map(r=>Mr(r)).join("/")}function be(i,r){if(!i.hasChildren())return ei(i);if(r){let t=i.children[u]?be(i.children[u],!1):"",e=[];return Object.entries(i.children).forEach(([n,o])=>{n!==u&&e.push(`${n}:${be(o,!1)}`)}),e.length>0?`${t}(${e.join("//")})`:t}else{let t=Uo(i,(e,n)=>n===u?[be(i.children[u],!1)]:[`${n}:${be(e,!1)}`]);return Object.keys(i.children).length===1&&i.children[u]!=null?`${ei(i)}/${t[0]}`:`${ei(i)}/(${t.join("//")})`}}function Ir(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Xe(i){return Ir(i).replace(/%3B/gi,";")}function jo(i){return encodeURI(i)}function Gi(i){return Ir(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ii(i){return decodeURIComponent(i)}function ur(i){return ii(i.replace(/\+/g,"%20"))}function Mr(i){return`${Gi(i.path)}${zo(i.parameters)}`}function zo(i){return Object.entries(i).map(([r,t])=>`;${Gi(r)}=${Gi(t)}`).join("")}function Bo(i){let r=Object.entries(i).map(([t,e])=>Array.isArray(e)?e.map(n=>`${Xe(t)}=${Xe(n)}`).join("&"):`${Xe(t)}=${Xe(e)}`).filter(t=>t);return r.length?`?${r.join("&")}`:""}var $o=/^[^\/()?;#]+/;function Bi(i){let r=i.match($o);return r?r[0]:""}var Ho=/^[^\/()?;=#]+/;function Vo(i){let r=i.match(Ho);return r?r[0]:""}var qo=/^[^=?&#]+/;function Wo(i){let r=i.match(qo);return r?r[0]:""}var Go=/^[^&#]+/;function Qo(i){let r=i.match(Go);return r?r[0]:""}var Qi=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new g([],{}):new g([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new M(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0,r));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1,r)),(t.length>0||Object.keys(e).length>0)&&(n[u]=new g(t,e)),n}parseSegment(){let r=Bi(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new M(4009,!1);return this.capture(r),new Ct(ii(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let t=Vo(this.remaining);if(!t)return;this.capture(t);let e="";if(this.consumeOptional("=")){let n=Bi(this.remaining);n&&(e=n,this.capture(e))}r[ii(t)]=ii(e)}parseQueryParam(r){let t=Wo(this.remaining);if(!t)return;this.capture(t);let e="";if(this.consumeOptional("=")){let a=Qo(this.remaining);a&&(e=a,this.capture(e))}let n=ur(t),o=ur(e);if(r.hasOwnProperty(n)){let a=r[n];Array.isArray(a)||(a=[a],r[n]=a),a.push(o)}else r[n]=o}parseParens(r,t){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Bi(this.remaining),o=this.remaining[n.length];if(o!=="/"&&o!==")"&&o!==";")throw new M(4010,!1);let a;n.indexOf(":")>-1?(a=n.slice(0,n.indexOf(":")),this.capture(a),this.capture(":")):r&&(a=u);let c=this.parseChildren(t+1);e[a??u]=Object.keys(c).length===1&&c[u]?c[u]:new g([],c),this.consumeOptional("//")}return e}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new M(4011,!1)}};function Er(i){return i.segments.length>0?new g([],{[u]:i}):i}function Ar(i){let r={};for(let[e,n]of Object.entries(i.children)){let o=Ar(n);if(e===u&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))r[a]=c;else(o.segments.length>0||o.hasChildren())&&(r[e]=o)}let t=new g(i.segments,r);return Zo(t)}function Zo(i){if(i.numberOfChildren===1&&i.children[u]){let r=i.children[u];return new g(i.segments.concat(r.segments),r.children)}return i}function Rt(i){return i instanceof H}function Tr(i,r,t=null,e=null,n=new St){let o=Dr(i);return Or(o,r,t,e,n)}function Dr(i){let r;function t(o){let a={};for(let s of o.children){let l=t(s);a[s.outlet]=l}let c=new g(o.url,a);return o===i&&(r=c),c}let e=t(i.root),n=Er(e);return r??n}function Or(i,r,t,e,n){let o=i;for(;o.parent;)o=o.parent;if(r.length===0)return $i(o,o,o,t,e,n);let a=Ko(r);if(a.toRoot())return $i(o,o,new g([],{}),t,e,n);let c=Yo(a,o,i),s=c.processChildren?ye(c.segmentGroup,c.index,a.commands):Nr(c.segmentGroup,c.index,a.commands);return $i(o,c.segmentGroup,s,t,e,n)}function ri(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function Ce(i){return typeof i=="object"&&i!=null&&i.outlets}function pr(i,r,t){i||="\u0275";let e=new H;return e.queryParams={[i]:r},t.parse(t.serialize(e)).queryParams[i]}function $i(i,r,t,e,n,o){let a={};for(let[l,m]of Object.entries(e??{}))a[l]=Array.isArray(m)?m.map(v=>pr(l,v,o)):pr(l,m,o);let c;i===r?c=t:c=Lr(i,r,t);let s=Er(Ar(c));return new H(s,a,n)}function Lr(i,r,t){let e={};return Object.entries(i.children).forEach(([n,o])=>{o===r?e[n]=t:e[n]=Lr(o,r,t)}),new g(i.segments,e)}var oi=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,t,e){if(this.isAbsolute=r,this.numberOfDoubleDots=t,this.commands=e,r&&e.length>0&&ri(e[0]))throw new M(4003,!1);let n=e.find(Ce);if(n&&n!==Do(e))throw new M(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Ko(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new oi(!0,0,i);let r=0,t=!1,e=i.reduce((n,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,l])=>{c[s]=typeof l=="string"?l.split("/"):l}),[...n,{outlets:c}]}if(o.segmentPath)return[...n,o.segmentPath]}return typeof o!="string"?[...n,o]:a===0?(o.split("/").forEach((c,s)=>{s==0&&c==="."||(s==0&&c===""?t=!0:c===".."?r++:c!=""&&n.push(c))}),n):[...n,o]},[]);return new oi(t,r,e)}var Yt=class{segmentGroup;processChildren;index;constructor(r,t,e){this.segmentGroup=r,this.processChildren=t,this.index=e}};function Yo(i,r,t){if(i.isAbsolute)return new Yt(r,!0,0);if(!t)return new Yt(r,!1,NaN);if(t.parent===null)return new Yt(t,!0,0);let e=ri(i.commands[0])?0:1,n=t.segments.length-1+e;return Xo(t,n,i.numberOfDoubleDots)}function Xo(i,r,t){let e=i,n=r,o=t;for(;o>n;){if(o-=n,e=e.parent,!e)throw new M(4005,!1);n=e.segments.length}return new Yt(e,!1,n-o)}function Jo(i){return Ce(i[0])?i[0].outlets:{[u]:i}}function Nr(i,r,t){if(i??=new g([],{}),i.segments.length===0&&i.hasChildren())return ye(i,r,t);let e=ta(i,r,t),n=t.slice(e.commandIndex);if(e.match&&e.pathIndex<i.segments.length){let o=new g(i.segments.slice(0,e.pathIndex),{});return o.children[u]=new g(i.segments.slice(e.pathIndex),i.children),ye(o,0,n)}else return e.match&&n.length===0?new g(i.segments,{}):e.match&&!i.hasChildren()?Zi(i,r,t):e.match?ye(i,0,n):Zi(i,r,t)}function ye(i,r,t){if(t.length===0)return new g(i.segments,{});{let e=Jo(t),n={};if(Object.keys(e).some(o=>o!==u)&&i.children[u]&&i.numberOfChildren===1&&i.children[u].segments.length===0){let o=ye(i.children[u],r,t);return new g(i.segments,o.children)}return Object.entries(e).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(n[o]=Nr(i.children[o],r,a))}),Object.entries(i.children).forEach(([o,a])=>{e[o]===void 0&&(n[o]=a)}),new g(i.segments,n)}}function ta(i,r,t){let e=0,n=r,o={match:!1,pathIndex:0,commandIndex:0};for(;n<i.segments.length;){if(e>=t.length)return o;let a=i.segments[n],c=t[e];if(Ce(c))break;let s=`${c}`,l=e<t.length-1?t[e+1]:null;if(n>0&&s===void 0)break;if(s&&l&&typeof l=="object"&&l.outlets===void 0){if(!gr(s,l,a))return o;e+=2}else{if(!gr(s,{},a))return o;e++}n++}return{match:!0,pathIndex:n,commandIndex:e}}function Zi(i,r,t){let e=i.segments.slice(0,r),n=0;for(;n<t.length;){let o=t[n];if(Ce(o)){let s=ea(o.outlets);return new g(e,s)}if(n===0&&ri(t[0])){let s=i.segments[r];e.push(new Ct(s.path,fr(t[0]))),n++;continue}let a=Ce(o)?o.outlets[u]:`${o}`,c=n<t.length-1?t[n+1]:null;a&&c&&ri(c)?(e.push(new Ct(a,fr(c))),n+=2):(e.push(new Ct(a,{})),n++)}return new g(e,{})}function ea(i){let r={};return Object.entries(i).forEach(([t,e])=>{typeof e=="string"&&(e=[e]),e!==null&&(r[t]=Zi(new g([],{}),0,e))}),r}function fr(i){let r={};return Object.entries(i).forEach(([t,e])=>r[t]=`${e}`),r}function gr(i,r,t){return i==t.path&&dt(r,t.parameters)}var xe="imperative",I=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(I||{}),V=class{id;url;constructor(r,t){this.id=r,this.url=t}},Nt=class extends V{type=I.NavigationStart;navigationTrigger;restoredState;constructor(r,t,e="imperative",n=null){super(r,t),this.navigationTrigger=e,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},mt=class extends V{urlAfterRedirects;type=I.NavigationEnd;constructor(r,t,e){super(r,t),this.urlAfterRedirects=e}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},D=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(D||{}),Se=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(Se||{}),K=class extends V{reason;code;type=I.NavigationCancel;constructor(r,t,e,n){super(r,t),this.reason=e,this.code=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Pr(i){return i instanceof K&&(i.code===D.Redirect||i.code===D.SupersededByNewNavigation)}var gt=class extends V{reason;code;type=I.NavigationSkipped;constructor(r,t,e,n){super(r,t),this.reason=e,this.code=n}},Pt=class extends V{error;target;type=I.NavigationError;constructor(r,t,e,n){super(r,t),this.error=e,this.target=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Re=class extends V{urlAfterRedirects;state;type=I.RoutesRecognized;constructor(r,t,e,n){super(r,t),this.urlAfterRedirects=e,this.state=n}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ai=class extends V{urlAfterRedirects;state;type=I.GuardsCheckStart;constructor(r,t,e,n){super(r,t),this.urlAfterRedirects=e,this.state=n}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},si=class extends V{urlAfterRedirects;state;shouldActivate;type=I.GuardsCheckEnd;constructor(r,t,e,n,o){super(r,t),this.urlAfterRedirects=e,this.state=n,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ci=class extends V{urlAfterRedirects;state;type=I.ResolveStart;constructor(r,t,e,n){super(r,t),this.urlAfterRedirects=e,this.state=n}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},li=class extends V{urlAfterRedirects;state;type=I.ResolveEnd;constructor(r,t,e,n){super(r,t),this.urlAfterRedirects=e,this.state=n}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},di=class{route;type=I.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},mi=class{route;type=I.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},hi=class{snapshot;type=I.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ui=class{snapshot;type=I.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pi=class{snapshot;type=I.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fi=class{snapshot;type=I.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Jt=class{},Ie=class{},te=class{url;navigationBehaviorOptions;constructor(r,t){this.url=r,this.navigationBehaviorOptions=t}};function ia(i){return!(i instanceof Jt)&&!(i instanceof te)&&!(i instanceof Ie)}var gi=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new oe(this.rootInjector)}},oe=(()=>{class i{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,e){let n=this.getOrCreateContext(t);n.outlet=e,this.contexts.set(t,n)}onChildOutletDestroyed(t){let e=this.getContext(t);e&&(e.outlet=null,e.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new gi(this.rootInjector),this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(e){return new(e||i)(ht(wt))};static \u0275prov=jt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),vi=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let t=this.pathFromRoot(r);return t.length>1?t[t.length-2]:null}children(r){let t=Ki(r,this._root);return t?t.children.map(e=>e.value):[]}firstChild(r){let t=Ki(r,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(r){let t=Yi(r,this._root);return t.length<2?[]:t[t.length-2].children.map(n=>n.value).filter(n=>n!==r)}pathFromRoot(r){return Yi(r,this._root).map(t=>t.value)}};function Ki(i,r){if(i===r.value)return r;for(let t of r.children){let e=Ki(i,t);if(e)return e}return null}function Yi(i,r){if(i===r.value)return[r];for(let t of r.children){let e=Yi(i,t);if(e.length)return e.unshift(r),e}return[]}var $=class{value;children;constructor(r,t){this.value=r,this.children=t}toString(){return`TreeNode(${this.value})`}};function Kt(i){let r={};return i&&i.children.forEach(t=>r[t.value.outlet]=t),r}var Me=class extends vi{snapshot;constructor(r,t){super(r),this.snapshot=t,sn(this,r)}toString(){return this.snapshot.toString()}};function Ur(i,r){let t=na(i,r),e=new q([new Ct("",{})]),n=new q({}),o=new q({}),a=new q({}),c=new q(""),s=new ot(e,n,a,c,o,u,i,t.root);return s.snapshot=t.root,new Me(new $(s,[]),t)}function na(i,r){let t={},e={},n={},a=new ee([],t,n,"",e,u,i,null,{},r);return new Ee("",new $(a,[]))}var ot=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,t,e,n,o,a,c,s){this.urlSubject=r,this.paramsSubject=t,this.queryParamsSubject=e,this.fragmentSubject=n,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(_(l=>l[De]))??p(void 0),this.url=r,this.params=t,this.queryParams=e,this.fragment=n,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(_(r=>Lt(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(_(r=>Lt(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},ra="always";function an(i,r,t){let e,{routeConfig:n}=i;return r!==null&&(t==="always"||n?.path===""||!r.component&&!r.routeConfig?.loadComponent)?e={params:h(h({},r.params),i.params),data:h(h({},r.data),i.data),resolve:h(h(h(h({},i.data),r.data),n?.data),i._resolvedData)}:e={params:h({},i.params),data:h({},i.data),resolve:h(h({},i.data),i._resolvedData??{})},n&&jr(n)&&(e.resolve[De]=n.title),e}var ee=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[De]}constructor(r,t,e,n,o,a,c,s,l,m){this.url=r,this.params=t,this.queryParams=e,this.fragment=n,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=l,this._environmentInjector=m}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Lt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Lt(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(e=>e.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${t}')`}},Ee=class extends vi{url;constructor(r,t){super(t),this.url=r,sn(this,t)}toString(){return Fr(this._root)}};function sn(i,r){r.value._routerState=i,r.children.forEach(t=>sn(i,t))}function Fr(i){let r=i.children.length>0?` { ${i.children.map(Fr).join(", ")} } `:"";return`${i.value}${r}`}function Hi(i){if(i.snapshot){let r=i.snapshot,t=i._futureSnapshot;i.snapshot=t,dt(r.queryParams,t.queryParams)||i.queryParamsSubject.next(t.queryParams),r.fragment!==t.fragment&&i.fragmentSubject.next(t.fragment),dt(r.params,t.params)||i.paramsSubject.next(t.params),To(r.url,t.url)||i.urlSubject.next(t.url),dt(r.data,t.data)||i.dataSubject.next(t.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Xi(i,r){let t=dt(i.params,r.params)&&Po(i.url,r.url),e=!i.parent!=!r.parent;return t&&!e&&(!i.parent||Xi(i.parent,r.parent))}function jr(i){return typeof i.title=="string"||i.title===null}var zr=new y(""),Oe=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=u;activateEvents=new it;deactivateEvents=new it;attachEvents=new it;detachEvents=new it;routerOutletData=Ze();parentContexts=d(oe);location=d(Nn);changeDetector=d(xt);inputBinder=d(yi,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:e,previousValue:n}=t.name;if(e)return;this.isTrackedInParentContexts(n)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(n)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new M(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new M(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new M(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new M(4013,!1);this._activatedRoute=t;let n=this.location,a=t.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new Ji(t,c,n.injector,this.routerOutletData);this.activated=n.createComponent(a,{index:n.length,injector:s,environmentInjector:e}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=L({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[he]})}return i})(),Ji=class{route;childContexts;parent;outletData;constructor(r,t,e,n){this.route=r,this.childContexts=t,this.parent=e,this.outletData=n}get(r,t){return r===ot?this.route:r===oe?this.childContexts:r===zr?this.outletData:this.parent.get(r,t)}},yi=new y("");var cn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(e,n){e&1&&Dt(0,"router-outlet")},dependencies:[Oe],encapsulation:2,changeDetection:1})}return i})();function ln(i){let r=i.children&&i.children.map(ln),t=r?z(h({},i),{children:r}):h({},i);return!t.component&&!t.loadComponent&&(r||t.loadChildren)&&t.outlet&&t.outlet!==u&&(t.component=cn),t}function oa(i,r,t){let e=Ae(i,r._root,t?t._root:void 0);return new Me(e,r)}function Ae(i,r,t){if(t&&i.shouldReuseRoute(r.value,t.value.snapshot)){let e=t.value;e._futureSnapshot=r.value;let n=aa(i,r,t);return new $(e,n)}else{if(i.shouldAttach(r.value)){let o=i.retrieve(r.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=r.value,a.children=r.children.map(c=>Ae(i,c)),a}}let e=sa(r.value),n=r.children.map(o=>Ae(i,o));return new $(e,n)}}function aa(i,r,t){return r.children.map(e=>{for(let n of t.children)if(i.shouldReuseRoute(e.value,n.value.snapshot))return Ae(i,e,n);return Ae(i,e)})}function sa(i){return new ot(new q(i.url),new q(i.params),new q(i.queryParams),new q(i.fragment),new q(i.data),i.outlet,i.component,i)}var ie=class{redirectTo;navigationBehaviorOptions;constructor(r,t){this.redirectTo=r,this.navigationBehaviorOptions=t}},Br="ngNavigationCancelingError";function _i(i,r){let{redirectTo:t,navigationBehaviorOptions:e}=Rt(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,n=$r(!1,D.Redirect);return n.url=t,n.navigationBehaviorOptions=e,n}function $r(i,r){let t=new Error(`NavigationCancelingError: ${i||""}`);return t[Br]=!0,t.cancellationCode=r,t}function ca(i){return Hr(i)&&Rt(i.url)}function Hr(i){return!!i&&i[Br]}var tn=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,t,e,n,o){this.routeReuseStrategy=r,this.futureState=t,this.currState=e,this.forwardEvent=n,this.inputBindingEnabled=o}activate(r){let t=this.futureState._root,e=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,e,r),Hi(this.futureState.root),this.activateChildRoutes(t,e,r)}deactivateChildRoutes(r,t,e){let n=Kt(t);r.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,n[a],e),delete n[a]}),Object.values(n).forEach(o=>{this.deactivateRouteAndItsChildren(o,e)})}deactivateRoutes(r,t,e){let n=r.value,o=t?t.value:null;if(n===o)if(n.component){let a=e.getContext(n.outlet);a&&this.deactivateChildRoutes(r,t,a.children)}else this.deactivateChildRoutes(r,t,e);else o&&this.deactivateRouteAndItsChildren(t,e)}deactivateRouteAndItsChildren(r,t){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,t):this.deactivateRouteAndOutlet(r,t)}detachAndStoreRouteSubtree(r,t){let e=t.getContext(r.value.outlet),n=e&&r.value.component?e.children:t,o=Kt(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,n);if(e&&e.outlet){let a=e.outlet.detach(),c=e.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:c})}}deactivateRouteAndOutlet(r,t){let e=t.getContext(r.value.outlet),n=e&&r.value.component?e.children:t,o=Kt(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,n);e&&(e.outlet&&(e.outlet.deactivate(),e.children.onOutletDeactivated()),e.attachRef=null,e.route=null)}activateChildRoutes(r,t,e){let n=Kt(t);r.children.forEach(o=>{this.activateRoutes(o,n[o.value.outlet],e),this.forwardEvent(new fi(o.value.snapshot))}),r.children.length&&this.forwardEvent(new ui(r.value.snapshot))}activateRoutes(r,t,e){let n=r.value,o=t?t.value:null;if(Hi(n),n===o)if(n.component){let a=e.getOrCreateContext(n.outlet);this.activateChildRoutes(r,t,a.children)}else this.activateChildRoutes(r,t,e);else if(n.component){let a=e.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let c=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),Hi(c.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=n,a.outlet&&a.outlet.activateWith(n,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,e)}},bi=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},Xt=class{component;route;constructor(r,t){this.component=r,this.route=t}};function la(i,r,t){let e=i._root,n=r?r._root:null;return we(e,n,t,[e.value])}function da(i){let r=i.routeConfig?i.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:i,guards:r}}function ae(i,r){let t=Symbol(),e=r.get(i,t);return e===t?typeof i=="function"&&!Mn(i)?i:r.get(i):e}function we(i,r,t,e,n={canDeactivateChecks:[],canActivateChecks:[]}){let o=Kt(r);return i.children.forEach(a=>{ma(a,o[a.value.outlet],t,e.concat([a.value]),n),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>ke(c,t.getContext(a),n)),n}function ma(i,r,t,e,n={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,a=r?r.value:null,c=t?t.getContext(i.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=ha(a,o,o.routeConfig.runGuardsAndResolvers);s?n.canActivateChecks.push(new bi(e)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?we(i,r,c?c.children:null,e,n):we(i,r,t,e,n),s&&c&&c.outlet&&c.outlet.isActivated&&n.canDeactivateChecks.push(new Xt(c.outlet.component,a))}else a&&ke(r,c,n),n.canActivateChecks.push(new bi(e)),o.component?we(i,null,c?c.children:null,e,n):we(i,null,t,e,n);return n}function ha(i,r,t){if(typeof t=="function")return Q(r._environmentInjector,()=>t(i,r));switch(t){case"pathParamsChange":return!Ot(i.url,r.url);case"pathParamsOrQueryParamsChange":return!Ot(i.url,r.url)||!dt(i.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Xi(i,r)||!dt(i.queryParams,r.queryParams);default:return!Xi(i,r)}}function ke(i,r,t){let e=Kt(i),n=i.value;Object.entries(e).forEach(([o,a])=>{n.component?r?ke(a,r.children.getContext(o),t):ke(a,null,t):ke(a,r,t)}),n.component?r&&r.outlet&&r.outlet.isActivated?t.canDeactivateChecks.push(new Xt(r.outlet.component,n)):t.canDeactivateChecks.push(new Xt(null,n)):t.canDeactivateChecks.push(new Xt(null,n))}function Le(i){return typeof i=="function"}function ua(i){return typeof i=="boolean"}function pa(i){return i&&Le(i.canLoad)}function fa(i){return i&&Le(i.canActivate)}function ga(i){return i&&Le(i.canActivateChild)}function va(i){return i&&Le(i.canDeactivate)}function _a(i){return i&&Le(i.canMatch)}function Vr(i){return i instanceof wn||i?.name==="EmptyError"}var Je=Symbol("INITIAL_VALUE");function ne(){return tt(i=>yn(i.map(r=>r.pipe(J(1),me(Je)))).pipe(_(r=>{for(let t of r)if(t!==!0){if(t===Je)return Je;if(t===!1||ba(t))return t}return!0}),X(r=>r!==Je),J(1)))}function ba(i){return Rt(i)||i instanceof ie}function qr(i){return i.aborted?p(void 0).pipe(J(1)):new bn(r=>{let t=()=>{r.next(),r.complete()};return i.addEventListener("abort",t),()=>i.removeEventListener("abort",t)})}function Wr(i){return P(qr(i))}function wa(i){return _t(r=>{let{targetSnapshot:t,currentSnapshot:e,guards:{canActivateChecks:n,canDeactivateChecks:o}}=r;return o.length===0&&n.length===0?p(z(h({},r),{guardsResult:!0})):ya(o,t,e).pipe(_t(a=>a&&ua(a)?xa(t,n,i):p(a)),_(a=>z(h({},r),{guardsResult:a})))})}function ya(i,r,t){return G(i).pipe(_t(e=>Ia(e.component,e.route,t,r)),bt(e=>e!==!0,!0))}function xa(i,r,t){return G(r).pipe(Di(e=>xn(Ca(e.route.parent,t),ka(e.route,t),Ra(i,e.path),Sa(i,e.route))),bt(e=>e!==!0,!0))}function ka(i,r){return i!==null&&r&&r(new pi(i)),p(!0)}function Ca(i,r){return i!==null&&r&&r(new hi(i)),p(!0)}function Sa(i,r){let t=r.routeConfig?r.routeConfig.canActivate:null;if(!t||t.length===0)return p(!0);let e=t.map(n=>je(()=>{let o=r._environmentInjector,a=ae(n,o),c=fa(a)?a.canActivate(r,i):Q(o,()=>a(r,i));return Ut(c).pipe(bt())}));return p(e).pipe(ne())}function Ra(i,r){let t=r[r.length-1],n=r.slice(0,r.length-1).reverse().map(o=>da(o)).filter(o=>o!==null).map(o=>je(()=>{let a=o.guards.map(c=>{let s=o.node._environmentInjector,l=ae(c,s),m=ga(l)?l.canActivateChild(t,i):Q(s,()=>l(t,i));return Ut(m).pipe(bt())});return p(a).pipe(ne())}));return p(n).pipe(ne())}function Ia(i,r,t,e){let n=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!n||n.length===0)return p(!0);let o=n.map(a=>{let c=r._environmentInjector,s=ae(a,c),l=va(s)?s.canDeactivate(i,r,t,e):Q(c,()=>s(i,r,t,e));return Ut(l).pipe(bt())});return p(o).pipe(ne())}function Ma(i,r,t,e,n){let o=r.canLoad;if(o===void 0||o.length===0)return p(!0);let a=o.map(c=>{let s=ae(c,i),l=pa(s)?s.canLoad(r,t):Q(i,()=>s(r,t)),m=Ut(l);return n?m.pipe(Wr(n)):m});return p(a).pipe(ne(),Gr(e))}function Gr(i){return _n(O(r=>{if(typeof r!="boolean")throw _i(i,r)}),_(r=>r===!0))}function Ea(i,r,t,e,n,o){let a=r.canMatch;if(!a||a.length===0)return p(!0);let c=a.map(s=>{let l=ae(s,i),m=_a(l)?l.canMatch(r,t,n):Q(i,()=>l(r,t,n));return Ut(m).pipe(Wr(o))});return p(c).pipe(ne(),Gr(e))}var ft=class i extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,i.prototype)}},Te=class i extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,i.prototype)}};function Aa(i){throw new M(4e3,!1)}function Ta(i){throw $r(!1,D.GuardRejected)}var en=class{urlSerializer;urlTree;constructor(r,t){this.urlSerializer=r,this.urlTree=t}async lineralizeSegments(r,t){let e=[],n=t.root;for(;;){if(e=e.concat(n.segments),n.numberOfChildren===0)return e;if(n.numberOfChildren>1||!n.children[u])throw Aa(`${r.redirectTo}`);n=n.children[u]}}async applyRedirectCommands(r,t,e,n,o){let a=await Da(t,n,o);if(a instanceof H)throw new Te(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),r,e);if(a[0]==="/")throw new Te(c);return c}applyRedirectCreateUrlTree(r,t,e,n){let o=this.createSegmentGroup(r,t.root,e,n);return new H(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(r,t){let e={};return Object.entries(r).forEach(([n,o])=>{if(typeof o=="string"&&o[0]===":"){let c=o.substring(1);e[n]=t[c]}else e[n]=o}),e}createSegmentGroup(r,t,e,n){let o=this.createSegments(r,t.segments,e,n),a={};return Object.entries(t.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(r,s,e,n)}),new g(o,a)}createSegments(r,t,e,n){return t.map(o=>o.path[0]===":"?this.findPosParam(r,o,n):this.findOrReturn(o,e))}findPosParam(r,t,e){let n=e[t.path.substring(1)];if(!n)throw new M(4001,!1);return n}findOrReturn(r,t){let e=0;for(let n of t){if(n.path===r.path)return t.splice(e),n;e++}return r}};function Da(i,r,t){if(typeof i=="string")return Promise.resolve(i);let e=i;return ni(Ut(Q(t,()=>e(r))))}function Oa(i,r){return i.providers&&!i._injector&&(i._injector=Pi(i.providers,r,`Route: ${i.path}`)),i._injector??r}function rt(i){return i.outlet||u}function La(i,r){let t=i.filter(e=>rt(e)===r);return t.push(...i.filter(e=>rt(e)!==r)),t}var nn={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Qr(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function Na(i,r,t,e,n,o,a){let c=Zr(i,r,t);if(!c.matched)return p(c);let s=Qr(o(c));return e=Oa(r,e),Ea(e,r,t,n,s,a).pipe(_(l=>l===!0?c:h({},nn)))}function Zr(i,r,t){if(r.path==="")return r.pathMatch==="full"&&(i.hasChildren()||t.length>0)?h({},nn):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let n=(r.matcher||br)(t,i,r);if(!n)return h({},nn);let o={};Object.entries(n.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=n.consumed.length>0?h(h({},o),n.consumed[n.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:n.consumed,remainingSegments:t.slice(n.consumed.length),parameters:a,positionalParamSegments:n.posParams??{}}}function vr(i,r,t,e,n){return t.length>0&&Fa(i,t,e,n)?{segmentGroup:new g(r,Ua(e,new g(t,i.children))),slicedSegments:[]}:t.length===0&&ja(i,t,e)?{segmentGroup:new g(i.segments,Pa(i,t,e,i.children)),slicedSegments:t}:{segmentGroup:new g(i.segments,i.children),slicedSegments:t}}function Pa(i,r,t,e){let n={};for(let o of t)if(xi(i,r,o)&&!e[rt(o)]){let a=new g([],{});n[rt(o)]=a}return h(h({},e),n)}function Ua(i,r){let t={};t[u]=r;for(let e of i)if(e.path===""&&rt(e)!==u){let n=new g([],{});t[rt(e)]=n}return t}function Fa(i,r,t,e){return t.some(n=>!xi(i,r,n)||!(rt(n)!==u)?!1:!(e!==void 0&&rt(n)===e))}function ja(i,r,t){return t.some(e=>xi(i,r,e))}function xi(i,r,t){return(i.hasChildren()||r.length>0)&&t.pathMatch==="full"?!1:t.path===""}function za(i,r,t){return r.length===0&&!i.children[t]}var rn=class{};async function Ba(i,r,t,e,n,o,a,c){return new on(i,r,t,e,n,a,o,c).recognize()}var $a=31,on=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,t,e,n,o,a,c,s){this.injector=r,this.configLoader=t,this.rootComponentType=e,this.config=n,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new en(this.urlSerializer,this.urlTree)}noMatchError(r){return new M(4002,`'${r.segmentGroup}'`)}async recognize(){let r=vr(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:e}=await this.match(r),n=new $(e,t),o=new Ee("",n),a=Tr(e,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(r){let t=new ee([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),u,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,u,t),rootSnapshot:t}}catch(e){if(e instanceof Te)return this.urlTree=e.urlTree,this.match(e.urlTree.root);throw e instanceof ft?this.noMatchError(e):e}}async processSegmentGroup(r,t,e,n,o){if(e.segments.length===0&&e.hasChildren())return this.processChildren(r,t,e,o);let a=await this.processSegment(r,t,e,e.segments,n,!0,o);return a instanceof $?[a]:[]}async processChildren(r,t,e,n){let o=[];for(let s of Object.keys(e.children))s==="primary"?o.unshift(s):o.push(s);let a=[];for(let s of o){let l=e.children[s],m=La(t,s),v=await this.processSegmentGroup(r,m,l,s,n);a.push(...v)}let c=Kr(a);return Ha(c),c}async processSegment(r,t,e,n,o,a,c){for(let s of t)try{return await this.processSegmentAgainstRoute(s._injector??r,t,s,e,n,o,a,c)}catch(l){if(l instanceof ft||Vr(l))continue;throw l}if(za(e,n,o))return new rn;throw new ft(e)}async processSegmentAgainstRoute(r,t,e,n,o,a,c,s){if(rt(e)!==a&&(a===u||!xi(n,o,e)))throw new ft(n);if(e.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,n,e,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(r,n,t,e,o,a,s);throw new ft(n)}async expandSegmentAgainstRouteUsingRedirect(r,t,e,n,o,a,c){let{matched:s,parameters:l,consumedSegments:m,positionalParamSegments:v,remainingSegments:f}=Zr(t,n,o);if(!s)throw new ft(t);typeof n.redirectTo=="string"&&n.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>$a&&(this.allowRedirects=!1));let N=this.createSnapshot(r,n,o,l,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let Y=await this.applyRedirects.applyRedirectCommands(m,n.redirectTo,v,Qr(N),r),Mt=await this.applyRedirects.lineralizeSegments(n,Y);return this.processSegment(r,e,t,Mt.concat(f),a,!1,c)}createSnapshot(r,t,e,n,o){let a=new ee(e,n,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,qa(t),rt(t),t.component??t._loadedComponent??null,t,Wa(t),r),c=an(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(c.params),a.data=Object.freeze(c.data),a}async matchSegmentAgainstRoute(r,t,e,n,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=Et=>this.createSnapshot(r,e,Et.consumedSegments,Et.parameters,a),s=await ni(Na(t,e,n,r,this.urlSerializer,c,this.abortSignal));if(e.path==="**"&&(t.children={}),!s?.matched)throw new ft(t);r=e._injector??r;let{routes:l}=await this.getChildConfig(r,e,n),m=e._loadedInjector??r,{parameters:v,consumedSegments:f,remainingSegments:N}=s,Y=this.createSnapshot(r,e,f,v,a),{segmentGroup:Mt,slicedSegments:le}=vr(t,f,N,l,o);if(le.length===0&&Mt.hasChildren()){let Et=await this.processChildren(m,l,Mt,Y);return new $(Y,Et)}if(l.length===0&&le.length===0)return new $(Y,[]);let Ai=rt(e)===o,Ue=await this.processSegment(m,l,Mt,le,Ai?u:o,!0,Y);return new $(Y,Ue instanceof $?[Ue]:[])}async getChildConfig(r,t,e){if(t.children)return{routes:t.children,injector:r};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(r).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await ni(Ma(r,t,e,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(r,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw Ta(t)}return{routes:[],injector:r}}};function Ha(i){i.sort((r,t)=>r.value.outlet===u?-1:t.value.outlet===u?1:r.value.outlet.localeCompare(t.value.outlet))}function Va(i){let r=i.value.routeConfig;return r&&r.path===""}function Kr(i){let r=[],t=new Set;for(let e of i){if(!Va(e)){r.push(e);continue}let n=r.find(o=>e.value.routeConfig===o.value.routeConfig);n!==void 0?(n.children.push(...e.children),t.add(n)):r.push(e)}for(let e of t){let n=Kr(e.children);r.push(new $(e.value,n))}return r.filter(e=>!t.has(e))}function qa(i){return i.data||{}}function Wa(i){return i.resolve||{}}function Ga(i,r,t,e,n,o,a){return _t(async c=>{let{state:s,tree:l}=await Ba(i,r,t,e,c.extractedUrl,n,o,a);return z(h({},c),{targetSnapshot:s,urlAfterRedirects:l})})}function Qa(i){return _t(r=>{let{targetSnapshot:t,guards:{canActivateChecks:e}}=r;if(!e.length)return p(r);let n=new Set(e.map(c=>c.route)),o=new Set;for(let c of n)if(!o.has(c))for(let s of Yr(c))o.add(s);let a=0;return G(o).pipe(Di(c=>n.has(c)?Za(c,t,i):(c.data=an(c,c.parent,i).resolve,p(void 0))),O(()=>a++),Li(1),_t(c=>a===o.size?p(r):W))})}function Yr(i){let r=i.children.map(t=>Yr(t)).flat();return[i,...r]}function Za(i,r,t){let e=i.routeConfig,n=i._resolve;return e?.title!==void 0&&!jr(e)&&(n[De]=e.title),je(()=>(i.data=an(i,i.parent,t).resolve,Ka(n,i,r).pipe(_(o=>(i._resolvedData=o,i.data=h(h({},i.data),o),null)))))}function Ka(i,r,t){let e=qi(i);if(e.length===0)return p({});let n={};return G(e).pipe(_t(o=>Ya(i[o],r,t).pipe(bt(),O(a=>{if(a instanceof ie)throw _i(new St,a);n[o]=a}))),Li(1),_(()=>n),de(o=>Vr(o)?W:Fe(o)))}function Ya(i,r,t){let e=r._environmentInjector,n=ae(i,e),o=n.resolve?n.resolve(r,t):Q(e,()=>n(r,t));return Ut(o)}function _r(i){return tt(r=>{let t=i(r);return t?G(t).pipe(_(()=>r)):p(r)})}var dn=(()=>{class i{buildTitle(t){let e,n=t.root;for(;n!==void 0;)e=this.getResolvedTitleForRoute(n)??e,n=n.children.find(o=>o.outlet===u);return e}getResolvedTitleForRoute(t){return t.data[De]}static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:()=>d(Xr)})}return i})(),Xr=(()=>{class i extends dn{title;constructor(t){super(),this.title=t}updateTitle(t){let e=this.buildTitle(t);e!==void 0&&this.title.setTitle(e)}static \u0275fac=function(e){return new(e||i)(ht(Wn))};static \u0275prov=jt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),se=new y("",{factory:()=>({})}),Ne=new y(""),Jr=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Bn);async loadComponent(t,e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Promise.resolve(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let n=(async()=>{try{let o=await yr(Q(t,()=>e.loadComponent())),a=await eo(Fi(o));return this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=a,a}finally{this.componentLoaders.delete(e)}})();return this.componentLoaders.set(e,n),n}loadChildren(t,e){if(this.childrenLoaders.get(e))return this.childrenLoaders.get(e);if(e._loadedRoutes)return Promise.resolve({routes:e._loadedRoutes,injector:e._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(e);let n=(async()=>{try{let o=await to(e,this.compiler,t,this.onLoadEndListener);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(e)}})();return this.childrenLoaders.set(e,n),n}static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})();async function to(i,r,t,e){let n=await yr(Q(t,()=>i.loadChildren())),o=await eo(Fi(n)),a;o instanceof Un||Array.isArray(o)?a=o:a=await r.compileModuleAsync(o),e&&e(i);let c,s,l=!1,m;return Array.isArray(a)?(s=a,l=!0):(c=a.create(t).injector,m=a,s=c.get(Ne,[],{optional:!0,self:!0}).flat()),{routes:s.map(ln),injector:c,factory:m}}async function eo(i){return i}var ki=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:()=>d(Xa)})}return i})(),Xa=(()=>{class i{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})(),io=new y("");var Ja=()=>{},no=new y(""),ro=(()=>{class i{currentNavigation=w(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=w(null);events=new A;transitionAbortWithErrorSubject=new A;configLoader=d(Jr);environmentInjector=d(wt);destroyRef=d(Ni);urlSerializer=d(re);rootContexts=d(oe);location=d(Ke);inputBindingEnabled=d(yi,{optional:!0})!==null;titleStrategy=d(dn);options=d(se,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||ra;urlHandlingStrategy=d(ki);createViewTransition=d(io,{optional:!0});navigationErrorHandler=d(no,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>p(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=n=>this.events.next(new di(n)),e=n=>this.events.next(new mi(n));this.configLoader.onLoadEndListener=e,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let e=++this.navigationId;k(()=>{this.transitions?.next(z(h({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:e,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new q(null),this.transitions.pipe(X(e=>e!==null),tt(e=>{let n=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===e.id;return p(e).pipe(tt(s=>{if(this.navigationId>e.id)return this.cancelNavigationTransition(e,"",D.SupersededByNewNavigation),W;this.currentTransition=e;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?z(h({},l),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let m=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!m&&v!=="reload")return this.events.next(new gt(s.id,this.urlSerializer.serialize(s.rawUrl),"",Se.IgnoredSameUrlNavigation)),s.resolve(!1),W;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return p(s).pipe(tt(f=>(this.events.next(new Nt(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?W:Promise.resolve(f))),Ga(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),O(f=>{e.targetSnapshot=f.targetSnapshot,e.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(N=>(N.finalUrl=f.urlAfterRedirects,N)),this.events.next(new Ie)}),tt(f=>G(e.routesRecognizeHandler.deferredHandle??p(void 0)).pipe(_(()=>f))),O(()=>{let f=new Re(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(m&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:N,source:Y,restoredState:Mt,extras:le}=s,Ai=new Nt(f,this.urlSerializer.serialize(N),Y,Mt);this.events.next(Ai);let Ue=Ur(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=e=z(h({},s),{targetSnapshot:Ue,urlAfterRedirects:N,extras:z(h({},le),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Et=>(Et.finalUrl=N,Et)),p(e)}else return this.events.next(new gt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Se.IgnoredByUrlHandlingStrategy)),s.resolve(!1),W}),_(s=>{let l=new ai(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=e=z(h({},s),{guards:la(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),e}),wa(s=>this.events.next(s)),tt(s=>{if(e.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw _i(this.urlSerializer,s.guardsResult);let l=new si(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!c())return W;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",D.GuardRejected),W;if(s.guards.canActivateChecks.length===0)return p(s);let m=new ci(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(m),!c())return W;let v=!1;return p(s).pipe(Qa(this.paramsInheritanceStrategy),O({next:()=>{v=!0;let f=new li(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{v||this.cancelNavigationTransition(s,"",D.NoDataFromResolver)}}))}),_r(s=>{let l=v=>{let f=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let N=v._environmentInjector;f.push(this.configLoader.loadComponent(N,v.routeConfig).then(Y=>{v.component=Y}))}for(let N of v.children)f.push(...l(N));return f},m=l(s.targetSnapshot.root);return m.length===0?p(s):G(Promise.all(m).then(()=>s))}),tt(s=>{let l=oa(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=e=s=z(h({},s),{targetRouterState:l}),this.currentNavigation.update(m=>(m.targetRouterState=l,m)),p(s)}),_r(()=>this.afterPreactivation()),tt(()=>{let{currentSnapshot:s,targetSnapshot:l}=e,m=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return m?G(m).pipe(_(()=>e)):p(e)}),J(1),tt(s=>{n=!1,this.events.next(new Jt);let l=e.beforeActivateHandler.deferredHandle;return l?G(l.then(()=>s)):p(s)}),O(s=>{new tn(t.routeReuseStrategy,e.targetRouterState,e.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),c()&&(o=!0,this.currentNavigation.update(l=>(l.abort=Ja,l)),this.lastSuccessfulNavigation.set(k(this.currentNavigation)),this.events.next(new mt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),P(qr(a.signal).pipe(X(()=>!o&&n),O(()=>{this.cancelNavigationTransition(e,a.signal.reason+"",D.Aborted)}))),O({complete:()=>{o=!0}}),P(this.transitionAbortWithErrorSubject.pipe(O(s=>{throw s}))),Be(()=>{a.abort(),o||this.cancelNavigationTransition(e,"",D.SupersededByNewNavigation),this.currentTransition?.id===e.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),de(s=>{if(o=!0,this.destroyed)return e.resolve(!1),W;if(Hr(s))this.events.next(new K(e.id,this.urlSerializer.serialize(e.extractedUrl),s.message,s.cancellationCode)),ca(s)?this.events.next(new te(s.url,s.navigationBehaviorOptions)):e.resolve(!1);else{let l=new Pt(e.id,this.urlSerializer.serialize(e.extractedUrl),s,e.targetSnapshot??void 0);try{let m=Q(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(m instanceof ie){let{message:v,cancellationCode:f}=_i(this.urlSerializer,m);this.events.next(new K(e.id,this.urlSerializer.serialize(e.extractedUrl),v,f)),this.events.next(new te(m.redirectTo,m.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(m){this.options.resolveNavigationPromiseOnError?e.resolve(!1):e.reject(m)}}return W}))}))}cancelNavigationTransition(t,e,n){let o=new K(t.id,this.urlSerializer.serialize(t.extractedUrl),e,n);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),e=k(this.currentNavigation),n=e?.targetBrowserUrl??e?.extractedUrl;return t.toString()!==n?.toString()&&!e?.extras.skipLocationChange}static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})();function ts(i){return i!==xe}var oo=new y("");var ao=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:()=>d(es)})}return i})(),wi=class{shouldDetach(r){return!1}store(r,t){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,t){return r.routeConfig===t.routeConfig}shouldDestroyInjector(r){return!0}},es=(()=>{class i extends wi{static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})(),Ci=(()=>{class i{urlSerializer=d(re);options=d(se,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(Ke);urlHandlingStrategy=d(ki);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new H;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:e,targetBrowserUrl:n}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,e):e,a=n??o;return a instanceof H?this.urlSerializer.serialize(a):a}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:e,initialUrl:n}){e&&t?(this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(e,n),this.routerState=t):this.rawUrlTree=n}routerState=Ur(null,d(wt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:()=>d(is)})}return i})(),is=(()=>{class i extends Ci{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(e=>{e.type==="popstate"&&setTimeout(()=>{t(e.url,e.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,e){t instanceof Nt?this.updateStateMemento():t instanceof gt?this.commitTransition(e):t instanceof Re?this.urlUpdateStrategy==="eager"&&(e.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof Jt?(this.commitTransition(e),this.urlUpdateStrategy==="deferred"&&!e.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof K&&!Pr(t)?this.restoreHistory(e):t instanceof Pt?this.restoreHistory(e,!0):t instanceof mt&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,e){let{extras:n,id:o}=e,{replaceUrl:a,state:c}=n;if(this.location.isCurrentPathEqualTo(t)||a){let s=this.browserPageId,l=h(h({},c),this.generateNgRouterState(o,s,e));this.location.replaceState(t,"",l)}else{let s=h(h({},c),this.generateNgRouterState(o,this.browserPageId+1,e));this.location.go(t,"",s)}}restoreHistory(t,e=!1){if(this.canceledNavigationResolution==="computed"){let n=this.browserPageId,o=this.currentPageId-n;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(e&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,e,n){return this.canceledNavigationResolution==="computed"?h({navigationId:t,\u0275routerPageId:e},this.routerUrlState(n)):h({navigationId:t},this.routerUrlState(n))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})();function mn(i,r){i.events.pipe(X(t=>t instanceof mt||t instanceof K||t instanceof Pt||t instanceof gt),_(t=>t instanceof mt||t instanceof gt?0:(t instanceof K?t.code===D.Redirect||t.code===D.SupersededByNewNavigation:!1)?2:1),X(t=>t!==2),J(1)).subscribe(()=>{r()})}var ce=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Fn);stateManager=d(Ci);options=d(se,{optional:!0})||{};pendingTasks=d(An);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(ro);urlSerializer=d(re);location=d(Ke);urlHandlingStrategy=d(ki);injector=d(wt);_events=new A;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(ao);injectorCleanup=d(oo,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Ne,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(yi,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ft;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(e=>{try{let n=this.navigationTransitions.currentTransition,o=k(this.navigationTransitions.currentNavigation);if(n!==null&&o!==null){if(this.stateManager.handleRouterEvent(e,o),e instanceof K&&e.code!==D.Redirect&&e.code!==D.SupersededByNewNavigation)this.navigated=!0;else if(e instanceof mt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(e instanceof te){let a=e.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(e.url,n.currentRawUrl),s=h({scroll:n.extras.scroll,browserUrl:n.extras.browserUrl,info:n.extras.info,skipLocationChange:n.extras.skipLocationChange,replaceUrl:n.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ts(n.source)},a);this.scheduleNavigation(c,xe,null,s,{resolve:n.resolve,reject:n.reject,promise:n.promise})}}ia(e)&&this._events.next(e)}catch(n){this.navigationTransitions.transitionAbortWithErrorSubject.next(n)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),xe,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,e,n,o)=>{this.navigateToSyncWithBrowser(t,n,e,o)})}navigateToSyncWithBrowser(t,e,n,o){let a=n?.navigationId?n:null,c=n?.\u0275routerUrl??t;if(n?.\u0275routerUrl&&(o=z(h({},o),{browserUrl:t})),n){let l=h({},n);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(c);this.scheduleNavigation(s,e,a,o).catch(l=>{this.disposed||this.injector.get(He)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return k(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(ln),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,e={}){let{relativeTo:n,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=e,l=s?this.currentUrlTree.fragment:a,m=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":m=h(h({},this.currentUrlTree.queryParams),o);break;case"preserve":m=this.currentUrlTree.queryParams;break;default:m=o||null}m!==null&&(m=this.removeEmptyProps(m));let v;try{let f=n?n.snapshot:this.routerState.snapshot.root;v=Dr(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),v=this.currentUrlTree.root}return Or(v,t,m,l??null,this.urlSerializer)}navigateByUrl(t,e={skipLocationChange:!1}){let n=Rt(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(o,xe,null,e)}navigate(t,e={skipLocationChange:!1}){return ns(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(In(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,e){let n;if(e===!0?n=h({},kr):e===!1?n=h({},Wi):n=h(h({},Wi),e),Rt(t))return hr(this.currentUrlTree,t,n);let o=this.parseUrl(t);return hr(this.currentUrlTree,o,n)}removeEmptyProps(t){return Object.entries(t).reduce((e,[n,o])=>(o!=null&&(e[n]=o),e),{})}scheduleNavigation(t,e,n,o,a){if(this.disposed)return Promise.resolve(!1);let c,s,l;a?(c=a.resolve,s=a.reject,l=a.promise):l=new Promise((v,f)=>{c=v,s=f});let m=this.pendingTasks.add();return mn(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(m))}),this.navigationTransitions.handleNavigationRequest({source:e,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:c,reject:s,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})();function ns(i){for(let r=0;r<i.length;r++)if(i[r]==null)throw new M(4008,!1)}var as=(()=>{class i{router=d(ce);stateManager=d(Ci);fragment=w("");queryParams=w({});path=w("");serializer=d(re);constructor(){this.updateState(),this.router.events?.subscribe(t=>{t instanceof mt&&this.updateState()})}updateState(){let{fragment:t,root:e,queryParams:n}=this.stateManager.getCurrentUrlTree();this.fragment.set(t),this.queryParams.set(n),this.path.set(this.serializer.serialize(new H(e)))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=U({token:i,factory:i.\u0275fac})}return i})(),Si=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new Qe("href"),{optional:!0});reactiveHref=$n(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return k(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}set target(t){this._target.set(t)}get target(){return k(this._target)}_target=w(void 0);set queryParams(t){this._queryParams.set(t)}get queryParams(){return k(this._queryParams)}_queryParams=w(void 0,{equal:()=>!1});set fragment(t){this._fragment.set(t)}get fragment(){return k(this._fragment)}_fragment=w(void 0);set queryParamsHandling(t){this._queryParamsHandling.set(t)}get queryParamsHandling(){return k(this._queryParamsHandling)}_queryParamsHandling=w(void 0);set state(t){this._state.set(t)}get state(){return k(this._state)}_state=w(void 0,{equal:()=>!1});set info(t){this._info.set(t)}get info(){return k(this._info)}_info=w(void 0,{equal:()=>!1});set relativeTo(t){this._relativeTo.set(t)}get relativeTo(){return k(this._relativeTo)}_relativeTo=w(void 0);set preserveFragment(t){this._preserveFragment.set(t)}get preserveFragment(){return k(this._preserveFragment)}_preserveFragment=w(!1);set skipLocationChange(t){this._skipLocationChange.set(t)}get skipLocationChange(){return k(this._skipLocationChange)}_skipLocationChange=w(!1);set replaceUrl(t){this._replaceUrl.set(t)}get replaceUrl(){return k(this._replaceUrl)}_replaceUrl=w(!1);browserUrl=Ze(void 0);isAnchorElement;onChanges=new A;applicationErrorHandler=d(He);options=d(se,{optional:!0});reactiveRouterState=d(as);constructor(t,e,n,o,a,c){this.router=t,this.route=e,this.tabIndexAttribute=n,this.renderer=o,this.el=a,this.locationStrategy=c;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s==="a"||s==="area"||!!(typeof customElements=="object"&&customElements.get(s)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.onChanges.next(this)}routerLinkInput=w(null);set routerLink(t){t==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Rt(t)?this.routerLinkInput.set(t):this.routerLinkInput.set(Array.isArray(t)?t:[t]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,e,n,o,a){let c=this._urlTree();if(c===null||this.isAnchorElement&&(t!==0||e||n||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let s=this.browserUrl(),l=h({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,l)?.catch(m=>{this.applicationErrorHandler(m)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(t,e){let n=this.renderer,o=this.el.nativeElement;e!==null?n.setAttribute(o,t,e):n.removeAttribute(o,t)}_urlTree=Ui(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let t=n=>n==="preserve"||n==="merge";(t(this._queryParamsHandling())||t(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:Rt(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(t,e)=>this.computeHref(t)===this.computeHref(e)});get urlTree(){return k(this._urlTree)}computeHref(t){return t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null}static \u0275fac=function(e){return new(e||i)(Ht(ce),Ht(ot),Dn("tabindex"),Ht(pe),Ht(F),Ht(Hn))};static \u0275dir=L({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(e,n){e&1&&ct("click",function(a){return n.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),e&2&&Z("href",n.reactiveHref(),Ln)("target",n._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Gt],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Gt],replaceUrl:[2,"replaceUrl","replaceUrl",Gt],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[he]})}return i})();var ss=new y("");function hn(i,...r){return En([{provide:Ne,multi:!0,useValue:i},{provide:ot,useFactory:cs},{provide:jn,multi:!0,useFactory:ls},r.map(t=>t.\u0275providers)])}function cs(){return d(ce).routerState.root}function ls(){let i=d(At);return r=>{let t=i.get(zn);if(r!==t.components[0])return;let e=i.get(ce),n=i.get(ds);i.get(ms)===1&&e.initialNavigation(),i.get(hs,null,{optional:!0})?.setUpPreloading(),i.get(ss,null,{optional:!0})?.init(),e.resetRootComponentType(t.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var ds=new y("",{factory:()=>new A}),ms=new y("",{factory:()=>1});var hs=new y("");var so=[{path:"realms",loadComponent:()=>import("./chunk-3TYJSCAQ.js").then(i=>i.RealmsTable)}];var co={providers:[Tn(),hn(so)]};function lo(i){return Error(`Unable to find icon with the name "${i}"`)}function us(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function mo(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function ho(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var vt=class{url;svgText;options;svgElement=null;constructor(r,t,e){this.url=r,this.svgText=t,this.options=e}},po=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new vt(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let a=this._sanitizer.sanitize($t.HTML,n);if(!a)throw ho(n);let c=Qt(a);return this._addSvgIconConfig(t,e,new vt("",c,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new vt(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize($t.HTML,e);if(!o)throw ho(e);let a=Qt(o);return this._addSvgIconSetConfig(t,new vt("",a,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize($t.RESOURCE_URL,t);if(!e)throw mo(t);let n=this._cachedIconsByUrl.get(e);return n?p(Ri(n)):this._loadSvgIconFromConfig(new vt(t,null)).pipe(O(o=>this._cachedIconsByUrl.set(e,o)),_(o=>Ri(o)))}getNamedSvgIcon(t,e=""){let n=uo(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(e);return a?this._getSvgFromIconSetConfigs(t,a):Fe(lo(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?p(Ri(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(_(e=>Ri(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return p(n);let o=e.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(de(c=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize($t.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(l)),p(null)})));return kn(o).pipe(_(()=>{let a=this._extractIconWithNameFromAnySet(t,e);if(!a)throw lo(t);return a}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,t,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(O(e=>t.svgText=e),_(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?p(null):this._fetchIcon(t).pipe(O(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,n);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),n);let c=this._svgElementFromString(Qt("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(Qt("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){let{name:a,value:c}=n[o];a!=="id"&&e.setAttribute(a,c)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw us();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let a=this._sanitizer.sanitize($t.RESOURCE_URL,e);if(!a)throw mo(e);let c=this._inProgressUrlFetches.get(a);if(c)return c;let s=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(_(l=>Qt(l)),Be(()=>this._inProgressUrlFetches.delete(a)),Rn());return this._inProgressUrlFetches.set(a,s),s}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(uo(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return ps(o)?new vt(o.url,null,o.options):new vt(o,null)}}static \u0275fac=function(e){return new(e||i)(ht(qn,8),ht(Gn),ht(ut,8),ht($e))};static \u0275prov=jt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ri(i){return i.cloneNode(!0)}function uo(i,r){return i+":"+r}function ps(i){return!!(i.url&&i.options)}var fs=["*"],gs=new y("MAT_ICON_DEFAULT_OPTIONS"),vs=new y("mat-icon-location",{providedIn:"root",factory:()=>{let i=d(ut),r=i?i.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),fo=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],_s=fo.map(i=>`[${i}]`).join(", "),bs=/^url\(['"]?#(.*?)['"]?\)$/,go=(()=>{class i{_elementRef=d(F);_iconRegistry=d(po);_location=d(vs);_errorHandler=d($e);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ft.EMPTY;constructor(){let t=d(new Qe("aria-hidden"),{optional:!0}),e=d(gs,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(a=>{o.setAttribute(a.name,`url('${t}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(_s),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)fo.forEach(a=>{let c=e[o],s=c.getAttribute(a),l=s?s.match(bs):null;if(l){let m=n.get(c);m||(m=[],n.set(c,m)),m.push({name:a,value:l[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(J(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(Z("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),Ge(n.color?"mat-"+n.color:""),E("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Gt],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:fs,decls:1,vars:0,template:function(e,n){e&1&&(j(),b(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
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
`],encapsulation:2})}return i})(),vo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=nt({type:i});static \u0275inj=et({imports:[lt]})}return i})();var _o=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=nt({type:i});static \u0275inj=et({imports:[lt]})}return i})();var ys=["*"],xs=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
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
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,ks=["unscopedContent"],Cs=["text"],Ss=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Rs=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Is=new y("ListOption"),Ms=(()=>{class i{_elementRef=d(F);static \u0275fac=function(e){return new(e||i)};static \u0275dir=L({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Es=(()=>{class i{_elementRef=d(F);static \u0275fac=function(e){return new(e||i)};static \u0275dir=L({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),As=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=L({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),bo=(()=>{class i{_listOption=d(Is,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=L({type:i,hostVars:4,hostBindings:function(e,n){e&2&&E("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),Ts=(()=>{class i extends bo{static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(i)))(n||i)}})();static \u0275dir=L({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[st]})}return i})(),Ds=(()=>{class i extends bo{static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(i)))(n||i)}})();static \u0275dir=L({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[st]})}return i})(),Os=new y("MAT_LIST_CONFIG"),un=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=B(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(B(t))}_disabled=w(!1);_defaultOptions=d(Os,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=L({type:i,hostVars:1,hostBindings:function(e,n){e&2&&Z("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),Ls=(()=>{class i{_elementRef=d(F);_ngZone=d(Tt);_listBase=d(un,{optional:!0});_platform=d(kt);_hostElement;_isButtonElement;_noopAnimations=Ye();_avatars;_icons;set lines(t){this._explicitLines=_e(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=B(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(B(t))}_disabled=w(!1);_subscriptions=new Ft;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(Zn).load(or);let t=d(rr,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new nr(this,this._ngZone,this._hostElement,this._platform,d(At)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ze(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=L({type:i,contentQueries:function(e,n,o){if(e&1&&pt(o,Ts,4)(o,Ds,4),e&2){let a;S(a=R())&&(n._avatars=a),S(a=R())&&(n._icons=a)}},hostVars:4,hostBindings:function(e,n){e&2&&(Z("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),E("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var wo=(()=>{class i extends un{static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(i)))(n||i)}})();static \u0275cmp=x({type:i,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[yt([{provide:un,useExisting:i}]),st],ngContentSelectors:ys,decls:1,vars:0,template:function(e,n){e&1&&(j(),b(0))},styles:[xs],encapsulation:2})}return i})(),yo=(()=>{class i extends Ls{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=B(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(i)))(n||i)}})();static \u0275cmp=x({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,o){if(e&1&&pt(o,Es,5)(o,Ms,5)(o,As,5),e&2){let a;S(a=R())&&(n._lines=a),S(a=R())&&(n._titles=a),S(a=R())&&(n._meta=a)}},viewQuery:function(e,n){if(e&1&&ge(ks,5)(Cs,5),e&2){let o;S(o=R())&&(n._unscopedContent=o.first),S(o=R())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(Z("aria-current",n._getAriaCurrent()),E("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[st],ngContentSelectors:Rs,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(j(Ss),b(0),C(1,"span",1),b(2,1),b(3,2),C(4,"span",2,0),ct("cdkObserveContent",function(){return n._updateItemLines(!0)}),b(6,3),T()(),b(7,4),b(8,5),Dt(9,"div",3))},dependencies:[Kn],encapsulation:2})}return i})();var xo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=nt({type:i});static \u0275inj=et({imports:[Yn,ar,sr,lt,_o]})}return i})();var Mi=["*"],Us=["content"],ko=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],Co=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function Fs(i,r){if(i&1){let t=fe();C(0,"div",1),ct("click",function(){zt(t);let n=Wt();return Bt(n._onBackdropClicked())}),T()}if(i&2){let t=Wt();E("mat-drawer-shown",t._isShowingBackdrop())}}function js(i,r){i&1&&(C(0,"mat-drawer-content"),b(1,2),T())}function zs(i,r){if(i&1){let t=fe();C(0,"div",1),ct("click",function(){zt(t);let n=Wt();return Bt(n._onBackdropClicked())}),T()}if(i&2){let t=Wt();E("mat-drawer-shown",t._isShowingBackdrop())}}function Bs(i,r){i&1&&(C(0,"mat-sidenav-content"),b(1,2),T())}var $s=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
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
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
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
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
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
`;var Hs=new y("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),gn=new y("MAT_DRAWER_CONTAINER"),Pe=(()=>{class i extends Zt{_platform=d(kt);_changeDetectorRef=d(xt);_element=d(F);_ngZone=d(Tt);_isInert=!1;_container=d(fn);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Sn(50),J(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute("inert","true"):e.removeAttribute("inert")}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(i)))(n||i)}})();static \u0275cmp=x({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,n){e&2&&(We("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),E("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[yt([{provide:Zt,useExisting:i}]),st],ngContentSelectors:Mi,decls:1,vars:0,template:function(e,n){e&1&&(j(),b(0))},encapsulation:2})}return i})(),pn=(()=>{class i{_elementRef=d(F);_focusTrapFactory=d(Jn);_focusMonitor=d(Qn);_platform=d(kt);_ngZone=d(Tt);_renderer=d(pe);_interactivityChecker=d(Xn);_doc=d(ut);_container=d(gn,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=B(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=B(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(B(t))}_opened=w(!1);_openedVia=null;_animationStarted=new A;_animationEnd=new A;openedChange=new it(!0);_openedStream=this.openedChange.pipe(X(t=>t),_(()=>{}));openedStart=this._animationStarted.pipe(X(()=>this.opened),Oi(void 0));_closedStream=this.openedChange.pipe(X(t=>!t),_(()=>{}));closedStart=this._animationStarted.pipe(X(()=>!this.opened),Oi(void 0));_destroyed=new A;onPositionChanged=new it;_content;_modeChanged=new A;_injector=d(At);_changeDetectorRef=d(xt);constructor(){this.openedChange.pipe(P(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!tr(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{a(),c(),n.removeAttribute("tabindex")},a=this._renderer.listen(n,"blur",o),c=this._renderer.listen(n,"mousedown",o)})),n.focus(e))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ue(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,e,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(J(1)).subscribe(a=>o(a?"open":"close"))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,n=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,e)),n.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,n){if(e&1&&ge(Us,5),e&2){let o;S(o=R())&&(n._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,n){e&2&&(Z("align",null)("tabIndex",n.mode!=="side"?"-1":null),We("visibility",!n._container&&!n.opened?"hidden":null),E("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Mi,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(j(),C(0,"div",1,0),b(2),T())},dependencies:[Zt],encapsulation:2})}return i})(),fn=(()=>{class i{_dir=d(er,{optional:!0});_element=d(F);_ngZone=d(Tt);_changeDetectorRef=d(xt);_animationDisabled=Ye();_transitionsEnabled=!1;_allDrawers;_drawers=new On;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=B(t)}_autosize=d(Hs);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:B(t)}_backdropOverride=null;backdropClick=new it;_start=null;_end=null;_left=null;_right=null;_destroyed=new A;_doCheckSubject=new A;_contentMargins={left:null,right:null};_contentMarginChanges=new A;get scrollable(){return this._userContent||this._content}_injector=d(At);constructor(){let t=d(kt),e=d(ir);this._dir?.change.pipe(P(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(P(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(me(this._allDrawers),P(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(me(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Cn(10),P(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,e-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();e+=n,t-=n}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(P(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(P(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(P(this._drawers.changes)).subscribe(()=>{ue({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(P(ze(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?e.add(n):e.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,n,o){if(e&1&&pt(o,Pe,5)(o,pn,5),e&2){let a;S(a=R())&&(n._content=a.first),S(a=R())&&(n._allDrawers=a)}},viewQuery:function(e,n){if(e&1&&ge(Pe,5),e&2){let o;S(o=R())&&(n._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,n){e&2&&E("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[yt([{provide:gn,useExisting:i}])],ngContentSelectors:Co,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(j(ko),Vt(0,Fs,1,2,"div",0),b(1),b(2,1),Vt(3,js,2,0,"mat-drawer-content")),e&2&&(qt(n.hasBackdrop?0:-1),Ve(3),qt(n._content?-1:3))},dependencies:[Pe],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
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
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
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
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
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
`],encapsulation:2})}return i})(),Ii=(()=>{class i extends Pe{static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(i)))(n||i)}})();static \u0275cmp=x({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[yt([{provide:Zt,useExisting:i},{provide:Pe,useExisting:i}]),st],ngContentSelectors:Mi,decls:1,vars:0,template:function(e,n){e&1&&(j(),b(0))},encapsulation:2})}return i})(),vn=(()=>{class i extends pn{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=B(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=_e(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=_e(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(i)))(n||i)}})();static \u0275cmp=x({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,n){e&2&&(Z("tabIndex",n.mode!=="side"?"-1":null)("align",null),We("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),E("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[yt([{provide:pn,useExisting:i}]),st],ngContentSelectors:Mi,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(j(),C(0,"div",1,0),b(2),T())},dependencies:[Zt],encapsulation:2})}return i})(),So=(()=>{class i extends fn{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(i)))(n||i)}})();static \u0275cmp=x({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,n,o){if(e&1&&pt(o,Ii,5)(o,vn,5),e&2){let a;S(a=R())&&(n._content=a.first),S(a=R())&&(n._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,n){e&2&&E("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[yt([{provide:gn,useExisting:i},{provide:fn,useExisting:i}]),st],ngContentSelectors:Co,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(j(ko),Vt(0,zs,1,2,"div",0),b(1),b(2,1),Vt(3,Bs,2,0,"mat-sidenav-content")),e&2&&(qt(n.hasBackdrop?0:-1),Ve(3),qt(n._content?-1:3))},dependencies:[Ii],styles:[$s],encapsulation:2})}return i})(),Ro=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=nt({type:i});static \u0275inj=et({imports:[ji,lt,ji]})}return i})();var qs=["*",[["mat-toolbar-row"]]],Ws=["*","mat-toolbar-row"],Gs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=L({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Io=(()=>{class i{_elementRef=d(F);_platform=d(kt);_document=d(ut);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["mat-toolbar"]],contentQueries:function(e,n,o){if(e&1&&pt(o,Gs,5),e&2){let a;S(a=R())&&(n._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(Ge(n.color?"mat-"+n.color:""),E("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Ws,decls:2,vars:0,template:function(e,n){e&1&&(j(qs),b(0),b(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
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
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return i})();var Mo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=nt({type:i});static \u0275inj=et({imports:[lt]})}return i})();var Ei=class i{title="wow-gilde";authApi="https://oauth.battle.net/authorize";state="testState";redirect_uri="https://localhost:4200";loginHref=this.authApi+"?response_type=code&scope=openid&state="+this.state+"&redirect_uri="+this.redirect_uri+"&client_id="+mr.clientId;code=null;urlState=null;route=d(ot);ngOnInit(){this.route.queryParams.subscribe(r=>{this.code=r.code,this.urlState=r.state})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=x({type:i,selectors:[["app-root"]],decls:24,vars:0,consts:[["sidenav",""],[1,"container"],["mode","over"],["matIconButton","","type","button",3,"click"],["routerLink","/realms",1,"list-item"],["type","button","matFab","","extended","",1,"mat-fab-button"],[1,"spacer"],["routerLink","/",1,"logo-box"],["href","/."],["src","assets/images/Homestone_Icon.png","alt","Homestone Icon",1,"header-logo"],[1,"content"]],template:function(t,e){if(t&1){let n=fe();C(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-toolbar")(4,"button",3),ct("click",function(){zt(n);let a=qe(2);return Bt(a.toggle())}),C(5,"mat-icon"),ve(6,"close"),T()()(),C(7,"mat-list")(8,"mat-list-item",4)(9,"button",5)(10,"mat-icon"),ve(11,"castle"),T(),ve(12," Realms "),T()()()(),C(13,"mat-sidenav-content")(14,"mat-toolbar")(15,"button",3),ct("click",function(){zt(n);let a=qe(2);return Bt(a.toggle())}),C(16,"mat-icon"),ve(17,"menu"),T()(),C(18,"span",6)(19,"div",7)(20,"a",8),Dt(21,"img",9),T()()()(),C(22,"div",10),Dt(23,"router-outlet"),T()()()}},dependencies:[dr,cr,lr,vo,go,xo,wo,yo,Ro,vn,So,Ii,Mo,Io,Si,Oe],styles:[".container[_ngcontent-%COMP%]{min-height:100vh}.content[_ngcontent-%COMP%]{margin-top:1rem}.list-item[_ngcontent-%COMP%]{margin:16px 0;width:100%}.mat-fab-button[_ngcontent-%COMP%]{width:100%}.logo-box[_ngcontent-%COMP%]{display:flex;justify-self:center;align-items:center;height:calc(100% - 64px)}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.header-logo[_ngcontent-%COMP%]{margin-top:1rem;width:4rem;height:4rem}"]})};Vn(Ei,co).catch(i=>console.error(i));

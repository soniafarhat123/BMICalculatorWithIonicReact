System.register(["./index-legacy-b378e482.js"],(function(e,t){"use strict";var o,n,i,r,s,a,d,l;return{setters:[e=>{o=e.b,n=e.d,i=e.e,r=e.a,s=e.f,a=e.g,d=e.h,l=e.j}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
var t;!function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"}(t||(t={}));const c={getEngine(){var e;return(null===(e=null==o?void 0:o.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Keyboard"))&&(null==o?void 0:o.Capacitor.Plugins.Keyboard)},getResizeMode(){const e=this.getEngine();return e&&e.getResizeMode?e.getResizeMode():Promise.resolve(void 0)}},u=new WeakMap,v=(e,t,o,n=0,i=!1)=>{u.has(e)!==o&&(o?m(e,t,n,i):f(e,t))},m=(e,t,o,n=!1)=>{const i=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n&&(r.disabled=!0),i.appendChild(r),u.set(e,r);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${o}px,0) scale(0)`},f=(e,t)=>{const o=u.get(e);o&&(u.delete(e),o.remove()),e.style.pointerEvents="",t.style.transform=""},g="input, textarea, [no-blur], [contenteditable]",p=(e,t,o,n)=>{const i=e.top,r=e.bottom,s=t.top,a=s+15,d=Math.min(t.bottom,n-o)-50-r,l=a-i,c=Math.round(d<0?-d:l>0?-l:0),u=Math.min(c,i-s),v=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,v)),scrollPadding:o,inputSafeY:4-(i-a)}},y="$ionPaddingTimer",w=(e,t,o)=>{const n=e[y];n&&clearTimeout(n),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[y]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),o&&o()}),120)},h=(e,t,o)=>{e.addEventListener("focusout",(()=>{t&&w(t,0,o)}),{once:!0})};let b=0;const E="data-ionic-skip-scroll-assist",S=e=>{document.activeElement!==e&&(e.setAttribute(E,"true"),e.focus())},L=async(e,t,o,n,i,r,s=!1)=>{if(!o&&!n)return;const c=((e,t,o)=>{var n;const i=null!==(n=e.closest("ion-item,[ion-item]"))&&void 0!==n?n:e;return p(i.getBoundingClientRect(),t.getBoundingClientRect(),o,e.ownerDocument.defaultView.innerHeight)})(e,o||n,i);if(o&&Math.abs(c.scrollAmount)<4)return S(t),void(r&&null!==o&&(w(o,b),h(t,o,(()=>b=0))));if(v(e,t,!0,c.inputSafeY,s),S(t),a((()=>e.click())),r&&o&&(b=c.scrollPadding,w(o,b)),"undefined"!=typeof window){let n;const i=async()=>{void 0!==n&&clearTimeout(n),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",i),o&&await l(o,0,c.scrollAmount,c.scrollDuration),v(e,t,!1,c.inputSafeY),S(t),r&&h(t,o,(()=>b=0))},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",i)};if(o){const e=await d(o),r=e.scrollHeight-e.clientHeight;if(c.scrollAmount>r-e.scrollTop)return"password"===t.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",i),void(n=setTimeout(i,1e3))}i()}};e("startInputShims",(async(e,o)=>{const a=document,d="ios"===o,l="android"===o,u=e.getNumber("keyboardHeight",290),m=e.getBoolean("scrollAssist",!0),f=e.getBoolean("hideCaretOnScroll",d),p=e.getBoolean("inputBlurring",d),y=e.getBoolean("scrollPadding",!0),w=Array.from(a.querySelectorAll("ion-input, ion-textarea")),h=new WeakMap,b=new WeakMap,S=await c.getResizeMode(),M=async e=>{await new Promise((t=>r(e,t)));const o=e.shadowRoot||e,a=o.querySelector("input")||o.querySelector("textarea"),d=s(e),c=d?null:e.closest("ion-footer");if(a){if(d&&f&&!h.has(e)){const t=((e,t,o)=>{if(!o||!t)return()=>{};const r=o=>{var n;(n=t)===n.getRootNode().activeElement&&v(e,t,o)},s=()=>v(e,t,!1),a=()=>r(!0),d=()=>r(!1);return n(o,"ionScrollStart",a),n(o,"ionScrollEnd",d),t.addEventListener("blur",s),()=>{i(o,"ionScrollStart",a),i(o,"ionScrollEnd",d),t.removeEventListener("blur",s)}})(e,a,d);h.set(e,t)}if("date"!==a.type&&"datetime-local"!==a.type&&(d||c)&&m&&!b.has(e)){const o=((e,o,n,i,r,s,a,d=!1)=>{const l=s&&(void 0===a||a.mode===t.None),c=async()=>{o.hasAttribute(E)?o.removeAttribute(E):L(e,o,n,i,r,l,d)};return e.addEventListener("focusin",c,!0),()=>{e.removeEventListener("focusin",c,!0)}})(e,a,d,c,u,y,S,l);b.set(e,o)}}};p&&(()=>{let e=!0,t=!1;const o=document,i=()=>{t=!0},r=()=>{e=!0},s=n=>{if(t)return void(t=!1);const i=o.activeElement;if(!i)return;if(i.matches(g))return;const r=n.target;r!==i&&(r.matches(g)||r.closest(g)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};n(o,"ionScrollStart",i),o.addEventListener("focusin",r,!0),o.addEventListener("touchend",s,!1)})();for(const t of w)M(t);a.addEventListener("ionInputDidLoad",(e=>{M(e.detail)})),a.addEventListener("ionInputDidUnload",(e=>{(e=>{if(f){const t=h.get(e);t&&t(),h.delete(e)}if(m){const t=b.get(e);t&&t(),b.delete(e)}})(e.detail)}))}))}}}));

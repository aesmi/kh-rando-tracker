(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10365cd4"],{"01bf":function(t,e,i){"use strict";var n=i("77b0"),o=i.n(n);o.a},"10e8":function(t,e,i){"use strict";var n=i("22ca"),o=i.n(n);o.a},"22ca":function(t,e,i){},"4a68":function(t,e,i){},"60ef":function(t,e,i){},6821:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid",class:{disableShadows:t.disableShadows},style:t.gridStyle,on:{click:function(e){return e.target!==e.currentTarget?null:t.selectLocation("Free")}}},[i("div",{staticStyle:{"z-index":"0"}},t._l(t.items.locations,(function(e){return i("div",{staticClass:"group locations"},t._l(e,(function(e){return t.showWorld(e)?i("draggable",{key:e,staticClass:"dragArea",style:t.worldRowStyle,attrs:{group:"checks",disabled:!t.dragging,list:[]},on:{change:function(i){return t.add(e,i.added.element)}}},[i("ImportantLocation",{attrs:{file:e},on:{"undo-check":function(i){return t.removeCheck(e)}}})],1):t._e()})),1)})),0),i("draggable",{staticClass:"group checks dragArea",attrs:{list:t.items.checks[0],group:{name:"checks",pull:"clone",put:!1},item:".check",sort:!1},on:{start:function(e){t.dragging=!0},end:function(e){t.dragging=!1}}},[t._l(t.items.checks[0],(function(e){return i("div",{staticClass:"check",style:{padding:(t.settings.checkVerticalPadding||"2.5px")+" 0"}},[i("ImportantCheck",{key:e,style:{width:t.settings.checkSize},attrs:{file:e},on:{"found-report":function(e){return t.add(t.selectedLocation,"other/secret_reports")}}})],1)})),i("span",{staticStyle:{display:"flex","align-items":"center",flex:"1"}},[i("span",{staticStyle:{flex:"1"},style:t.numChecksStyle(t.numChecks,t.totalChecks),on:{click:[function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.incrementChecks(1)},function(e){return e.ctrlKey?t.incrementChecks(-1):null}],contextmenu:function(e){return t.incrementChecks(-1)}}},[i("span",[t._v(t._s(t.numChecks))]),i("span",[t._v(" / "+t._s(t.totalChecks))])]),t.hintsLoaded&&t.settings.showHintedChecks?i("span",{staticStyle:{flex:"1"},style:t.numChecksStyle(t.hintedChecks[0],t.hintedChecks[1])},[i("span",[t._v(t._s(t.hintedChecks[0]))]),i("span",[t._v(" / "+t._s(t.hintedChecks[1]))])]):t._e()])],2),t._l(t.items.checks.slice(1),(function(e,n){return i("draggable",{key:n,staticClass:"group checks dragArea",attrs:{list:e,group:{name:"checks",pull:"clone",put:!1},sort:!1},on:{start:function(e){t.dragging=!0},end:function(e){t.dragging=!1}}},t._l(e,(function(e){return i("div",{staticClass:"check",style:{padding:(t.settings.checkVerticalPadding||"2.5px")+" 0"}},[i("ImportantCheck",{key:e,attrs:{file:e}})],1)})),0)})),t.hintsAtBottom?[t.hintMessage?i("span",[t._v(t._s(t.hintMessage))]):i("span",[t._v("​")])]:t._e()],2)},o=[],c=(i("99af"),i("4de4"),i("0481"),i("4160"),i("d81d"),i("4069"),i("07ac"),i("159b"),i("d4ec")),s=i("bee2"),r=i("262e"),a=i("2caf"),l=i("9ab4"),h=i("60a3"),u=i("310e"),d=i.n(u),f=i("4bb5"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"inline-flex",flex:"1","justify-content":"center"},on:{contextmenu:function(e){return t.secondary({cell:t.file,offset:e.ctrlKey?-1:1})}}},[i("div",{staticClass:"item",class:t.cls,style:{width:t.width}},[i("img",{staticClass:"icon",class:{opaque:t.cell.opaque,disabled:t.cell.disabled},attrs:{src:"img/"+t.styledIcon(t.file)+".webp"}}),t.cell.disabled?t._e():i("transition-group",{attrs:{name:"fade-up"}},[t._t("default"),t.cell.secondaryLevel?i("div",{key:"secondary",staticClass:"secondary"},[i("img",{attrs:{src:"img/progression/"+t.secondaryFile+".webp"}}),i("transition",{attrs:{name:"fade-up"}},[t.secondaryNumber?i("img",{staticClass:"number",attrs:{src:"img/progression/numbers/"+t.secondaryNumber+".webp"}}):t._e()])],1):t._e(),t.hinted?i("div",{key:"report",staticClass:"report",class:{dim:t.hinted<0}},[i("img",{staticClass:"icon",attrs:{src:"img/progression/other/secret_reports.webp"}}),i("transition",{attrs:{name:"fade-up"}},[Math.abs(t.hinted)>1?i("img",{staticClass:"number",attrs:{src:"img/progression/numbers/"+Math.abs(t.hinted)+".webp"}}):t._e()])],1):t._e()],2),i("transition",{attrs:{name:"fade-cross"}},[t.cell.disabled?i("img",{staticClass:"cross",attrs:{src:"img/minimal/other/cross.webp"}}):t._e()]),t._t("after")],2)])},y=[],k=(i("a9e3"),Object(f["c"])("tracker_important")),b=function(t){Object(r["a"])(i,t);var e=Object(a["a"])(i);function i(){var t,n;return Object(c["a"])(this,i),n=e.apply(this,arguments),n.cls=null!==(t=n.cell.cls)&&void 0!==t?t:"",n}return Object(s["a"])(i,[{key:"styledIcon",value:function(t){var e,i=this.$store.getters["tracker_important/cell"](t),n=null===(e=this.$store.state.settings.iconStyles[i.category])||void 0===e?void 0:e.value;if(n===i.categoryExclude)return"default/".concat(t);switch(n){case"Minimal":return"minimal/".concat(t);case"Classic":return"legacy/".concat(t);default:return"default/".concat(t)}}},{key:"cell",get:function(){return this.$store.getters["tracker_important/cell"](this.file)}},{key:"secondaryFile",get:function(){return this.$store.getters["tracker_important/secondary"](this.file)}},{key:"secondaryNumber",get:function(){return this.$store.getters["tracker_important/secondaryNumber"](this.file)}}]),i}(h["c"]);Object(l["a"])([Object(h["b"])(String)],b.prototype,"file",void 0),Object(l["a"])([Object(h["b"])(Number)],b.prototype,"hinted",void 0),Object(l["a"])([Object(h["b"])(String)],b.prototype,"width",void 0),Object(l["a"])([k.Action],b.prototype,"primary",void 0),Object(l["a"])([k.Action],b.prototype,"secondary",void 0),Object(l["a"])([k.Action],b.prototype,"disable",void 0),b=Object(l["a"])([h["a"]],b);var g=b,m=g,v=(i("f699"),i("2877")),O=Object(v["a"])(m,p,y,!1,null,"1ee8bb13",null),C=O.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ImportantCell",{class:{active:t.settings.preselectWorld&&t.selectedLocation===t.file},attrs:{width:t.settings.worldSize,file:t.file,hinted:t.hinted},nativeOn:{click:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.handleClick(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:t.removeCheck(e):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:e.shiftKey?e.ctrlKey||e.altKey||e.metaKey?null:t.showOther(e):null}],mouseup:[function(e){return"button"in e&&1!==e.button||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:void(t.showChecks=!t.showChecks)},function(e){return"button"in e&&1!==e.button?null:e.shiftKey?e.ctrlKey||e.altKey||e.metaKey?null:t.disable({cell:t.file}):null}]},scopedSlots:t._u([{key:"after",fn:function(){return[i("transition",{attrs:{name:"fade-in"}},[t.showChecks?i("ChecksPopup",{key:"checkPopup",attrs:{location:t.file}}):t._e()],1)]},proxy:!0}])},[t.cell.checks||t.cell.totalChecks>-1?i("span",{key:"number",staticClass:"checksNumber"},[t._v(t._s(t.cell.checks)),-1!==t.cell.totalChecks?[i("span",{staticStyle:{color:"#fdbd8a"}},[t._v(" / ")]),i("span",{staticStyle:{color:"hsl(0, 100%, 75%)"}},[t._v(t._s(t.cell.totalChecks))])]:t.willBeHinted?[i("span",{staticStyle:{color:"#fdbd8a"}},[t._v(" / ")]),i("span",{staticStyle:{color:"hsl(0, 100%, 75%)",opacity:".45"}},[t._v("?")])]:t._e()],2):t._e(),t.cell.otherLevel?i("div",{key:"other",staticClass:"other"},[i("img",{attrs:{src:"img/progression/"+t.otherFile+".webp"}})]):t._e()])},_=[],w=(i("7db0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{on:{click:function(t){t.stopPropagation()},contextmenu:function(t){t.stopPropagation(),t.preventDefault()}}},t._l(t.checks,(function(t){return i("img",{attrs:{src:"img/"+t+".webp"}})})),0)}),S=[],L=function(t){Object(r["a"])(i,t);var e=Object(a["a"])(i);function i(){return Object(c["a"])(this,i),e.apply(this,arguments)}return Object(s["a"])(i,[{key:"checks",get:function(){return this.$store.state.tracker_important.foundChecks[this.location]}}]),i}(h["c"]);Object(l["a"])([Object(h["b"])(String)],L.prototype,"location",void 0),L=Object(l["a"])([h["a"]],L);var K=L,x=K,$=(i("10e8"),Object(v["a"])(x,w,S,!1,null,"767d3bdf",null)),A=$.exports,I=i("f00f"),M=Object(f["c"])("tracker_important"),F=Object(f["c"])("settings"),E=function(t){Object(r["a"])(i,t);var e=Object(a["a"])(i);function i(){var t;return Object(c["a"])(this,i),t=e.apply(this,arguments),t.showChecks=!1,t}return Object(s["a"])(i,[{key:"styledIcon",value:function(t){var e,i=this.$store.getters["tracker_important/cell"](t),n=null===(e=this.$store.state.settings.iconStyles[i.category])||void 0===e?void 0:e.value;if(n===i.categoryExclude)return"default/".concat(t);switch(n){case"Minimal":return"minimal/".concat(t);case"Classic":return"classic/".concat(t);default:return"default/".concat(t)}}},{key:"handleClick",value:function(t){if(this.settings.preselectWorld)this.file===this.selectedLocation?this.selectLocation("Free"):this.selectLocation(this.file);else{var e=t.shiftKey;this.primary({cell:this.file,offset:1,shift:e}),console.log("Clicked on",Object(I["a"])(this.file)+(t.shiftKey?" (shift)":""))}}},{key:"removeCheck",value:function(){var t=this.foundChecks[this.file];t.length&&this.undoCheck({check:t[t.length-1],location:this.file})}},{key:"showOther",value:function(t){this.other({cell:this.file,offset:t.ctrlKey?-1:1})}},{key:"cell",get:function(){return this.$store.getters["tracker_important/cell"](this.file)}},{key:"hinted",get:function(){var t,e=this;if(-1===this.items.all[this.file].totalChecks)return 0;var i=null===(t=this.hints.find((function(t){return t.location===e.file})))||void 0===t?void 0:t.report;return i?"Free"===i||-1!==this.items.all[i].totalChecks?1:-this.$store.getters["tracker_important/willBeHinted"](i):0}},{key:"willBeHinted",get:function(){return-1===this.items.all[this.file].totalChecks&&this.$store.getters["tracker_important/willBeHinted"](this.file)}},{key:"otherFile",get:function(){var t=this.cell.other;return Array.isArray(t)?t[this.cell.otherLevel-1]:t}}]),i}(h["c"]);Object(l["a"])([Object(h["b"])(String)],E.prototype,"file",void 0),Object(l["a"])([M.State],E.prototype,"items",void 0),Object(l["a"])([M.State],E.prototype,"foundChecks",void 0),Object(l["a"])([M.State],E.prototype,"hints",void 0),Object(l["a"])([M.State],E.prototype,"selectedLocation",void 0),Object(l["a"])([M.Action],E.prototype,"primary",void 0),Object(l["a"])([M.Action],E.prototype,"disable",void 0),Object(l["a"])([M.Action],E.prototype,"other",void 0),Object(l["a"])([M.Action],E.prototype,"undoCheck",void 0),Object(l["a"])([M.Mutation],E.prototype,"selectLocation",void 0),Object(l["a"])([F.State("important")],E.prototype,"settings",void 0),E=Object(l["a"])([Object(h["a"])({components:{ChecksPopup:A,ImportantCell:C}})],E);var P=E,B=P,W=(i("bcbf"),Object(v["a"])(B,j,_,!1,null,"d91205aa",null)),H=W.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ImportantCell",{attrs:{width:t.settings.checkSize,file:t.file,hinted:t.hinted},nativeOn:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.handleClick(e)},mouseup:function(e){return"button"in e&&1!==e.button?null:t.disable({cell:t.file})}}},[t.cell.total>1&&t.cell.level>1?i("img",{key:"number",staticClass:"number",attrs:{src:"img/progression/numbers/"+Math.min(t.cell.total,t.cell.level)+".webp"}}):t._e(),t.showLocation?i("div",{key:"location",staticClass:"location"},[i("img",{attrs:{src:"img/progression/worlds/"+t.location+".webp"}})]):t._e()])},z=[],R=(i("ac1f"),i("1276"),i("2ca0"),Object(f["c"])("tracker_important")),q=Object(f["c"])("settings"),V=function(t){Object(r["a"])(i,t);var e=Object(a["a"])(i);function i(){return Object(c["a"])(this,i),e.apply(this,arguments)}return Object(s["a"])(i,[{key:"handleClick",value:function(t){var e=t.ctrlKey?-1:1;if("other/secret_reports"!==this.file||1!==e){var i=t.shiftKey;if(!this.cell.levelsImportant){if(1===e&&this.cell.level>=1&&(this.cell.opaque||i))return void this.foundCheck({check:this.file,location:"Free",shift:i});if(-1===e&&this.cell.level>1)return void this.undoCheck({check:this.file,location:"Free",shift:i})}1!==e?this.locations.length&&this.undoCheck({check:this.file,location:this.locations[this.locations.length-1],shift:i}):this.foundCheck({check:this.file,location:this.$store.state.settings.important.preselectWorld?this.$store.state.tracker_important.selectedLocation:"Free",shift:i})}else this.$emit("found-report")}},{key:"cell",get:function(){return this.$store.getters["tracker_important/cell"](this.file)}},{key:"hinted",get:function(){var t=this;if("other/torn_pages"!==this.file&&"drive"!==this.items.all[this.file].cls)return 0;if("drive"===this.items.all[this.file].cls&&!this.checkLocations.length&&this.hasProof("other/drive_form"))return-1;var e=0,i=!1;return this.checkLocations[this.file].forEach((function(n){"Free"!==n&&-1===t.items.all[n].totalChecks?t.$store.getters["tracker_important/willBeHinted"](n)&&(e++,i=!0):e++})),e*Math.pow(-1,+i)}},{key:"showLocation",get:function(){return(this.file.startsWith("other/proof_")||"other/promise_charm"===this.file)&&this.locations.length>0}},{key:"locations",get:function(){return this.checkLocations[this.file]}},{key:"location",get:function(){return"Free"==this.locations[0]?"garden_of_assemblage":this.locations[0].split("/")[1]}}]),i}(h["c"]);Object(l["a"])([Object(h["b"])(String)],V.prototype,"file",void 0),Object(l["a"])([R.State],V.prototype,"items",void 0),Object(l["a"])([R.State],V.prototype,"foundChecks",void 0),Object(l["a"])([R.State],V.prototype,"checkLocations",void 0),Object(l["a"])([R.Getter],V.prototype,"hasProof",void 0),Object(l["a"])([R.Action],V.prototype,"foundCheck",void 0),Object(l["a"])([R.Action],V.prototype,"undoCheck",void 0),Object(l["a"])([R.Action],V.prototype,"disable",void 0),Object(l["a"])([q.State("important")],V.prototype,"settings",void 0),V=Object(l["a"])([Object(h["a"])({components:{ImportantCell:C}})],V);var J=V,D=J,G=(i("916c"),Object(v["a"])(D,N,z,!1,null,"04169861",null)),T=G.exports,Q=Object(f["c"])("tracker_important"),U=Object(f["c"])("settings"),X=function(t){Object(r["a"])(i,t);var e=Object(a["a"])(i);function i(){var t;return Object(c["a"])(this,i),t=e.apply(this,arguments),t.dragging=!1,t}return Object(s["a"])(i,[{key:"numChecksStyle",value:function(t,e){return e=e||1,t=Math.min(t,e),{flex:1,fontWeight:"bold",alignSelf:"center",color:"hsl(".concat(160-t/e*160,", 100%, 75%)")}}},{key:"showWorld",value:function(t){var e=this.items.all[t].setting;if(!e)return!0;if(!this.hintsLoaded&&"worlds/atlantica"===t)return this.settings.atlantica;var i=this.hintSettings[e];return i.enabled||i.show}},{key:"showReports",value:function(t){return!!this.$store.state.tracker_important.hints.length&&(this.$store.commit("tracker_important/setLocation",t),this.$router.push("reports"),!0)}},{key:"add",value:function(t,e){"other/secret_reports"===e&&this.showReports(t)||this.$store.dispatch("tracker_important/foundCheck",{check:e,location:t})}},{key:"removeCheck",value:function(t){var e=this.foundChecks[t];0!==e.length&&this.$store.dispatch("tracker_important/undoCheck",{check:e[0],location:t})}},{key:"hintsAtBottom",get:function(){return this.settings.hintsAtBottom}},{key:"totalChecks",get:function(){var t=51;return Object.values(this.hintSettings).forEach((function(e){var i;e.check&&!e.enabled&&(t-=null!==(i=e.value)&&void 0!==i?i:1)})),t}},{key:"gridStyle",get:function(){var t=this.$store.state.settings,e={backgroundColor:t.bgColor,width:this.settings.width},i=t.bgImg,n="rgba(0, 0, 0, .6)";return i&&(e.backgroundImage="linear-gradient(".concat(n,", ").concat(n,"), url(").concat(i,")")),"0"===this.$route.query.footer&&(e.borderRadius="4px",e.margin="0"),e}},{key:"worldRowStyle",get:function(){return{height:this.settings.worldSize||"65px",padding:"".concat(this.settings.worldVerticalPadding||"5px"," 0")}}},{key:"hintedChecks",get:function(){var t=this,e=0,i=0;return this.items.locations.flat().map((function(e){return t.items.all[e]})).filter((function(t){return-1!==t.totalChecks})).forEach((function(t){e+=t.checks,i+=t.totalChecks})),[e,i]}}]),i}(h["c"]);Object(l["a"])([Object(f["b"])("tracker_important")],X.prototype,"state",void 0),Object(l["a"])([Q.State],X.prototype,"items",void 0),Object(l["a"])([Q.State],X.prototype,"hintSettings",void 0),Object(l["a"])([Q.State("checks")],X.prototype,"numChecks",void 0),Object(l["a"])([Q.State],X.prototype,"hintMessage",void 0),Object(l["a"])([Q.State],X.prototype,"hintsLoaded",void 0),Object(l["a"])([Q.State],X.prototype,"foundChecks",void 0),Object(l["a"])([Q.State],X.prototype,"selectedLocation",void 0),Object(l["a"])([Q.Action],X.prototype,"foundCheck",void 0),Object(l["a"])([Q.Action],X.prototype,"undoCheck",void 0),Object(l["a"])([Q.Mutation],X.prototype,"incrementChecks",void 0),Object(l["a"])([Q.Mutation],X.prototype,"selectLocation",void 0),Object(l["a"])([U.State("important")],X.prototype,"settings",void 0),Object(l["a"])([U.State],X.prototype,"disableShadows",void 0),X=Object(l["a"])([Object(h["a"])({components:{ImportantCell:C,ImportantLocation:H,ImportantCheck:T,draggable:d.a}})],X);var Y=X,Z=Y,tt=(i("01bf"),Object(v["a"])(Z,n,o,!1,null,"68181a32",null));e["default"]=tt.exports},"77b0":function(t,e,i){},"916c":function(t,e,i){"use strict";var n=i("4a68"),o=i.n(n);o.a},"97cb":function(t,e,i){},bcbf:function(t,e,i){"use strict";var n=i("97cb"),o=i.n(n);o.a},f699:function(t,e,i){"use strict";var n=i("60ef"),o=i.n(n);o.a}}]);
//# sourceMappingURL=chunk-10365cd4.57c4de8f.js.map
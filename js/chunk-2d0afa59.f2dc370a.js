(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afa59"],{"0ee3":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row grid"},[s("SwitchSlider",{model:{value:t.settings.scroll,callback:function(e){t.$set(t.settings,"scroll",e)},expression:"settings.scroll"}}),s("div",[s("p",{staticClass:"name"},[t._v("Scroll wheel increment/decrement")]),s("BaseTooltip",[t._v("Scroll up on item to +1, scroll down to -1")])],1)],1),s("div",{staticClass:"row grid"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.columns,expression:"settings.columns"}],attrs:{placeholder:"5"},domProps:{value:t.settings.columns},on:{input:function(e){e.target.composing||t.$set(t.settings,"columns",e.target.value)}}}),s("p",{staticClass:"name"},[t._v("Number of grid columns")])]),s("div",{staticClass:"row grid"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.size,expression:"settings.size"}],attrs:{placeholder:"100px"},domProps:{value:t.settings.size},on:{input:function(e){e.target.composing||t.$set(t.settings,"size",e.target.value)}}}),s("p",{staticClass:"name"},[t._v("Item size")])]),s("div",{staticClass:"row grid"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.padding,expression:"settings.padding"}],attrs:{placeholder:"5px"},domProps:{value:t.settings.padding},on:{input:function(e){e.target.composing||t.$set(t.settings,"padding",e.target.value)}}}),s("div",[s("p",{staticClass:"name"},[t._v("Item padding")]),s("BaseTooltip",[t._v("Pre-1.4 versions used 7.5px")])],1)]),s("div",{staticClass:"row grid"},[s("button",{class:{alt:t.drag},staticStyle:{"grid-row":"1"},on:{click:t.toggleDrag}},[t._v("Toggle Rearrange")]),s("div",{staticStyle:{"grid-row":"1"}},[s("BaseTooltip",[t._v("Click + drag to move items around, and right click to remove an item")]),s("button",{on:{click:t.reset}},[t._v("Reset")])],1)])])},n=[],a=s("5530"),o=s("d4ec"),r=s("bee2"),l=s("262e"),c=s("2caf"),g=s("9ab4"),d=s("60a3"),u=s("7282"),m=s("90bb"),p=function(t){Object(l["a"])(s,t);var e=Object(c["a"])(s);function s(){var t;return Object(o["a"])(this,s),t=e.apply(this,arguments),t.settings=Object(a["a"])({},t.$store.state.settings),t}return Object(r["a"])(s,[{key:"onSettingsChanged",value:function(){this.$store.commit("settings/setSettings",this.settings)}},{key:"toggleDrag",value:function(){this.$store.commit("toggleDrag")}},{key:"reset",value:function(){this.$store.commit("settings/resetNums")}},{key:"toggleEdit",value:function(){this.$store.commit("toggleEdit")}},{key:"drag",get:function(){return this.$store.state.drag}},{key:"editItems",get:function(){return this.$store.state.edit}}]),s}(d["c"]);Object(g["a"])([Object(d["d"])("settings",{deep:!0})],p.prototype,"onSettingsChanged",null),p=Object(g["a"])([Object(d["a"])({components:{BaseTooltip:u["a"],SwitchSlider:m["a"]}})],p);var v=p,h=v,b=s("2877"),w=Object(b["a"])(h,i,n,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0afa59.f2dc370a.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e946e"],{"8d9e":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row grid"},[s("SwitchSlider",{model:{value:t.settings.preselectWorld,callback:function(e){t.$set(t.settings,"preselectWorld",e)},expression:"settings.preselectWorld"}}),s("div",[s("p",{staticClass:"name"},[t._v("Allow pre-selecting worlds")]),s("BaseTooltip",[t._v("This allows you to select the world, then click on the checks without dragging them. This prevents you from being able to manually light up a world by clicking on it.")])],1)],1),s("div",{staticClass:"row grid"},[s("SwitchSlider",{model:{value:t.settings.showHintedChecks,callback:function(e){t.$set(t.settings,"showHintedChecks",e)},expression:"settings.showHintedChecks"}}),s("div",[s("p",{staticClass:"name"},[t._v("Show number of hinted checks")]),s("BaseTooltip",[t._v("Shows the number of hinted checks that have been found, and the total number of checks that have been hinted, in the format "),s("code",[t._v("found / total")]),t._v(", next to the number of overall checks found")])],1)],1),s("div",{staticClass:"row grid"},[s("SwitchSlider",{model:{value:t.settings.hintsAtBottom,callback:function(e){t.$set(t.settings,"hintsAtBottom",e)},expression:"settings.hintsAtBottom"}}),s("div",[s("p",{staticClass:"name"},[t._v("Show hints at bottom")]),s("BaseTooltip",[t._v("If enabled, a single line will be shown at the bottom of the tracker for the last hint found")])],1)],1),s("div",{staticClass:"row grid"},[s("SwitchSlider",{model:{value:t.settings.autoHideHints,callback:function(e){t.$set(t.settings,"autoHideHints",e)},expression:"settings.autoHideHints"}}),s("div",[s("p",{staticClass:"name"},[t._v("Autohide hint screen")]),s("BaseTooltip",[t._v('Automatically hides the report selection screen or "[location] has [num] important checks" screen. Note that with the show hints at bottom setting, this is always immediate.')])],1)],1),s("div",{staticClass:"row grid"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.autoHideHintsDelay,expression:"settings.autoHideHintsDelay",modifiers:{number:!0}}],attrs:{placeholder:"3000"},domProps:{value:t.settings.autoHideHintsDelay},on:{input:function(e){e.target.composing||t.$set(t.settings,"autoHideHintsDelay",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),s("div",[s("p",{staticClass:"name"},[t._v("Autohide hint delay (ms)")]),s("BaseTooltip",[t._v("This only has effect if 'Show hints at bottom' is off. Otherwise, it is always immediate")])],1)]),s("div",{staticClass:"row grid"},[s("SwitchSlider",{model:{value:t.settings.atlantica,callback:function(e){t.$set(t.settings,"atlantica",e)},expression:"settings.atlantica"}}),s("div",[s("p",{staticClass:"name"},[t._v("Show Atlantica")]),s("BaseTooltip",[t._v("Loading hints will override this option. This is only for when hints are not used.")])],1)],1),s("div",{staticClass:"row grid"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.width,expression:"settings.width"}],attrs:{placeholder:"500px"},domProps:{value:t.settings.width},on:{input:function(e){e.target.composing||t.$set(t.settings,"width",e.target.value)}}}),s("p",{staticClass:"name"},[t._v("Grid Width")])]),s("div",{staticClass:"row grid"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.worldSize,expression:"settings.worldSize"}],attrs:{placeholder:"60px"},domProps:{value:t.settings.worldSize},on:{input:function(e){e.target.composing||t.$set(t.settings,"worldSize",e.target.value)}}}),s("p",{staticClass:"name"},[t._v("World Icon Size")])]),s("div",{staticClass:"row grid"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.worldVerticalPadding,expression:"settings.worldVerticalPadding"}],attrs:{placeholder:"7.5px"},domProps:{value:t.settings.worldVerticalPadding},on:{input:function(e){e.target.composing||t.$set(t.settings,"worldVerticalPadding",e.target.value)}}}),s("p",{staticClass:"name"},[t._v("World Row Vertical Padding")])]),s("div",{staticClass:"row grid"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.checkSize,expression:"settings.checkSize"}],attrs:{placeholder:"55px"},domProps:{value:t.settings.checkSize},on:{input:function(e){e.target.composing||t.$set(t.settings,"checkSize",e.target.value)}}}),s("p",{staticClass:"name"},[t._v("Check Icon Size")])]),s("div",{staticClass:"row grid"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.checkVerticalPadding,expression:"settings.checkVerticalPadding"}],attrs:{placeholder:"2.5px"},domProps:{value:t.settings.checkVerticalPadding},on:{input:function(e){e.target.composing||t.$set(t.settings,"checkVerticalPadding",e.target.value)}}}),s("p",{staticClass:"name"},[t._v("Check Row Vertical Padding")])])])},a=[],n=s("5530"),o=s("d4ec"),l=s("bee2"),r=s("262e"),c=s("2caf"),d=s("9ab4"),h=s("60a3"),g=s("7282"),u=s("90bb"),p=function(t){Object(r["a"])(s,t);var e=Object(c["a"])(s);function s(){var t;return Object(o["a"])(this,s),t=e.apply(this,arguments),t.settings=Object(n["a"])({},t.$store.state.settings.important),t}return Object(l["a"])(s,[{key:"onSettingsChanged",value:function(){this.$store.commit("settings/setImportantSettings",this.settings)}}]),s}(h["c"]);Object(d["a"])([Object(h["d"])("settings",{deep:!0})],p.prototype,"onSettingsChanged",null),p=Object(d["a"])([Object(h["a"])({components:{BaseTooltip:g["a"],SwitchSlider:u["a"]}})],p);var m=p,v=m,w=s("2877"),f=Object(w["a"])(v,i,a,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0e946e.b31ebc0a.js.map
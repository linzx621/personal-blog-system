(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-434306d4"],{"16c0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"container",staticClass:"home-container",on:{wheel:t.handleWheel}},[i("ul",{staticClass:"carousel-container",style:{marginTop:t.marginTop},on:{transitionend:t.handleTransition}},t._l(t.data,(function(t){return i("li",{key:t.id},[i("CarouselItem",{attrs:{carousel:t}})],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.index>=1,expression:"index >= 1"}],staticClass:"icon icon-up",on:{click:function(e){return t.switchTo(t.index-1)}}},[i("Icon",{attrs:{type:"arrowUp"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.index<t.data.length-1,expression:"index < data.length - 1"}],staticClass:"icon icon-down",on:{click:function(e){return t.switchTo(t.index+1)}}},[i("Icon",{attrs:{type:"arrowDown"}})],1),i("ul",{staticClass:"indicator"},t._l(t.data,(function(e,n){return i("li",{key:e.id,class:{active:n==t.index},on:{click:function(e){return t.switchTo(n)}}})})),0)])},s=[],o=i("5530"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"carousel-item-container",on:{mousemove:t.handleMouseMove,mouseleave:t.handleMouseLeave}},[i("div",{ref:"image",staticClass:"carousel-img",style:t.imagePosition},[i("ImageLoader",{attrs:{placeholder:t.carousel.midImg,src:t.carousel.bigImg},on:{loaded:t.showWords}})],1),i("div",{ref:"title",staticClass:"title"},[t._v(t._s(t.carousel.title))]),i("div",{ref:"desc",staticClass:"desc"},[t._v(t._s(t.carousel.description))])])},r=[],c=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-loader-container"},[t.everythingDone?t._e():i("img",{staticClass:"palce",attrs:{src:t.placeholder}}),i("img",{style:{opacity:t.originOpacity,transition:t.duration+"ms"},attrs:{src:t.src},on:{load:t.loadDone}})])}),h=[],d=(i("a9e3"),{props:{src:{type:String,required:!0},placeholder:{type:String,required:!0},duration:{type:Number,default:2e3}},data:function(){return{isLoaded:!1,everythingDone:!1}},computed:{originOpacity:function(){return this.isLoaded?1:0}},methods:{loadDone:function(){var t=this;this.isLoaded=!0,setTimeout((function(){t.everythingDone=!0,t.$emit("loaded")}),this.duration)}}}),l=d,u=(i("af3f"),i("2877")),f=Object(u["a"])(l,c,h,!1,null,"68cc930e",null),m=f.exports,g={props:["carousel"],components:{ImageLoader:m},data:function(){return{titleWidth:0,descWidth:0,containerSize:null,imageSize:null,mouseX:0,mouseY:0}},mounted:function(){this.titleWidth=this.$refs.title.clientWidth,this.descWidth=this.$refs.desc.clientWidth,this.setSize(),this.mouseX=this.center.x,this.mouseY=this.center.y,window.addEventListener("resize",this.setSize)},destroyed:function(){window.removeEventListener("resize",this.setSize)},methods:{showWords:function(){this.$refs.title.style.opacity=1,this.$refs.title.style.width=0,this.$refs.title.clientWidth,this.$refs.title.style.transition="1s",this.$refs.title.style.width=this.titleWidth+"px",this.$refs.desc.style.opacity=1,this.$refs.desc.style.width=0,this.$refs.desc.clientWidth,this.$refs.desc.style.transition="2s 1s",this.$refs.desc.style.width=this.descWidth+"px"},setSize:function(){this.containerSize={width:this.$refs.container.clientWidth,height:this.$refs.container.clientHeight},this.imageSize={width:this.$refs.image.clientWidth,height:this.$refs.image.clientHeight}},handleMouseMove:function(t){var e=this.$refs.container.getBoundingClientRect();this.$refs.image.style.transition="0s",this.mouseX=t.clientX-e.left,this.mouseY=t.clientY-e.top},handleMouseLeave:function(){this.mouseX=this.center.x,this.mouseY=this.center.y,this.$refs.image.style.transition="0.2s"}},computed:{imagePosition:function(){if(this.imageSize&&this.containerSize){var t=this.imageSize.width-this.containerSize.width,e=this.imageSize.height-this.containerSize.height,i=-t/this.containerSize.width*this.mouseX,n=-e/this.containerSize.height*this.mouseY;return{transform:"translate(".concat(i,"px,").concat(n,"px)")}}},center:function(){return{x:this.containerSize.width/2,y:this.containerSize.height/2}}}},p=g,w=(i("fc01"),Object(u["a"])(p,a,r,!1,null,"7522b401",null)),v=w.exports,y=i("d010"),x=i("2f62"),$={components:{CarouselItem:v,Icon:y["a"]},data:function(){return{index:0,containerHeight:0,switching:!1}},mounted:function(){this.containerHeight=this.$refs.container.clientHeight,window.addEventListener("resize",this.handleResize)},methods:{switchTo:function(t){this.index=t},handleWheel:function(t){this.switching||(t.deltaY>5?this.index<this.data.length-1&&(this.index++,this.switching=!0):t.deltaY<-5&&this.index>0&&(this.index--,this.switching=!0))},handleTransition:function(){this.switching=!1},handleResize:function(){this.containerHeight=this.$refs.container.clientHeight}},computed:Object(o["a"])({marginTop:function(){return-this.index*this.containerHeight+"px"},isLoading:function(){return this.$store.state.banner.loading}},Object(x["b"])("banner",["data"])),created:function(){this.$store.dispatch("banner/fetchBanner")},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},z=$,S=(i("3b8a"),Object(u["a"])(z,n,s,!1,null,"6d65f402",null));e["default"]=S.exports},"3b8a":function(t,e,i){"use strict";i("8b5f")},"8b5f":function(t,e,i){},af3f:function(t,e,i){"use strict";i("d6d5")},c457:function(t,e,i){},d6d5:function(t,e,i){},fc01:function(t,e,i){"use strict";i("c457")}}]);
//# sourceMappingURL=chunk-434306d4.b72fca49.js.map
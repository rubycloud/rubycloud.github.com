/*
moo.fx, simple effects library built with prototype.js (http://prototype.conio.net).
by Valerio Proietti (http://mad4milk.net) MIT-style LICENSE.
for more info (http://moofx.mad4milk.net).
Sunday, March 05, 2006
v 1.2.3
*/
var fx=new Object;fx.Base=function(){},fx.Base.prototype={setOptions:function(e){this.options={duration:500,onComplete:"",transition:fx.sinoidal},Object.extend(this.options,e||{})},step:function(){var e=(new Date).getTime();if(e>=this.options.duration+this.startTime)this.now=this.to,clearInterval(this.timer),this.timer=null,this.options.onComplete&&setTimeout(this.options.onComplete.bind(this),10);else{var t=(e-this.startTime)/this.options.duration;this.now=this.options.transition(t)*(this.to-this.from)+this.from}this.increase()},custom:function(e,t){if(this.timer!=null)return;this.from=e,this.to=t,this.startTime=(new Date).getTime(),this.timer=setInterval(this.step.bind(this),13)},hide:function(){this.now=0,this.increase()},clearTimer:function(){clearInterval(this.timer),this.timer=null}},fx.Layout=Class.create(),fx.Layout.prototype=Object.extend(new fx.Base,{initialize:function(e,t){this.el=$(e),this.el.style.overflow="hidden",this.iniWidth=this.el.offsetWidth,this.iniHeight=this.el.offsetHeight,this.setOptions(t)}}),fx.Height=Class.create(),Object.extend(Object.extend(fx.Height.prototype,fx.Layout.prototype),{increase:function(){this.el.style.height=this.now+"px"},toggle:function(){this.el.offsetHeight>0?this.custom(this.el.offsetHeight,0):this.custom(0,this.el.scrollHeight)}}),fx.Width=Class.create(),Object.extend(Object.extend(fx.Width.prototype,fx.Layout.prototype),{increase:function(){this.el.style.width=this.now+"px"},toggle:function(){this.el.offsetWidth>0?this.custom(this.el.offsetWidth,0):this.custom(0,this.iniWidth)}}),fx.Opacity=Class.create(),fx.Opacity.prototype=Object.extend(new fx.Base,{initialize:function(e,t){this.el=$(e),this.now=1,this.increase(),this.setOptions(t)},increase:function(){this.now==1&&/Firefox/.test(navigator.userAgent)&&(this.now=.9999),this.setOpacity(this.now)},setOpacity:function(e){e==0&&this.el.style.visibility!="hidden"?this.el.style.visibility="hidden":this.el.style.visibility!="visible"&&(this.el.style.visibility="visible"),window.ActiveXObject&&(this.el.style.filter="alpha(opacity="+e*100+")"),this.el.style.opacity=e},toggle:function(){this.now>0?this.custom(1,0):this.custom(0,1)}}),fx.sinoidal=function(e){return-Math.cos(e*Math.PI)/2+.5},fx.linear=function(e){return e},fx.cubic=function(e){return Math.pow(e,3)},fx.circ=function(e){return Math.sqrt(e)};
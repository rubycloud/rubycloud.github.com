function init(){function r(){var r=!1;return e.each(function(e,i){window.location.href.indexOf(e.title)>0&&(n.showThisHideOpen(t[i]),r=!0)}),r}var e=document.getElementsByClassName("display"),t=document.getElementsByClassName("stretcher"),n=new fx.Accordion(e,t,{opacity:!0,duration:250});r()||n.showThisHideOpen(t[0])};
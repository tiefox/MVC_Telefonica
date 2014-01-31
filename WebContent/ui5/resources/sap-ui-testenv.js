jQuery.sap.declare('sap-ui-testenv');if(!jQuery.sap.isDeclared('sap.ui.test.TestEnv')){
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * (c) Copyright 2009-2013 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.test.TestEnv");if(!jQuery.sap.isDeclared('sap.ui.test.ControlTree')){jQuery.sap.declare("sap.ui.test.ControlTree");if(!jQuery.sap.isDeclared('jquery.sap.strings')){jQuery.sap.declare("jquery.sap.strings",false);(function(){jQuery.sap.endsWith=function endsWith(s,e){if(typeof(e)!="string"||e==""){return false}var p=s.lastIndexOf(e);return p>=0&&p==s.length-e.length};jQuery.sap.endsWithIgnoreCase=function endsWithIgnoreCase(s,e){if(typeof(e)!="string"||e==""){return false}s=s.toUpperCase();e=e.toUpperCase();return jQuery.sap.endsWith(s,e)};jQuery.sap.startsWith=function startsWith(s,S){if(typeof(S)!="string"||S==""){return false}if(s==S){return true}return s.indexOf(S)==0};jQuery.sap.startsWithIgnoreCase=function startsWithIgnoreCase(s,S){if(typeof(S)!="string"||S==""){return false}s=s.toUpperCase();S=S.toUpperCase();return jQuery.sap.startsWith(s,S)};jQuery.sap.charToUpperCase=function charToUpperCase(s,p){if(!s){return s}if(!p||isNaN(p)||p<=0||p>=s.length){p=0}var C=s.charAt(p).toUpperCase();if(p>0){return s.substring(0,p)+C+s.substring(p+1)}return C+s.substring(p+1)};jQuery.sap.padLeft=function padLeft(s,p,l){if(!s){s=""}while(s.length<l){s=p+s}return s};jQuery.sap.padRight=function padRight(s,p,l){if(!s){s=""}while(s.length<l){s=s+p}return s};var r=/-(.)/ig;jQuery.sap.camelCase=function camelCase(s){return s.replace(r,function(m,C){return C.toUpperCase()})};var a=/([A-Z])/g;jQuery.sap.hyphen=function hyphen(s){return s.replace(a,function(m,C){return"-"+C.toLowerCase()})};var b=/[-[\]{}()*+?.,\\^$|#\s]/g;jQuery.sap.escapeRegExp=function escapeRegExp(s){return s.replace(b,"\\$&")};jQuery.sap.formatMessage=function formatMessage(p,v){if(arguments.length>2||(v!=null&&!jQuery.isArray(v))){v=Array.prototype.slice.call(arguments,1)}v=v||[];return p.replace(c,function($,d,e,f,o){if(d){return"'"}else if(e){return e.replace(/''/g,"'")}else if(f){return String(v[parseInt(f,10)])}throw new Error("formatMessage: pattern syntax error at pos. "+o)})};var c=/('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g}())};jQuery.sap.require('sap.ui.core.Element');sap.ui.test.ControlTree=function(c,w){this.oWindow=w;this.oCore=c;this.oCore.attachUIUpdated(this.renderDelayed,this);this.renderDelayed()};sap.ui.test.ControlTree.prototype.renderDelayed=function(){if(this.oTimer){this.oWindow.jQuery.sap.clearDelayedCall(this.oTimer)}this.oTimer=this.oWindow.jQuery.sap.delayedCall(500,this,"initDT");restoreLockState(this);supplySelectedTheme(this.oCore.getConfiguration().getTheme())};sap.ui.test.ControlTree.prototype.initDT=function(){restoreTreeCallback();var u=null,U=this.oCore.mUIAreas;for(var i in U){var u=U[i],d=this.createTreeNodeDT(u.getId(),0,"UIArea");var r=u.getContent();for(var i=0,l=r.length;i<l;i++){this.renderNodeDT(r[i],0)}}};sap.ui.test.ControlTree.prototype.createTreeNodeDT=function(i,l,t){callback(i,l,t)};sap.ui.test.ControlTree.prototype.createAssocTreeNodeDT=function(i,l,t,s,a){callback(i,l,t,s,a)};sap.ui.test.ControlTree.prototype.renderNodeDT=function(c,l){if(!c){return}var M=c.getMetadata();var d=this.createTreeNodeDT(c.getId(),l+1,M.getName());var p=M.getAllProperties();for(var P in p){var a=c["get"+P];var N=P;if(!a){N=jQuery.sap.charToUpperCase(N,0)}var v=c["get"+N]();addProperty(c.getId(),P,p[P].type,v!=null?v:"")}var A=M.getAllAggregations();for(var n in A){var b=c.getAggregation(A[n].name);if(b&&b.length){for(var i=0;i<b.length;i++){var o=b[i];if(o instanceof sap.ui.core.Element){this.renderNodeDT(b[i],l+1)}}}else if(b instanceof sap.ui.core.Element){this.renderNodeDT(b,l+1)}}var e=M.getAllAssociations();for(var m in e){var f=c.getAssociation(e[m].name);if(null!=f){var g=e[m].name+f;this.createAssocTreeNodeDT(g,l+2,"Association",c.getId(),f);addProperty(g,e[m].name,"assoc_type",f);addProperty(g,"Name","string",e[m].name)}}}};if(!jQuery.sap.isDeclared('sap.ui.debug.Highlighter')){jQuery.sap.declare("sap.ui.debug.Highlighter");jQuery.sap.require('jquery.sap.dom');jQuery.sap.require('jquery.sap.script');sap.ui.debug.Highlighter=function(i,f,c,b){this.sId=i||jQuery.sap.uid();this.bFilled=(f==true);this.sColor=c||'blue';if(isNaN(b)){this.iBorderWidth=2}else if(b<=0){this.iBorderWidth=0}else{this.iBorderWidth=b}};sap.ui.debug.Highlighter.prototype.highlight=function(d){if(!d||!d.parentNode){return}var h=jQuery.sap.domById(this.sId);if(!h){h=d.ownerDocument.createElement("DIV");h.setAttribute("id",this.sId);h.style.position="absolute";h.style.border=this.iBorderWidth+"px solid "+this.sColor;h.style.display="none";h.style.margin="0px";h.style.padding="0px";if(this.bFilled){h.innerHTML="<div style='background-color:"+this.sColor+";opacity:0.2;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=20);height:100%;width:100%'>&nbsp;</div>"}d.ownerDocument.body.appendChild(h)}var r=jQuery(d).rect();h.style.top=(r.top-this.iBorderWidth)+"px";h.style.left=(r.left-this.iBorderWidth)+"px";h.style.width=(r.width)+"px";h.style.height=(r.height)+"px";h.style.display="block"};sap.ui.debug.Highlighter.prototype.hide=function(){var h=jQuery.sap.domById(this.sId);if(!h){return}h.style.display="none"}};sap.ui.test.TestEnv=function(){};sap.ui.test.TestEnv.prototype.startPlugin=function(c){this.oCoreOther=c;this.oCore=c;this.oCore.attachControlEvent(this.onControlEvent,this);this.oWindow=window;this.oControlTree=new sap.ui.test.ControlTree(this.oCore,window)};sap.ui.test.TestEnv.prototype.stopPlugin=function(){this.oCore.detachControlEvent(this.onControlEvent,this);this.oCore=null};sap.ui.test.TestEnv.prototype.onControlEvent=function(e){if(this.oCore.isLocked()){var b=e.getParameter("browserEvent");if(b.type=="click"){var E=b.srcControl;if(E){var s=new sap.ui.debug.Highlighter('sap-ui-testsuite-SelectionHighlighter');s.highlight(E.getDomRef());if(selectControl){selectControl(E.getId())}}}}};(function(){var t=new sap.ui.test.TestEnv();sap.ui.getCore().registerPlugin(t)}())};
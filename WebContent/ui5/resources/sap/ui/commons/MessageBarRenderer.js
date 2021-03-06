/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * (c) Copyright 2009-2013 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.MessageBarRenderer");jQuery.sap.require("sap.ui.core.Popup");sap.ui.commons.MessageBarRenderer={};
sap.ui.commons.MessageBarRenderer.render=function(r,c){var a=r;var i=c.getId();a.write('<div draggable="true"');a.writeControlData(c);a.addClass("sapUiMsgBar");if(this.oDropPosition){a.addClass("sapUiMsgBarMoved")}a.writeClasses();a.write(">");a.write('<div id="'+i+'__sums" class="sapUiMsgBarSums">');a.write('<div id="'+i+'__arrowImg" class="sapUiMsgBarToggle"></div>');a.write('<div id="'+i+'__ErrorImg" class="sapUiMsgIcon sapUiMsgIconError sapUiMsgBarZeroCount"></div>');a.write('<span id="'+i+'__ErrorCount" class="sapUiMsgTxt sapUiMsgBarZeroCount">(0)</span>');a.write('<div id="'+i+'__WarningImg" class="sapUiMsgIcon sapUiMsgIconWarning sapUiMsgBarZeroCount"></div>');a.write('<span id="'+i+'__WarningCount" class="sapUiMsgTxt sapUiMsgBarZeroCount">(0)</span>');a.write('<div id="'+i+'__SuccessImg" class="sapUiMsgIcon sapUiMsgIconSuccess sapUiMsgBarZeroCount"></div>');a.write('<span id="'+i+'__SuccessCount" class="sapUiMsgTxt sapUiMsgBarZeroCount">(0)</span>');a.write("</div>");a.write('<div class="sapUiMsgBarHome"></div>');a.write("</div>")};

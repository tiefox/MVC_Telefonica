/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * (c) Copyright 2009-2013 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
// Provides a pseudo control for index pages within the Demokit
jQuery.sap.declare("sap.ui.demokit.IndexPage");

sap.ui.demokit.IndexPage = function IndexPage(sCategory) {
	var iHierarchyLevel = 3, iCols;
	function suffix(s,n) {
		return s.split('/').slice(-n-1).join('/');
	}
	
	function readCategory() {
		var aPages = top.getPagesForCategory(sCategory);
		if ( aPages !== false ) {
			for(var i=0;i<aPages.length; i++) {
				that.add(true, aPages[i].text, '', that.sPathToRoot + aPages[i].ico, undefined, aPages[i].ref);
			}
		} else {
			jQuery.sap.log.debug("top page can't provide category " + sCategory + " yet, waiting another 200ms");
			setTimeout(readCategory, 200);
		}
	}
	
	this.sPathToRoot = suffix("../../../../../../../", iHierarchyLevel);
	this.sRootUrl = window.location.pathname.split('/').slice(-iHierarchyLevel-1,-1).join('/') + '/';	
	this.sColor = "Blue";
	this.oHexGroup = new sap.ui.demokit.HexagonButtonGroup({colspan: (iCols || 5)});
	if ( sCategory && top.getPagesForCategory ) {
		var aPages = top.getPagesForCategory(sCategory);
		for(var i=0;i<aPages.length; i++) {
			this.add(true, aPages[i].text, '', this.sPathToRoot + aPages[i].ico, undefined, aPages[i].ref);
		}
	}
};

sap.ui.demokit.IndexPage.prototype.add = function add(bEnabled, sControl, sTooltip, sIcon, sLibrary, sRef) {

	var that = this;
	
	if ( typeof bEnabled !== "boolean" ) {
		sRef = sLibrary;
		sLibrary = sIcon;
		sIcon = sTooltip;
		sTooltip = sControl;
		sControl = bEnabled;
		bEnabled = true;
	}
	
	sRef = sRef || this.sRootUrl + sControl + '.html';
	if ( !sLibrary ) {
		sLibrary = "sap.ui.commons";
	}

	if ( !sTooltip ) {
		if ( bEnabled ) {
			sTooltip = "A short tutorial that explains how to use the " + sControl + ". Click to start it.";
		} else {
			sTooltip = "Here you should find a tutorial for the " + sControl + ". Unfortunately we didn't write it in time. Please hover back soon ;-)";
		}
	}

	var oButton = new sap.ui.demokit.HexagonButton({
		enabled: bEnabled,
		color: "Yellow",//this.sColor,
		tooltip : new sap.ui.commons.RichTooltip({
			title : sControl, // TODO + " - " + sLibrary,
			imageSrc : sIcon ? sIcon : (bEnabled ? "" : this.sPathToRoot + "theme/img/Under-construction.png"),
			text : sTooltip
		}),
		press: function() {
			top.navigateTo(sRef);
		}
	});
	if ( sIcon ){oButton.setIcon(sIcon);}
	this.oHexGroup.addButton(oButton);

	return this;
};

sap.ui.demokit.IndexPage.prototype.placeAt = function(sId) {
	this.oHexGroup.placeAt(sId);
	jQuery(function() {
		if ( jQuery("#vistaico-license").size() == 0 ) {
			jQuery("body").append('<div id="vistaico-license" class="license">Some icon(s) created by <a class="sapUiDemokitLink" href="http://VistaICO.com" target="_blank">VistaICO.com</a> and <a class="sapUiDemokitLink" href="http://www.iconarchive.com/artist/fatcow.html" target="_blank">Fatcow Web Hosting</a>,	used under Creative Commons 3.0 Attribution Unported license</div>');
		}
	});
};

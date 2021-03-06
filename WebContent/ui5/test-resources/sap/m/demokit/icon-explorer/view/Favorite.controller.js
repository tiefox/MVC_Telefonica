sap.ui.controller("view.Favorite", {

	onInit : function() {
		
		// init UI model
		this.toggleUiModel();
		
		// remove footer on phone
		if (jQuery.device.is.phone) {
			this.getView().byId("page").destroyFooter();
		}
	},
	
	toggleUiModel : function() {
		
		var model = this.getView().getModel("ui");
		if (!model) {
			
			// init
			model = new sap.ui.model.json.JSONModel({
				inEdit : false,
				inDisplay : true,
				listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
				listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
			});
			this.getView().setModel(model, "ui");
		
		} else {
			
			// toggle
			var data = model.getData();
			model.setData({
				inEdit : data.inDisplay,
				inDisplay : data.inEdit,
				listMode : (data.inDisplay) ? "Delete" : ((jQuery.device.is.phone) ? "None" : "SingleSelectMaster"),
				listItemType : (data.inDisplay) ? "Inactive" : ((jQuery.device.is.phone) ? "Active" : "Inactive")
			});
		}
	},
	
	navBack : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	}, 
	
	deleteIconList : function(evt) {
		var name = evt.getParameter("listItem").getTitle();
		sap.ui.getCore().getModel("fav").toggleFavorite(name);
	},
	
	selectIconList : function(evt) {
		this._showDetail(evt.getParameter("listItem"));
	},
	
	pressIconListItem : function(evt) {
		this._showDetail(evt.getSource());
	},
	
	_showDetail : function(item) {
		
		// tell app controller to navigate
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "Detail"
		});
		
		// tell detail to update
		bus.publish("app", "RefreshDetail", {
			name : item.getBindingContext("fav").getObject().name
		});
	}
});
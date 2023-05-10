sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
   "use strict";
   return Controller.extend("com.example.documentation.controller.HelloPanel", {
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText( [sRecipient]);
         // show message
         MessageToast.show(sMsg);

         // show a native JavaScript alert
                    alert("Hello World");
                    //MessageToast.show("Hello World");
      },

		onOpenDialog : function () {

			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = this.loadFragment({
					name: "com.example.documentation.view.HelloDialog"
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
		},


		onCloseDialog : function () {
			this.byId("helloDialog").close();
		},
      onOpenNav: function (oEvent) {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Table");
		}
   });
});
       
    
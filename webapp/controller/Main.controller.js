sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast,JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("com.example.project.controller.Main", {
            onInit : function () {
                // set data model on view
                var oData = {
                   recipient : {
                      name : "World"
                   }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
             var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
             });
             this.getView().setModel(i18nModel, "i18n");
          },
             onShowHello : function () {
                // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText([sRecipient]);
         // show message
                MessageToast.show(sMsg);
             },
            onRoute : function () {
                //alert("Hello World");
                //MessageToast.show("Hello World");
                //Router
                var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Second");
            }
        });
    });

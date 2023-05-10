sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.example.youtubeproject.controller.Main", {
            

            countdown:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Countdown");
            },

            covid:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Covid");
            },

            vacc:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Vacc");
            },
            portfolio:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Portfolio");
            },
            salesorder:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("SalesOrder");
            },

            barcode:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Barcode");
            },

            cards:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Cards");
            },

            captcha:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Captcha");
            }

        });
    });

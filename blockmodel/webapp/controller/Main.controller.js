sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.example.blockmodel.controller.Main", {
            onInit: function () {
                // set explored app's demo model on this sample
                var oModel = new JSONModel(sap.ui.require.toUrl("com/example/blockmodel/mockdata/products.json"));
                this.getView().setModel(oModel);
            },
            onSliderMoved: function (oEvent) {
                var fValue = oEvent.getParameter("value");
                this.byId("containerLayout").setWidth(fValue + "%");
            }
        });
    });

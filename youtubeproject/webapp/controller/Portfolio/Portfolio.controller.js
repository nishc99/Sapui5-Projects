sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], function(Controller,JSONModel) {
    "use strict";
  
    return Controller.extend("com.example.youtubeproject.controller.Portfolio.Portfolio", {
      onInit:function(){
        let oModel = new JSONModel("../model/data.json");
        this.getView().setModel(oModel,"portfolio")
      }
  
    });
  });
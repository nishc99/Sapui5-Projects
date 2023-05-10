sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function(Controller) {
    "use strict";
  
    return Controller.extend("com.example.youtubeproject.controller.Captcha.Captcha", {
  
      onValid:function(oEvent){
        alert(`Valid Captcha ${oEvent.getParameter("value")}`)
      }
    });
  });
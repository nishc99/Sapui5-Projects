sap.ui.define(
    [
      "./Base.controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.example.flexiblelayout.controller.App", {
        onInit() {
          BaseController.prototype.onInit.call(this);
        }
      });
    }
  );
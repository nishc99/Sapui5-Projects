sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageBox",
], function(Controller,MessageBox) {
  "use strict";
  return Controller.extend("com.example.youtubeproject.controller.BarcodeScanner.Barcode", {
    onInit:function(){
      this.scanningStarted=false;
    },
    startScanning:function(){

      this.byId(this.getView().createId("scandit-barcode-picker")).setVisible(true);
      if(this.scanningStarted == false){
        this.scanningStarted = true;
      ScanditSDK.configure("Ae8Cd2dbRPW5Lvn6UUEKWzVFZTuJBRkzFWNHpmV8PFNtau/bND5LQasz7D+NWwybK1IXHloCC7MfdY6iyRUc2/Y2Vx03RDASWSbGrJpM7+B4ZVIY7VnUd5ZgQwrXWf34X3B4HlxfzcuefhPon0J2DQhgLETWdtNFNmJObeV3doo9QR5eX17sXG1nryfUfZbeMXe2gbZeCdMjQsIHdF8ITtBQ7Z2DSkdIgS2mt6ts+ZaMXBA6JimCjDdy555yKod/oC3uKHBvZcB+fQJbFVTHL55jaXGgf4/6c0w84I5OacnrQDFIH1rC0hhxZq6JVCnUk1HhpP5NHEQsUwBeAG99uTpCnHPWUg2UfmjWEi1vCn02RabGe2vFRpBc4SyUWW+pwm1I08ZWem/Cf3+AKEJMGQcuEGg3eN5swGLGRdtRKGvKZ++E92CtATUhUT++f9PQs0r1nc1f5lY8azX4YnZEbFNOD5GwTF2JQgsGyvJWyLooVSUYTi36O3JKovlIeE3K2yhbFWQ+1MzdBRwAQjhSLxNuoX7mfpkUV5pJm3d47RG07D1l0C6Gh6a1wnpBgCOn4XSYPgVTIino9zpx82fhOFjJTj7UmWBPmf1eW0YWK4455Kzyyeo7xN71MDF8kTGWnY3nXV1+pOV6t/HC8aX6Sp0/BbtX8UAsdBHuyn+ys3I//pzY/RWe4KRsS4MoLyfFMD4GZI81/JgtnHuqpxUcI+Anz3dK279Qjf5WW6rbqJtB4NuPAd3ZN2amlquPjs0hSFLeGD0ieBwqrD6SogVjLfasaYVO2KgT66HerKrzeF/XYrtNY8j8mFkXGhaaq7saVvAOnc40L+bZFTlIN29I5BBZ3Ud85IDliDyIzMNj1fjU/MCJ73sbMqBUF9/C3fXCCjuMeojJRLH6qcn9n3kzFmunMV4ouQp6izvk7/5xCS+PzuWLDlCkvZxcANMDMMPs4HAiMDOu2jckt+3PCbRn2nRnbWEMTYQgRJeKSO8eswQ/9J4AbqrcXyLQusX4KrRHsWthO9brVUi5Nyyzbl+4ENj2nPfadXagr/W2Y2/emredndwvYAcFXPxW0whaF7Dt1wOTP2792A+xH7jXBkgWippS13in0siSf8hA7p9Ha7W2QIuNMH+qGBz4RvX6oJ4eXSnnyVaT+749Pk6ekPUKWMKD/Hx9qXsEL5QfIr0nPismlGKIOlICVSYCxtc/LHLy", {
        engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
      })
        .then(() => {
          return ScanditSDK.BarcodePicker.create(document.getElementById(this.getView().createId("scandit-barcode-picker")), {
       
            scanSettings: new ScanditSDK.ScanSettings({ enabledSymbologies: ["ean8", "ean13", "upca", "upce"] }),
          });
        })
        .then((barcodePicker) => {
        
          barcodePicker.on("scan", (scanResult) => {
            MessageBox.alert(`Scanned Value ${scanResult.barcodes[0].data}`);
          });
        });
      }
    },
    stopScanning: function(){ 
this.byId(this.getView().createId("scandit-barcode-picker")).setVisible(false);
MessageBox.alert("Barcode Scanning stopped");
    }
  });
});
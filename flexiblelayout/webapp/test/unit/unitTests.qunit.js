/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comexample/flexiblelayout/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

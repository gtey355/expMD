/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ns/expMD/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ns/expMD/test/integration/pages/App",
	"ns/expMD/test/integration/pages/Browser",
	"ns/expMD/test/integration/pages/Master",
	"ns/expMD/test/integration/pages/Detail",
	"ns/expMD/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ns.expMD.view."
	});

	sap.ui.require([
		"ns/expMD/test/integration/NavigationJourneyPhone",
		"ns/expMD/test/integration/NotFoundJourneyPhone",
		"ns/expMD/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});
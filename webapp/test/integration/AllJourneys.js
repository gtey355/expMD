/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Customers in the list
// * All 3 Customers have at least one HisOrders

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
		"ns/expMD/test/integration/MasterJourney",
		"ns/expMD/test/integration/NavigationJourney",
		"ns/expMD/test/integration/NotFoundJourney",
		"ns/expMD/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});
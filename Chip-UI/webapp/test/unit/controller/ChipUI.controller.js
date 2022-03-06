/*global QUnit*/

sap.ui.define([
	"Chip-UI/controller/ChipUI.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ChipUI Controller");

	QUnit.test("I should test the ChipUI controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

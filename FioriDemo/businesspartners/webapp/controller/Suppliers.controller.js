sap.ui.define([
    'sap/m/MessageToast',
    "sap/ui/core/mvc/Controller"
],
function (MessageToast, Controller) {
    "use strict";

    return Controller.extend("ns.businesspartners.controller.Suppliers", {
        onInit: function () {

        },

        onPress: function (evt) {
			MessageToast.show(evt.getSource().getId() + " Pressed");
		}
    });
});

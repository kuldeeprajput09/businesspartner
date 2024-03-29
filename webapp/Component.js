sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "businesspartner/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("businesspartner.Component", {
            metadata: {
                manifest: "json"
            },

            //Comment Kuldeep Singh - GITHUB Public Date 27/09/2023

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                //Comment 
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);
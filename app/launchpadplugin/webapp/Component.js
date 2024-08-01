sap.ui.define(['sap/ui/core/UIComponent'], function (UIComponent) {
  'use strict';

  return UIComponent.extend('com.pacg.cssp.launchpadplugin.Component', {
    metadata: {
      manifest: 'json',
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      console.log('JS plugin component init');
    },
  });
});

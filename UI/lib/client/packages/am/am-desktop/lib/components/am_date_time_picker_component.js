define([
  'ember',
  'jqueryui',
  'desktop'
], function(
  Em,
  $,
  Desktop
  ) {
  'use strict';

  return Desktop.DateTimePickerComponent.extend({

    defaultHours: 0,
    defaultMinutes: 0,
    defaultSeconds: 0,

    // @override
    focusIn: function() {
      this._super();
      this.onFocus();
    },

    onFocus: function() {
      var defaultValue = new Date();
      defaultValue.setUTCHours(this.defaultHours,this.defaultMinutes,this.defaultSeconds);

      this.$().datetimepicker({
        defaultValue: this.format(defaultValue)
      });
    }
  });
});

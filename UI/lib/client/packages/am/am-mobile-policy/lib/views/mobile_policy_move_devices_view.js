define([
  'ember',
  'desktop',
  'text!../templates/mobile_policy_move_devices.handlebars'
], function(
  Em,
  Desktop,
  template
) {
  return Em.View.extend({
    defaultTemplate: Em.Handlebars.compile(template),
    layout: Desktop.ModalWizardLayoutTemplate
  });
});

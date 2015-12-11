define([
  'ember',
  'packages/platform/data',
  '../specs/command_mobile_queue_spec'
], function(
  Em,
  AbsData,
  CommandQueueSpec
) {
  'use strict';

  return AbsData.get('Model').extend({
    Spec: CommandQueueSpec
  });
});

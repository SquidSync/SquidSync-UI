'use strict';

angular.module('squidSync.version', [
  'squidSync.version.interpolate-filter',
  'squidSync.version.version-directive'
])

.value('version', '0.0.1');

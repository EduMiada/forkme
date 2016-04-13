'use strict';

angular.module('forkmeApp.auth', [
  'forkmeApp.constants',
  'forkmeApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

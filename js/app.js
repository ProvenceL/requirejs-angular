/**
 * Created by fengxl on 2016/11/8.
 */

define(['angular','uiRouter', 'services', 'controllers', 'directives'], function (angular) {
    'use strict';
    var app = angular.module('EasyIdolApp',
        ['app.controllers', 'app.directives', 'app.services', 'ui.router']);
    return app;
});
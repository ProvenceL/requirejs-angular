/**
 * Created by fengxl on 2016/12/8.
 */
define(['app','config',
    'utilService', 'mainService','loginService'], function () {
    var services = angular.module('app.services', ['app.config']);
    services.factory('$Util', require('utilService'));

    services.factory('$loginService', require('loginService'));
    services.factory('$mainService', require('mainService'));
    return services;
});

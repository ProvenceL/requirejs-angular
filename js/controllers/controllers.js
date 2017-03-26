/**
 * Created by fengxl on 2016/8/8.
 */
define(['app', 'services','homeCtrl'], function(app){
    var controllers = angular.module('app.controllers', ['app.services', 'app.config']);

    controllers.controller('homeCtrl',require('homeCtrl'));
    return controllers;

});
/**
 * Created by fengxl on 2016/11/25.
 */
define(['angular', 'routes', 'app'], function (angular,routes, app) {
    'use strict';
    angular.element().ready(function () {
        try {
            angular.bootstrap(document, [app['name']]);
        } catch (e) {
            console.error(e.stack || e.message || e);
        }
    });
});
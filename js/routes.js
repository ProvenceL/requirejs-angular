/**
 * Created by fengxl on 2016/11/25.
 */
define(['app'],function(app) {
    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        '': {
                            templateUrl: 'templates/home/index.html',
                            controller: 'homeCtrl'
                        }
                    }
                });
            $urlRouterProvider
                .when("", "/")
                .otherwise("/");
        }]);
});
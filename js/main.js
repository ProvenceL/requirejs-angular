/**
 * Created by fengxl on 2016/11/24.
 */
require.config({
    //baseUrl:'../',
    paths:{
        fastClick:'../lib/fastclick',
        domReady:'../lib/domReady',
        angular:'../lib/angular/angular',
        angularAnimate:'../lib/angular/angular-animate',
        angularSanitize:'../lib/angular/angular-sanitize',
        uiRouter:'../lib/angular-ui/angular-ui-router',

        app:'app',
        config:'config',
        routes:'routes',

        directives:'directives/directives',

        services:'services/service',
        utilService:'services/utilService',
        mainService:'services/mainService',
        loginService:'services/loginService',
        
        controllers:'controllers/controllers',
        homeCtrl:'controllers/homeCtrl',

    },
    waitSeconds: 100,
    shim:{
        angular : {exports : 'angular'},
        angularAnimate : {deps: ['angular']},
        angularSanitize : {deps: ['angular']},
        uiRouter : {deps: ['angular']},
        app : {exports : 'app'},
    },
    priority:['angular'],
    deps:['bootstrap']
});


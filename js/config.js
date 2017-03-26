/**
 * Created by fengxl on 2016/11/25.
 */
define(['app'], function (app) {
    'use strict';
    return angular.module('app.config', [])
        .config(function() {
        })
        .run(function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            var stateHistory_names=[];
            var stateHistory_paramss=[];
            var stateIndex=0;
            $rootScope.nowStateIndex=0;
            $rootScope.$on("$stateChangeSuccess",  function(event, toState, toParams, fromState, fromParams) {
                // to be used for back button //won't work when page is reloaded.
                $rootScope.previousState_name = fromState.name;
                $rootScope.previousState_params = fromParams;

                $rootScope.nowState_name = toState.name;
                $rootScope.nowState_params = toParams;
                if(stateIndex===0||stateIndex===1){
                    stateHistory_names.push(toState.name);
                    stateHistory_paramss.push(toParams);
                    stateIndex=stateIndex+1;
                }else{
                    if(stateHistory_names[stateIndex-2]===toState.name){
                        stateHistory_names.splice(stateIndex-1,1);
                        stateHistory_paramss.splice(stateIndex-1,1);
                        $rootScope.previousState_name = stateHistory_names[stateIndex-3];
                        $rootScope.previousState_params = stateHistory_paramss[stateIndex-3];
                        stateIndex=stateIndex-1;
                    }else {
                        stateHistory_names.push(toState.name);
                        stateHistory_paramss.push(toParams);
                        stateIndex=stateIndex+1;
                    }
                }

            });
            //back button function called from back button's ng-click="back()"
            $rootScope.back = function() {
                if(typeof $rootScope.previousState_name === 'string' && $rootScope.previousState_name !==''){
                    $state.go($rootScope.previousState_name,$rootScope.previousState_params);
                    //history.back();
                }else {
                    //$state.go($rootScope.nowState_name,$rootScope.nowState_params);
                }

            };
        });
});
/**
 * Created by fengxl on 2016/11/25.
 */
define(['app','services'], function(app,services){
    function articleItemDir() {
        return {
            restrict : 'E',
            replace : false,//是否替换
            transclude: true,
            template:'',
            scope : {
                //myId : '@',//字符串
                articleData : '=',//对象
                //myFun:'&'//函数
            },
            compile: function(tElem, tAttrs,linker){
                //console.log('compile');
                return {
                    pre: function(scope, iElem, iAttrs){
                        //console.log('pre link');
                    },
                    post: function(scope, iElem, iAttrs){
                        //console.log('post link');

                        {
                            //模块名称：
                            //模块Id：
                            //...
                        }
                    }
                }
            },

            link : function(scope,element,attr,ctrl,linker){

                element.on('click','input',function(){
                    var self = $(this) , i = self.index();
                    self.addClass('active').siblings('input').removeClass('active');
                    self.siblings('div').eq(i).show().siblings('div').hide();
                });
                return {
                    pre: function(scope, iElem, iAttrs){
                        console.log(name + ': pre link');
                    },
                    post: function(scope, iElem, iAttrs){
                        console.log(name + ': post link');
                    }
                }
            },

            controller : ['$scope',function($scope){
                $scope.name = 'this is a xiecg';
            }],

        };
    }

    return directives = angular.module('app.directives', ['app.services'])
        .directive('myTouchStart', [function() {
            return function(scope, element, attr) {
                element.on('touchstart mousedown', function() {
                    scope.$apply(function() {
                        scope.$eval(attr.myTouchStart);
                    });
                });
            };
        }])
        .directive('myTouchEnd', [function() {
            return function(scope, element, attr) {
                element.on('touchend mouseup', function() {
                    scope.$apply(function() {
                        scope.$eval(attr.myTouchEnd);
                    });
                });
            };
        }])
        .directive('myTouchMove', [function() {
            return function(scope, element, attr) {
                element.on('touchmove mousemove', function() {
                    scope.$apply(function() {
                        scope.$eval(attr.myTouchMove);
                    });
                });
            };
        }])
});
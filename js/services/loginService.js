/**
 * Created by fengxl on 2016/12/9.
 */
define(function(){
    var factory = function($http,$q,$Util){
        var _userInfo={};
        var _setUserInfo=function(username,password){
            var url='/user/login';
            url=$Util.getApiUrl(url);
            $http({
                method:'POST',
                url:url,
                headers:{
                    packagename:'com.ieasy.phone'
                },
                data:{
                    userName:username,
                    password:password
                }
            }).success(function(data,status,config,headers){
                //处理成功的响应
                if(data.code===1&&data.isSuc){
                    _userInfo=data.result;
                }

            }).error(function(data,status,hedaers,config){
                //处理失败后的响应

            });
        };
        _setUserInfo("13145018522","fxl0508");
        return {
            /**
             * 用户信息
             * @returns {{}}
             * @constructor
             */
            UserInfo:function () {
                return _userInfo;
            },

            /**
             * 获取用户信息
             */
            getUserInfo:_setUserInfo,
        }
    };
    factory.$inject = ['$http','$q','$Util'];
    return factory;
});
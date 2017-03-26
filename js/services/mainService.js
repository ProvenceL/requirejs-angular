/**
 * Created by fengxl on 2016/11/25.
 */
define(function(){
    var factory = function($timeout,$http,$q
        ,$Util,$loginService){
        return {

            /**
             * 频道
             * 福利：43，商城：44，直播：47，广场：49
             * @returns {{square: number, mall: number}}
             * @constructor
             */
            ChannelId:function () {
                return {
                    welfare:43,
                    mall:44,
                    live:47,
                    square:49,
                }
            },

            /**
             * 文章种类
             * 0：普通，1：图集，2：视频
             * @returns {{article: number, image: number, video: number}}
             * @constructor
             */
            ModelType:function () {
                return {
                    article:0,
                    image:1,
                    video:2
                }
            },

            /**
             * 类型
             * 1:文章，2：商品
             * @returns {{article: number, goods: number}}
             * @constructor
             */
            Type:function () {
              return {
                  article:1,
                  goods:2
              }
            },

            /**
             * 活动状态
             * 0：未开始，1：进行中 2：已结束
             * @returns {{noStart: number, staring: number, over: number}}
             * @constructor
             */
            EventsProgress:function () {
                return {
                    noStart:0,
                    staring:1,
                    over:2
                }
            },

            /**
             * get服务器数据
             * @param opts
             * @returns {Promise}
             */
            get:function(opts){
                var deferred = $q.defer();
                var promise = deferred.promise;
                var headers={
                    token:$loginService.UserInfo().Token
                };
                if(typeof opts.headers === "object"&&opts.headers!==null){
                    $Util.goThroughObj(opts.headers,function (key,value) {
                        headers[key]=value;
                    });
                }
                var http=$http({
                    method:'GET',
                    url:opts.url,
                    headers: headers,
                });
                http.success(function(data,status,config,headers){
                    deferred.resolve(data);
                }).error(function(error,status,headers,config){
                    deferred.reject(error);
                });
                return promise;
            },
            /**
             * post服务器数据
             * @param opts
             * @returns {Promise}
             */
            post:function(opts){
                var deferred = $q.defer();
                var promise = deferred.promise;
                var headers={
                    token:$loginService.UserInfo().Token
                };
                if(typeof opts.headers === "object"&&opts.headers!==null){
                    $Util.goThroughObj(opts.headers,function (key,value) {
                        headers[key]=value;
                    });
                }
                var http=$http({
                    method:'POST',
                    url:opts.url,
                    data: opts.data,
                    headers: headers,
                });
                http.success(function(data,status,config,headers){
                    deferred.resolve(data);
                }).error(function(error,status,headers,config){
                    deferred.reject(error);
                });
                return promise;
            },

            /**
             * 获取图片宽高
             * @param url
             */
            getImgWH:function (url) {
                // 创建对象
                var img = new Image();
                //改变图片的src
                img.src = url;
                // 定时执行获取宽高

                var deferred = $q.defer();
                var promise = deferred.promise;
                img.onload=function () {
                    if(img.height>0&&img.width>0){
                        deferred.resolve({height:img.height,width:img.width});
                    }else{
                        deferred.reject({height:0,width:0});
                    }
                };
                return promise;
            },
            /**
             * 设置圆形属性
             * @param len
             * @returns {{height: string, width: string, border-radius: string}}
             */
            setCircleStyle:function (len) {
                return {
                    'height':Number(len)*2+'px',
                    'width':Number(len)*2+'px',
                    'border-radius':len+'px'
                }
            },
            /**
             * 显示提示信息
             * @param message
             * @param opts
             * @returns {*}
             */
            showInfo:function (message,opts) {
                if(angular.isDefined(opts)){
                    return $cordovaToast.show(message, opts.type, opts.position);
                }
                return $cordovaToast.showShortCenter(message);
            }
        }
    };
    factory.$inject = ['$timeout','$http','$q'
        ,'$Util','$loginService'];
    return factory;
});
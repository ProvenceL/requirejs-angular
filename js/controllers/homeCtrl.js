/**
 * Created by fengxl on 2016/11/25.
 */
define(function () {
    function ctrl($scope, $templateCache) {
        $scope.aaa=1;
        ctrl.$inject = ['$scope', '$templateCache'];
    }
    return ctrl;
});
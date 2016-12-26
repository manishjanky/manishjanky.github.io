var styleController = manish.controller("styleController", function ($scope, $http, $location, $rootScope, $window) {
    $scope.styleSheet = "blue";
    $scope.updateStyle = function (style) {
        //update the style selected by the user
        $scope.styleSheet = style;
    }
});

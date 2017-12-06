var homeController = manish.controller("homeController", function ($scope, $http, $location, $rootScope, profileService) {
    $scope.date = new Date();
    $scope.layoutToggle = true;
    $scope.topLayout = profileService.layoutStyle == "side" ? true : false;
    //console.log($scope.topLayout);
    $scope.userProfile = function () {
        if (profileService.userProfile != null) {
            $scope.user = profileService.userProfile;
        } else {
            var promise = profileService.getUserProfile();
            promise.then(function (response) {
                $scope.user = response.data;
                profileService.userProfile = response.data;
            }, function (response) {
                //error occured
            })
        }
    }
    $scope.userProfile();

    $scope.togglelayout = function () {
        $scope.topLayout = !$scope.topLayout;
        profileService.setLayoutStyle($scope.topLayout);// = $scope.topLayout ? "top" : "side";
    }
});

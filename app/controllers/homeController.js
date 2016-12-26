var homeController = manish.controller("homeController", function ($scope, $http, $location, $rootScope, profileService) {
    $scope.Username = 'manishjanky';
    $scope.userProfile = function () {
        var promise = profileService.getUserProfile();
        promise.then(function (response) {
            $scope.user = response.data;
            profileService.userProfile = response.data;
        }, function (response) {
            //error occured
        })
    }
    $scope.userProfile();
});

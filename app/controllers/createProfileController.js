var createProfileController = manish.controller("createProfileController", function ($scope, $http, $location, $rootScope, profileService) {
    $scope.layoutToggle = false;
    $scope.tab = 'getProfile';
    $scope.user = {};
    $scope.education = [{ }];
    $scope.summary = ['', '', '', '']
    $scope.skills = [{}, {}, {}, {}];
    $scope.experience = [{}];
    $scope.certifications = [{}];
    $scope.accolades = [{}];
    $scope.userProfile = function () {
        if (profileService.userProfile != null) {
            $scope.user = profileService.userProfile;
        } else {
            var promise = profileService.getUserProfile();
            promise.then(function (response) {
                $scope.user = response.data;
                //redirect back to home page as this create profile page will be available from only this portfolio
                if ($scope.user.username != "manishjanky") {
                    $location.path("/");
                }
                profileService.userProfile = response.data;
            }, function (response) {
                //error occured
            })
        }

    }
    $scope.fillInstructions = [
        'Please refer this Portfolio to get an idea of what details to fill.',
        'Please fill in all the applicable details properly.',
        'Click on Add more button to add more items.',
        "Please fill proper profile url's for social profiles.",
        "For accolades Image Name field please provide a proper image name with extension and keep them with same name in accolades folder inside images folder(*images name should match with the names filled in the form) while hosting on github."
    ];
    $scope.instructions = ['Fill in all the details properly that follow.',
        'Go to Download tab.',
        'The click Download Profile button Which gives you a profile.json file.',
        'Click Github Repository button what takes you to a github repository page and download it as ZIP.',
        'Extract the downloaded contents.',
        'Replace the profile.json file in the downloaded package with the one downloaded in the second step.And remove the Readme.md file.',
        'Replace the images in images folder according to the name as filled in by you for accolades images inside images/accolades folder. And also the profile picture with your own image(*name of profile picture should be profilePicture.jpg).',
        'Replace the Resume.docx file in the Dowloads folder with you own Resume. And name of file should be Resume and format should be .docx(Resume.docx)',
        'You can host is using Github Pages.'
    ];
    $scope.addItems = function (itemType) {
        if (itemType != 'summary') {
            $scope[itemType].push({});
        } else {
            $scope[itemType].push('');
        }
    }
    
    $scope.removeItems=function(itemType,index){
            $scope[itemType].splice(index,1);
    }
    $scope.downloadFile = function () {
        //this function downloads the profile.json
        $scope.user['education'] = $scope.education;
        $scope.user['summary'] = $scope.summary;
        $scope.user['skills'] = $scope.skills;
        $scope.user['projects'] = $scope.experience;
        $scope.user['certifications'] = $scope.certifications;
        $scope.user['accolades'] = $scope.accolades;
        $scope.user['socialProfiles'] = $scope.socialProfiles;
        $scope.user['coverLetter'] = $scope.coverLetter;
        
        var blob = new Blob([JSON.stringify($scope.user)], { type: 'application/json' });
        $scope.url = (window.URL || window.webkitURL).createObjectURL(blob);
        $scope.url.revokeObjectURL();
    }
});

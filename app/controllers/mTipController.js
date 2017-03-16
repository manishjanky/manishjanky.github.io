var mTipController = manish.controller("mTipController", function ($scope, $http, $location, $rootScope, profileService) {
    $scope.tab = "tab1";
    $scope.$on('$viewContentLoaded', function () {
        //Here your view content is fully loaded !!
        mTip({ selector: ".tooltip" });
        mTip({ selector: ".clickTrigger", trigger: "click" });
        mTip({ selector: ".custColor", bColor: "blue", color: "white" });
        mTip({ selector: ".delay", delay: 2000 });
        mTip({ selector: ".opacity", opacity: 0.5, bColor: "red", color: "white" });
        mTip({ selector: ".position", position:"top"});
        
        $('.collapsible').collapsible();
    });

    $scope.mtipOptions = [
        {
            name: "backgroundColor",
            values: "Any valid html color in hexadecimal/rgb(0,0,0)/nameOfColor",
            description:"Sets the background color of the mTip tooltip"
        },
        {
            name: "color",
            values: "Any valid html color in hexadecimal/rgb(0,0,0)/nameOfColor",
            description: "Sets the forecolor/textcolor of the mTip tooltip text"
        },
        {
            name: "opacity",
            values: "Any valid integer between 0 - 1",
            description: "Delays the appearence of the tooltip for the number of miliseconds passed as the value of the delay parameter."
        },
        {
            name: "delay",
            values: "Any valid integer",
            description: "Delays the appearence of the tooltip for the number of miliseconds passed as the value of the delay parameter."
        },
        {
            name: "trigger",
            values: "click, hover",
            description: "This parameter is used to tell mTip when to show the tooltip i.e based on the value passes the tooltip is shown either on click of the element or mouse hover."
        },
        {
            name: "position",
            values: "bottom, left, right, top",
            description: "This parameter is used to position the mTip tooltip. Based on the value of the option the tooltip position is either bottom, left, right or top."
        },
        {
            name: "selector",
            values: "Any valid CSS Selector",
            description: "This parameter is used to initialize tooltip only on those elements which are identified by the selector as passed in the options for example:- use '.className' for selecting elemets having class as 'className'."
        }
    ]

    $scope.faqs = [
        {
            question: "What is mTip?",
            answer: "A cross browser javascript custom tooltip plugin. A simple, flexible, extensible and customizable plugin."
        },
        {
            question: "Need help with implementing mTip?",
            answer: "Please go through the Getting Started Section. Still if you face any issue feel free to contact."
        },
        {
            question: "Do we need jQuery for mTip to work?",
            answer:"No mTip is a pure javascript plugin. You don't need jQuery for mTip to work."
        }, {
            question: "Which all browsers do mTip support?",
            answer: "mTip supports all modern browsers. IE8+, Edge, Chrome, Firefox, Opera, Safari."
        }, {
            question: "I found a bug/issue with mTip?",
            answer: "Go ahead and report a issue on issue tracker on GitHub: https://github.com/manishjanky/mTip/issues"
        }, {
            question: "How can i customize mTip tooltips?",
            answer: "There is a range of options available that helps to customize mTip tooltips. Please visit Options section to know more about available options the help customize mTip tooltips."
        }, {
            question: "How compatible is mTip tooltip with Internet Explorer?",
            answer:"mTip supports IE 8 and later versions. It works decently with IE8+. But there might be some things which may come up. You can report if you come across one, we will address your query and try to fix if a issue is reported."
        }
    ]
});
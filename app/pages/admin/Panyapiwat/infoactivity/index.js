$(function() {
    $('#side-menu').metisMenu();
});
//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }
        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });
    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();
    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});
//------------------------------------ My Code ------------------------------------
var app = angular.module("Admin_Panyapiwat", ["ngRoute"]);
// app.config(function($routeProvider) {
//     $routeProvider.when("/", {
//         templateUrl: "table/YearClass.html"
//     }).when("/FirstYear", {
//         templateUrl: "table/FirstYear.html"
//     }).when("/SecondYear", {
//         templateUrl: "table/SecondYear.html"
//     }).when("/ThirdYear", {
//         templateUrl: "table/ThirdYear.html"
//     }).when("/FourthYear", {
//         templateUrl: "table/FourthYear.html"
//     }).when("/sub-activity-student", {
//         templateUrl: "table/sub-activity-student.html"
//     });
// });
app.controller('Info_Activity', function($scope, $http) {
    $scope.nowPage = 1;
    $scope.buttonBackHide = true;
    $scope.buttonNextHide = false;
    $scope.urlInfoActivity = "http://localhost:8080/pim/getInfoActivity/page=" + $scope.nowPage;
    // $http.get($scope.urlInfoActivity).then(function(response) {
    //     $scope.getData= response.data;
    // }); 
    $scope.getData = [{
        "id": "12345678901234567890",
        "header": "จิตอาสากิจกรรมวันเด็ก",
        "detail": "จัดซุ้ม ดูแลซุ้มกิจกรรมเกมวันเด็ก",
        "rewardMoney": 0,
        "rewardHours": 8,
        "dateStart": "21-01-2561",
        "dateEnd": "21-01-2561",
        "timeStart": "08.00",
        "timeEnd": "15.30",
        "location": "โรงเรียนอนุบาลนนทบุรี",
        "holderName": "อาจารย์พรสิริ อิอิ",
        "holderPhone": "0987654345",
        "personCount": 15,
        "personLimit": 20,
        "status": "ยังมีที่ว่าง"
    }, {
        "id": "12345678901234567892",
        "header": "อิอิ",
        "detail": "จัดซุ้ม ดูแลซุ้มกิจกรรมเกมวันเด็ก",
        "rewardMoney": 0,
        "rewardHours": 8,
        "dateStart": "21-01-2561",
        "dateEnd": "21-01-2561",
        "timeStart": "08.00",
        "timeEnd": "15.30",
        "location": "โรงเรียนอนุบาลนนทบุรี",
        "holderName": "อาจารย์พรสิริ อิอิ",
        "holderPhone": "0987654345",
        "personCount": 15,
        "personLimit": 20,
        "status": "ยังมีที่ว่าง"
    }, {
        "id": "12345678901234567893",
        "header": "อุอุ",
        "detail": "จัดซุ้ม ดูแลซุ้มกิจกรรมเกมวันเด็ก",
        "rewardMoney": 0,
        "rewardHours": 8,
        "dateStart": "21-01-2561",
        "dateEnd": "21-01-2561",
        "timeStart": "08.00",
        "timeEnd": "15.30",
        "location": "โรงเรียนอนุบาลนนทบุรี",
        "holderName": "อาจารย์พรสิริ อิอิ",
        "holderPhone": "0987654345",
        "personCount": 15,
        "personLimit": 20,
        "status": "ยังมีที่ว่าง"
    }, {
        "id": "12345678901234567894",
        "header": "อะอะ",
        "detail": "จัดซุ้ม ดูแลซุ้มกิจกรรมเกมวันเด็ก",
        "rewardMoney": 0,
        "rewardHours": 8,
        "dateStart": "21-01-2561",
        "dateEnd": "21-01-2561",
        "timeStart": "08.00",
        "timeEnd": "15.30",
        "location": "โรงเรียนอนุบาลนนทบุรี",
        "holderName": "อาจารย์พรสิริ อิอิ",
        "holderPhone": "0987654345",
        "personCount": 15,
        "personLimit": 20,
        "status": "ยังมีที่ว่าง"
    }];
    $scope.pageBack = function() {
        if ($scope.nowPage == 1) {
            $scope.buttonBackHide = true;
        } else {
            $scope.nowPage++;
            // $http.get($scope.urlInfoActivity).then(function(response) {
            //     $scope.getData= response.data;
            // }); 
        }
    }
    $scope.pageNext = function() {
        $scope.buttonBackHide = false;
        $scope.nowPage--;
        // $http.get($scope.urlInfoActivity).then(function(response) {
        //     $scope.getData= response.data;
        // }); 
    }
});
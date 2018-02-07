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
//----------------------- My Code --------------------------
var app = angular.module("Admin_Panyapiwat", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "table/YearClass.html"
    }).when("/FirstYear", {
        templateUrl: "table/FirstYear.html"
    }).when("/SecondYear", {
        templateUrl: "table/SecondYear.html"
    }).when("/ThirdYear", {
        templateUrl: "table/ThirdYear.html"
    }).when("/FourthYear", {
        templateUrl: "table/FourthYear.html"
    }).when("/sub-activity-student", {
        templateUrl: "table/sub-activity-student.html"
    });
});
app.controller('WorkStudents', function($scope, $http) {
    $scope.divForSearch = true;
    $scope.hideDivForSearch = function() {
        $scope.divForSearch = false;
    }
    $scope.showDivForSearch = function() {
        $scope.divForSearch = true;
    }
    $scope.urlGetFaculty = "http://localhost:8080/getFaculty";
    $scope.forSearch;
    $scope.faculty;
    $scope.major;
    $scope.getFaculty = function() {
        // $http.get($scope.urlGetFaculty).then(function(response) {
        //     $scope.faculty = response.data;
        // });
        $scope.faculty = [{
            "id": 1,
            "name": "คณะบริหารธุรกิจ",
            "major": [{
                "id": 101,
                "name": "สาขาวิชาการจัดการธุรกิจการค้าสมัยใหม่"
            }]
        }, {
            "id": 4,
            "name": "คณะวิศวกรรมศาสตร์และเทคโนโลยีกิจ",
            "major": [{
                "id": 401,
                "name": "สาขาเทคโนโลยีสารสนเทศ"
            }, {
                "id": 402,
                "name": "สาขาวิศวกรรมคอมพิวเตอร์"
            }]
        }];
    }
    $scope.changFaculty = function() {
        $scope.major = $scope.forSearch.faculty.major;
    }
    $scope.requestData = function() {
        $scope.urlRequestAllActivityStudent = "http://localhost:8080/ADMIN_pim/getWorkStudent/majorId=" + $scope.forSearch.major.id + ",studentIdStartingWith=" + $scope.forSearch.studentIdStartingWith + ",studentId=" + $scope.forSearch.studentId + ",firstName=" + $scope.forSearch.studentFirstName + ",lastName=" + $scope.forSearch.studentLastName;
        // $http.get($scope.urlRequestAllActivityStudent).then(function(response) {
        //     $scope.getData = response.data;
        // });
        $scope.getData = [{
            "id": "5852100081",
            "firstName": "ศิริศักดิ์",
            "lastName": "นวนิตย์วรานทท์",
            "activityClassYear": [{
                "id": "5852100081011",
                "name": "ชั้นปีที่ 1",
                "canDo": 60,
                "limit": 60,
                "status": "ผ่าน",
                "activityTerm": [{
                    "id": "585210008101101",
                    "name": "เทอม Pre",
                    "canDo": 12,
                    "limit": 12,
                    "status": "ผ่าน"
                }, {
                    "id": "585210008101111",
                    "name": "เทอม 1.1",
                    "canDo": 12,
                    "limit": 12,
                    "status": "ผ่าน"
                }, {
                    "id": "585210008101112",
                    "name": "เทอม 1.2",
                    "canDo": 12,
                    "limit": 12,
                    "status": "รอตรวจสอบ"
                }, {
                    "id": "585210008101121",
                    "name": "เทอม 2.1",
                    "canDo": 0,
                    "limit": 12,
                    "status": "ว่าง"
                }, {
                    "id": "585210008101122",
                    "name": "เทอม 2.2",
                    "canDo": 0,
                    "limit": 12,
                    "status": "ว่าง"
                }]
            }, {
                "id": "5852100081012",
                "name": "ชั้นปีที่ 2",
                "canDo": 60,
                "limit": 60,
                "status": "ผ่าน",
                "activityTerm": []
            }, {
                "id": "5852100081013",
                "name": "ชั้นปีที่ 3",
                "canDo": 0,
                "limit": 0,
                "status": "ว่าง",
                "activityTerm": []
            }, {
                "id": "5852100081014",
                "name": "ชั้นปีที่ 4",
                "canDo": 0,
                "limit": 0,
                "status": "ว่าง",
                "activityTerm": []
            }]
        }, {
            "id": "5852100082",
            "firstName": "อุอุ",
            "lastName": "อิอิ",
            "activityClassYear": [{
                "id": "5852100081011",
                "name": "ชั้นปีที่ 1",
                "canDo": 60,
                "limit": 60,
                "status": "ผ่าน",
                "activityTerm": [{
                    "id": "585210008101101",
                    "name": "เทอม Pre",
                    "canDo": 12,
                    "limit": 12,
                    "status": "ผ่าน"
                }, {
                    "id": "585210008101111",
                    "name": "เทอม 1.1",
                    "canDo": 12,
                    "limit": 12,
                    "status": "ผ่าน"
                }, {
                    "id": "585210008101112",
                    "name": "เทอม 1.2",
                    "canDo": 12,
                    "limit": 12,
                    "status": "รอตรวจสอบ"
                }, {
                    "id": "585210008101121",
                    "name": "เทอม 2.1",
                    "canDo": 0,
                    "limit": 12,
                    "status": "ว่าง"
                }, {
                    "id": "585210008101122",
                    "name": "เทอม 2.2",
                    "canDo": 0,
                    "limit": 12,
                    "status": "ว่าง"
                }]
            }, {
                "id": "5852100081012",
                "name": "ชั้นปีที่ 2",
                "canDo": 60,
                "limit": 60,
                "status": "ผ่าน",
                "activityTerm": []
            }, {
                "id": "5852100081013",
                "name": "ชั้นปีที่ 3",
                "canDo": 0,
                "limit": 0,
                "status": "ว่าง",
                "activityTerm": []
            }, {
                "id": "5852100081014",
                "name": "ชั้นปีที่ 4",
                "canDo": 0,
                "limit": 0,
                "status": "ว่าง",
                "activityTerm": []
            }]
        }];
        console.log("ขอข้อมูลกิจกรรมโดยรวม");
        console.log($scope.getData);
    }
    $scope.getActivityStudent = function(idTableActivity) {
        $scope.urlRequestActivityStudent = "http://localhost:8080/activeTermId=" + idTableActivity;
        // $http.get($scope.urlRequestActivityStudent).then(function(response) {
        //     $scope.getDataActivityStudent = response.data;
        // });
        $scope.getDataActivityStudent = [{
            "id": "111111111111111111",
            "activityType": "กิจกรรมภายใน",
            "verifyBy": "3123123124",
            "status": "รอการตรวจสอบ",
            "date": "21-01-2558",
            "time": "12.30",
            "duration": 30,
            "location": "pim",
            "header": "กิจกรรมRobot",
            "detail": "เป็นกรรมการคอยตรวจสอบ",
            "allowance": 3000,
            "responsibleAgency": "haha company",
            "holderActivityName": "นายฉัตรชัย อิอิทดสอบ",
            "holderActivityPhone": "0231212345",
            "holderActivityEmail": "holder@gmail.com",
            "createDate": "21-01-2558 16.00.45"
        }, {
            "id": "111111111111111112",
            "activityType": "กิจกรรมภายใน",
            "verifyBy": "3123123124",
            "status": "รอการตรวจสอบ",
            "date": "21-01-2558",
            "time": "12.30",
            "duration": 30,
            "location": "pim",
            "header": "กิจกรรมRobot",
            "detail": "เป็นกรรมการคอยตรวจสอบ",
            "allowance": 3000,
            "responsibleAgency": "haha company",
            "holderActivityName": "นายฉัตรชัย อิอิทดสอบ",
            "holderActivityPhone": "0231212345",
            "holderActivityEmail": "holder@gmail.com",
            "createDate": "21-01-2558 16.00.45"
        }];
        $scope.sumDuration = 0;
        for (var i = 0; $scope.getDataActivityStudent[i]; i++) {
            $scope.sumDuration = $scope.sumDuration + $scope.getDataActivityStudent[i].duration;
        }
    }
    $scope.autoCheck = function(classYear) {
        for (var i = 0; $scope.getData[i]; i++) {
            console.log($scope.getData[i].activityClassYear[classYear]);
            $scope.urlAutoCheck = "http://localhost:8080/ADMIN_pim/autocheck/id=" + $scope.getData[i].activityClassYear[classYear].id;
            // $http.get($scope.urlAutoCheck).then(function(response) {
            //     $scope.data[i].activityClassYear[classYear].activityTerm = response.data;
            // });
            // console.log($scope.getData);
            $scope.getData[i].activityClassYear[classYear].activityTerm = [{
                "id": "585210008101101",
                "name": "เทอม Pre",
                "canDo": 12,
                "limit": 12,
                "status": "ผ่าน"
            }, {
                "id": "585210008101111",
                "name": "เทอม 1.1",
                "canDo": 12,
                "limit": 12,
                "status": "ผ่าน"
            }, {
                "id": "585210008101112",
                "name": "เทอม 1.2",
                "canDo": 12,
                "limit": 12,
                "status": "ผ่าน"
            }, {
                "id": "585210008101121",
                "name": "เทอม 2.1",
                "canDo": 0,
                "limit": 12,
                "status": "ว่าง"
            }, {
                "id": "585210008101122",
                "name": "เทอม 2.2",
                "canDo": 0,
                "limit": 12,
                "status": "ว่าง"
            }];
        }
    }
});
var demo = angular.module('demo', ['ngRoute'])

demo.config(function($routeProvider) {
      //console.log($routeProvider);
      $routeProvider
      

      /*.when('/', {
        templateUrl : 'js/pages/login.html',
        controller  : 'Audmin'
      })*/
    
      .when('/view', {
        templateUrl : 'js/pages/view.html',
        controller  : 'Audmin'
      })
    
      .when('/new', {
        templateUrl : 'js/pages/new.html',
        controller  : 'Audmin'
      })

      .when('/edit', {
        templateUrl : 'js/pages/edit.html',
        controller  : 'Audmin'
      })

      .when('/home', {
        templateUrl : 'js/pages/home.html',
        controller  : 'Audmin'
      })

      .otherwise({redirectTo: '/home'});
    });

demo.controller('Audmin', function($scope, $location, $http) {
    
    var URL= 'http://test.aultar.wedding:8080/';
    $scope.studentURL;
    $scope.stats;
    $scope.authData;
    
    $scope.authdata = window.btoa('1337:password123');
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $scope.authdata;
    

    
   /* $scope.login = function(){
        //console.log('poop');
        $scope.authdata = window.btoa($scope.username + ':' + $scope.password);
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $scope.authdata;
        //console.log($http.defaults);
        $http.get(URL).success(function(data){
            $location.path( "/home" );
        }).error(function(data){
           //console.log(data);
            if(data == null && data == undefined){
                alert("Login system failed, contact support.");
            }
            else if(data.status == 401){
                alert("Wrong username/password");   
            }
            else{
                alert("Login failed");
            }
        });
    }*/
    
    $scope.getStats = function() {
        $http.get(URL+'stats').
        then(function(response) {
            $scope.stats =response.data;
            //$scope.stats = response.data._embedded.courses;
            //console.log($scope.courses);   
        });
    }
    
    $scope.getStats();
    
    $scope.getDatalist = function(){
        $http.get(URL+'households').then(function(response){
           $scope.houseHolds = response.data;
            //console.log(response.data);
        });
    }
    
    $scope.getDatalist();
    //$scope.getDatalist('hello');
    /*
    //$scope.getStudents();
    //$scope.getCourses();
    
    
    $scope.showSelectValue = function(mySelect) {
                var res = mySelect.split("/");
                //console.log(res[4]);
                $scope.studentURL =URL +"students/" +res[4];
                //console.log($scope.studentURL)
                
                $http.get($scope.studentURL).
        then(function(response) {
            $scope.student=response.data;
            //console.log($scope.student)
        });
            }
    
    $scope.newStudent = function(){
       var toSend = JSON.stringify({firstName: $scope.fName, lastName: $scope.lName, council: $scope.council, district: $scope.district, unit: $scope.unit, email: $scope.email, password:$scope.password});
        $http.post(URL+'students', toSend).success(function(){
        $scope.fName = '';
        $scope.lName = '';
        $scope.council = '';
        $scope.district = '';
        $scope.unit = '';
        $scope.email = '';
        $scope.password = '';
        }).error(function(){
            alert("Failure to create student.")
        });
        //console.log(toSend);

    }
    
    $scope.loadCourseSelect = function(courseSelect){
        $scope.courseSelcect=courseSelect;
    }
    
    $scope.addCourse = function() {
        var courseObj = $scope.student.courses;
        var newCourse = JSON.parse($scope.courseSelcect);
        if(courseObj == null || courseObj == undefined){
            courseObj =[{"level":newCourse.level,"number":newCourse.number,"name":newCourse.name, "year":$scope.year}];
        }
        else{
            courseObj.push({"level":newCourse.level,"number":newCourse.number,"name":newCourse.name, "year":$scope.year})
        }
        $scope.student.courses = courseObj;
        //console.log(courseObj);
        //console.log($scope.courseSelcect);
    }
    
    $scope.submitEdit= function(student){
        //console.log(courses);
        delete $scope.student.password;
        var toSend = JSON.stringify($scope.student);
        //console.log(toSend);
        //console.log($scope.studentURL);
        //console.log($scope.student);
        //courses = JSON.stringify(courses);
        //courses = "{\"courses\":" + courses+ "}";
        //console.log(courses);
        //$http.patch( $scope.studentURL, courses);
        $http.patch($scope.studentURL,toSend).success(function(response){
            $scope.submitSucc="Submitted!";
            alert("Information Updated!");
            //$location.path( "/edit" );
        });
    }*/
       
    

});
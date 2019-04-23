var demo = angular.module('demo', ['ngRoute'])

demo.config(function($routeProvider) {
      //console.log($routeProvider);
      $routeProvider
      

      .when('/', {
        templateUrl : 'js/pages/login.html',
        controller  : 'Audmin'
      })
    
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
    
      .when('/songs', {
        templateUrl : 'js/pages/songs.html',
        controller  : 'Audmin'
      })

      .otherwise({redirectTo: '/home'});
    });

demo.controller('Audmin', function($scope, $location, $http, $route) {
    
    var URL= 'http://test.aultar.wedding:8080/';
    $scope.studentURL;
    $scope.stats;
    $scope.authData;
    //console.log(location);
    //$scope.authdata = window.btoa('user:password');
    //$http.defaults.headers.common['Authorization'] = 'Basic ' + $scope.authdata;
    
    

    
   $scope.login = function(){
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
    }
    
    $scope.getStats = function() {
        $http.get(URL+'stats').
        then(function(response) {
            $scope.stats =response.data;
            //$scope.stats = response.data._embedded.courses;
            //console.log($scope.courses);   
        });
    }
    
    
    $scope.getDatalist = function(){
        $http.get(URL+'households').then(function(response){
           $scope.houseHolds = response.data;
            //console.log(response.data);
        });
    }
    
    $scope.getSongs = function(){
        $http.get(URL+'songs').then(function(response){
           $scope.songs = response.data;
            var one = new Array;
            var two=new Array;
            var three=new Array;
            var four = new Array;
            var x =0
            for(x = 0; x<$scope.songs.length; x++)
                {
                    
                    var i = $scope.songs[x].order
                    switch(i)
                    {
                        case 1:
                            one.push($scope.songs[x]);
                            break;
                        case 2:
                            two.push($scope.songs[x]);
                            break;
                        case 3:
                            three.push($scope.songs[x]);
                            break;
                        case 4:
                            four.push($scope.songs[x]);
                            break;
                            
                    }
                }
            
            //console.log(one);
            //;
            //;
            //one.concat(two.concat(three.concat(four)));
            $scope.sortedSongs= one.concat(two.concat(three.concat(four)));
            
            
            //console.log(response.data);
        });
    }
    
    $scope.deleteSong = function(song){
        $http.delete(URL+'songs/'+song.songId).then(function(response){
            $route.reload();
        });
        
    }
    
    $scope.showSelectValue = function(mySelect) {
        console.log(mySelect);        
        $http.get(URL+'households/'+mySelect).
        then(function(response) {
            $scope.houseEdit=response.data;
            //console.log($scope.student)
        });
            }
    
    if(location.hash =='#/home')
        {
            $scope.getDatalist();
            $scope.getStats();
        }
    
    if(location.hash == '#/songs')
        {
            $scope.getSongs();
        }
    
     if(location.hash =='#/edit')
        {
            $scope.getDatalist();
        }
    //$scope.getDatalist('hello');
    /*
    //$scope.getStudents();
    //$scope.getCourses();
    
    
    
    
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
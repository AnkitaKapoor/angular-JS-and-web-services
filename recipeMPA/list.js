 //Name:         Ankita KAPOOR
 //Student ID:   18358877
 //User name:    18358877
 //Subject Code: CSE4OAD

var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http)
	{
	 
	   	$scope.sortBy = 'name'; // default value
       $scope.sortDescending = false; // default ascending
       $scope.searchText = ''; // default blank
		
		$scope.display = function()
		{
		$http({method : "get", 
		url : "http://localhost:8080/recipeWS/recipes"})
		.then(function(response)
		{
			 var obj = response.data;
	        $scope.recipes = obj;
		});		
		};

		
	});
	//end controller
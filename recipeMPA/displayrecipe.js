 //Name:         Ankita KAPOOR
 //Student ID:   18358877
 //User name:    18358877
 //Subject Code: CSE4OAD

var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http)
{
	$scope.reset = function()
		{
		$scope.r="";
			$scope.steps="";
		};
		
	$scope.displayrecipe = function()
	{
			
		var connection = $http(
		{
			method : "get",
			url : "http://localhost:8080/recipeWS/recipes?id="+$scope.id
		})

		.then(function(response)
		{
			var obj = response.data;		
			$scope.steps=obj.steps;
			$scope.r = obj;
		})

		.catch(function(response)
		{
			
		})

		.finally(function(config)
		{
			// OK to take no action
		})
		// end http

	};// end display




});
//end controller
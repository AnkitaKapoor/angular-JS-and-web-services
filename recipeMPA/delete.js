// Name:         Ankita KAPOOR
// Student ID:   18358877
// User name:    18358877
// Subject Code: CSE4OAD

var app = angular.module("dltRecipe", []);

app.controller("dltController", function($scope, $http)
{

	$scope.display = function()
	{
		var connection = $http(
		{
			method : "get",
			url : "http://localhost:8080/recipeWS/recipes?id="+$scope.id
		})

		.then(function(response)
		{
			var obj = response.data;		
				$scope.id=obj.id;
				$scope.id1=obj.id;
				$scope.name=obj.name;
				$scope.serves=obj.serves;
				$scope.ingredients=obj.ingredients;
				$scope.steps=obj.steps;
				$scope.remarks=obj.remarks;		
		})

		.catch(function(response)
		{
			alert("No Recipe Found");
		})

		.finally(function(config)
		{
			// OK to do nothing
		})
		// end http

	};// end display


	// start delete
	$scope.delete = function()
	{
		var connection = $http(
		{
			method : "delete",
			url : "http://localhost:8080/recipeWS/recipes?id="+$scope.id
		})

		.then(function(response)
		{
			$scope.id="";
			$scope.id1="";
			$scope.name="";
			$scope.serves="";
			$scope.ingredients="";
			$scope.steps="";
			$scope.remarks="";			
	    	$scope.message = "Delete : Success - status: "
				+ response.status + ": " + response.statusText;
		})

		.catch(function(response)
		{
		    $scope.message = "Delete : Error - status: "
				+ response.status + ": " + response.statusText;
		})

		.finally(function(config)
		{
			alert($scope.message);
		})
		// end http

	};
	// end delete


});
//end controller
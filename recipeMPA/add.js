// Name:         Ankita KAPOOR
// Student ID:   18358877
// User name:    18358877
// Subject Code: CSE4OAD

var app = angular.module("addRecipe", []);

app.controller("addController", function($scope, $http){

	$scope.add = function() 
	{
		
		var connection = $http(
			{
				method: "post",
				url: "http://localhost:8080/recipeWS/recipes",
				data:
					{
						"name":$scope.name,
						"serves": $scope.serves,
						"ingredients": $scope.ingredients,
						"steps": $scope.steps,
						"remarks": $scope.remarks 
					}
			})
		
		.then(function(response)
			{
			$scope.message = "ADD SUCCEEDS - status: "+ response.status;  
			$scope.name="";
			$scope.serves="";
			$scope.ingredients="";
			$scope.steps="";
			$scope.remarks="";
			})

		.catch(function(response)
			{
			$scope.message = "ADD FAILS - status: "+ response.status+ response.statusText;
						})

		.finally (function(config)
			{
				alert($scope.message);
			});

	};

});
//end controller
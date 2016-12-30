// Name:         Ankita KAPOOR
// Student ID:   18358877
// User name:    18358877
// Subject Code: CSE4OAD

var app = angular.module("appRecipe", []);

app.controller("appController", function($scope, $http)
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
/////////////
	$scope.editbtn = function()
	{
	var obj = {};
			obj.id = $scope.id;
			obj.name = $scope.name;
			obj.serves = $scope.serves;
			obj.ingredients = $scope.ingredients;
			obj.steps = $scope.steps;
			obj.remarks = $scope.remarks;
			$http.put('http://localhost:8080/recipeWS/recipes',  obj);		
			alert("Recipe updated");
		
};// end 

});
//end controller
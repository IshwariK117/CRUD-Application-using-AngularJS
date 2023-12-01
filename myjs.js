let x=angular.module('mymodule',[]);
x.controller('myController',function($scope,$http){        /*$http makes a http request to the ser */
$scope.create1show=0;
$scope.delete1show=0;
$scope.update1show=0;	
$scope.display1show=0;
$scope.empData={};
$scope.showcreate=function()
{
	 $scope.create1show=1;
	 $scope.delete1show=0;
	 $scope.update1show=0;
	 $scope.display1show=0;
}

$scope.showdelete=function()
{
	 $scope.delete1show=1;
	 $scope.create1show=0;
	 $scope.update1show=0;
	 $scope.display1show=0;
}

$scope.showupdate=function()
{
	$scope.delete1show=0;
	$scope.create1show=0
    $scope.update1show=1;
    $scope.display1show=0;
}
	
$scope.showdisplay=function(){
	$scope.delete1show=0;
	$scope.create1show=0
    $scope.update1show=0;
    $scope.display1show=1;
		
}

$scope.saveData=function(){
	$http({
		method:"POST",
		url:"saveServlet",
		data:JSON.stringify($scope.empData)
	})
	.then(function(response){
		
	})
}
	
})
	


var app = angular.module("bookStore", ['ngRoute']);
var i = 0;
app.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/bookstore', {
                  templateUrl: 'bookstore.htm',
                  controller: 'bookController'
               }).
               when('/viewbook/:bookid', {
                  templateUrl: 'viewbook.htm',
                  controller: 'ViewbookController'
               }).
               otherwise({
                  redirectTo: '/bookstore'
               });
         }]);
app.controller("bookController", function($scope,$http) {
	var maxHeight = 0;
	var newHeight = 0;
	$scope.bookName = '';
  var url = "https://www.googleapis.com/books/v1/volumes?q=book&maxResults=12&key=AIzaSyDxdRc98FI1ox_l_WqH30yWUoghWfHA6jA";
  url = "text.txt";
  $http.get(url).success( function(response) {
                           $scope.students = response;
                           console.log(response);
                        }); 	
    $scope.data = function(){
   		var url="https://www.googleapis.com/books/v1/volumes?q="+ $scope.bookName +"&maxResults=12&key=AIzaSyDxdRc98FI1ox_l_WqH30yWUoghWfHA6jA";
   		maxHeight = 0;
   		//url = "books.json"
      var inp= $scope.bookName;
   		if(inp.length>=5){
   		$http.get(url).success( function(response) {
                           $scope.students = response;
                           console.log('ad'+response);
                        });
   		
   		}
   	}
   	$scope.setDivHeight = function(index){
   		
   		
   		newHeight = $('#book_'+index-1).height();
   		
   		
   		fc(index);
   		
   	}
   	$scope.addToCart = function(book){
   		alert('"'+book+'"" added to cart');
   	}
   	$scope.getPrice = function() {
        return Math.round(46*(Math.random())*(Math.random())+100*(Math.random()));
    }
    $scope.viewInfo = function(id,book) {

        i = 0;
        window.location.href = '#viewbook/'+id;
    }

});



app.controller('ViewbookController', function($scope, $routeParams,$http) {
              
              
              var x = '';
              
              console.log($routeParams['bookid']); 
              var url = "https://www.googleapis.com/books/v1/volumes/"+$routeParams['bookid'];
              console.log(url);
              
              
              $http.get(url).success( function(response) {
                           $scope.book = response;
                           
                           
                        });   

             
            
            
            

         });





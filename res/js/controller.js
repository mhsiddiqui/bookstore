app.controller("studentController", function($scope,$http) {
	var maxHeight = 0;
	var newHeight = 0;
	$scope.bookName = '';
  var url = "https://www.googleapis.com/books/v1/volumes?q=book&maxResults=12&key=AIzaSyDxdRc98FI1ox_l_WqH30yWUoghWfHA6jA";
  url = "text.txt";
  $http.get(url).success( function(response) {
                           $scope.students = response;
                        }); 	
    $scope.data = function(){
   		var url="https://www.googleapis.com/books/v1/volumes?q="+ $scope.bookName +"&maxResults=12&key=AIzaSyDxdRc98FI1ox_l_WqH30yWUoghWfHA6jA";
   		maxHeight = 0;
   		url = "books.json"
      var inp= $scope.bookName;
   		if(inp.length>=5){
   		$http.get(url).success( function(response) {
                           $scope.students = response;
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

});

app.controller('ViewCart', function($scope) {
            alert('You Cart');
         });



 app.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/viewCart', {
                  templateUrl: 'viewCart.htm',
                  controller: 'ViewCart'
               });
         }]);
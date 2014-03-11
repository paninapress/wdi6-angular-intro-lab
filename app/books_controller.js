var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  //Code to manage cart goes here
  $scope.cart_items = [];
  $scope.addBooks = function($index) {
    thisBook = {id: books[$index].id, title: books[$index].title, author: books[$index].author, 
      price: books[$index].price, quantity: 1};

    if ($scope.cart_items.length > 0){
        _.each($scope.cart_items, function(book){
          if (book.id === thisBook.id){
             book.quantity += 1; 
            }
          else { $scope.cart_items.push(thisBook); }
        });
      }
    else { $scope.cart_items.push(thisBook); }
    
    console.log($scope.cart_items);
    
  };
};

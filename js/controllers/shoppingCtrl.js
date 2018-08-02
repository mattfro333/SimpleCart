angular.module('holly').controller('shoppingCtrl',function($scope, shoppingSrvc){

    $scope.products = [];
    $scope.cartItems = [];
console.log($scope);


$scope.initProducts = function ($scope){
    shoppingSrvc.initProducts().then(function(response){
        $scope.products = response.data

}


    $scope.addCartItem = function(product){
        $scope.cartItems.push({ name : product.name, quantity: 1, id : product.id, price : product.price })
    }

    $scope.cartSum = function(){
        var sum =0;
        $scope.cartItems.forEach(function(item){
            sum += item.quantity * item.price;
        });

        return sum;
    }
})

angular.module('heroApp').service('battleSrvc', function($http){
  this.initProducts(){
    return    $scope.products = [
          { name : 'CD', price : 110, id : 1 },
          { name : 'DVD', price : 150, id: 2 }
      ].then(function(response){
        console.log(response.data)
      return response.data;
    })
  }
}

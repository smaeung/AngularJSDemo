angular.module('demoViews')
    .controller('productController', function($scope, $location){
        $scope.products =[
            {id: 0, name: "Product 1", category: "Test1", price: 124},
            {id: 1, name: "Product 2", category: "Test2", price: 300},
            {id: 2, name: "Product 3", category: "Test3", price: 400},
            {id: 3, name: "Product 4", category: "Test4", price: 500}

        ];
        $scope.currentProduct = null;
        $scope.listProducts = function(){
            return $scope.products;
        };

        $scope.deleteProduct = function(product){
            $scope.products.splice($scope.products.indexOf(product), 1);
            $location.path('/list');
        };

        $scope.createProduct = function(product){
            $scope.products.push(product);
            $location.path('/list');
        };

        $scope.updateProduct = function(product){
            for(var i=0; i <$scope.products.length; i++){
                if($scope.products[i].id == product.id){
                    $scope.products[i]= product;
                    break;
                }
            }
            $location.path('/list');
        };


        $scope.editOrCreateProduct = function(product){
            $scope.currentProduct = product ? angular.copy(product) : {};
            $location.path('/edit');
        };

        $scope.saveEdit = function(product){
            if(angular.isDefined(product.id)){
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
        };

        $scope.cancelEdit= function(){
            $scope.currentProduct = {};
            $location.path('/list');
        };

        $scope.listProducts();
    });
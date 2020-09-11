var app = angular.module("myApp", ["ngRoute"]);

// Routing
app.config(function($routeProvider){
    $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : '/about.html',
                controller  : 'aboutController'
            })

            .otherwise({redirectTo: '/'});

});

// create the controller and inject Angular's $scope

// Main Controller
app.controller('mainController', function($scope) {

    
    // create a message to display in our view
    $scope.message = 'Product List App';

    // Add product to list
    $scope.product = { title: "", desc: ""};
    $scope.products = [
        {title: 'Milk', desc: 'white'},
        {title: 'Coco', desc: 'Brown'}
    ];
    $scope.cur = { title: "", desc: ""};
    $scope.showCur = false;
    $scope.addItem = function () {
        $scope.products.push($scope.product);
        $scope.product = { title: "", desc: ""};
        $scope.showCur = false;
    } 

    // Remove product from list 
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1); 
    }  

    // Display particular product-description
    $scope.displayItem = function (x) {
        $scope.cur = $scope.products[x];
        $scope.showCur = true;
    }  

    // back button result
    $scope.backDisp = function() {
        $scope.showCur = false;
    } 

    });
//--------------------------------------------------------------------------//
    // About COntroller
    app.controller('aboutController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Product List App';

    // Add product to list
    $scope.product = { title: "", desc: ""};
    $scope.cur = { title: "", desc: ""};
    $scope.showCur = false;
    $scope.addItem = function () {
        $scope.products.push($scope.product);
        $scope.product = { title: "", desc: ""};
        $scope.showCur = false;
    } 

    // Remove product from list 
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1); 
    }  

    // Display particular product-description
    $scope.displayItem = function (x) {
        $scope.cur = $scope.products[x];
        $scope.showCur = true;
    }  

    // back button result
    $scope.backDisp = function() {
        $scope.showCur = false;
    } 

    });


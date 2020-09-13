var app = angular.module("myApp", ["ngRoute"]);

// Create the products array through angular factory to share data between multiple controllers
app.factory('AppData', function () {
    return {
        products: [{ title: 'Milk', desc: 'white' }]
    };
});


// Routing
app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: '/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/:id', {
            templateUrl: '/about.html',
            controller: 'aboutController'
        })

        .otherwise({ redirectTo: '/' });

});

// create the controller and inject Angular's $scope

// Main Controller
app.controller('mainController', function ($scope, $location, AppData) {


    // create a message to display in our view
    $scope.message = 'Product List App';

    // Add product to list
    $scope.product = { title: "", desc: "" };
    $scope.products = AppData.products;

    $scope.addItem = function () {
        $scope.products.push($scope.product);
        $scope.product = { title: "", desc: "" };
        $scope.showCur = false;
    }

    // Remove product from list 
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    }

    // Display particular product-description
    $scope.displayItem = function (x) {
        $location.path("/" + x);
    }

});

//--------------------------------------------------------------------------//

// About Controller
app.controller('aboutController', function ($scope, $location, AppData) {

    // create a message to display in our view
    $scope.message = 'Product List App';

    $scope.products = AppData.products;
    const id = parseInt($location.url().substring(1));
    $scope.cur = $scope.products[id];

    // Add product to list
    $scope.product = { title: "", desc: "" };
    $scope.addItem = function () {
        $scope.products.push($scope.product);
        $location.path("/");
    }

    // back button result
    $scope.backDisp = function () {
        $location.path("/");
    }

});


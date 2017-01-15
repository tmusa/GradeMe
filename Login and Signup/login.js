var app = angular.module('login', []);

app.controller('loginController', ['$scope', '$http', function ($scope, $http) {

    $scope.login = function () {
        var connect = $http({
            method: "post",
            url: "checkLogin.php",
            data: {
                username: $scope.username,
                password: $scope.password
            },
        });
        connect.success(function (data) {
            console.log(data.status);
            if (data.status !== false) {
                alert("correct!");
            }
            else {
                alert("Wrong user name or password!");
            }
        });
    }

    $scope.signup = function () {
        console.log("hi");
        alert("signup");
        //window.location.href = 'signup.html';
    }
}]);
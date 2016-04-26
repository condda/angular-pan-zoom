angular.module('test', ['panzoom', 'panzoomwidget'])

.controller('TestController', ['$scope',
   function ($scope) {
        var _rectangle = {'x': 0, 'y': 0, width: 2048, height: 1536};
        //_rectangle = {'x': 0, 'y': 0, width: 2048, height: 397};
        $scope.panzoomConfig = {
            keepInScreen: true,
            initialZoomToFit: _rectangle,
            scalePerZoomLevel: 1.5,
            useHardwareAcceleration: true,
        };

        // The panzoom model should initialle be empty; it is initialized by the <panzoom>
        // directive. It can be used to read the current state of pan and zoom. Also, it will
        // contain methods for manipulating this state.
        $scope.panzoomModel = {};
    }
]);
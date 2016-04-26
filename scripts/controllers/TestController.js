angular.module('test', ['panzoom', 'panzoomwidget'])

.controller('TestController', ['$scope', '$timeout', 'PanZoomService',
   function ($scope, $timeout, PanZoomService) {
        //_rectangle = {'x': 0, 'y': 0, width: 2048, height: 397};
        $scope.panzoomConfig = {
            keepInScreen: true,
            scalePerZoomLevel: 1.5,
            useHardwareAcceleration: true,
        };

        var time = $timeout(updateConfig, 1000);

        function updateConfig() {
            var _rectangle = {'x': 0, 'y': 0, width: 2048, height: 1536};

            PanZoomService.getAPI('PanZoom').then(function (api) {
                api.zoomToFit(_rectangle);
            });
            $scope.panzoomConfig.initialZoomToFit = _rectangle;

            $timeout.cancel(time);
        }
        // The panzoom model should initialle be empty; it is initialized by the <panzoom>
        // directive. It can be used to read the current state of pan and zoom. Also, it will
        // contain methods for manipulating this state.
        $scope.panzoomModel = {};
    }
]);
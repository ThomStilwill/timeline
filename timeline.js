angular.module('TimelineModule', ['ngSanitize'])
.controller('TimelineController', function($scope) {

    $scope.items = [
        {timestamp: '1/4/2018', title: 'Initial', description: ''},
        {timestamp: '2/24/2018', title: 'Activated', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget quam eu ipsum placerat aliquet nec ornare neque. Vivamus vel tempus nibh, in aliquet nibh.'},
        {timestamp: '10/20/2018', title: 'Renewal Offer', description: '<strong>Suspendisse eget</strong> quam eu ipsum placerat aliquet nec ornare neque. Vivamus vel tempus nibh, in aliquet nibh.'},
        {timestamp: '12/23/2018', title: 'Renewed', description: 'aliquet nec ornare neque. <a href="" >Vivamus vel tempus</a> nibh, in aliquet nibh.'}
    ]

    $scope.selected = -1;

    $scope.toggle = function(e,index) {
        var parent = angular.element(e.target).parent().parent();
        var panel = parent[0].querySelector('.description')

        if($scope.selected === index) {
            $scope.selected = -1;
            return;
        }

        panel.style.maxHeight = panel.scrollHeight + "px";
        $scope.selected = index;
    }
})

/**
 * Created by smaeung on 5/8/15.
 */
angular.module('increment',[])
    .directive('increment', function(){
        return {
            restrict: 'E',
            scope: {
                value: '=value'
            },
            link: function(scope, element){
                var button = angular.element('<button>').text('+');
                button.addClass("btn btn-primary btn-xs");
                element.append(button);
                button.on('click', function(){
                    // telling Angular that you are changing models and it should fire the wacher so that
                    // the changes propagate properly in the views.
                    scope.$apply(function(){
                        scope.value++;
                    })
                })

            }
        }
    });
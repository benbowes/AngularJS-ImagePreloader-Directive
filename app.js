var app = angular.module('plunker', [])

  .directive('preloadimg', function() {
    return {
      restrict: 'A',
      replace: true,
      link: function(scope, element, attrs) {

        var tempImg = new Image();
        element.addClass('preload-img')
        element.addClass('preload-img--preloading')
        element.wrap( "<div class='preload-img__wrap'></div>" );
        
        tempImg.onload = function(){
          element.removeClass('preload-img--preloading');
        }
        tempImg.src = attrs.ngSrc;
      }
    };
  });


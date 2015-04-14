var app = angular.module('ImagePreloader', [])

  .directive('preloadimg', function() {

    return {
      restrict: 'A',
      replace: true,
      link: function(scope, element, attrs) {
        
        var tempImg = new Image(); // create a new Image object
        element.addClass('preload-img') // set initial classes
        element.addClass('preload-img--preloading')
        element.wrap( "<div class='preload-img__wrap'></div>" );
        
        tempImg.onload = function(){ // fires when image has fully downloaded
          element.removeClass('preload-img--preloading');
          tempImg = null; // delete temporary image
        }
        tempImg.src = attrs.ngSrc; // start loading image
      }
    };
  });
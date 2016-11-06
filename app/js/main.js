$(document).ready(function(){



        $('.services-block__item__image-services').imagesLoaded(function() {
            console.log('all images are loaded');
        }).imagefill();


});
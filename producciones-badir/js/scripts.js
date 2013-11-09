$(document).ready(function(){
        $('a[href^="#intro"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1500, 'swing', function () {
                window.location.hash = target;
            });
        });
        
        $('a[href^="#servicios"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1500, 'swing', function () {
                window.location.hash = target;
            });
        }); 

        $('a[href^="#hola"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1500, 'swing', function () {
                window.location.hash = target;
            });
        }); 

        $('a[href^="#conoceme"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1500, 'swing', function () {
                window.location.hash = target;
            });
        });


        $('a[href^="#clientes"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1500, 'swing', function () {
                window.location.hash = target;
            });
        });
        $('a[href^="#contacto"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1500, 'swing', function () {
                window.location.hash = target;
            });
        });     
        $('a[href^="#extras"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1500, 'swing', function () {
                window.location.hash = target;
            });
        });                 
        $(".absolutepos").each(function() {
        $(this).parent().css("height",$(this).height());
        });           
});
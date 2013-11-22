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
function display(){
    //alert("listo");
   $('#conoceme').css({"display":"block"});
   //$('#conoceme').css({"margin-left":"400px"});
   $('#r-slide').css({"margin-left":"-1251px"});
   $('#r-slide').css({"padding-bottom":"100px"});
    setTimeout(function(){
         $('#hola').css({"opacity":"0"});
        $("#perfeccionista").addClass('perfeccionista');
        $("#exigente").addClass('exigente');
        $("#creativo").addClass('creativo');
        $("#analitico").addClass('analitico');
        $("#visual").addClass('visual');
        $("#confiable").addClass('confiable');
        $("#asertivo").addClass('asertivo');
             }, 600);
}
$(window).scroll(function() {
    var height = $(window).scrollTop();
 //alert(height);
 if(height  >= 11206) {
        $(".nav-bar").css({"background":"#56565B"});
         $(".logo").css({"opacity":"0"});
        $(".logo-2").css({"opacity":"0"});
        $(".logo-3").css({"opacity":"1"});
        $("nav ul li a").removeClass('blue');
        $("nav ul li a").addClass('dark');
    }
     else if((height  >= 1545)&&(height  < 5967)) {
        $(".nav-bar").css({"background":"#56565B"});
         $(".logo").css({"opacity":"0"});
        $(".logo-2").css({"opacity":"0"});
        $(".logo-3").css({"opacity":"1"});
        $("nav ul li a").removeClass('blue');
        $("nav ul li a").addClass('dark');
    }else{
        $(".nav-bar").css({"background":"#f6f8f9"});
         $(".logo").css({"opacity":"1"});
        $(".logo-2").css({"opacity":"0"});
        $(".logo-3").css({"opacity":"0"});
        $("nav ul li a").removeClass('dark');
        $("nav ul li a").removeClass('blue');
    }
});

        var arrow = $("<img src='img/arrow-down.png' alt='Arrow Down'>");
        var arrow2 = $("<span class='right-arrow'></span>");

        function arrowdown (){
            var arrowlink= $('#arrow-down');
            var arrowlink2= $('.more-link');

            arrowlink.css({"position":"relative","width":"50px","height":"50px"});
            arrowlink2.css({"position":"relative","width":"241px","height":"37px"});

            arrowlink.append(arrow);
            arrow.css({'position':'absolute','top':'0', 'left':'0'}).fadeIn(100,paso1);

            arrowlink2.append(arrow2);
            arrow2.css({'position':'absolute','top':'0', 'right':'20px'}).fadeIn(100,paso3);
        }

        function paso1 () {
            arrow.animate({'top':'10px'},paso2);
        }
        function paso2 () {
            arrow.animate({'top':'0'},paso1);
        }

        function paso3 () {
            arrow2.animate({'right':'10px'},paso4);
        }

        function paso4 () {
            arrow2.animate({'right':'20px'},paso3);
        }        

        $(document).ready(arrowdown);
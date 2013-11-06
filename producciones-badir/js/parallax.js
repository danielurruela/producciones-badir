$(document).ready(function(){

   var scrollorama = $.scrollorama ({
   enablePin:false,
   blocks:'.scrollblock'
   });
scrollorama.animate('.main-statement',{property:'opacity', start:1,end:0});
scrollorama.animate('#badir-pic',{duration:650, property:'bottom', start:-1000,end:-125});
scrollorama.animate('#badir-conoceme',{duration:1000, property:'bottom', start:-400,end:-126});
scrollorama.animate('#cubos',{duration:700, property:'bottom', start:-1000,end:300});


});
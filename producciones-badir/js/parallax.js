$(document).ready(function(){

   var scrollorama = $.scrollorama ({
   enablePin:false,
   blocks:'.scrollblock'
   });
scrollorama.animate('.main-statement',{property:'opacity', start:1,end:0});
scrollorama.animate('#badir-pic',{duration:650, property:'bottom', start:-1000,end:-125});
scrollorama.animate('#badir-conoceme',{duration:1500, property:'bottom', start:-500,end:0});
scrollorama.animate('#cubos',{duration:1000, property:'bottom', start:-1000,end:300});


});
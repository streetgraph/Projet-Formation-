(function($){

    /*----- navbar-----*/

function respMenu () {
  var menu = $('#menu');
  var nav = $('#nav_ul');
  
  $(window).resize(function(){
    if(window.innerWidth > 768) {
       nav.removeClass('hidden');
       menu.addClass('hidden');
       // nav.removeAttr('style');
    } else { 
      menu.removeClass('hidden');
      nav.addClass('hidden');
      }
  });
      menu.click(function () {
      nav.fadeToggle('hidden');
  }); 
}
  
respMenu();

    /*-----fin navbar-----*/
                                          
    
    /*----- slider-----*/
$(function() {

    var i=0;
    diapo();

    function diapo() {
        
      i++;
      if (i==1) {photo = '.image4'
           }else {photo = '.image' + (i-1)};
      var image = '.image' + i;
      $(photo).fadeOut(2000);
      $(image).fadeIn(2000);
      if (i==3) i=0;          
    }

    setInterval(diapo,2000);
  }); 

    /*-----fin slider-----*/

    /* nav_event*/

    $('div#img_cont div:gt(0)').css('display','none');
    $('#navevent li a').click(function(event){
    event.preventDefault();
    var id_tab = $(this).attr('href');
    $('div.img_tab:visible').hide();
    $(id_tab).show('slide',250);
  });

    /*fin nav_event*/

  
})(jQuery);

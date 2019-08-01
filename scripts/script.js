$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
  });


  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
  });


  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      var $a = $(".brand-logo")
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $a.toggleClass('hide',$(this).scrollTop() > $nav.height());
    });
  });


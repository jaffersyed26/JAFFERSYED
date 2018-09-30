document.querySelector('#nav-btn-mobile').addEventListener('click', function(){
   var navMobile = document.querySelector('.dropdown');
      
   if (navMobile.style.display === 'none') {
      navMobile.style.display = 'block'
   } else {
       navMobile.style.display = 'none'
   }

})

$(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

  $(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar2");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

  


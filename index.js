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

  function triumph() {
      var showModal = document.querySelector('#modal');
      var showModalContents = document.querySelector('.triumph-info');

      showModal.style.display = 'block';
      showModalContents.style.display = 'block';
  }

  function calculate() {
    var showModal = document.querySelector('#modal');
    var showModalContents = document.querySelector('.calculate-info');

    showModal.style.display = 'block';
    showModalContents.style.display = 'block';
}

function iswaf() {
    var showModal = document.querySelector('#modal');
    var showModalContents = document.querySelector('.iswaf-info');

    showModal.style.display = 'block';
    showModalContents.style.display = 'block';
}

function xpress() {
    var showModal = document.querySelector('#modal');
    var showModalContents = document.querySelector('.xpress-info');

    showModal.style.display = 'block';
    showModalContents.style.display = 'block';
}

function close() {
    var modal = document.getElementById('#modal');
    modal.style.display = 'none';
}


  


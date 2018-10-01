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
      var TriumphModalContents = document.querySelector('.triumph-info');
      var calculateModalContents = document.querySelector('.calculate-info');
      var iswafModalContents = document.querySelector('.iswaf-info');
      var xpressModalContents = document.querySelector('.xpress-info');
      showModal.style.display = 'block';
      TriumphModalContents.style.display = 'block';
      calculateModalContents.style.display = 'none';
      iswafModalContents.style.display = 'none';
      xpressModalContents.style.display = 'none';
  }

  function calculate() {
    var showModal = document.querySelector('#modal');
    var TriumphModalContents = document.querySelector('.triumph-info');
    var calculateModalContents = document.querySelector('.calculate-info');
    var iswafModalContents = document.querySelector('.iswaf-info');
    var xpressModalContents = document.querySelector('.xpress-info');
    showModal.style.display = 'block';
    TriumphModalContents.style.display = 'none';
    calculateModalContents.style.display = 'block';
    iswafModalContents.style.display = 'none';
    xpressModalContents.style.display = 'none';
}

function iswaf() {
      var showModal = document.querySelector('#modal');
      var TriumphModalContents = document.querySelector('.triumph-info');
      var calculateModalContents = document.querySelector('.calculate-info');
      var iswafModalContents = document.querySelector('.iswaf-info');
      var xpressModalContents = document.querySelector('.xpress-info');
      showModal.style.display = 'block';
      TriumphModalContents.style.display = 'none';
      calculateModalContents.style.display = 'none';
      iswafModalContents.style.display = 'block';
      xpressModalContents.style.display = 'none';
}

function xpress() {
    var showModal = document.querySelector('#modal');
    var TriumphModalContents = document.querySelector('.triumph-info');
    var calculateModalContents = document.querySelector('.calculate-info');
    var iswafModalContents = document.querySelector('.iswaf-info');
    var xpressModalContents = document.querySelector('.xpress-info');
    showModal.style.display = 'block';
    TriumphModalContents.style.display = 'none';
    calculateModalContents.style.display = 'none';
    iswafModalContents.style.display = 'none';
    xpressModalContents.style.display = 'block';
}


function closeTitle() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


  


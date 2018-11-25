$(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

  $(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar-dropdown");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

  function myFunction(x) {
    x.classList.toggle("change");
}




var tot = document.getElementById('tot');
var iswaf = document.getElementById('iswaf');
var xpress = document.getElementById('xpress');
var novacore = document.getElementById('novacore');


function totDirect() {
    window.location = 'https://www.triumphovertrafficking.com/';
}

function iswafDirect(){
    window.location = 'https://jaffersyed26.github.io/ISWAF/';
}

function xpressDirect() {
    window.location = 'https://www.xpresspizzaandsubs.com/';
}

function novacoreDirect() {
    window.location = 'https://novacoreinc.github.io/NovaCoreInc/';
}

tot.addEventListener('click', totDirect);
iswaf.addEventListener('click' , iswafDirect);
xpress.addEventListener('click', xpressDirect);
novacore.addEventListener('click', novacoreDirect);

var dropdownBtn =  document.querySelector('.drop-btn');


function show() {
    var dropdown = document.querySelector('#dropdown-menu');

    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block'
    } else {
        dropdown.style.display === 'none'
    }
}

dropdownBtn.addEventListener('click', show);
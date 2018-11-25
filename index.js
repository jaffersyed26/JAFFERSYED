$(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });


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


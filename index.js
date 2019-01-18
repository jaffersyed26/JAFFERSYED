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


    document.querySelector('.drop-btn').addEventListener('click', function(){
        var navMobile = document.querySelector('.dropdown');
           
        if (navMobile.style.display === 'none') {
           navMobile.style.display = 'block'
        } else {
            navMobile.style.display = 'none'
        }
     
     })

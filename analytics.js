if(location.hostname == 'philipfrank.de') {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-93503526-1', 'auto');
    ga('set', 'anonymizeIp', true);
    ga('send', 'pageview');

    function trackExit(ev) {
        ga('send', 'event', 'Slides Outbound Link', 'click', ev.target.href);
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        var links = document.querySelectorAll('a[target="_blank"]');
        for(var i=0; i<links.length; i++) {
            links[i].addEventListener('click', trackExit);
        }
    });

    window.Reveal.addEventListener('slidechanged', function(ev) {
        ga('send', 'event', 'Slide Changed', location.pathname, ev.indexh + '.' + ev.indexv)
    });
}
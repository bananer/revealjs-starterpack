import './main.css';

require('reveal.js/lib/js/head.min.js');
window.Reveal = require('reveal.js');

require('script-loader!reveal.js/plugin/markdown/marked.js');
require('script-loader!reveal.js/plugin/markdown/markdown.js');

var closing = require('text-loader!./closing.tpl.html');

window.Reveal.initialize({
    history: true,
    progress: false,
    dependencies: [ /* Loaded manually below */ ],

    transition: 'slide', // none/fade/slide/convex/concave/zoom
    transitionSpeed: 'default', // default/fast/slow
    backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
});

require('script-loader!reveal.js/plugin/highlight/highlight.js');
hljs.initHighlightingOnLoad();

require('script-loader!reveal.js/plugin/notes/notes.js');
require('script-loader!reveal.js/plugin/zoom-js/zoom.js');


// Printing and PDF exports
var sheet = window.location.search.match(/print-pdf/gi) ?
    require('style-loader!reveal.js/css/print/pdf.css') :
    require('style-loader!reveal.js/css/print/paper.css');

Reveal.addEventListener( 'ready', function( event ) {
    if(closing) {
        var el = document.createElement('footer');
        el.innerHTML = closing;
        document.querySelector('.reveal section:last-child').appendChild(el);
    }
	document.querySelectorAll('clone').forEach(function(target) {
        document.querySelectorAll(target.getAttribute('selector')).forEach(function(src){
            target.appendChild(src.cloneNode(true));
        });
    });
    document.querySelectorAll('slides-url').forEach(function(target) {
        var url = location.href;
        url = url.substring(0, url.indexOf('#'));
        target.textContent = url;
    });
});
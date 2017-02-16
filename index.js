import './main.css';

require('reveal.js/lib/js/head.min.js');
window.Reveal = require('reveal.js');

require('script-loader!reveal.js/plugin/markdown/marked.js');
require('script-loader!reveal.js/plugin/markdown/markdown.js');

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

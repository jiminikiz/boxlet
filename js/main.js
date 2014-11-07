/* globals */
$ = function( selector ) { return document.querySelectorAll( selector ); };
Fragment = function( tag ) { return document.createDocumentFragment( tag ); };
Element = function( element ) { return document.createElement( element ); };

/* debugery */
function keyLogger ( e ) {
    console.log('key:', e.keyCode);
}

/* the app initializer! */
function main ( App ) {
    var app = new App();
    app.start();
}

addEventListener('keydown', keyLogger);

/* config */
// require.config({ });

/* App */
require(['app'], main);
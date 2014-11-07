define(function (require) {
    var test = require('test');

    function App(options) {
        if( !options ) {
            options = {};
        }

        this.name = options.name || 'App';
        this.options = options;
        this.started = false;
        this.test = test;
    }

    var _proto_ = App.prototype;

    _proto_.start = function() {
        this.started = true;
        console.log('App started', this);
    }

    return App;
});
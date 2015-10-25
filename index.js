// requireD
module.exports = new(function() {

    'use strict';

    var pad = 40;
    var text="require's time";
    this.setWidth = function(width) {
        pad = width;
    }
    this.setText = function(str) {
        text = str;
    }

    this.lpad = function(txt) {
        var c, i, t;
        c = " ";
        i = 0;
        t = txt;
        while (i <= pad - txt.length) {
            t = c + t;
            i++;
        }
        return t;
    };

    this.rpad = function(txt) {
        var c, i, t;
        c = " ";
        i = 0;
        t = txt;
        while (i <= pad - txt.length) {
            t += c;
            i++;
        }
        return t;
    };

    this.require = (function(plugin_name) {
        console.time(text);
        process.stdout.write(this.rpad(plugin_name));
        var plugin = require(plugin_name);
        console.timeEnd(text);
        return plugin;
    });
})();

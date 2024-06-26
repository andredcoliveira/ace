/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/

"use strict";

var oop = require("../lib/oop");
const JavaScriptBehaviour = require("./behaviour/javascript").JavaScriptBehaviour;
const JavaScriptFoldMode = require("./folding/javascript").FoldMode;
var tsMode = require("./typescript").Mode;

var Mode = function() {
    tsMode.call(this);
    this.$highlightRuleConfig = {jsx: true};
    this.foldingRules = new JavaScriptFoldMode();
    this.$behaviour = new JavaScriptBehaviour();
};
oop.inherits(Mode, tsMode);

(function() {
    this.$id = "ace/mode/tsx";
}).call(Mode.prototype);

exports.Mode = Mode;

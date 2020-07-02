"use strict";
var Editor;
(function (Editor) {
    Editor[Editor["Marvel"] = 0] = "Marvel";
    Editor[Editor["DC"] = 1] = "DC";
})(Editor || (Editor = {}));
var SuperHero = /** @class */ (function () {
    function SuperHero(_name, _editor, _creationYear) {
    }
    SuperHero.prototype.creatMessage = function (_message) {
        console.log(_message);
    };
    Object.defineProperty(SuperHero.prototype, "editor", {
        get: function () {
            return Editor[this._editor];
        },
        set: function (editorName) {
            this.editor = Editor[editorName];
        },
        enumerable: false,
        configurable: true
    });
    return SuperHero;
}());
var superman = new SuperHero('Superman', Editor.DC, 1938);
console.log(superman.creatMessage('Gassan'));
//# sourceMappingURL=app.js.map
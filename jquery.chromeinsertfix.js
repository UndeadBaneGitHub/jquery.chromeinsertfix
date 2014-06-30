/* jquery.chromeinsertfix
-- version 0.4.2
-- copyright 2014 UndeadBane*2014
-- licensed under the MIT
--
-- https://github.com/UndeadBaneGitHub/jquery.chromeinsertfix
--
*/
(function ($) {
    if (typeof ($.fn.chromeinsertfix) !== "function") {
        $.fn.chromeinsertfix = function (textToReplace, replaceWith) {
            this.on("DOMNodeInserted", $.proxy(function (e) {
                if (e.target.parentNode.getAttribute("contenteditable") === "true") {
                    var newTextNode = document.createTextNode("");
                    function antiChrome(node) {
                        if (node.nodeType == 3) {
                            newTextNode.nodeValue += node.nodeValue.replace(textToReplace || /(\r\n|\n|\r)/gm, replaceWith || " ");
                        }
                        else if (node.nodeType == 1 && node.childNodes) {
                            for (var i = 0; i < node.childNodes.length; ++i) {
                                antiChrome(node.childNodes[i]);
                            }
                        }
                    }
                    antiChrome(e.target);
                    e.target.parentNode.replaceChild(newTextNode, e.target);
                }
            }, this));
        }
    }
})(jQuery);

// grab window.uuid and move it onto the nodetron object
window.nodetron = (function(window) {
  var obj = {
    uuid: window.uuid
  };
  window.uuid = null;
  return obj;
})(this);

// meant for concatenation. See outro.js for the end of this IIFE.
(function(nodetron) {

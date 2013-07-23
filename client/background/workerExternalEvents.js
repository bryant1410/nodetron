(function(window) {
  var WebWorker = window.Worker;

  var Worker = function(script) {
    this.eventQueue = {};
    this.eventBuckets = 0;
    this.worker = new WebWorker(script);
    var self = this;
    this.worker.addEventListener('message', function(event) {
      var data = event.data;
      console.log('Message to main!');
      console.log(event);
      self.checkEvents(data);
    });
  };
  window.Worker = Worker;

  Worker.prototype.addEventListener = function() {
    this.worker.addEventListener.apply(this.worker,arguments);
  };
  Worker.prototype.postMessage = function() {
    this.worker.postMessage.apply(this.worker,arguments);
  };
  Worker.prototype.terminate = function() {
    this.worker.terminate();
  };

  Worker.prototype._addMessageEvent = function(_id,cb) {
    var queue = this.eventQueue;
    if (_id && typeof queue[_id] === 'undefined') {
      queue[_id] = [];
    }
    if (typeof cb === 'function') {
      queue[_id].push(cb);
    }
  };

  Worker.prototype.checkEvents = function(msg) {
    console.log('checkEvents called');
    if (!msg.request) {
      return;
    }
    var bucket = this.eventQueue[msg.request];
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        bucket[i](msg.data);
      }
      delete this.eventQueue[msg.request];
    }
  };

  // cb can be a function, or 'false' for promise (to be implemented)
  Worker.prototype.postMessageWithCallback = function(msg,cb) {
    var _id = msg;
    if (typeof msg !== 'string') {
      _id = JSON.stringify(msg);
    }

    this._addMessageEvent(_id,cb);
    this.worker.postMessage(msg);
  };

})(this);
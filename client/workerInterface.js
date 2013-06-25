var worker = new Worker('worker.js');
// call worker with string - use string for compatibility.
// Can handle other types like File, Blob, ArrayBuffer, JSON, but compatibility is less
// Normally workers pass objects by copy, not reference.
worker.postMessage();

//handle worker responses.
worker.addEventListener('message', function(e) {
  console.log('Worker said: ', e.data);
}, false);

//worker.terminate stops the worker

//to pass objects by reference, do worker.postMessage(data, <array of ArrayBuffers>);
//https://zapier.com/engineering/intro-to-web-workers/
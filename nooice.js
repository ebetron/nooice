//window.onload = init;
var context;
var bufferLoader;

var Nooice = {
  init: function(){
    //This makes sure that it works on Safari, Firefox and Chrome
    context = new (window.AudioContext || window.webkitAudioContext)();
  },
  regular: function(){
    bufferLoader = new BufferLoader(
    context,
    [
    'sounds/nooice.mp3'],
    finishedLoading);

  bufferLoader.load();

  },
  shorter: function(){
    bufferLoader = new BufferLoader(
    context,
    [
    'sounds/nooice3.mp3'],
    finishedLoading);

  bufferLoader.load();
  },
  longer: function(){
    bufferLoader = new BufferLoader(
    context,
    [
    'sounds/nooice2.mp3'],
    finishedLoading);

  bufferLoader.load();
  }
};

// function init(){
//   //This makes sure that it works on Safari, Firefox and Chrome
//   context = new (window.AudioContext || window.webkitAudioContext)();
// }

function finishedLoading(bufferList){
  var source = context.createBufferSource();
  source.buffer = bufferList[0];
  source.connect(context.destination);
  source.start(0);
}

function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
};

BufferLoader.prototype.load = function() {
  for (var i = 0; i < this.urlList.length; ++i)
  this.loadBuffer(this.urlList[i], i);
};
var onmessage = function(message) {
  var last_data = message.data;
  postMessage(last_data);
}
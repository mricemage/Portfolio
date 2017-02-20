

var connection = new WebSocket("ws://obscure-waters-98157.herokuapp.com");

connection.onError = function(error)
{
    console.log("Error in socket:" + error);
}

connection.onmessage = function(message)
{
  console.log("New Message:" + message.data);
  document.getElementById("chat").innerHTML = message.data;
}

connection.onopen = function(){
  console.log("Connection is now open");
  connection.send("LOGO");
}
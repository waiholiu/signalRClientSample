var connection = $.hubConnection()
connection.url = 'http://localhost:56525/signalr';
var myHubProxy = connection.createHubProxy('myHub');
myHubProxy.on('announce', function(msg) { console.log(msg)});
connection.start().done(function(){ console.log('Now connected, connection ID=' + connection.id); }).fail(function(){ console.log('Could not connect'); });
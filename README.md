# signalRClientSample
A quick sample of a client that speaks to my webapi signal r server at here (https://github.com/waiholiu/webapiSignalRSample)


instructions

npm i http-server -g
http-server


run this in the console to demonstrate it working

myHubProxy.invoke('announce', 'my message').done(function () {
        console.log ('Invocation of NewContosoChatMessage succeeded');
    }).fail(function (error) {
        console.log('Invocation of NewContosoChatMessage failed. Error: ' + error);
    });




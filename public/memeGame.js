function memeGame(){
//All code for the socket.io commands located in in the sio var
var sio = {
 // This is called when the page is displayed. It connects the Socket.IO client to the Socket.IO server
    init: function() {
        console.log("okey")
        sio.socket = io.connect();
        sio.bindEvents();
        sio.onConnected();
        },

    /**
    * While connected, Socket.IO will listen to the following events emitted
    * by the Socket.IO server, then run the appropriate function.
    * possibly create an event to check the which one the judge liked and giving points
     */
        bindEvents : function() {
            sio.socket.on('connected', IO.onConnected );
            sio.socket.on('hostCreateNewGame', IO.onNewGameCreated );
            sio.socket.on('playerJoinGame', IO.playerJoinedRoom );
            sio.socket.on('playerAnswer', IO.clientbeginNewGame );
        },

        onConnected : function() {
             // Cache a copy of the client's socket.IO session ID on the memeGame.js
            memeGame.mySocketId = IO.socket.socket.sessionid;
            console.log("connected2")

        },

        onNewGameCreated : function(data) {
           //do something with the assigning data to the player
            
        },

        playerJoinedRoom : function(data){
            //do something so we know the player has joined
            console.log("Player has joined");
        },

        clientbeginNewGame : function(data){
            //maybe start a countdown or intialize points or something

        },
    
        hostCreateNewGame : function(data){
            //maybe start a countdown or intialize points or something

        },
    
    }
} 



var database

var PlayerCount
var forms,player,game,GameState=0
function preload(){




}


function setup(){
var canvas = createCanvas(windowWidth-100,windowHeight-100)
database = firebase.database()
game = new Game()
game.getState()
game.start()

}








function draw(){

    

}
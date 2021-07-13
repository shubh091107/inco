class Form{
    constructor(){
        this.input = createInput("Name....")
        this.button = createButton("Log in")
        this.text = createElement("h1")
        this.greet = createElement("h1")
        this.reset = createButton("Reset")
    }
    display(){
        this.input.position(displayWidth/2-100,displayHeight/2-200)
        this.button.position(displayWidth/2-50,displayHeight/2-150)
        this.reset.position(displayWidth/2-550,displayHeight/2-300)
        this.text.html("Log in")
        this.text.position(displayWidth/2-50,displayHeight/2-350)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            this.text.hide()
            this.greet.html("Waiting For Other Players to join....")
            this.greet.position(displayWidth/2-250,displayHeight/2-150)
            game.update(1)
            PlayerCount += 1
            player.index = PlayerCount
            player.name = this.input.value()
            player.update()
            player.updateCount(PlayerCount)
        })   
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
            var emp = database.ref('players')
            emp.remove()
        })
    }
}

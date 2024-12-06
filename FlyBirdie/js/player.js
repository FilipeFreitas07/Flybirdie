class Player {
    constructor(game) {
        this.game = game;
        this.x = 50;
        this.y = 60;
        this.width = 200;
        this.height = 200;
        this.width;
        this.height;
        this.speedy;
    }

    draw() {
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
     }

     update() {
       this.y += yhis.speedY;

       if(this.isTouchingBottom())   {
            this.y = this.game.height - this,height;
     }

        else   {
            this.speedY += this.game.gravity;
        }

     rezise() {
        this.width = this.Width + this.game.ratio;
        this.height = this.Height + this.game.ratio;
        this.y = this.game.height * 0.5 - this.height * 0.5;
        this.speedY = -8 * this.game.ratio;
     }

     isTouchingBottom() {
        return this.y >= this.game.height - this.height;
     }
}
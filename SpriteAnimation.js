//Christian Cox - 2/8/2022
let character;
let character2;
let character3;

function preload()
{
    spritesheet = loadImage("Spelunky.png");
    cyclops_sprite = loadImage("cyclops.png");
    eskimo_sprite = loadImage("eskimo.png");
    ninja_sprite = loadImage("ninja.png");
    snake_sprite = loadImage("snake.png");
}

function setup() 
{
    createCanvas(1000, 600);
    imageMode(CENTER);
    character = new Character(spritesheet, 100, 300);
    character2 = new Character(cyclops_sprite, 300, 500);
    character3 = new Character(eskimo_sprite, 700, 400);
    character4 = new Character(ninja_sprite, 900, 200);
    character5 = new Character(snake_sprite, 500, 100);

}

function keyPressed()
{
    if (keyCode == RIGHT_ARROW)
    {
        character.go(1);
        character2.go(1);
        character3.go(1);
        character4.go(1);
        character5.go(1);
        
    }
    else if (keyCode == LEFT_ARROW)
    {
        character.go(-1);
        character2.go(-1);
        character3.go(-1);
        character4.go(-1);
        character5.go(-1);
    }
}

function keyReleased()
{
    character.stop();
    character2.stop();
    character3.stop();
    character4.stop();
    character5.stop();
}

function draw() 
{
    background(255, 255, 255);
    character.draw();
    character2.draw();
    character3.draw();
    character4.draw();
    character5.draw();
}


class Character
{
    constructor(spritesheet, x, y)
    {
        this.spritesheet = spritesheet;
        this.sx = 0;
        this.x = x;
        this.y = y;
        this.move = 0;
        this.facing = 1;
    }

    draw() 
    {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);

    if (this.move == 1)
        {
        image(this.spritesheet, 0, 0, 200, 200, 80 * (this.sx + 1), 0, 80, 80);
        }
    else if (this.move == -1)
        {
        image(this.spritesheet, 0, 0, 200, 200, 80 * (this.sx + 1), 0, 80, 80);
        }
    else if (this.move == 0)
        {
        image(this.spritesheet, 0, 0, 200, 200, 0, 0, 80, 80);
        }

    if (frameCount % 10 == 0)
        {
            this.sx = (this.sx + 1) % 8;
        }
    
        this.x += 2 * this.move;
    pop();
    }

    go(direction)
    {
        this.move = direction;
        this.facing = direction;
        this.sx = 3;
    }

    stop()
    {
        this.move = 0;
    }
    
}
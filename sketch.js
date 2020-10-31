
var wall,thickness;
var bullet,speed,weight;

function setup() {  
    
    createCanvas(800,400);
    
    speed =random(50,101);
    weight =random(30,52);
    thickness =random(22,83);

    bullet = createSprite(50,200,20,10);
    bullet.shapeColor= "white";
    bullet.velocityX = speed;
    
    wall = createSprite(750,200,thickness,height/2);
    wall.shapeColor= color(80,80,80);
                                                                           
  }

  function draw() {
    background("Black"); 

    if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed* speed/(thickness *thickness  *thickness);
      if(damage>10)
      { 
           wall.shapeColor=color(255,0,0);
      }
      if(damage<10)
      {
        wall.shapeColor=color(0,255,0);
      }
    
    
    } 
    drawSprites();

  }

    function hasCollided(lbullet,lwall)
    {
        bulletRightEdge=lbullet.x +lbullet.width;
        wallLeftEdge=lwall.x;
        if(bulletRightEdge>=wallLeftEdge)
        {
             return true ;
        }else{
             
              return false;

        }

    }

















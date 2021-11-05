class Ground
{
  constructor(x, y, w, h)  
{

let option = {
   isStatics:true
};

this.body = Bodies.rectangle(x, y, w, h, options);
this.w = w;
this.h = h;
World.add(world, this.body);

}

display()


groundObj=new ground(width/2,620,width,20);
leftside=new ground(1100,600,20,120)
}




class box
{
     constructor(x,y,width,height)
   {
      var option = 
      {
          isStatic:true
      }
      this.body11 = Bodies.rectangle(x,y,width,height,option);
      this.width = width;
      this.height = height;
      World.add(world,this.body11); 
     
      
   }

display()
{  
   strokeWeight(3)
   stroke("red")
   fill("red")
  
   rect(this.body11.position.x,this.body11.position.y,this.width,this.height)
  

}   

}
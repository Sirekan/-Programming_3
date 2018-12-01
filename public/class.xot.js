class Xotik extends LivingCreature{
       
   
    move(){
        var arrcord = random(this.cordTrue(0));
        if(arrcord){
            matrix[arrcord[1]][arrcord[0]] = 1;
            xoter.push(new Xotik(arrcord[0],arrcord[1]));
        }
    }
}
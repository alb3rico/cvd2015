function Door(){
  this.state="open";
}

Door.prototype.open=function(){
  if(this.state=="closed"){
    this.state="open";
  }
}

Door.prototype.close=function(){
  if(this.state=="open"){
    this.state="close";
  }
}

Door.prototype.info=function(){
  console.log(this.state);  
}

function SecurityDoor(){
  Door.call(this);
}

SecurityDoor.prototype=Object.create(Door.prototype);
SecurityDoor.prototype.constructor=SecurityDoor;

//override
SecurityDoor.prototype.close=function(){
  if(this.state=="open"){
    this.state="locked";
  }
}

SecurityDoor.prototype.unlock=function(){
  if(this.state=="locked"){
    this.state="close";
  }
}
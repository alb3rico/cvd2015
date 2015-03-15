//exercise01 
(function() {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');
    }
  };

  var x = {"size":10};// write code here
  var y = {"size":2};;// write code here

  larger(x, y);    
}());

//exercise02 
(function() {
  var favorite_album = function( collection ) {
    // do nothing if got an empty collection
    if ( collection.length === 0 ) {
      return;
    }

    // define two variables and initialize them
    var max_played = collection[0].played,
      max_index  = 0;

    for ( var i=0, len = collection.length; i < len; i++ ) {
      if ( collection[i].played > max_played ) {
        max_played = collection[i].played;
        max_index  = i;
      }
    }

    return { play: max_played, index: max_index };
  };

  var music = [ new Album("a"), new Album("b"), new Album("c") ];// write code here
  
  function Album(title){
    this.title=title;
    this.played=0;
  }
  Album.prototype.play=function(){this.played=this.played+1;}

  music[0].play();music[0].play();music[0].play();
  music[1].play();music[1].play();
  music[2].play();music[2].play();music[2].play();music[2].play();
  
  var fav = favorite_album( music );

  console.log( "Your favorite album was played " + fav.play + " times" );

  // Bonus: Write code here to make the following line print the above line
  console.log( fav );
}());

//exercise03 
(function () {
  // write your code here to make the program work 
  function Summer(){
    if(this instanceof Summer){
      this.sum=0;}
      else{
        return new Summer();
      }
  }
  Summer.prototype.getCurrentSum=function(){return this.sum;}
  Summer.prototype.add=function(n){this.sum=this.sum+n;}

  //calling summer without "new" returns window object
  var s1 = Summer();
  var s2 = Summer();

  s1.add(10);
  s1.add(20);

  s2.add(30);

  s2.add(5);

  // prints 30
  console.log(s1.getCurrentSum());

  // prints 35
  console.log(s2.getCurrentSum());

}());

//exercise04
(function () {
  var person = {
    "buy":function(x){console.log("I'm rich");}
  };

  var  car = {
    "price":2000,
    "drive":function(){console.log("Vrum Vrum");}
  };

  // print Vrum Vrum
  car.drive();

  // print I'm rich
  if ( car.price > 1000 ) {
    person.buy(car);
  }
}());



(function () {
  var employees = [new Employee("a",1), new Employee("b",2), new Employee("c",3)];

  function Employee(name,age){
    this.name=name;
    this.age=age;
  }
  Employee.prototype.hello=function(){console.log("I work at IBM");};

  for (var i=0; i < employees.length; ++i ) {
    // print I work at IBM
    employees[i].hello();
  }
}());

//exercise05 
(function () {

  function Bingo(){
   this.random=Math.floor(Math.random()* 10 + 1);
  }
  Bingo.prototype.guess=function(n){console.log(this.random);return n===this.random;};

  var b=new Bingo();
  console.log(b.guess(8));

}());

//exercise06
(function() {
  function MusicBox(){
    if(this instanceof MusicBox){
      this.i=0;
      //this.addAlbum=function(album){this[album]:album;}
      return;
    }
    else{
      return new MusicBox();
    }
  }
  MusicBox.prototype.addAlbum=function(album){
    var x=this.i.toString();
    this[x]=album;
    this.i=this.i+1;
  }
  MusicBox.prototype.favoriteAlbum=function(){
    var max=0;
    var best;
    var cont;
    for(cont=0; cont<this.i; cont++){
        if(this[cont].played>max){
          max=this[cont].played;
          best=this[cont].name+" - "+this[cont].author;
        }
      }
    return best;
  }


  function Album(author,name){
    if(this instanceof Album){
      this.name=name;
      this.author=author;
      this.played=0;
    }
    else{
      return new Album(name,author);
    }
  }

  Album.prototype.play=function(){
    console.log("Playing "+this.author+" - "+this.name);
    this.played=this.played+1;
  }

  var box = MusicBox();
  var a1 = Album("The Who", "Tommy");
  var a2 = Album("Tom Waits", "Closing Time");
  var a3 = Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite); 
}());

//exercise07
(function () {
  
 function PhotoAlbum(){
    if(this instanceof PhotoAlbum){
      this.i=0;
      return;
    }
    else{
      return new PhotoAlbum();
    }
  }
  PhotoAlbum.prototype.addPicture=function(pic){
    var x=this.i.toString();
    this[x]=pic;
    this.i=this.i+1;
  }

  PhotoAlbum.prototype.showPictures=function(tag){
    var picarray=[];
    for(var cont=0; cont<this.i; cont++){
      for(var cont2=0; cont2<this[cont].j; cont2++){
        console.log(this[cont][cont2]);
        if(this[cont][cont2]===tag){
          picarray.push(this[cont].image);
        }
      }
    }
    return picarray;
  }


  function Photo(image){
    if(this instanceof Photo){
      this.image=image;
      this.j=0;
    }
    else{
      return new Photo(image);
    }
  }

  Photo.prototype.tag=function(name){
    var x=this.j.toString();
    this[x]=name;
    this.j=this.j+1;    
  }

  Photo.prototype.showTags=function(){
    var res="";
    for(var cont=0; cont<this.j; cont++){
        res=res+" "+this[cont]+" ";
    }
    console.log(res);
  }


  var album = PhotoAlbum();
  var p;

  p = Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p = Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p = Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");

  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");    
}());

//exercise08
function Point2D(x,y){
  this.x=x;
  this.y=y;
}

function Edge(p1,p2){
  this.p1=p1;
  this.p2=p2;
}

Edge.prototype.length=function(){
  var a=this.p1.x-this.p2.x;
  var b=this.p1.y-this.p2.y;
  var c=Math.pow(a,2);
  var d=Math.pow(b,2);
  var length=Math.sqrt(c+d);
  return length;
}

//exercise09
function Triangle(c1,c2,c3){
  this.c1=c1;
  this.c2=c2;
  this.c3=c3;
}

Triangle.prototype.perimeter=function(){
return this.c1.length+this.c2.length+this.c3.length;
}

Triangle.prototype.area=function(){
  var p=this.perimeter/2;
  var area=Math.sqrt(p*(p-this.c1)*(p-this.c2)*(p-this.c3))
  return area;
}
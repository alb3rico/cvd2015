//EXERCISE 01
function exercise01a (n){
	var a=[];
	for(var i=1;i<=n;i++){
		a.push(i);
	}
	return a;
}

function exercise01b (a){
	var filterodd=function(item){return item%2===0;}
	var b=a.filter(filterodd);
	return b;
}

function exercise01c (a){
	var filt=exercise01b(a);
	var doub=function(item){return 2*item;};
	var b=filt.map(doub);
	return b;
}

function exercise01d (a){
	var filt4=function(item){return item%4===0;}
	var b=a.filter(filt4);
	return b;
}

function exercise01e(a){
	var sum=function (prev,cur){return prev+cur;};
	var b=a.reduce(sum
	return b;
}

//EXERCISE 02
function exercise02a(n){
	var a=[];
	for(var i=1;i<=n;i++){
		a.push(Math.floor(Math.random()* 10 + 1));
	}
	return a;
}

function exercise02b (a){
	var filtereven=function(item){return item%2!==0;}
	var b=a.filter(filtereven);
	return b;
}

function exercise02c (a){
	var comparator=function(a,b){return a-b;}
	var b=a.sort(comparator);
	return b;
}

//EXERCISE 03

function exercise03a(s){
	var nuova=s[0].toUpperCase()+s.slice(1,s.length);
	return nuova;
}

function exercise03b(s){
	var sep=s.split((" "));
	var cap=sep.map(exercise03a);
	var fin=cap.join(" ");
		return fin;
}

//EXERCISE 04
function select(data,key,values){
	var test;
	var check;
	var result=new Array();
	//var property=key;
	for(var i=0;i<data.length;i++){
		test=data[i][key];
		check=function(item){
			return item===test;
		}
		if(values.some(check)){
			result.push(data[i]);
		}
	}
	return result;
}

//Invoking a Function with a Function Method
/*In JavaScript functions are objects. JavaScript functions have properties and methods.
call() and apply() are predefined JavaScript function methods. Both methods can be used to 
invoke a function, and both methods must have the owner object as first parameter.
*/
//EXERCISE 05
function exercise05(){
	var a=[];
	for(var i=0;i<3;i++){
		a.push(Math.floor(Math.random()* 100 + 1));
	}
	var b=Math.max.apply(Math, a);
	return b;
}

//EXERCISE 06
function exercise06(){
	var random=Math.floor(Math.random()* 100 + 1);
	var a=[];
	for(var i=0;i<=random;i++){
		if(i%2===0){
			a.push(i);
		}
	}
	return a;
}

//EXERCISE 07
function exercise07(){
	var random=Math.floor(Math.random()* 100 + 1);
	var a=[];
	if(random>40){
		for(var i=0;i<=random;i++){
			if(i%2!==0){
				a.push(i);
			}
		}
	}
	return a;
}

//EXERCISE 08
function exercise08(){
	var random=Math.floor(Math.random()* 100 + 1);
	var a=[];
	if(random>40){
		for(var i=40;i<=random;i++){
			if(i%2!==0){
				a.push(i);
			}
		}
	}
	else{
		var j=40;
		while(j>=random){
			a.push(j);;
			j=j-1;
		}
	}
	return a;
}

//EXERCISE 09
function exercise09(){
	var random=Math.floor(Math.random()* 100 + 1);
	var a=[];
	for(var i=0;i<=random;i++){
		a.push(Math.floor(Math.random()* 100 + 1));
	}
	var b=Math.max.apply(Math,a);
	return b;
}

//EXERCISE 10
function exercise10(){
	var random=Math.floor(Math.random()*(9999-1000+1)+1000);
	console.log(random);
	var randoms=random.toString();
	var kkk=Number(randoms.charAt(0));
	var kk=Number(randoms.charAt(1));
	var k=Number(randoms.charAt(2));
	var u=Number(randoms.charAt(3));

	return kkk+kk+k+u;
}

//EXERCISE 11
function exercise11(){
	var random=Math.floor(Math.random()*(9999-1000+1)+1000);
	console.log("random number is "+random);
	var randoms=random.toString();
	var sum=0;
	var sums=random.toString();
	var length=randoms.length;
	while(sums.length>1){
		while(length>=1){
			sum=sum+Number(sums.charAt(length-1));
			length=length-1;
		}
		sums=sum.toString();
		length=sums.length;
		sum=0;
	}
	return sums;
}

//EXERCISE 12
function exercise12(){
	var random1=Math.floor(Math.random()* 100 + 1);
	var random2=Math.floor(Math.random()* 100 + 1);
	console.log("random numbers are "+random1+" and "+random2);

	var n=2;
	while(random1%n!==0 && random2%n!==0 && (n<=random1||n<=random2)){
		n=n+1;
	}
	if(n>random1||n>random2){
		console.log("not found");
	}
	return n;
}

//EXERCISE 13
function exercise13(){
	var random1=Math.floor(Math.random()* 100 + 1);
	var random2=Math.floor(Math.random()* 100 + 1);
	console.log("random numbers are "+random1+" and "+random2);

	var x=random1;
	var y=random2;
	while (x!==y){
		if(x>y){
			x-=y;
		}else{
			y-=x;
		}
	}
	if(x===1){
		console.log("coprime");
		return x;
	}
	return random1*random2/x;
}

//EXERCISE 14
function exercise14(){
	var x=Math.floor(Math.random()* 100 + 1);
	var y=Math.floor(Math.random()* 100 + 1);
	console.log("random numbers are "+x+" and "+y);

	var med=(x+y)/2;
	var devstand=Math.sqrt((Math.pow(x-med,2)+Math.pow(y-med,2))/2);

	return [med,devstand];
}
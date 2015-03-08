//esercizio1
console.log("Esercizio 1");
var j=1;
var n="";
while(j<=10){
	for (i=1; i<=10; i=i+1){
		if(i*j<10){
			n=n+(i*j)+"  ";
		} else{
			n=n+(i*j)+" ";}
	}
	console.log(n);
	n="";
	j=j+1;
}
console.log("");
console.log("Esercizio 2");
//esercizio2
var j=1;
var n="";
while(j<=10){
	for (i=1; i<=10; i=i+1){
		if(i===10){
			n=n+(i*j)+"";
		}
		else{
			if(i*j<10){
				n=n+(i*j)+",  ";
			} else{
				n=n+(i*j)+", ";}
		}
	}
	console.log(n);
	n="";
	j=j+1;
}
console.log("");
console.log("Esercizio 3");
//esercizio3
var n="";
for (j=1; j<=10; j=j+1){
	for (i=1; i<=10; i=i+1){
		if(i===10){
			if(i===j){
				n=n+1+"";
			}
			else{
				n=n+0+"";
			}
		}
		else{
			if(i===j){
				n=n+1+", ";
			}
			else{
				n=n+0+", ";
			}
			
		}
	}
	console.log(n);
	n="";
}
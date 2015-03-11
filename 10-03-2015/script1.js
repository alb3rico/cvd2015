//EXERCISE 02
function identity(m){
	var n="";
	for (j=1; j<=m; j=j+1){
		for (i=1; i<=m; i=i+1){
			if(i===m){
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
}

//EXERCISE 03
function fibonacci(n){
	fibonacci[0]=0;
	fibonacci[1]=1;

	if (!(n in fibonacci)) {
    	 fibonacci[n]=fibonacci(n-2)+fibonacci(n-1);
		}
 	return fibonacci[n];
}

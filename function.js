		//rare function
/* const fName100 = new Function('a','b','console.log(eval("a+b"))');
fName100(2,3); */
const fName10 = new Function(console.log("Rare function"));
fName10();
		//function new keyword
function fName9(fnam9){
	this.name = fnam9;
}
const atikk = new fName9("function new keyword");
console.log(atikk);
		//function copy
function fName8(para8){
	console.log(para8);
}
const atik = fName8;

atik("Function copy");
		//summation of Function
function fName7(para7,total = 0){
	if(para7==0){
		//console.log(total);
		console.log("Summation of Function");
	}else{
		fName7(para7-1,total + para7)
	}
}
fName7(2);
		//recursive Function
function fName6(para6){
	if(para6 == 0){
		console.log("Recursive function");
	}else{
		console.log(para6);
		fName6(para6-1);
		
	}
}
fName6(0);
		//Arrow Function
const fName5 = (para5)=>{console.log(para5)};
fName5("Arrow Expression");
		//Object Function
const fName4 = {
	user4 : function(para4){
		console.log(para4);
	}
};
fName4.user4("Object Function");	
		//function Expression/anonymous function
const fName3 = function(para3){
	console.log(para3);
}
fName3("function Expression");
		//DynamicFunction
function fName2(para){
	console.log(para);
}
fName2("Dynamic Function");
		//staticFunction/ named function
function fName(){
	console.log("Static Function");
}
fName();
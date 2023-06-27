function Student(name,age,fName,mName,clas,profession){
	//const this = Object.create(Student.prototype);
	this.name = name;
	this.fName = fName;
	this.mName = mName;
	this.age = age;
	this.clas = clas;
	this.profession = profession;
	//return this;
};

Student.prototype = {
	stdInfo : function(){
	return `${this.name} is a junior ${this.profession}`
	},
	parentInfo(){
		return `${this.name} father's name is ${this.fName} and mother's name is ${this.mName}.`
	},
};

Student.prototype.constructor = Student;

const atik = new Student("Atik",24,"Anowar","Aklima",15,"wevdeveloper");
console.log(atik);
console.log(Student.prototype);



/*
		//new
function Student(name,age,fName,mName,clas,profession){
	//const $this = Object.create(Student.prototype);
	this.name = name;
	this.fName = fName;
	this.mName = mName;
	this.age = age;
	this.clas = clas;
	this.profession = profession;
	//return $this;
};
Student.prototype = {
	stdInfo : function(){
	return `${this.name} is a junior ${this.profession}`
	},
	parentInfo(){
		return `${this.name} father's name is ${this.fName} and mother's name is ${this.mName}.`
	},
};
const atik = new Student("Atik",24,"Anowar","Aklima",15,"wevdeveloper");
console.log(atik);
console.log(Student.prototype);

*/



		//prototype
/*
function Student(name,age,fName,mName,clas,profession){
	const $this = Object.create(Student.prototype);
	$this.name = name;
	$this.fName = fName;
	$this.mName = mName;
	$this.age = age;
	$this.clas = clas;
	$this.profession = profession;
	return $this;
};
Student.prototype = {
	stdInfo : function(){
	return `${this.name} is a junior ${this.profession}`
	},
	parentInfo(){
		return `${this.name} father's name is ${this.fName} and mother's name is ${this.mName}.`
	},
};
const atik = Student("Atik",24,"Anowar","Aklima",15,"wevdeveloper");
console.log(atik.stdInfo());

*/




		//object.create
/*
const infoHelper = {
	stdInfo : function(){
	return `${this.name} is a junior ${this.profession}`
	},
	parentInfo(){
		return `${this.name} father's name is ${this.fName} and mother's name is ${this.mName}.`
	},
};
function Student(name,age,fName,mName,clas,profession){
	const user = Object.create(infoHelper);
	user.name = name;
	user.fName = fName;
	user.mName = mName;
	user.age = age;
	user.clas = clas;
	user.profession = profession;
	return user;
};
const atik = Student("Atik",24,"Anowar","Aklima",15,"wevdeveloper");
console.log(atik);
*/




/*
const infoHelper = {
	stdInfo : function(){
	return `${this.name} is a junior ${this.profession}`
	},
	parentInfo(){
		return `${this.name} father's name is ${this.fName} and mother's name is ${this.mName}.`
	}
};
function Student(name,age,fName,mName,clas,profession){
	const user = {};
	user.name = name;
	user.fName = fName;
	user.mName = mName;
	user.age = age;
	user.clas = clas;
	user.profession = profession;
	user.info = infoHelper.stdInfo;
	user.parentt = infoHelper.parentInfo;
	

	return user;
};

const atik = Student("Atik",24,"Anowar","Aklima",15,"wevdeveloper");
const atif = Student("Atif",24,"Muttalib","Unknown",14,"Meter Reader");
console.log(atik.parentt());
console.log(atif.parentt());
*/




		//dynamic object
/*
function Student(name,age,fName,mName,clas,profession){
	const user = {};
	user.name = name;
	user.fName = fName;
	user.mName = mName;
	user.age = age;
	user.clas = clas;
	user.profession = profession;
	user.stdInfo = function(){
	return `${this.name} is a junior ${this.profession}`;
	}
	return user;
};

const atik = Student("Atik",24,"Anowar","Aklima",15,"wevdeveloper");
const atif = Student("Atif",24,"Muttalib","Unknown",14,"Meter Reader");
console.log(atif);
*/



		//static object
/*
const user = {};
user.name = "Atik";
user.fName = "Anowar";
user.mName = "Aklima";
user.age = 24;
user.clas = 15;
user.profession = "Web Developer";
user.stdInfo = function(){
return `${this.name} is a junior ${this.profession}`;
}
console.log(user);
*/
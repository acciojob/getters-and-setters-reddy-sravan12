//complete this code
class Person {
	constructor(name,age){
		this._name=name
		this._age=age
	}
	get name(){
		return this._name
	}
	set name(newName){
		this._name=newName
	}
	set age(val){
		this._age=val
	}
	get age(){
		return this._age=val
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age)
	}
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}
	teach(){
		console.log(`${this.name} is teaching`)
	}
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

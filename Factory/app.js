function MemberFactory(){
	this.createMember = function(name, type){
		let member;

		if(type == 'simple'){
			member = new simpleMembership(name);
		}else if(type == 'standard'){
			member = new standardMembership(name);
		}else{
			member = new superMembership(name);
		}

		member.type = type;

		member.define = function(){
			console.log(`${this.name} (${this.type}: ${this.cost})`);
		}

		return member;
	}
}

const simpleMembership = function(name){
	this.name = name;
	this.cost = 15
}

const standardMembership = function(name){
	this.name = name;
	this.cost = 25
}

const superMembership = function(name){
	this.name = name;
	this.cost = 35
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Brad Pitt', 'simple'));
members.push(factory.createMember('Sanjay PJ', 'super'));
members.push(factory.createMember('Nikhil James', 'standard'));

console.log(members);

members.map(member => {
	member.define();
})
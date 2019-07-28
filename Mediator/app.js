class User{
	constructor(name){
		this.name = name;
		this.chatroom = null;
	}

	send = (message, to) => {
		this.chatroom.send(message, this, to);
	}

	receive = (message, from) => {
		console.log(`${from.name} to ${this.name}: ${message}`);
	}
}

class ChatRoom {
	constructor(){
		this.users = {};
	}

	register = (user) => {
		this.users[user.name] = user;
		user.chatroom = this;;
		console.log(`${user.name} joined the chat!`);
	}

	send = (message, from, to) => {
		// console.log(message, from, to);
		if(to){
			to.receive(message, from);
		}else{
			for(let key in this.users){
				if(this.users[key] != from){
					this.users[key].receive(message, from);
				}
			}
		}
	}
} 

const sam = new User('Sanjay PJ');
const nikhil = new User('Nikhil James');
const sandra = new User('Sandra Dickson');

const cr = new ChatRoom();

cr.register(sam);
cr.register(nikhil);
cr.register(sandra);

sam.send("yo...", nikhil);
sandra.send("entha...");
class EventObserver{
	constructor(){
		this.observers = [];
	}

	subscribe = (fn) => {
		this.observers.push(fn);
		console.log(`You are now subscribed to ${fn.name}`)
	}

	unsubscibe = (fn) => {
		this.observers = this.observers.filter(function(item){
			if (item != fn) {
				return item;
			}
		});
		console.log(`You are now unsubscribed from ${fn.name}`);
	}

	fire = () => {
		this.observers.map((item) => {
			item();
		})
	}
}

const click = new EventObserver();

//Event Listeners
document.getElementById('sub-ms').addEventListener('click', () => {
	click.subscribe(get_curr_milliseconds);
})

document.getElementById('unsub-ms').addEventListener('click', () => {
	click.unsubscibe(get_curr_milliseconds);
})

document.getElementById('sub-s').addEventListener('click', () => {
	click.subscribe(get_curr_seconds);
})

document.getElementById('unsub-s').addEventListener('click', () => {
	click.unsubscibe(get_curr_seconds);
})

document.getElementById('fire').addEventListener('click', () => {
	click.fire();
})

const get_curr_milliseconds = () => {
	console.log(`Current Milliseconds ${new Date().getMilliseconds()}`);
}

const get_curr_seconds = () => {
	console.log(`Current Seconds ${new Date().getSeconds()}`);
}

const Singleton = (function(){
	let instance;

	function createInstance(){
		const object = new Object({id: 1, name: "Sanjay PJ"});
		return object;
	}

	return {
		get_instance: function(){
			if(!instance){
				instance = createInstance();
			}
			return instance;
		}
	}
})();

const newObect1 = Singleton.get_instance();
const newObect2 = Singleton.get_instance();

console.log(newObect1);
console.log(newObect2);

console.log(newObect1 === newObect2)
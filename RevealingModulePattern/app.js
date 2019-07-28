const itemControl = function(){
	let data = [];

	function add(item){
		data.push(item);
		console.log('item added...');
	}

	function get(id){
		return data.find(item => {
			return item.id === id
		})
	}

	return {
		add: add,
		get: get
	}
}();

itemControl.add({id: 1, name: "Jhon"});
itemControl.add({id: 3, name: "Mark"});
console.log(itemControl.get(1));
console.log(itemControl.get(3));
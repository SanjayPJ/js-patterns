// basic structure

(function(){
	//declare private variables and functions

	return{
		//declare public variables and functions
	}
})();


const UIController = function(){
	let text = 'Hello World!!!!';
	const main_heading = document.getElementById('main-heading');
	// console.log(main_heading);

	const change_text = function(){
		main_heading.textContent = text;
	}

	return{
		call_change_text: function(){
			change_text();
			console.log(text);
		}
	}
}();

UIController.call_change_text();
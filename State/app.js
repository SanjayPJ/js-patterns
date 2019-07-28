M.AutoInit();

const contentContainer = document.getElementById('content');

class PageState {
	constructor(){
		this.currentState = homeState(this);
	}

	init = () => {
		this.change(homeState);
	}

	change = (state) => {
		this.currentState = state;
		state();
	}
}

const homeState = (page) => {
	contentContainer.innerHTML = `  <div class="grey lighten-5" style="padding: 55px 25px">
	<div class="container">
                  <h1 style="margin: 0">Hello, world!</h1>
                  <h5 class="grey-text text-darken-2">This is a simple hero unit, a simple jumbotron-style component for calling extra attention</h5>
                  <hr style="margin: 20px 0">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio vero accusantium, qui tempora ipsam nesciunt rerum sequi sit voluptatibus, aliquid, impedit quas eius quo. Culpa nobis quibusdam molestiae minima!</p>
                  <button class="btn red lighten-2 waves-effect waves-light btn-large" type="submit" name="action">Learn More
                  </button>
                  </div>
               </div>`;
               return 123
}

const aboutState = (page) => {
	contentContainer.innerHTML = `<div class="container">

	<h3>About Page</h3>
	<p>This is about page</p>

	<div>`;
}

const contactState = (page) => {
	contentContainer.innerHTML = `<div class="container">
<h3>Contact Page</h3>

<form action="">

<div class="input-field">
          <input id="blah1" type="text" class="validate">
          <label for="blah1">Name</label>
        </div>

        <div class="input-field">
          <input id="blah2" type="email" class="validate">
          <label for="blah2">Email</label>
        </div>

        <button class="btn red lighten-2 waves-effect waves-light btn-large" type="submit" name="action">Submit
                  </button>

                  </form>

	<div>`;
}

const page = new PageState();

page.init();

[...document.querySelectorAll('.homeButton')].forEach(function(item) {
  	item.addEventListener('click', function(e) {
  		page.change(homeState);
    	e.preventDefault();
  	});
});

[...document.querySelectorAll('.contactButton')].forEach(function(item) {
  	item.addEventListener('click', function(e) {
    	page.change(contactState);
    	e.preventDefault();
  	});
});

[...document.querySelectorAll('.aboutButton')].forEach(function(item) {
  	item.addEventListener('click', function(e) {
    	page.change(aboutState);
    	e.preventDefault();
  	});
});
/*
  Hi there! Thanks for taking on this code test. The requirements are listed below:
  
  1. Create a "Foods" class or constructor that will take two arguements: a root element and a data object (foodData).
  2. Render all of the items in the data object into the DOM with the root element as the parent
  3. If the user clicks a food item, it should be removed from the list
  
  Rules:
  - Only vanilla JS
  - Feel free to use Google, Bing, DuckDuckGo to look things up
  - Time limit: 30 minutes
*/

/* DO NOT MODIFY */
const rootElement = document.querySelector('.foods');
const foodData = [
	{
		id: 1,
		image: '🌮',
		name: 'taco'
	},
	{
		id: 2,
		image: '🍔',
		name: 'burger'
	},
	{
		id: 3,
		image: '🍆',
		name: 'eggplant'
	},
	{
		id: 4,
		image: '🍎',
		name: 'apple'
	},
	{
		id: 5,
		image: '🥞',
		name: 'pancakes'
	}
];
/* DO NOT MODIFY */

/** YOUR CODE BELOW **/
class Foods {
	constructor(root, data) {
		this.root = root;
		this.data = data;
	}

	// function def of render
	renderFoods() {
		const fragment = document.createDocumentFragment();
		for (const dataObj of this.data) {
			let div = document.createElement('div');
			div.innerText = dataObj.image;
			// old method of adding delete functionality to individual div
			// div.addEventListener('click', function() {
			// 	div.remove();
			// });
			fragment.appendChild(div);
		}
		// new method of adding delte functionality to the root itself
		this.root.addEventListener('click', (e) => {
			let { target } = e;
			target.remove();
		});
		this.root.appendChild(fragment);
	}
}

// render each food item inside food obj into the rootElement
const foods = new Foods(rootElement, foodData);
foods.renderFoods();

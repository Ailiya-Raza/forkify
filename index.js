import Search from "./model/Search.js";
import Recipe from "./model/Recipe.js";
import Likes from "./model/Likes.js";
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as likesView from './views/likesView';
import { elements } from "./views/base";
const state = {};


const controlSearch = async () => {
  // 1) Get query from the view
  const query ='pizza';
  $(".recipeList").empty(); 

  if (query) {
    // 2) New Search Object and add to state
    state.search = new Search(query);

    //3) Prepare UI for results

      // 4) Search for recipes
      await state.search.getResults();
      var e= state.search.result.recipes;
      const p1 = new searchView.Pagination(state.search.result.recipes, 5);
      var x=1;
      var p='';
      var v=-0;
      var numOfpages=searchView.renderPages(state.search.result.recipes);
      p1.display(1).forEach(searchView.renderRecipe);
      while (numOfpages>=x){
          p+=`<li value="${v}" class="pa"> ${x}</li>`;
          v+=1;
          x+=1;
      }

    $( `${p}` ).insertBefore(".pagination" );
    var nodes=document.getElementsByClassName("pa");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener ("click", (e) => {
        $(".recipeList").empty();
        p1.display(e.target.value+1).forEach(searchView.renderRecipe);


    })
    }  
  }
};

elements.searchForm.addEventListener("submit", e => {
$(".pa").empty();
  controlSearch();
  e.preventDefault();
});
console.log('hi');


const recipeController = async () => {
  console.log("Entered Controller");

  var recipe_id = window.location.hash.replace('#', '');
  // console.log(uri);
  // const recipe_title = decodeURI(uri);
  // console.log(recipe_title);
  if (recipe_id) {
  // // console.log("if");
     
    state.recipe = new Recipe(recipe_id);
  // // console.log(state.recipe);

    try {
         await state.recipe.getRecipe(recipe_id);
         console.log(state.recipe);
         recipeView.displayRecipe(state.recipe);
    }

    catch(error) {
      alert("There was an error loading the recipe");
    }
  }
};

window.addEventListener('hashchange', e => {
  recipeController();
});


const likeController = () => {
	console.log("Entered like controller");
	if (!state.likes) {
		state.likes = new Likes();
	}

	const current = state.recipe.id;

	if (!state.likes.liked(current)) {
		// console.log('hello');
		state.likes.delLike(current);
		likesView.removeLike(current);

	}

	else {
		const title = state.recipe.title;
		const publisher = state.recipe.publisher;
		const image = state.recipe.image;

		const newLike = state.likes.addLike(current, title, publisher, image);
		// console.log(newLike);
		likesView.likeDisplay(newLike);
	}

};

elements.recipe.addEventListener('click', e =>{
	console.log("entered event listener");
	if (e.target.matches('.fa-heart')) {
		likeController();
		// console.log("ha");
	}	
});

window.addEventListener('load', () => {
	state.likes = new Likes();
	// console.log("before");
	// console.log(state.likes);
	state.likes.reload();
	console.log("after");
	state.likes.likes.forEach(like => likesView.likeDisplay(like));
});

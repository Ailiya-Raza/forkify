import Search from "./model/Search.js";
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements} from "./views/base";
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

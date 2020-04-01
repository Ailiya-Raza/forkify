import Search from "./model/Search.js";
import * as searchView from './views/searchView';
import * as page from './views/pagination';
import { elements} from "./views/base";
const state = {};
function myFunction(item, index) {
	//searchView.renderRecipe(item);
	//searchView.renderPages(item, index);
}

const controlSearch = async () => {
  // 1) Get query from the view
  const query ='pizza';
  // const query = searchView.getInput();
  if (query) {
    // 2) New Search Object and add to state
    state.search = new Search(query);

    //3) Prepare UI for results


      // 4) Search for recipes
      await state.search.getResults();
      var e= state.search.result.recipes;
      state.search.result.recipes.forEach(myFunction);
      searchView.renderPages(state.search.result.recipes);
      //searchView.check(state.search.result.recipes);
     // listener;
      
  }
};



elements.searchForm.addEventListener("submit", e => {
  controlSearch();
  e.preventDefault();
  //searchView.check(e);
});

// const listener = () =>{
// $(".pa").addEventListener("click", searchView.check);
// }
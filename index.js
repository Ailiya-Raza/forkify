import Search from "./model/Search.js";
import * as searchView from './views/searchView';
import { elements} from "./views/base";
const state = {};
// function myFunction(item, index) {
//   //searchView.renderRecipe(item);
//   //searchView.renderPages(item, index);
// }

const controlSearch = async () => {
  // 1) Get query from the view
  const query ='pizza';
  $(".recipeList").empty();
  //const query = searchView.getInput();
    
  //

  if (query) {
    // 2) New Search Object and add to state
    state.search = new Search(query);

    //3) Prepare UI for results


      // 4) Search for recipes
      await state.search.getResults();
      var e= state.search.result.recipes;
      //state.search.result.recipes.forEach(myFunction);
      //searchView.renderPages(state.search.result.recipes);
      //searchView.paging(state.search.result.recipes);
      const p1 = new searchView.Pagination(state.search.result.recipes, 5);

//$(".pa").addEventListener ("click", p1.display(this.value));
      //console.log(p1.display(5).);
      // var x = p1.numOfPages;
      // while (x!=0){
      //console.log(p1.display(5));
      //   console.log('new page');
      //   x=x-1;
      // }

      
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
//console.log(this);
for (var i = 0; i < nodes.length; i++) {
  //if (nodes[i] != undefined){
     //x=nodes.item(i).value;
     //console.log(nodes.item(i).value);
    nodes[i].addEventListener ("click", (e) => {
      //$(".recipeList").innerHTML= " ";
      $(".recipeList").empty();
      p1.display(e.target.value+1).forEach(searchView.renderRecipe);


  })
}
// $(".pa")[1].addEventListener ("click", check(pageEleArr));
      
  }
};



elements.searchForm.addEventListener("submit", e => {
$(".pa").empty();
  controlSearch();
   // $(".page").empty();
  e.preventDefault();
  //searchView.check(e);
});

// function checking(){
//   console.log('hello');
// }

// const p1 = new Pagination(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3);
// console.log(p1.elementCount);
// console.log(p1.pageEleArr);
// console.log(p1.numOfPages);
// console.log(p1.itemsPerPage);
// console.log(p1.display(3));




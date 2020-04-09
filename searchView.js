import { elements } from "./base";
import * as recipeView from './recipeView';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = "";
};

export const renderImage = (url) => {
    elements.searchImage.src=url;
    console.log("changing");

}

export const renderPublisher = (pub) => {
    elements.searchPublisher.innerHTML=pub;
    console.log("changing pub");
}

export const renderTitle = (title) => {
    elements.searchTitle.innerHTML=title;
    console.log("changing title");
}

export const titleLength = (e) => {
    var splitTitle=e.split(' ');
        if (splitTitle.length > 2) {
            var y = splitTitle.slice(0,2).join(' ');
            return `${y}..`;
        }
        else return e;
}
export const renderRecipe = (e) => {
    //console.log(e);
    if ( e != undefined){
        var title= titleLength(e.title);
    const m =`  <li class="recipeList">
                    <a class="results__link results__link--active" href="#${e.recipe_id}">
                        <div class="result">
                         <img class="rounded-circle" height="70px" width="70px" src="${e.image_url}" alt="Test">
                            <h4 class="results__data" >${title}</h4>
                        </div>
                        <p class="results__author">${e.publisher}</p>
                        <button class = view__recipe><i class="fas fa-plus"></i></button>
                    </a>
                </li>
             `
    $(`${m}`).insertAfter(".results__list" );
    // recipeView.displayRecipe(e);
}
}



export const renderPages = (e) => {
    
    var i=Math.ceil(e.length/5);
    console.log(i);
    return i;
}


export function Pagination(pageEleArr, itemsPerPage) {
    this.pageEleArr = pageEleArr;
    this.itemsPerPage = itemsPerPage;
    this.elementCount = this.pageEleArr.length;
    this.numOfPages = Math.ceil(this.elementCount / this.itemsPerPage);
    const pageElementsArr = function (arr, eleDispCount) {
        const arrLen = arr.length;
        const noOfPages = Math.ceil(arrLen / eleDispCount);
        let pageArr = [];
        let perPageArr = [];
        let index = 0;
        let condition = 0;
        let remainingEleInArr = 0;

        for (let i = 0; i < noOfPages; i++) {

            if (i === 0) {
                index = 0;
                condition = eleDispCount;
            }
            for (let j = index; j < condition; j++) {
                perPageArr.push(arr[j]);
            }
            pageArr.push(perPageArr);
            if (i === 0) {
                remainingEleInArr = arrLen - perPageArr.length;
            } else {
                remainingEleInArr = remainingEleInArr - perPageArr.length;
            }

            if (remainingEleInArr > 0) {
                if (remainingEleInArr > eleDispCount) {
                    index = index + eleDispCount;
                    condition = condition + eleDispCount;
                } else {
                    index = index + perPageArr.length;
                    condition = condition + remainingEleInArr;
                }
            }
            perPageArr = [];
        }
        //pageArr.forEach(renderRecipe);
        return pageArr;
    }

this.display = function (pageNo) {
    if (pageNo > this.numOfPages || pageNo <= 0) {
        return -1;
    } else {
        //console.log('Inside else loop in display method');
        //console.log(pageElementsArr(this.pageEleArr, this.itemsPerPage));
        console.log(pageElementsArr(this.pageEleArr, this.itemsPerPage)[pageNo - 1]);
        //pageElementsArr(this.pageEleArr, this.itemsPerPage)[pageNo - 1].forEach(renderRecipe);
        return pageElementsArr(this.pageEleArr, this.itemsPerPage)[pageNo - 1];
    }
 }
}
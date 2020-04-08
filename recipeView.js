import { elements } from './base';

export const clearRecipe = () => {
    elements.recipe.innerHTML = '';
};


export const displayRecipe = (id) => {
    console.log(id);
    // if ( id != undefined){
    //     const m = `
    //         <li class="recipe_div">
    //             <img src="${recipe.image}" alt="${recipe.title}" class="rounded-circle">
    //             <h1 class="recipe__title">
    //                 <span>${recipe.title}</span>
    //             </h1>
    //         </div>

    //         <div class="recipe__instructions">
    //             <h2 class="heading-2">How to cook it?</h2>
    //             <p class="recipe__instructions-text">
    //                 The author of the recipe is
    //                 <span class="recipe__by">${recipe.publisher}</span>. Please check out directions at their website.
    //             </p>
    //             <a class="btn-small recipe__btn" href="${recipe.url}" target="_blank">
    //                 <span>Directions</span>
    //             </a>
    //         </li>
    //     `;
    // }
    // elements.recipe.insertAdjacentHTML('afterbegin', m);
};


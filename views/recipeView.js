import { elements } from './base';

export const displayRecipe = (recipe) => {
    if ( recipe != undefined ){
        elements.recipe.innerHTML = '';
        const m = `
                <div class='container'>
                    <div class='recipe-card'>
                        <div class='recipe_img'>
                            <img src="${recipe.image}" alt="${recipe.title}" class="main_recipe rounded-circle">
                        </div>

                        <br>

                        <div class='recipe_content'>
                            <div class ='recipe_info'>
                                
                                <button class="recipe_like">
                                    <i class="fas fa-heart"></i>
                                </button>

                                <h2> Ingredients <button class="add_list">
                                    <i class="fas fa-shopping-cart"></i>
                                </button></h2>
                                
                                <div class="recipe_instructions">
                                    <span>
                                        ${recipe.ingredients}
                                    </span>
                                    
                                </div>

                            </div>

                            <h1 class="heading-2">How to cook it?</h1>
                            <p class="recipe_instructions">The author of the recipe is <br>
                                <span class="recipe_by">${recipe.publisher}</span>. <br> Please check out the<a class="link" href="${recipe.url}" target="_blank"> instructions</a> at their official website.
                            </p>
                        </div>
                    </div>
                </div>
        `;

        elements.recipe.insertAdjacentHTML('afterbegin', m);
    }
};

// const parseIngredients = ingredient => {
//     `<li class='recipe__ingredient'>
//         <span class="recipe_unit">${ingredients[0]} of ${ingredients[1]}</span>
//     </li>
// `;

// }

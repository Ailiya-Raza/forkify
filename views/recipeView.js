import { elements } from './base';

export const displayRecipe = (recipe) => {
    console.log(recipe);
    if ( recipe != undefined ){
        elements.recipe.innerHTML = '';
        console.log("entered");
        const m = `
                <div class='container'>
                    <div class='recipe-card'>
                        <div class='recipe_img'>
                            <img src="${recipe.image}" alt="${recipe.title}" class="main_recipe rounded-circle">
                        </div>

                        <br>

                        <div class='recipe_content'>
                            <div class ='recipe_info'>
                                <i class="fas fa-users"> 4 servings </i>
                                <br>
                                <button class="recipe_like">
                                    <i class="fas fa-heart"></i>
                                </button>

                                <h2> Ingredients </h2>
                                <div class="recipe_ingredients">
                                    <ul class="recipe_ingredient-list">
                                        ${recipe.ingredients}
                                    </ul>
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

import axios from 'axios'

export default class Recipe {
    constructor(id){
        this.id = id;
    }

    async getRecipe(e) {
        // console.log(e);
        try {
            // console.log(`https://forkify-api.herokuapp.com/api/get?rId=${e}`);
            const res = await axios (`https://forkify-api.herokuapp.com/api/get?rId=${e}`);
            // console.log(res);
            // console.log(res.data.recipe);
            this.title = res.data.recipe.title;
            this.publisher = res.data.recipe.publisher;
            this.image = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
            // console.log(res);
    }

        catch(error) {
        alert("Couldn't fetch recipe");
        }
    }

};
import axios from 'axios'

export default class Recipe {
    constructor(title){
        this.title = title;
    }

    async getRecipe(e) {

        try {
            const res = await axios (`https://forkify-api.herokuapp.com/api/search?q=${e}`);
            this.id = res.recipe_id;
            this.title = res.title;
            this.publisher = res.publisher;
            this.image = res.image_url;
            this.url = res.source_url;
    }

        catch(error) {
        alert("Couldn't fetch recipe");
        }
    }

};
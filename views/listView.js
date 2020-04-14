import { elements } from './base';

export const displayItem = items => {

    if ( items != undefined ){
        const l = `
                    <div class="item">
                    	<div class="row text-center">
                    	<div class="col-sm-2"></div>
                    	<div class="col-sm-8">
                            <h4 class="product-name">${items.count} ${items.unit} ${items.ingredient}</h4>
                        </div>
                    	</div>
                    </div>

        `;

        elements.s_list.insertAdjacentHTML('beforeend', l);


    }
};


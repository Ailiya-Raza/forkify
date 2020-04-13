import { elements } from './base';

export const displayItem = items => {

    if ( items != undefined ){
        const l = `
                    <div class="item">
                            <h4 class="product-name">${items}</h4>
                    </div>

        `;

        elements.s_list.insertAdjacentHTML('beforeend', l);


    }
};
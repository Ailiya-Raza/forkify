import { elements } from './base';

export const likeDisplay = like => {
    if (like != undefined) {
        const m = `
            <li>
                <a class="likes__link" href="#${like.id}">
                    <div class="likes__image">
                        <img src="${like.image}" alt="${like.title}" class ="liked_image">
                    <div class="likes__data">
                        <h6 class="likes__name">${like.title}</h6>
                        <p class="likes__author">${like.publisher}</p>
                    </div>
                </a>
            </li>
        `;
        elements.likesList.insertAdjacentHTML('beforeend', m);
    }
};

export const removeLike = id => {
    const e = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
    if (e) e.parentElement.removeChild(e);
};
import { elements } from "./base";

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

export const renderRecipe = (e) => {
	console.log(e);
	const m =`
                <li>
                    <a class="results__link results__link--active" href="#23456">
                        <figure class="results__fig">
                            <img class="rounded-circle img-fluid" height="100px" width="100px" src="${e.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${e.title}</h4>
                            <p class="results__author">${e.publisher}</p>
                        </div>
                    </a>
                </li>
             `


	$(`${m}`).insertAfter(".results__list" );
}

export var pages =[]; 
var show = [];
	var start=0;
	var end=4;


export const renderPages = (e) => {
	
	var i=Math.ceil(e.length/5);
	console.log(i);
	var x=1;
	 var p='';
	 var v=-0;
	while (i>=x+1){
		p+=`<li value="${v}" class="pa" > ${x}</li>`;
		//document.getElementsByClassName (".pa")[i].addEventListener ("click", check(e));
		v+=1;
		x+=1;
	}
	//p+='<li id="p">&raquo;</li>';
	$( `${p}` ).insertBefore(".pagination" );
	//check(e);
	var targetSpans = document.querySelectorAll (".pa");
	for (var J in targetSpans) {
    targetSpans[J].addEventListener ("click", check, false);


}


export const check = (e) => {
	$(".pa").click(function() {
    var i=this.value;
   	e=e.slice(i*5,i*5+5);
	e.forEach(renderRecipe);
});
}




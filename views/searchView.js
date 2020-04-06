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
	const m =`
                <li class="recipeList">
                    <a class="results__link results__link--active" href="#23456">
                        <div class="result">
                         <img class="rounded-circle" height="70px" width="70px" src="${e.image_url}" alt="Test">
                            <h4 class="results__data">${title}</h4>
                        </div>
                        <p class="results__author">${e.publisher}</p>
                    </a>
                </li>
             `


	$(`${m}`).insertAfter(".results__list" );
}
}



export const renderPages = (e) => {
	
	var i=Math.ceil(e.length/5);
	console.log(i);
	return i;
// 	var x=1;
// 	 var p='';
// 	 var v=-0;
// 	while (i>=x+1){
// 		p+=`<li value="${v}" class="pa" > ${x}</li>`;
// 		//document.getElementsByClassName (".pa")[i].addEventListener ("click", check(e));
// 		v+=1;
// 		x+=1;
// 	}
// 	//p+='<li id="p">&raquo;</li>';
// 	$( `${p}` ).insertBefore(".pagination" );
// 	check(e);
// 	var targetSpans = document.querySelectorAll (".pa");
// 	for (var J in targetSpans) {
//     targetSpans[J].addEventListener ("click", check, false);}


// }

// const check = function(e) {
// 	$(".pa").click(function() {
//     var i=this.value;
//    	e=e.slice(i*5,i*5+5);
//    	console.log(e)
// 	e.forEach(renderRecipe);
// });
}

// export const paging = (e) => {
// 	elements.page.pagination({
//     dataSource: [1, 2, 3, 4, 5, 6],
//     pageSize: 5,
//     showGoInput: true,
//     showGoButton: true,
//     // callback: function(data, pagination) {
//     //     // template method of yourself
//     //     var html = checking();
//     //     dataContainer.html(html);
//     // }

//   onPageClick: function (event, page) {
//     console.log("pagination checking");
//   },
// })

// } 



export function Pagination(pageEleArr, itemsPerPage) {
    this.pageEleArr = pageEleArr;
    this.itemsPerPage = itemsPerPage;
    this.elementCount = this.pageEleArr.length;
    this.numOfPages = Math.ceil(this.elementCount / this.itemsPerPage);


 //        		var x=1;
	//  var p='';
	//  var v=-0;
	// while (this.numOfPages>=x+1){
	// 	p+=`<li value="${v}" class="pa"> ${x}</li>`;
		
	// 	v+=1;
	// 	x+=1;
	// }
	// $( `${p}` ).insertBefore(".pagination" );
	// var nodes=$('.pa'); 
	// for (var i = 0; i < nodes.length; i++) {
	//   nodes[i].addEventListener ("click", check(pageEleArr));
	// }
	// // $(".pa")[1].addEventListener ("click", check(pageEleArr));


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


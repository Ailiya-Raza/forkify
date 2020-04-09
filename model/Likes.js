
export default class Likes {
	constructor() {
		this.likes = [];
	}

	addLike(id, title, publisher, image) {
		const like = {id, title, publisher, image};
		this.likes.push(like);

		this.storeLike();
		return like;
	}

	storeLike() {
		localStorage.setItem('likes', JSON.stringify(this.likes));
		// console.log(localStorage.getItem('likes_list'));
	}

	reload() {
		console.log('in reload');
		console.log(localStorage.getItem('likes'));
		const store = JSON.parse(localStorage.getItem('likes'));
		if (store) {this.likes = store;}
	}

	liked(curr) {
		const store = JSON.parse(localStorage.getItem('likes'));
		store.forEach(e =>  {
			// console.log(e.id);
			if (curr === e.id) {
				console.log("already liked");
				return false;
			 }
			});
	}

	delLike(id) {
		const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);
        this.storeLike();
	}

};
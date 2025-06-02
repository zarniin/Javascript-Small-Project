// GET UI
const getboxes = document.querySelectorAll('.boxes');
// console.log(getboxes);
// console.log(getboxes[0]);

for(let x = 0; x < getboxes.length;x++){
	// console.log(x); // 0 to 5
	// console.log(getboxes[x]);

	getboxes[x].addEventListener('mouseenter',function(){

		if(this.classList.contains('left')){
			this.classList.remove('left');
			this.classList.add('right');
		}else{
			this.classList.remove('right');
			this.classList.add('left');
		}

	});
}
const getdownloadbtn = document.querySelector('.download-btn');
const getprogressbar = document.querySelector('.progress-bar');
const seturl = "https://google.com";

getdownloadbtn.addEventListener('click',function(e){
	// console.log('hay i am working');

	var setwidth = 0;

	let setinv = setInterval(progressinc,100);

	// progressinc();

	function progressinc(){

		if(setwidth >= 100){
			// setwidth = 0;
			clearInterval(setinv);

			// redirect
			window.location.href = seturl;
		}else{
			setwidth++;
			getprogressbar.style.width = `${setwidth}%`;
			getprogressbar.setAttribute('data-inc',`${setwidth}%`);
			getdownloadbtn.setAttribute('disabled',true);
		}

		console.log(setwidth);

	}

});




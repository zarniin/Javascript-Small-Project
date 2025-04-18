// Get UI 
var getmodal = document.querySelector('.modal');
var getmodalimg = document.querySelector('.modal-img');
var getcaption = document.querySelector('.caption');
var getbtnclose = document.querySelector('.btn-close');

function shownow(e){
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.src);
    // console.log(e.target.alt);

    getmodal.style.display = "block";
    getmodalimg.src = e.target.src; 
    getcaption.textContent = e.target.alt;
}

// getbtnclose.addEventListener('click',function(){
//     getmodal.style.display = "none";
// });

getbtnclose.onclick = function(){
    getmodal.style.display = "none";
}

document.addEventListener('click',function(e){

    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }

});











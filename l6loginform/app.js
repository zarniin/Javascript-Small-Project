// Get UI 
const getmodalbtn = document.getElementById('modal-btn'),
      getmodalbox = document.getElementById('loginmodal'),
      getbtnclose = document.querySelector('.btn-close');

// getmodalbtn.addEventListener('click',function(){
//     getmodalbox.style.display = "block";
// });

// getbtnclose.addEventListener('click',function(){
//     getmodalbox.style.display = "none";
// });

getmodalbtn.addEventListener('click',openmodalbtn);

function openmodalbtn(){
    getmodalbox.style.display = "block";
}

getbtnclose.addEventListener('click',closemodalbtn);

function closemodalbtn(){
    getmodalbox.style.display = "none";
}

window.onclick = function(e){
    // console.log(e.target);

    if(e.target === getmodalbox){
        getmodalbox.style.display = "none";
    }
}





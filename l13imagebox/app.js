// Get UI 
const getimageboxes = document.querySelectorAll('.imgbox');

getimageboxes.forEach(function(getimagebox,idx){
    // console.log(getimagebox);

    getimagebox.addEventListener('click',function(){
        // console.log(this);
        // console.log(idx);

        showbox(idx);
    });
});

function showbox(idx){
    console.log("from parameter is = ",idx);
    
    getimageboxes.forEach(function(imagebox,curidx){
        // console.log('current id = ',curidx);

        if(idx === curidx){
            imagebox.classList.add('show');

            imagebox.addEventListener('click',function(e){

                // console.log(e.target);

                if(e.target.className === "btn-close"){
                    // console.log('hi');
                    imagebox.classList.remove('show');
                }

                if(e.target.classList.contains('btn')){
                    // console.log('hay');
                    // const getsubbtn = getimageboxes[idx].querySelector('.btn');
                    // const getsubbtn = imagebox.querySelector('.btn');
                    // getsubbtn.textContent = "Subscribed";
                }
                
            });


        }else{
            imagebox.classList.remove('show');
        }

    });

}



    










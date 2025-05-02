// Get UI
const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic'),
      getpro = document.getElementById('pro'),
      getmst = document.getElementById('mst');

// getcheckbox.addEventListener('click',function(){
//     // console.log('hi');

//     // Javascript Method 1

//     // if(getcheckbox.checked){
//     //     getbasic.textContent = 120;
//     //     getpro.textContent = 240;
//     //     getmst.textContent = 360;
//     // }else{
//     //     getbasic.textContent = 20;
//     //     getpro.textContent = 40;
//     //     getmst.textContent = 60;
//     // }

//     // Es6 Method 1

//     if(getcheckbox.checked){
//         [getbasic.textContent,getpro.textContent,getmst.textContent] = [120,240,360];
//     }else{
//         [getbasic.textContent,getpro.textContent,getmst.textContent] = [20,40,60];
//     }

// });

getchecklabel.addEventListener('click',function(){
    // console.log('hi');

    // Javascript Method 1

    // if(getcheckbox.checked){
    //     getbasic.textContent = 120;
    //     getpro.textContent = 240;
    //     getmst.textContent = 360;
    // }else{
    //     getbasic.textContent = 20;
    //     getpro.textContent = 40;
    //     getmst.textContent = 60;
    // }

    // Es6 Method 1

    if(getcheckbox.checked){
        [getbasic.textContent,getpro.textContent,getmst.textContent] = [20,40,60];
    }else{
        [getbasic.textContent,getpro.textContent,getmst.textContent] = [120,240,360];
    }

});

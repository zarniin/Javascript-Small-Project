// Get UI 
const getprogressbar = document.getElementById('progress-bar');
// console.log(getprogressbar);

window.onscroll = function(){
    // console.log("hay");

    scrollpoint();
}


function scrollpoint(){
    let getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);

    let getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);

    let getscrollheight = document.documentElement.scrollHeight;//3173
    // console.log(getscrollheight);

    let calcheight = getscrollheight - getclientheight;
    // console.log(calcheight);

    // let getfinal = Math.floor(getscrolltop*100 / calcheight);
    let getfinal = Math.floor((getscrolltop / calcheight) *100);
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;

}

function printme(){
    window.print();
}

// Example 
// let getscrolltop = document.documentElement.scrollTop;
// console.log(getscrolltop);

// let getclientheight = document.documentElement.clientHeight;
// console.log(getclientheight);

// let getscrollheight = document.body.scrollHeight;//2973
// let getscrollheight = document.body;
// let getscrollheight = document.documentElement.scrollHeight;//3173
// let getscrollheight = document.documentElement;
// console.log(getscrollheight);




// Get UI 
const getcontainer = document.querySelector('.container');
const getvideoscreen = document.getElementById('videoscreen');
// console.log(getvideoscreen);

const playbtn = document.getElementById('play'),
      prevbtn = document.getElementById('prev'),
      nextbtn = document.getElementById('next'),
      stopbtn = document.getElementById('stop');

const getprogress = document.getElementById('progress'),
      getprogressbar = document.getElementById('progress-bar');

const getdisplaytime = document.getElementById('displaytime');
const gettitle = document.getElementById('title');

const getopenfullscreen = document.getElementById('openfullscreen'),
      getclosefullscreen = document.getElementById('closefullscreen');


const vidoes = ['samplevideo1','samplevideo2'];

let curridx = 0;

loadvideo(vidoes[curridx]);

function loadvideo(video){
    getvideoscreen.src = `./source/${video}.mp4`;
    gettitle.textContent = video;
}

function playvideo(){
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    getvideoscreen.play();
}

playvideo();

function pausevideo(){
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    getvideoscreen.pause();
}

pausevideo();

function playpausevideo(){

    if(getvideoscreen.paused){
        getvideoscreen.play();
    }else{
        getvideoscreen.pause();
    }

}

function nextvideo(){

    curridx += 1;
    // console.log(curridx);

    if(curridx > vidoes.length-1){
        curridx = 0;
    }

    loadvideo(vidoes[curridx]);
    playvideo();

}

function previousvideo(){

    curridx -= 1;
    // console.log(curridx);

    if(curridx < 0){
        curridx = vidoes.length-1;
    }

    loadvideo(vidoes[curridx]);
    playvideo();

}

function stopvideo(){

    getvideoscreen.currentTime = 0;

    pausevideo();

}

function updateprogress(e){

    // Method 1 
    // const currentTime = e.target.currentTime;
    // const duration = e.target.duration;
    // console.log(currentTime,duration);

    // Method 2 
    // const {currentTime} = e.target;
    // const {duration} = e.target;
    // console.log(currentTime,duration);

    // Method 3 
    // const {currentTime,duration} = e.target;
    // console.log(currentTime,duration);

    // Method 4 
    // const [currentTime,duration] = [e.target.currentTime,e.target.duration];
    // console.log(currentTime,duration);

    // Method 5 
    const [currentTime,duration] = [e.srcElement.currentTime,e.srcElement.duration];
    // console.log(currentTime,duration);

    if(getvideoscreen.currentTime === 0){
        getprogressbar.style.width = "0%";
    }else{
        const progresspercent = (currentTime/duration) * 100;
        getprogressbar.style.width = `${progresspercent}%`;
    }

    let getmins = Math.floor(getvideoscreen.currentTime/60);
    let getsecs = Math.floor(getvideoscreen.currentTime%60);
    // console.log(getmins,getsecs);

    // Method 1 
    // if(getmins < 10){
    //     // getmins = "0"+getmins;
    //     getmins = "0"+String(getmins);
    // }

    // if(getsecs < 10){
    //     // getmins = "0"+getmins;
    //     getsecs = "0"+String(getsecs);
    // }

    // Method 2 
    const minutevalue = getmins.toString().padStart(2,"0");
    const secondsvalue = getsecs.toString().padStart(2,"0");

    // console.log(getmins,getsecs);

    getdisplaytime.innerText = `${minutevalue}:${secondsvalue}`;  


}

function setprogress(e){

    const getclientwidth = e.target.clientWidth;
    const getclickx = e.offsetX;
    const duration = getvideoscreen.duration;

    getvideoscreen.currentTime = (getclickx/getclientwidth) * duration;
    // console.log(getvideoscreen.currentTime);

}

function openfullscreen(){

    // getcontainer.requestFullscreen();

    // Method 1 
    if(getcontainer.requestFullscreen){
        getcontainer.requestFullscreen();
    }else if(getcontainer.mozRequestFullscreen){
        getcontainer.mozRequestFullscreen();
    }else if(getcontainer.webkitRequestFullscreen){
        getcontainer.webkitRequestFullscreen();
    }else if(getcontainer.msRequestFullscreen){
        getcontainer.msRequestFullscreen();
    }

    getopenfullscreen.style.display = "none";
    getclosefullscreen.style.display = "inline-block";

}

function closefullscreen(){

    // document.exitFullscreen();

    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.mozCancelFullscreen){
        document.mozCancelFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }

    getopenfullscreen.style.display = "inline-block";
    getclosefullscreen.style.display = "none";


}


getvideoscreen.addEventListener('timeupdate',updateprogress);
getvideoscreen.addEventListener('ended',nextvideo);
getvideoscreen.addEventListener('play',playvideo);
getvideoscreen.addEventListener('pause',pausevideo);

playbtn.addEventListener('click',playpausevideo);
nextbtn.addEventListener('click',nextvideo);
prevbtn.addEventListener('click',previousvideo);
stopbtn.addEventListener('click',stopvideo);
getprogress.addEventListener('click',setprogress);
getopenfullscreen.addEventListener('click',openfullscreen);
getclosefullscreen.addEventListener('click',closefullscreen);




















    











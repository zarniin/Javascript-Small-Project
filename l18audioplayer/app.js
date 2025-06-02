// Get UI 
const getaudioscreen = document.getElementById('audioscreen');
// console.log(getaudioscreen);

const playbtn = document.getElementById('play'),
      prevbtn = document.getElementById('prev'),
      nextbtn = document.getElementById('next'),
      stopbtn = document.getElementById('stop');

const getprogress = document.getElementById('progress'),
      getprogressbar = document.getElementById('progress-bar');

const getvolprogress = document.getElementById('volumeprogress');
const getdisplaytime = document.getElementById('displaytime');

const audios = ['sample1','sample2','sample3'];

let curridx = 0;

// console.log(audios[curridx]);// sample 1

// loadaudio(audios[curridx]);

function loadaudio(audio){
    getaudioscreen.src = `./source/${audio}.mp3`;
}

function playaudio(){

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    getaudioscreen.play(); // default function
}

// playaudio();

function pauseaudio(){

    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

    getaudioscreen.pause(); // default function
}

// pauseaudio();

function playandpauseaudio(){

    // paused default keywork for audio/video 

    if(getaudioscreen.paused){
        getaudioscreen.play();
    }else{
        getaudioscreen.pause();
    }
}

function nextaudio(){
    curridx++;

    // 0 1 2        3=3-1=2
    if(curridx > audios.length-1){
        curridx = 0;
    }

    // console.log(curridx);

    loadaudio(audios[curridx]);
    playaudio();

}

function previousaudio(){
    curridx--;

    
    if(curridx < 0){
        curridx = audios.length-1;
    }

    // console.log(curridx);

    loadaudio(audios[curridx]);
    playaudio();

}

function updateprogress(e){

    console.log(e.target);
    // console.log(e.target.duration); 
    // console.log(e.target.currentTime); 

    // Method 1 
    // const getduration = e.target.duration;
    // const getcurrenttime = e.target.currentTime;
    // console.log(getduration,getcurrenttime);

    // Method 2 
    // const {duration,currentTime} = e.target;
    // console.log(duration,currentTime);

    // Method 3 
    const {duration} = e.target;
    const {currentTime} = e.target;
    // console.log(duration,currentTime);

    if(currentTime === 0){
        getprogressbar.style.width = "0%";
    }else{
        const progresspercent = (currentTime/duration) * 100;
        // console.log(progresspercent);

         getprogressbar.style.width = `${progresspercent}%`;
    }

    // forward 
    // const mins = Math.floor(currentTime/60);
    // const secs = Math.floor(currentTime%60);

    // backward
    const mins = Math.floor((duration-currentTime)/60);
    const secs = Math.floor((duration-currentTime)%60);
    // console.log(mins,secs);
    // console.log(typeof mins,secs);

    const minutevalue = mins.toString().padStart(2,'0');// if you are padStart() concat number must be string. 
    // console.log(minutevalue);
    const secondvalue = secs.toString().padStart(2,'0'); 

    getdisplaytime.innerText = `${minutevalue}:${secondvalue}`;


};

function stopaudio(){
    getaudioscreen.currentTime = 0;
    // getprogress.style.width =  `${getaudioscreen.currentTime}%`;
    getprogressbar.style.width =  `0%`;

    pauseaudio();

}

function volumecontrol(){

    // console.log(getvolprogress.value);
    // console.log(getaudioscreen.volume); // 1

    // volume default key from audio/video 
    getaudioscreen.volume = getvolprogress.value/100;

    // 1 is default (100%)
    // 0.5 half volume (50%)
    // 0 muted 

}

function progressaudioclick(e){
    // console.log('hay');
    // console.log(this); 
    // console.log(e);

    const width = this.clientWidth;
    // console.log(width); 

    let clickx = e.offsetX;
    // console.log(clickx);

    const getduration = getaudioscreen.duration;
    // console.log(getduration);

    getaudioscreen.currentTime = (clickx/width) * getduration;
    // console.log(getaudioscreen.currentTime);


}


// Use in audio/video keyword 
    //  play() / pause() / timeupdate(duration,currentTime) / paused() / volume() 

getaudioscreen.addEventListener('timeupdate',updateprogress);
getaudioscreen.addEventListener('play',playaudio);
getaudioscreen.addEventListener('pause',pauseaudio);

playbtn.addEventListener('click',playandpauseaudio);
nextbtn.addEventListener('click',nextaudio);//0 1 2 0 1 2
prevbtn.addEventListener('click',previousaudio);// 2 1 0 2 1 0
stopbtn.addEventListener('click',stopaudio);
getvolprogress.addEventListener('click',volumecontrol);
getprogress.addEventListener('click',progressaudioclick);















    











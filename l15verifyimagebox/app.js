// Get UI 
const database = [

    {
        question:"Choosse Traffic Light ?",
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        correctAnswer: "a"
    },

    {
        question:"Choosse Mountain ?",
        a: "./img/ambulance.jpg",
        b: "./img/mountain.jpg",
        c: "./img/traffic.jpg",
        d: "./img/airport.jpg",
        correctAnswer: "b"
    },

    {
        question:"Choosse Ambulance Truck ?",
        a: "./img/ambulance.jpg",
        b: "./img/airport.jpg",
        c: "./img/traffic.jpg",
        d: "./img/mountain.jpg",
        correctAnswer: "a"
    },

    {
        question:"Choosse Airport Truck ?",
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        correctAnswer: "d"
    }

];

// console.log(database);
// console.log(database[0].b);

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getinputs = document.querySelectorAll('.answer');

const geta_img = document.getElementById('a_img'),
      getb_img = document.getElementById('b_img'),
      getc_img = document.getElementById('c_img'),
      getd_img = document.getElementById('d_img');

const getbtn = document.querySelector('.btn');

let currentidx = 0;
let sorce = 0;

startquestion();

function startquestion(){

    removeselected();

    const currentqes = database[currentidx];

    getquestion.textContent = currentqes.question;
    geta_img.src = currentqes.a;
    getb_img.src = currentqes.b;
    getc_img.src = currentqes.c;
    getd_img.src = currentqes.d;

}

function getsingleinput(){
    let answer;

    getinputs.forEach(function(getinput){
        // console.log(getinput);
        // console.log(getinput.id);

        if(getinput.checked){
            // console.log(getinput.id);

            answer = getinput.id;
            
        }


    });

    // console.log(answer);
    return answer;
}

getbtn.addEventListener('click',function(){
    // console.log('hay');

    const getanswer = getsingleinput();
    // console.log(getanswer);

    if(getanswer){

        // question 0 
        // currentidx 0

        if(getanswer === database[currentidx].correctAnswer){
            sorce++;
        }
        

        currentidx++;
        // question 1 
        // console.log(currentidx);

            // 0 1 2 3   <  4 
        if(currentidx < database.length){
            startquestion();
        }else{
            // console.log(sorce);

            getcontainer.innerHTML = `
                <h3>Total Score : ${sorce*25}</h3>
                <h4>You answered correclty at ${sorce}/${database.length} questions.</h4>
                <button type="button" class="btn" ondblclick="window.location.reload()">Double Clike to Reoad</button>
            `;
        }


    }else{
        window.alert("Choose One answer");
    }


});

function removeselected(){

    getinputs.forEach(function(getinput){

        return getinput.checked = false;

    });
}








    










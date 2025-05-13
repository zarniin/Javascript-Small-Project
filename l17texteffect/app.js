// Get UI 
const languages = ["Nodejs","Reactjs","Vuejs","Laravel"];
const colors = ["red","skyblue","violet","yellow"];
const gettxtani = document.querySelector('.txtan');
const gettxtlights = document.querySelectorAll('.text-light');// NodeList

// console.log(languages);
// console.log(languages[0]);// give index take value 

// console.log(languages.indexOf("Reactjs"));// give value take index 1
// console.log(languages.indexOf("laravel"));// give value take index -1
// console.log(languages.indexOf("Laravel"));// give value take index 3

// console.log(colors[languages.indexOf('Reactjs')]);// skyblue
// console.log(colors[languages.indexOf('Vuejs')]);// violet

// return 0 to 3 
function* generator(){
    var idx = 0;

    while(true){
        yield idx++;

        if(idx > 3){
            idx = 0;
        }
    }

}

const genfun = generator();
// console.log(genfun.next());// {value: 0, done: false}
// console.log(genfun.next().value);// 0       0
// console.log(genfun.next().value);// 1       1
// console.log(genfun.next().value);// 2       2
// console.log(genfun.next().value);// 3       3
// console.log(genfun.next().value);// 4       0
// console.log(genfun.next().value);// 5       1

// console.log(languages[genfun.next().value]);// Nodejs
// console.log(languages[genfun.next().value]);// Reactjs
// console.log(languages[genfun.next().value]);// Vuejs
// console.log(languages[genfun.next().value]);// Laravel
// console.log(languages[genfun.next().value]);// Nodejs
// console.log(languages[genfun.next().value]);// Reactjs

function showwords(word){
    // console.log(word); // Nodejs
    // console.log(word[0]); // N 

    let x = 0;

    gettxtani.innerHTML = "";
    gettxtani.classList.add(colors[languages.indexOf(word)]);

    // gettxtani.innerHTML = word;
    // gettxtani.innerHTML = word[0]; // N 
    // gettxtani.innerHTML += word[1];// No
    // gettxtani.innerHTML += word[2];// Nod

    let showinterval = setInterval(function(){

        if(x >= word.length){
            clearInterval(showinterval);
            deleteword();
        }else{
            gettxtani.innerHTML += word[x];
            x++;
        }
        
    },500);



}

function deleteword(){

    var getword = gettxtani.innerHTML;
    // console.log(getword);

    var getlastid = gettxtani.innerHTML.length-1;// 6 -1 // 5
    // console.log(getlastid);// 5

    // Nodejs 0 1 2 3 4 5
    // Nodej  0 1 2 3 4
    // Node   0 1 2 3
    // Nod    0 1 2 
    // No     0 1
    // N      0

    let delinterval = setInterval(function(){

        if(getlastid >= 0){
           
            gettxtani.innerHTML = gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length-1);
            getlastid--;

        }else{
            // remove old color 
            gettxtani.classList.remove(colors[languages.indexOf(getword)]);

            // get new languages 
            showwords(languages[genfun.next().value]);
            clearInterval(delinterval);
        }
        
    },500);

}

showwords(languages[genfun.next().value]);// showwords("Nodejs");

gettxtlights.forEach(function(gettxtlight,idx){
    // console.log(gettxtlight);

    let arrtexts = gettxtlight.innerHTML.split("");
    console.log(arrtexts);

    gettxtlight.innerHTML = "";

    arrtexts.forEach(function(arrtext,idx){
        // console.log(arrtext);
        // console.log(idx);

        let newem = document.createElement("em");

        newem.textContent = arrtext;
        // console.log(newem);

        newem.style.animationDelay = `${idx * 0.5}s`;

        gettxtlight.append(newem);
    });


});










    











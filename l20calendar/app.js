// Get UI 
const getcurmonth = document.getElementById('curmonths');
const getcuryear = document.getElementById('curyears');
const getuimonths = document.getElementById('months');
const getuiyears = document.getElementById('years');
const getcaldays = document.getElementById('caldays');
const getyearbtn = document.querySelector('.year-btn');
const getmonthbtn = document.querySelector('.month-btn');

const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
let startyears = 2020;
let endyears = 2030;

let month,year;

window.addEventListener('load',function(){

    // console.log('i am working');

    let getday = new Date();
    month = getday.getMonth();
    year = getday.getFullYear();
    // console.log(getday);// Thu May 22 2025 22:44:09 GMT+0630 (Myanmar Time)
    // console.log(month);// 4
    // console.log(year);//2025

    getcurmonth.textContent = months[month];
    getcuryear.textContent = year;

    initmonths();
    inityears();
    initdays();

});

function initmonths(){
    // console.log('i am months');

    getuimonths.innerHTML = "";

    // <div class="dropdown-item">Jan</div>

    for(let x = 0; x < months.length;x++){
        // console.log(x);// 0 to 11

        const newdiv = document.createElement('div');
        newdiv.textContent = months[x];
        newdiv.classList.add('dropdown-item');

        // Method 1 
        // newdiv.addEventListener('click',function(){
        //     // console.log(this);
        //     // console.log(this.textContent);
        //     // getcurmonth.textContent = this.textContent;

        //     // Method 1
        //     // console.log(x);// current month index 
        //     // getcurmonth.textContent = months[x];
        //     // initdays();

        //     // Method 2
        //     month = months.indexOf(this.textContent); // Jun Feb Mar
        //     getcurmonth.textContent = months[month];// Value to Index  (eg: Feb to Index 1) 
        //     initdays();           

        // });

        // Method 2 
        // newdiv.onclick = updatedays(x);
        newdiv.onclick = updatedaysbymonths(x);

        // console.log(newdiv);

        getuimonths.appendChild(newdiv);
    }

}

// Methd 2 (month) Pro Max
function updatedaysbymonths(idx){
    // console.log(idx);// 0 to 11

    let selectmonth = idx;
    // console.log(selectyear);

    return function(){
        month = selectmonth;
        // console.log(year);

        getcurmonth.textContent = months[month]; // x (or) month
        initdays();
    }
}

function inityears(){
    // console.log('i am years');

    getuiyears.innerHTML = "";

    // <div class="dropdown-item">Jan</div>

    for(let y = startyears; y <= endyears;y++){
        // console.log(y); // 2000 to 2030

        // <div class="dropdown-item">2000</div>

        const newdiv = document.createElement('div');
        newdiv.textContent = y;
        newdiv.classList.add('dropdown-item');

        // Method 1 (year) Normal Max
        // newdiv.addEventListener('click',function(){
        //     // console.log(this);
        //     // console.log(this.textContent);
        //     // getcurmonth.textContent = this.textContent;

        //     // Method 1
        //     // console.log(y);// 2000...2030
        //     // year = y;
        //     // getcuryear.textContent = year;
        //     // initdays();

        //     // Method 2
        //     // console.log(this);
        //     // console.log(this.textContent);
        //     year = this.textContent;   
        //     getcuryear.textContent = year;
        //     initdays(); 

        // });

        // Method 2 
        // newdiv.onclick = updatedaysbyyears(y);

        // Method 3 (year) Pro Max
        // newdiv.onclick = () => {
        //     // console.log(y);
        //     year = y;
        //     getcuryear.textContent = year;
        //     initdays();
        // }

        // Method 4 (or) Metod 2
        // self invoking function 
        newdiv.onclick = (function(){
            // console.log(y);

            let selectyear = y;
            // console.log(selectyear);

            return function(){
                year = selectyear;

                getcuryear.textContent = year;
                initdays();
            };


        })();

        // console.log(newdiv);

        getuiyears.appendChild(newdiv);
    }

}

// Method 2 (year) Pro Max
// function updatedaysbyyears(idx){
//     // console.log(idx);// 2020...2030

//     let selectyear = idx;
//     // console.log(selectyear);

//     return function(){
//         year = selectyear;
//         // console.log(year);

//         getcuryear.textContent = year;
//         initdays();
//     }
// }

function initdays(){
    // console.log('i am days');

    getcaldays.innerHTML = "";

                            // 2025 4
    let tmpdays = new Date(year,month,0);// Wed Apr 30 2025 00:00:00 GMT+0630 (Myanmar Time)
        // console.log(tmpdays);
    let getalldays = alldays(year,month);
        // console.log(getalldays);// 31
    let getpreenddays = tmpdays.getDay();
        // console.log(getpreenddays);// 3

    for(let x = 0; x <= getpreenddays;x++){
        // console.log(x);// 3

        // <label class="day"></label>

        const newlabel = document.createElement('label');
        newlabel.className = "day blank";

        // console.log(newlabel);

        getcaldays.appendChild(newlabel);

    }

    for(let y = 0; y < getalldays;y++){
        // console.log(y);// 0 to 30 

        let eachday = y+1;

        // <label class="day">1</label>

        const newlabel = document.createElement('label');
        newlabel.textContent = eachday;
        newlabel.className = "day";

        // console.log(newlabel);

        getcaldays.appendChild(newlabel);

    }

    
}

function alldays(year,month){
    // console.log(year,month);// 2025 4

    let curalldays = new Date(year,month+1,0);
        // console.log(curalldays);// Sat May 31 2025 00:00:00 GMT+0630 (Myanmar Time)
    curalldays = curalldays.getDate();
        // console.log(curalldays);// 31
    return curalldays;


}

// getmonthbtn.addEventListener('click',function(){
//     if(this.lastElementChild.classList.contains('show')){
//         this.lastElementChild.classList.remove('show')
//     }else{
//         this.lastElementChild.classList.add('show')
//     }
// });

getyearbtn.addEventListener('click',function(){
    if(this.lastElementChild.classList.contains('show')){
        this.lastElementChild.classList.remove('show')
    }else{
        this.lastElementChild.classList.add('show')
    }
});

// console.log(new Date());// Wed May 21 2025 23:36:19 GMT+0630 (Myanmar Time)
//                 // year / month / day 
// console.log(new Date(2023,1,10));// Fri Feb 10 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,0,0));// Sat Dec 31 2022 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,5,0));// Wed May 31 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,1,30));// Thu Mar 02 2023 00:00:00 GMT+0630 (Myanmar Time)




















    










